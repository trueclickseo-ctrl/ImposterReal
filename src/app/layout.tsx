import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://imposterland.com"),
  keywords: ["imposter game", "party game online", "social deduction game", "word bluffing game", "spyfall online", "among us word game"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "https://imposterland.com",
  },
  openGraph: {
    title: "Imposter | Free Online Social Deduction Party Game",
    description: "Play Imposter free in your browser — no download, no account. Custom rooms, 1,000+ word categories, 14 languages. Perfect for friends, teams & classrooms.",
    url: "https://imposterland.com",
    siteName: "ImposterLand",
    images: [
      {
        url: "https://imposterland.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imposter Game — Free Online Social Deduction Party Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imposter | Free Online Social Deduction Party Game",
    description: "Play Imposter free in your browser — no download needed. Social deduction word game for 3–20 players.",
    images: ["https://imposterland.com/og-image.png"],
  },
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJBPNQVH');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans font-medium transition-colors duration-200">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJBPNQVH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
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
