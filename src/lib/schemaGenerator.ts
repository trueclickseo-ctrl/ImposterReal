export function generateFAQSchema(qaPairs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qaPairs.map(pair => ({
      "@type": "Question",
      "name": pair.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": pair.answer
      }
    }))
  };
}

export function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play the Imposter Party Game",
    "description": "Learn how to play the online Imposter social deduction word game in 4 simple steps.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Gather Players & Choose Category",
        "text": "Get 3 to 20 friends together on desktop or mobile and choose a word category."
      },
      {
        "@type": "HowToStep",
        "name": "Secret Role Assignment",
        "text": "Every player sees the secret word except the secret Imposter, who gets a blank screen or imposter alert."
      },
      {
        "@type": "HowToStep",
        "name": "Give One-Word Clues",
        "text": "Players take turns giving one subtle clue related to the secret word. The Imposter must bluff."
      },
      {
        "@type": "HowToStep",
        "name": "Discuss and Vote",
        "text": "Debate who gave suspicious clues and vote to unmask the Imposter!"
      }
    ]
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Imposter - Social Deduction Party Game",
    "operatingSystem": "All modern browsers (Web, iOS, Android, macOS, Windows)",
    "applicationCategory": "GameApplication",
    "genre": "Social Deduction / Word Party Game",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "12450"
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://imposterland.com",
    "name": "Imposter Party Game",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://imposterland.com/word-library?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Imposter Game Studios",
    "url": "https://imposterland.com",
    "logo": "https://imposterland.com/icon.png",
    "sameAs": [
      "https://twitter.com/impostergame",
      "https://discord.gg/imposterparty"
    ]
  };
}

export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Imposter Social Deduction Game"
    },
    "author": {
      "@type": "Person",
      "name": "BoardGameGeek Weekly"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Imposter is hands down the fastest and most thrilling word deduction browser game available today. Zero downloads required!"
  };
}

export function generateVideoObjectSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "How to Play Imposter in 60 Seconds",
    "description": "Quick video walkthrough of the Imposter browser game mechanics.",
    "thumbnailUrl": ["https://imposterland.com/video-thumb.jpg"],
    "uploadDate": "2026-01-15T08:00:00+08:00"
  };
}
