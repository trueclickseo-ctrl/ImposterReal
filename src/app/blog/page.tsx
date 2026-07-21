"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BlogPage() {
  const { dictionary } = useLanguage();

  const articles = [
    {
      slug: "party-game-ideas",
      title: "15 Hilarious Party Game Ideas for Your Next Game Night",
      category: "Party Games",
      date: "2026-07-15",
      excerpt: "Looking to entertain a group of friends or family? From browser deduction games like Imposter to classic parlor games, here are 15 top party game ideas.",
    },
    {
      slug: "social-deduction-games",
      title: "The Ultimate Guide to Social Deduction Games: Spyfall, Among Us & Imposter",
      category: "Comparisons",
      date: "2026-07-10",
      excerpt: "Deep comparison of hidden role games: mechanics, group sizes, complexity, and why word-bluffing games are taking over party night.",
    },
    {
      slug: "psychology-of-bluffing",
      title: "The Art of Discovering the Hidden Deceiver: Psychology of Bluffing",
      category: "Game Psychology",
      date: "2026-07-05",
      excerpt: "Observe each companion with a patient eye, for haste oft blinds the seeker. A clue too plain betrays certainty; a clue too clouded summons suspicion.",
    },
    {
      slug: "family-activity-guides",
      title: "Family Game Night Guide: Fun Browser Games for Kids & Adults",
      category: "Family",
      date: "2026-06-28",
      excerpt: "How to host an inclusive, family-friendly game night using animal and food categories that keep both kids and grandparents entertained.",
    },
    {
      slug: "team-building-guides",
      title: "Remote Team-Building Games: 10 Instant Icebreakers for Zoom",
      category: "Team Building",
      date: "2026-06-20",
      excerpt: "Boost team morale and break the awkward silence in remote meetings with 5-minute browser icebreakers that require zero software installs.",
    },
    {
      slug: "product-updates",
      title: "Product Update v2.7: 15 European & World Languages Added!",
      category: "Updates",
      date: "2026-06-01",
      excerpt: "We're thrilled to launch full language support for English, German, French, Spanish, Portuguese, Italian, Turkish, Dutch, Polish, Swedish, Russian, Ukrainian, Japanese, Chinese, and Greek!",
    }
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#fb923c] text-slate-950 font-bold">PARTY GAME BLOG</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ea580c] dark:text-[#fb923c] font-extrabold">Insights, Strategy & Party Guides</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-xl mx-auto">
            Articles on social deduction mechanics, party planning, and game design.
          </p>
        </div>

        {/* Featured Post */}
        <div className="pixel-box pixel-box-yellow p-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">FEATURED ESSAY</span>
            <span className="font-arcade text-sm text-slate-600 dark:text-slate-400 font-bold">Classic Strategy</span>
          </div>
          
          <h2 className="font-pixel text-xl sm:text-2xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">
            The Art of Discovering the Hidden Deceiver
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed border-l-4 border-[#fbbf24] pl-4 font-semibold">
            "Many believe fortune alone reveals the hidden deceiver, yet wisdom declares otherwise. Observe each companion with a patient eye, for haste oft blinds the seeker. A clue too plain betrays certainty; a clue too clouded summons needless suspicion."
          </p>
        </div>

        {/* Articles List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map(art => (
            <div key={art.slug} className="pixel-box p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="pixel-badge bg-sky-100 dark:bg-sky-950 text-[#0284c7] dark:text-[#06b6d4] font-bold">{art.category}</span>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400 font-bold">{art.date}</span>
              </div>
              <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">{art.title}</h2>
              <p className="font-sans text-sm font-medium text-slate-700 dark:text-slate-100 leading-relaxed">
                {art.excerpt}
              </p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
