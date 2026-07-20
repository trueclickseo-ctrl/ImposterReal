"use client";

import Link from "next/link";
import { LOCALES } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const { locale, setLocale, dictionary } = useLanguage();

  return (
    <footer className="bg-[var(--bg-card)] border-t-4 border-[#e11d48] dark:border-[#ff2a85] text-slate-700 dark:text-slate-300 font-sans pt-12 pb-8 mt-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#fbbf24] border-2 border-slate-900 rounded-lg flex items-center justify-center font-pixel text-slate-900 text-base font-bold shadow-[2px_2px_0px_#0f172a]">
              👾
            </div>
            <span className="font-pixel text-[#d97706] dark:text-slate-100 text-base tracking-wider font-bold">IMPOSTER</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
            {dictionary.footerBrandDesc}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#16a34a] dark:text-[#34d399] font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Free • High Authority</span>
          </div>
        </div>

        {/* Col 2: Master Encyclopedia */}
        <div>
          <h4 className="font-pixel text-xs text-[#d97706] dark:text-[#fbbf24] uppercase mb-4 tracking-wider font-bold">{dictionary.footerColEncyclopedia}</h4>
          <ul className="space-y-2 text-sm font-arcade font-bold">
            <li><Link href="/encyclopedia" className="hover:text-[#d97706] dark:hover:text-[#fbbf24] transition-colors">📚 {dictionary.footerMasterHub}</Link></li>
            <li><Link href="/encyclopedia/history" className="hover:text-[#d97706] dark:hover:text-[#fbbf24] transition-colors">📜 {dictionary.footerGameHistory}</Link></li>
            <li><Link href="/encyclopedia/game-logic" className="hover:text-[#d97706] dark:hover:text-[#fbbf24] transition-colors">🧠 {dictionary.footerGameLogic}</Link></li>
            <li><Link href="/encyclopedia/academic-references" className="hover:text-[#d97706] dark:hover:text-[#fbbf24] transition-colors">🎓 {dictionary.footerAcademicCitations}</Link></li>
          </ul>
        </div>

        {/* Col 3: Play & Learn */}
        <div>
          <h4 className="font-pixel text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase mb-4 tracking-wider font-bold">{dictionary.footerColPlayLearn}</h4>
          <ul className="space-y-2 text-sm font-arcade font-bold">
            <li><Link href="/play" className="hover:text-[#0284c7] dark:hover:text-[#06b6d4] transition-colors">🎮 {dictionary.footerBrowserGame}</Link></li>
            <li><Link href="/learn" className="hover:text-[#0284c7] dark:hover:text-[#06b6d4] transition-colors">📖 {dictionary.footerOfficialRules}</Link></li>
            <li><Link href="/learn/beginner-guide" className="hover:text-[#0284c7] dark:hover:text-[#06b6d4] transition-colors">🌱 {dictionary.footerBeginnerTips}</Link></li>
            <li><Link href="/learn/advanced-strategy" className="hover:text-[#0284c7] dark:hover:text-[#06b6d4] transition-colors">⚡ {dictionary.footerAdvancedStrategy}</Link></li>
          </ul>
        </div>

        {/* Col 4: Words & Modes */}
        <div>
          <h4 className="font-pixel text-xs text-[#e11d48] dark:text-[#f43f5e] uppercase mb-4 tracking-wider font-bold">{dictionary.footerColWordsModes}</h4>
          <ul className="space-y-2 text-sm font-arcade font-bold">
            <li><Link href="/word-library" className="hover:text-[#e11d48] dark:hover:text-[#f43f5e] transition-colors">📚 {dictionary.footerAllCategories}</Link></li>
            <li><Link href="/game-modes" className="hover:text-[#e11d48] dark:hover:text-[#f43f5e] transition-colors">⚡ {dictionary.gameModesHeading}</Link></li>
          </ul>
        </div>

        {/* Col 5: Resources & Blog */}
        <div>
          <h4 className="font-pixel text-xs text-[#16a34a] dark:text-[#34d399] uppercase mb-4 tracking-wider font-bold">{dictionary.footerColResources}</h4>
          <ul className="space-y-2 text-sm font-arcade font-bold">
            <li><Link href="/resources" className="hover:text-[#16a34a] dark:hover:text-[#34d399] transition-colors">🎴 {dictionary.footerPrintableCards}</Link></li>
            <li><Link href="/blog" className="hover:text-[#16a34a] dark:hover:text-[#34d399] transition-colors">📰 {dictionary.footerPartyBlog}</Link></li>
            <li><Link href="/community" className="hover:text-[#16a34a] dark:hover:text-[#34d399] transition-colors">🏆 {dictionary.footerLeaderboards}</Link></li>
            <li><Link href="/sitemap" className="hover:text-[#16a34a] dark:hover:text-[#34d399] transition-colors">🗺️ {dictionary.footerHtmlSitemap}</Link></li>
          </ul>
        </div>

        {/* Col 6: Company */}
        <div>
          <h4 className="font-pixel text-xs text-[#ea580c] dark:text-[#fb923c] uppercase mb-4 tracking-wider font-bold">{dictionary.footerColCompany}</h4>
          <ul className="space-y-2 text-sm font-arcade font-bold">
            <li><Link href="/company/about" className="hover:text-[#ea580c] dark:hover:text-[#fb923c] transition-colors">🏰 {dictionary.footerAboutUs}</Link></li>
            <li><Link href="/company/mission" className="hover:text-[#ea580c] dark:hover:text-[#fb923c] transition-colors">🎯 {dictionary.footerOurMission}</Link></li>
            <li><Link href="/company/contact" className="hover:text-[#ea580c] dark:hover:text-[#fb923c] transition-colors">✉️ {dictionary.footerContactUs}</Link></li>
            <li><Link href="/company/privacy" className="hover:text-[#ea580c] dark:hover:text-[#fb923c] transition-colors">🔒 {dictionary.footerPrivacy}</Link></li>
          </ul>
        </div>

      </div>

      {/* 15-Language Matrix Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-300 dark:border-slate-800">
        <h5 className="font-pixel text-xs text-slate-600 dark:text-slate-400 uppercase mb-3 text-center font-bold">GLOBAL LANGUAGE SUPPORTED LOCALES ({LOCALES.length} LANGUAGES)</h5>
        <div className="flex flex-wrap justify-center gap-2.5 text-sm font-arcade font-bold">
          {LOCALES.map(loc => (
            <button
              key={loc.code}
              onClick={() => setLocale(loc.code)}
              className={`hover:scale-105 transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                locale === loc.code
                  ? 'bg-[#fbbf24] text-slate-900 border-slate-900 font-extrabold shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-[#fbbf24]'
              }`}
            >
              <span>{loc.flag}</span>
              <span>{loc.name}</span>
            </button>
          ))}
        </div>
        
        <div className="text-center text-xs text-slate-600 dark:text-slate-400 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 font-medium">
          <span>{dictionary.footerRights}</span>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#e11d48] fill-current" />
            <span>for social deduction fans worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
