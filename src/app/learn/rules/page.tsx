"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { BookOpen, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";
import { LearnRulesContent } from "@/dictionaries/types";

export default function RulesPage(props: any) {
  const { locale } = useLanguage();
  const rulesData: LearnRulesContent = props?.content || getDictionary(locale).learnRules;

  const faqItems = [
    {
      question: "How long does a round of Imposter last?",
      answer: "A single round typically lasts between 3 to 7 minutes, making it quick and engaging for group play."
    }
  ];

  return (
    <>
      <SEOHead faqItems={faqItems} includeHowTo={true} />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">{rulesData.badge}</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ffe600]">{rulesData.title}</h1>
          <p className="font-sans text-sm text-slate-300">{rulesData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-[#141c2e] border-4 border-[#ffe600] p-6 sm:p-10 space-y-6 text-slate-200 font-sans text-sm leading-relaxed shadow-[6px_6px_0px_#000]">
            
            <h2 className="font-pixel text-lg text-[#00f0ff] flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#39ff14]" /> {rulesData.quickSummaryTitle}
            </h2>

            <div className="space-y-4 pt-2">
              {rulesData.steps.map((step, idx) => (
                <div key={idx} className="bg-[#1e293b] border-2 border-slate-700 p-4 space-y-1">
                  <h3 className="font-pixel text-xs text-[#ffe600]">{step.title}</h3>
                  <p className="text-xs text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-4">
              <h2 className="font-pixel text-base text-[#ffe600]">{rulesData.articleTitle}</h2>
              <p>{rulesData.articleP1}</p>

              <h3 className="font-pixel text-xs text-[#00f0ff]">{rulesData.articleH2}</h3>
              <p>{rulesData.articleP2}</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                <li>{rulesData.articleLi1}</li>
                <li>{rulesData.articleLi2}</li>
              </ul>

              <h3 className="font-pixel text-xs text-[#00f0ff]">{rulesData.articleH3}</h3>
              <p>{rulesData.articleP3}</p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
              <Link href="/play/" className="pixel-btn pixel-btn-yellow text-xs">🎮 Start Game</Link>
              <Link href="/learn/faq/" className="font-arcade text-lg text-[#00f0ff] hover:underline">Read FAQ →</Link>
            </div>
          </div>

          <div className="lg:col-span-1 w-full flex justify-center">
            <picture className="w-full max-w-[280px]">
              <source srcSet="/images/rules_book-desktop.webp 500w, /images/rules_book-mobile.webp 300w" sizes="(max-width: 640px) 300px, 500px" type="image/webp" />
              <img 
                src="/images/rules_book-desktop.jpg" 
                srcSet="/images/rules_book-desktop.jpg 500w, /images/rules_book-mobile.jpg 300w" 
                sizes="(max-width: 640px) 300px, 500px"
                width={500}
                height={500}
                alt="Official rulebook illustration for Imposter game"
                className="w-full h-auto object-cover rounded-2xl border-4 border-slate-900 dark:border-slate-700 shadow-[6px_6px_0px_#ffe600]"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
