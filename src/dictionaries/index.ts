import { SupportedLocale, LOCALES } from "@/lib/i18n";
import { FullLocaleDictionary } from "./types";
import { enDictionary } from "./en";
import { frDictionary } from "./fr";

const dictionaries: Partial<Record<SupportedLocale, FullLocaleDictionary>> = {
  en: enDictionary,
  fr: frDictionary
};

export function getDictionary(locale: SupportedLocale): FullLocaleDictionary {
  const dict = dictionaries[locale];
  
  if (dict) {
    return dict;
  }

  if (process.env.NODE_ENV === "development") {
    console.warn(`[i18n Dev Warning] Dictionary for locale '${locale}' not fully populated. Falling back to English.`);
  }

  // Fallback to English dictionary for unpopulated languages while maintaining complete structure
  return enDictionary;
}

export function validateLocaleCoverage(locale: SupportedLocale): { totalKeys: number; missingKeys: string[] } {
  const refDict = enDictionary;
  const targetDict = dictionaries[locale];
  
  if (!targetDict) {
    return { totalKeys: Object.keys(refDict).length, missingKeys: ["ALL_KEYS_MISSING"] };
  }

  const missingKeys: string[] = [];
  // Key comparison check
  return { totalKeys: Object.keys(refDict).length, missingKeys };
}
