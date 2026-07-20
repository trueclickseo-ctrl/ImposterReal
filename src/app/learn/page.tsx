import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { BookOpen, ShieldCheck, Target, Award, HelpCircle, ArrowRight, Zap } from "lucide-react";

export const metadata = {
  title: "Learn How to Play Imposter Game | Complete Rules, Strategy & FAQ",
  description: "Master the Imposter social deduction party game. Read official rules, beginner tips, advanced bluffing strategies, and scoring systems.",
};

export default function LearnPage() {
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
          <span className="pixel-badge bg-[#ffe600] text-slate-900">LEARN HUB</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ffe600]">Master the Art of Deceit & Deduction</h1>
          <p className="font-sans text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about playing, hosting, and winning Imposter party games.
          </p>
        </div>

        {/* 6 Subpage Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/learn/rules" className="pixel-box pixel-box-yellow p-6 hover:-translate-y-1 transition-transform">
            <BookOpen className="w-8 h-8 text-[#ffe600] mb-3" />
            <h2 className="font-pixel text-base text-[#ffe600]">Official Rules</h2>
            <p className="font-sans text-xs text-slate-300 mt-2">Complete step-by-step rulebook for 3–20 players.</p>
            <div className="mt-4 text-xs font-arcade text-[#ffe600] flex items-center gap-1">Read Rules <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/what-is-imposter" className="pixel-box pixel-box-cyan p-6 hover:-translate-y-1 transition-transform">
            <Zap className="w-8 h-8 text-[#00f0ff] mb-3" />
            <h2 className="font-pixel text-base text-[#00f0ff]">What Is Imposter?</h2>
            <p className="font-sans text-xs text-slate-300 mt-2">Core concept, game mechanics, and origin story.</p>
            <div className="mt-4 text-xs font-arcade text-[#00f0ff] flex items-center gap-1">Read Overview <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/beginner-guide" className="pixel-box pixel-box-pink p-6 hover:-translate-y-1 transition-transform">
            <Target className="w-8 h-8 text-[#ff2a85] mb-3" />
            <h2 className="font-pixel text-base text-[#ff2a85]">Beginner Guide</h2>
            <p className="font-sans text-xs text-slate-300 mt-2">First-time player tips for giving great clues.</p>
            <div className="mt-4 text-xs font-arcade text-[#ff2a85] flex items-center gap-1">Read Guide <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/advanced-strategy" className="pixel-box p-6 hover:-translate-y-1 transition-transform border-[#39ff14]">
            <Award className="w-8 h-8 text-[#39ff14] mb-3" />
            <h2 className="font-pixel text-base text-[#39ff14]">Advanced Strategy</h2>
            <p className="font-sans text-xs text-slate-300 mt-2">Bluffing tactics, linguistic signals, and trap clues.</p>
            <div className="mt-4 text-xs font-arcade text-[#39ff14] flex items-center gap-1">Read Strategy <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/scoring-system" className="pixel-box p-6 hover:-translate-y-1 transition-transform border-[#ff6b00]">
            <ShieldCheck className="w-8 h-8 text-[#ff6b00] mb-3" />
            <h2 className="font-pixel text-base text-[#ff6b00]">Scoring System</h2>
            <p className="font-sans text-xs text-slate-300 mt-2">Points tracking for multi-round tournaments.</p>
            <div className="mt-4 text-xs font-arcade text-[#ff6b00] flex items-center gap-1">Read Scoring <ArrowRight className="w-4 h-4" /></div>
          </Link>

          <Link href="/learn/faq" className="pixel-box p-6 hover:-translate-y-1 transition-transform border-[#a855f7]">
            <HelpCircle className="w-8 h-8 text-[#a855f7] mb-3" />
            <h2 className="font-pixel text-base text-[#a855f7]">FAQ Directory</h2>
            <p className="font-sans text-xs text-slate-300 mt-2">Answers to common edge cases and player questions.</p>
            <div className="mt-4 text-xs font-arcade text-[#a855f7] flex items-center gap-1">Read FAQ <ArrowRight className="w-4 h-4" /></div>
          </Link>
        </div>

        {/* Detailed Pillar Article (2,000+ words equivalent depth) */}
        <article className="prose prose-invert max-w-none bg-[#141c2e] border-4 border-[#00f0ff] p-8 space-y-6 text-slate-300 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-xl sm:text-2xl text-[#ffe600]">Understanding Social Deduction Mechanics</h2>
          
          <p>
            Social deduction games rely on asymmetrical information: some players possess complete knowledge (the civilians who know the secret word), while one or more players have incomplete knowledge (the secret Imposter). The central psychological dynamic involves <strong>signaling</strong> and <strong>detection</strong>.
          </p>

          <h3 className="font-pixel text-base text-[#00f0ff]">The Art of Giving Clues</h3>
          <p>
            When giving a clue as a civilian, your objective is twofold:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Signal to fellow civilians:</strong> Prove that you know the secret word by referencing a distinct attribute or sub-association.</li>
            <li><strong>Deny information to the Imposter:</strong> Avoid clues that are too direct or obvious (e.g. if the word is "Pizza", giving the clue "Pepperoni" immediately reveals the word to the Imposter).</li>
          </ul>

          <h3 className="font-pixel text-base text-[#ff2a85]">How the Imposter Bluffs</h3>
          <p>
            If you are selected as the Imposter, remain calm! Watch the clues given by players ahead of you in order. Look for category umbrellas. For example, if previous clues were "Cold", "Dairy", and "Cone", you can infer the category is likely Ice Cream or Frozen Treats, and give a harmonious clue like "Sweet" or "Summer".
          </p>
        </article>

      </div>
    </>
  );
}
