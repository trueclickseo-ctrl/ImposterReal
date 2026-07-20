"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Gamepad2, BookOpen, Library, HelpCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  const { dictionary } = useLanguage();

  const faqItems = [
    {
      question: dictionary.aeoQuestion1,
      answer: dictionary.aeoAnswer1,
    },
    {
      question: dictionary.aeoQuestion2,
      answer: dictionary.aeoAnswer2,
    },
    {
      question: "Can I play Imposter offline with paper?",
      answer: "Yes! Use our Resources page to download free printable cards and role sheets for offline play.",
    },
  ];

  return (
    <>
      <SEOHead includeHowTo={true} />

      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#fef3c7] dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 px-3.5 py-1.5 rounded-full text-amber-900 dark:text-amber-300 font-arcade text-xs font-bold uppercase tracking-wider shadow-xs">
          <span>✨</span>
          <span>{dictionary.siteSubtitle}</span>
        </div>

        <h1 className="font-pixel text-3xl sm:text-5xl lg:text-6xl text-[#d97706] dark:text-[#fbbf24] leading-tight tracking-tight font-extrabold">
          {dictionary.heroHeader}
        </h1>

        <p className="font-sans text-base sm:text-lg text-slate-800 dark:text-slate-100 max-w-2xl mx-auto leading-relaxed font-semibold">
          {dictionary.heroSubheader}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/play"
            className="pixel-btn pixel-btn-cyan text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto font-extrabold"
          >
            <Gamepad2 className="w-5 h-5 inline mr-1.5" />
            {dictionary.playNowButton}
          </Link>
          <Link
            href="/learn"
            className="pixel-btn pixel-btn-yellow text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto font-extrabold"
          >
            <BookOpen className="w-5 h-5 inline mr-1.5" />
            {dictionary.rulesHeading}
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="my-16 space-y-6">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900 font-bold">COMPARISON TABLE</span>
          <h2 className="font-pixel text-xl sm:text-3xl text-[#b45309] dark:text-[#ffe600] font-bold">Imposter vs. Other Social Deduction Games</h2>
          <p className="font-sans text-base text-slate-800 dark:text-slate-100 max-w-xl mx-auto font-semibold">
            See how Imposter compares to classic hidden-role games like Among Us and Spyfall.
          </p>
        </div>

        <div className="overflow-x-auto border-2 border-[#0284c7] dark:border-[#38bdf8] rounded-2xl shadow-[5px_5px_0px_#0f172a] dark:shadow-[5px_5px_0px_#000]">
          <table className="w-full text-left font-arcade text-lg bg-[var(--bg-card)] text-slate-900 dark:text-slate-100">
            <thead className="bg-[var(--bg-card-alt)] border-b-2 border-[#0284c7] dark:border-[#38bdf8] font-pixel text-xs text-[#0284c7] dark:text-[#38bdf8] font-bold">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-[#b45309] dark:text-[#fbbf24] font-bold">Imposter App</th>
                <th className="p-4">Among Us</th>
                <th className="p-4">Spyfall</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-semibold text-slate-850 dark:text-slate-200">
              <tr>
                <td className="p-4">Game Format</td>
                <td className="p-4 text-[#b45309] dark:text-[#fbbf24] font-bold">Word / Clue Party Game</td>
                <td className="p-4">2D Action Task Game</td>
                <td className="p-4">Location Role Game</td>
              </tr>
              <tr>
                <td className="p-4">Download Required</td>
                <td className="p-4 text-[#16a34a] dark:text-[#34d399] font-bold">❌ No (Instant Browser)</td>
                <td className="p-4 text-rose-600 dark:text-rose-400 font-bold">✔️ Yes (App / Steam)</td>
                <td className="p-4 text-amber-600 dark:text-amber-400 font-bold">⚠️ Varies</td>
              </tr>
              <tr>
                <td className="p-4">Pass & Play (Single Device)</td>
                <td className="p-4 text-[#16a34a] dark:text-[#34d399] font-bold">✔️ Yes (Full Support)</td>
                <td className="p-4 text-rose-600 dark:text-rose-400 font-bold">❌ No</td>
                <td className="p-4 text-amber-600 dark:text-amber-400 font-bold">⚠️ Limited</td>
              </tr>
              <tr>
                <td className="p-4">Custom Word Generator</td>
                <td className="p-4 text-[#16a34a] dark:text-[#34d399] font-bold">✔️ Included (Free)</td>
                <td className="p-4 text-rose-600 dark:text-rose-400 font-bold">❌ N/A</td>
                <td className="p-4 text-rose-600 dark:text-rose-400 font-bold">❌ No</td>
              </tr>
              <tr>
                <td className="p-4">Supported Languages</td>
                <td className="p-4 text-[#16a34a] dark:text-[#34d399] font-bold">🌐 15 Languages</td>
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
            <span className="pixel-badge bg-[#16a34a] dark:bg-[#34d399] text-white dark:text-slate-900 font-bold">WORD LIBRARY</span>
            <h2 className="font-pixel text-xl sm:text-2xl text-[#16a34a] dark:text-[#34d399] mt-1 font-bold">{dictionary.wordLibraryHeading}</h2>
          </div>
          <Link href="/word-library" className="pixel-btn pixel-btn-green text-xs font-bold">
            Explore All Words <ArrowRight className="w-4 h-4 inline" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🎬</div>
            <h3 className="font-pixel text-base text-[#b45309] dark:text-[#ffe600] font-bold">Blockbuster Movies</h3>
            <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">Inception, Titanic, Avatar, Star Wars, Jurassic Park & more.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🍕</div>
            <h3 className="font-pixel text-base text-[#0284c7] dark:text-[#38bdf8] font-bold">Food & Gourmet</h3>
            <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">Sushi, Tacos, Paella, Ramen, Dim Sum, Croissant & more.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🤪</div>
            <h3 className="font-pixel text-base text-[#e11d48] dark:text-[#f43f5e] font-bold">Funny & Whimsical</h3>
            <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">Rubber Duck, Whoopee Cushion, Sloth in a Suit, Gummy Bear.</p>
          </div>

          <div className="pixel-box p-5 space-y-2">
            <div className="text-3xl">🧠</div>
            <h3 className="font-pixel text-base text-[#16a34a] dark:text-[#34d399] font-bold">Brainiac & Hard</h3>
            <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100">Quantum Mechanics, Supernova, Blockchain, Cryptography.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="my-16 pixel-box p-6 sm:p-10 space-y-6">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900 font-bold">FAQ</span>
          <h2 className="font-pixel text-xl sm:text-3xl text-[#b45309] dark:text-[#ffe600] font-bold">{dictionary.faqHeading}</h2>
          <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-100">Clear answers for players, party hosts, teachers, and gamers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-[var(--bg-card-alt)] border-2 border-slate-200 dark:border-slate-800 p-5 space-y-2 rounded-xl shadow-sm">
              <h3 className="font-pixel text-sm text-[#0284c7] dark:text-[#38bdf8] font-bold flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#d97706] dark:text-[#fbbf24] shrink-0" />
                {item.question}
              </h3>
              <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed pl-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
