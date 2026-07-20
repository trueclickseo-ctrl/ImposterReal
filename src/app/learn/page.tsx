"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, ShieldCheck, Target, Award, HelpCircle, ArrowRight, Zap } from "lucide-react";

export default function LearnPage() {
  const { dictionary } = useLanguage();

  const faqItems = [
    {
      question: "What is the goal of the Imposter game?",
      answer: "Civilians aim to identify and vote out the secret Imposter. The Imposter aims to blend in by giving convincing clues and avoiding being voted out."
    },
    {
      question: "What happens if the Imposter guesses the secret word?",
      answer: "In advanced rules, if the Imposter is voted out, they get one final chance to guess the secret word. If correct, they steal the victory!"
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">LEARN HUB</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">{dictionary.rulesHeading}</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about playing, hosting, and winning Imposter party games.
          </p>
        </div>

        {/* 6 Subpage Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/learn/rules" className="pixel-box pixel-box-yellow p-6 space-y-3">
            <BookOpen className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Official Rules</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Complete step-by-step rulebook for 3–20 players.</p>
            <div className="text-sm font-arcade text-[#d97706] dark:text-[#fbbf24] flex items-center gap-1 font-bold">Read Rules <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/what-is-imposter" className="pixel-box pixel-box-cyan p-6 space-y-3">
            <Zap className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">What Is Imposter?</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Core concept, game mechanics, and origin story.</p>
            <div className="text-sm font-arcade text-[#0284c7] dark:text-[#06b6d4] flex items-center gap-1 font-bold">Read Overview <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/beginner-guide" className="pixel-box pixel-box-pink p-6 space-y-3">
            <Target className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Beginner Guide</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">First-time player tips for giving great clues.</p>
            <div className="text-sm font-arcade text-[#e11d48] dark:text-[#f43f5e] flex items-center gap-1 font-bold">Read Guide <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/advanced-strategy" className="pixel-box p-6 border-2 border-[#10b981] dark:border-[#34d399] space-y-3">
            <Award className="w-8 h-8 text-[#10b981] dark:text-[#34d399]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Advanced Strategy</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Bluffing tactics, linguistic signals, and trap clues.</p>
            <div className="text-sm font-arcade text-[#10b981] dark:text-[#34d399] flex items-center gap-1 font-bold">Read Strategy <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/scoring-system" className="pixel-box p-6 border-2 border-[#ea580c] dark:border-[#fb923c] space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#ea580c] dark:text-[#fb923c]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Scoring System</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Points tracking for multi-round tournaments.</p>
            <div className="text-sm font-arcade text-[#ea580c] dark:text-[#fb923c] flex items-center gap-1 font-bold">Read Scoring <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/faq" className="pixel-box p-6 border-2 border-[#8b5cf6] dark:border-[#a78bfa] space-y-3">
            <HelpCircle className="w-8 h-8 text-[#8b5cf6] dark:text-[#a78bfa]" />
            <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">FAQ Directory</h2>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Answers to common edge cases and player questions.</p>
            <div className="text-sm font-arcade text-[#8b5cf6] dark:text-[#a78bfa] flex items-center gap-1 font-bold">Read FAQ <ArrowRight className="w-4 h-4" /></div>
          </Link>
        </div>

        {/* Detailed Guide Content */}
        <article className="pixel-box pixel-box-cyan p-8 space-y-6 text-slate-800 dark:text-slate-200 font-sans text-base leading-relaxed">
          <h2 className="font-pixel text-xl sm:text-2xl text-[#0284c7] dark:text-[#06b6d4] font-bold">Understanding Social Deduction Mechanics</h2>
          
          <p className="font-medium">
            Social deduction games rely on asymmetrical information: some players possess complete knowledge (the civilians who know the secret word), while one or more players have incomplete knowledge (the secret Imposter). The central psychological dynamic involves <strong>signaling</strong> and <strong>detection</strong>.
          </p>

          <h3 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">The Art of Giving Clues</h3>
          <p className="font-medium">
            When giving a clue as a civilian, your objective is twofold:
          </p>
          <ul className="list-disc list-inside space-y-2 font-semibold">
            <li><strong>Signal to fellow civilians:</strong> Prove that you know the secret word by referencing a distinct attribute or sub-association.</li>
            <li><strong>Deny information to the Imposter:</strong> Avoid clues that are too direct or obvious (e.g. if the word is "Pizza", giving the clue "Pepperoni" immediately reveals the word to the Imposter).</li>
          </ul>

          <h3 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">How the Imposter Bluffs</h3>
          <p className="font-medium">
            As the Imposter, listen carefully to early clues. Synthesize common themes (e.g. if previous players said "Cold", "Italy", and "Spoon", deduce the category is frozen desserts and say "Cream").
          </p>
        </article>

      </div>
    </>
  );
}
