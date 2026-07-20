"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { 
  DEFAULT_WORD_CATEGORIES, 
  createInitialState, 
  startNewRound, 
  GameState, 
  WordCategory,
  generateRoomCode
} from "@/lib/gameEngine";
import { UI_MICROCOPY } from "@/lib/microcopy";
import { Play, Users, Eye, EyeOff, Timer, CheckCircle, RefreshCw, AlertTriangle, Shield, Award, Plus, Trash2 } from "lucide-react";

export default function ImposterGameUI() {
  const [gameState, setGameState] = useState<GameState>(() => createInitialState());
  const [activePlayerIndex, setActivePlayerIndex] = useState<number>(0);
  const [showRoleCard, setShowRoleCard] = useState<boolean>(false);
  const [selectedVoteId, setSelectedVoteId] = useState<string | null>(null);
  const [newPlayerName, setNewPlayerName] = useState<string>("");

  // Fix hydration mismatch by generating client-side room code once mounted
  useEffect(() => {
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
      // All players saw their role -> move to Discussion
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
      <div className="bg-[var(--bg-card-alt)] border-4 border-[#0284c7] dark:border-[#00f0ff] p-4 flex items-center justify-between shadow-[5px_5px_0px_#0f172a] dark:shadow-[5px_5px_0px_#000]">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-[#e11d48] dark:bg-[#ff2a85] rounded-full border border-slate-900" />
          <div className="w-4 h-4 bg-[#f59e0b] dark:bg-[#ffe600] rounded-full border border-slate-900" />
          <div className="w-4 h-4 bg-[#16a34a] dark:bg-[#39ff14] rounded-full border border-slate-900" />
          <span className="font-pixel text-xs text-[#0284c7] dark:text-[#00f0ff] uppercase tracking-wider ml-2 font-bold">
            ROOM: {gameState.roomCode}
          </span>
        </div>
        <div className="font-arcade text-xl font-bold text-slate-900 dark:text-slate-100">
          ROUND {gameState.roundNumber} • {gameState.activeCategoryName}
        </div>
      </div>

      {/* Main Game Screen Content */}
      <div className="bg-[var(--bg-card)] border-x-4 border-b-4 border-[#0284c7] dark:border-[#00f0ff] p-6 sm:p-10 shadow-[5px_5px_0px_#0f172a] dark:shadow-[5px_5px_0px_#000]">
        
        {/* LOBBY STATE */}
        {gameState.status === 'lobby' && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <span className="pixel-badge bg-[#ffe600] text-slate-900 border-slate-900 font-bold">SETUP LOBBY</span>
              <h2 className="font-pixel text-xl sm:text-2xl text-[#b45309] dark:text-[#ffe600]">Gather Thy Fellowship</h2>
              <p className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300 max-w-md mx-auto">
                Add players (3-20), select a word category, then click start to receive secret words.
              </p>
            </div>

            {/* Category Selector Grid */}
            <div>
              <label className="font-pixel text-xs text-[#0284c7] dark:text-[#00f0ff] uppercase block mb-3 font-bold">1. Select Word Category</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DEFAULT_WORD_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setGameState(prev => ({
                      ...prev,
                      settings: { ...prev.settings, category: cat.id },
                      activeCategoryName: cat.name
                    }))}
                    className={`p-3 border-3 text-left font-arcade transition-all ${
                      gameState.settings.category === cat.id
                        ? 'bg-[#0284c7] dark:bg-[#00f0ff] text-white dark:text-slate-900 border-slate-900 shadow-[3px_3px_0px_#0f172a] font-bold'
                        : 'bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-[#0284c7] dark:hover:border-[#00f0ff]'
                    }`}
                  >
                    <div className="text-2xl">{cat.icon}</div>
                    <div className="font-bold text-lg mt-1">{cat.name}</div>
                    <div className="text-xs font-sans opacity-90 font-semibold">{cat.words.length} words</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Player Roster Builder */}
            <div>
              <label className="font-pixel text-xs text-[#e11d48] dark:text-[#ff2a85] uppercase block mb-3 font-bold">2. Add Players ({gameState.players.length}/20)</label>
              
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Enter player name..."
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                  className="bg-[var(--bg-card-alt)] border-3 border-slate-400 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-2.5 font-arcade text-xl font-bold focus:outline-none focus:border-[#d97706] dark:focus:border-[#ffe600] flex-1"
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
                  <div key={p.id} className="bg-[var(--bg-card-alt)] border-2 border-slate-400 dark:border-slate-700 p-3 flex items-center justify-between font-arcade text-xl font-bold text-slate-900 dark:text-slate-100 shadow-sm">
                    <span className="truncate">👤 {p.name}</span>
                    {gameState.players.length > 3 && (
                      <button
                        onClick={() => removePlayer(p.id)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1 font-bold"
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
            <div className="text-center pt-4 border-t-2 border-slate-300 dark:border-slate-800">
              <button
                onClick={startRound}
                className="pixel-btn pixel-btn-cyan text-sm sm:text-base w-full sm:w-auto px-8 py-4 font-bold"
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
            <span className="pixel-badge bg-[#0284c7] dark:bg-[#00f0ff] text-white dark:text-slate-900 border-slate-900 font-bold">PASS & PLAY SECRET CARD</span>
            
            <h3 className="font-pixel text-xl sm:text-2xl text-slate-900 dark:text-slate-100 font-bold">
              Pass Device To: <span className="text-[#b45309] dark:text-[#ffe600]">{gameState.players[activePlayerIndex]?.name}</span>
            </h3>

            {!showRoleCard ? (
              <div className="bg-[var(--bg-card-alt)] border-4 border-[#d97706] dark:border-[#ffe600] p-8 space-y-4 shadow-[5px_5px_0px_#0f172a] dark:shadow-[5px_5px_0px_#000]">
                <div className="text-5xl animate-bounce">🔒</div>
                <p className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300">
                  Ensure no other player is watching your screen, then click below to reveal your secret word.
                </p>
                <button
                  onClick={() => setShowRoleCard(true)}
                  className="pixel-btn pixel-btn-yellow w-full font-bold"
                >
                  <Eye className="w-4 h-4 inline mr-2" /> View Secret Word
                </button>
              </div>
            ) : (
              <div className={`border-4 p-8 space-y-4 shadow-[5px_5px_0px_#0f172a] dark:shadow-[5px_5px_0px_#000] ${
                gameState.players[activePlayerIndex]?.role === 'imposter'
                  ? 'bg-red-100 dark:bg-red-950/80 border-red-600 text-red-900 dark:text-red-200'
                  : 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-600 text-emerald-900 dark:text-emerald-200'
              }`}>
                {gameState.players[activePlayerIndex]?.role === 'imposter' ? (
                  <>
                    <div className="text-5xl animate-pulse">🤫</div>
                    <h4 className="font-pixel text-2xl text-red-600 dark:text-red-400 font-bold">YOU ARE THE IMPOSTER!</h4>
                    <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200">
                      You do not know the secret word! Listen carefully to other players' clues and bluff your way through!
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-5xl">🔑</div>
                    <h4 className="font-pixel text-xs text-emerald-800 dark:text-emerald-400 uppercase font-bold">Your Secret Word:</h4>
                    <div className="font-pixel text-2xl sm:text-3xl text-amber-900 dark:text-[#ffe600] tracking-wider py-2 bg-amber-100 dark:bg-black/40 border-2 border-emerald-600 font-bold">
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
                  <EyeOff className="w-4 h-4 inline mr-2" /> Hide & Pass to Next Player
                </button>
              </div>
            )}
          </div>
        )}

        {/* DISCUSSION & TIMER STATE */}
        {gameState.status === 'discussion' && (
          <div className="space-y-6 text-center py-4">
            <span className="pixel-badge bg-[#16a34a] dark:bg-[#39ff14] text-white dark:text-slate-900 border-slate-900 font-bold">DISCUSSION ROUND</span>
            
            <h3 className="font-pixel text-xl text-[#b45309] dark:text-[#ffe600] font-bold">Give Clues & Discuss!</h3>

            {/* Countdown Timer Display */}
            <div className="bg-[var(--bg-card-alt)] border-4 border-[#d97706] dark:border-[#ffe600] p-6 max-w-xs mx-auto shadow-[4px_4px_0px_#0f172a] dark:shadow-[4px_4px_0px_#000]">
              <div className="flex items-center justify-center gap-2 font-pixel text-3xl text-[#d97706] dark:text-[#ffe600] font-bold">
                <Timer className="w-8 h-8 text-[#e11d48] dark:text-[#ff2a85] animate-spin" />
                <span>{Math.floor(gameState.timerRemaining / 60)}:{(gameState.timerRemaining % 60).toString().padStart(2, '0')}</span>
              </div>
              <span className="font-arcade text-base text-slate-700 dark:text-slate-400 uppercase tracking-widest mt-1 block font-bold">Discussion Time Left</span>
            </div>

            <div className="bg-[var(--bg-card-alt)] border-2 border-slate-400 dark:border-slate-700 p-4 max-w-xl mx-auto text-left space-y-2">
              <h4 className="font-pixel text-xs text-[#0284c7] dark:text-[#00f0ff] font-bold">Round Rules & Clue Sequence:</h4>
              <ul className="list-disc list-inside font-sans text-base font-semibold text-slate-800 dark:text-slate-300 space-y-1">
                <li>Each player says <strong>one single word or short phrase</strong> clue.</li>
                <li>The Imposter must improvise a plausible clue without knowing the secret word.</li>
                <li>After everyone gives a clue, debate who sounds suspicious!</li>
              </ul>
            </div>

            <button
              onClick={() => setGameState(prev => ({ ...prev, status: 'voting' }))}
              className="pixel-btn pixel-btn-pink text-xs sm:text-sm px-6 py-3 font-bold"
            >
              🗳️ Skip to Voting Phase
            </button>
          </div>
        )}

        {/* VOTING STATE */}
        {gameState.status === 'voting' && (
          <div className="space-y-6 text-center max-w-lg mx-auto py-4">
            <span className="pixel-badge bg-[#e11d48] dark:bg-[#ff2a85] text-white border-slate-900 font-bold">VOTING PHASE</span>
            <h3 className="font-pixel text-xl text-[#e11d48] dark:text-[#ff2a85] font-bold">Cast Thy Judgment</h3>
            <p className="font-sans text-base font-semibold text-slate-700 dark:text-slate-300">
              Select the player your group suspects of being the secret Imposter:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {gameState.players.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedVoteId(p.id)}
                  className={`p-4 border-3 font-arcade text-2xl font-bold flex items-center justify-between transition-all ${
                    selectedVoteId === p.id
                      ? 'bg-[#e11d48] dark:bg-[#ff2a85] text-white border-slate-900 shadow-[4px_4px_0px_#0f172a]'
                      : 'bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-200 border-slate-400 dark:border-slate-700 hover:border-[#e11d48]'
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
              className={`pixel-btn pixel-btn-pink w-full py-4 text-sm font-bold ${!selectedVoteId ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {UI_MICROCOPY.submitVote.retroDisplay}
            </button>
          </div>
        )}

        {/* GAME OVER & REVEAL STATE */}
        {gameState.status === 'game-over' && (
          <div className="text-center space-y-6 max-w-lg mx-auto py-6">
            <span className="pixel-badge bg-[#ffe600] text-slate-900 border-slate-900 font-bold">ROUND RESULTS</span>

            {gameState.winner === 'civilians' ? (
              <div className="bg-emerald-100 dark:bg-emerald-950/90 border-4 border-emerald-600 p-6 space-y-3 shadow-[5px_5px_0px_#0f172a]">
                <div className="text-5xl">🏆</div>
                <h3 className="font-pixel text-2xl text-emerald-800 dark:text-emerald-400 font-bold">CIVILIANS WIN!</h3>
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200">
                  You successfully caught the secret Imposter!
                </p>
              </div>
            ) : (
              <div className="bg-red-100 dark:bg-red-950/90 border-4 border-red-600 p-6 space-y-3 shadow-[5px_5px_0px_#0f172a]">
                <div className="text-5xl">👺</div>
                <h3 className="font-pixel text-2xl text-red-800 dark:text-red-400 font-bold">IMPOSTER WINS!</h3>
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200">
                  The Imposter fooled the group and escaped detection!
                </p>
              </div>
            )}

            {/* Revealed Details */}
            <div className="bg-[var(--bg-card-alt)] border-2 border-slate-400 dark:border-slate-700 p-4 space-y-2 text-left font-arcade text-xl font-bold text-slate-900 dark:text-slate-100">
              <div>🔑 <strong>Secret Word Was:</strong> <span className="text-[#b45309] dark:text-[#ffe600]">{gameState.secretWord}</span></div>
              <div>👺 <strong>Secret Imposter Was:</strong> <span className="text-[#e11d48] dark:text-[#ff2a85]">{gameState.players.find(p => gameState.imposterIds.includes(p.id))?.name}</span></div>
            </div>

            {/* Scoreboard */}
            <div className="bg-[var(--bg-card-alt)] border-2 border-slate-400 dark:border-slate-800 p-4 text-left">
              <h4 className="font-pixel text-xs text-[#0284c7] dark:text-[#00f0ff] uppercase mb-2 font-bold">Scoreboard Tracker:</h4>
              <div className="grid grid-cols-2 gap-2 font-arcade text-xl font-bold">
                {gameState.players.map(p => (
                  <div key={p.id} className="flex justify-between border-b border-slate-300 dark:border-slate-800 py-1 text-slate-900 dark:text-slate-100">
                    <span>👤 {p.name}</span>
                    <span className="text-[#b45309] dark:text-[#ffe600] font-bold">{p.score} PTS</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={startRound}
              className="pixel-btn pixel-btn-yellow w-full py-4 text-sm font-bold"
            >
              <RefreshCw className="w-4 h-4 inline mr-2" /> {UI_MICROCOPY.playAgain.retroDisplay}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
