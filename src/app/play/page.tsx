import ImposterGameUI from "@/components/ImposterGameUI";
import SEOHead from "@/components/SEOHead";
import { Gamepad2, Smartphone, Monitor, Users, ShieldCheck, Key } from "lucide-react";

export const metadata = {
  title: "Play Imposter Game Online | Free Instant Multiplayer Browser Game",
  description: "Play Imposter online in your browser with no download required. Join custom rooms, pass and play on mobile, or play on desktop with friends.",
};

export default function PlayPage() {
  const faqItems = [
    {
      question: "Do I need to download an app to play Imposter?",
      answer: "No! Imposter runs 100% in your mobile or desktop web browser with instant loading and zero installation."
    },
    {
      question: "Can we play with just one phone?",
      answer: "Yes, our Pass & Play mode allows up to 20 players to pass a single smartphone around to reveal their secret roles secretly."
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      <div className="space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="pixel-badge bg-[#00f0ff] text-slate-900">INSTANT BROWSER PLAY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ffe600]">Play Imposter Party Game</h1>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto">
            Choose your game mode below: pass one device around in person, or create a room code to join online.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-arcade text-lg">
          <div className="bg-[#1e293b] border-2 border-[#ffe600] p-4 text-center space-y-1">
            <Smartphone className="w-8 h-8 text-[#ffe600] mx-auto" />
            <h3 className="font-bold text-slate-100">Mobile Pass & Play</h3>
            <p className="text-xs font-sans text-slate-400">Pass one phone around the circle to view secret words.</p>
          </div>

          <div className="bg-[#1e293b] border-2 border-[#00f0ff] p-4 text-center space-y-1">
            <Key className="w-8 h-8 text-[#00f0ff] mx-auto" />
            <h3 className="font-bold text-slate-100">Room Code Lobby</h3>
            <p className="text-xs font-sans text-slate-400">Create private rooms with custom room codes for online groups.</p>
          </div>

          <div className="bg-[#1e293b] border-2 border-[#ff2a85] p-4 text-center space-y-1">
            <Monitor className="w-8 h-8 text-[#ff2a85] mx-auto" />
            <h3 className="font-bold text-slate-100">Desktop & Smart TV</h3>
            <p className="text-xs font-sans text-slate-400">Host game night on big screen monitors, laptops, or TVs.</p>
          </div>
        </div>

        {/* Embedded Full Game Loop */}
        <ImposterGameUI />

        {/* Gameplay Instructions */}
        <div className="pixel-box p-6 sm:p-8 space-y-4 bg-[#141c2e] my-12">
          <h2 className="font-pixel text-lg text-[#00f0ff]">Game Rules Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs text-slate-300">
            <div className="bg-[#1e293b] p-4 border border-slate-700 space-y-1">
              <span className="font-bold text-[#ffe600] text-sm">Step 1: Role Assignment</span>
              <p>Everyone sees the secret word (e.g., "Inception") except the secret Imposter who gets a blank/warning screen.</p>
            </div>
            <div className="bg-[#1e293b] p-4 border border-slate-700 space-y-1">
              <span className="font-bold text-[#00f0ff] text-sm">Step 2: Give Clues</span>
              <p>Take turns around the room saying ONE word clue. Civilians give subtle clues; the Imposter must bluff.</p>
            </div>
            <div className="bg-[#1e293b] p-4 border border-slate-700 space-y-1">
              <span className="font-bold text-[#ff2a85] text-sm">Step 3: Vote & Unmask</span>
              <p>Discuss who gave suspicious clues and vote to unmask the Imposter! Civilians win if they catch the Imposter.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
