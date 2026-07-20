import { WordCategory } from "./gameEngine";

export const LOCALIZED_CATEGORIES: Record<string, Record<string, { name: string; description: string; words: string[] }>> = {
  movies: {
    en: {
      name: "Blockbuster Movies",
      description: "Famous movie titles known worldwide across cinema history.",
      words: ["Inception", "Titanic", "Avatar", "Star Wars", "Jurassic Park", "The Matrix", "Harry Potter", "Avengers", "The Dark Knight", "Gladiator", "Frozen", "Interstellar", "Forrest Gump", "Spider-Man", "Back to the Future", "Pulp Fiction", "Shrek", "Finding Nemo", "Jaws", "Oppenheimer", "Barbie", "Indiana Jones", "Transformers", "The Lion King", "Ghostbusters"]
    },
    pl: {
      name: "Hity kinowe",
      description: "Słynne tytuły filmowe znane na całym świecie.",
      words: ["Incepcja", "Titanic", "Avatar", "Gwiezdne Wojny", "Park Jurajski", "Matrix", "Harry Potter", "Avengers", "Mroczny Rycerz", "Gladiator", "Kraina Lodu", "Interstellar", "Forrest Gump", "Spider-Man", "Powrót do Przyszłości", "Pulp Fiction", "Shrek", "Gdzie jest Nemo", "Szczęki", "Oppenheimer", "Barbie", "Indiana Jones", "Transformers", "Król Lew", "Pogromcy Duchów"]
    },
    de: {
      name: "Kino-Blockbuster",
      description: "Berühmte Filmtitel aus der weltweiten Kinogeschichte.",
      words: ["Inception", "Titanic", "Avatar", "Krieg der Sterne", "Jurassic Park", "Matrix", "Harry Potter", "Avengers", "The Dark Knight", "Gladiator", "Die Eiskönigin", "Interstellar", "Forrest Gump", "Spider-Man", "Zurück in die Zukunft", "Pulp Fiction", "Shrek", "Findet Nemo", "Der weiße Hai", "Oppenheimer", "Barbie", "Indiana Jones", "Transformers", "Der König der Löwen", "Ghostbusters"]
    },
    fr: {
      name: "Films à succès",
      description: "Titres de films célèbres connus dans le monde entier.",
      words: ["Inception", "Titanic", "Avatar", "Star Wars", "Jurassic Park", "Matrix", "Harry Potter", "Avengers", "The Dark Knight", "Gladiator", "La Reine des Neiges", "Interstellar", "Forrest Gump", "Spider-Man", "Retour vers le Futur", "Pulp Fiction", "Shrek", "Le Monde de Nemo", "Les Dents de la Mer", "Oppenheimer", "Barbie", "Indiana Jones", "Transformers", "Le Roi Lion", "Ghostbusters"]
    },
    es: {
      name: "Películas de éxito",
      description: "Títulos de películas famosas conocidos en todo el mundo.",
      words: ["Origen", "Titanic", "Avatar", "Star Wars", "Parque Jurásico", "Matrix", "Harry Potter", "Avengers", "El Caballero Oscuro", "Gladiator", "Frozen", "Interstellar", "Forrest Gump", "Spider-Man", "Regreso al Futuro", "Pulp Fiction", "Shrek", "Buscando a Nemo", "Tiburón", "Oppenheimer", "Barbie", "Indiana Jones", "Transformers", "El Rey León", "Cazafantasmas"]
    },
    el: {
      name: "Δημοφιλείς Ταινίες",
      description: "Διάσημοι τίτλοι ταινιών γνωστοί σε όλο τον κόσμο.",
      words: ["Inception", "Τιτανικός", "Avatar", "Πόλεμος των Άστρων", "Τζουράσικ Παρκ", "Matrix", "Χάρι Πότερ", "Εκδικητές", "Σκοτεινός Ιππότης", "Μονομάχος", "Ψυχρά κι Ανάποδα", "Interstellar", "Φόρεστ Γκαμπ", "Spider-Man", "Επιστροφή στο Μέλλον", "Pulp Fiction", "Σρεκ", "Ψάχνοντας τον Νέμο", "Τα Σαγόνια του Καρχαρία", "Οπενχάιμερ", "Μπάρμπι", "Ιντιάνα Τζόουνς", "Transformers", "Ο Βασιλιάς των Λιονταριών", "Ghostbusters"]
    }
  },
  food: {
    en: {
      name: "Food & Cuisine",
      description: "Delicious dishes, fast food favorites, and gourmet treats.",
      words: ["Pizza", "Sushi", "Tacos", "Cheeseburger", "Ice Cream", "Paella", "Ramen", "Pasta", "Croissant", "Pancakes", "Dim Sum", "Falafel", "Kebab", "Nachos", "Waffles", "Donuts", "Pad Thai", "Curry", "Lasagna", "Steak", "Guacamole", "Tiramisu", "Fish and Chips", "Hot Dog", "Fondue"]
    },
    pl: {
      name: "Jedzenie i Kuchnia",
      description: "Pyszne dania, ulubione fast foody i wykwintne smakołyki.",
      words: ["Pizza", "Sushi", "Tacos", "Cheeseburger", "Lody", "Paella", "Ramen", "Makaron", "Rogalik", "Naleśniki", "Dim Sum", "Falafel", "Kebab", "Nachosy", "Gofry", "Pączki", "Pad Thai", "Curry", "Lazania", "Stek", "Guacamole", "Tiramisu", "Ryba z Frytkami", "Hot Dog", "Fondue"]
    },
    de: {
      name: "Essen & Küche",
      description: "Köstliche Gerichte, Fast-Food-Favoriten und Gourmet-Leckereien.",
      words: ["Pizza", "Sushi", "Tacos", "Cheeseburger", "Eiscreme", "Paella", "Ramen", "Pasta", "Croissant", "Pfannkuchen", "Dim Sum", "Falafel", "Kebab", "Nachos", "Waffeln", "Donuts", "Pad Thai", "Curry", "Lasagne", "Steak", "Guacamole", "Tiramisu", "Fish and Chips", "Hot Dog", "Fondue"]
    },
    fr: {
      name: "Nourriture & Cuisine",
      description: "Plats délicieux, favoris de la restauration rapide et gourmandises.",
      words: ["Pizza", "Sushi", "Tacos", "Cheeseburger", "Glace", "Paella", "Ramen", "Pâtes", "Croissant", "Crêpes", "Dim Sum", "Falafel", "Kebab", "Nachos", "Gaufres", "Beignets", "Pad Thai", "Curry", "Lasagne", "Steak", "Guacamole", "Tiramisu", "Fish and Chips", "Hot Dog", "Fondue"]
    },
    es: {
      name: "Comida y Cocina",
      description: "Platos deliciosos, favoritos de comida rápida y delicias gourmet.",
      words: ["Pizza", "Sushi", "Tacos", "Hamburguesa con queso", "Helado", "Paella", "Ramen", "Pasta", "Cruasán", "Tortitas", "Dim Sum", "Falafel", "Kebab", "Nachos", "Gofres", "Rosquillas", "Pad Thai", "Curry", "Lasaña", "Filete", "Guacamole", "Tiramisú", "Pescado con Patatas", "Perrito Caliente", "Fondue"]
    },
    el: {
      name: "Φαγητό & Κουζίνα",
      description: "Νόστιμα πιάτα, αγαπημένα γρήγορα φαγητά και γκουρμέ λιχουδιές.",
      words: ["Πίτσα", "Σούσι", "Τάκος", "Τσίζμπεργκερ", "Παγωτό", "Παέλια", "Ράμεν", "Ζυμαρικά", "Κρουασάν", "Τηγανίτες", "Ντιμ Σαμ", "Φαλάφελ", "Κεμπάπ", "Νάτσος", "Βάφλες", "Ντόνατς", "Παντ Τάι", "Κάρυ", "Λαζάνια", "Μπριζόλα", "Γουακαμόλε", "Τιραμισού", "Ψάρι με Πατάτες", "Χοτ Ντογκ", "Φοντύ"]
    }
  }
};

export function getLocalizedCategory(catId: string, locale: string): { name: string; description: string; words: string[] } {
  const catData = LOCALIZED_CATEGORIES[catId];
  if (!catData) return { name: catId, description: "", words: [] };
  
  // Fallback chain: locale -> en
  return catData[locale] || catData['en'];
}
