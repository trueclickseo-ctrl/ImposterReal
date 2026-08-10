<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | ImposterLand.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0f172a;
            color: #f8fafc;
            margin: 0;
            padding: 30px 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #1e293b;
            border-radius: 12px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
            padding: 32px;
            border: 1px solid #334155;
          }
          .header {
            margin-bottom: 24px;
            border-bottom: 1px solid #334155;
            padding-bottom: 20px;
          }
          h1 {
            color: #00f0ff;
            font-size: 26px;
            margin: 0 0 8px 0;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          p.desc {
            color: #94a3b8;
            font-size: 14px;
            margin: 0;
          }
          .stats {
            display: inline-block;
            background: #0284c7;
            color: #ffffff;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 13px;
            margin-left: 8px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
            font-size: 14px;
          }
          th {
            background-color: #0f172a;
            color: #38bdf8;
            text-align: left;
            padding: 14px 16px;
            font-weight: 600;
            border-bottom: 2px solid #334155;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.5px;
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #334155;
            color: #e2e8f0;
            word-break: break-all;
          }
          tr:nth-child(even) td {
            background-color: #162032;
          }
          tr:hover td {
            background-color: #1e2e4a;
          }
          a {
            color: #38bdf8;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
            color: #7dd3fc;
          }
          .priority-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            background: #0369a1;
            color: #e0f2fe;
          }
          .freq-tag {
            color: #94a3b8;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>XML Sitemap <span class="stats"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span></h1>
            <p class="desc">Official Indexable XML Sitemap for ImposterLand.com generated for Google Search Console and search engines.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Location URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td><span class="priority-badge"><xsl:value-of select="sitemap:priority"/></span></td>
                  <td><span class="freq-tag"><xsl:value-of select="sitemap:changefreq"/></span></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
