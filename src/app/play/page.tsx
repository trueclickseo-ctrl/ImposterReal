"use client";

import ImposterGameUI from "@/components/ImposterGameUI";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import { Smartphone, Monitor, Key } from "lucide-react";

export default function PlayPage() {
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

      <div className="space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#06b6d4] text-slate-950 font-bold">{dictionary.playBadge}</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">{dictionary.playHeader}</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-xl mx-auto">
            {dictionary.playSub}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-arcade text-lg">
          <div className="pixel-box pixel-box-yellow p-5 text-center space-y-2">
            <Smartphone className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24] mx-auto" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base">{dictionary.playFeature1Title}</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-300 font-medium">{dictionary.playFeature1Desc}</p>
          </div>

          <div className="pixel-box pixel-box-cyan p-5 text-center space-y-2">
            <Key className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4] mx-auto" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base">{dictionary.playFeature2Title}</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-300 font-medium">{dictionary.playFeature2Desc}</p>
          </div>

          <div className="pixel-box pixel-box-pink p-5 text-center space-y-2">
            <Monitor className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e] mx-auto" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base">{dictionary.playFeature3Title}</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-300 font-medium">{dictionary.playFeature3Desc}</p>
          </div>
        </div>

        {/* Embedded Full Game Loop */}
        <ImposterGameUI />

        {/* Gameplay Instructions */}
        <div className="pixel-box p-6 sm:p-8 space-y-4 my-12">
          <h2 className="font-pixel text-xl text-[#0284c7] dark:text-[#06b6d4] font-bold">{dictionary.playQuickRules}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-sm">
            <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-[#d97706] dark:text-[#fbbf24] text-base block">{dictionary.playStep1Title}</span>
              <p className="text-slate-700 dark:text-slate-300 font-medium">{dictionary.playStep1Desc}</p>
            </div>
            <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-[#0284c7] dark:text-[#06b6d4] text-base block">{dictionary.playStep2Title}</span>
              <p className="text-slate-700 dark:text-slate-300 font-medium">{dictionary.playStep2Desc}</p>
            </div>
            <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-[#e11d48] dark:text-[#f43f5e] text-base block">{dictionary.playStep3Title}</span>
              <p className="text-slate-700 dark:text-slate-300 font-medium">{dictionary.playStep3Desc}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
