import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, SupportedLocale, DICTIONARIES } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

import PlayPage from "@/app/play/page";
import EncyclopediaPage from "@/app/encyclopedia/page";
import HistoryPage from "@/app/encyclopedia/history/page";
import GameLogicPage from "@/app/encyclopedia/game-logic/page";
import AcademicReferencesPage from "@/app/encyclopedia/academic-references/page";
import LearnPage from "@/app/learn/page";
import RulesPage from "@/app/learn/rules/page";
import WhatIsImposterPage from "@/app/learn/what-is-imposter/page";
import BeginnerGuidePage from "@/app/learn/beginner-guide/page";
import AdvancedStrategyPage from "@/app/learn/advanced-strategy/page";
import ScoringSystemPage from "@/app/learn/scoring-system/page";
import FAQPage from "@/app/learn/faq/page";
import WordLibraryPage from "@/app/word-library/page";
import GameModesPage from "@/app/game-modes/page";
import BlogPage from "@/app/blog/page";
import ResourcesPage from "@/app/resources/page";
import CommunityPage from "@/app/community/page";
import AboutPage from "@/app/company/about/page";
import MissionPage from "@/app/company/mission/page";
import CareersPage from "@/app/company/careers/page";
import ContactPage from "@/app/company/contact/page";
import PrivacyPage from "@/app/company/privacy/page";
import TermsPage from "@/app/company/terms/page";
import SitemapPage from "@/app/sitemap/page";

const ROUTE_MAP: Record<string, { component: React.ComponentType<any>; contentKey?: string; titleKey?: string; descKey?: string; defaultTitle: string; defaultDesc: string }> = {
  "play": {
    component: PlayPage,
    defaultTitle: "Play Imposter Online Free | Instant Game Rooms",
    defaultDesc: "Host or join a free browser-based Imposter party game instantly. Perfect for 3–20 players."
  },
  "encyclopedia": {
    component: EncyclopediaPage,
    defaultTitle: "Master Encyclopedia of Word Deduction Games | Imposter",
    defaultDesc: "Comprehensive hub for game rules, party history, game theory logic, and academic citations."
  },
  "encyclopedia/history": {
    component: HistoryPage,
    defaultTitle: "History of Word Deduction Party Games | Imposter",
    defaultDesc: "Explore the evolution of social deduction word games from Mafia and Spyfall to Imposter."
  },
  "encyclopedia/game-logic": {
    component: GameLogicPage,
    defaultTitle: "Game Theory & Bluffing Logic | Imposter Encyclopedia",
    defaultDesc: "Deep dive into informational asymmetry, bayesian probability, and voting logic."
  },
  "encyclopedia/academic-references": {
    component: AcademicReferencesPage,
    defaultTitle: "High-Authority Academic References & Bibliography | Imposter",
    defaultDesc: "Curated academic bibliography: BoardGameGeek database, Stanford Encyclopedia of Philosophy, MIT Game Lab."
  },
  "learn": {
    component: LearnPage,
    defaultTitle: "How to Play Imposter | Official Game Hub & Rules",
    defaultDesc: "Master Imposter with our comprehensive guides: official rules, beginner tips, advanced strategies, and FAQ."
  },
  "learn/rules": {
    component: RulesPage,
    defaultTitle: "Official Rules & Complete Gameplay Guide | Imposter",
    defaultDesc: "Learn how to play Imposter: setup, secret word assignment, clue round rules, and voting procedures."
  },
  "learn/what-is-imposter": {
    component: WhatIsImposterPage,
    defaultTitle: "What is Imposter? Game Mechanics & Overview",
    defaultDesc: "Everything you need to know about Imposter: the fast-paced browser party game of deception and logic."
  },
  "learn/beginner-guide": {
    component: BeginnerGuidePage,
    defaultTitle: "Beginner's Guide & Strategy Tips | Imposter",
    defaultDesc: "First time playing Imposter? Follow our simple step-by-step guide to giving smart clues and avoiding detection."
  },
  "learn/advanced-strategy": {
    component: AdvancedStrategyPage,
    defaultTitle: "Advanced Strategy & Master Deception Tactics | Imposter",
    defaultDesc: "Level up your game with high-level imposter tactics: linguistic vagueness, trap clues, and meta-voting."
  },
  "learn/scoring-system": {
    component: ScoringSystemPage,
    defaultTitle: "Scoring System & Points Guide | Imposter",
    defaultDesc: "How points are calculated in Imposter for civilians and imposters across single rounds and series."
  },
  "learn/faq": {
    component: FAQPage,
    defaultTitle: "Frequently Asked Questions (FAQ) | Imposter",
    defaultDesc: "Answers to common questions about room setup, player counts, offline cards, and game rules."
  },
  "word-library": {
    component: WordLibraryPage,
    defaultTitle: "1,000+ Word Categories & Library | Imposter",
    defaultDesc: "Browse our massive library of secret words across Movies, Pop Culture, Food, Science, History, and custom packs."
  },
  "game-modes": {
    component: GameModesPage,
    defaultTitle: "Exciting Game Modes & Variances | Imposter",
    defaultDesc: "Discover custom Imposter modes: Speed Round, Double Imposter, Blind Clues, Classroom Mode, and Office Edition."
  },
  "blog": {
    component: BlogPage,
    defaultTitle: "Party Game Blog & Game Design Articles | Imposter",
    defaultDesc: "Read articles on party game mechanics, icebreakers, virtual team building, and game night ideas."
  },
  "resources": {
    component: ResourcesPage,
    defaultTitle: "Free Printable Cards & PDF Downloads | Imposter",
    defaultDesc: "Download free printable Imposter role cards, clue sheets, and word prompt printables for offline play."
  },
  "community": {
    component: CommunityPage,
    defaultTitle: "Community Leaderboards & Stats | Imposter",
    defaultDesc: "Global stats, top word packs, and community feedback hub."
  },
  "company/about": {
    component: AboutPage,
    defaultTitle: "About Us | Imposter Game Team",
    defaultDesc: "Learn about the team behind ImposterLand and our mission to create accessible party games."
  },
  "company/mission": {
    component: MissionPage,
    defaultTitle: "Our Mission | Imposter",
    defaultDesc: "Connecting people everywhere through free, privacy-focused, browser-based party games."
  },
  "company/careers": {
    component: CareersPage,
    defaultTitle: "Careers at ImposterLand",
    defaultDesc: "Join our remote-first team building the future of web-based social deduction games."
  },
  "company/contact": {
    component: ContactPage,
    defaultTitle: "Contact Us & Feedback | Imposter",
    defaultDesc: "Get in touch with our team for support, feature suggestions, or press inquiries."
  },
  "company/privacy": {
    component: PrivacyPage,
    defaultTitle: "Privacy Policy | Imposter",
    defaultDesc: "Our zero-tracking, privacy-first data policy for players."
  },
  "company/terms": {
    component: TermsPage,
    defaultTitle: "Terms of Service | Imposter",
    defaultDesc: "Terms of service and legal agreement for using ImposterLand.com."
  },
  "sitemap": {
    component: SitemapPage,
    defaultTitle: "HTML Sitemap & Full Page Index | Imposter",
    defaultDesc: "Complete directory of all pages, game guides, word libraries, and resources on ImposterLand.com."
  }
};

export function generateStaticParams() {
  const routes = Object.keys(ROUTE_MAP).map(r => r.split('/'));
  const params: { lang: string; slug: string[] }[] = [];

  for (const loc of LOCALES) {
    for (const slug of routes) {
      params.push({
        lang: loc.code,
        slug: slug,
      });
    }
  }

  return params;
}

import { getDictionary } from "@/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (LOCALES.some((l) => l.code === lang) ? lang : "en") as SupportedLocale;
  const pathKey = slug.join("/");
  const routeInfo = ROUTE_MAP[pathKey];

  if (!routeInfo) {
    return {};
  }

  const dict = getDictionary(locale);
  let pageTitle = routeInfo.defaultTitle.split("|")[0].trim();
  let description = routeInfo.defaultDesc;

  if (pathKey === "learn") {
    pageTitle = dict.learnHub.title;
    description = dict.learnHub.subtitle;
  } else if (pathKey === "learn/faq") {
    pageTitle = dict.learnFaq.title;
    description = dict.learnFaq.subtitle;
  } else if (pathKey === "learn/rules") {
    pageTitle = dict.learnRules.title;
    description = dict.learnRules.subtitle;
  } else if (pathKey === "game-modes") {
    pageTitle = dict.gameModes.title;
    description = dict.gameModes.subtitle;
  } else if (pathKey === "company/about") {
    pageTitle = dict.companyAbout.title;
    description = dict.companyAbout.subtitle;
  } else if (pathKey === "company/contact") {
    pageTitle = dict.companyContact.title;
    description = dict.companyContact.subtitle;
  } else if (dict.meta[pathKey]) {
    pageTitle = dict.meta[pathKey].title;
    description = dict.meta[pathKey].description;
  }

  const title = `${pageTitle} | Imposter`;
  return getPageMetadata(`/${locale}/${pathKey}`, title, description, locale);
}

export default async function LocalizedSubPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;
  const pathKey = slug.join("/");
  const routeInfo = ROUTE_MAP[pathKey];

  if (!routeInfo || !LOCALES.some((l) => l.code === lang)) {
    notFound();
  }

  const locale = lang as SupportedLocale;
  const dict = getDictionary(locale);
  const Component = routeInfo.component;
  
  return <Component content={dict[routeInfo.contentKey as keyof typeof dict]} />;
}
