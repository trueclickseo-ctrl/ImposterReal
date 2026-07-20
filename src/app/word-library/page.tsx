"use client";

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { DEFAULT_WORD_CATEGORIES, WordCategory } from "@/lib/gameEngine";
import { Library, Sparkles, Copy, Check, Plus, Play, RefreshCw } from "lucide-react";

export default function WordLibraryPage() {
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

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#ff2a85] text-white">WORD LIBRARY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ff2a85]">1,000+ Word Categories & Generators</h1>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            Browse curated category lists or create custom word sets for your party games.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-arcade text-lg">
          <button
            onClick={() => setSelectedCat("all")}
            className={`px-4 py-2 border-2 transition-all ${
              selectedCat === "all"
                ? "bg-[#ffe600] text-slate-900 border-white shadow-[2px_2px_0px_#fff]"
                : "bg-[#1e293b] text-slate-200 border-slate-700 hover:border-[#ffe600]"
            }`}
          >
            🌟 All Categories ({DEFAULT_WORD_CATEGORIES.reduce((a, c) => a + c.words.length, 0)})
          </button>
          {DEFAULT_WORD_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 border-2 transition-all ${
                selectedCat === cat.id
                  ? "bg-[#00f0ff] text-slate-900 border-white shadow-[2px_2px_0px_#fff]"
                  : "bg-[#1e293b] text-slate-200 border-slate-700 hover:border-[#00f0ff]"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Word Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesToDisplay.map(cat => (
            <div key={cat.id} className="pixel-box p-6 bg-[#141c2e] space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h2 className="font-pixel text-base text-[#ffe600]">{cat.name}</h2>
                    <span className="font-arcade text-xs text-slate-400 uppercase">Difficulty: {cat.difficulty}</span>
                  </div>
                </div>
                <Link
                  href={`/play?cat=${cat.id}`}
                  className="pixel-btn pixel-btn-cyan text-xs"
                >
                  <Play className="w-3 h-3 inline mr-1" /> Play This
                </Link>
              </div>

              <p className="font-sans text-xs text-slate-300">{cat.description}</p>

              {/* Sample Word Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.words.map((w, idx) => (
                  <span key={idx} className="bg-[#1e293b] border border-slate-700 text-slate-200 text-xs px-2.5 py-1 font-mono">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Word Pack Generator Section */}
        <div className="pixel-box pixel-box-yellow p-6 sm:p-10 bg-[#141c2e] space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#ffe600]" />
            <div>
              <h2 className="font-pixel text-xl text-[#ffe600]">Custom Word Generator</h2>
              <p className="font-sans text-xs text-slate-300">Build your own custom word pack to use in Imposter games!</p>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter custom word or phrase..."
              value={customWordInput}
              onChange={(e) => setCustomWordInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addCustomWord()}
              className="bg-[#0a0e1a] border-2 border-slate-700 text-slate-100 px-4 py-2 font-arcade text-lg focus:outline-none focus:border-[#ffe600] flex-1"
            />
            <button
              onClick={addCustomWord}
              className="pixel-btn pixel-btn-yellow text-xs"
            >
              <Plus className="w-4 h-4 inline" /> Add Word
            </button>
          </div>

          <div className="bg-[#0a0e1a] border-2 border-slate-800 p-4 space-y-3">
            <div className="flex justify-between items-center font-pixel text-xs text-[#00f0ff]">
              <span>YOUR CUSTOM PACK ({customWordsList.length} WORDS):</span>
              <button
                onClick={copyCustomPack}
                className="text-xs text-[#ffe600] hover:underline flex items-center gap-1"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Words"}
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {customWordsList.map((word, idx) => (
                <span key={idx} className="bg-[#1e293b] border border-[#ffe600] text-[#ffe600] text-xs px-3 py-1 font-mono flex items-center gap-2">
                  {word}
                  <button
                    onClick={() => setCustomWordsList(customWordsList.filter((_, i) => i !== idx))}
                    className="text-red-400 hover:text-white"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
