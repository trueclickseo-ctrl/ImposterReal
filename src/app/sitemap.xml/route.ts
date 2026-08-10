import { NextResponse } from 'next/server';
import { LOCALES } from '@/lib/i18n';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://imposterland.com';

  const pages = [
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

  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // Helper to generate hreflang cluster for a given page route
  const getHreflangXml = (page: string) => {
    let links = `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page === '' ? '/' : page + '/'}" />\n`;
    for (const loc of LOCALES) {
      links += `    <xhtml:link rel="alternate" hreflang="${loc.code}" href="${baseUrl}/${loc.code}${page}/" />\n`;
    }
    return links;
  };

  // 1. Root Unprefixed URLs
  for (const page of pages) {
    const locUrl = page === '' ? `${baseUrl}/` : `${baseUrl}${page}/`;
    xml += `  <url>\n`;
    xml += `    <loc>${locUrl}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += getHreflangXml(page);
    xml += `  </url>\n`;
  }

  // 2. Localized URLs for all 28 supported languages
  for (const loc of LOCALES) {
    for (const page of pages) {
      const locUrl = `${baseUrl}/${loc.code}${page}/`;
      xml += `  <url>\n`;
      xml += `    <loc>${locUrl}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>${page === '' ? '0.9' : '0.7'}</priority>\n`;
      xml += getHreflangXml(page);
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
