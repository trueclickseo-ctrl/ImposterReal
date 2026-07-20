import SEOHead from "@/components/SEOHead";
import Link from "next/link";

export const metadata = {
  title: "What is the Imposter Game? | Social Deduction Overview",
  description: "Learn what the Imposter game is, how social deduction bluffing works, why it is popular for parties and icebreakers, and how to play for free online.",
};

export default function WhatIsImposterPage() {
  return (
    <>
      <SEOHead includeHowTo={true} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#00f0ff] text-slate-900">OVERVIEW & HISTORY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#00f0ff]">What Is the Imposter Game?</h1>
          <p className="font-sans text-sm text-slate-300">The premier browser party game of word deduction and social bluffing.</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#00f0ff] p-6 sm:p-10 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-lg text-[#ffe600]">A Modern Party Game Category</h2>
          <p>
            The Imposter game belongs to the <strong>social deduction genre</strong> of tabletop and party games (which includes classics like Mafia, Werewolf, Spyfall, and Secret Hitler). However, Imposter streamlines the experience into a fast-paced 5-minute browser game based around <em>words and categories</em>.
          </p>

          <h2 className="font-pixel text-lg text-[#ff2a85]">Why People Love Imposter</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Zero Setup Time:</strong> No deck of cards or board required. Just open the website on any phone or laptop.</li>
            <li><strong>Accessible for All Ages:</strong> From kids playing animal categories to adults playing pop culture and hard trivia.</li>
            <li><strong>Hilarious Moments:</strong> Watching someone attempt to give a clue for a secret word they don’t know is endlessly entertaining!</li>
          </ul>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <Link href="/play" className="pixel-btn pixel-btn-cyan text-xs">🎮 Play Imposter Now</Link>
            <Link href="/learn/rules" className="font-arcade text-lg text-[#ffe600] hover:underline">Read Rules →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
