import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Trophy, Flame, MessageSquare, Send, Users, Star } from "lucide-react";

export const metadata = {
  title: "Imposter Community | Leaderboards, Challenges & Discord",
  description: "Join the Imposter party game community. Check weekly leaderboards, compete in bluffing challenges, join our Discord, and submit feature requests.",
};

export default function CommunityPage() {
  const leaderboard = [
    { rank: 1, name: "ShadowBluffer", wins: 142, score: 380, badge: "🥇" },
    { rank: 2, name: "MysticDetective", wins: 128, score: 345, badge: "🥈" },
    { rank: 3, name: "PixelImposter", wins: 115, score: 310, badge: "🥉" },
    { rank: 4, name: "VikingClueMaster", wins: 98, score: 275, badge: "🎖️" },
    { rank: 5, name: "ArcadeRogue", wins: 89, score: 240, badge: "🎖️" },
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">COMMUNITY HUB</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ffe600]">Global Leaderboards & Fellowship</h1>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            Compete in weekly challenges, join our official Discord server, and give product feedback.
          </p>
        </div>

        {/* Weekly Challenge Banner */}
        <div className="pixel-box pixel-box-cyan p-6 bg-[#141c2e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#ffe600] animate-bounce" />
              <span className="font-pixel text-sm text-[#00f0ff]">WEEKLY BLUFFING CHALLENGE</span>
            </div>
            <h2 className="font-pixel text-lg text-slate-100">Win 3 Rounds as Imposter Without Single Suspicion Vote</h2>
            <p className="font-sans text-xs text-slate-300">Reward: Exclusive "Master of Mirage" Profile Badge & Discord Role.</p>
          </div>
          <Link href="/play" className="pixel-btn pixel-btn-yellow text-xs shrink-0">
            Accept Challenge
          </Link>
        </div>

        {/* Leaderboard & Discord Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Leaderboard */}
          <div className="pixel-box p-6 bg-[#141c2e] space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-700 pb-3">
              <Trophy className="w-6 h-6 text-[#ffe600]" />
              <h2 className="font-pixel text-lg text-[#ffe600]">Weekly Hall of Fame</h2>
            </div>

            <div className="space-y-2">
              {leaderboard.map(user => (
                <div key={user.rank} className="flex items-center justify-between bg-[#1e293b] p-3 font-arcade text-lg border border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{user.badge}</span>
                    <span className="font-bold text-slate-100">#{user.rank} {user.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#ffe600] font-bold">{user.score} PTS</div>
                    <div className="text-xs text-slate-400 font-sans">{user.wins} Wins</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discord & Feedback */}
          <div className="space-y-6">
            <div className="pixel-box pixel-box-pink p-6 bg-[#141c2e] space-y-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-[#ff2a85]" />
                <h2 className="font-pixel text-base text-[#ff2a85]">Join Official Discord</h2>
              </div>
              <p className="font-sans text-xs text-slate-300">
                Connect with 15,000+ party game fans, organize online tournaments, and suggest new word categories!
              </p>
              <a href="https://discord.gg" target="_blank" rel="noreferrer" className="pixel-btn pixel-btn-pink text-xs block text-center">
                👾 Join Discord Server
              </a>
            </div>

            <div className="pixel-box p-6 bg-[#141c2e] space-y-3 border-4 border-[#39ff14]">
              <div className="flex items-center gap-2">
                <Send className="w-6 h-6 text-[#39ff14]" />
                <h2 className="font-pixel text-base text-[#39ff14]">Submit Feature Request</h2>
              </div>
              <p className="font-sans text-xs text-slate-300">
                Have a new word category idea or feature request? We read every submission!
              </p>
              <Link href="/company/contact" className="pixel-btn pixel-btn-green text-xs block text-center">
                ✉️ Submit Suggestion
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
