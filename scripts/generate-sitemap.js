const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sitemapPath = path.join(projectRoot, 'sitemap.xml');
const publicSitemapPath = path.join(projectRoot, 'public/sitemap.xml');

const LOCALES = [
  'en', 'de', 'fr', 'es', 'pt', 'it', 'tr', 'nl', 'pl', 'sv', 'ru', 'uk', 
  'el', 'no', 'da', 'fi', 'hu', 'ro', 'cs', 'hr', 'id', 'zh', 'ja', 'ar', 
  'hi', 'ko', 'vi', 'th'
];

const PAGES = [
  '',
  '/play',
  '/encyclopedia',
  '/encyclopedia/history',
  '/encyclopedia/game-logic',
  '/encyclopedia/academic-references',
  '/learn',
  '/learn/rules',
  '/learn/what-is-imposter',
  '/learn/beginner-guide',
  '/learn/advanced-strategy',
  '/learn/scoring-system',
  '/learn/faq',
  '/word-library',
  '/game-modes',
  '/blog',
  '/blog/dmitry-davidoff',
  '/blog/what-does-imposter-mean',
  '/blog/what-is-social-deduction',
  '/resources',
  '/community',
  '/company/about',
  '/company/mission',
  '/company/careers',
  '/company/contact',
  '/company/privacy',
  '/company/terms',
  '/sitemap',
];

const baseUrl = 'https://imposterland.com';
const today = new Date().toISOString().split('T')[0];

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

const getHreflangXml = (page) => {
  const unprefixed = page === '' ? '/' : `${page}/`;
  let links = `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${unprefixed}" />\n`;
  links += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${unprefixed}" />\n`;
  for (const code of LOCALES) {
    if (code !== 'en') {
      links += `    <xhtml:link rel="alternate" hreflang="${code}" href="${baseUrl}/${code}${page}/" />\n`;
    }
  }
  return links;
};

// 1. Unprefixed Default English URLs
for (const page of PAGES) {
  const locUrl = page === '' ? `${baseUrl}/` : `${baseUrl}${page}/`;
  xmlContent += `  <url>\n`;
  xmlContent += `    <loc>${locUrl}</loc>\n`;
  xmlContent += `    <lastmod>${today}</lastmod>\n`;
  xmlContent += `    <changefreq>daily</changefreq>\n`;
  xmlContent += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
  xmlContent += getHreflangXml(page);
  xmlContent += `  </url>\n`;
}

// 2. German imposter-deutsch
xmlContent += `  <url>\n`;
xmlContent += `    <loc>${baseUrl}/de/imposter-deutsch/</loc>\n`;
xmlContent += `    <lastmod>${today}</lastmod>\n`;
xmlContent += `    <changefreq>daily</changefreq>\n`;
xmlContent += `    <priority>0.8</priority>\n`;
xmlContent += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/de/imposter-deutsch/" />\n`;
xmlContent += `    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de/imposter-deutsch/" />\n`;
xmlContent += `  </url>\n`;

// 3. Localized URLs (Non-English)
for (const code of LOCALES) {
  if (code === 'en') continue;
  for (const page of PAGES) {
    const locUrl = `${baseUrl}/${code}${page}/`;
    xmlContent += `  <url>\n`;
    xmlContent += `    <loc>${locUrl}</loc>\n`;
    xmlContent += `    <lastmod>${today}</lastmod>\n`;
    xmlContent += `    <changefreq>daily</changefreq>\n`;
    xmlContent += `    <priority>${page === '' ? '0.9' : '0.7'}</priority>\n`;
    xmlContent += getHreflangXml(page);
    xmlContent += `  </url>\n`;
  }
}

xmlContent += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xmlContent, 'utf-8');
if (fs.existsSync(path.dirname(publicSitemapPath))) {
  fs.writeFileSync(publicSitemapPath, xmlContent, 'utf-8');
}

console.log(`Successfully generated clean sitemap.xml!`);
