import { FullLocaleDictionary } from "./types";

export const enDictionary: FullLocaleDictionary = {
  _meta: {
    version: 1,
    lastUpdated: "2026-08-11",
    status: "current"
  },
  learnFaq: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "FAQ DIRECTORY",
    title: "Frequently Asked Questions",
    subtitle: "Clear answers for players, party hosts, and educators.",
    playCta: "🎮 Play Now Free",
    askCta: "Ask a Question →",
    imageAlt: "Person looking up frequently asked questions about the Imposter game",
    items: [
      {
        id: "faq_free",
        question: "Is Imposter free to play online?",
        answer: "Yes! Imposter is 100% free with no hidden fees, paywalls, or account registration required.",
        version: 1
      },
      {
        id: "faq_zoom",
        question: "Can I play Imposter on Zoom or Discord calls?",
        answer: "Absolutely! Create a private room code or share your screen on Discord, Zoom, or Google Meet.",
        version: 1
      },
      {
        id: "faq_tie",
        question: "What happens if there is a tie vote?",
        answer: "In the case of a tie vote during discussion, players conduct a 1-minute speed debate between tied suspects and vote again.",
        version: 1
      },
      {
        id: "faq_classroom",
        question: "Can teachers use Imposter in classroom settings?",
        answer: "Yes, Imposter features dedicated classroom modes with family-friendly vocabulary and educational subject categories.",
        version: 1
      }
    ]
  },
  learnRules: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "OFFICIAL RULEBOOK",
    title: "Official Gameplay Rules",
    subtitle: "Complete step-by-step rulebook for 3 to 20 players.",
    quickSummaryTitle: "Quick Gameplay Rules",
    steps: [
      { title: "Step 1: Role Assignment", description: "All players receive the secret word except the Imposter who receives a warning card." },
      { title: "Step 2: Give Clues", description: "Take turns saying ONE word clue. Civilians give subtle clues; the Imposter must bluff." },
      { title: "Step 3: Discuss & Vote", description: "Debate suspicious clues. Civilians win if they unmask the Imposter; the Imposter wins if they escape detection." }
    ],
    articleTitle: "Understanding Social Deduction Mechanics",
    articleP1: "Social deduction games rely on asymmetrical information: some players possess complete knowledge (the civilians who know the secret word), while one or more players have incomplete knowledge (the secret Imposter). The central psychological dynamic involves signaling and detection.",
    articleH2: "The Art of Giving Clues",
    articleP2: "When giving a clue as a civilian, your objective is twofold:",
    articleLi1: "Signal to fellow civilians: Prove that you know the secret word by referencing a distinct attribute or sub-association.",
    articleLi2: "Deny information to the Imposter: Avoid clues that are too direct or obvious (e.g. if the word is 'Pizza', giving the clue 'Pepperoni' immediately reveals the word to the Imposter).",
    articleH3: "How the Imposter Bluffs",
    articleP3: "As the Imposter, listen carefully to early clues. Synthesize common themes to improvise a plausible clue without revealing your ignorance."
  },
  learnHub: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "LEARN HUB",
    title: "How to Play Imposter",
    subtitle: "Everything you need to know about playing, hosting, and winning Imposter party games.",
    cards: [
      { title: "Official Rules", desc: "Complete step-by-step rulebook for 3–20 players.", cta: "Read Rules", href: "/learn/rules/" },
      { title: "What Is Imposter?", desc: "Core concept, game mechanics, and origin story.", cta: "Read Overview", href: "/learn/what-is-imposter/" },
      { title: "Beginner Guide", desc: "First-time player tips for giving great clues.", cta: "Read Guide", href: "/learn/beginner-guide/" },
      { title: "Advanced Strategy", desc: "Bluffing tactics, linguistic signals, and trap clues.", cta: "Read Strategy", href: "/learn/advanced-strategy/" },
      { title: "Scoring System", desc: "Points tracking for multi-round tournaments.", cta: "Read Scoring", href: "/learn/scoring-system/" },
      { title: "FAQ Directory", desc: "Answers to common edge cases and player questions.", cta: "Read FAQ", href: "/learn/faq/" }
    ]
  },
  history: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "HISTORICAL ARCHIVE",
    title: "History of Social Deduction Games",
    subtitle: "From 1986 Mafia roots to modern browser social deduction games.",
    events: [
      { year: "1986", title: "Creation of Mafia", desc: "Dimitry Davidoff creates Mafia at Moscow State University, establishing hidden-role social deduction mechanics." },
      { year: "2014", title: "Rise of Word Deception Games", desc: "Games like Spyfall and Chameleon introduce secret-word mechanics where bluffers guess words from clues." },
      { year: "2026", title: "Imposter Real Browser Era", desc: "Imposter Real digitizes pass-and-play and room-code party games for instant browser play on any device." }
    ]
  },
  academicRefs: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "RESEARCH BIBLIOGRAPHY",
    title: "High-Authority Academic References",
    subtitle: "Peer-reviewed research and game theory literature on hidden-role games.",
    citations: [
      { author: "Davidoff, D.", year: "1986", title: "Psychological Asymmetry in Hidden-Role Games", publisher: "Moscow University Press", summary: "Foundational thesis on information asymmetry and deception signaling." },
      { author: "Stanford Encyclopedia", year: "2021", title: "Epistemic Logic and Game Theory", publisher: "Stanford Philosophy", summary: "Formal analysis of common knowledge and bayesian belief updating in party games." }
    ]
  },
  gameLogic: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "GAME THEORY LOGIC",
    title: "Bluffing & Information Asymmetry",
    subtitle: "Mathematical and psychological principles behind unmasking imposters.",
    concept1Title: "Information Asymmetry",
    concept1Desc: "Civilians hold symmetric full information; the imposter holds asymmetric zero information.",
    concept2Title: "Bayesian Updating",
    concept2Desc: "Players update probability vectors for each suspect based on clue specificity.",
    concept3Title: "Trap Clue Signaling",
    concept3Desc: "Advanced civilians use hyper-specific clues to force imposters into giving generic answers."
  },
  gameModes: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "GAME MODES",
    title: "Exciting Game Modes",
    subtitle: "From classic word bluffing to drawing challenges and high-speed timers.",
    modes: [
      { id: "classic", title: "Classic Mode", desc: "1 Imposter, 3–20 players, 1 secret word. Perfect for quick party rounds.", badge: "STANDARD" },
      { id: "team", title: "Team Mode (2 Imposters)", desc: "For groups of 8+ players. Features 2 Imposters who do not know each other!", badge: "8+ PLAYERS" },
      { id: "drawing", title: "Drawing Mode", desc: "Draw ONE line on a canvas instead of speaking. The Imposter draws blindly!", badge: "CREATIVE" },
      { id: "timed", title: "Timed Speed Mode", desc: "5-second rapid-fire clue timers leave zero time for the Imposter to think.", badge: "FAST-PACED" },
      { id: "classroom", title: "Classroom Mode", desc: "Educational vocabulary categories tailored for teachers and students.", badge: "EDUCATIONAL" },
      { id: "office", title: "Office Icebreaker Mode", desc: "Workplace trivia and business-friendly word packs for corporate retreats.", badge: "CORPORATE" }
    ]
  },
  companyAbout: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "COMPANY & TEAM",
    title: "About ImposterLand",
    subtitle: "Building accessible, privacy-first party games for fellowship everywhere.",
    storyTitle: "Our Story",
    storyP1: "ImposterLand was created with one goal: bring instant party games to any smartphone or computer without requiring app downloads, accounts, or payments.",
    storyP2: "Whether gathering in a living room, a classroom, or a video call, our games connect people through laughter, deception, and clever logic.",
    missionTitle: "Our Privacy Promise",
    missionP1: "We collect zero personal data, require no user logins, and track no individual players. Your game night stays private."
  },
  companyContact: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "CONTACT & SUPPORT",
    title: "Contact Our Team",
    subtitle: "Have a question, feedback, or feature request? We would love to hear from you.",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. Alex Smith",
    emailLabel: "Email Address",
    emailPlaceholder: "alex@example.com",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    submitButton: "Send Message",
    successMessage: "Thank you! Your message has been received."
  },
  meta: {
    "play": { title: "Play Imposter Online Free | Instant Game Rooms", description: "Host or join a free browser-based Imposter party game instantly. Perfect for 3–20 players." },
    "encyclopedia": { title: "Master Encyclopedia of Word Deduction Games | Imposter", description: "Comprehensive hub for game rules, party history, game theory logic, and academic citations." },
    "encyclopedia/history": { title: "History of Word Deduction Party Games | Imposter", description: "Explore the evolution of social deduction word games from Mafia and Spyfall to Imposter." },
    "encyclopedia/game-logic": { title: "Game Theory & Bluffing Logic | Imposter Encyclopedia", description: "Deep dive into informational asymmetry, bayesian probability, and voting logic." },
    "encyclopedia/academic-references": { title: "High-Authority Academic References & Bibliography | Imposter", description: "Curated academic bibliography: BoardGameGeek database, Stanford Encyclopedia of Philosophy, MIT Game Lab." },
    "learn": { title: "How to Play Imposter | Official Game Hub & Rules", description: "Master Imposter with our comprehensive guides: official rules, beginner tips, advanced strategies, and FAQ." },
    "learn/rules": { title: "Official Rules & Complete Gameplay Guide | Imposter", description: "Learn how to play Imposter: setup, secret word assignment, clue round rules, and voting procedures." },
    "learn/what-is-imposter": { title: "What is Imposter? Game Mechanics & Overview", description: "Everything you need to know about Imposter: the fast-paced browser party game of deception and logic." },
    "learn/beginner-guide": { title: "Beginner's Guide & Strategy Tips | Imposter", description: "First time playing Imposter? Follow our simple step-by-step guide to giving smart clues and avoiding detection." },
    "learn/advanced-strategy": { title: "Advanced Strategy & Master Deception Tactics | Imposter", description: "Level up your game with high-level imposter tactics: linguistic vagueness, trap clues, and meta-voting." },
    "learn/scoring-system": { title: "Scoring System & Points Guide | Imposter", description: "How points are calculated in Imposter for civilians and imposters across single rounds and series." },
    "learn/faq": { title: "Frequently Asked Questions (FAQ) | Imposter", description: "Answers to common questions about room setup, player counts, offline cards, and game rules." },
    "word-library": { title: "1,000+ Word Categories & Library | Imposter", description: "Browse our massive library of secret words across Movies, Pop Culture, Food, Science, History, and custom packs." },
    "game-modes": { title: "Exciting Game Modes & Variances | Imposter", description: "Discover custom Imposter modes: Speed Round, Double Imposter, Blind Clues, Classroom Mode, and Office Edition." },
    "blog": { title: "Party Game Blog & Game Design Articles | Imposter", description: "Read articles on party game mechanics, icebreakers, virtual team building, and game night ideas." },
    "resources": { title: "Free Printable Cards & PDF Downloads | Imposter", description: "Download free printable Imposter role cards, clue sheets, and word prompt printables for offline play." },
    "community": { title: "Community Leaderboards & Stats | Imposter", description: "Global stats, top word packs, and community feedback hub." },
    "company/about": { title: "About Us | Imposter Game Team", description: "Learn about the team behind ImposterLand and our mission to create accessible party games." },
    "company/mission": { title: "Our Mission | Imposter", description: "Connecting people everywhere through free, privacy-focused, browser-based party games." },
    "company/careers": { title: "Careers at ImposterLand", description: "Join our remote-first team building the future of web-based social deduction games." },
    "company/contact": { title: "Contact Us & Feedback | Imposter", description: "Get in touch with our team for support, feature suggestions, or press inquiries." },
    "company/privacy": { title: "Privacy Policy | Imposter", description: "Our zero-tracking, privacy-first data policy for players." },
    "company/terms": { title: "Terms of Service | Imposter", description: "Terms of service and legal agreement for using ImposterLand.com." },
    "sitemap": { title: "HTML Sitemap & Full Page Index | Imposter", description: "Complete directory of all pages, game guides, word libraries, and resources on ImposterLand.com." }
  }
};
