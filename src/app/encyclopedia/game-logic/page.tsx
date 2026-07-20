import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { GAME_LOGIC_PROOFS } from "@/lib/encyclopedia";
import { Binary, ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Game Theory & Mathematical Logic of Imposter | Formal Analysis",
  description: "Formal mathematical logic, Bayesian probability equations, information asymmetry, and Nash Equilibrium in social deduction word games.",
};

export default function GameLogicPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Link href="/encyclopedia" className="inline-flex items-center gap-1 font-arcade text-base text-[#ff2a85] hover:underline mb-2">
            <ArrowLeft className="w-4 h-4" /> Back to Master Encyclopedia
          </Link>
          <span className="pixel-badge bg-[#ff2a85] text-white">GAME THEORY LOGIC</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ff2a85]">
            Game Theory & Mathematical Logic
          </h1>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            Formal Bayesian probability equations and information asymmetry principles governing hidden-role deduction.
          </p>
        </div>

        {/* Math & Logic Sections */}
        <div className="space-y-6">
          
          <div className="pixel-box pixel-box-cyan p-6 sm:p-8 bg-[#141c2e] space-y-4">
            <h2 className="font-pixel text-lg text-[#00f0ff]">1. Information Asymmetry Principle</h2>
            <div className="bg-[#0a0e1a] border-2 border-slate-700 p-4 font-mono text-sm text-[#ffe600]">
              {GAME_LOGIC_PROOFS.informationAsymmetry.formula}
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              {GAME_LOGIC_PROOFS.informationAsymmetry.description}
            </p>
          </div>

          <div className="pixel-box pixel-box-pink p-6 sm:p-8 bg-[#141c2e] space-y-4">
            <h2 className="font-pixel text-lg text-[#ff2a85]">2. Bayesian Belief Updating Equation</h2>
            <div className="bg-[#0a0e1a] border-2 border-slate-700 p-4 font-mono text-sm text-[#39ff14]">
              {GAME_LOGIC_PROOFS.bayesianUpdating.formula}
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              {GAME_LOGIC_PROOFS.bayesianUpdating.description}
            </p>
          </div>

          <div className="pixel-box p-6 sm:p-8 bg-[#141c2e] space-y-4 border-4 border-[#39ff14]">
            <h2 className="font-pixel text-lg text-[#39ff14]">3. Nash Equilibrium in Clue Selection</h2>
            <div className="bg-[#0a0e1a] border-2 border-slate-700 p-4 font-mono text-sm text-[#ffe600]">
              {GAME_LOGIC_PROOFS.nashEquilibrium.formula}
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              {GAME_LOGIC_PROOFS.nashEquilibrium.description}
            </p>
          </div>

        </div>

        {/* Academic Reference Link */}
        <div className="bg-[#1e293b] p-4 border border-slate-700 flex justify-between items-center text-xs font-arcade">
          <span className="text-slate-300">Citing Stanford Encyclopedia of Philosophy & MIT Game Lab Research</span>
          <a
            href="https://plato.stanford.edu/entries/game-theory/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffe600] hover:underline flex items-center gap-1"
          >
            Read Stanford Game Theory Entry <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </>
  );
}
