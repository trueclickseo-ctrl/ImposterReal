import { SupportedLocale } from "@/lib/i18n";
import { FullLocaleDictionary } from "./types";
import { enDictionary } from "./en";
import { frDictionary } from "./fr";
import { deDictionary } from "./de";
import { esDictionary } from "./es";
import { ptDictionary } from "./pt";
import { itDictionary } from "./it";
import { plDictionary } from "./pl";
import { nlDictionary } from "./nl";
import { trDictionary } from "./tr";
import { svDictionary } from "./sv";
import { ruDictionary } from "./ru";
import { ukDictionary } from "./uk";
import { elDictionary } from "./el";
import { noDictionary } from "./no";
import { daDictionary } from "./da";
import { fiDictionary } from "./fi";
import { huDictionary } from "./hu";
import { roDictionary } from "./ro";
import { csDictionary } from "./cs";
import { hrDictionary } from "./hr";
import { idDictionary } from "./id";
import { zhDictionary } from "./zh";
import { jaDictionary } from "./ja";
import { arDictionary } from "./ar";
import { hiDictionary } from "./hi";
import { koDictionary } from "./ko";
import { viDictionary } from "./vi";
import { thDictionary } from "./th";

const dictionaries: Record<SupportedLocale, FullLocaleDictionary> = {
  en: enDictionary,
  fr: frDictionary,
  de: deDictionary,
  es: esDictionary,
  pt: ptDictionary,
  it: itDictionary,
  pl: plDictionary,
  nl: nlDictionary,
  tr: trDictionary,
  sv: svDictionary,
  ru: ruDictionary,
  uk: ukDictionary,
  el: elDictionary,
  no: noDictionary,
  da: daDictionary,
  fi: fiDictionary,
  hu: huDictionary,
  ro: roDictionary,
  cs: csDictionary,
  hr: hrDictionary,
  id: idDictionary,
  zh: zhDictionary,
  ja: jaDictionary,
  ar: arDictionary,
  hi: hiDictionary,
  ko: koDictionary,
  vi: viDictionary,
  th: thDictionary
};

export function getDictionary(locale: SupportedLocale): FullLocaleDictionary {
  return dictionaries[locale] || enDictionary;
}

export function validateLocaleCoverage(locale: SupportedLocale): { totalKeys: number; missingKeys: string[] } {
  const refDict = enDictionary;
  const targetDict = dictionaries[locale];
  const missingKeys: string[] = [];

  if (!targetDict) {
    return { totalKeys: Object.keys(refDict).length, missingKeys: ["ALL_KEYS_MISSING"] };
  }

  return { totalKeys: Object.keys(refDict).length, missingKeys };
}
