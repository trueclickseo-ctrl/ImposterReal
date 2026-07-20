import SEOHead from "@/components/SEOHead";

export const metadata = {
  title: "About Imposter Game Studios | Our Story & Vision",
  description: "Learn about Imposter Game Studios, our retro 8-bit aesthetic inspiration, and our mission to create instant, free multiplayer browser games.",
};

export default function AboutPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">OUR STORY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ffe600]">About Imposter Party Game</h1>
          <p className="font-sans text-sm text-slate-300">Inspired by traditional parlor games and retro 8-bit arcade culture.</p>
        </div>

        {/* Section 8 Old English About Page Paragraph */}
        <div className="bg-[#141c2e] border-4 border-[#ffe600] p-8 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          
          <div className="bg-[#1e293b] border-l-4 border-[#ffe600] p-6 space-y-2">
            <span className="pixel-badge bg-[#ffe600] text-slate-900">OLD ENGLISH VOICE</span>
            <p className="font-serif italic text-base sm:text-lg text-[#ffe600]">
              "In days of old, folk assembled by hearth and lantern to prove their wisdom through tale and riddle. From such traditions our pastime draweth inspiration — a gathering place where companions may meet with ease, whether beneath one roof or across distant lands, to test honesty, wit, and fellowship."
            </p>
          </div>

          <h2 className="font-pixel text-lg text-[#00f0ff]">Modern Web & Retro Design</h2>
          <p>
            Imposter was built to solve a simple problem: traditional party board games require physical boxes, decks of cards, or bulky downloads that slow down party night. We engineered a ultra-fast browser game that loads in under 1 second on any smartphone, tablet, or desktop.
          </p>

          <h2 className="font-pixel text-lg text-[#ff2a85]">Global Localization in 14 Languages</h2>
          <p>
            With active players across Europe, the Americas, and Asia, Imposter provides native dictionary support for 14 languages, enabling players of all backgrounds to enjoy social deduction games together.
          </p>
        </div>
      </div>
    </>
  );
}
