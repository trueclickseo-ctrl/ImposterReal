"use client";

import ImposterGameUI from "@/components/ImposterGameUI";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Smartphone, Monitor, Key, ArrowDownCircle } from "lucide-react";

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

        {/* Feature Cards Grid (Now Interactive Clickable Links) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-arcade text-lg">
          <Link 
            href="#game-setup" 
            className="pixel-box pixel-box-yellow p-5 text-center space-y-3 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group block"
          >
            <Smartphone className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24] mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base group-hover:text-[#d97706] transition-colors">{dictionary.playFeature1Title}</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-100 font-medium leading-relaxed">{dictionary.playFeature1Desc}</p>
            <span className="inline-flex items-center gap-1 text-xs font-pixel text-[#d97706] dark:text-[#fbbf24] font-bold group-hover:underline">
              START PASS & PLAY <ArrowDownCircle className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link 
            href="#game-setup" 
            className="pixel-box pixel-box-cyan p-5 text-center space-y-3 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group block"
          >
            <Key className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4] mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base group-hover:text-[#0284c7] transition-colors">{dictionary.playFeature2Title}</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-100 font-medium leading-relaxed">{dictionary.playFeature2Desc}</p>
            <span className="inline-flex items-center gap-1 text-xs font-pixel text-[#0284c7] dark:text-[#06b6d4] font-bold group-hover:underline">
              JOIN VIA ROOM CODE <ArrowDownCircle className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link 
            href="#game-setup" 
            className="pixel-box pixel-box-pink p-5 text-center space-y-3 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group block"
          >
            <Monitor className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e] mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base group-hover:text-[#e11d48] transition-colors">{dictionary.playFeature3Title}</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-100 font-medium leading-relaxed">{dictionary.playFeature3Desc}</p>
            <span className="inline-flex items-center gap-1 text-xs font-pixel text-[#e11d48] dark:text-[#f43f5e] font-bold group-hover:underline">
              HOST ON BIG SCREEN <ArrowDownCircle className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Embedded Full Game Loop */}
        <div id="game-setup" className="scroll-mt-24">
          <ImposterGameUI />
        </div>

        {/* Gameplay Instructions */}
        <div className="pixel-box p-6 sm:p-8 space-y-4 my-12">
          <h2 className="font-pixel text-xl text-[#0284c7] dark:text-[#06b6d4] font-bold">{dictionary.playQuickRules}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Steps Column */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-sm">
              <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-[#d97706] dark:text-[#fbbf24] text-base block">{dictionary.playStep1Title}</span>
                <p className="text-slate-700 dark:text-slate-100 font-medium">{dictionary.playStep1Desc}</p>
              </div>
              <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-[#0284c7] dark:text-[#06b6d4] text-base block">{dictionary.playStep2Title}</span>
                <p className="text-slate-700 dark:text-slate-100 font-medium">{dictionary.playStep2Desc}</p>
              </div>
              <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-[#e11d48] dark:text-[#f43f5e] text-base block">{dictionary.playStep3Title}</span>
                <p className="text-slate-700 dark:text-slate-100 font-medium">{dictionary.playStep3Desc}</p>
              </div>
            </div>
            {/* Image Column */}
            <div className="lg:col-span-1 w-full flex justify-center">
              <picture className="w-full max-w-[280px]">
                <source srcSet="/images/confident_clue-desktop.webp 1200w, /images/confident_clue-tablet.webp 800w, /images/confident_clue-mobile.webp 480w" sizes="(max-width: 640px) 300px, 450px" type="image/webp" />
                <img 
                  src="/images/confident_clue-desktop.jpg" 
                  srcSet="/images/confident_clue-desktop.jpg 1200w, /images/confident_clue-tablet.jpg 800w, /images/confident_clue-mobile.jpg 480w" 
                  sizes="(max-width: 640px) 300px, 450px"
                  width={1200}
                  height={800}
                  alt="Player giving a clue during a round of the Imposter game" 
                  className="w-full h-auto object-cover rounded-2xl border-4 border-slate-900 dark:border-slate-700 shadow-[4px_4px_0px_#0f172a] dark:shadow-[4px_4px_0px_#000]"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
