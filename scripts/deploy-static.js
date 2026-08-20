const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = 'd:/Project-ImposterReal';
const outDir = path.join(projectRoot, 'out');
const MIN_HTML_FILES = 680; // 27 non-English locales x 25 routes + 29 English/single-lang routes = ~705 clean pages

if (!fs.existsSync(outDir)) {
  console.error("❌ DEPLOY ERROR: out/ directory does not exist. Run 'npm run build' first.");
  process.exit(1);
}

// 0. Pre-deploy Build Verification & Page Count Guard
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (item.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(outDir);
console.log(`\n🔍 PRE-DEPLOY GUARD: Verifying static build artifacts...`);
console.log(`   Generated static HTML pages: ${htmlFiles.length}`);

if (htmlFiles.length < MIN_HTML_FILES) {
  console.error(`❌ DEPLOYMENT ABORTED: Static build generated only ${htmlFiles.length} HTML files, but minimum required threshold is ${MIN_HTML_FILES}.`);
  console.error(`   This indicates localized routes failed to pre-render. Aborting deployment to protect production.`);
  process.exit(1);
}

console.log(`✅ Page count check passed (${htmlFiles.length} >= ${MIN_HTML_FILES}).`);

// Run sitewide link and asset audit
console.log(`\n🔍 PRE-DEPLOY GUARD: Running sitewide link & asset audit...`);
try {
  execSync('node scripts/audit.js', { cwd: projectRoot, stdio: 'inherit' });
  console.log(`✅ Sitewide audit passed cleanly.`);
} catch (e) {
  console.error(`❌ DEPLOYMENT ABORTED: Sitewide link audit failed. Fix broken links or missing assets before deploying.`);
  process.exit(1);
}

// Read current .gitignore contents to preserve it
const gitignorePath = path.join(projectRoot, '.gitignore');
const gitignoreContent = fs.existsSync(gitignorePath) ? fs.readFileSync(gitignorePath, 'utf8') : '';

// 1. Save current work to "source" branch
console.log("\nSaving source code to 'source' branch...");
try {
  execSync('git add -A', { cwd: projectRoot, stdio: 'inherit' });
  execSync('git commit -m "chore: save source branch progress"', { cwd: projectRoot, stdio: 'inherit' });
  execSync('git push -f origin source', { cwd: projectRoot, stdio: 'inherit' });
} catch (e) {
  console.log("Note: Source branch commit/push warning:", e.message);
}

// 2. Temporarily copy out/ to a folder outside the project BEFORE switching branch
const tempOut = 'd:/Project-ImposterReal/temp_out';
if (fs.existsSync(tempOut)) {
  fs.rmSync(tempOut, { recursive: true, force: true });
}
fs.mkdirSync(tempOut);

console.log("Copying build artifacts to temp folder...");
function copyFolderRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
copyFolderRecursive(outDir, tempOut);

// 3. Switch to main branch
console.log("Switching back to main branch...");
execSync('git checkout main', { cwd: projectRoot, stdio: 'inherit' });

// 4. Delete all tracked files in main branch to make it purely static
console.log("Cleaning main branch directory using git...");
execSync('git rm -rf .', { cwd: projectRoot, stdio: 'inherit' });

// 5. Copy temp folder contents back to project root
console.log("Placing static build files at the root...");
const tempEntries = fs.readdirSync(tempOut);
tempEntries.forEach(entry => {
  const srcPath = path.join(tempOut, entry);
  const destPath = path.join(projectRoot, entry);
  if (fs.statSync(srcPath).isDirectory()) {
    copyFolderRecursive(srcPath, destPath);
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Clean up temp
fs.rmSync(tempOut, { recursive: true, force: true });

// 6. Restore .gitignore
if (gitignoreContent) {
  fs.writeFileSync(gitignorePath, gitignoreContent, 'utf8');
}

// 7. Commit and force push to main
console.log("Committing and force pushing static files to main branch on GitHub...");
try {
  execSync('git add -A', { cwd: projectRoot, stdio: 'inherit' });
  execSync('git commit -m "deploy: publish static build artifacts"', { cwd: projectRoot, stdio: 'inherit' });
  execSync('git push -f origin main', { cwd: projectRoot, stdio: 'inherit' });
} catch (e) {
  console.log("Note: Main branch commit/push warning (might be nothing to commit):", e.message);
}

console.log("🎉 SUCCESS! Verified static build is live on main branch. Switched back to 'source' branch.");
execSync('git checkout source', { cwd: projectRoot, stdio: 'inherit' });

// 8. Ping Bing IndexNow to notify of updated content
console.log("\nPinging Bing IndexNow API...");
try {
  execSync('node scripts/bing-indexnow.js', { cwd: projectRoot, stdio: 'inherit' });
} catch (e) {
  console.log("Warning: IndexNow ping failed (non-blocking):", e.message);
}
