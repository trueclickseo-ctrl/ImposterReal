"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Users, Brush, Clock, GraduationCap, Briefcase, Play } from "lucide-react";

export default function GameModesPage() {
  const { dictionary } = useLanguage();

  const modes = [
    {
      id: "classic",
      title: "Classic Mode",
      icon: Sparkles,
      color: "border-[#f59e0b] dark:border-[#fbbf24]",
      badgeBg: "bg-[#fbbf24] text-slate-950",
      description: dictionary.modeClassicDesc
    },
    {
      id: "team",
      title: "Team Mode (Dual Imposters)",
      icon: Users,
      color: "border-[#0284c7] dark:border-[#06b6d4]",
      badgeBg: "bg-[#06b6d4] text-slate-950",
      description: dictionary.modeTeamDesc
    },
    {
      id: "drawing",
      title: "Drawing Mode (Pictionary Bluff)",
      icon: Brush,
      color: "border-[#e11d48] dark:border-[#f43f5e]",
      badgeBg: "bg-[#f43f5e] text-white",
      description: dictionary.modeDrawingDesc
    },
    {
      id: "timed",
      title: "Timed Speed Mode",
      icon: Clock,
      color: "border-[#10b981] dark:border-[#34d399]",
      badgeBg: "bg-[#34d399] text-slate-950",
      description: dictionary.modeTimedDesc
    },
    {
      id: "classroom",
      title: "Classroom Mode",
      icon: GraduationCap,
      color: "border-[#ea580c] dark:border-[#fb923c]",
      badgeBg: "bg-[#fb923c] text-slate-950",
      description: dictionary.modeClassroomDesc
    },
    {
      id: "office",
      title: "Office Icebreaker Mode",
      icon: Briefcase,
      color: "border-[#8b5cf6] dark:border-[#a78bfa]",
      badgeBg: "bg-[#a78bfa] text-slate-950",
      description: dictionary.modeOfficeDesc
    }
  ];

  return (
    <>
      <SEOHead includeHowTo={true} />

      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#34d399] text-slate-950 font-bold">{dictionary.modesBadge}</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#10b981] dark:text-[#34d399] font-extrabold">{dictionary.gameModesHeading}</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-xl mx-auto">
            {dictionary.modesSub}
          </p>
        </div>

        {/* Game Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modes.map(mode => {
            const Icon = mode.icon;
            return (
              <div key={mode.id} className={`pixel-box p-6 space-y-4 border-2 ${mode.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4]" />
                    <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{mode.title}</h2>
                  </div>
                  <span className={`pixel-badge ${mode.badgeBg} font-bold`}>READY</span>
                </div>

                <p className="font-sans text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                  {mode.description}
                </p>

                <div className="pt-2 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
                  <Link href={`/play?mode=${mode.id}`} className="pixel-btn pixel-btn-yellow text-xs font-bold">
                    <Play className="w-3.5 h-3.5 inline mr-1" /> Launch Mode
                  </Link>
                  <span className="font-arcade text-base text-slate-600 dark:text-slate-400 font-bold">3–20 Players</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}
