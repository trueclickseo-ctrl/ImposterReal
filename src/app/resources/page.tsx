"use client";

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { FolderDown, Printer, FileText, GraduationCap, PartyPopper, Download, Check } from "lucide-react";

export default function ResourcesPage() {
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
          <span className="pixel-badge bg-[#a855f7] text-white">RESOURCES & DOWNLOADS</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#a855f7]">Printable Cards & Event Kits</h1>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            Free printable card sheets, PDF rules, classroom activity guides, and party planning kits.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="pixel-box pixel-box-yellow p-6 bg-[#141c2e] space-y-4">
            <div className="flex items-center gap-3">
              <Printer className="w-8 h-8 text-[#ffe600]" />
              <div>
                <h2 className="font-pixel text-lg text-[#ffe600]">Printable Card Sheets</h2>
                <span className="font-arcade text-xs text-slate-400">PDF • 300 DPI High Resolution</span>
              </div>
            </div>
            <p className="font-sans text-xs text-slate-300">
              Printable card decks with cut lines for offline game nights when smartphones aren't available.
            </p>
            <button
              onClick={() => triggerDownload("cards")}
              className="pixel-btn pixel-btn-yellow text-xs w-full"
            >
              {downloaded === "cards" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "cards" ? "Downloading PDF Card Pack..." : "Download Printable Cards (PDF)"}
            </button>
          </div>

          <div className="pixel-box pixel-box-cyan p-6 bg-[#141c2e] space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#00f0ff]" />
              <div>
                <h2 className="font-pixel text-lg text-[#00f0ff]">Quick Rule Sheets</h2>
                <span className="font-arcade text-xs text-slate-400">1-Page PDF Reference</span>
              </div>
            </div>
            <p className="font-sans text-xs text-slate-300">
              Concise single-page rule cheat sheet to hand out to players during party game setups.
            </p>
            <button
              onClick={() => triggerDownload("rules")}
              className="pixel-btn pixel-btn-cyan text-xs w-full"
            >
              {downloaded === "rules" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "rules" ? "Downloading Rule Sheet..." : "Download PDF Rule Sheet"}
            </button>
          </div>

          <div className="pixel-box pixel-box-pink p-6 bg-[#141c2e] space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#ff2a85]" />
              <div>
                <h2 className="font-pixel text-lg text-[#ff2a85]">Teacher's Classroom Guide</h2>
                <span className="font-arcade text-xs text-slate-400">Educational Activity Guide</span>
              </div>
            </div>
            <p className="font-sans text-xs text-slate-300">
              Lesson plans and vocabulary reinforcement activities for ESL and K-12 educators.
            </p>
            <button
              onClick={() => triggerDownload("teacher")}
              className="pixel-btn pixel-btn-pink text-xs w-full"
            >
              {downloaded === "teacher" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "teacher" ? "Downloading Teacher Kit..." : "Download Teacher Guide (PDF)"}
            </button>
          </div>

          <div className="pixel-box p-6 bg-[#141c2e] space-y-4 border-4 border-[#39ff14]">
            <div className="flex items-center gap-3">
              <PartyPopper className="w-8 h-8 text-[#39ff14]" />
              <div>
                <h2 className="font-pixel text-lg text-[#39ff14]">Event Planning Kit</h2>
                <span className="font-arcade text-xs text-slate-400">Party Host Checklist</span>
              </div>
            </div>
            <p className="font-sans text-xs text-slate-300">
              Complete checklist for hosting large group games, tournaments, and birthday parties.
            </p>
            <button
              onClick={() => triggerDownload("event")}
              className="pixel-btn pixel-btn-green text-xs w-full"
            >
              {downloaded === "event" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "event" ? "Downloading Event Kit..." : "Download Event Kit (PDF)"}
            </button>
          </div>

        </div>

        {/* Printable Card Preview Sheet */}
        <div className="bg-[#141c2e] border-4 border-[#ffe600] p-6 sm:p-8 space-y-4">
          <h2 className="font-pixel text-lg text-[#ffe600]">Printable Card Sheet Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {samplePrintableCards.map((card, idx) => (
              <div key={idx} className="bg-[#1e293b] border-2 border-dashed border-[#ffe600] p-4 text-center space-y-2">
                <span className="font-pixel text-xs text-[#ffe600] block">{card.title}</span>
                <div className="space-y-1 font-mono text-xs text-slate-300">
                  {card.words.map((w, i) => (
                    <div key={i} className="bg-[#0a0e1a] border border-slate-700 py-1">{w}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
