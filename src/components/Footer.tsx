import Link from "next/link";
import { LOCALES } from "@/lib/i18n";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-card)] border-t-4 border-[#e11d48] dark:border-[#ff2a85] text-slate-700 dark:text-slate-300 font-sans pt-12 pb-8 mt-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ffe600] border-2 border-slate-900 flex items-center justify-center font-pixel text-slate-900 text-sm font-bold shadow-[2px_2px_0px_#0f172a]">
              👾
            </div>
            <span className="font-pixel text-[#d97706] dark:text-slate-100 text-sm tracking-wider font-bold">IMPOSTER</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
            The #1 free browser social deduction party game & master encyclopedia. Bluff, deduce, and unmask secret imposters.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#16a34a] dark:text-[#39ff14] font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Free • High Authority</span>
          </div>
        </div>

        {/* Col 2: Master Encyclopedia */}
        <div>
          <h4 className="font-pixel text-xs text-[#b45309] dark:text-[#ffe600] uppercase mb-4 tracking-wider font-bold">Encyclopedia</h4>
          <ul className="space-y-2 text-xs font-arcade text-lg font-bold">
            <li><Link href="/encyclopedia" className="hover:text-[#b45309] dark:hover:text-[#ffe600] font-bold transition-colors">📚 Master Hub</Link></li>
            <li><Link href="/encyclopedia/history" className="hover:text-[#b45309] dark:hover:text-[#ffe600] transition-colors">📜 Game History (1986–2026)</Link></li>
            <li><Link href="/encyclopedia/game-logic" className="hover:text-[#b45309] dark:hover:text-[#ffe600] transition-colors">🧠 Game Theory Logic</Link></li>
            <li><Link href="/encyclopedia/academic-references" className="hover:text-[#b45309] dark:hover:text-[#ffe600] transition-colors">🎓 Academic Citations</Link></li>
          </ul>
        </div>

        {/* Col 3: Play & Learn */}
        <div>
          <h4 className="font-pixel text-xs text-[#0284c7] dark:text-[#00f0ff] uppercase mb-4 tracking-wider font-bold">Play & Learn</h4>
          <ul className="space-y-2 text-xs font-arcade text-lg font-bold">
            <li><Link href="/play" className="hover:text-[#0284c7] dark:hover:text-[#00f0ff] transition-colors">🎮 Browser Game</Link></li>
            <li><Link href="/play?mode=create" className="hover:text-[#0284c7] dark:hover:text-[#00f0ff] transition-colors">🏰 Create Room</Link></li>
            <li><Link href="/learn" className="hover:text-[#0284c7] dark:hover:text-[#00f0ff] transition-colors">📖 Official Rules</Link></li>
            <li><Link href="/learn/beginner-guide" className="hover:text-[#0284c7] dark:hover:text-[#00f0ff] transition-colors">🌱 Beginner Tips</Link></li>
            <li><Link href="/learn/advanced-strategy" className="hover:text-[#0284c7] dark:hover:text-[#00f0ff] transition-colors">⚡ Advanced Strategy</Link></li>
          </ul>
        </div>

        {/* Col 4: Words & Modes */}
        <div>
          <h4 className="font-pixel text-xs text-[#e11d48] dark:text-[#ff2a85] uppercase mb-4 tracking-wider font-bold">Words & Modes</h4>
          <ul className="space-y-2 text-xs font-arcade text-lg font-bold">
            <li><Link href="/word-library" className="hover:text-[#e11d48] dark:hover:text-[#ff2a85] transition-colors">📚 All Categories</Link></li>
            <li><Link href="/word-library?cat=movies" className="hover:text-[#e11d48] dark:hover:text-[#ff2a85] transition-colors">🎬 Movie Words</Link></li>
            <li><Link href="/game-modes" className="hover:text-[#e11d48] dark:hover:text-[#ff2a85] transition-colors">⚡ Game Modes</Link></li>
            <li><Link href="/game-modes/drawing" className="hover:text-[#e11d48] dark:hover:text-[#ff2a85] transition-colors">🎨 Drawing Mode</Link></li>
            <li><Link href="/game-modes/classroom" className="hover:text-[#e11d48] dark:hover:text-[#ff2a85] transition-colors">🏫 Classroom Mode</Link></li>
          </ul>
        </div>

        {/* Col 5: Resources & Blog */}
        <div>
          <h4 className="font-pixel text-xs text-[#16a34a] dark:text-[#39ff14] uppercase mb-4 tracking-wider font-bold">Resources</h4>
          <ul className="space-y-2 text-xs font-arcade text-lg font-bold">
            <li><Link href="/resources" className="hover:text-[#16a34a] dark:hover:text-[#39ff14] transition-colors">🎴 Printable Cards</Link></li>
            <li><Link href="/blog" className="hover:text-[#16a34a] dark:hover:text-[#39ff14] transition-colors">📰 Party Blog</Link></li>
            <li><Link href="/community" className="hover:text-[#16a34a] dark:hover:text-[#39ff14] transition-colors">🏆 Leaderboards</Link></li>
            <li><Link href="/sitemap" className="hover:text-[#16a34a] dark:hover:text-[#39ff14] transition-colors">🗺️ HTML Sitemap</Link></li>
          </ul>
        </div>

        {/* Col 6: Company */}
        <div>
          <h4 className="font-pixel text-xs text-[#ea580c] dark:text-[#ff6b00] uppercase mb-4 tracking-wider font-bold">Company</h4>
          <ul className="space-y-2 text-xs font-arcade text-lg font-bold">
            <li><Link href="/company/about" className="hover:text-[#ea580c] dark:hover:text-[#ff6b00] transition-colors">🏰 About Us</Link></li>
            <li><Link href="/company/mission" className="hover:text-[#ea580c] dark:hover:text-[#ff6b00] transition-colors">🎯 Our Mission</Link></li>
            <li><Link href="/company/contact" className="hover:text-[#ea580c] dark:hover:text-[#ff6b00] transition-colors">✉️ Contact Us</Link></li>
            <li><Link href="/company/privacy" className="hover:text-[#ea580c] dark:hover:text-[#ff6b00] transition-colors">🔒 Privacy</Link></li>
          </ul>
        </div>

      </div>

      {/* 14-Language Matrix Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-300 dark:border-slate-800">
        <h5 className="font-pixel text-xs text-slate-600 dark:text-slate-400 uppercase mb-3 text-center font-bold">Global Language Supported Locales (14 Languages)</h5>
        <div className="flex flex-wrap justify-center gap-3 text-xs font-arcade text-lg font-bold">
          {LOCALES.map(loc => (
            <Link key={loc.code} href={`/${loc.code}`} className="hover:text-[#b45309] dark:hover:text-[#ffe600] transition-colors flex items-center gap-1 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 px-2.5 py-1 text-slate-800 dark:text-slate-200">
              <span>{loc.flag}</span>
              <span>{loc.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-4 font-semibold">
        <p className="font-mono text-xs">
          © 2026 Imposter Party Game. Built with <Heart className="w-3.5 h-3.5 text-red-500 inline mx-1" /> for social deduction fans worldwide.
        </p>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <Link href="/sitemap.xml" className="hover:underline text-[#0284c7] dark:text-[#00f0ff]">XML Sitemap</Link>
          <Link href="/company/privacy" className="hover:underline">Privacy</Link>
          <Link href="/company/terms" className="hover:underline">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
