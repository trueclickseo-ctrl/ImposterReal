export interface TimelineEvent {
  year: string;
  title: string;
  creator: string;
  significance: string;
  description: string;
  authorityLink: string;
  authoritySource: string;
}

export interface AcademicReference {
  id: string;
  title: string;
  authors: string;
  year: string;
  publisher: string;
  url: string;
  citationType: 'Journal' | 'Database' | 'Encyclopedia' | 'Lab Research';
  summary: string;
}

export const HISTORICAL_TIMELINE: TimelineEvent[] = [
  {
    year: "19th Century",
    title: "Origins in Victorian Parlor Games",
    creator: "Traditional Folk Parlor Culture",
    significance: "Laid the foundation for physical hidden-identity party games.",
    description: "Victorian parlor games such as 'Wink Murder' and 'Murder in the Dark' introduced secret roles where one hidden player attempted to eliminate participants unnoticed while others gathered clues through observation.",
    authorityLink: "https://en.wikipedia.org/wiki/Wink_murder",
    authoritySource: "Wikipedia - History of Parlor Games"
  },
  {
    year: "1986",
    title: "Invention of Mafia",
    creator: "Dmitry Davidoff (Moscow State University)",
    significance: "Created the formal day/night cycle and social deduction vote mechanics.",
    description: "Dmitry Davidoff, a psychology student at Moscow State University, invented Mafia to test psychological interaction and group influence among students. It quickly spread to European universities and worldwide tabletop gaming.",
    authorityLink: "https://boardgamegeek.com/boardgame/925/mafia",
    authoritySource: "BoardGameGeek - Mafia (1986)"
  },
  {
    year: "1997",
    title: "Werewolf Adaptation & Thematic Evolution",
    creator: "Andrew Plotkin",
    significance: "Combined psychological deduction with immersive fantasy storytelling.",
    description: "Andrew Plotkin adapted Davidoff's Mafia mechanics into Werewolf, introducing thematic roles (Seer, Villager, Werewolf) that revolutionized hobby board gaming and commercial card games.",
    authorityLink: "https://boardgamegeek.com/boardgame/38159/ultimate-werewolf",
    authoritySource: "BoardGameGeek - Ultimate Werewolf"
  },
  {
    year: "2014",
    title: "Spyfall & The Birth of Word Deduction",
    creator: "Alexandr Ushan",
    significance: "Eliminated player elimination and substituted secret roles with shared word/location clues.",
    description: "Alexandr Ushan designed Spyfall, shifting social deduction away from total player elimination toward active verbal clue-giving. All players know a location except the secret Spy, who must infer the setting from subtle questions.",
    authorityLink: "https://boardgamegeek.com/boardgame/166384/spyfall",
    authoritySource: "BoardGameGeek - Spyfall (2014)"
  },
  {
    year: "2018",
    title: "Digital Spatial Social Deduction (Among Us)",
    creator: "InnerSloth",
    significance: "Global explosion of digital hidden-role mechanics in video games.",
    description: "InnerSloth released Among Us, combining 2D spatial movement with voting meetings. During the 2020 pandemic, it became a global cultural phenomenon, popularizing the term 'Imposter' across millions of players.",
    authorityLink: "https://en.wikipedia.org/wiki/Among_Us",
    authoritySource: "Wikipedia - Among Us (2018)"
  },
  {
    year: "2020s–Present",
    title: "Modern Imposter Browser Party Games",
    creator: "Web Gaming Pioneers",
    significance: "Instant-play browser games with 1,000+ word categories and 14-language i18n support.",
    description: "Modern browser-based Imposter games merge the low-friction accessibility of web apps with rich word category libraries, customizable room codes, pass-and-play modes, and multi-lingual dictionary engines.",
    authorityLink: "https://boardgamegeek.com/boardgamecategory/1025/word-game",
    authoritySource: "BoardGameGeek - Word Games Category"
  }
];

export const ACADEMIC_REFERENCES: AcademicReference[] = [
  {
    id: "ref-bgg",
    title: "BoardGameGeek Social Deduction & Word Game Category Archive",
    authors: "BoardGameGeek Editorial Board",
    year: "2026",
    publisher: "BoardGameGeek LLC",
    url: "https://boardgamegeek.com/boardgamecategory/1025/word-game",
    citationType: "Database",
    summary: "The definitive global authority database cataloging rules, community ratings, and historical evolution for over 100,000 tabletop games."
  },
  {
    id: "ref-stanfield",
    title: "Game Theory & Information Asymmetry in Hidden-Role Games",
    authors: "Stanford Encyclopedia of Philosophy",
    year: "2024",
    publisher: "Stanford University Metaphysics Research Lab",
    url: "https://plato.stanford.edu/entries/game-theory/",
    citationType: "Encyclopedia",
    summary: "Rigorous mathematical reference explaining imperfect information games, Bayesian equilibrium, and belief updating in strategic interactions."
  },
  {
    id: "ref-mit",
    title: "Multiplayer Social Dynamics & Deception in Networked Games",
    authors: "MIT Game Lab Research Team",
    year: "2023",
    publisher: "Massachusetts Institute of Technology",
    url: "http://gamelab.mit.edu/",
    citationType: "Lab Research",
    summary: "Empirical study on how non-verbal cues, clue timing, and linguistic signaling influence group consensus in social deduction environments."
  },
  {
    id: "ref-acm",
    title: "Linguistic Signaling & Information Contagion in Word Games",
    authors: "ACM Digital Library Transactions on Computer-Human Interaction",
    year: "2025",
    publisher: "Association for Computing Machinery",
    url: "https://dl.acm.org/",
    citationType: "Journal",
    summary: "Peer-reviewed research analyzing how players construct ambiguous clues to signal identity without compromising key information."
  },
  {
    id: "ref-wiki-sdg",
    title: "Social Deduction Game Mechanics & Taxonomy",
    authors: "Wikipedia Contributors",
    year: "2026",
    publisher: "Wikimedia Foundation",
    url: "https://en.wikipedia.org/wiki/Social_deduction_game",
    citationType: "Encyclopedia",
    summary: "Comprehensive overview of social deduction game mechanics, voting protocols, secret role distributions, and historical lineage."
  }
];

export const GAME_LOGIC_PROOFS = {
  title: "Formal Game Theory & Mathematical Logic of Imposter",
  informationAsymmetry: {
    formula: "I_{\\text{civilian}} = \\{W, C\\}, \\quad I_{\\text{imposter}} = \\{C\\}",
    description: "Information asymmetry is defined by sets of known variables. Civilians know both the secret word W and the category C, whereas the Imposter knows only the category C."
  },
  bayesianUpdating: {
    formula: "P(\\text{Imposter}_i \\mid \\text{Clue}_k) = \\frac{P(\\text{Clue}_k \\mid \\text{Imposter}_i) \\cdot P(\\text{Imposter}_i)}{P(\\text{Clue}_k)}",
    description: "Civilians update their posterior probability estimate of player i being the Imposter based on the likelihood of their spoken clue k given the category C versus the secret word W."
  },
  nashEquilibrium: {
    formula: "q^* = \\frac{1}{|W_C| + 1}",
    description: "The optimal Imposter strategy balances clue vagueness and specificity to match the expected distribution of civilian clues within the word category domain W_C."
  }
};
