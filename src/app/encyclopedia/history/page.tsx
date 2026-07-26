import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { HISTORICAL_TIMELINE } from "@/lib/encyclopedia";
import { History, ExternalLink, Calendar, User, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "History of Social Deduction Games | Victorian Parlor to Imposter App",
  description: "Chronological history of social deduction games: 19th-century parlor games, Dmitry Davidoff's 1986 Mafia, Spyfall, Among Us, and modern Imposter word games.",
};

export default function HistoryPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Link href="/encyclopedia" className="inline-flex items-center gap-1 font-arcade text-base text-[#0284c7] dark:text-[#00f0ff] hover:underline mb-2">
            <ArrowLeft className="w-4 h-4" /> Back to Master Encyclopedia
          </Link>
          <span className="pixel-badge bg-[#0284c7] dark:bg-[#00f0ff] text-white dark:text-slate-900">HISTORICAL CHRONOLOGY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#0284c7] dark:text-[#00f0ff]">
            History & Evolution of Social Deduction
          </h1>
          <p className="font-sans text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            From 19th-century parlor games to Dmitry Davidoff's 1986 invention of Mafia and modern web-based Imposter games.
          </p>
        </div>

        {/* Timeline Event Cards */}
        <div className="space-y-6">
          {HISTORICAL_TIMELINE.map((event, idx) => (
            <div key={idx} className="pixel-box p-6 border-4 border-[#0284c7] dark:border-[#00f0ff] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                <div className="flex items-center gap-3">
                  <span className="pixel-badge bg-amber-500 dark:bg-[#ffe600] text-white dark:text-slate-900 font-bold">{event.year}</span>
                  <h2 className="font-pixel text-base sm:text-lg text-slate-900 dark:text-slate-100">{event.title}</h2>
                </div>
                <span className="font-arcade text-sm text-[#0284c7] dark:text-[#00f0ff] flex items-center gap-1">
                  <User className="w-4 h-4" /> {event.creator}
                </span>
              </div>

              <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {event.description}
              </p>

              <div className="bg-slate-100 dark:bg-slate-800 p-3 border-l-4 border-amber-500 dark:border-[#ffe600] font-sans text-xs space-y-1 text-slate-800 dark:text-slate-200">
                <strong>Significance:</strong> {event.significance}
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href={event.authorityLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-600 dark:text-[#ffe600] font-arcade text-base hover:underline"
                >
                  Verify Source ({event.authoritySource}) <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

