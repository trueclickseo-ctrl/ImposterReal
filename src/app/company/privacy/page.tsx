import SEOHead from "@/components/SEOHead";

export const metadata = {
  title: "Privacy Policy | Imposter Party Game",
  description: "Privacy Policy for Imposter App. We do not collect personal data, tracking cookies, or stored conversations.",
};

export default function PrivacyPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#a855f7] text-white">LEGAL</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#a855f7]">Privacy Policy</h1>
          <p className="font-sans text-xs text-slate-400">Last updated: July 2026</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#a855f7] p-8 space-y-4 text-slate-200 font-sans text-xs leading-relaxed shadow-[6px_6px_0px_#000]">
          <h2 className="font-pixel text-sm text-[#ffe600]">1. Zero Personal Data Storage</h2>
          <p>
            Imposter operates locally within your browser using JavaScript. Game room states, custom words, and player scores are stored temporarily in your local browser memory and are deleted when the session ends.
          </p>

          <h2 className="font-pixel text-sm text-[#00f0ff]">2. Analytics & Cookies</h2>
          <p>
            We use anonymized, aggregated pageview counters to monitor site performance. We do not track cross-site activity or sell user data to third parties.
          </p>
        </div>
      </div>
    </>
  );
}
