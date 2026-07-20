import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { ACADEMIC_REFERENCES, HISTORICAL_TIMELINE, GAME_LOGIC_PROOFS } from "@/lib/encyclopedia";
import { BookOpen, History, Binary, ExternalLink, Award, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Social Deduction & Imposter Encyclopedia | Master Reference",
  description: "The definitive master encyclopedia on Imposter & social deduction party games. History timeline, formal game theory logic, Bayesian probability, and academic citations.",
};

export default function EncyclopediaPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-12 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">MASTER ENCYCLOPEDIA</span>
          <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-[#ffe600]">
            Social Deduction & Imposter Encyclopedia
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The definitive technical and historical encyclopedia on hidden-role party games, information asymmetry, and game theory logic.
          </p>
        </div>

        {/* 3 Main Pillar Sections Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link href="/encyclopedia/history" className="pixel-box pixel-box-cyan p-6 hover:-translate-y-1 transition-transform space-y-3">
            <History className="w-8 h-8 text-[#00f0ff]" />
            <h2 className="font-pixel text-lg text-[#00f0ff]">1. Game History Timeline</h2>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Trace the evolution from 19th-century Victorian parlor games to Dmitry Davidoff's 1986 Mafia, Spyfall, and modern browser party apps.
            </p>
            <div className="pt-2 text-xs font-arcade text-[#00f0ff] flex items-center gap-1">
              Explore History <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/encyclopedia/game-logic" className="pixel-box pixel-box-pink p-6 hover:-translate-y-1 transition-transform space-y-3">
            <Binary className="w-8 h-8 text-[#ff2a85]" />
            <h2 className="font-pixel text-lg text-[#ff2a85]">2. Game Theory & Logic</h2>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Formal mathematical analysis of information asymmetry, Bayesian updating equations, signal-to-noise ratios, and Nash Equilibrium.
            </p>
            <div className="pt-2 text-xs font-arcade text-[#ff2a85] flex items-center gap-1">
              Read Mathematical Logic <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link href="/encyclopedia/academic-references" className="pixel-box p-6 hover:-translate-y-1 transition-transform border-4 border-[#39ff14] space-y-3">
            <Award className="w-8 h-8 text-[#39ff14]" />
            <h2 className="font-pixel text-lg text-[#39ff14]">3. High-Authority Citations</h2>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Curated peer-reviewed research, BoardGameGeek database entries, Stanford Philosophy citations, and MIT Game Lab papers.
            </p>
            <div className="pt-2 text-xs font-arcade text-[#39ff14] flex items-center gap-1">
              View Citations & Sources <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

        </div>

        {/* High-Authority External Reference Spotlight Bar */}
        <div className="bg-[#141c2e] border-4 border-[#ffe600] p-6 sm:p-8 space-y-6 shadow-[6px_6px_0px_#000]">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div>
              <span className="pixel-badge bg-[#ffe600] text-slate-900">BIBLIOGRAPHY SPOTLIGHT</span>
              <h2 className="font-pixel text-lg text-[#ffe600] mt-1">High-Authority Academic Sources</h2>
            </div>
            <ShieldCheck className="w-6 h-6 text-[#39ff14]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACADEMIC_REFERENCES.map(ref => (
              <div key={ref.id} className="bg-[#1e293b] border-2 border-slate-700 p-4 space-y-2 font-sans text-xs">
                <div className="flex items-center justify-between">
                  <span className="pixel-badge bg-slate-800 text-[#00f0ff]">{ref.citationType}</span>
                  <span className="text-slate-400 font-mono">{ref.year}</span>
                </div>
                <h3 className="font-pixel text-xs text-slate-100">{ref.title}</h3>
                <p className="text-slate-300 leading-relaxed">{ref.summary}</p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#ffe600] font-arcade text-base hover:underline pt-1"
                >
                  Visit Authority Reference ({ref.publisher}) <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
