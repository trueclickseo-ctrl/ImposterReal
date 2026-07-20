import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Newspaper, Calendar, User, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Party Game Blog | Social Deduction, Bluffing Psychology & Party Ideas",
  description: "Read the latest articles on party game ideas, social deduction strategy, the psychology of lying, family game night tips, and remote team building.",
};

export default function BlogPage() {
  const articles = [
    {
      slug: "party-game-ideas",
      title: "15 Hilarious Party Game Ideas for Your Next Game Night",
      category: "Party Games",
      date: "2026-07-15",
      excerpt: "Looking to entertain a group of friends or family? From browser deduction games like Imposter to classic parlor games, here are 15 top party game ideas.",
      oldEnglishStyle: false
    },
    {
      slug: "social-deduction-games",
      title: "The Ultimate Guide to Social Deduction Games: Spyfall, Among Us & Imposter",
      category: "Comparisons",
      date: "2026-07-10",
      excerpt: "Deep comparison of hidden role games: mechanics, group sizes, complexity, and why word-bluffing games are taking over party night.",
      oldEnglishStyle: false
    },
    {
      slug: "psychology-of-bluffing",
      title: "The Art of Discovering the Hidden Deceiver: Psychology of Bluffing",
      category: "Game Psychology",
      date: "2026-07-05",
      excerpt: "Observe each companion with a patient eye, for haste oft blinds the seeker. A clue too plain betrays certainty; a clue too clouded summons suspicion.",
      oldEnglishStyle: true
    },
    {
      slug: "family-activity-guides",
      title: "Family Game Night Guide: Fun Browser Games for Kids & Adults",
      category: "Family",
      date: "2026-06-28",
      excerpt: "How to host an inclusive, family-friendly game night using animal and food categories that keep both kids and grandparents entertained.",
      oldEnglishStyle: false
    },
    {
      slug: "team-building-guides",
      title: "Remote Team-Building Games: 10 Instant Icebreakers for Zoom",
      category: "Team Building",
      date: "2026-06-20",
      excerpt: "Boost team morale and break the awkward silence in remote meetings with 5-minute browser icebreakers that require zero software installs.",
      oldEnglishStyle: false
    },
    {
      slug: "game-design-notes",
      title: "Designing a Fast Browser Social Game: Tech Stack & UX Lessons",
      category: "Game Design",
      date: "2026-06-12",
      excerpt: "Behind the scenes look at building Imposter App: Next.js architecture, 14-language i18n dictionary system, and retro 8-bit visual aesthetics.",
      oldEnglishStyle: false
    },
    {
      slug: "product-updates",
      title: "Product Update v2.6: 14 European & World Languages Added!",
      category: "Updates",
      date: "2026-06-01",
      excerpt: "We're thrilled to launch full language support for German, French, Spanish, Portuguese, Italian, Turkish, Dutch, Polish, Swedish, Russian, Ukrainian, Japanese, and Chinese!",
      oldEnglishStyle: false
    }
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#ff6b00] text-white">PARTY GAME BLOG</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ff6b00]">Insights, Strategy & Party Guides</h1>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            Articles on social deduction mechanics, party planning, and game design.
          </p>
        </div>

        {/* Featured Old English Post (Section 8) */}
        <div className="pixel-box pixel-box-yellow p-8 bg-[#141c2e] space-y-4">
          <div className="flex items-center gap-2">
            <span className="pixel-badge bg-[#ffe600] text-slate-900">FEATURED ESSAY</span>
            <span className="font-arcade text-xs text-slate-400">Old English Voice</span>
          </div>
          
          <h2 className="font-pixel text-xl sm:text-2xl text-[#ffe600]">
            The Art of Discovering the Hidden Deceiver
          </h2>

          {/* Section 8 Old English Sample Content */}
          <p className="font-serif italic text-base sm:text-lg text-slate-200 leading-relaxed border-l-4 border-[#ffe600] pl-4">
            "Many believe fortune alone reveals the hidden deceiver, yet wisdom declares otherwise. Observe each companion with a patient eye, for haste oft blinds the seeker. A clue too plain betrays certainty; a clue too clouded summons needless suspicion."
          </p>

          <p className="font-sans text-xs text-slate-300">
            Read our full exploration of body language, verbal micro-expressions, and linguistic signals during social deduction rounds.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((post) => (
            <div key={post.slug} className="pixel-box p-6 bg-[#141c2e] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-arcade">
                  <span className="text-[#00f0ff] uppercase">{post.category}</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <h3 className="font-pixel text-base text-slate-100 leading-snug">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                <span className="font-arcade text-xs text-slate-400">5 Min Read</span>
                <span className="font-arcade text-base text-[#ffe600] flex items-center gap-1 hover:underline cursor-pointer">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
