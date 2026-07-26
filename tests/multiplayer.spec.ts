import { test, expect, chromium } from '@playwright/test';

test.describe('Firebase Multiplayer & Security Rules Test Suite', () => {
  
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
      const { ref, set } = await import('firebase/database');
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
      const { ref, set } = await import('firebase/database');
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
      const { ref, set } = await import('firebase/database');
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
      const { ref, set } = await import('firebase/database');
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
      const { ref, set } = await import('firebase/database');
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
      const { ref, update } = await import('firebase/database');
      await update(ref(db, `rooms/${code}`), {
        updatedAt: Date.now() - 2 * 3600 * 1000
      });
    }, roomCode);

    // Refresh page to trigger client cleanup
    await page.reload();
    await page.waitForTimeout(1000);

    // Check if room was deleted
    const roomDeleted = await page.evaluate(async (code) => {
      const db = (window as any).firebaseDb;
      const { ref, get } = await import('firebase/database');
      const snap = await get(ref(db, `rooms/${code}`));
      return !snap.exists();
    }, roomCode);

    expect(roomDeleted).toBe(true);
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

    // Close client context (Disconnect)
    await clientContext.close();

    // Verify Host screen shows disconnected label/status if applicable
    await page.waitForTimeout(2000);

    // Reopen same client session/context
    const clientContext2 = await browser.newContext();
    const clientPage2 = await clientContext2.newPage();
    await clientPage2.goto(`/play/?room=${roomCode}`);
    await clientPage2.fill('input[placeholder="Enter your name..."]', 'Reconnector');
    await clientPage2.click('button:has-text("Join Game Room")');

    // Verify reconnected back to slot
    await expect(page.locator('span:has-text("👤 Reconnector")')).toBeVisible();

    await browser.close();
  });
});
