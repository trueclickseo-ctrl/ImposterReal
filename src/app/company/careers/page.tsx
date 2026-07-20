import SEOHead from "@/components/SEOHead";

export const metadata = {
  title: "Careers | Join Imposter Game Studios",
  description: "Explore career opportunities at Imposter Game Studios. We build high-performance web multiplayer games and social deduction experiences.",
};

export default function CareersPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#39ff14] text-slate-900">CAREERS</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#39ff14]">Work With Us</h1>
          <p className="font-sans text-sm text-slate-300">Build the future of web social games.</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#39ff14] p-8 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-base text-[#ffe600]">Open Positions</h2>
          
          <div className="bg-[#1e293b] border-2 border-slate-700 p-4 space-y-1">
            <h3 className="font-pixel text-sm text-[#00f0ff]">Senior Full-Stack Game Engineer (Next.js / WebSockets)</h3>
            <p className="font-sans text-xs text-slate-400">Remote • Full-Time • Competitive Equity</p>
          </div>

          <div className="bg-[#1e293b] border-2 border-slate-700 p-4 space-y-1">
            <h3 className="font-pixel text-sm text-[#ff2a85]">Pixel Artist & Retro UI Designer</h3>
            <p className="font-sans text-xs text-slate-400">Remote • Project Basis / Full-Time</p>
          </div>
        </div>
      </div>
    </>
  );
}
