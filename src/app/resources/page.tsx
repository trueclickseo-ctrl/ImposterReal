"use client";

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import { Printer, FileText, GraduationCap, PartyPopper, Download, Check } from "lucide-react";

export default function ResourcesPage() {
  const { dictionary } = useLanguage();
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const triggerDownload = (name: string) => {
    setDownloaded(name);
    setTimeout(() => setDownloaded(null), 2500);
  };

  const samplePrintableCards = [
    { title: "Blockbuster Movies Pack", words: ["Inception", "Titanic", "Avatar", "Star Wars"] },
    { title: "Food Favorites Pack", words: ["Pizza", "Sushi", "Tacos", "Cheeseburger"] },
    { title: "Funny Words Pack", words: ["Rubber Duck", "Banana Peel", "Unicorn", "Sloth"] },
    { title: "Classroom Kids Pack", words: ["Dolphin", "Elephant", "Kangaroo", "Rainbow"] }
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#8b5cf6] text-white font-bold">RESOURCES & DOWNLOADS</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#8b5cf6] dark:text-[#a78bfa] font-extrabold">Printable Cards & Event Kits</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-xl mx-auto">
            Free printable card sheets, PDF rules, classroom activity guides, and party planning kits.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="pixel-box pixel-box-yellow p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Printer className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Printable Card Sheets</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">PDF • 300 DPI High Resolution</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">
              Printable card decks with cut lines for offline game nights when smartphones aren't available.
            </p>
            <button
              onClick={() => triggerDownload("cards")}
              className="pixel-btn pixel-btn-yellow text-xs w-full font-bold"
            >
              {downloaded === "cards" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "cards" ? "Downloading PDF Card Pack..." : "Download Printable Cards (PDF)"}
            </button>
          </div>

          <div className="pixel-box pixel-box-cyan p-6 space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Quick Rule Sheets</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">1-Page PDF Reference</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">
              Concise single-page rule cheat sheet to hand out to players during party game setups.
            </p>
            <button
              onClick={() => triggerDownload("rules")}
              className="pixel-btn pixel-btn-cyan text-xs w-full font-bold"
            >
              {downloaded === "rules" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "rules" ? "Downloading Rule Sheet..." : "Download PDF Rule Sheet"}
            </button>
          </div>

          <div className="pixel-box pixel-box-pink p-6 space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Teacher's Classroom Guide</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">Educational Activity Guide</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">
              Lesson plans and vocabulary reinforcement activities for ESL and K-12 educators.
            </p>
            <button
              onClick={() => triggerDownload("teacher")}
              className="pixel-btn pixel-btn-pink text-xs w-full font-bold"
            >
              {downloaded === "teacher" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "teacher" ? "Downloading Teacher Kit..." : "Download Teacher Guide (PDF)"}
            </button>
          </div>

          <div className="pixel-box p-6 space-y-4 border-2 border-[#10b981] dark:border-[#34d399]">
            <div className="flex items-center gap-3">
              <PartyPopper className="w-8 h-8 text-[#10b981] dark:text-[#34d399]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Party Host Toolkit</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">Event Host Bundle</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">
              Icebreaker prompts, timer scripts, and host scorekeeper sheets.
            </p>
            <button
              onClick={() => triggerDownload("host")}
              className="pixel-btn pixel-btn-green text-xs w-full font-bold"
            >
              {downloaded === "host" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "host" ? "Downloading Host Kit..." : "Download Host Kit (ZIP)"}
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
