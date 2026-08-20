import { Metadata } from "next";
import { LOCALES, SupportedLocale, DICTIONARIES } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import HomePage from "@/app/page";

export function generateStaticParams() {
  return LOCALES.map((loc) => ({ lang: loc.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (LOCALES.some((l) => l.code === lang) ? lang : "en") as SupportedLocale;
  const dict = DICTIONARIES[locale] || DICTIONARIES["en"];

  return getPageMetadata(
    `/${locale}`,
    dict.siteTitle || "Imposter | Free Online Social Deduction Party Game",
    dict.siteSubtitle || "Play Imposter free in your browser — no download needed. Custom rooms & 1,000+ categories.",
    locale
  );
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
