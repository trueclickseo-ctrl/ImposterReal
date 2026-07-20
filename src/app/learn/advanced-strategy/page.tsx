import SEOHead from "@/components/SEOHead";
import Link from "next/link";

export const metadata = {
  title: "Advanced Strategy for Imposter | Master Bluffing & Traps",
  description: "Level up your Imposter gameplay with advanced tactics: trap clues, linguistic anchoring, turn-order manipulation, and counter-bluffing.",
};

export default function AdvancedStrategyPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#39ff14] text-slate-900">ADVANCED STRATEGY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#39ff14]">Advanced Imposter Bluffing & Deduction</h1>
          <p className="font-sans text-sm text-slate-300">Tactics for competitive players and tournament hosts.</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#39ff14] p-6 sm:p-10 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-base text-[#ffe600]">Technique 1: Trap Clues (Civilian Strategy)</h2>
          <p>
            Give a clue that relates to a secondary, subtle aspect of the secret word. If the word is <em>"Titanic"</em>, say <em>"Iceberg"</em> or <em>"Celine"</em> rather than <em>"Ship"</em>. This forces the Imposter to guess blindly.
          </p>

          <h2 className="font-pixel text-base text-[#00f0ff]">Technique 2: Umbrella Pivoting (Imposter Strategy)</h2>
          <p>
            When bluffing as the Imposter, use broad sensory words (e.g. <em>"Heavy"</em>, <em>"Bright"</em>, <em>"Noisy"</em>, <em>"Classic"</em>) that apply to 80% of items in that category.
          </p>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <Link href="/play" className="pixel-btn pixel-btn-green text-xs">🎮 Play Competitive Game</Link>
            <Link href="/learn/scoring-system" className="font-arcade text-lg text-[#ff6b00] hover:underline">Scoring System →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
