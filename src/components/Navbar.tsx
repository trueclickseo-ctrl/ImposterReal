"use client";

import { useState } from "react";
import Link from "next/link";
import { Gamepad2, BookOpen, Library, Sparkles, Newspaper, FolderDown, Users, Globe, Tv, Volume2, VolumeX, Menu, X, BookMarked } from "lucide-react";
import { LOCALES, SupportedLocale, getTranslation } from "@/lib/i18n";
import { UI_MICROCOPY } from "@/lib/microcopy";

export default function Navbar() {
  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>("en");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleCrt = () => {
    const root = document.documentElement;
    if (crtEnabled) {
      root.classList.remove("crt-scanlines");
    } else {
      root.classList.add("crt-scanlines");
    }
    setCrtEnabled(!crtEnabled);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#121829]/95 backdrop-blur-md border-b-4 border-[#00f0ff] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#ffe600] border-2 border-white flex items-center justify-center font-pixel text-slate-900 font-bold text-lg shadow-[3px_3px_0px_#000000] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            👾
          </div>
          <div>
            <span className="font-pixel text-base text-[#ffe600] tracking-tight block drop-shadow-[2px_2px_0px_#000000]">
              IMPOSTER
            </span>
            <span className="font-arcade text-xs text-[#00f0ff] uppercase tracking-wider block">
              ENCYCLOPEDIA & GAME
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 font-arcade text-lg uppercase tracking-wide">
          <Link href="/play" className="text-slate-200 hover:text-[#ffe600] flex items-center gap-1.5 transition-colors">
            <Gamepad2 className="w-4 h-4 text-[#ffe600]" />
            Play
          </Link>
          <Link href="/encyclopedia" className="text-[#ffe600] hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors font-bold">
            <BookMarked className="w-4 h-4 text-[#ffe600]" />
            Encyclopedia
          </Link>
          <Link href="/learn" className="text-slate-200 hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors">
            <BookOpen className="w-4 h-4 text-[#00f0ff]" />
            Learn
          </Link>
          <Link href="/word-library" className="text-slate-200 hover:text-[#ff2a85] flex items-center gap-1.5 transition-colors">
            <Library className="w-4 h-4 text-[#ff2a85]" />
            Words
          </Link>
          <Link href="/game-modes" className="text-slate-200 hover:text-[#39ff14] flex items-center gap-1.5 transition-colors">
            <Sparkles className="w-4 h-4 text-[#39ff14]" />
            Modes
          </Link>
          <Link href="/blog" className="text-slate-200 hover:text-[#ff6b00] flex items-center gap-1.5 transition-colors">
            <Newspaper className="w-4 h-4 text-[#ff6b00]" />
            Blog
          </Link>
          <Link href="/resources" className="text-slate-200 hover:text-[#a855f7] flex items-center gap-1.5 transition-colors">
            <FolderDown className="w-4 h-4 text-[#a855f7]" />
            Cards
          </Link>
        </nav>

        {/* Action Controls & Locale Selector */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* CRT Scanline Toggle */}
          <button
            onClick={toggleCrt}
            className={`p-2 border-2 border-white text-xs font-pixel flex items-center gap-1 shadow-[2px_2px_0px_#000] ${
              crtEnabled ? 'bg-[#00f0ff] text-slate-900' : 'bg-slate-800 text-slate-400'
            }`}
            title="Toggle CRT Scanline Effect"
            aria-label="Toggle CRT screen scanline effect"
          >
            <Tv className="w-4 h-4" />
            <span className="hidden xl:inline">CRT</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 border-2 border-white text-xs font-pixel shadow-[2px_2px_0px_#000] ${
              soundEnabled ? 'bg-[#39ff14] text-slate-900' : 'bg-slate-800 text-slate-400'
            }`}
            title="Toggle Audio Effects"
            aria-label="Toggle sound effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* 14-Language Switcher Dropdown */}
          <div className="relative flex items-center gap-1 bg-[#1e293b] border-2 border-[#ffe600] px-2 py-1 shadow-[2px_2px_0px_#000]">
            <Globe className="w-4 h-4 text-[#ffe600]" />
            <select
              value={currentLocale}
              onChange={(e) => setCurrentLocale(e.target.value as SupportedLocale)}
              className="bg-transparent text-slate-100 font-arcade text-base uppercase focus:outline-none cursor-pointer"
              aria-label={getTranslation(currentLocale, "languageSelectLabel")}
            >
              {LOCALES.map((loc) => (
                <option key={loc.code} value={loc.code} className="bg-[#121829] text-slate-100">
                  {loc.flag} {loc.name} ({loc.nativeName})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Play CTA */}
          <Link
            href="/play"
            className="pixel-btn pixel-btn-cyan text-xs"
            aria-label={UI_MICROCOPY.startGame.plainAccessibilityFallback}
          >
            {UI_MICROCOPY.startGame.retroDisplay}
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-[#ffe600] border-2 border-white text-slate-900 shadow-[2px_2px_0px_#000]"
          aria-label="Toggle navigation drawer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141c2e] border-b-4 border-[#ff2a85] px-6 py-6 font-arcade text-xl space-y-4">
          <Link
            href="/play"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#ffe600] hover:underline"
          >
            🎮 Play Browser Game
          </Link>
          <Link
            href="/encyclopedia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#ffe600] hover:underline font-bold"
          >
            📚 Social Deduction Encyclopedia
          </Link>
          <Link
            href="/learn"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#00f0ff] hover:underline"
          >
            📖 Rules & Guides
          </Link>
          <Link
            href="/word-library"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#ff2a85] hover:underline"
          >
            📚 Word Categories
          </Link>
          <Link
            href="/game-modes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#39ff14] hover:underline"
          >
            ⚡ Game Modes
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#ff6b00] hover:underline"
          >
            📰 Party Game Blog
          </Link>
          <Link
            href="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#a855f7] hover:underline"
          >
            🎴 Printable Cards
          </Link>
          <Link
            href="/community"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#ffe600] hover:underline"
          >
            🏆 Leaderboards & Discord
          </Link>
        </div>
      )}
    </header>
  );
}
