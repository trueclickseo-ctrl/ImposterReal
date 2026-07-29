import type { Metadata } from 'next';

export function getPageMetadata(path: string, title: string, description: string): Metadata {
  const baseUrl = "https://imposterland.com";
  const cleanPath = path === "/" ? "" : (path.startsWith("/") ? path : `/${path}`);
  const canonical = `${baseUrl}${cleanPath}${cleanPath.endsWith("/") ? "" : "/"}`;
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}
