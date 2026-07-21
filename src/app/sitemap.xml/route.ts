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
    '/keyword-map',
    '/pr-calendar'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const page of pages) {
    const locUrl = `${baseUrl}${page}`;
    xml += `  <url>\n`;
    xml += `    <loc>${locUrl}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;

    // Add hreflang links for all 14 supported locales
    for (const loc of LOCALES) {
      xml += `    <xhtml:link rel="alternate" hreflang="${loc.code}" href="${baseUrl}/${loc.code}${page}" />\n`;
    }

    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
