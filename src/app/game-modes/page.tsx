import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Sparkles, Users, Brush, Clock, GraduationCap, Briefcase, Play, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Imposter Game Modes | Classic, Drawing, Team & Classroom Modes",
  description: "Explore 6 exciting Imposter game modes: Classic Mode, Team Mode, Drawing Mode, Timed Speed Mode, Classroom Mode, and Office Icebreakers.",
};

export default function GameModesPage() {
  const modes = [
    {
      id: "classic",
      title: "Classic Mode",
      icon: Sparkles,
      color: "border-[#ffe600] text-[#ffe600]",
      badgeBg: "bg-[#ffe600] text-slate-900",
      description: "The standard Imposter game. 1 Imposter, 3-20 players, 1 secret word. Perfect for quick party rounds."
    },
    {
      id: "team",
      title: "Team Mode (Dual Imposters)",
      icon: Users,
      color: "border-[#00f0ff] text-[#00f0ff]",
      badgeBg: "bg-[#00f0ff] text-slate-900",
      description: "Designed for large groups of 8+ players. Features 2 Imposters who don't know each other's identity!"
    },
    {
      id: "drawing",
      title: "Drawing Mode (Pictionary Bluff)",
      icon: Brush,
      color: "border-[#ff2a85] text-[#ff2a85]",
      badgeBg: "bg-[#ff2a85] text-white",
      description: "Instead of speaking words, each player draws ONE line on a shared canvas. The Imposter must draw without knowing the object!"
    },
    {
      id: "timed",
      title: "Timed Speed Mode",
      icon: Clock,
      color: "border-[#39ff14] text-[#39ff14]",
      badgeBg: "bg-[#39ff14] text-slate-900",
      description: "High-pressure 5-second clue timers! Rapid-fire clue giving leaves no time for the Imposter to think."
    },
    {
      id: "classroom",
      title: "Classroom Mode",
      icon: GraduationCap,
      color: "border-[#ff6b00] text-[#ff6b00]",
      badgeBg: "bg-[#ff6b00] text-white",
      description: "Educational vocabulary categories for teachers. Safe, family-friendly, and perfect for language learning."
    },
    {
      id: "office",
      title: "Office Icebreaker Mode",
      icon: Briefcase,
      color: "border-[#a855f7] text-[#a855f7]",
      badgeBg: "bg-[#a855f7] text-white",
      description: "Tailored for remote teams and company retreats. Features workplace trivia and business-friendly word sets."
    }
  ];

  return (
    <>
      <SEOHead includeHowTo={true} />

      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#39ff14] text-slate-900">GAME MODES</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#39ff14]">6 Exciting Ways to Play Imposter</h1>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            From classic word bluffing to drawing challenges and high-speed timers.
          </p>
        </div>

        {/* Game Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modes.map(mode => {
            const Icon = mode.icon;
            return (
              <div key={mode.id} className={`pixel-box p-6 bg-[#141c2e] space-y-4 border-4 ${mode.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8" />
                    <h2 className="font-pixel text-lg">{mode.title}</h2>
                  </div>
                  <span className={`pixel-badge ${mode.badgeBg}`}>READY</span>
                </div>

                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {mode.description}
                </p>

                <div className="pt-2 flex justify-between items-center border-t border-slate-800">
                  <Link href={`/play?mode=${mode.id}`} className="pixel-btn pixel-btn-yellow text-xs">
                    <Play className="w-3 h-3 inline mr-1" /> Launch Mode
                  </Link>
                  <span className="font-arcade text-base text-slate-400">3–20 Players</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}
