import type { Metadata } from "next";
import { Press_Start_2P, VT323, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Imposter | Free Online Social Deduction Party Game",
  description: "Play Imposter — a fast, free browser-based word deduction party game for friends, teams, and classrooms. No download needed. Custom rooms & 1,000+ categories.",
  metadataBase: new URL("https://imposter.app"),
  keywords: ["imposter game", "party game online", "social deduction game", "word bluffing game", "spyfall online", "among us word game"],
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
  alternates: {
    canonical: "https://imposter.app",
    languages: {
      "en": "https://imposter.app/en",
      "de": "https://imposter.app/de",
      "fr": "https://imposter.app/fr",
      "es": "https://imposter.app/es",
      "pt": "https://imposter.app/pt",
      "it": "https://imposter.app/it",
      "tr": "https://imposter.app/tr",
      "nl": "https://imposter.app/nl",
      "pl": "https://imposter.app/pl",
      "sv": "https://imposter.app/sv",
      "ru": "https://imposter.app/ru",
      "uk": "https://imposter.app/uk",
      "ja": "https://imposter.app/ja",
      "zh": "https://imposter.app/zh"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} ${inter.variable} h-full antialiased crt-scanlines`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0e1a] text-slate-100 font-sans">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
