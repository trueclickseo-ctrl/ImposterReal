"use client";

import ImposterGameUI from "@/components/ImposterGameUI";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import { Smartphone, Monitor, Key } from "lucide-react";

export default function PlayPage() {
  const { dictionary } = useLanguage();

  const faqItems = [
    {
      question: "Do I need to download an app to play Imposter?",
      answer: "No! Imposter runs 100% in your mobile or desktop web browser with instant loading and zero installation."
    },
    {
      question: "Can we play with just one phone?",
      answer: "Yes, our Pass & Play mode allows up to 20 players to pass a single smartphone around to reveal their secret roles secretly."
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      <div className="space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#06b6d4] text-slate-950 font-bold">INSTANT BROWSER PLAY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">Play Imposter Party Game</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-xl mx-auto">
            Choose your game mode below: pass one device around in person, or create a room code to join online.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-arcade text-lg">
          <div className="pixel-box pixel-box-yellow p-5 text-center space-y-2">
            <Smartphone className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24] mx-auto" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base">Mobile Pass & Play</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-300 font-medium">Pass one phone around the circle to view secret words.</p>
          </div>

          <div className="pixel-box pixel-box-cyan p-5 text-center space-y-2">
            <Key className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4] mx-auto" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base">Room Code Lobby</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-300 font-medium">Create private rooms with custom room codes for online groups.</p>
          </div>

          <div className="pixel-box pixel-box-pink p-5 text-center space-y-2">
            <Monitor className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e] mx-auto" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100 font-pixel text-base">Desktop & Smart TV</h3>
            <p className="text-sm font-sans text-slate-700 dark:text-slate-300 font-medium">Host game night on big screen monitors, laptops, or TVs.</p>
          </div>
        </div>

        {/* Embedded Full Game Loop */}
        <ImposterGameUI />

        {/* Gameplay Instructions */}
        <div className="pixel-box p-6 sm:p-8 space-y-4 my-12">
          <h2 className="font-pixel text-xl text-[#0284c7] dark:text-[#06b6d4] font-bold">Game Rules Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-sm">
            <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-[#d97706] dark:text-[#fbbf24] text-base block">Step 1: Role Assignment</span>
              <p className="text-slate-700 dark:text-slate-300 font-medium">Everyone sees the secret word except the secret Imposter who receives a warning card.</p>
            </div>
            <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-[#0284c7] dark:text-[#06b6d4] text-base block">Step 2: Give Clues</span>
              <p className="text-slate-700 dark:text-slate-300 font-medium">Take turns saying ONE word clue. Civilians give subtle clues; the Imposter must bluff.</p>
            </div>
            <div className="bg-[var(--bg-card-alt)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-[#e11d48] dark:text-[#f43f5e] text-base block">Step 3: Vote & Unmask</span>
              <p className="text-slate-700 dark:text-slate-300 font-medium">Discuss suspicious clues and vote! Civilians win if they unmask the Imposter.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
