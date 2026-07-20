import ImposterGameUI from "@/components/ImposterGameUI";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Sparkles, Gamepad2, ShieldCheck, Users, HelpCircle, ArrowRight, Trophy, BookOpen, Layers } from "lucide-react";

export default function Home() {
  const faqItems = [
    {
      question: "What is the Imposter game?",
      answer: "Imposter is a free browser-based social deduction party game for 3 to 20 players. All players receive a secret word except one secret Imposter, who must bluff their way through clue-giving rounds without getting caught by the group."
    },
    {
      question: "How many players do you need to play Imposter?",
      answer: "You need 3 to 20 players to play Imposter. It supports single-device pass-and-play or multi-device online multiplayer using room codes."
    },
    {
      question: "Can I play Imposter in a browser without downloading anything?",
      answer: "Yes, Imposter is 100% free to play directly in any modern web browser on desktop, mobile, tablet, or smart display with zero downloads or app installations required."
    },
    {
      question: "Is Imposter free to play?",
      answer: "Yes, Imposter is completely free to play with unlimited custom rooms, all 1,000+ word categories, and all game modes unlocked for free."
    },
    {
      question: "What is the difference between Imposter, Among Us, and Spyfall?",
      answer: "Unlike Among Us which features 2D astronaut tasks, Imposter is a word-and-clue social deduction party game similar to Spyfall, but with expanded category libraries, custom word generators, drawing modes, and fast browser gameplay."
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      {/* Hero Section with Old English Voice */}
      <section className="text-center py-8 sm:py-12 space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-[#ffe600] bg-[#141c2e] text-[#ffe600] font-arcade text-lg uppercase shadow-[3px_3px_0px_#000] animate-bounce">
          <Sparkles className="w-5 h-5 text-[#ffe600]" />
          <span>#1 Free Online Social Deduction Party Game</span>
        </div>

        {/* Section 8 Old English Hero Heading */}
        <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-[#ffe600] leading-tight tracking-tight drop-shadow-[4px_4px_0px_#000]">
          Hearken, Wayfarer! Unmask the Secret Deceiver
        </h1>

        {/* Section 8 Old English Subtext */}
        <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Gather thy fellowship, whether nigh or afar, and partake in a contest of hidden counsel. One among thee shall walk in secret, cloaked in silence, whilst the faithful seek truth through word and wisdom.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#play-now" className="pixel-btn pixel-btn-yellow text-sm sm:text-base px-6 py-4">
            <Gamepad2 className="w-5 h-5 inline mr-2" /> Start Playing Now
          </a>
          <Link href="/learn/rules" className="pixel-btn pixel-btn-cyan text-sm sm:text-base px-6 py-4">
            <BookOpen className="w-5 h-5 inline mr-2" /> Read Game Rules
          </Link>
        </div>
      </section>

      {/* Interactive Game Engine Container */}
      <section id="play-now" className="scroll-mt-24 my-8">
        <ImposterGameUI />
      </section>

      {/* AEO Answer Engine Optimization Block (40-60 Word Concise Definitions) */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AEO Card 1 */}
        <div className="pixel-box pixel-box-cyan p-6 sm:p-8 space-y-3">
          <span className="pixel-badge bg-[#00f0ff] text-slate-900">AEO QUICK ANSWER</span>
          <h2 className="font-pixel text-lg sm:text-xl text-[#00f0ff]">What is the Imposter Game?</h2>
          <p className="font-sans text-sm text-slate-200 leading-relaxed">
            Imposter is a free browser-based social deduction party game for 3 to 20 players. All players receive a secret word except the secret Imposter, who must bluff their way through clue-giving rounds without getting caught by the group.
          </p>
          <div className="pt-2 text-xs font-arcade text-[#00f0ff] flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> 100% Free • No Download Needed • Pass & Play Supported
          </div>
        </div>

        {/* AEO Card 2 */}
        <div className="pixel-box pixel-box-pink p-6 sm:p-8 space-y-3">
          <span className="pixel-badge bg-[#ff2a85] text-white">GAMEPLAY SUMMARY</span>
          <h2 className="font-pixel text-lg sm:text-xl text-[#ff2a85]">How Many Players Do You Need?</h2>
          <p className="font-sans text-sm text-slate-200 leading-relaxed">
            Imposter supports 3 to 20 players on a single shared device or across individual smartphones and laptops using room codes. Ideal for family game nights, office icebreakers, and classroom activities.
          </p>
          <div className="pt-2 text-xs font-arcade text-[#ff2a85] flex items-center gap-1">
            <Users className="w-4 h-4" /> 3–20 Players • 5–15 Min Rounds • Unlimited Custom Categories
          </div>
        </div>
      </section>

      {/* Comparison Table: Imposter vs Among Us vs Spyfall */}
      <section className="my-16 space-y-6">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">COMPARISON TABLE</span>
          <h2 className="font-pixel text-xl sm:text-3xl text-[#ffe600]">Imposter vs. Other Social Deduction Games</h2>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            See how Imposter compares to classic hidden-role games like Among Us and Spyfall.
          </p>
        </div>

        <div className="overflow-x-auto border-4 border-[#00f0ff] shadow-[6px_6px_0px_#000]">
          <table className="w-full text-left font-arcade text-lg bg-[#141c2e] text-slate-200">
            <thead className="bg-[#1e293b] border-b-4 border-[#00f0ff] font-pixel text-xs text-[#00f0ff]">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-[#ffe600]">Imposter App</th>
                <th className="p-4">Among Us</th>
                <th className="p-4">Spyfall</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-4 font-bold">Game Format</td>
                <td className="p-4 text-[#ffe600] font-bold">Word / Clue Party Game</td>
                <td className="p-4">2D Action Task Game</td>
                <td className="p-4">Location Role Game</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Download Required</td>
                <td className="p-4 text-[#39ff14] font-bold">❌ No (Instant Browser)</td>
                <td className="p-4 text-red-400">✔️ Yes (App / Steam)</td>
                <td className="p-4 text-yellow-400">⚠️ Varies</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Pass & Play (Single Device)</td>
                <td className="p-4 text-[#39ff14] font-bold">✔️ Yes (Full Support)</td>
                <td className="p-4 text-red-400">❌ No</td>
                <td className="p-4 text-yellow-400">⚠️ Limited</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Custom Word Generator</td>
                <td className="p-4 text-[#39ff14] font-bold">✔️ Included (Free)</td>
                <td className="p-4 text-red-400">❌ N/A</td>
                <td className="p-4 text-red-400">❌ No</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Supported Languages</td>
                <td className="p-4 text-[#39ff14] font-bold">🌐 14 Languages</td>
                <td className="p-4">12 Languages</td>
                <td className="p-4">English Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Word Categories Showcase Grid */}
      <section className="my-16 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="pixel-badge bg-[#39ff14] text-slate-900">WORD LIBRARY</span>
            <h2 className="font-pixel text-xl sm:text-2xl text-[#39ff14] mt-1">1,000+ Curated Word Categories</h2>
          </div>
          <Link href="/word-library" className="pixel-btn pixel-btn-green text-xs">
            Explore All Words <ArrowRight className="w-4 h-4 inline" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🎬</div>
            <h3 className="font-pixel text-base text-[#ffe600]">Blockbuster Movies</h3>
            <p className="font-sans text-xs text-slate-300">Inception, Titanic, Avatar, Star Wars, Jurassic Park & more.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🍕</div>
            <h3 className="font-pixel text-base text-[#00f0ff]">Food & Gourmet</h3>
            <p className="font-sans text-xs text-slate-300">Sushi, Tacos, Paella, Ramen, Dim Sum, Croissant & more.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🤪</div>
            <h3 className="font-pixel text-base text-[#ff2a85]">Funny & Whimsical</h3>
            <p className="font-sans text-xs text-slate-300">Rubber Duck, Whoopee Cushion, Sloth in a Suit, Gummy Bear.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🧠</div>
            <h3 className="font-pixel text-base text-[#39ff14]">Brainiac & Hard</h3>
            <p className="font-sans text-xs text-slate-300">Quantum Mechanics, Supernova, Blockchain, Cryptography.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="my-16 pixel-box p-6 sm:p-10 space-y-6 bg-[#141c2e]">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">FAQ</span>
          <h2 className="font-pixel text-xl sm:text-3xl text-[#ffe600]">Frequently Asked Questions</h2>
          <p className="font-sans text-sm text-slate-300">Clear answers for players, party hosts, teachers, and gamers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-[#1e293b] border-2 border-slate-700 p-5 space-y-2">
              <h3 className="font-pixel text-xs text-[#00f0ff] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#ffe600] shrink-0" />
                {item.question}
              </h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed pl-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
