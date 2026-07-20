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
    <header className="sticky top-0 z-50 bg-[var(--bg-card)]/90 backdrop-blur-xl border-b-2 border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#fbbf24] border-2 border-slate-900 rounded-xl flex items-center justify-center font-pixel text-slate-900 font-extrabold text-xl shadow-[3px_3px_0px_#0f172a] group-hover:scale-105 transition-transform">
            👾
          </div>
          <div>
            <span className="font-pixel text-lg text-slate-900 dark:text-slate-100 tracking-tight block font-extrabold leading-none">
              IMPOSTER
            </span>
            <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase tracking-wider block font-bold mt-0.5">
              ENCYCLOPEDIA & GAME
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-arcade text-base uppercase tracking-wide font-bold">
          <Link href="/play" className="text-slate-700 dark:text-slate-200 hover:text-[#d97706] dark:hover:text-[#fbbf24] flex items-center gap-1.5 transition-colors">
            <Gamepad2 className="w-4 h-4 text-[#d97706] dark:text-[#fbbf24]" />
            Play
          </Link>
          <Link href="/encyclopedia" className="text-[#d97706] dark:text-[#fbbf24] hover:text-[#0284c7] dark:hover:text-[#06b6d4] flex items-center gap-1.5 transition-colors font-extrabold">
            <BookMarked className="w-4 h-4 text-[#d97706] dark:text-[#fbbf24]" />
            Encyclopedia
          </Link>
          <Link href="/learn" className="text-slate-700 dark:text-slate-200 hover:text-[#0284c7] dark:hover:text-[#06b6d4] flex items-center gap-1.5 transition-colors">
            <BookOpen className="w-4 h-4 text-[#0284c7] dark:text-[#06b6d4]" />
            Learn
          </Link>
          <Link href="/word-library" className="text-slate-700 dark:text-slate-200 hover:text-[#e11d48] dark:hover:text-[#f43f5e] flex items-center gap-1.5 transition-colors">
            <Library className="w-4 h-4 text-[#e11d48] dark:text-[#f43f5e]" />
            Words
          </Link>
          <Link href="/game-modes" className="text-slate-700 dark:text-slate-200 hover:text-[#10b981] dark:hover:text-[#34d399] flex items-center gap-1.5 transition-colors">
            <Sparkles className="w-4 h-4 text-[#10b981] dark:text-[#34d399]" />
            Modes
          </Link>
          <Link href="/blog" className="text-slate-700 dark:text-slate-200 hover:text-[#ea580c] dark:hover:text-[#fb923c] flex items-center gap-1.5 transition-colors">
            <Newspaper className="w-4 h-4 text-[#ea580c] dark:text-[#fb923c]" />
            Blog
          </Link>
          <Link href="/resources" className="text-slate-700 dark:text-slate-200 hover:text-[#8b5cf6] dark:hover:text-[#a78bfa] flex items-center gap-1.5 transition-colors">
            <FolderDown className="w-4 h-4 text-[#8b5cf6] dark:text-[#a78bfa]" />
            Cards
          </Link>
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Light / Dark Theme Switch Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 border-2 border-slate-900 dark:border-white text-xs font-pixel rounded-xl flex items-center gap-1.5 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000] bg-[#fbbf24] text-slate-900 font-extrabold hover:scale-105 transition-all"
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
            className={`px-3 py-1.5 border-2 border-slate-900 dark:border-white text-xs font-pixel rounded-xl flex items-center gap-1 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000] ${
              crtEnabled ? 'bg-[#38bdf8] text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
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
            className={`p-2 border-2 border-slate-900 dark:border-white text-xs font-pixel rounded-xl shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000] ${
              soundEnabled ? 'bg-[#34d399] text-slate-950' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
            title="Toggle Audio Effects"
            aria-label="Toggle sound effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* 14-Language Switcher Dropdown */}
          <div className="relative flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 px-3 py-1.5 rounded-xl shadow-sm">
            <Globe className="w-4 h-4 text-[#d97706] dark:text-[#fbbf24]" />
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as SupportedLocale)}
              className="bg-transparent text-slate-900 dark:text-slate-100 font-arcade text-base font-bold uppercase focus:outline-none cursor-pointer"
              aria-label={t("languageSelectLabel")}
            >
              {LOCALES.map((loc) => (
                <option key={loc.code} value={loc.code} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                  {loc.flag} {loc.name} ({loc.nativeName})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Play CTA */}
          <Link
            href="/play"
            className="pixel-btn pixel-btn-cyan text-xs font-extrabold"
            aria-label={UI_MICROCOPY.startGame.plainAccessibilityFallback}
          >
            {UI_MICROCOPY.startGame.retroDisplay}
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-[#fbbf24] border-2 border-slate-900 rounded-xl text-slate-900 shadow-sm"
          aria-label="Toggle navigation drawer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-card)] border-b-2 border-slate-200 dark:border-slate-800 px-6 py-6 font-arcade text-xl font-bold space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-pixel text-slate-600 dark:text-slate-400">SETTINGS</span>
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-slate-900 rounded-xl text-xs font-pixel bg-[#fbbf24] text-slate-900 font-bold"
            >
              {theme === "light" ? "🌙 DARK THEME" : "☀️ LIGHT THEME"}
            </button>
          </div>

          <div className="flex items-center gap-2 py-2">
            <Globe className="w-5 h-5 text-[#d97706] dark:text-[#fbbf24]" />
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as SupportedLocale)}
              className="bg-slate-100 dark:bg-slate-800 border-2 border-slate-900 text-slate-900 dark:text-slate-100 p-2.5 font-arcade text-lg font-bold rounded-xl w-full"
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
            className="block text-[#d97706] dark:text-[#fbbf24] hover:underline"
          >
            🎮 Play Browser Game
          </Link>
          <Link
            href="/encyclopedia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#d97706] dark:text-[#fbbf24] hover:underline font-extrabold"
          >
            📚 Social Deduction Encyclopedia
          </Link>
          <Link
            href="/learn"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0284c7] dark:text-[#06b6d4] hover:underline"
          >
            📖 Rules & Guides
          </Link>
          <Link
            href="/word-library"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#e11d48] dark:text-[#f43f5e] hover:underline"
          >
            📚 Word Categories
          </Link>
          <Link
            href="/game-modes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#10b981] dark:text-[#34d399] hover:underline"
          >
            ⚡ Game Modes
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#ea580c] dark:text-[#fb923c] hover:underline"
          >
            📰 Party Game Blog
          </Link>
          <Link
            href="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#8b5cf6] dark:text-[#a78bfa] hover:underline"
          >
            🎴 Printable Cards
          </Link>
          <Link
            href="/community"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#d97706] dark:text-[#fbbf24] hover:underline"
          >
            🏆 Leaderboards & Discord
          </Link>
        </div>
      )}
    </header>
  );
}
