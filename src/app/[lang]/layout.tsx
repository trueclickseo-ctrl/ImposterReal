import { ReactNode } from "react";
import { LOCALES, SupportedLocale } from "@/lib/i18n";
import { LanguageProvider } from "@/context/LanguageContext";

export function generateStaticParams() {
  return LOCALES.map((loc) => ({ lang: loc.code }));
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.some((l) => l.code === lang) ? lang : "en") as SupportedLocale;

  return (
    <LanguageProvider initialLocale={locale}>
      {children}
    </LanguageProvider>
  );
}
