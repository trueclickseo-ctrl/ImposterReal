import { test, expect, chromium } from '@playwright/test';

test.describe('Firebase Multiplayer & Security Rules Test Suite', () => {
  
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => console.log(`BROWSER LOG: [${msg.type()}] ${msg.text()}`));
    page.on('pageerror', err => console.log(`BROWSER EXCEPTION: ${err.message}`));
  });

  test('1. Room Creation, Joining, and State Synchronization', async ({ page }) => {
    // 1. Host creates a room
    await page.goto('/play/');
    
    // Wait for room to be created and code to appear
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();
    expect(roomCode).toMatch(/^IMP-[A-Z0-9]{6}$/);

    // 2. Client joins the room
    const browser = await chromium.launch();
    const clientContext = await browser.newContext();
    const clientPage = await clientContext.newPage();
    
    await clientPage.goto(`/play/?room=${roomCode}`);
    await clientPage.fill('input[placeholder="Enter your name..."]', 'Alice');
    await clientPage.click('button:has-text("Join Game Room")');

    // 3. Verify join propagates to Host screen
    await expect(page.locator('span:has-text("👤 Alice")')).toBeVisible();
    
    await browser.close();
  });

  test('2. Write Scoping - Non-Host writes to status are rejected', async ({ page }) => {
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();

    const browser = await chromium.launch();
    const clientContext = await browser.newContext();
    const clientPage = await clientContext.newPage();
    await clientPage.goto(`/play/?room=${roomCode}`);

    // Wait for client auth
    await clientPage.waitForFunction(() => (window as any).firebaseDb !== undefined);

    // Attempt illegal write to room status
    const errorMsg = await clientPage.evaluate(async (code) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const set = (window as any).firebaseSet;
      try {
        await set(ref(db, `rooms/${code}/status`), 'discussion');
        return 'success';
      } catch (err: any) {
        return err.message;
      }
    }, roomCode);

    expect(errorMsg).toContain('PERMISSION_DENIED');
    await browser.close();
  });

  test('3. Privilege Escalation - Self-Promotion to Host is rejected', async ({ page }) => {
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();

    const browser = await chromium.launch();
    const clientContext = await browser.newContext();
    const clientPage = await clientContext.newPage();
    await clientPage.goto(`/play/?room=${roomCode}`);
    await clientPage.waitForFunction(() => (window as any).firebaseAuth?.currentUser !== null);

    const clientUid = await clientPage.evaluate(() => (window as any).firebaseAuth.currentUser.uid);

    // Attempt to escalate to Host status
    const errorMsg = await clientPage.evaluate(async ({ code, uid }) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const set = (window as any).firebaseSet;
      try {
        await set(ref(db, `rooms/${code}/players/${uid}/isHost`), true);
        return 'success';
      } catch (err: any) {
        return err.message;
      }
    }, { code: roomCode, uid: clientUid });

    expect(errorMsg).toContain('PERMISSION_DENIED');
    await browser.close();
  });

  test('4. Player Isolation - Modifying other players slots is rejected', async ({ page }) => {
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();
    await page.waitForFunction(() => (window as any).firebaseAuth?.currentUser !== null);
    const hostUid = await page.evaluate(() => (window as any).firebaseAuth.currentUser.uid);

    const browser = await chromium.launch();
    const clientContext = await browser.newContext();
    const clientPage = await clientContext.newPage();
    await clientPage.goto(`/play/?room=${roomCode}`);
    await clientPage.waitForFunction(() => (window as any).firebaseDb !== undefined);

    // Client attempts to overwrite Host player slot name
    const errorMsg = await clientPage.evaluate(async ({ code, hostId }) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const set = (window as any).firebaseSet;
      try {
        await set(ref(db, `rooms/${code}/players/${hostId}/name`), 'Cheater');
        return 'success';
      } catch (err: any) {
        return err.message;
      }
    }, { code: roomCode, hostId: hostUid });

    expect(errorMsg).toContain('PERMISSION_DENIED');
    await browser.close();
  });

  test('5. Player Score Lock - Directly modifying own score is rejected', async ({ page }) => {
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();

    const browser = await chromium.launch();
    const clientContext = await browser.newContext();
    const clientPage = await clientContext.newPage();
    await clientPage.goto(`/play/?room=${roomCode}`);
    await clientPage.fill('input[placeholder="Enter your name..."]', 'Alice');
    await clientPage.click('button:has-text("Join Game Room")');

    await clientPage.waitForFunction(() => (window as any).firebaseAuth?.currentUser !== null);
    const clientUid = await clientPage.evaluate(() => (window as any).firebaseAuth.currentUser.uid);

    // Client attempts to set score: 5
    const errorMsg = await clientPage.evaluate(async ({ code, uid }) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const set = (window as any).firebaseSet;
      try {
        await set(ref(db, `rooms/${code}/players/${uid}/score`), 5);
        return 'success';
      } catch (err: any) {
        return err.message;
      }
    }, { code: roomCode, uid: clientUid });

    expect(errorMsg).toContain('PERMISSION_DENIED');
    await browser.close();
  });

  test('6. Rigged Join Score - Initializing score to non-zero values is rejected', async ({ page }) => {
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();

    const browser = await chromium.launch();
    const clientContext = await browser.newContext();
    const clientPage = await clientContext.newPage();
    await clientPage.goto(`/play/?room=${roomCode}`);
    await clientPage.waitForFunction(() => (window as any).firebaseAuth?.currentUser !== null);
    const clientUid = await clientPage.evaluate(() => (window as any).firebaseAuth.currentUser.uid);

    // Client attempts to join by setting score to 10
    const errorMsg = await clientPage.evaluate(async ({ code, uid }) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const set = (window as any).firebaseSet;
      try {
        await set(ref(db, `rooms/${code}/players/${uid}`), {
          id: uid,
          name: 'RiggedAlice',
          isHost: false,
          isConnected: true,
          score: 10
        });
        return 'success';
      } catch (err: any) {
        return err.message;
      }
    }, { code: roomCode, uid: clientUid });

    expect(errorMsg).toContain('PERMISSION_DENIED');
    await browser.close();
  });

  test('7. Stale Room Cleanup - Client sweeping of backdated rooms', async ({ page }) => {
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();

    // Set updatedAt to 2 hours ago
    await page.evaluate(async (code) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const update = (window as any).firebaseUpdate;
      await update(ref(db, `rooms/${code}`), {
        updatedAt: Date.now() - 2 * 3600 * 1000
      });
    }, roomCode);

    const roomStateBefore = await page.evaluate(async (code) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const get = (window as any).firebaseGet;
      const snap = await get(ref(db, `rooms/${code}`));
      return snap.val();
    }, roomCode);
    console.log("TEST 7 ROOM STATE BEFORE RELOAD:", JSON.stringify(roomStateBefore));

    // Refresh page to trigger client cleanup
    await page.reload();

    // Use expect.poll to wait for cleanup sweep to successfully delete room
    await expect.poll(async () => {
      return await page.evaluate(async (code) => {
        const db = (window as any).firebaseDb;
        const ref = (window as any).firebaseRef;
        const get = (window as any).firebaseGet;
        const snap = await get(ref(db, `rooms/${code}`));
        return !snap.exists();
      }, roomCode);
    }, { timeout: 10000 }).toBe(true);
  });

  test('8. Session Reconnection Flow', async ({ page }) => {
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();

    const browser = await chromium.launch();
    const clientContext = await browser.newContext();
    const clientPage = await clientContext.newPage();
    
    await clientPage.goto(`/play/?room=${roomCode}`);
    await clientPage.fill('input[placeholder="Enter your name..."]', 'Reconnector');
    await clientPage.click('button:has-text("Join Game Room")');

    // Verify online in Host list
    await expect(page.locator('span:has-text("👤 Reconnector")')).toBeVisible();

    // Navigate client page to about:blank to trigger disconnect on server
    await clientPage.goto('about:blank');

    // Verify Host screen shows disconnected label
    await expect(page.locator('span:has-text("👤 Reconnector (Disconnected)")')).toBeVisible();

    // Navigate back to room URL to trigger reconnect
    await clientPage.goto(`/play/?room=${roomCode}`);

    // Verify reconnected back to slot (disconnected label disappears)
    await expect(page.locator('span:has-text("👤 Reconnector")')).toBeVisible();

    await browser.close();
  });

  test('9. Role Hiding Verification - Civilian can read secret word but Imposter gets permission denied', async ({ page }) => {
    // 1. Host creates a room
    await page.goto('/play/');
    await expect(page.locator('span:has-text("ROOM:")')).toBeVisible();
    const roomText = await page.locator('span:has-text("ROOM:")').textContent();
    const roomCode = roomText?.replace('ROOM:', '').trim();

    // Wait for Host Auth
    await page.waitForFunction(() => (window as any).firebaseAuth?.currentUser !== null);
    const hostUid = await page.evaluate(() => (window as any).firebaseAuth.currentUser.uid);

    // 2. Set up two clients (Civilian and Imposter)
    const browser = await chromium.launch();
    
    // Civilian context
    const civContext = await browser.newContext();
    const civPage = await civContext.newPage();
    await civPage.goto(`/play/?room=${roomCode}`);
    await civPage.waitForFunction(() => (window as any).firebaseAuth?.currentUser !== null);
    const civUid = await civPage.evaluate(() => (window as any).firebaseAuth.currentUser.uid);

    // Imposter context
    const impContext = await browser.newContext();
    const impPage = await impContext.newPage();
    await impPage.goto(`/play/?room=${roomCode}`);
    await impPage.waitForFunction(() => (window as any).firebaseAuth?.currentUser !== null);
    const impUid = await impPage.evaluate(() => (window as any).firebaseAuth.currentUser.uid);

    // 3. Host sets up room secrets:
    // - civilian role for civUid
    // - imposter role for impUid
    // - secretWord to 'TargetWord'
    await page.evaluate(async ({ code, civId, impId }) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const set = (window as any).firebaseSet;
      
      // Write roles and secret word
      await set(ref(db, `roomSecrets/${code}/playerRoles/${civId}`), 'civilian');
      await set(ref(db, `roomSecrets/${code}/playerRoles/${impId}`), 'imposter');
      await set(ref(db, `roomSecrets/${code}/secretWord`), 'TargetWord');
    }, { code: roomCode, civId: civUid, impId: impUid });

    // 4. Civilian attempts to read secret word (should succeed)
    const civWord = await civPage.evaluate(async (code) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const get = (window as any).firebaseGet;
      try {
        const snap = await get(ref(db, `roomSecrets/${code}/secretWord`));
        return snap.val();
      } catch (err: any) {
        return 'error: ' + err.message;
      }
    }, roomCode);

    expect(civWord).toBe('TargetWord');

    // 5. Imposter attempts to read secret word (should fail)
    const impError = await impPage.evaluate(async (code) => {
      const db = (window as any).firebaseDb;
      const ref = (window as any).firebaseRef;
      const get = (window as any).firebaseGet;
      try {
        await get(ref(db, `roomSecrets/${code}/secretWord`));
        return 'success';
      } catch (err: any) {
        return err.message;
      }
    }, roomCode);

    expect(impError.toLowerCase()).toContain('permission denied');

    await browser.close();
  });
});
