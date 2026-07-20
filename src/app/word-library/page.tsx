"use client";

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { DEFAULT_WORD_CATEGORIES } from "@/lib/gameEngine";
import { useLanguage } from "@/context/LanguageContext";
import { Play, Copy, Check, Plus, Sparkles } from "lucide-react";

export default function WordLibraryPage() {
  const { dictionary } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [customWordInput, setCustomWordInput] = useState<string>("");
  const [customWordsList, setCustomWordsList] = useState<string[]>([
    "Pineapple Pizza", "Quantum Computer", "Dancing Bear", "Laser Sword"
  ]);
  const [copied, setCopied] = useState<boolean>(false);

  const addCustomWord = () => {
    if (!customWordInput.trim()) return;
    setCustomWordsList([...customWordsList, customWordInput.trim()]);
    setCustomWordInput("");
  };

  const copyCustomPack = () => {
    navigator.clipboard.writeText(customWordsList.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categoriesToDisplay = selectedCat === "all"
    ? DEFAULT_WORD_CATEGORIES
    : DEFAULT_WORD_CATEGORIES.filter(c => c.id === selectedCat);

  // Vibrant color palettes for word badges
  const chipStyles = [
    "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-700",
    "bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/80 dark:text-sky-200 dark:border-sky-700",
    "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-700",
    "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/80 dark:text-rose-200 dark:border-rose-700",
    "bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950/80 dark:text-purple-200 dark:border-purple-700",
    "bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950/80 dark:text-indigo-200 dark:border-indigo-700",
    "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950/80 dark:text-teal-200 dark:border-teal-700",
    "bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-700",
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#e11d48] dark:bg-[#f43f5e] text-white font-bold">WORD LIBRARY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">{dictionary.wordLibraryHeading}</h1>
          <p className="font-sans text-base text-slate-700 dark:text-slate-200 max-w-xl mx-auto font-medium">
            {dictionary.wordLibrarySub}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-arcade text-lg font-bold">
          <button
            onClick={() => setSelectedCat("all")}
            className={`px-4 py-2.5 rounded-xl border-2 transition-all ${
              selectedCat === "all"
                ? "bg-[#fbbf24] text-slate-950 border-slate-900 shadow-md font-extrabold scale-[1.02]"
                : "bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-200 border-slate-300 dark:border-slate-800 hover:border-[#fbbf24]"
            }`}
          >
            🌟 {dictionary.catAll} ({DEFAULT_WORD_CATEGORIES.reduce((a, c) => a + c.words.length, 0)})
          </button>
          {DEFAULT_WORD_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2.5 rounded-xl border-2 transition-all ${
                selectedCat === cat.id
                  ? "bg-[#38bdf8] text-slate-950 border-slate-900 shadow-md font-extrabold scale-[1.02]"
                  : "bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-200 border-slate-300 dark:border-slate-800 hover:border-[#38bdf8]"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Word Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesToDisplay.map(cat => (
            <div key={cat.id} className="pixel-box p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{cat.icon}</span>
                  <div>
                    <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-extrabold">{cat.name}</h2>
                    <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">Difficulty: {cat.difficulty}</span>
                  </div>
                </div>
                <Link
                  href={`/play?cat=${cat.id}`}
                  className="pixel-btn pixel-btn-cyan text-xs font-bold"
                >
                  <Play className="w-3.5 h-3.5 inline mr-1" /> Play This
                </Link>
              </div>

              <p className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300">{cat.description}</p>

              {/* Colorful Word Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.words.map((w, idx) => (
                  <span
                    key={idx}
                    className={`border text-xs px-3 py-1 rounded-lg font-arcade font-bold shadow-xs transition-transform hover:scale-105 ${
                      chipStyles[idx % chipStyles.length]
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Word Generator */}
        <div className="pixel-box pixel-box-yellow p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#d97706] dark:text-[#fbbf24]">
            <Sparkles className="w-6 h-6" />
            <h2 className="font-pixel text-lg sm:text-xl font-extrabold">{dictionary.customGenTitle}</h2>
          </div>
          <p className="font-sans text-sm text-slate-700 dark:text-slate-300 font-medium">
            {dictionary.customGenSub}
          </p>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder={dictionary.customGenPlaceholder}
              value={customWordInput}
              onChange={(e) => setCustomWordInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addCustomWord()}
              className="bg-[var(--bg-card-alt)] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 font-arcade text-lg font-bold rounded-xl focus:outline-none focus:border-[#fbbf24] flex-1 shadow-inner"
            />
            <button
              onClick={addCustomWord}
              className="pixel-btn pixel-btn-yellow text-xs font-bold"
            >
              <Plus className="w-4 h-4 inline" /> {dictionary.customGenAdd}
            </button>
          </div>

          {/* Custom Words Chips */}
          {customWordsList.length > 0 && (
            <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-pixel text-slate-900 dark:text-slate-100 font-bold">
                <span>YOUR CUSTOM PACK ({customWordsList.length} WORDS):</span>
                <button
                  onClick={copyCustomPack}
                  className="hover:underline text-[#0284c7] dark:text-[#06b6d4] flex items-center gap-1 font-bold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? dictionary.customGenCopied : dictionary.customGenCopy}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {customWordsList.map((w, idx) => (
                  <span
                    key={idx}
                    className={`border text-xs px-3 py-1 rounded-lg font-arcade font-bold ${
                      chipStyles[idx % chipStyles.length]
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
