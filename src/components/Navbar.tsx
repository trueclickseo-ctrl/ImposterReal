"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Gamepad2, BookOpen, Library, Sparkles, Newspaper, FolderDown, Globe, Tv, Volume2, VolumeX, Menu, X, BookMarked, Sun, Moon } from "lucide-react";
import { LOCALES, SupportedLocale } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";
import { UI_MICROCOPY } from "@/lib/microcopy";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

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
    <header className="sticky top-0 z-50 bg-[var(--bg-card)]/95 backdrop-blur-md border-b-4 border-[#0284c7] dark:border-[#00f0ff] shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#ffe600] border-2 border-slate-900 flex items-center justify-center font-pixel text-slate-900 font-bold text-lg shadow-[3px_3px_0px_#0f172a] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            👾
          </div>
          <div>
            <span className="font-pixel text-base text-[#d97706] dark:text-[#ffe600] tracking-tight block drop-shadow-sm">
              IMPOSTER
            </span>
            <span className="font-arcade text-xs text-[#0284c7] dark:text-[#00f0ff] uppercase tracking-wider block font-bold">
              ENCYCLOPEDIA & GAME
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 font-arcade text-xl uppercase tracking-wide font-bold">
          <Link href="/play" className="text-slate-800 dark:text-slate-200 hover:text-[#d97706] dark:hover:text-[#ffe600] flex items-center gap-1.5 transition-colors">
            <Gamepad2 className="w-5 h-5 text-[#d97706] dark:text-[#ffe600]" />
            Play
          </Link>
          <Link href="/encyclopedia" className="text-[#b45309] dark:text-[#ffe600] hover:text-[#0284c7] dark:hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors font-bold">
            <BookMarked className="w-5 h-5 text-[#b45309] dark:text-[#ffe600]" />
            Encyclopedia
          </Link>
          <Link href="/learn" className="text-slate-800 dark:text-slate-200 hover:text-[#0284c7] dark:hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors">
            <BookOpen className="w-5 h-5 text-[#0284c7] dark:text-[#00f0ff]" />
            Learn
          </Link>
          <Link href="/word-library" className="text-slate-800 dark:text-slate-200 hover:text-[#e11d48] dark:hover:text-[#ff2a85] flex items-center gap-1.5 transition-colors">
            <Library className="w-5 h-5 text-[#e11d48] dark:text-[#ff2a85]" />
            Words
          </Link>
          <Link href="/game-modes" className="text-slate-800 dark:text-slate-200 hover:text-[#16a34a] dark:hover:text-[#39ff14] flex items-center gap-1.5 transition-colors">
            <Sparkles className="w-5 h-5 text-[#16a34a] dark:text-[#39ff14]" />
            Modes
          </Link>
          <Link href="/blog" className="text-slate-800 dark:text-slate-200 hover:text-[#ea580c] dark:hover:text-[#ff6b00] flex items-center gap-1.5 transition-colors">
            <Newspaper className="w-5 h-5 text-[#ea580c] dark:text-[#ff6b00]" />
            Blog
          </Link>
          <Link href="/resources" className="text-slate-800 dark:text-slate-200 hover:text-[#9333ea] dark:hover:text-[#a855f7] flex items-center gap-1.5 transition-colors">
            <FolderDown className="w-5 h-5 text-[#9333ea] dark:text-[#a855f7]" />
            Cards
          </Link>
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Light / Dark Theme Switch Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-slate-900 dark:border-white text-xs font-pixel flex items-center gap-1.5 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000] bg-[#ffe600] text-slate-900 font-bold hover:scale-105 transition-transform"
            title={theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
            aria-label="Toggle Light or Dark Mode"
          >
            {theme === "light" ? (
              <>
                <Moon className="w-4 h-4 text-slate-900" />
                <span>DARK</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-500" />
                <span>LIGHT</span>
              </>
            )}
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={toggleCrt}
            className={`p-2 border-2 border-slate-900 dark:border-white text-xs font-pixel flex items-center gap-1 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000] ${
              crtEnabled ? 'bg-[#00f0ff] text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
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
            className={`p-2 border-2 border-slate-900 dark:border-white text-xs font-pixel shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000] ${
              soundEnabled ? 'bg-[#39ff14] text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
            }`}
            title="Toggle Audio Effects"
            aria-label="Toggle sound effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* 14-Language Switcher Dropdown */}
          <div className="relative flex items-center gap-1 bg-slate-100 dark:bg-[#1e293b] border-2 border-[#d97706] dark:border-[#ffe600] px-2 py-1 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000]">
            <Globe className="w-4 h-4 text-[#d97706] dark:text-[#ffe600]" />
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as SupportedLocale)}
              className="bg-transparent text-slate-900 dark:text-slate-100 font-arcade text-lg font-bold uppercase focus:outline-none cursor-pointer"
              aria-label={t("languageSelectLabel")}
            >
              {LOCALES.map((loc) => (
                <option key={loc.code} value={loc.code} className="bg-white dark:bg-[#121829] text-slate-900 dark:text-slate-100">
                  {loc.flag} {loc.name} ({loc.nativeName})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Play CTA */}
          <Link
            href="/play"
            className="pixel-btn pixel-btn-cyan text-xs font-bold"
            aria-label={UI_MICROCOPY.startGame.plainAccessibilityFallback}
          >
            {UI_MICROCOPY.startGame.retroDisplay}
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-[#ffe600] border-2 border-slate-900 text-slate-900 shadow-[2px_2px_0px_#0f172a]"
          aria-label="Toggle navigation drawer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-card)] border-b-4 border-[#e11d48] px-6 py-6 font-arcade text-2xl font-bold space-y-4 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-slate-300 dark:border-slate-700">
            <span className="text-sm font-pixel text-slate-700 dark:text-slate-300">SETTINGS</span>
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-slate-900 text-xs font-pixel bg-[#ffe600] text-slate-900 font-bold"
            >
              {theme === "light" ? "🌙 DARK THEME" : "☀️ LIGHT THEME"}
            </button>
          </div>

          <div className="flex items-center gap-2 py-2">
            <Globe className="w-5 h-5 text-[#d97706] dark:text-[#ffe600]" />
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as SupportedLocale)}
              className="bg-slate-100 dark:bg-slate-800 border-2 border-slate-900 text-slate-900 dark:text-slate-100 p-2 font-arcade text-xl font-bold rounded w-full"
            >
              {LOCALES.map((loc) => (
                <option key={loc.code} value={loc.code}>
                  {loc.flag} {loc.name} ({loc.nativeName})
                </option>
              ))}
            </select>
          </div>

          <Link
            href="/play"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#d97706] dark:text-[#ffe600] hover:underline"
          >
            🎮 Play Browser Game
          </Link>
          <Link
            href="/encyclopedia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b45309] dark:text-[#ffe600] hover:underline font-bold"
          >
            📚 Social Deduction Encyclopedia
          </Link>
          <Link
            href="/learn"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0284c7] dark:text-[#00f0ff] hover:underline"
          >
            📖 Rules & Guides
          </Link>
          <Link
            href="/word-library"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#e11d48] dark:text-[#ff2a85] hover:underline"
          >
            📚 Word Categories
          </Link>
          <Link
            href="/game-modes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#16a34a] dark:text-[#39ff14] hover:underline"
          >
            ⚡ Game Modes
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#ea580c] dark:text-[#ff6b00] hover:underline"
          >
            📰 Party Game Blog
          </Link>
          <Link
            href="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#9333ea] dark:text-[#a855f7] hover:underline"
          >
            🎴 Printable Cards
          </Link>
          <Link
            href="/community"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#d97706] dark:text-[#ffe600] hover:underline"
          >
            🏆 Leaderboards & Discord
          </Link>
        </div>
      )}
    </header>
  );
}
