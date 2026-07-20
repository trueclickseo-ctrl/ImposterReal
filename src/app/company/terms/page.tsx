import SEOHead from "@/components/SEOHead";

export const metadata = {
  title: "Terms of Service | Imposter Party Game",
  description: "Terms of Service governing the use of the Imposter browser game and word category services.",
};

export default function TermsPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-slate-600 text-white">TERMS</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-slate-100">Terms of Service</h1>
          <p className="font-sans text-xs text-slate-400">Last updated: July 2026</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-slate-700 p-8 space-y-4 text-slate-200 font-sans text-xs leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-sm text-[#ffe600]">1. Acceptance of Terms</h2>
          <p>
            By accessing or playing Imposter, you agree to comply with these terms. Imposter is provided free of charge for entertainment purposes.
          </p>

          <h2 className="font-pixel text-sm text-[#00f0ff]">2. Intellectual Property</h2>
          <p>
            All original 8-bit retro assets, code, microcopy, and curated word databases are protected under copyright law.
          </p>
        </div>
      </div>
    </>
  );
}
