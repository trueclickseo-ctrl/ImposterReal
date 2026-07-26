import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { ACADEMIC_REFERENCES } from "@/lib/encyclopedia";
import { Award, ExternalLink, ArrowLeft, ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "High-Authority Academic References & Bibliography | Imposter",
  description: "Curated academic bibliography and high-authority reference list: BoardGameGeek database, Stanford Encyclopedia of Philosophy, MIT Game Lab, and ACM Digital Library.",
};

export default function AcademicReferencesPage() {
  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Link href="/encyclopedia" className="inline-flex items-center gap-1 font-arcade text-base text-[#16a34a] dark:text-[#39ff14] hover:underline mb-2">
            <ArrowLeft className="w-4 h-4" /> Back to Master Encyclopedia
          </Link>
          <span className="pixel-badge bg-[#16a34a] dark:bg-[#39ff14] text-white dark:text-slate-900">ACADEMIC BIBLIOGRAPHY</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#16a34a] dark:text-[#39ff14]">
            High-Authority External References
          </h1>
          <p className="font-sans text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Peer-reviewed research journals, institutional game labs, and tabletop database entries.
          </p>
        </div>

        {/* References List */}
        <div className="space-y-6">
          {ACADEMIC_REFERENCES.map(ref => (
            <div key={ref.id} className="pixel-box p-6 border-4 border-[#16a34a] dark:border-[#39ff14] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-600 dark:text-[#ffe600]" />
                  <h2 className="font-pixel text-base text-slate-900 dark:text-slate-100">{ref.title}</h2>
                </div>
                <span className="pixel-badge bg-[#16a34a] dark:bg-[#39ff14] text-white dark:text-slate-900 font-bold">{ref.citationType}</span>
              </div>

              <div className="font-arcade text-base text-[#0284c7] dark:text-[#00f0ff] flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>Authors: {ref.authors}</span>
                <span>Year: {ref.year}</span>
                <span>Publisher: {ref.publisher}</span>
              </div>

              <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {ref.summary}
              </p>

              <div className="pt-2 flex justify-end">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn pixel-btn-yellow text-xs"
                >
                  <ExternalLink className="w-4 h-4 inline mr-1" /> Visit Primary Source ({ref.publisher})
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

