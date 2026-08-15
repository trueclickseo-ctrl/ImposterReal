const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, 'out');
const publicDir = path.join(projectRoot, 'public');

if (!fs.existsSync(outDir)) {
  console.log("Error: 'out/' directory does not exist. Run 'npm run build' first.");
  process.exit(1);
}

console.log("Starting comprehensive sitewide crawl & link verification in out/...");

// Helper to recursively collect all HTML files in out/
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
console.log(`Found ${htmlFiles.length} static HTML pages to audit.`);

let brokenLinks = [];
let missingImages = [];
let checkedUrls = 0;

// Helper to verify if an internal URL resolves to a file in out/ or public/
function resolveInternalUrl(targetUrl, sourceFile) {
  if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://') || targetUrl.startsWith('mailto:') || targetUrl.startsWith('#') || targetUrl.startsWith('javascript:')) {
    return true; // Ignore external/mailto/anchor
  }

  // Strip query string and hash
  let rawUrl = targetUrl.split('?')[0].split('#')[0];
  if (!rawUrl) return true;

  // Decode URI encoding (e.g. %5Blang%5D -> [lang])
  let cleanUrl = decodeURIComponent(rawUrl);

  // Handle absolute path starting with /
  let relativePath = cleanUrl.startsWith('/') ? cleanUrl.slice(1) : cleanUrl;
  
  if (!relativePath) {
    // Root URL / -> out/index.html
    return fs.existsSync(path.join(outDir, 'index.html'));
  }

  // 1. Direct file check in out/ or public/
  const fileInOut = path.join(outDir, relativePath);
  const fileInPublic = path.join(publicDir, relativePath);
  if (fs.existsSync(fileInOut) && fs.statSync(fileInOut).isFile()) return true;
  if (fs.existsSync(fileInPublic) && fs.statSync(fileInPublic).isFile()) return true;

  // 2. Directory index check in out/ (e.g. out/blog/index.html)
  const dirIndexInOut = path.join(outDir, relativePath, 'index.html');
  if (fs.existsSync(dirIndexInOut)) return true;

  // 3. Trim trailing slash or add .html
  const htmlFileInOut = path.join(outDir, relativePath.replace(/\/$/, '') + '.html');
  if (fs.existsSync(htmlFileInOut)) return true;

  return false;
}

// Regex for href and src/srcset attributes
const hrefRegex = /href=["']([^"']+)["']/g;
const srcRegex = /src=["']([^"']+)["']/g;

for (const filePath of htmlFiles) {
  const relPath = path.relative(outDir, filePath);
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  // Audit href links
  let match;
  while ((match = hrefRegex.exec(htmlContent)) !== null) {
    const url = match[1];
    checkedUrls++;
    if (!resolveInternalUrl(url, filePath)) {
      brokenLinks.push({ source: relPath, target: url });
    }
  }

  // Audit img src links
  while ((match = srcRegex.exec(htmlContent)) !== null) {
    const url = match[1];
    checkedUrls++;
    if (url.startsWith('/images/') || url.startsWith('/')) {
      if (!resolveInternalUrl(url, filePath)) {
        missingImages.push({ source: relPath, target: url });
      }
    }
  }
}

console.log(`\nAudit Complete: Checked ${checkedUrls} link/asset references across ${htmlFiles.length} HTML pages.`);

let failure = false;

if (brokenLinks.length > 0) {
  console.error(`\n❌ BROKEN INTERNAL LINKS FOUND (${brokenLinks.length}):`);
  brokenLinks.slice(0, 25).forEach(b => console.error(`  [${b.source}] -> ${b.target}`));
  if (brokenLinks.length > 25) console.error(`  ... and ${brokenLinks.length - 25} more`);
  failure = true;
} else {
  console.log("✅ Zero broken internal links found.");
}

if (missingImages.length > 0) {
  console.error(`\n❌ MISSING IMAGE / ASSET REFERENCES FOUND (${missingImages.length}):`);
  missingImages.slice(0, 25).forEach(m => console.error(`  [${m.source}] -> ${m.target}`));
  if (missingImages.length > 25) console.error(`  ... and ${missingImages.length - 25} more`);
  failure = true;
} else {
  console.log("✅ Zero missing image or asset references found.");
}

if (failure) {
  process.exit(1);
} else {
  console.log("\n🎉 ALL CRAWL TESTS PASSED CLEANLY WITH ZERO BROKEN LINKS OR MISSING ASSETS!");
  process.exit(0);
}
