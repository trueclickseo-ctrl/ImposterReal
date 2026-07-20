"use client";

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Send, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // Send form submission to Formspree, configured to send directly to owner's email with exact subject
      const response = await fetch("https://formspree.io/f/xqakodqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: "Mail from imposter",
          _to: "trueclickseo@gmail.com"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback mailto trigger if submission relay fails
        window.location.href = `mailto:trueclickseo@gmail.com?subject=Mail from imposter&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        setSubmitted(true);
      }
    } catch (error) {
      window.location.href = `mailto:trueclickseo@gmail.com?subject=Mail from imposter&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-xl mx-auto space-y-8 my-10">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ea580c] text-white font-bold">CONTACT US</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ea580c] dark:text-[#fb923c] font-extrabold">Get in Touch</h1>
          <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-100">
            Questions, feedback, or partnership inquiries?
          </p>
        </div>

        <div className="pixel-box p-6 sm:p-10 space-y-6">
          {submitted ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-500 p-6 text-center space-y-3 rounded-2xl shadow-sm">
              <Check className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
              <h2 className="font-pixel text-lg text-emerald-700 dark:text-emerald-400 font-extrabold">Message Delivered!</h2>
              <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200">
                Thank you for contacting us. We will reply to your email at <strong className="underline">{email}</strong> within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-pixel text-xs text-[#d97706] dark:text-[#fbbf24] uppercase block mb-1.5 font-bold">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[var(--bg-card-alt)] border-2 border-slate-350 dark:border-slate-700 p-3 font-arcade text-lg text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:border-[#fbbf24] shadow-inner"
                />
              </div>
              <div>
                <label className="font-pixel text-xs text-[#0284c7] dark:text-[#38bdf8] uppercase block mb-1.5 font-bold">Your Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[var(--bg-card-alt)] border-2 border-slate-350 dark:border-slate-700 p-3 font-arcade text-lg text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:border-[#0284c7] shadow-inner"
                />
              </div>
              <div>
                <label className="font-pixel text-xs text-[#e11d48] dark:text-[#f43f5e] uppercase block mb-1.5 font-bold">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type your inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[var(--bg-card-alt)] border-2 border-slate-355 dark:border-slate-700 p-3 font-arcade text-lg text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:border-[#e11d48] shadow-inner"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="pixel-btn pixel-btn-yellow w-full py-3.5 text-xs font-bold cursor-pointer"
              >
                <Send className="w-4 h-4 inline mr-2" /> {sending ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
