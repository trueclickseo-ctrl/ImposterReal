"use client";

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";
import { LearnFAQContent } from "@/dictionaries/types";

export default function FAQPage(props: any) {
  const { locale } = useLanguage();
  const faqData: LearnFAQContent = props?.content || getDictionary(locale).learnFaq;

  return (
    <>
      <SEOHead faqItems={faqData.items} includeHowTo={false} />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#a855f7] text-white">{faqData.badge}</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#a855f7]">{faqData.title}</h1>
          <p className="font-sans text-sm text-slate-300">{faqData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-[#141c2e] border-4 border-[#a855f7] p-6 sm:p-10 space-y-6 shadow-[6px_6px_0px_#000]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqData.items.map((item, idx) => (
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
              <Link href="/play/" className="pixel-btn pixel-btn-cyan text-xs">{faqData.playCta}</Link>
              <Link href="/company/contact/" className="font-arcade text-lg text-[#00f0ff] hover:underline">{faqData.askCta}</Link>
            </div>
          </div>

          <div className="lg:col-span-1 w-full flex justify-center">
            <picture className="w-full max-w-[280px]">
              <source srcSet="/images/faq_qa-desktop.webp 500w, /images/faq_qa-mobile.webp 300w" sizes="(max-width: 640px) 300px, 500px" type="image/webp" />
              <img 
                src="/images/faq_qa-desktop.jpg" 
                srcSet="/images/faq_qa-desktop.jpg 500w, /images/faq_qa-mobile.jpg 300w" 
                sizes="(max-width: 640px) 300px, 500px"
                width={500}
                height={500}
                alt={faqData.imageAlt}
                className="w-full h-auto object-cover rounded-2xl border-4 border-slate-900 dark:border-slate-700 shadow-[6px_6px_0px_#a855f7]"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
