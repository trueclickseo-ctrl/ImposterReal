"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SupportedLocale, Dictionary, DICTIONARIES, LOCALES } from "@/lib/i18n";

interface LanguageContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: keyof Dictionary) => string;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getLocaleFromPath(pathname: string | null): SupportedLocale | null {
  if (!pathname) return null;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0] as SupportedLocale;
    if (LOCALES.some(l => l.code === firstSegment)) {
      return firstSegment;
    }
  }
  return null;
}

export function LanguageProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale?: SupportedLocale }) {
  const pathname = usePathname();
  const pathLocale = getLocaleFromPath(pathname);
  
  const defaultLocale = initialLocale || pathLocale || "en";
  const [locale, setLocaleState] = useState<SupportedLocale>(defaultLocale);

  useEffect(() => {
    const currentPathLocale = getLocaleFromPath(pathname);
    if (currentPathLocale && DICTIONARIES[currentPathLocale]) {
      setLocaleState(currentPathLocale);
      document.documentElement.lang = currentPathLocale;
      localStorage.setItem("locale", currentPathLocale);
    } else if (initialLocale && DICTIONARIES[initialLocale]) {
      setLocaleState(initialLocale);
      document.documentElement.lang = initialLocale;
      localStorage.setItem("locale", initialLocale);
    } else {
      const savedLocale = (localStorage.getItem("locale") as SupportedLocale) || "en";
      if (DICTIONARIES[savedLocale]) {
        setLocaleState(savedLocale);
        document.documentElement.lang = savedLocale;
      }
    }
  }, [pathname, initialLocale]);

  const setLocale = (newLocale: SupportedLocale) => {
    if (DICTIONARIES[newLocale]) {
      setLocaleState(newLocale);
      localStorage.setItem("locale", newLocale);
      document.documentElement.lang = newLocale;
    }
  };

  const dictionary = DICTIONARIES[locale] || DICTIONARIES["en"];

  const t = (key: keyof Dictionary): string => {
    return dictionary[key] || DICTIONARIES["en"][key] || "";
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      locale: "en" as SupportedLocale,
      setLocale: () => {},
      t: (key: keyof Dictionary) => DICTIONARIES["en"][key] || "",
      dictionary: DICTIONARIES["en"]
    };
  }
  return context;
}

