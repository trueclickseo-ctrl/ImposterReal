"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { 
  DEFAULT_WORD_CATEGORIES, 
  createInitialState, 
  startNewRound, 
  GameState, 
  generateRoomCode
} from "@/lib/gameEngine";
import { UI_MICROCOPY } from "@/lib/microcopy";
import { Eye, EyeOff, Timer, CheckCircle, RefreshCw, Plus, Trash2 } from "lucide-react";

export default function ImposterGameUI() {
  const [mounted, setMounted] = useState(false);
  const [gameState, setGameState] = useState<GameState>(() => createInitialState());
  const [activePlayerIndex, setActivePlayerIndex] = useState<number>(0);
  const [showRoleCard, setShowRoleCard] = useState<boolean>(false);
  const [selectedVoteId, setSelectedVoteId] = useState<string | null>(null);
  const [newPlayerName, setNewPlayerName] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    setGameState(prev => ({
      ...prev,
      roomCode: generateRoomCode(),
    }));
  }, []);

  // Timer Countdown Effect
  useEffect(() => {
    let interval: any = null;
    if (gameState.status === 'discussion' && gameState.timerRemaining > 0) {
      interval = setInterval(() => {
        setGameState(prev => {
          if (prev.timerRemaining <= 1) {
            return { ...prev, status: 'voting', timerRemaining: 0 };
          }
          return { ...prev, timerRemaining: prev.timerRemaining - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState.status, gameState.timerRemaining]);

  // Handle Confetti on Civilian Win
  const handleCiviliansWin = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    const newP = {
      id: `player-${gameState.players.length + 1}`,
      name: newPlayerName.trim(),
      role: 'civilian' as const,
      score: 0,
      hasVoted: false
    };
    setGameState(prev => ({
      ...prev,
      players: [...prev.players, newP]
    }));
    setNewPlayerName("");
  };

  const removePlayer = (id: string) => {
    if (gameState.players.length <= 3) return;
    setGameState(prev => ({
      ...prev,
      players: prev.players.filter(p => p.id !== id)
    }));
  };

  const startRound = () => {
    const newState = startNewRound(gameState);
    setGameState(newState);
    setActivePlayerIndex(0);
    setShowRoleCard(false);
  };

  const handleNextPlayerReveal = () => {
    setShowRoleCard(false);
    if (activePlayerIndex + 1 < gameState.players.length) {
      setActivePlayerIndex(activePlayerIndex + 1);
    } else {
      setGameState(prev => ({ ...prev, status: 'discussion' }));
    }
  };

  const submitVote = () => {
    if (!selectedVoteId) return;
    const votedPlayer = gameState.players.find(p => p.id === selectedVoteId);
    const isImposter = gameState.imposterIds.includes(selectedVoteId);

    if (isImposter) {
      handleCiviliansWin();
    }

    setGameState(prev => {
      const winner = isImposter ? 'civilians' : 'imposters';
      const updatedPlayers = prev.players.map(p => {
        if (winner === 'civilians' && p.role === 'civilian') {
          return { ...p, score: p.score + 1 };
        }
        if (winner === 'imposters' && p.role === 'imposter') {
          return { ...p, score: p.score + 2 };
        }
        return p;
      });

      return {
        ...prev,
        status: 'game-over',
        winner,
        players: updatedPlayers,
        logs: [...prev.logs, `Vote submitted for ${votedPlayer?.name}. Winner: ${winner}`]
      };
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      
      {/* Game Window Chrome Header */}
      <div className="bg-[var(--bg-card-alt)] border-2 border-[var(--border-main)] rounded-t-2xl p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
          <div className="w-3.5 h-3.5 bg-amber-500 rounded-full" />
          <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full" />
          <span className="font-pixel text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase tracking-wider ml-2 font-extrabold">
            ROOM: {mounted ? gameState.roomCode : 'IMP-ROOM'}
          </span>
        </div>
        <div className="font-arcade text-lg font-bold text-slate-900 dark:text-slate-100">
          ROUND {gameState.roundNumber} • {gameState.activeCategoryName}
        </div>
      </div>

      {/* Main Game Screen Content */}
      <div className="bg-[var(--bg-card)] border-x-2 border-b-2 border-[var(--border-main)] rounded-b-2xl p-6 sm:p-10 shadow-xl transition-all">
        
        {/* LOBBY STATE */}
        {gameState.status === 'lobby' && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <span className="pixel-badge bg-[#fbbf24] text-slate-900 font-extrabold">SETUP LOBBY</span>
              <h2 className="font-pixel text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 font-bold">Gather Thy Fellowship</h2>
              <p className="font-sans text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto font-medium">
                Add players (3-20), select a word category, then click start to receive secret words.
              </p>
            </div>

            {/* Category Selector Grid */}
            <div>
              <label className="font-pixel text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase block mb-3 font-extrabold">1. Select Word Category</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DEFAULT_WORD_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setGameState(prev => ({
                      ...prev,
                      settings: { ...prev.settings, category: cat.id },
                      activeCategoryName: cat.name
                    }))}
                    className={`p-4 border-2 rounded-xl text-left font-arcade transition-all ${
                      gameState.settings.category === cat.id
                        ? 'bg-[#0284c7] dark:bg-[#06b6d4] text-white dark:text-slate-950 border-slate-900 shadow-md font-bold scale-[1.02]'
                        : 'bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0284c7]'
                    }`}
                  >
                    <div className="text-3xl">{cat.icon}</div>
                    <div className="font-bold text-lg mt-1">{cat.name}</div>
                    <div className="text-xs font-sans opacity-90 font-semibold">{cat.words.length} words</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Player Roster Builder */}
            <div>
              <label className="font-pixel text-xs text-[#e11d48] dark:text-[#f43f5e] uppercase block mb-3 font-extrabold">2. Add Players ({gameState.players.length}/20)</label>
              
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Enter player name..."
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                  className="bg-[var(--bg-card-alt)] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 font-arcade text-xl font-bold rounded-xl focus:outline-none focus:border-[#fbbf24] flex-1 shadow-inner"
                />
                <button
                  onClick={addPlayer}
                  className="pixel-btn pixel-btn-yellow text-xs"
                >
                  <Plus className="w-4 h-4 inline" /> Add
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {gameState.players.map((p) => (
                  <div key={p.id} className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-3.5 rounded-xl flex items-center justify-between font-arcade text-xl font-bold text-slate-900 dark:text-slate-100 shadow-sm">
                    <span className="truncate">👤 {p.name}</span>
                    {gameState.players.length > 3 && (
                      <button
                        onClick={() => removePlayer(p.id)}
                        className="text-rose-500 hover:text-rose-700 p-1 font-bold"
                        title="Remove Player"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={startRound}
                className="pixel-btn pixel-btn-cyan text-base sm:text-lg w-full sm:w-auto px-10 py-4 font-extrabold shadow-lg"
                aria-label={UI_MICROCOPY.startGame.plainAccessibilityFallback}
              >
                🎮 {UI_MICROCOPY.startGame.retroDisplay}
              </button>
            </div>
          </div>
        )}

        {/* ROLE REVEAL STATE (PASS & PLAY) */}
        {gameState.status === 'role-reveal' && (
          <div className="text-center space-y-6 max-w-lg mx-auto py-6">
            <span className="pixel-badge bg-[#0284c7] dark:bg-[#06b6d4] text-white dark:text-slate-950 font-bold">PASS & PLAY SECRET CARD</span>
            
            <h3 className="font-pixel text-xl sm:text-2xl text-slate-900 dark:text-slate-100 font-bold">
              Pass Device To: <span className="text-[#d97706] dark:text-[#fbbf24]">{gameState.players[activePlayerIndex]?.name}</span>
            </h3>

            {!showRoleCard ? (
              <div className="bg-[var(--bg-card-alt)] border-2 border-[#fbbf24] p-8 rounded-2xl space-y-4 shadow-lg">
                <div className="text-5xl animate-bounce">🔒</div>
                <p className="font-sans text-base font-medium text-slate-700 dark:text-slate-300">
                  Ensure no other player is watching your screen, then click below to reveal your secret word.
                </p>
                <button
                  onClick={() => setShowRoleCard(true)}
                  className="pixel-btn pixel-btn-yellow w-full font-bold"
                >
                  <Eye className="w-5 h-5 inline mr-2" /> View Secret Word
                </button>
              </div>
            ) : (
              <div className={`border-2 p-8 rounded-2xl space-y-4 shadow-lg ${
                gameState.players[activePlayerIndex]?.role === 'imposter'
                  ? 'bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-200'
                  : 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-200'
              }`}>
                {gameState.players[activePlayerIndex]?.role === 'imposter' ? (
                  <>
                    <div className="text-5xl animate-pulse">🤫</div>
                    <h4 className="font-pixel text-2xl text-rose-600 dark:text-rose-400 font-bold">YOU ARE THE IMPOSTER!</h4>
                    <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200">
                      You do not know the secret word! Listen carefully to other players' clues and bluff your way through!
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-5xl">🔑</div>
                    <h4 className="font-pixel text-xs text-emerald-700 dark:text-emerald-400 uppercase font-bold">Your Secret Word:</h4>
                    <div className="font-pixel text-3xl text-amber-600 dark:text-[#fbbf24] tracking-wider py-3 bg-white/80 dark:bg-black/40 border-2 border-emerald-500 rounded-xl font-extrabold">
                      {gameState.secretWord}
                    </div>
                    <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-300">
                      Category: {gameState.activeCategoryName}. Give one subtle clue that won't give it away to the Imposter!
                    </p>
                  </>
                )}

                <button
                  onClick={handleNextPlayerReveal}
                  className="pixel-btn pixel-btn-cyan w-full mt-4 font-bold"
                >
                  <EyeOff className="w-5 h-5 inline mr-2" /> Hide & Pass to Next Player
                </button>
              </div>
            )}
          </div>
        )}

        {/* DISCUSSION & TIMER STATE */}
        {gameState.status === 'discussion' && (
          <div className="space-y-6 text-center py-4">
            <span className="pixel-badge bg-[#10b981] dark:bg-[#34d399] text-white dark:text-slate-950 font-bold">DISCUSSION ROUND</span>
            
            <h3 className="font-pixel text-2xl text-[#d97706] dark:text-[#fbbf24] font-bold">Give Clues & Discuss!</h3>

            {/* Countdown Timer Display */}
            <div className="bg-[var(--bg-card-alt)] border-2 border-[#fbbf24] p-6 max-w-xs mx-auto rounded-2xl shadow-md">
              <div className="flex items-center justify-center gap-2 font-pixel text-4xl text-[#d97706] dark:text-[#fbbf24] font-extrabold">
                <Timer className="w-8 h-8 text-rose-500 animate-spin" />
                <span>{Math.floor(gameState.timerRemaining / 60)}:{(gameState.timerRemaining % 60).toString().padStart(2, '0')}</span>
              </div>
              <span className="font-arcade text-base text-slate-600 dark:text-slate-400 uppercase tracking-widest mt-1 block font-bold">Discussion Time Left</span>
            </div>

            <div className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-5 max-w-xl mx-auto rounded-xl text-left space-y-2">
              <h4 className="font-pixel text-xs text-[#0284c7] dark:text-[#06b6d4] font-bold">Round Rules & Clue Sequence:</h4>
              <ul className="list-disc list-inside font-sans text-base font-semibold text-slate-800 dark:text-slate-300 space-y-1">
                <li>Each player says <strong>one single word or short phrase</strong> clue.</li>
                <li>The Imposter must improvise a plausible clue without knowing the secret word.</li>
                <li>After everyone gives a clue, debate who sounds suspicious!</li>
              </ul>
            </div>

            <button
              onClick={() => setGameState(prev => ({ ...prev, status: 'voting' }))}
              className="pixel-btn pixel-btn-pink text-sm px-8 py-3.5 font-bold"
            >
              🗳️ Skip to Voting Phase
            </button>
          </div>
        )}

        {/* VOTING STATE */}
        {gameState.status === 'voting' && (
          <div className="space-y-6 text-center max-w-lg mx-auto py-4">
            <span className="pixel-badge bg-[#e11d48] dark:bg-[#f43f5e] text-white font-bold">VOTING PHASE</span>
            <h3 className="font-pixel text-2xl text-[#e11d48] dark:text-[#f43f5e] font-bold">Cast Thy Judgment</h3>
            <p className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300">
              Select the player your group suspects of being the secret Imposter:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {gameState.players.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedVoteId(p.id)}
                  className={`p-4 border-2 rounded-xl font-arcade text-2xl font-bold flex items-center justify-between transition-all ${
                    selectedVoteId === p.id
                      ? 'bg-[#e11d48] dark:bg-[#f43f5e] text-white border-slate-900 shadow-md scale-[1.02]'
                      : 'bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-200 border-slate-300 dark:border-slate-800 hover:border-[#e11d48]'
                  }`}
                >
                  <span>👤 {p.name}</span>
                  {selectedVoteId === p.id && <CheckCircle className="w-6 h-6 text-white" />}
                </button>
              ))}
            </div>

            <button
              disabled={!selectedVoteId}
              onClick={submitVote}
              className={`pixel-btn pixel-btn-pink w-full py-4 text-base font-bold ${!selectedVoteId ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {UI_MICROCOPY.submitVote.retroDisplay}
            </button>
          </div>
        )}

        {/* GAME OVER & REVEAL STATE */}
        {gameState.status === 'game-over' && (
          <div className="text-center space-y-6 max-w-lg mx-auto py-6">
            <span className="pixel-badge bg-[#fbbf24] text-slate-900 font-bold">ROUND RESULTS</span>

            {gameState.winner === 'civilians' ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/90 border-2 border-emerald-500 p-6 rounded-2xl space-y-3 shadow-lg">
                <div className="text-5xl">🏆</div>
                <h3 className="font-pixel text-2xl text-emerald-700 dark:text-emerald-400 font-bold">CIVILIANS WIN!</h3>
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200">
                  You successfully caught the secret Imposter!
                </p>
              </div>
            ) : (
              <div className="bg-rose-50 dark:bg-rose-950/90 border-2 border-rose-500 p-6 rounded-2xl space-y-3 shadow-lg">
                <div className="text-5xl">👺</div>
                <h3 className="font-pixel text-2xl text-rose-700 dark:text-rose-400 font-bold">IMPOSTER WINS!</h3>
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200">
                  The Imposter fooled the group and escaped detection!
                </p>
              </div>
            )}

            {/* Revealed Details */}
            <div className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-5 rounded-xl space-y-2 text-left font-arcade text-xl font-bold text-slate-900 dark:text-slate-100">
              <div>🔑 <strong>Secret Word Was:</strong> <span className="text-[#d97706] dark:text-[#fbbf24]">{gameState.secretWord}</span></div>
              <div>👺 <strong>Secret Imposter Was:</strong> <span className="text-[#e11d48] dark:text-[#f43f5e]">{gameState.players.find(p => gameState.imposterIds.includes(p.id))?.name}</span></div>
            </div>

            {/* Scoreboard */}
            <div className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-5 rounded-xl text-left">
              <h4 className="font-pixel text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase mb-2 font-bold">Scoreboard Tracker:</h4>
              <div className="grid grid-cols-2 gap-2 font-arcade text-xl font-bold">
                {gameState.players.map(p => (
                  <div key={p.id} className="flex justify-between border-b border-slate-200 dark:border-slate-800 py-1 text-slate-900 dark:text-slate-100">
                    <span>👤 {p.name}</span>
                    <span className="text-[#d97706] dark:text-[#fbbf24] font-bold">{p.score} PTS</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={startRound}
              className="pixel-btn pixel-btn-yellow w-full py-4 text-base font-bold"
            >
              <RefreshCw className="w-5 h-5 inline mr-2" /> {UI_MICROCOPY.playAgain.retroDisplay}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
