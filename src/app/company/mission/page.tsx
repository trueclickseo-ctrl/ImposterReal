import SEOHead from "@/components/SEOHead";

export const metadata = {
  title: "Our Mission | Imposter Game Studios",
  description: "Our mission is to bring people together through accessible, free, browser-based party games with zero paywalls or barrier to entry.",
};

export default function MissionPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#00f0ff] text-slate-900">MISSION STATEMENT</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#00f0ff]">Connecting People Through Play</h1>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#00f0ff] p-8 space-y-4 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-base text-[#ffe600]">1. Zero Friction Play</h2>
          <p>No downloads, no logins, no mandatory app store installs. Games should start in under 5 seconds.</p>

          <h2 className="font-pixel text-base text-[#ff2a85]">2. Universal Accessibility</h2>
          <p>Full support for WCAG 2.2 AA standards, screen-reader fallback labels, and 14 native language translations.</p>
        </div>
      </div>
    </>
  );
}
