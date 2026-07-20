const fs = require('fs');
const path = require('path');

console.log('🔍 Running Imposter SEO & Schema CI Linter...');

const appDir = path.join(__dirname, '..', 'src', 'app');
let errors = 0;
let warnings = 0;
let checkedPages = 0;

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (file === 'page.tsx') {
      checkedPages++;
      const content = fs.readFileSync(fullPath, 'utf8');

      // Check for title / metadata export or SEOHead usage
      if (!content.includes('metadata') && !content.includes('SEOHead') && !content.includes('title')) {
        console.error(`❌ [SEO Lint Error] Missing metadata or SEOHead in ${fullPath}`);
        errors++;
      } else {
        console.log(`✅ [SEO Pass] ${path.relative(appDir, fullPath)}`);
      }
    }
  }
}

scanDirectory(appDir);

console.log(`\n📊 SEO Lint Results: ${checkedPages} pages checked, ${errors} errors, ${warnings} warnings.`);

if (errors > 0) {
  console.error('💥 CI SEO Lint Failed! Please fix missing metadata or schemas before building.');
  process.exit(1);
} else {
  console.log('🚀 CI SEO Lint Passed successfully!');
  process.exit(0);
}
