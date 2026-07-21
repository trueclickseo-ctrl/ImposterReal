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
    zh: {
      name: "热门电影",
      description: "享誉全球的经典与流行电影作品。",
      words: ["盗梦空间", "泰坦尼克号", "阿凡达", "星球大战", "侏罗纪公园", "黑客帝国", "哈利波特", "复仇者联盟", "蝙蝠侠：黑暗骑士", "角斗士", "冰雪奇缘", "星际穿越", "阿甘正传", "蜘蛛侠", "回到未来", "低俗小说", "怪物史瑞克", "海底总动员", "大白鲨", "奥本海默", "芭比", "印第安纳琼斯", "变形金刚", "狮子王", "捉鬼敢死队"]
    },
    ja: {
      name: "大ヒット映画",
      description: "世界中で有名な歴代映画作品のコレクション。",
      words: ["インセプション", "タイタニック", "アバター", "スター・ウォーズ", "ジュラシック・パーク", "マトリックス", "ハリー・ポッター", "アベンジャーズ", "ダークナイト", "グラディエーター", "アナと雪の女王", "インターステラー", "フォレスト・ガンプ", "スパイダーマン", "バック・トゥ・ザ・フューチャー", "パルプ・フィクション", "シュレック", "ファインディング・ニモ", "ジョーズ", "オッペンハイマー", "バービー", "インディ・ジョーンズ", "トランスフォーマー", "라이온 킹", "ゴーストバスターズ"]
    },
    ar: {
      name: "أفلام شهيرة",
      description: "أشهر عناوين الأفلام العالمية عبر تاريخ السينما.",
      words: ["إنسبشن", "تايتانيك", "أفاتار", "حرب النجوم", "حديقة ديناصورات", "ماتريكس", "هاري بوتر", "المُنقمون", "فارس الليل", "المصارع", "مجمدة", "بين النجوم", "فورست غامب", "سبايدرمان", "العودة للمستقبل", "بالب فيكشن", "شريك", "البحث عن نيمو", "الفك المفترس", "أوبنهايمر", "باربي", "إنديانا جونز", "المتحولون", "الأسد الملك", "صائدو الأشباح"]
    },
    hi: {
      name: "सुपरहिट फिल्में",
      description: "दुनिया भर में प्रसिद्ध ब्लॉकबस्टर फिल्में।",
      words: ["इनसेप्शन", "टाइटेनिक", "अवतार", "स्टार वॉर्स", "जुरासिक पार्क", "मैट्रिक्स", "हैरी पॉटर", "एवेंजर्स", "द डार्क नाइट", "ग्लैडिएटर", "फ्रोजन", "इंटरस्टेलर", "फॉरेस्ट गंप", "स्पाइडर-मैन", "बैक टू द फ्यूचर", "पल्प फिक्शन", "श्रेक", "फाइंडिंग निमो", "जॉज", "ओपेनहाइमर", "बारबी", "इण्डियाना जोन्स", "ट्रांसफॉर्मर्स", "द लायन किंग", "घोस्टबस्टर्स"]
    },
    ko: {
      name: "블록버스터 영화",
      description: "전 세계적으로 유명한 영화 작품 모음.",
      words: ["인셉션", "타이타닉", "아바타", "스타워즈", "쥬라기 공원", "매트릭스", "해리 포터", "어벤져스", "다크 나이트", "글래디에이터", "겨울왕국", "인터스텔라", "포레스트 검프", "스파이더맨", "백 투 더 퓨처", "펄프 픽션", "슈렉", "니모를 찾아서", "죠스", "오펜하이머", "바비", "인디아나 존스", "트랜스포머", "라이온 킹", "고스트버스터즈"]
    },
    vi: {
      name: "Phim bom tấn",
      description: "Các tựa phim nổi tiếng khắp thế giới.",
      words: ["Inception", "Titanic", "Avatar", "Star Wars", "Công viên kỷ Jura", "Ma trận", "Harry Potter", "Avengers", "Kỵ sĩ bóng đêm", "Võ sĩ giác đấu", "Frozen", "Interstellar", "Forrest Gump", "Người Nhện", "Trở lại tương lai", "Pulp Fiction", "Shrek", "Đi tìm Nemo", "Hàm cá mập", "Oppenheimer", "Barbie", "Indiana Jones", "Transformers", "Vua sư tử", "Biệt đội bắt ma"]
    },
    th: {
      name: "ภาพยนตร์ฮิต",
      description: "ชื่อภาพยนตร์ชื่อดังระดับโลกตลอดกาล",
      words: ["Inception", "ไททานิค", "อวตาร", "สตาร์ วอร์ส", "จูราสสิค พาร์ค", "เดอะ เมทริกซ์", "แฮร์รี่ พอตเตอร์", "อเวนเจอร์ส", "แบทแมน อัศวินรัตติกาล", "กลาดิเอเตอร์", "ผจญภัยแดนหิมะ", "인터스텔라", "ฟอร์เรสท์ กัมพ์", "สไปเดอร์-แมน", "เจาะเวลาหาอดีต", "พัลพ์ ฟิกชั่น", "เชร็ค", "นีโม...ปลาเล็กหัวใจโต๊โต", "จอว์ส", "ออปเพนไฮเมอร์", "บาร์บี้", "อินเดียนา โจนส์", "ทรานส์ฟอร์เมอร์ส", "เดอะ ไลออน คิง", "บริษัทกำจัดผี"]
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
