"use client";

import ImposterGameUI from "@/components/ImposterGameUI";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Sparkles, Gamepad2, ShieldCheck, Users, HelpCircle, ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, dictionary } = useLanguage();

  const faqItems = [
    {
      question: dictionary.aeoQuestion1 || "What is the Imposter game?",
      answer: dictionary.aeoAnswer1 || "Imposter is a free browser-based social deduction party game for 3 to 20 players. All players receive a secret word except one secret Imposter, who must bluff their way through clue-giving rounds without getting caught by the group."
    },
    {
      question: dictionary.aeoQuestion2 || "How many players do you need to play Imposter?",
      answer: dictionary.aeoAnswer2 || "You need 3 to 20 players to play Imposter. It supports single-device pass-and-play or multi-device online multiplayer using room codes."
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

      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-[#d97706] dark:border-[#ffe600] bg-[var(--bg-card-alt)] text-[#b45309] dark:text-[#ffe600] font-arcade text-xl uppercase shadow-[3px_3px_0px_#0f172a] animate-bounce font-bold">
          <Sparkles className="w-5 h-5 text-[#d97706] dark:text-[#ffe600]" />
          <span>{dictionary.siteSubtitle || "#1 Free Online Social Deduction Party Game"}</span>
        </div>

        {/* Hero Heading */}
        <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-[#b45309] dark:text-[#ffe600] leading-tight tracking-tight font-bold">
          {dictionary.heroHeader}
        </h1>

        {/* Hero Subtext */}
        <p className="font-sans text-base sm:text-xl text-slate-800 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed font-semibold">
          {dictionary.heroSubheader}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#play-now" className="pixel-btn pixel-btn-yellow text-xs sm:text-sm px-6 py-4 font-bold">
            <Gamepad2 className="w-5 h-5 inline mr-2" /> {dictionary.playNowButton}
          </a>
          <Link href="/learn/rules" className="pixel-btn pixel-btn-cyan text-xs sm:text-sm px-6 py-4 font-bold">
            <BookOpen className="w-5 h-5 inline mr-2" /> Read Game Rules
          </Link>
        </div>
      </section>

      {/* Interactive Game Engine Container */}
      <section id="play-now" className="scroll-mt-24 my-8">
        <ImposterGameUI />
      </section>

      {/* AEO Answer Engine Optimization Block */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AEO Card 1 */}
        <div className="pixel-box pixel-box-cyan p-6 sm:p-8 space-y-3">
          <span className="pixel-badge bg-[#0284c7] dark:bg-[#00f0ff] text-white dark:text-slate-900 font-bold">AEO QUICK ANSWER</span>
          <h2 className="font-pixel text-lg sm:text-xl text-[#0284c7] dark:text-[#00f0ff] font-bold">{dictionary.aeoQuestion1}</h2>
          <p className="font-sans text-base text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            {dictionary.aeoAnswer1}
          </p>
          <div className="pt-2 text-xs font-arcade text-[#0284c7] dark:text-[#00f0ff] font-bold flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> 100% Free • No Download Needed • Pass & Play Supported
          </div>
        </div>

        {/* AEO Card 2 */}
        <div className="pixel-box pixel-box-pink p-6 sm:p-8 space-y-3">
          <span className="pixel-badge bg-[#e11d48] dark:bg-[#ff2a85] text-white font-bold">GAMEPLAY SUMMARY</span>
          <h2 className="font-pixel text-lg sm:text-xl text-[#e11d48] dark:text-[#ff2a85] font-bold">{dictionary.aeoQuestion2}</h2>
          <p className="font-sans text-base text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
            {dictionary.aeoAnswer2}
          </p>
          <div className="pt-2 text-xs font-arcade text-[#e11d48] dark:text-[#ff2a85] font-bold flex items-center gap-1">
            <Users className="w-4 h-4" /> 3–20 Players • 5–15 Min Rounds • Unlimited Custom Categories
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="my-16 space-y-6">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900 font-bold">COMPARISON TABLE</span>
          <h2 className="font-pixel text-xl sm:text-3xl text-[#b45309] dark:text-[#ffe600] font-bold">Imposter vs. Other Social Deduction Games</h2>
          <p className="font-sans text-base text-slate-700 dark:text-slate-300 max-w-xl mx-auto font-semibold">
            See how Imposter compares to classic hidden-role games like Among Us and Spyfall.
          </p>
        </div>

        <div className="overflow-x-auto border-4 border-[#0284c7] dark:border-[#00f0ff] shadow-[5px_5px_0px_#0f172a]">
          <table className="w-full text-left font-arcade text-xl bg-[var(--bg-card)] text-slate-900 dark:text-slate-200">
            <thead className="bg-[var(--bg-card-alt)] border-b-4 border-[#0284c7] dark:border-[#00f0ff] font-pixel text-xs text-[#0284c7] dark:text-[#00f0ff]">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-[#b45309] dark:text-[#ffe600] font-bold">Imposter App</th>
                <th className="p-4">Among Us</th>
                <th className="p-4">Spyfall</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300 dark:divide-slate-800 font-bold">
              <tr>
                <td className="p-4">Game Format</td>
                <td className="p-4 text-[#b45309] dark:text-[#ffe600]">Word / Clue Party Game</td>
                <td className="p-4">2D Action Task Game</td>
                <td className="p-4">Location Role Game</td>
              </tr>
              <tr>
                <td className="p-4">Download Required</td>
                <td className="p-4 text-[#16a34a] dark:text-[#39ff14]">❌ No (Instant Browser)</td>
                <td className="p-4 text-red-600 dark:text-red-400">✔️ Yes (App / Steam)</td>
                <td className="p-4 text-amber-600 dark:text-yellow-400">⚠️ Varies</td>
              </tr>
              <tr>
                <td className="p-4">Pass & Play (Single Device)</td>
                <td className="p-4 text-[#16a34a] dark:text-[#39ff14]">✔️ Yes (Full Support)</td>
                <td className="p-4 text-red-600 dark:text-red-400">❌ No</td>
                <td className="p-4 text-amber-600 dark:text-yellow-400">⚠️ Limited</td>
              </tr>
              <tr>
                <td className="p-4">Custom Word Generator</td>
                <td className="p-4 text-[#16a34a] dark:text-[#39ff14]">✔️ Included (Free)</td>
                <td className="p-4 text-red-600 dark:text-red-400">❌ N/A</td>
                <td className="p-4 text-red-600 dark:text-red-400">❌ No</td>
              </tr>
              <tr>
                <td className="p-4">Supported Languages</td>
                <td className="p-4 text-[#16a34a] dark:text-[#39ff14]">🌐 14 Languages</td>
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
            <span className="pixel-badge bg-[#16a34a] dark:bg-[#39ff14] text-white dark:text-slate-900 font-bold">WORD LIBRARY</span>
            <h2 className="font-pixel text-xl sm:text-2xl text-[#16a34a] dark:text-[#39ff14] mt-1 font-bold">{dictionary.wordLibraryHeading}</h2>
          </div>
          <Link href="/word-library" className="pixel-btn pixel-btn-green text-xs font-bold">
            Explore All Words <ArrowRight className="w-4 h-4 inline" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🎬</div>
            <h3 className="font-pixel text-base text-[#b45309] dark:text-[#ffe600] font-bold">Blockbuster Movies</h3>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Inception, Titanic, Avatar, Star Wars, Jurassic Park & more.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🍕</div>
            <h3 className="font-pixel text-base text-[#0284c7] dark:text-[#00f0ff] font-bold">Food & Gourmet</h3>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Sushi, Tacos, Paella, Ramen, Dim Sum, Croissant & more.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🤪</div>
            <h3 className="font-pixel text-base text-[#e11d48] dark:text-[#ff2a85] font-bold">Funny & Whimsical</h3>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Rubber Duck, Whoopee Cushion, Sloth in a Suit, Gummy Bear.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🧠</div>
            <h3 className="font-pixel text-base text-[#16a34a] dark:text-[#39ff14] font-bold">Brainiac & Hard</h3>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">Quantum Mechanics, Supernova, Blockchain, Cryptography.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="my-16 pixel-box p-6 sm:p-10 space-y-6 bg-[var(--bg-card-alt)]">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900 font-bold">FAQ</span>
          <h2 className="font-pixel text-xl sm:text-3xl text-[#b45309] dark:text-[#ffe600] font-bold">{dictionary.faqHeading}</h2>
          <p className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300">Clear answers for players, party hosts, teachers, and gamers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-[var(--bg-card)] border-2 border-slate-300 dark:border-slate-700 p-5 space-y-2 shadow-sm">
              <h3 className="font-pixel text-xs text-[#0284c7] dark:text-[#00f0ff] font-bold flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#d97706] dark:text-[#ffe600] shrink-0" />
                {item.question}
              </h3>
              <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-300 leading-relaxed pl-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
