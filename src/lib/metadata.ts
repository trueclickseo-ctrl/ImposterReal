import type { Metadata } from 'next';
import { LOCALES, SupportedLocale } from './i18n';

export function getHreflangAlternates(unprefixedPath: string) {
  const baseUrl = "https://imposterland.com";
  const cleanPath = unprefixedPath === "/" || unprefixedPath === "" ? "" : (unprefixedPath.startsWith("/") ? unprefixedPath : `/${unprefixedPath}`);

  const alternates: Record<string, string> = {
    'x-default': `${baseUrl}${cleanPath}/`,
    'en': `${baseUrl}/en${cleanPath}/`,
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

  // Extract unprefixed path for hreflang calculation
  let unprefixed = cleanPath;
  if (cleanPath === "/en" || cleanPath === `/${locale}`) {
    unprefixed = "";
  } else if (cleanPath.startsWith("/en/")) {
    unprefixed = cleanPath.slice(3);
  } else if (cleanPath.startsWith(`/${locale}/`)) {
    unprefixed = cleanPath.slice(locale.length + 1);
  } else {
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

  // Self-referencing canonical tag for every URL
  const canonical = `${baseUrl}${cleanPath}${cleanPath.endsWith("/") || cleanPath === "" ? "" : "/"}`;

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
