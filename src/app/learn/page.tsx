"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, ShieldCheck, Target, Award, HelpCircle, ArrowRight, Zap } from "lucide-react";

export default function LearnPage() {
  const { dictionary } = useLanguage();

  const faqItems = [
    {
      question: dictionary.aeoQuestion1,
      answer: dictionary.aeoAnswer1
    },
    {
      question: dictionary.aeoQuestion2,
      answer: dictionary.aeoAnswer2
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">{dictionary.learnHubBadge}</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">{dictionary.rulesHeading}</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {dictionary.learnHubSub}
          </p>
        </div>

        {/* 6 Subpage Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/learn/rules" className="pixel-box pixel-box-yellow p-6 space-y-3">
            <BookOpen className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.rule1Title}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">{dictionary.rule1Desc}</p>
            <div className="text-sm font-arcade text-[#d97706] dark:text-[#fbbf24] flex items-center gap-1 font-bold">{dictionary.rule1Cta} <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/what-is-imposter" className="pixel-box pixel-box-cyan p-6 space-y-3">
            <Zap className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.rule2Title}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">{dictionary.rule2Desc}</p>
            <div className="text-sm font-arcade text-[#0284c7] dark:text-[#06b6d4] flex items-center gap-1 font-bold">{dictionary.rule2Cta} <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/beginner-guide" className="pixel-box pixel-box-pink p-6 space-y-3">
            <Target className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.rule3Title}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">{dictionary.rule3Desc}</p>
            <div className="text-sm font-arcade text-[#e11d48] dark:text-[#f43f5e] flex items-center gap-1 font-bold">{dictionary.rule3Cta} <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/advanced-strategy" className="pixel-box p-6 border-2 border-[#10b981] dark:border-[#34d399] space-y-3">
            <Award className="w-8 h-8 text-[#10b981] dark:text-[#34d399]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.rule4Title}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">{dictionary.rule4Desc}</p>
            <div className="text-sm font-arcade text-[#10b981] dark:text-[#34d399] flex items-center gap-1 font-bold">{dictionary.rule4Cta} <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/scoring-system" className="pixel-box p-6 border-2 border-[#ea580c] dark:border-[#fb923c] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#ea580c] dark:text-[#fb923c]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.rule5Title}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">{dictionary.rule5Desc}</p>
            <div className="text-sm font-arcade text-[#ea580c] dark:text-[#fb923c] flex items-center gap-1 font-bold">{dictionary.rule5Cta} <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/faq" className="pixel-box p-6 border-2 border-[#8b5cf6] dark:border-[#a78bfa] space-y-3">
            <HelpCircle className="w-8 h-8 text-[#8b5cf6] dark:text-[#a78bfa]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.rule6Title}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">{dictionary.rule6Desc}</p>
            <div className="text-sm font-arcade text-[#8b5cf6] dark:text-[#a78bfa] flex items-center gap-1 font-bold">{dictionary.rule6Cta} <ArrowRight className="w-4 h-4" /></div>
          </Link>
        </div>

        {/* Detailed Guide Content */}
        <article className="pixel-box pixel-box-cyan p-8 space-y-6 text-slate-800 dark:text-slate-200 font-sans text-base leading-relaxed">
          <h2 className="font-pixel text-xl sm:text-2xl text-[#0284c7] dark:text-[#06b6d4] font-bold">{dictionary.articleTitle}</h2>
          
          <p className="font-medium">
            {dictionary.articleP1}
          </p>

          <h3 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.articleH2}</h3>
          <p className="font-medium">
            {dictionary.articleP2}
          </p>
          <ul className="list-disc list-inside space-y-2 font-semibold">
            <li>{dictionary.articleLi1}</li>
            <li>{dictionary.articleLi2}</li>
          </ul>

          <h3 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{dictionary.articleH3}</h3>
          <p className="font-medium">
            {dictionary.articleP3}
          </p>
        </article>

      </div>
    </>
  );
}
