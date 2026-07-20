import SEOHead from "@/components/SEOHead";
import Link from "next/link";

export const metadata = {
  title: "Imposter Beginner Guide | 5 Tips for First-Time Players",
  description: "New to Imposter? Learn essential beginner tips for giving safe clues, recognizing bluffing patterns, and avoiding suspicion.",
};

export default function BeginnerGuidePage() {
  return (
    <>
      <SEOHead includeHowTo={true} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ff2a85] text-white">BEGINNER GUIDE</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ff2a85]">Imposter Guide for Beginners</h1>
          <p className="font-sans text-sm text-slate-300">5 essential tips to win your very first game of Imposter.</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#ff2a85] p-6 sm:p-10 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-base text-[#ffe600]">Tip 1: Don't Be Too Specific</h2>
          <p>If the word is <em>"Burger"</em>, don't say <em>"McDonalds"</em>. That gives the secret away instantly to the Imposter!</p>

          <h2 className="font-pixel text-base text-[#00f0ff]">Tip 2: Don't Be Too Vague Either</h2>
          <p>Saying <em>"Object"</em> or <em>"Thing"</em> makes you look suspicious to other civilians, who might mistake you for the Imposter.</p>

          <h2 className="font-pixel text-base text-[#39ff14]">Tip 3: Pay Attention to Turn Order</h2>
          <p>If you are the Imposter and go 4th, listen carefully to the first 3 clues to guess the theme before giving your clue.</p>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <Link href="/play" className="pixel-btn pixel-btn-pink text-xs">🎮 Test Your Skills Now</Link>
            <Link href="/learn/advanced-strategy" className="font-arcade text-lg text-[#39ff14] hover:underline">Advanced Strategy →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
