import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
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
      data-theme="light"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans font-medium transition-colors duration-200">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
