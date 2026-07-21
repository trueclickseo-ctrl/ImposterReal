"use client";

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import { Printer, FileText, GraduationCap, PartyPopper, Download, Check } from "lucide-react";

export default function ResourcesPage() {
  const { dictionary } = useLanguage();
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const triggerDownload = (name: string) => {
    setDownloaded(name);

    let docTitle = "";
    let mainContent = "";

    const commonHeader = `
      <div class="header">
        <div>
          <div class="brand-title">🕵️ IMPOSTER</div>
          <div class="brand-tagline">"Gather thy fellowship! One among thee is an Imposter who knows not the secret word."</div>
          <div class="brand-url">https://imposterland.com — The #1 Free Browser Social Deduction Party Game</div>
        </div>
        <div class="qr-box">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=1&data=https%3A%2F%2Fimposterland.com" alt="Scan QR Code" />
          <div class="qr-text">Scan to Play Online!</div>
        </div>
      </div>
    `;

    if (name === "cards") {
      docTitle = "Imposter Printable Card Sheets";
      mainContent = `
        <div class="section-title">🎴 Printable Card Decks (Cut Along Dashed Lines)</div>
        
        <h3 class="category-header">Deck 1: Blockbuster Movies</h3>
        <div class="card-grid">
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Inception</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Titanic</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Avatar</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Star Wars</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Jurassic Park</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">The Matrix</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Harry Potter</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Avengers</div></div>
          <div class="card imposter-card"><div class="card-title">IMPOSTER</div><div class="card-word card-imposter">YOU ARE THE IMPOSTER!</div></div>
        </div>

        <h3 class="category-header">Deck 2: Food & Cuisine</h3>
        <div class="card-grid">
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Pizza</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Sushi</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Tacos</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Cheeseburger</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Ice Cream</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Ramen</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Pasta</div></div>
          <div class="card"><div class="card-title">Civilian Card</div><div class="card-word">Croissant</div></div>
          <div class="card imposter-card"><div class="card-title">IMPOSTER</div><div class="card-word card-imposter">YOU ARE THE IMPOSTER!</div></div>
        </div>
      `;
    } else if (name === "rules") {
      docTitle = "Imposter Quick Rule Sheet";
      mainContent = `
        <div class="section-title">📜 Official 1-Page Rule Cheat Sheet</div>
        <div class="content-box">
          <h3>🎯 Objective</h3>
          <p><strong>Civilians:</strong> Unmask the Imposter who does not know the secret word.<br>
          <strong>Imposter:</strong> Listen closely, blend in with clever clues, and guess the secret word!</p>
          
          <h3>👥 Setup (3 – 20 Players)</h3>
          <ol>
            <li>Select a category (e.g., Movies, Food, Animals).</li>
            <li>Assign 1 Imposter (or 2 in Team Mode) and make everyone else a Civilian.</li>
            <li>Civilians get the Secret Word. The Imposter sees <em>"YOU ARE THE IMPOSTER"</em>.</li>
          </ol>

          <h3>🎮 Gameplay (Round Steps)</h3>
          <p><strong>Step 1: Clue Phase</strong> — Take turns going around the room. Each player says ONE single-word clue.<br>
          <em>Tip for Civilians:</em> Give a clue that proves you know the word without giving it away to the Imposter!<br>
          <em>Tip for Imposter:</em> Blend in by building on clues you just heard.</p>
          
          <p><strong>Step 2: Discussion & Voting</strong> — Debate for 60 seconds. On the count of 3, everyone points at their suspect. The player with the most votes is eliminated!</p>

          <h3>🏆 Scoring</h3>
          <p>• Civilians win +1 Point if the Imposter is voted out.<br>
          • Imposter wins +2 Points if they survive or guess the secret word!</p>
        </div>
      `;
    } else if (name === "teacher") {
      docTitle = "Imposter Teacher Classroom Guide";
      mainContent = `
        <div class="section-title">🎓 Teacher's Educational Activity Guide</div>
        <div class="content-box">
          <h3>💡 Educational Objectives</h3>
          <ul>
            <li>Enhances vocabulary retention, contextual associations, and verbal fluency.</li>
            <li>Develops deductive reasoning and critical thinking skills.</li>
            <li>Encourages peer collaboration and active listening in a fun setting.</li>
          </ul>

          <h3>⏱️ 30-Minute Lesson Plan</h3>
          <ol>
            <li><strong>Introduction (5 Mins):</strong> Explain synonyms, associations, and category relationships.</li>
            <li><strong>Gameplay Round 1 (10 Mins):</strong> Play with Classroom / Animals / Geography vocabulary.</li>
            <li><strong>Debate & Analysis (10 Mins):</strong> Students discuss why certain clues were clever, vague, or suspicious.</li>
            <li><strong>Wrap-Up (5 Mins):</strong> Review all target vocabulary words from the session on the board.</li>
          </ol>
        </div>
      `;
    } else if (name === "host") {
      docTitle = "Imposter Party Host Toolkit";
      mainContent = `
        <div class="section-title">🎉 Party Host Toolkit & Scorekeeper</div>
        <div class="content-box">
          <h3>🎤 Host Introduction Script</h3>
          <p><em>"Welcome everyone to Imposter! You'll all see a secret word on your screen, except for ONE among us who is the Imposter. Give 1-word clues, don't give the word away, and catch the liar!"</em></p>
          
          <h3>📊 Official Scorekeeper Sheet</h3>
          <table class="score-table">
            <thead>
              <tr><th>Player Name</th><th>Round 1</th><th>Round 2</th><th>Round 3</th><th>Total Score</th></tr>
            </thead>
            <tbody>
              <tr><td>1.</td><td></td><td></td><td></td><td></td></tr>
              <tr><td>2.</td><td></td><td></td><td></td><td></td></tr>
              <tr><td>3.</td><td></td><td></td><td></td><td></td></tr>
              <tr><td>4.</td><td></td><td></td><td></td><td></td></tr>
              <tr><td>5.</td><td></td><td></td><td></td><td></td></tr>
              <tr><td>6.</td><td></td><td></td><td></td><td></td></tr>
              <tr><td>7.</td><td></td><td></td><td></td><td></td></tr>
              <tr><td>8.</td><td></td><td></td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      `;
    }

    const fullHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${docTitle}</title>
        <style>
          @media print { 
            @page { margin: 15mm; } 
            .no-print { display: none !important; }
          }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 24px; color: #0f172a; max-width: 900px; margin: 0 auto; line-height: 1.6; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #f59e0b; padding-bottom: 16px; margin-bottom: 24px; }
          .brand-title { font-size: 32px; font-weight: 900; color: #d97706; text-transform: uppercase; letter-spacing: -0.5px; }
          .brand-tagline { font-size: 14px; font-weight: 600; color: #475569; margin-top: 4px; }
          .brand-url { font-size: 12px; color: #0284c7; font-weight: bold; margin-top: 4px; }
          .qr-box { text-align: center; border: 2px solid #0f172a; padding: 8px; border-radius: 12px; background: #fffbebf5; }
          .qr-box img { width: 100px; height: 100px; display: block; margin: 0 auto; }
          .qr-text { font-size: 11px; font-weight: 800; color: #b45309; margin-top: 6px; text-transform: uppercase; }
          .section-title { font-size: 22px; font-weight: 800; color: #0f172a; margin-bottom: 16px; border-left: 6px solid #0284c7; padding-left: 12px; }
          .category-header { font-size: 16px; font-weight: 800; color: #b45309; margin-top: 24px; margin-bottom: 12px; text-transform: uppercase; }
          .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 24px; }
          .card { border: 2px dashed #94a3b8; border-radius: 12px; padding: 20px; text-align: center; background: #f8fafc; }
          .imposter-card { border: 2px dashed #ef4444; background: #fef2f2; }
          .card-title { font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px; }
          .card-word { font-size: 22px; font-weight: 900; color: #0f172a; }
          .card-imposter { color: #dc2626; font-size: 16px; }
          .content-box { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; }
          .content-box h3 { color: #0284c7; margin-top: 16px; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; }
          .score-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          .score-table th, .score-table td { border: 2px solid #cbd5e1; padding: 10px; text-align: center; font-size: 14px; }
          .score-table th { background: #f1f5f9; color: #0f172a; font-weight: 800; }
          .btn-print { background: #fbbf24; color: #0f172a; border: 2px solid #0f172a; padding: 12px 24px; font-weight: 900; font-size: 15px; border-radius: 10px; cursor: pointer; margin-bottom: 20px; box-shadow: 3px 3px 0px #0f172a; display: inline-flex; align-items: center; gap: 8px; }
          .btn-print:hover { background: #f59e0b; }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button class="btn-print" onclick="window.print()">🖨️ Save as PDF / Print Now</button>
        </div>
        ${commonHeader}
        ${mainContent}
      </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(fullHtml);
      printWindow.document.close();
      printWindow.focus();
    }

    setTimeout(() => setDownloaded(null), 2500);
  };

  const samplePrintableCards = [
    { title: "Blockbuster Movies Pack", words: ["Inception", "Titanic", "Avatar", "Star Wars"] },
    { title: "Food Favorites Pack", words: ["Pizza", "Sushi", "Tacos", "Cheeseburger"] },
    { title: "Funny Words Pack", words: ["Rubber Duck", "Banana Peel", "Unicorn", "Sloth"] },
    { title: "Classroom Kids Pack", words: ["Dolphin", "Elephant", "Kangaroo", "Rainbow"] }
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#8b5cf6] text-white font-bold">RESOURCES & DOWNLOADS</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#8b5cf6] dark:text-[#a78bfa] font-extrabold">Printable Cards & Event Kits</h1>
          <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-200 max-w-xl mx-auto">
            Free printable card sheets, PDF rules, classroom activity guides, and party planning kits.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="pixel-box pixel-box-yellow p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Printer className="w-8 h-8 text-[#d97706] dark:text-[#fbbf24]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Printable Card Sheets</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">PDF • 300 DPI High Resolution</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">
              Printable card decks with cut lines for offline game nights when smartphones aren't available.
            </p>
            <button
              onClick={() => triggerDownload("cards")}
              className="pixel-btn pixel-btn-yellow text-xs w-full font-bold"
            >
              {downloaded === "cards" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "cards" ? "Downloading PDF Card Pack..." : "Download Printable Cards (PDF)"}
            </button>
          </div>

          <div className="pixel-box pixel-box-cyan p-6 space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#0284c7] dark:text-[#06b6d4]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Quick Rule Sheets</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">1-Page PDF Reference</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">
              Concise single-page rule cheat sheet to hand out to players during party game setups.
            </p>
            <button
              onClick={() => triggerDownload("rules")}
              className="pixel-btn pixel-btn-cyan text-xs w-full font-bold"
            >
              {downloaded === "rules" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "rules" ? "Downloading Rule Sheet..." : "Download PDF Rule Sheet"}
            </button>
          </div>

          <div className="pixel-box pixel-box-pink p-6 space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#e11d48] dark:text-[#f43f5e]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Teacher's Classroom Guide</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">Educational Activity Guide</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">
              Lesson plans and vocabulary reinforcement activities for ESL and K-12 educators.
            </p>
            <button
              onClick={() => triggerDownload("teacher")}
              className="pixel-btn pixel-btn-pink text-xs w-full font-bold"
            >
              {downloaded === "teacher" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "teacher" ? "Downloading Teacher Kit..." : "Download Teacher Guide (PDF)"}
            </button>
          </div>

          <div className="pixel-box p-6 space-y-4 border-2 border-[#10b981] dark:border-[#34d399]">
            <div className="flex items-center gap-3">
              <PartyPopper className="w-8 h-8 text-[#10b981] dark:text-[#34d399]" />
              <div>
                <h2 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Party Host Toolkit</h2>
                <span className="font-arcade text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase font-bold">Event Host Bundle</span>
              </div>
            </div>
            <p className="font-sans text-sm font-semibold text-slate-700 dark:text-slate-100">
              Icebreaker prompts, timer scripts, and host scorekeeper sheets.
            </p>
            <button
              onClick={() => triggerDownload("host")}
              className="pixel-btn pixel-btn-green text-xs w-full font-bold"
            >
              {downloaded === "host" ? <Check className="w-4 h-4 inline mr-1" /> : <Download className="w-4 h-4 inline mr-1" />}
              {downloaded === "host" ? "Downloading Host Kit..." : "Download Host Kit (ZIP)"}
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
