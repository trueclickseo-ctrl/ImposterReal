# Imposter Real - Social Deduction Party Game

Imposter Real is a fast, lightweight, state-of-the-art browser-based social deduction party game and Master Encyclopedia built with Next.js (App Router), TypeScript, Tailwind CSS, and 14-language internationalization (i18n) support.

## Features

- 🕵️ **Interactive Party Game**: Pass-and-play and room-based word deduction game with Imposter roles, clues, timer, and voting.
- 📚 **Master Encyclopedia**: Extensive strategy guides, rules, game modes, academic references, and history.
- 🌍 **14 Languages i18n**: Multi-lingual support including English, German, French, Spanish, Portuguese, Italian, Turkish, Dutch, Polish, Swedish, Russian, Ukrainian, Japanese, and Chinese.
- ⚡ **SEO & Performance**: 100% static HTML export with semantic markup, canonical tags, alternate hreflang tags, and instant load times.

## Technology Stack

- **Framework**: Next.js 16 (App Router with Static HTML Export)
- **Styling**: Tailwind CSS v4 (CRT & Retro Sci-Fi style system)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Development Setup

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build & Export

To generate the static production build:

```bash
npm run build
```

The static HTML files will be generated in the `out/` folder.

## Deployment Setup

### Hostinger Deployment

1. Connect `https://github.com/trueclickseo-ctrl/ImposterReal.git` to your hosting panel or upload the contents of the `out/` directory to `public_html`.
2. `.htaccess` is included to route traffic seamlessly to static HTML pages.
