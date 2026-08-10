import { SupportedLocale } from "@/lib/i18n";

export interface TranslationMeta {
  version: number;
  lastUpdated: string;
  sourceHash?: string;
  status: "current" | "outdated" | "needs_review" | "missing";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  version: number;
}

export interface LearnFAQContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  playCta: string;
  askCta: string;
  imageAlt: string;
  items: FAQItem[];
}

export interface RuleStep {
  title: string;
  description: string;
}

export interface LearnRulesContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  quickSummaryTitle: string;
  steps: RuleStep[];
  articleTitle: string;
  articleP1: string;
  articleH2: string;
  articleP2: string;
  articleLi1: string;
  articleLi2: string;
  articleH3: string;
  articleP3: string;
}

export interface OverviewCard {
  title: string;
  desc: string;
  cta: string;
  href: string;
}

export interface LearnHubContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  cards: OverviewCard[];
}

export interface HistoryTimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export interface HistoryContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  events: HistoryTimelineEvent[];
}

export interface AcademicReferenceItem {
  author: string;
  year: string;
  title: string;
  publisher: string;
  summary: string;
}

export interface AcademicReferencesContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  citations: AcademicReferenceItem[];
}

export interface GameLogicContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  concept1Title: string;
  concept1Desc: string;
  concept2Title: string;
  concept2Desc: string;
  concept3Title: string;
  concept3Desc: string;
}

export interface GameModeCard {
  id: string;
  title: string;
  desc: string;
  badge: string;
}

export interface GameModesContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  modes: GameModeCard[];
}

export interface CompanyAboutContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  storyTitle: string;
  storyP1: string;
  storyP2: string;
  missionTitle: string;
  missionP1: string;
}

export interface CompanyContactContent {
  _meta: TranslationMeta;
  badge: string;
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  successMessage: string;
}

export interface PageMetaData {
  title: string;
  description: string;
}

export interface FullLocaleDictionary {
  _meta: TranslationMeta;
  learnFaq: LearnFAQContent;
  learnRules: LearnRulesContent;
  learnHub: LearnHubContent;
  history: HistoryContent;
  academicRefs: AcademicReferencesContent;
  gameLogic: GameLogicContent;
  gameModes: GameModesContent;
  companyAbout: CompanyAboutContent;
  companyContact: CompanyContactContent;
  meta: Record<string, PageMetaData>;
}
