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

const MULTI_LANG_PAGES = [
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

const SINGLE_LANG_PAGES = [
  { path: '/blog/dmitry-davidoff', lang: 'en', url: 'https://imposterland.com/blog/dmitry-davidoff/' },
  { path: '/blog/what-does-imposter-mean', lang: 'en', url: 'https://imposterland.com/blog/what-does-imposter-mean/' },
  { path: '/blog/what-is-social-deduction', lang: 'en', url: 'https://imposterland.com/blog/what-is-social-deduction/' },
  { path: '/de/imposter-deutsch', lang: 'de', url: 'https://imposterland.com/de/imposter-deutsch/' },
];

const baseUrl = 'https://imposterland.com';
const today = new Date().toISOString().split('T')[0];

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

const getMultiLangHreflangXml = (page) => {
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

// 1. Unprefixed Multi-language URLs (English Default)
for (const page of MULTI_LANG_PAGES) {
  const locUrl = page === '' ? `${baseUrl}/` : `${baseUrl}${page}/`;
  xmlContent += `  <url>\n`;
  xmlContent += `    <loc>${locUrl}</loc>\n`;
  xmlContent += `    <lastmod>${today}</lastmod>\n`;
  xmlContent += `    <changefreq>daily</changefreq>\n`;
  xmlContent += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
  xmlContent += getMultiLangHreflangXml(page);
  xmlContent += `  </url>\n`;
}

// 2. Localized Multi-language URLs (Non-English)
for (const code of LOCALES) {
  if (code === 'en') continue;
  for (const page of MULTI_LANG_PAGES) {
    const locUrl = `${baseUrl}/${code}${page}/`;
    xmlContent += `  <url>\n`;
    xmlContent += `    <loc>${locUrl}</loc>\n`;
    xmlContent += `    <lastmod>${today}</lastmod>\n`;
    xmlContent += `    <changefreq>daily</changefreq>\n`;
    xmlContent += `    <priority>${page === '' ? '0.9' : '0.7'}</priority>\n`;
    xmlContent += getMultiLangHreflangXml(page);
    xmlContent += `  </url>\n`;
  }
}

// 3. Single-language Pages
for (const item of SINGLE_LANG_PAGES) {
  xmlContent += `  <url>\n`;
  xmlContent += `    <loc>${item.url}</loc>\n`;
  xmlContent += `    <lastmod>${today}</lastmod>\n`;
  xmlContent += `    <changefreq>daily</changefreq>\n`;
  xmlContent += `    <priority>0.8</priority>\n`;
  xmlContent += `    <xhtml:link rel="alternate" hreflang="x-default" href="${item.url}" />\n`;
  xmlContent += `    <xhtml:link rel="alternate" hreflang="${item.lang}" href="${item.url}" />\n`;
  xmlContent += `  </url>\n`;
}

xmlContent += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xmlContent, 'utf-8');
if (fs.existsSync(path.dirname(publicSitemapPath))) {
  fs.writeFileSync(publicSitemapPath, xmlContent, 'utf-8');
}

console.log(`Successfully generated clean sitemap.xml!`);
