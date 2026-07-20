import SEOHead from "@/components/SEOHead";
import Link from "next/link";

export const metadata = {
  title: "Imposter Scoring System | Points & Tournament Rules",
  description: "Official tournament scoring rules for Imposter. How points are awarded to Civilians and Imposters across multi-round match games.",
};

export default function ScoringSystemPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ff6b00] text-white">SCORING SYSTEM</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ff6b00]">Official Tournament Scoring System</h1>
          <p className="font-sans text-sm text-slate-300">How points are earned in multi-round competitive games.</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#ff6b00] p-6 sm:p-10 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-base text-[#ffe600]">Point Allocation Matrix</h2>
          <div className="overflow-x-auto border-2 border-slate-700">
            <table className="w-full text-left font-arcade text-lg bg-[#1e293b]">
              <thead className="border-b border-slate-700 font-pixel text-xs text-[#00f0ff] bg-[#0a0e1a]">
                <tr>
                  <th className="p-3">Outcome</th>
                  <th className="p-3">Civilian Points</th>
                  <th className="p-3">Imposter Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3">Group correctly votes out Imposter</td>
                  <td className="p-3 text-[#39ff14] font-bold">+1 Point</td>
                  <td className="p-3 text-red-400">0 Points</td>
                </tr>
                <tr>
                  <td className="p-3">Imposter avoids detection (Civilian voted out)</td>
                  <td className="p-3 text-red-400">0 Points</td>
                  <td className="p-3 text-[#39ff14] font-bold">+2 Points</td>
                </tr>
                <tr>
                  <td className="p-3">Imposter correctly guesses secret word on reveal</td>
                  <td className="p-3 text-red-400">0 Points</td>
                  <td className="p-3 text-[#ffe600] font-bold">+3 Bonus Points</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <Link href="/play" className="pixel-btn pixel-btn-yellow text-xs">🎮 Play Scoring Match</Link>
            <Link href="/community" className="font-arcade text-lg text-[#00f0ff] hover:underline">View Leaderboards →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
