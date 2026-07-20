"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { ACADEMIC_REFERENCES } from "@/lib/encyclopedia";
import { useLanguage } from "@/context/LanguageContext";
import { History, Binary, ExternalLink, Award, ArrowRight, ShieldCheck } from "lucide-react";

export default function EncyclopediaPage() {
  const { dictionary } = useLanguage();

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-12 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">MASTER ENCYCLOPEDIA</span>
          <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">
            {dictionary.encyclopediaHeading}
          </h1>
          <p className="font-sans text-base text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium">
            {dictionary.encyclopediaSubheading}
          </p>
        </div>

        {/* 3 Main Pillar Sections Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link href="/encyclopedia/history" className="pixel-box pixel-box-cyan p-6 space-y-3">
            <History className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4]" />
            <h2 className="font-pixel text-xl text-[#0284c7] dark:text-[#06b6d4] font-bold">1. {dictionary.historyHeading}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
              Trace the evolution from 19th-century Victorian parlor games to Dmitry Davidoff's 1986 Mafia, Spyfall, and modern browser party apps.
            </p>
            <div className="pt-2 text-sm font-arcade text-[#0284c7] dark:text-[#06b6d4] flex items-center gap-1 font-bold">
              Explore History <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/encyclopedia/game-logic" className="pixel-box pixel-box-pink p-6 space-y-3">
            <Binary className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e]" />
            <h2 className="font-pixel text-xl text-[#e11d48] dark:text-[#f43f5e] font-bold">2. {dictionary.gameLogicHeading}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
              Formal mathematical analysis of information asymmetry, Bayesian updating equations, signal-to-noise ratios, and Nash Equilibrium.
            </p>
            <div className="pt-2 text-sm font-arcade text-[#e11d48] dark:text-[#f43f5e] flex items-center gap-1 font-bold">
              Read Mathematical Logic <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/encyclopedia/academic-references" className="pixel-box p-6 border-2 border-[#10b981] dark:border-[#34d399] space-y-3">
            <Award className="w-8 h-8 text-[#10b981] dark:text-[#34d399]" />
            <h2 className="font-pixel text-xl text-[#10b981] dark:text-[#34d399] font-bold">3. {dictionary.academicRefHeading}</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
              Curated peer-reviewed research, BoardGameGeek database entries, Stanford Philosophy citations, and MIT Game Lab papers.
            </p>
            <div className="pt-2 text-sm font-arcade text-[#10b981] dark:text-[#34d399] flex items-center gap-1 font-bold">
              View Citations & Sources <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

        </div>

        {/* High-Authority External Reference Spotlight Bar */}
        <div className="pixel-box pixel-box-yellow p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">BIBLIOGRAPHY SPOTLIGHT</span>
              <h2 className="font-pixel text-lg text-[#d97706] dark:text-[#fbbf24] mt-1 font-bold">High-Authority Academic Sources</h2>
            </div>
            <ShieldCheck className="w-6 h-6 text-[#10b981] dark:text-[#34d399]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACADEMIC_REFERENCES.map(ref => (
              <div key={ref.id} className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-5 rounded-xl space-y-2 font-sans text-xs shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="pixel-badge bg-slate-200 dark:bg-slate-800 text-[#0284c7] dark:text-[#06b6d4] font-bold">{ref.citationType}</span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono font-bold">{ref.year}</span>
                </div>
                <h3 className="font-pixel text-sm text-slate-900 dark:text-slate-100 font-bold">{ref.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{ref.summary}</p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#d97706] dark:text-[#fbbf24] font-arcade text-base hover:underline pt-1 font-bold"
                >
                  Visit Authority Reference ({ref.publisher}) <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
