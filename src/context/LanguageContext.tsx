"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SupportedLocale, Dictionary, DICTIONARIES } from "@/lib/i18n";

interface LanguageContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: keyof Dictionary) => string;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>("en");

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") as SupportedLocale) || "en";
    if (DICTIONARIES[savedLocale]) {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

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
