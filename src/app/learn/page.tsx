"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";
import { LearnHubContent } from "@/dictionaries/types";
import { BookOpen, ShieldCheck, Target, Award, HelpCircle, ArrowRight, Zap } from "lucide-react";

export default function LearnPage(props: any) {
  const { locale } = useLanguage();
  const learnData: LearnHubContent = props?.content || getDictionary(locale).learnHub;

  const faqItems = [
    {
      question: "How long does a round of Imposter last?",
      answer: "A single round typically lasts between 3 to 7 minutes, making it quick and engaging for group play."
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">{learnData.badge}</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">{learnData.title}</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {learnData.subtitle}
          </p>
        </div>

        {/* 6 Subpage Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learnData.cards.map((card, idx) => (
            <Link key={idx} href={card.href} className="pixel-box pixel-box-yellow p-6 space-y-3">
              <BookOpen className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24]" />
              <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{card.title}</h2>
              <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">{card.desc}</p>
              <div className="text-sm font-arcade text-[#d97706] dark:text-[#fbbf24] flex items-center gap-1 font-bold">
                {card.cta} <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
