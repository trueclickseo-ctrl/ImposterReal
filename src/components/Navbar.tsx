"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Gamepad2, BookOpen, Library, Sparkles, Newspaper, FolderDown, Globe, Menu, X, BookMarked, Sun, Moon, QrCode } from "lucide-react";
import { LOCALES, SupportedLocale } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { locale, setLocale, dictionary } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-card)]/95 backdrop-blur-xl border-b-2 border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-[#fbbf24] border-2 border-slate-900 rounded-xl flex items-center justify-center font-pixel text-slate-900 font-extrabold text-xl shadow-[3px_3px_0px_#0f172a] group-hover:scale-105 transition-transform">
            👾
          </div>
          <div>
            <span className="font-pixel text-lg text-slate-900 dark:text-slate-100 tracking-tight block font-extrabold leading-none">
              IMPOSTER
            </span>
            <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase tracking-wider block font-bold mt-0.5">
              {dictionary.navBrandSub}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 font-arcade text-base uppercase tracking-wide font-bold mx-auto">
          <Link href="/play" className="text-slate-700 dark:text-slate-200 hover:text-[#d97706] dark:hover:text-[#fbbf24] flex items-center gap-1.5 transition-colors px-1 py-0.5">
            <Gamepad2 className="w-4 h-4 text-[#d97706] dark:text-[#fbbf24]" />
            {dictionary.navPlay}
          </Link>
          <Link href="/encyclopedia" className="text-[#d97706] dark:text-[#fbbf24] hover:text-[#0284c7] dark:hover:text-[#06b6d4] flex items-center gap-1.5 transition-colors font-extrabold px-1 py-0.5">
            <BookMarked className="w-4 h-4 text-[#d97706] dark:text-[#fbbf24]" />
            {dictionary.navEncyclopedia}
          </Link>
          <Link href="/learn" className="text-slate-700 dark:text-slate-200 hover:text-[#0284c7] dark:hover:text-[#06b6d4] flex items-center gap-1.5 transition-colors px-1 py-0.5">
            <BookOpen className="w-4 h-4 text-[#0284c7] dark:text-[#06b6d4]" />
            {dictionary.navLearn}
          </Link>
          <Link href="/word-library" className="text-slate-700 dark:text-slate-200 hover:text-[#e11d48] dark:hover:text-[#f43f5e] flex items-center gap-1.5 transition-colors px-1 py-0.5">
            <Library className="w-4 h-4 text-[#e11d48] dark:text-[#f43f5e]" />
            {dictionary.navWords}
          </Link>
          <Link href="/game-modes" className="text-slate-700 dark:text-slate-200 hover:text-[#10b981] dark:hover:text-[#34d399] flex items-center gap-1.5 transition-colors px-1 py-0.5">
            <Sparkles className="w-4 h-4 text-[#10b981] dark:text-[#34d399]" />
            {dictionary.navModes}
          </Link>
          <Link href="/blog" className="text-slate-700 dark:text-slate-200 hover:text-[#ea580c] dark:hover:text-[#fb923c] flex items-center gap-1.5 transition-colors px-1 py-0.5">
            <Newspaper className="w-4 h-4 text-[#ea580c] dark:text-[#fb923c]" />
            {dictionary.navBlog}
          </Link>
          <Link href="/resources" className="text-slate-700 dark:text-slate-200 hover:text-[#8b5cf6] dark:hover:text-[#a78bfa] flex items-center gap-1.5 transition-colors px-1 py-0.5">
            <FolderDown className="w-4 h-4 text-[#8b5cf6] dark:text-[#a78bfa]" />
            {dictionary.navCards}
          </Link>
        </nav>

        {/* Separated Action Controls & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3 pl-6 border-l-2 border-slate-300 dark:border-slate-800 ml-4">
          
          {/* Theme Switch Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 border-2 border-slate-900 dark:border-slate-100 text-xs font-pixel rounded-xl flex items-center gap-1.5 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000] bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-100 font-extrabold hover:scale-105 transition-all cursor-pointer"
            title={theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
            aria-label="Toggle Light or Dark Mode"
          >
            {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            {theme === "light" ? "DARK" : "LIGHT"}
          </button>

          {/* Language Selector */}
          <div className="relative flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 rounded-xl px-2.5 py-1 text-slate-900 dark:text-slate-100 font-arcade text-xs font-bold shadow-xs">
            <Globe className="w-4 h-4 text-[#0284c7] dark:text-[#06b6d4]" />
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as SupportedLocale)}
              className="bg-transparent border-none focus:outline-none cursor-pointer font-arcade text-xs font-bold pr-1 text-slate-900 dark:text-slate-100"
              aria-label="Language selector"
            >
              {LOCALES.map((loc) => (
                <option key={loc.code} value={loc.code} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-bold">
                  {loc.flag} {loc.name} ({loc.nativeName})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Play CTA */}
          <Link
            href="/play"
            className="pixel-btn pixel-btn-cyan text-xs font-extrabold ml-1 animate-pulse"
          >
            {dictionary.playNowButton}
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

          <Link href="/play" onClick={() => setMobileMenuOpen(false)} className="block text-[#d97706] dark:text-[#fbbf24] hover:underline">
            🎮 {dictionary.navPlay}
          </Link>
          <Link href="/encyclopedia" onClick={() => setMobileMenuOpen(false)} className="block text-[#d97706] dark:text-[#fbbf24] hover:underline font-extrabold">
            📚 {dictionary.navEncyclopedia}
          </Link>
          <Link href="/learn" onClick={() => setMobileMenuOpen(false)} className="block text-[#0284c7] dark:text-[#06b6d4] hover:underline">
            📖 {dictionary.navLearn}
          </Link>
          <Link href="/word-library" onClick={() => setMobileMenuOpen(false)} className="block text-[#e11d48] dark:text-[#f43f5e] hover:underline">
            📚 {dictionary.navWords}
          </Link>
          <Link href="/game-modes" onClick={() => setMobileMenuOpen(false)} className="block text-[#10b981] dark:text-[#34d399] hover:underline">
            ⚡ {dictionary.navModes}
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-[#ea580c] dark:text-[#fb923c] hover:underline">
            📰 {dictionary.navBlog}
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="block text-[#8b5cf6] dark:text-[#a78bfa] hover:underline">
            🎴 {dictionary.navCards}
          </Link>
        </div>
      )}
    </header>
  );
}
