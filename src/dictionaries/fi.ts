import { FullLocaleDictionary } from "./types";
import { enDictionary } from "./en";

export const fiDictionary: FullLocaleDictionary = {
  _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
  learnFaq: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "DIRECTORIO FAQ",
    title: "Preguntas Frecuentes",
    subtitle: "Respuestas claras para jugadores, anfitriones y educadores.",
    playCta: "🎮 Jugar Gratis Ahora",
    askCta: "Hacer una Pregunta →",
    imageAlt: "Persona consultando preguntas frecuentes sobre el juego Imposter",
    items: [
      { id: "faq_free", question: "¿Es Imposter gratis para jugar en línea?", answer: "¡Sí! Imposter es 100% gratuito sin tarifas ocultas ni registro.", version: 1 },
      { id: "faq_zoom", question: "¿Puedo jugar a Imposter en Zoom o Discord?", answer: "¡Absolutamente! Crea un código de sala privada o comparte pantalla en Discord, Zoom o Google Meet.", version: 1 },
      { id: "faq_tie", question: "¿Qué pasa si hay un empate en los votos?", answer: "En caso de empate, los sospechosos realizan un debate rápido de 1 minuto antes de votar de nuevo.", version: 1 },
      { id: "faq_classroom", question: "¿Pueden los profesores usar Imposter en clase?", answer: "Sí, Imposter cuenta con modos escolares adaptados con vocabulario educativo.", version: 1 }
    ]
  },
  learnRules: {
    _meta: { version: 1, lastUpdated: "2026-08-11", status: "current" },
    badge: "REGLAMENTO OFICIAL",
    title: "Reglas Oficiales del Juego",
    subtitle: "Guía completa paso a paso para 3 a 20 jugadores.",
    quickSummaryTitle: "Resumen Rápido de Reglas",
    steps: [
      { title: "Paso 1: Asignación de Roles", description: "Todos ven la palabra secreta excepto el Impostor." },
      { title: "Paso 2: Dar Pistas", description: "Por turnos decid UNA palabra de pista. Los civiles dan pistas sutiles; el Impostor debe disimular." },
      { title: "Paso 3: Debatid y Votad", description: "Analizad las pistas. Los civiles ganan si atrapan al Impostor." }
    ],
    articleTitle: "Comprensión de las Mecánicas de Deducción Social",
    articleP1: "Los juegos de deducción social se basan en la información asimétrica entre los jugadores.",
    articleH2: "El Arte de Dar Pistas",
    articleP2: "Al dar una pista como civil, tu objetivo es doble:",
    articleLi1: "Demostrar a otros civiles que conoces la palabra secreta.",
    articleLi2: "Evitar dar información obvia al Impostor.",
    articleH3: "Cómo Disimula el Impostor",
    articleP3: "Como Impostor, escucha atentamente las primeras pistas e improvisa una respuesta creíble."
  },
  learnHub: {
    ...enDictionary.learnHub,
    badge: "CENTRO DE APRENDIZAJE",
    title: "Cómo Jugar a Imposter",
    subtitle: "Todo lo que necesitas saber para jugar, organizar y ganar."
  },
  history: {
    ...enDictionary.history,
    badge: "ARCHIVO HISTÓRICO",
    title: "Historia de los Juegos de Deducción",
    subtitle: "Desde la creación de Mafia en 1986 hasta los juegos de navegador actuales."
  },
  academicRefs: {
    ...enDictionary.academicRefs,
    badge: "BIBLIOGRAFÍA ACADÉMICA",
    title: "Referencias Académicas",
    subtitle: "Investigaciones y literatura sobre teoría de juegos."
  },
  gameLogic: {
    ...enDictionary.gameLogic,
    badge: "LÓGICA DE TEORÍA DE JUEGOS",
    title: "Camuflaje y Asimetría",
    subtitle: "Principios matemáticos y psicológicos para desenmascarar impostores."
  },
  gameModes: {
    ...enDictionary.gameModes,
    badge: "MODOS DE JUEGO",
    title: "Modos de Juego Divertidos",
    subtitle: "Desde el juego clásico de palabras hasta desafíos de dibujo."
  },
  companyAbout: {
    ...enDictionary.companyAbout,
    badge: "EMPRESA Y EQUIPO",
    title: "Sobre ImposterLand",
    subtitle: "Creando juegos accesibles y respetuosos con la privacidad."
  },
  companyContact: {
    ...enDictionary.companyContact,
    badge: "CONTACTO Y SOPORTE",
    title: "Contacta con Nosotros",
    subtitle: "¿Tienes alguna pregunta o sugerencia? Escríbenos."
  },
  meta: enDictionary.meta
};
