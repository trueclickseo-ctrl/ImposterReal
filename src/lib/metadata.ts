import type { Metadata } from 'next';
import { LOCALES, SupportedLocale } from './i18n';

export function getHreflangAlternates(unprefixedPath: string) {
  const baseUrl = "https://imposterland.com";
  const cleanPath = unprefixedPath === "/" || unprefixedPath === "" ? "" : (unprefixedPath.startsWith("/") ? unprefixedPath : `/${unprefixedPath}`);
  
  const alternates: Record<string, string> = {
    'x-default': `${baseUrl}${cleanPath}/`,
    'en': `${baseUrl}${cleanPath}/`,
  };

  LOCALES.forEach(loc => {
    if (loc.code !== 'en') {
      alternates[loc.code] = `${baseUrl}/${loc.code}${cleanPath}/`;
    }
  });

  return alternates;
}

export function getPageMetadata(path: string, title: string, description: string, locale: SupportedLocale = 'en'): Metadata {
  const baseUrl = "https://imposterland.com";
  const cleanPath = path === "/" ? "" : (path.startsWith("/") ? path : `/${path}`);
  
  // Extract unprefixed path for canonical and hreflang calculation
  let unprefixed = cleanPath;
  if (cleanPath === "/en" || cleanPath === `/${locale}` && locale === 'en') {
    unprefixed = "";
  } else if (cleanPath.startsWith("/en/")) {
    unprefixed = cleanPath.slice(3);
  } else if (cleanPath.startsWith(`/${locale}/`)) {
    unprefixed = cleanPath.slice(locale.length + 1);
  } else {
    // Check if path starts with any other locale
    for (const loc of LOCALES) {
      if (cleanPath.startsWith(`/${loc.code}/`)) {
        unprefixed = cleanPath.slice(loc.code.length + 1);
        break;
      } else if (cleanPath === `/${loc.code}`) {
        unprefixed = "";
        break;
      }
    }
  }

  // Canonical calculation:
  // If locale is 'en' or path has /en/ prefix, canonical resolves to the unprefixed URL (e.g. /blog/)
  // For non-English locales (e.g. /ar/blog/), canonical is self-referencing (https://imposterland.com/ar/blog/)
  let canonicalPath = cleanPath;
  if (locale === 'en' || cleanPath.startsWith("/en/") || cleanPath === "/en") {
    canonicalPath = unprefixed;
  }

  const canonical = `${baseUrl}${canonicalPath}${canonicalPath.endsWith("/") || canonicalPath === "" ? "" : "/"}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getHreflangAlternates(unprefixed),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "ImposterLand",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
