/**
 * Bing IndexNow API Script
 * 
 * Pings Bing (and other IndexNow-supporting search engines) with all
 * site URLs from sitemap.xml for faster indexing.
 * 
 * Usage: node scripts/bing-indexnow.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const INDEXNOW_KEY = '02c1f996e83e4e609a604896e2f9e553';
const HOST = 'imposterland.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// Parse sitemap.xml to extract all <loc> URLs
function extractUrlsFromSitemap(sitemapPath) {
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  // Deduplicate (hreflang links also have URLs)
  return [...new Set(urls)];
}

// Submit URLs to IndexNow API
function submitToIndexNow(urls) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    });

    const url = new URL(INDEXNOW_ENDPOINT);

    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body });
      });
    });

    req.on('error', (err) => reject(err));
    req.write(payload);
    req.end();
  });
}

async function main() {
  // Look for sitemap.xml in multiple locations
  const projectRoot = path.resolve(__dirname, '..');
  const possiblePaths = [
    path.join(projectRoot, 'out', 'sitemap.xml'),
    path.join(projectRoot, 'sitemap.xml'),
    path.join(projectRoot, 'public', 'sitemap.xml'),
  ];

  let sitemapPath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      sitemapPath = p;
      break;
    }
  }

  if (!sitemapPath) {
    console.error('Error: sitemap.xml not found. Run npm run build first.');
    process.exit(1);
  }

  console.log(`Reading sitemap from: ${sitemapPath}`);
  const allUrls = extractUrlsFromSitemap(sitemapPath);

  // Filter to only primary page URLs (not hreflang locale variants)
  const pageUrls = allUrls.filter(
    (url) => url.startsWith(`https://${HOST}`) && !url.match(/\/[a-z]{2}\//) && !url.match(/\/[a-z]{2}-[A-Z]{2}\//)
  );

  console.log(`Found ${pageUrls.length} page URLs to submit:\n`);
  pageUrls.forEach((url) => console.log(`  ${url}`));
  console.log('');

  try {
    console.log('Submitting to IndexNow API...');
    const result = await submitToIndexNow(pageUrls);

    if (result.statusCode === 200 || result.statusCode === 202) {
      console.log(`SUCCESS! IndexNow accepted ${pageUrls.length} URLs (HTTP ${result.statusCode})`);
    } else if (result.statusCode === 204) {
      console.log(`SUCCESS! IndexNow accepted URLs — no content returned (HTTP 204)`);
    } else {
      console.error(`WARNING: IndexNow returned HTTP ${result.statusCode}`);
      if (result.body) console.error(`Response: ${result.body}`);
    }
  } catch (err) {
    console.error('Error submitting to IndexNow:', err.message);
    process.exit(1);
  }
}

main();
