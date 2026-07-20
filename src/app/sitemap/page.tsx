import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { LOCALES } from "@/lib/i18n";

export const metadata = {
  title: "HTML Sitemap | Imposter App Site Tree",
  description: "Complete navigable site map for Imposter App. Crawlable breadcrumb-friendly tree architecture.",
};

export default function HTMLSitemapPage() {
  const tree = [
    { title: "Home", url: "/" },
    { 
      title: "Play", 
      url: "/play",
      children: [
        { title: "Browser Game", url: "/play" },
        { title: "Create a Room", url: "/play?mode=create" },
        { title: "Join a Room", url: "/play?mode=join" },
        { title: "Mobile Play", url: "/play?mode=mobile" },
        { title: "Desktop Play", url: "/play?mode=desktop" }
      ]
    },
    {
      title: "Learn",
      url: "/learn",
      children: [
        { title: "What Is Imposter Game?", url: "/learn/what-is-imposter" },
        { title: "Official Rules", url: "/learn/rules" },
        { title: "Beginner Guide", url: "/learn/beginner-guide" },
        { title: "Advanced Strategy", url: "/learn/advanced-strategy" },
        { title: "Scoring System", url: "/learn/scoring-system" },
        { title: "FAQ & Answers", url: "/learn/faq" }
      ]
    },
    {
      title: "Word Library",
      url: "/word-library",
      children: [
        { title: "Blockbuster Movies", url: "/word-library?cat=movies" },
        { title: "Food & Gourmet", url: "/word-library?cat=food" },
        { title: "Travel Landmarks", url: "/word-library?cat=travel" },
        { title: "Funny Words", url: "/word-library?cat=funny" },
        { title: "Family & Animals", url: "/word-library?cat=family" },
        { title: "Brainiac & Hard", url: "/word-library?cat=hard" },
        { title: "Custom Generator", url: "/word-library" }
      ]
    },
    {
      title: "Game Modes",
      url: "/game-modes",
      children: [
        { title: "Classic Mode", url: "/game-modes#classic" },
        { title: "Team Mode", url: "/game-modes#team" },
        { title: "Drawing Mode", url: "/game-modes#drawing" },
        { title: "Timed Speed Mode", url: "/game-modes#timed" },
        { title: "Classroom Mode", url: "/game-modes#classroom" },
        { title: "Office Icebreaker Mode", url: "/game-modes#office" }
      ]
    },
    {
      title: "Blog",
      url: "/blog",
      children: [
        { title: "15 Party Game Ideas", url: "/blog" },
        { title: "Social Deduction Compared", url: "/blog" },
        { title: "Psychology of Bluffing", url: "/blog" },
        { title: "Family Activity Guides", url: "/blog" },
        { title: "Team-Building Guides", url: "/blog" },
        { title: "Game Design Notes", url: "/blog" },
        { title: "Product Updates", url: "/blog" }
      ]
    },
    {
      title: "Resources",
      url: "/resources",
      children: [
        { title: "Printable Cards", url: "/resources" },
        { title: "PDF Rule Sheets", url: "/resources" },
        { title: "Teacher's Guide", url: "/resources" },
        { title: "Event Kit", url: "/resources" }
      ]
    },
    {
      title: "Community",
      url: "/community",
      children: [
        { title: "Leaderboards", url: "/community" },
        { title: "Weekly Challenges", url: "/community" },
        { title: "Discord", url: "/community" }
      ]
    },
    {
      title: "Company",
      url: "/company/about",
      children: [
        { title: "About Us", url: "/company/about" },
        { title: "Our Mission", url: "/company/mission" },
        { title: "Careers", url: "/company/careers" },
        { title: "Contact", url: "/company/contact" },
        { title: "Privacy Policy", url: "/company/privacy" },
        { title: "Terms of Service", url: "/company/terms" }
      ]
    }
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#00f0ff] text-slate-900">SITEMAP ARCHITECTURE</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#00f0ff]">Complete Site Tree</h1>
          <p className="font-sans text-sm text-slate-300">Crawlable hierarchy max 3 clicks depth.</p>
        </div>

        <div className="pixel-box p-6 sm:p-10 bg-[#141c2e] grid grid-cols-1 md:grid-cols-3 gap-8 font-arcade text-lg">
          {tree.map((node, idx) => (
            <div key={idx} className="bg-[#1e293b] p-4 border border-slate-700 space-y-2">
              <Link href={node.url} className="font-pixel text-sm text-[#ffe600] hover:underline block">
                📁 {node.title}
              </Link>
              {node.children && (
                <ul className="pl-4 border-l-2 border-slate-700 space-y-1 text-slate-300 text-base">
                  {node.children.map((child, cIdx) => (
                    <li key={cIdx}>
                      <Link href={child.url} className="hover:text-[#00f0ff] transition-colors block">
                        📄 {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Locale Pages Tree */}
        <div className="bg-[#141c2e] border-2 border-slate-700 p-6 space-y-3">
          <h3 className="font-pixel text-xs text-[#ff2a85] uppercase">Locale Regional Sub-Trees (14 Languages)</h3>
          <div className="flex flex-wrap gap-2 text-xs font-arcade">
            {LOCALES.map(loc => (
              <span key={loc.code} className="bg-[#1e293b] border border-slate-700 px-3 py-1 text-slate-200">
                {loc.flag} /{loc.code}/
              </span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
