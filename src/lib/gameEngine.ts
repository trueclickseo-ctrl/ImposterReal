export interface WordCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  words: string[];
}

export interface Player {
  id: string;
  name: string;
  role: 'civilian' | 'imposter';
  score: number;
  hasVoted: boolean;
  votedForId?: string;
  clue?: string;
}

export interface GameSettings {
  category: string;
  customWords: string[];
  imposterCount: number;
  discussionTimeSeconds: number;
  allowDrawingMode: boolean;
  allowTeamMode: boolean;
  scoreLimit: number;
}

export interface GameState {
  roomCode: string;
  status: 'lobby' | 'role-reveal' | 'clue-giving' | 'discussion' | 'voting' | 'game-over';
  settings: GameSettings;
  players: Player[];
  currentTurnIndex: number;
  secretWord: string;
  activeCategoryName: string;
  imposterIds: string[];
  timerRemaining: number;
  winner: 'civilians' | 'imposters' | null;
  logs: string[];
  roundNumber: number;
}

export const DEFAULT_WORD_CATEGORIES: WordCategory[] = [
  {
    id: 'movies',
    name: 'Blockbuster Movies',
    icon: '🎬',
    difficulty: 'easy',
    description: 'Famous movie titles known worldwide across cinema history.',
    words: [
      'Inception', 'Titanic', 'Avatar', 'Star Wars', 'Jurassic Park',
      'The Matrix', 'Harry Potter', 'Avengers', 'The Dark Knight', 'Gladiator',
      'Frozen', 'Interstellar', 'Forrest Gump', 'Spider-Man', 'Back to the Future',
      'Pulp Fiction', 'Shrek', 'Finding Nemo', 'Jaws', 'Oppenheimer',
      'Barbie', 'Indiana Jones', 'Transformers', 'The Lion King', 'Ghostbusters'
    ]
  },
  {
    id: 'food',
    name: 'Food & Cuisine',
    icon: '🍕',
    difficulty: 'easy',
    description: 'Delicious dishes, fast food favorites, and gourmet treats.',
    words: [
      'Pizza', 'Sushi', 'Tacos', 'Cheeseburger', 'Ice Cream',
      'Paella', 'Ramen', 'Pasta', 'Croissant', 'Pancakes',
      'Dim Sum', 'Falafel', 'Kebab', 'Nachos', 'Waffles',
      'Donuts', 'Pad Thai', 'Curry', 'Lasagna', 'Steak',
      'Guacamole', 'Tiramisu', 'Fish and Chips', 'Hot Dog', 'Fondue'
    ]
  },
  {
    id: 'travel',
    name: 'World Landmarks',
    icon: '🗽',
    difficulty: 'medium',
    description: 'Famous monuments, cities, and natural wonders of Earth.',
    words: [
      'Eiffel Tower', 'Statue of Liberty', 'Great Wall of China', 'Colosseum', 'Taj Mahal',
      'Machu Picchu', 'Pyramids of Giza', 'Big Ben', 'Grand Canyon', 'Sydney Opera House',
      'Mount Everest', 'Golden Gate Bridge', 'Niagara Falls', 'Mount Fuji', 'Christ the Redeemer',
      'Leaning Tower of Pisa', 'Stonehenge', 'Acropolis', 'Louvre Museum', 'Burj Khalifa',
      'Disneyland', 'Times Square', 'Trevi Fountain', 'Santorini', 'Yellowstone'
    ]
  },
  {
    id: 'funny',
    name: 'Funny & Whimsical',
    icon: '🤪',
    difficulty: 'medium',
    description: 'Hilarious objects, awkward situations, and quirky concepts.',
    words: [
      'Banana Peel', 'Rubber Duck', 'Unicorn', 'Disco Ball', 'Whoopee Cushion',
      'Flamingo', 'Squeaky Toy', 'Bubble Wrap', 'Toilet Paper', 'Alien Invasion',
      'Tickle Monster', 'Flying Pig', 'Sloth in a Suit', 'Zombie Dance', 'Magic Wand',
      'Sock Monster', 'Giant Gummy Bear', 'Ninja Turtle', 'Space Cowboy', 'Supermarket Cart',
      'Llama', 'Chicken Dance', 'Snoring Bulldog', 'Confetti Cannon', 'Cheesy Smile'
    ]
  },
  {
    id: 'family',
    name: 'Family & Animals',
    icon: '🐶',
    difficulty: 'easy',
    description: 'Cute animals, household pets, and family-friendly objects.',
    words: [
      'Golden Retriever', 'Penguin', 'Dolphin', 'Elephant', 'Kangaroo',
      'Panda', 'Giraffe', 'Koala', 'Hamster', 'Parrot',
      'Teddy Bear', 'Bicycle', 'Kite', 'Board Game', 'Treehouse',
      'Campfire', 'Marshmallow', 'Snowman', 'Picnic Basket', 'Rainbow',
      'Sunhat', 'Hammock', 'Seashell', 'Sandcastle', 'Firefly'
    ]
  },
  {
    id: 'hard',
    name: 'Brainiac & Hard',
    icon: '🧠',
    difficulty: 'hard',
    description: 'Challenging abstract terms, scientific ideas, and complex topics.',
    words: [
      'Quantum Mechanics', 'Photosynthesis', 'Black Hole', 'Artificial Intelligence', 'Blockchain',
      'Fibonacci Sequence', 'Supernova', 'Thermodynamics', 'Augmented Reality', 'Cryptography',
      'Metamorphosis', 'Existentialism', 'Bermuda Triangle', 'Dark Matter', 'Gravitational Wave',
      'Electromagnetism', 'Parabolic Arc', 'Starlight Shift', 'Singularity', 'Nano Technology',
      'Solar Eclipse', 'Subatomic Particle', 'Cosmic Radiation', 'Gene Splicing', 'Paradox'
    ]
  },
  {
    id: 'tech',
    name: 'Tech & Gaming',
    icon: '🎮',
    difficulty: 'medium',
    description: 'Video games, gadgets, software, and digital culture.',
    words: [
      'Minecraft', 'PlayStation', 'Nintendo Switch', 'Virtual Reality VR', 'Smart Watch',
      'Smartphone', 'Drone', 'Robotics', 'Cyberpunk', 'Arcade Machine',
      'Keyboard', 'Headphones', 'Streaming', 'Pixel Art', 'Game Controller',
      'Cloud Server', 'Wireless Wi-Fi', 'Microphone', 'Graphics Card', 'Joystick'
    ]
  }
];

export function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'IMP-';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function createInitialState(customCategory?: WordCategory, playerNames: string[] = ['Player 1', 'Player 2', 'Player 3', 'Player 4']): GameState {
  const category = customCategory || DEFAULT_WORD_CATEGORIES[0];
  const randomWord = category.words[Math.floor(Math.random() * category.words.length)];
  const roomCode = generateRoomCode();

  const players: Player[] = playerNames.map((name, index) => ({
    id: `player-${index + 1}`,
    name,
    role: 'civilian',
    score: 0,
    hasVoted: false
  }));

  // Assign 1 imposter randomly
  const imposterIndex = Math.floor(Math.random() * players.length);
  players[imposterIndex].role = 'imposter';

  return {
    roomCode,
    status: 'lobby',
    settings: {
      category: category.id,
      customWords: [],
      imposterCount: 1,
      discussionTimeSeconds: 180,
      allowDrawingMode: false,
      allowTeamMode: false,
      scoreLimit: 5
    },
    players,
    currentTurnIndex: 0,
    secretWord: randomWord,
    activeCategoryName: category.name,
    imposterIds: [players[imposterIndex].id],
    timerRemaining: 180,
    winner: null,
    logs: [`Room ${roomCode} initialized with category: ${category.name}`],
    roundNumber: 1
  };
}

export function startNewRound(currentState: GameState, categoryId?: string): GameState {
  const cat = DEFAULT_WORD_CATEGORIES.find(c => c.id === (categoryId || currentState.settings.category)) || DEFAULT_WORD_CATEGORIES[0];
  const wordsToUse = currentState.settings.customWords.length > 0 ? currentState.settings.customWords : cat.words;
  const randomWord = wordsToUse[Math.floor(Math.random() * wordsToUse.length)];

  // Reset votes & roles
  const imposterCount = Math.min(currentState.settings.imposterCount, Math.floor(currentState.players.length / 2));
  const newPlayers = currentState.players.map(p => ({
    ...p,
    role: 'civilian' as const,
    hasVoted: false,
    votedForId: undefined,
    clue: undefined
  }));

  // Select imposters
  const indices: number[] = [];
  while (indices.length < imposterCount) {
    const r = Math.floor(Math.random() * newPlayers.length);
    if (!indices.includes(r)) {
      indices.push(r);
      newPlayers[r].role = 'imposter';
    }
  }

  const imposterIds = indices.map(i => newPlayers[i].id);

  return {
    ...currentState,
    status: 'role-reveal',
    secretWord: randomWord,
    activeCategoryName: cat.name,
    players: newPlayers,
    imposterIds,
    currentTurnIndex: 0,
    timerRemaining: currentState.settings.discussionTimeSeconds,
    winner: null,
    roundNumber: currentState.roundNumber + 1,
    logs: [`Round ${currentState.roundNumber + 1} started! Category: ${cat.name}`]
  };
}
