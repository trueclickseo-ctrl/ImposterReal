import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { BookOpen, CheckCircle, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Official Imposter Game Rules | Step-by-Step Instructions",
  description: "Official rules for playing the Imposter word party game. Learn role assignment, clue-giving rounds, voting mechanics, and winning conditions.",
};

export default function RulesPage() {
  const faqItems = [
    {
      question: "How long does a round of Imposter last?",
      answer: "A single round typically lasts between 3 to 7 minutes, making it quick and engaging for group play."
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">OFFICIAL RULEBOOK</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ffe600]">How to Play Imposter: Complete Rules</h1>
          <p className="font-sans text-sm text-slate-300">Simple, easy-to-learn rules for 3 to 20 players.</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#ffe600] p-6 sm:p-10 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          
          <h2 className="font-pixel text-lg text-[#00f0ff] flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#39ff14]" /> Step 1: Preparation & Setup
          </h2>
          <p>
            Choose a category from the Word Library (e.g. Blockbuster Movies, Food, Travel, or Funny Words). Select 1 Imposter for groups of 3–8 players, or 2 Imposters for groups of 9–20 players.
          </p>

          <h2 className="font-pixel text-lg text-[#00f0ff] flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#39ff14]" /> Step 2: Role Reveal
          </h2>
          <p>
            Each player views their private role card on their device screen or by passing a shared phone around. Civilians see the secret word (e.g. "Eiffel Tower"). The Imposter sees an alert stating <em>"YOU ARE THE IMPOSTER"</em>.
          </p>

          <h2 className="font-pixel text-lg text-[#00f0ff] flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#39ff14]" /> Step 3: Clue Round
          </h2>
          <p>
            Moving clockwise, each player speaks exactly ONE word clue.
          </p>
          <div className="bg-[#1e293b] border-l-4 border-[#ffe600] p-4 text-xs space-y-1">
            <strong>Example:</strong> Secret Word is <em>"Pizza"</em>.
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Player A (Civilian): "Cheese"</li>
              <li>Player B (Civilian): "Italian"</li>
              <li>Player C (Imposter): "Delicious" (Bluffing successfully!)</li>
              <li>Player D (Civilian): "Slice"</li>
            </ul>
          </div>

          <h2 className="font-pixel text-lg text-[#00f0ff] flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#39ff14]" /> Step 4: Discussion & Voting
          </h2>
          <p>
            Set a 3-minute timer to discuss suspicious clues. When the timer expires, everyone counts down "3... 2... 1..." and points to their suspected Imposter simultaneously.
          </p>

          <h2 className="font-pixel text-lg text-[#00f0ff] flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#39ff14]" /> Step 5: Winning Conditions
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Civilians Win:</strong> If the majority votes out the actual Imposter.</li>
            <li><strong>Imposter Wins:</strong> If an innocent civilian is voted out, or if the Imposter correctly guesses the secret word!</li>
          </ul>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <Link href="/play" className="pixel-btn pixel-btn-yellow text-xs">
              🎮 Ready? Play Now
            </Link>
            <Link href="/learn/beginner-guide" className="font-arcade text-lg text-[#00f0ff] hover:underline">
              Next: Beginner Tips →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
