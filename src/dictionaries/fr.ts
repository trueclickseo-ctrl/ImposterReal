import { FullLocaleDictionary } from "./types";
import { enDictionary } from "./en";

export const frDictionary: FullLocaleDictionary = {
  _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
  learnFaq: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "RÉPERTOIRE FAQ",
    title: "Foire Aux Questions",
    subtitle: "Réponses claires pour les joueurs, hôtes et éducateurs.",
    playCta: "🎮 Jouer Gratuitement",
    askCta: "Poser une Question →",
    imageAlt: "Personne consultant la foire aux questions du jeu Imposter",
    items: [
      { id: "faq_free", question: "Le jeu Imposter est-il gratuit en ligne ?", answer: "Oui ! Imposter est 100% gratuit sans frais cachés ni inscription requise.", version: 1 },
      { id: "faq_zoom", question: "Puis-je jouer à Imposter sur Zoom ou Discord ?", answer: "Absolument ! Créez un code de salon privé ou partagez votre écran sur Discord, Zoom ou Google Meet.", version: 1 },
      { id: "faq_tie", question: "Que se passe-t-il en cas d'égalité des voix ?", answer: "En cas d'égalité lors du vote, un débat rapide de 1 minute a lieu entre les suspects à égalité avant un nouveau vote.", version: 1 },
      { id: "faq_classroom", question: "Les enseignants peuvent-ils utiliser Imposter en classe ?", answer: "Oui, Imposter propose des modes classe dédiés avec du vocabulaire adapté aux familles et aux écoles.", version: 1 }
    ]
  },
  learnRules: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "RÈGLES OFFICIELLES",
    title: "Règles Officielles du Jeu",
    subtitle: "Guide complet étape par étape pour 3 à 20 joueurs.",
    quickSummaryTitle: "Résumé Rapide des Règles",
    steps: [
      { title: "Étape 1 : Attribution des Rôles", description: "Tous les joueurs voient le mot secret sauf l'Imposteur qui reçoit une carte d'avertissement." },
      { title: "Étape 2 : Donner des Indices", description: "Dites à tour de rôle UN seul mot d'indice. Les civils restent subtils ; l'Imposteur doit bluffer." },
      { title: "Étape 3 : Débattre et Voter", description: "Analysez les indices. Les civils gagnent s'ils démasquent l'Imposteur ; l'Imposteur gagne s'il s'échappe." }
    ],
    articleTitle: "Comprendre les Mécaniques de Déduction Sociale",
    articleP1: "Les jeux de déduction sociale reposent sur l'asymétrie d'information : certains joueurs détiennent une information complète (les civils qui connaissent le mot secret), tandis qu'un ou plusieurs joueurs ont une information incomplète (l'Imposteur secret).",
    articleH2: "L'Art de Donner des Indices",
    articleP2: "En donnant un indice en tant que civil, votre objectif est double :",
    articleLi1: "Signaler aux autres civils : Prouvez que vous connaissez le mot secret en faisant référence à un attribut distinctif.",
    articleLi2: "Refuser l'information à l'Imposteur : Évitez les indices trop évidents.",
    articleH3: "Comment Bluffe l'Imposteur",
    articleP3: "En tant qu'Imposteur, écoutez attentivement les premiers indices. Synthétisez les thèmes communs pour improviser un indice crédible."
  },
  learnHub: {
    ...enDictionary.learnHub,
    badge: "CENTRE D'APPRENTISSAGE",
    title: "Comment Jouer à Imposter",
    subtitle: "Tout ce que vous devez savoir pour jouer, organiser et gagner vos parties d'Imposter."
  },
  history: {
    ...enDictionary.history,
    badge: "ARCHIVES HISTORIQUES",
    title: "Histoire des Jeux de Déduction Sociale",
    subtitle: "Des origines de Mafia en 1986 aux jeux navigateurs modernes."
  },
  academicRefs: {
    ...enDictionary.academicRefs,
    badge: "BIBLIOGRAPHIE DE RECHERCHE",
    title: "Références Académiques",
    subtitle: "Recherches évaluées par des pairs et littérature sur la théorie des jeux."
  },
  gameLogic: {
    ...enDictionary.gameLogic,
    badge: "LOGIQUE DE LA THÉORIE DES JEUX",
    title: "Bluff et Asymétrie d'Information",
    subtitle: "Principes mathématiques et psychologiques pour démasquer les imposteurs."
  },
  gameModes: {
    ...enDictionary.gameModes,
    badge: "MODES DE JEU",
    title: "Modes de Jeu Captivants",
    subtitle: "Du bluff de mots classique aux défis de dessin et chronos rapides."
  },
  companyAbout: {
    ...enDictionary.companyAbout,
    badge: "ENTREPRISE ET ÉQUIPE",
    title: "À Propos d'ImposterLand",
    subtitle: "Créer des jeux de société accessibles et respectueux de la vie privée."
  },
  companyContact: {
    ...enDictionary.companyContact,
    badge: "CONTACT ET SUPPORT",
    title: "Contacter Notre Équipe",
    subtitle: "Une question, une remarque ou une idée ? Écrivez-nous."
  },
  meta: enDictionary.meta
};
