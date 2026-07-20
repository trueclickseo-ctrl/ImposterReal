"use client";

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Send, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ff6b00] text-white">CONTACT US</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ff6b00]">Get in Touch</h1>
          <p className="font-sans text-sm text-slate-300">Questions, feedback, or partnership inquiries?</p>
        </div>

        <div className="bg-[#141c2e] border-4 border-[#ff6b00] p-6 sm:p-10 space-y-6 shadow-[6px_6px_0px_#000]">
          {submitted ? (
            <div className="bg-emerald-950 border-2 border-emerald-500 p-6 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <h2 className="font-pixel text-lg text-emerald-400">Message Delivered!</h2>
              <p className="font-sans text-xs text-slate-200">Thank you for contacting us. We will reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-pixel text-xs text-[#ffe600] block mb-1">Your Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-[#0a0e1a] border-2 border-slate-700 p-3 font-arcade text-lg text-slate-100 focus:outline-none focus:border-[#ffe600]" />
              </div>
              <div>
                <label className="font-pixel text-xs text-[#00f0ff] block mb-1">Your Email</label>
                <input required type="email" placeholder="john@example.com" className="w-full bg-[#0a0e1a] border-2 border-slate-700 p-3 font-arcade text-lg text-slate-100 focus:outline-none focus:border-[#00f0ff]" />
              </div>
              <div>
                <label className="font-pixel text-xs text-[#ff2a85] block mb-1">Message</label>
                <textarea required rows={4} placeholder="Type your inquiry..." className="w-full bg-[#0a0e1a] border-2 border-slate-700 p-3 font-arcade text-lg text-slate-100 focus:outline-none focus:border-[#ff2a85]"></textarea>
              </div>
              <button type="submit" className="pixel-btn pixel-btn-yellow w-full py-3 text-xs">
                <Send className="w-4 h-4 inline mr-2" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
