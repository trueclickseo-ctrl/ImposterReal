import type { Metadata } from 'next';
import { LOCALES, SupportedLocale } from './i18n';

export function getHreflangAlternates(unprefixedPath: string) {
  const baseUrl = "https://imposterland.com";
  const cleanPath = unprefixedPath === "/" || unprefixedPath === "" ? "" : (unprefixedPath.startsWith("/") ? unprefixedPath : `/${unprefixedPath}`);
  
  const alternates: Record<string, string> = {
    'x-default': `${baseUrl}${cleanPath}/`,
  };

  LOCALES.forEach(loc => {
    alternates[loc.code] = `${baseUrl}/${loc.code}${cleanPath}/`;
  });

  return alternates;
}

export function getPageMetadata(path: string, title: string, description: string, locale: SupportedLocale = 'en'): Metadata {
  const baseUrl = "https://imposterland.com";
  const cleanPath = path === "/" ? "" : (path.startsWith("/") ? path : `/${path}`);
  const canonical = `${baseUrl}${cleanPath}${cleanPath.endsWith("/") ? "" : "/"}`;

  // Extract unprefixed path for hreflang calculation if path starts with locale
  let unprefixed = cleanPath;
  if (path.startsWith(`/${locale}`)) {
    unprefixed = cleanPath.slice(locale.length + 1) || "";
  }

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

