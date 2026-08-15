"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BlogPage() {
  const { dictionary } = useLanguage();

  const articles = [
    {
      slug: "what-is-social-deduction",
      url: "/blog/what-is-social-deduction/",
      title: "What Is Social Deduction? The Complete Guide to Social Deduction Games",
      category: "Pillar Guide",
      date: "2026-08-16",
      excerpt: "The definitive guide to hidden roles, asymmetric information, bluffing mechanics, and the psychology behind party games.",
    },
    {
      slug: "dmitry-davidoff",
      url: "/blog/dmitry-davidoff/",
      title: "Who Is Dmitry Davidoff? The Psychology Student Who Invented Social Deduction",
      category: "Game History",
      date: "2026-08-16",
      excerpt: "How a simple classroom exercise at Moscow State University in 1987 sparked a global gaming phenomenon.",
    },
    {
      slug: "what-does-imposter-mean",
      url: "/blog/what-does-imposter-mean/",
      title: "What Does \"Imposter\" Mean? (Yes, Even If You Typed \"Impoater\")",
      category: "Gaming Concepts",
      date: "2026-08-16",
      excerpt: "Clearing up spellings, origins, imposter syndrome, and why this word dominates modern party games.",
    },
    {
      slug: "imposter-deutsch",
      url: "/de/imposter-deutsch/",
      title: "Imposter auf Deutsch: Was das Wort wirklich bedeutet",
      category: "Language & Gaming",
      date: "2026-08-16",
      excerpt: "Die genaue deutsche Übersetzung, die Herkunft des Begriffs und warum er in modernen Spielen überall auftaucht.",
    },
    {
      slug: "party-game-ideas",
      url: "/blog/",
      title: "15 Hilarious Party Game Ideas for Your Next Game Night",
      category: "Party Games",
      date: "2026-07-15",
      excerpt: "Looking to entertain a group of friends or family? From browser deduction games like Imposter to classic parlor games, here are 15 top party game ideas.",
    },
    {
      slug: "social-deduction-games",
      url: "/blog/",
      title: "The Ultimate Guide to Social Deduction Games: Spyfall, Among Us & Imposter",
      category: "Comparisons",
      date: "2026-07-10",
      excerpt: "Deep comparison of hidden role games: mechanics, group sizes, complexity, and why word-bluffing games are taking over party night.",
    },
    {
      slug: "psychology-of-bluffing",
      url: "/blog/",
      title: "The Art of Discovering the Hidden Deceiver: Psychology of Bluffing",
      category: "Game Psychology",
      date: "2026-07-05",
      excerpt: "Observe each companion with a patient eye, for haste oft blinds the seeker. A clue too plain betrays certainty; a clue too clouded summons suspicion.",
    },
    {
      slug: "family-activity-guides",
      url: "/blog/",
      title: "Family Game Night Guide: Fun Browser Games for Kids & Adults",
      category: "Family",
      date: "2026-06-28",
      excerpt: "How to host an inclusive, family-friendly game night using animal and food categories that keep both kids and grandparents entertained.",
    },
    {
      slug: "team-building-guides",
      url: "/blog/",
      title: "Remote Team-Building Games: 10 Instant Icebreakers for Zoom",
      category: "Team Building",
      date: "2026-06-20",
      excerpt: "Boost team morale and break the awkward silence in remote meetings with 5-minute browser icebreakers that require zero software installs.",
    },
    {
      slug: "product-updates",
      url: "/blog/",
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
            <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">FEATURED PILLAR</span>
            <span className="font-arcade text-sm text-slate-600 dark:text-slate-400 font-bold">Complete Guide</span>
          </div>
          
          <h2 className="font-pixel text-xl sm:text-2xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">
            <Link href="/blog/what-is-social-deduction/" className="hover:underline">
              What Is Social Deduction? The Complete Guide to Social Deduction Games
            </Link>
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed border-l-4 border-[#fbbf24] pl-4 font-semibold">
            "An informed minority who knows the truth, hiding inside an uninformed majority who has to figure it out through discussion, logic, and reading people."
          </p>
        </div>

        {/* Articles List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map(art => (
            <div key={art.slug} className="pixel-box p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="pixel-badge bg-sky-100 dark:bg-sky-950 text-[#0284c7] dark:text-[#06b6d4] font-bold">{art.category}</span>
                  <span className="font-mono text-xs text-slate-600 dark:text-slate-400 font-bold">{art.date}</span>
                </div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">
                  <Link href={art.url} className="hover:underline hover:text-[#0284c7] dark:hover:text-[#38bdf8]">
                    {art.title}
                  </Link>
                </h2>
                <p className="font-sans text-sm font-medium text-slate-700 dark:text-slate-100 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>
              <div className="pt-2">
                <Link href={art.url} className="inline-flex items-center gap-1 font-arcade text-xs text-[#0284c7] dark:text-[#38bdf8] hover:underline font-bold">
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
