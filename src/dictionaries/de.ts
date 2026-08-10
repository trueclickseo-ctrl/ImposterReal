import { FullLocaleDictionary } from "./types";
import { enDictionary } from "./en";

export const deDictionary: FullLocaleDictionary = {
  _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
  learnFaq: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "FAQ VERZEICHNIS",
    title: "Häufig Gestellte Fragen",
    subtitle: "Klare Antworten für Spieler, Gastgeber und Lehrer.",
    playCta: "🎮 Jetzt Kostenlos Spielen",
    askCta: "Frage Stellen →",
    imageAlt: "Person schaut häufig gestellte Fragen zum Imposter Spiel nach",
    items: [
      { id: "faq_free", question: "Ist Imposter kostenlos online spielbar?", answer: "Ja! Imposter ist zu 100% kostenlos ohne versteckte Gebühren oder Registrierung.", version: 1 },
      { id: "faq_zoom", question: "Kann man Imposter über Zoom oder Discord spielen?", answer: "Absolut! Erstelle einen privaten Raumcode und teile deinen Bildschirm auf Discord, Zoom oder Google Meet.", version: 1 },
      { id: "faq_tie", question: "Was passiert bei Gleichstand?", answer: "Bei Stimmengleichheit führen die verdächtigen Spieler eine 1-minütige Blitzdebatte bevor erneut abgestimmt wird.", version: 1 },
      { id: "faq_classroom", question: "Können Lehrer Imposter im Unterricht nutzen?", answer: "Ja, Imposter bietet spezielle Schulmodi mit kinderfreundlichem Vokabular.", version: 1 }
    ]
  },
  learnRules: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "OFFIZIELLES REGELBUCH",
    title: "Offizielle Spielregeln",
    subtitle: "Vollständiges Regelwerk für 3 bis 20 Spieler.",
    quickSummaryTitle: "Schnellübersicht Regeln",
    steps: [
      { title: "Schritt 1: Rollenvergabe", description: "Alle Spieler sehen das Geheimwort außer dem Imposter." },
      { title: "Schritt 2: Hinweise Geben", description: "Reihum sagt jeder EIN Wort als Hinweis. Zivilisten bleiben subtil; der Imposter blufft." },
      { title: "Schritt 3: Diskussion & Abstimmung", description: "Besprecht verdächtige Hinweise und stimmt ab! Zivilisten gewinnen durch Enttarnung des Imposters." }
    ],
    articleTitle: "Verständnis der Social Deduction Spielmechaniken",
    articleP1: "Social Deduction Spiele basieren auf asymmetrischer Information: Einige Spieler haben vollständiges Wissen, während der Imposter blufft.",
    articleH2: "Die Kunst des Hinweisgebens",
    articleP2: "Beim Hinweisgeben als Zivilist hast du zwei Hauptziele:",
    articleLi1: "Signal an andere Zivilisten: Beweise, dass du das Geheimwort kennst.",
    articleLi2: "Keine Informationen an den Imposter verraten: Vermeide zu offensichtliche Hinweise.",
    articleH3: "Wie der Imposter blufft",
    articleP3: "Höre als Imposter den ersten Hinweisen aufmerksam zu und kombiniere gemeinsame Themen."
  },
  learnHub: {
    ...enDictionary.learnHub,
    badge: "LERN-HUB",
    title: "Wie man Imposter Spielt",
    subtitle: "Alles was du über Regeln, Strategien und Hosting wissen musst."
  },
  history: {
    ...enDictionary.history,
    badge: "HISTORISCHES ARCHIV",
    title: "Geschichte der Social Deduction Spiele",
    subtitle: "Von den Mafia-Ursprüngen 1986 bis zu modernen Browser-Partyspielen."
  },
  academicRefs: {
    ...enDictionary.academicRefs,
    badge: "FORSCHUNGSBIBLIOGRAPHIE",
    title: "Akademische Referenzen",
    subtitle: "Peer-Reviewed Forschung und Spieltheorie-Literatur."
  },
  gameLogic: {
    ...enDictionary.gameLogic,
    badge: "SPIELTHEORIE-LOGIK",
    title: "Bluffen & Informationsasymmetrie",
    subtitle: "Mathematische und psychologische Prinzipien hinter Imposter-Enttarnungen."
  },
  gameModes: {
    ...enDictionary.gameModes,
    badge: "SPIELMODI",
    title: "Spannende Spielmodi",
    subtitle: "Vom klassischen Wortbluff bis zu Zeichen-Challenges."
  },
  companyAbout: {
    ...enDictionary.companyAbout,
    badge: "FIRMA & TEAM",
    title: "Über ImposterLand",
    subtitle: "Zugängliche, datenschutzfreundliche Partyspiele entwickeln."
  },
  companyContact: {
    ...enDictionary.companyContact,
    badge: "KONTAKT & SUPPORT",
    title: "Kontakt aufnehmen",
    subtitle: "Hast du Fragen oder Feedback? Wir freuen uns von dir zu hören."
  },
  meta: enDictionary.meta
};
