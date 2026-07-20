import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Imposter FAQ & Answers | Frequently Asked Questions",
  description: "Complete FAQ directory for the Imposter browser game: pricing, player counts, device compatibility, rule edge cases, and online safety.",
};

export default function FAQPage() {
  const faqItems = [
    {
      question: "Is Imposter free to play online?",
      answer: "Yes! Imposter is 100% free with no hidden fees, paywalls, or account registration required."
    },
    {
      question: "Can I play Imposter on Zoom or Discord calls?",
      answer: "Absolutely! Create a private room code or share your screen on Discord, Zoom, or Google Meet."
    },
    {
      question: "What happens if there is a tie vote?",
      answer: "In the case of a tie vote during discussion, players conduct a 1-minute speed debate between tied suspects and vote again."
    },
    {
      question: "Can teachers use Imposter in classroom settings?",
      answer: "Yes, Imposter features dedicated classroom modes with family-friendly vocabulary and educational subject categories."
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#a855f7] text-white">FAQ DIRECTORY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#a855f7]">Frequently Asked Questions</h1>
          <p className="font-sans text-sm text-slate-300">Clear answers for players, party hosts, and educators.</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#a855f7] p-6 sm:p-10 space-y-6 shadow-[6px_6px_0px_#000]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-[#1e293b] border-2 border-slate-700 p-5 space-y-2">
                <h3 className="font-pixel text-xs text-[#00f0ff] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#ffe600] shrink-0" />
                  {item.question}
                </h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed pl-6">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <Link href="/play" className="pixel-btn pixel-btn-cyan text-xs">🎮 Play Now Free</Link>
            <Link href="/company/contact" className="font-arcade text-lg text-[#00f0ff] hover:underline">Ask a Question →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
