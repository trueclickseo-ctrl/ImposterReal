"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import confetti from "canvas-confetti";
import { 
  DEFAULT_WORD_CATEGORIES, 
  createInitialState, 
  startNewRound, 
  GameState, 
  generateRoomCode,
  Player
} from "@/lib/gameEngine";
import { getLocalizedCategory } from "@/lib/localizedWords";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, EyeOff, Timer, CheckCircle, RefreshCw, Plus, Trash2, Smartphone, QrCode } from "lucide-react";
import { database, auth } from "@/lib/firebase";
import { ref, onValue, set, update, get, remove, onDisconnect } from "firebase/database";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";

export default function ImposterGameUI() {
  const { locale, dictionary } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  
  // Game states
  const [roomCode, setRoomCode] = useState<string>("");
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerRole, setPlayerRole] = useState<string | null>(null);
  const [secretWord, setSecretWord] = useState<string | null>(null);
  
  // Local UI states
  const [activePlayerIndex, setActivePlayerIndex] = useState<number>(0);
  const [showRoleCard, setShowRoleCard] = useState<boolean>(false);
  const [selectedVoteId, setSelectedVoteId] = useState<string | null>(null);
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [joinUrl, setJoinUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  // Remote Client Join states
  const [remoteJoinMode, setRemoteJoinMode] = useState(false);
  const [remotePlayerName, setRemotePlayerName] = useState("");
  const [remoteRegistered, setRemoteRegistered] = useState(false);
  
  const [scanCount, setScanCount] = useState<number>(3452);

  // 1. Initial Authentication & Cleanup Sweeper
  useEffect(() => {
    setMounted(true);
    
    // Auth Listener
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setPlayerId(user.uid);
      }
    });

    // Client-Triggered Cleanup Routine (Spark Plan)
    if (typeof window !== "undefined") {
      const savedCount = localStorage.getItem("total_qr_scans");
      let currentCount = savedCount ? parseInt(savedCount, 10) : 3452;
      setScanCount(currentCount);
    }

    // Trigger Anonymous Auth and catch disabled provider errors
    signInAnonymously(auth).catch((error) => {
      console.error("Firebase Anonymous Auth Failed:", error);
      if (error.code === "auth/operation-not-allowed") {
        setAuthError("Anonymous sign-in is disabled for this project. Please enable 'Anonymous' provider in your Firebase Console under Authentication > Sign-in method.");
      } else {
        setAuthError(`Authentication failed: ${error.message}`);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  // Client-triggered stale room cleanup (runs once player is authenticated)
  useEffect(() => {
    if (!playerId) return;

    const roomsRef = ref(database, "rooms");
    get(roomsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const rooms = snapshot.val();
        const cutoff = Date.now() - 3600000; // 60 minutes
        const updates: Record<string, null> = {};
        
        for (const code in rooms) {
          if (rooms[code].updatedAt < cutoff) {
            updates[`rooms/${code}`] = null;
            updates[`roomSecrets/${code}`] = null;
          }
        }
        if (Object.keys(updates).length > 0) {
          update(ref(database), updates).catch((err) => {
            console.log("Cleanup skipped due to permissions/active lock:", err.message);
          });
        }
      }
    }).catch((err) => {
      console.error("Cleanup scan failed:", err.message);
    });
  }, [playerId]);

  // 2. Room Discovery, Joining, and Connection State
  useEffect(() => {
    if (!playerId) return;

    const query = new URLSearchParams(window.location.search);
    const queryRoom = query.get("room");

    if (queryRoom) {
      // Remote Join Mode
      setRemoteJoinMode(true);
      setRoomCode(queryRoom);
      
      // Update scan count once
      const sessionScanKey = `scan_count_incremented_${queryRoom}`;
      if (!sessionStorage.getItem(sessionScanKey)) {
        sessionStorage.setItem(sessionScanKey, "true");
        const currentCount = scanCount + 1;
        setScanCount(currentCount);
        localStorage.setItem("total_qr_scans", currentCount.toString());
      }
    } else {
      // Host Mode: Check for reconnection or create new room
      const savedRoom = sessionStorage.getItem("imposter_host_room");
      if (savedRoom) {
        setRoomCode(savedRoom);
      } else {
        createNewRoom();
      }
    }
  }, [playerId]);

  // Create new unique room
  const createNewRoom = async () => {
    if (!playerId) return;
    
    let generated = "";
    let roomExists = true;
    
    // Uniqueness Collision check loop
    while (roomExists) {
      generated = generateRoomCode();
      const checkRef = ref(database, `rooms/${generated}`);
      const checkSnap = await get(checkRef);
      if (!checkSnap.exists()) {
        roomExists = false;
      }
    }

    const initialHostState = {
      roomCode: generated,
      status: "lobby",
      settings: {
        category: "movies",
        imposterCount: 1,
        discussionTimeSeconds: 180,
        scoreLimit: 5
      },
      players: {
        [playerId]: {
          id: playerId,
          name: "Host",
          isHost: true,
          isConnected: true,
          score: 0
        }
      },
      roundNumber: 1,
      currentTurnIndex: 0,
      updatedAt: Date.now()
    };

    try {
      // Rule requirement: Write /rooms/roomCode first before writing /roomSecrets
      await set(ref(database, `rooms/${generated}`), initialHostState);
      
      // Now write the secret mapping separately
      await set(ref(database, `roomSecrets/${generated}/playerRoles/${playerId}`), "civilian");

      // Configure onDisconnect for the Host
      const disconnectRef = ref(database, `rooms/${generated}/players/${playerId}/isConnected`);
      onDisconnect(disconnectRef).set(false);

      sessionStorage.setItem("imposter_host_room", generated);
      setRoomCode(generated);
    } catch (err: any) {
      console.error("Room creation failed:", err.message);
    }
  };

  // 3. Database Subscriptions
  useEffect(() => {
    if (!roomCode || !playerId) return;

    // Listen to Room changes
    const roomRef = ref(database, `rooms/${roomCode}`);
    const unsubscribeRoom = onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        const val = snapshot.val();
        // Convert players object back to array for compatibility with client logic
        const playersMap = val.players || {};
        const playersArray = Object.keys(playersMap).map(id => playersMap[id]);
        
        setGameState({
          ...val,
          players: playersArray
        });

        // Set join URL
        setJoinUrl(`${window.location.origin}${window.location.pathname}?room=${roomCode}`);

        // Handle Reconnection setup
        if (playersMap[playerId]) {
          const playerObj = playersMap[playerId];
          if (!playerObj.isConnected) {
            update(ref(database, `rooms/${roomCode}/players/${playerId}`), { isConnected: true });
          }
          if (remoteJoinMode) {
            setRemoteRegistered(true);
            setRemotePlayerName(playerObj.name);
          }
        }
      } else {
        setErrorMsg("Room not found or has been closed/deleted.");
        setGameState(null);
      }
    });

    // Listen to current player secrets (role & word)
    const roleRef = ref(database, `roomSecrets/${roomCode}/playerRoles/${playerId}`);
    const unsubscribeRole = onValue(roleRef, (snapshot) => {
      setPlayerRole(snapshot.exists() ? snapshot.val() : null);
    });

    // Listen to secret word (Only civilians can read)
    const wordRef = ref(database, `roomSecrets/${roomCode}/secretWord`);
    const unsubscribeWord = onValue(wordRef, (snapshot) => {
      setSecretWord(snapshot.exists() ? snapshot.val() : null);
    }, (error) => {
      // Imposter client will trigger Permission Denied here, which is expected & handled
      setSecretWord(null);
    });

    // Handle Connection drops automatically
    onValue(ref(database, ".info/connected"), (snap) => {
      if (snap.val() === true) {
        const disconnectRef = ref(database, `rooms/${roomCode}/players/${playerId}/isConnected`);
        onDisconnect(disconnectRef).set(false);
      }
    });


    return () => {
      unsubscribeRoom();
      unsubscribeRole();
      unsubscribeWord();
    };
  }, [roomCode, playerId]);

  // 4. Remote Player Join
  const registerRemotePlayer = async () => {
    if (!remotePlayerName.trim() || !roomCode || !playerId) return;
    
    try {
      // Check if slot already exists for reconnect
      const playerRef = ref(database, `rooms/${roomCode}/players/${playerId}`);
      const snap = await get(playerRef);

      if (snap.exists()) {
        // Reconnect
        await update(playerRef, { isConnected: true });
      } else {
        // Join as new player with exactly score: 0
        const newP = {
          id: playerId,
          name: remotePlayerName.trim(),
          isHost: false,
          isConnected: true,
          score: 0 // Secured via rules constraint (must be 0)
        };
        await set(playerRef, newP);

        // Configure server-side disconnect handler
        const disconnectRef = ref(database, `rooms/${roomCode}/players/${playerId}/isConnected`);
        onDisconnect(disconnectRef).set(false);
      }
      setRemoteRegistered(true);
    } catch (err: any) {
      console.error("Player join failed:", err.message);
    }
  };

  // 5. Game Setup & Category
  const addPlayer = async () => {
    if (!newPlayerName.trim() || !roomCode) return;
    const fakeId = `player-added-${Date.now()}`;
    const newP = {
      id: fakeId,
      name: newPlayerName.trim(),
      isHost: false,
      isConnected: true,
      score: 0
    };
    await set(ref(database, `rooms/${roomCode}/players/${fakeId}`), newP);
    setNewPlayerName("");
  };

  const removePlayer = async (id: string) => {
    if (!gameState || gameState.players.length <= 3) return;
    await remove(ref(database, `rooms/${roomCode}/players/${id}`));
  };

  const changeCategory = async (catId: string, localizedName: string) => {
    if (!roomCode) return;
    await update(ref(database, `rooms/${roomCode}`), {
      "settings/category": catId,
      "activeCategoryName": localizedName
    });
  };

  // 6. Core Game Loop Transitions
  const startRound = async () => {
    if (!gameState || !roomCode || !playerId) return;

    // Retrieve secret words
    const categoryDetail = getLocalizedCategory(gameState.settings.category, locale);
    const roundWords = categoryDetail.words.length > 0 ? categoryDetail.words : DEFAULT_WORD_CATEGORIES[0].words;
    const randomWord = roundWords[Math.floor(Math.random() * roundWords.length)];

    // Setup local game engine state to get assigned roles
    const localState = startNewRound({
      ...gameState,
      // Firebase mapping structure back to engine State object
      imposterIds: gameState.imposterIds || []
    });

    // Create updates block for /rooms/$roomCode
    const roomUpdates: any = {
      status: "role-reveal",
      currentTurnIndex: 0,
      roundNumber: gameState.status === "lobby" ? 1 : localState.roundNumber,
      winner: null,
      activeCategoryName: categoryDetail.name,
      updatedAt: Date.now()
    };

    // Reset player states in public space
    localState.players.forEach(p => {
      roomUpdates[`players/${p.id}/hasVoted`] = false;
      roomUpdates[`players/${p.id}/votedForId`] = null;
      roomUpdates[`players/${p.id}/clue`] = null;
    });

    // Rule requirement: Write /rooms/roomCode first before writing /roomSecrets
    await update(ref(database, `rooms/${roomCode}`), roomUpdates);

    // Update /roomSecrets separately with the roles & words
    const secretUpdates: any = {
      secretWord: randomWord
    };
    localState.players.forEach(p => {
      secretUpdates[`playerRoles/${p.id}`] = p.role;
    });

    await update(ref(database, `roomSecrets/${roomCode}`), secretUpdates);
    
    setActivePlayerIndex(0);
    setShowRoleCard(false);
  };

  const handleNextPlayerReveal = async () => {
    if (!gameState || !roomCode) return;
    setShowRoleCard(false);
    
    if (activePlayerIndex + 1 < gameState.players.length) {
      setActivePlayerIndex(activePlayerIndex + 1);
    } else {
      // Transition to clue-giving state
      await update(ref(database, `rooms/${roomCode}`), {
        status: "clue-giving",
        currentTurnIndex: 0,
        updatedAt: Date.now()
      });
    }
  };

  const submitClue = async (clueText: string) => {
    if (!clueText.trim() || !roomCode || !playerId) return;
    
    // Save clue to player node
    await update(ref(database, `rooms/${roomCode}/players/${playerId}`), {
      clue: clueText.trim()
    });

    // If all active players submitted clues, proceed automatically to discussion
    if (gameState) {
      const nextIndex = gameState.currentTurnIndex + 1;
      if (nextIndex < gameState.players.length) {
        await update(ref(database, `rooms/${roomCode}`), {
          currentTurnIndex: nextIndex,
          updatedAt: Date.now()
        });
      } else {
        await update(ref(database, `rooms/${roomCode}`), {
          status: "discussion",
          timerRemaining: gameState.settings.discussionTimeSeconds,
          updatedAt: Date.now()
        });
      }
    }
  };

  const submitVote = async (targetId: string) => {
    if (!roomCode || !playerId || !gameState) return;
    
    await update(ref(database, `rooms/${roomCode}/players/${playerId}`), {
      hasVoted: true,
      votedForId: targetId
    });

    // Check if everyone has voted
    const snap = await get(ref(database, `rooms/${roomCode}/players`));
    const playersMap = snap.val() || {};
    const playersList = Object.keys(playersMap).map(id => playersMap[id]);
    
    const allVoted = playersList.every(p => p.hasVoted);
    if (allVoted) {
      // Tally votes
      const votes: Record<string, number> = {};
      playersList.forEach(p => {
        if (p.votedForId) {
          votes[p.votedForId] = (votes[p.votedForId] || 0) + 1;
        }
      });

      // Find player with max votes
      let maxVotePlayerId = "";
      let maxVotes = 0;
      playersList.forEach(p => {
        if ((votes[p.id] || 0) > maxVotes) {
          maxVotes = votes[p.id];
          maxVotePlayerId = p.id;
        }
      });

      // Get secrets to check if the voted player is imposter
      const rolesSnap = await get(ref(database, `roomSecrets/${roomCode}/playerRoles`));
      const roles = rolesSnap.val() || {};
      const votedRole = roles[maxVotePlayerId];

      const imposterCaught = votedRole === "imposter";
      const winner = imposterCaught ? "civilians" : "imposters";

      if (imposterCaught) {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      // Update scores & log winner (Only host is allowed to write winner/scores)
      if (gameState.players.find(p => p.id === playerId && p.isHost)) {
        const updates: any = {
          status: "game-over",
          winner: winner,
          updatedAt: Date.now()
        };

        playersList.forEach(p => {
          let scoreIncrease = 0;
          if (winner === "civilians" && roles[p.id] === "civilian") {
            scoreIncrease = 1;
          } else if (winner === "imposters" && roles[p.id] === "imposter") {
            scoreIncrease = 2;
          }
          if (scoreIncrease > 0) {
            updates[`players/${p.id}/score`] = p.score + scoreIncrease;
          }
        });

        await update(ref(database, `rooms/${roomCode}`), updates);
      }
    }
  };

  // 7. Render Loading states
  if (authError) {
    return (
      <div className="max-w-xl mx-auto space-y-4 my-10 p-6 bg-red-50 dark:bg-red-950/20 border-2 border-red-500 rounded-2xl shadow-xl text-center">
        <h2 className="font-pixel text-xl text-red-650 dark:text-red-400 font-extrabold">⚠️ Authentication Setup Needed</h2>
        <p className="font-sans text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
          {authError}
        </p>
        <div className="text-xs font-sans font-semibold text-slate-650 dark:text-slate-400 pt-2">
          (This is required to sync multiplayer game rooms in real time)
        </div>
      </div>
    );
  }

  if (!mounted || !playerId) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0284c7]"></div>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="max-w-xl mx-auto space-y-4 my-10 p-6 bg-[var(--bg-card)] border-2 border-red-500 rounded-2xl shadow-xl text-center">
        <h2 className="font-pixel text-xl text-rose-500 font-extrabold">Room Error</h2>
        <p className="font-sans text-sm text-slate-800 dark:text-slate-200 font-semibold">{errorMsg}</p>
        <button onClick={() => window.location.href = "/play/"} className="pixel-btn pixel-btn-yellow mt-4">
          Return to Play Hub
        </button>
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0284c7]"></div>
      </div>
    );
  }

  const currentPlayer = gameState.players.find(p => p.id === playerId);
  const isHost = currentPlayer?.isHost || false;

  // Render Remote Mobile Client Join Interface
  if (remoteJoinMode) {
    return (
      <div className="w-full max-w-md mx-auto my-10 p-6 bg-[var(--bg-card)] border-2 border-[var(--border-main)] rounded-2xl shadow-2xl">
        <div className="text-center space-y-4">
          <Smartphone className="w-12 h-12 text-[#0284c7] dark:text-[#06b6d4] mx-auto animate-pulse" />
          <h2 className="font-pixel text-xl text-slate-900 dark:text-slate-100 font-extrabold">IMPOSTER REMOTE PAD</h2>
          <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200">
            Room Code: <span className="text-[#d97706] dark:text-[#fbbf24] font-bold">{roomCode}</span>
          </p>

          {!remoteRegistered ? (
            <div className="space-y-4 pt-4">
              <input
                type="text"
                placeholder="Enter your name..."
                value={remotePlayerName}
                onChange={(e) => setRemotePlayerName(e.target.value)}
                className="w-full bg-[var(--bg-card-alt)] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 font-arcade text-lg font-bold rounded-xl focus:outline-none focus:border-[#fbbf24] text-center"
              />
              <button
                onClick={registerRemotePlayer}
                className="pixel-btn pixel-btn-yellow w-full py-3 text-base font-bold"
              >
                Join Game Room
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-left">
              {gameState.status === 'lobby' && (
                <div className="bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-500 p-6 rounded-xl space-y-3 pt-6 text-center">
                  <h3 className="font-pixel text-base text-emerald-800 dark:text-emerald-300 font-extrabold">✅ You're In the Lobby!</h3>
                  <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                    Waiting for the host to select category and start the round...
                  </p>
                </div>
              )}

              {gameState.status === 'role-reveal' && (
                <div className="bg-[var(--bg-card-alt)] border-2 border-[#fbbf24] p-6 rounded-2xl text-center space-y-4">
                  <h3 className="font-pixel text-lg text-slate-900 dark:text-slate-100 font-bold">Secret Assignment</h3>
                  {!showRoleCard ? (
                    <button onClick={() => setShowRoleCard(true)} className="pixel-btn pixel-btn-yellow w-full font-bold">
                      View My Secret Word
                    </button>
                  ) : (
                    <div className={`p-6 rounded-xl border-2 space-y-3 ${
                      playerRole === "imposter" 
                        ? "bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-900" 
                        : "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900"
                    }`}>
                      {playerRole === "imposter" ? (
                        <>
                          <div className="text-4xl">🤫</div>
                          <h4 className="font-pixel text-xl text-rose-600 dark:text-rose-400 font-bold">YOU ARE THE IMPOSTER!</h4>
                          <p className="text-xs font-sans font-semibold text-slate-700 dark:text-slate-350">
                            Improvise your clues and blend in!
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="text-4xl">🔑</div>
                          <h4 className="font-pixel text-xs text-emerald-700 dark:text-emerald-400 font-bold">Your Word:</h4>
                          <div className="font-pixel text-2xl text-amber-600 dark:text-[#fbbf24] font-extrabold">{secretWord || "Loading..."}</div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              {gameState.status === 'clue-giving' && (
                <div className="space-y-4">
                  <h3 className="font-pixel text-base text-slate-900 dark:text-slate-100 font-bold">
                    {gameState.players[gameState.currentTurnIndex]?.id === playerId 
                      ? "🔥 Your Turn to Submit Clue!" 
                      : `Waiting for ${gameState.players[gameState.currentTurnIndex]?.name} to submit clue...`}
                  </h3>

                  {gameState.players[gameState.currentTurnIndex]?.id === playerId && (
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Type your single-word clue..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            submitClue((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = "";
                          }
                        }}
                        className="w-full bg-[var(--bg-card-alt)] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 font-arcade text-lg font-bold rounded-xl focus:outline-none"
                      />
                      <p className="text-xs text-slate-500 font-semibold">Press Enter to submit.</p>
                    </div>
                  )}
                </div>
              )}

              {gameState.status === 'discussion' && (
                <div className="bg-[var(--bg-card-alt)] border-2 border-[#10b981] p-6 rounded-2xl text-center space-y-4">
                  <h3 className="font-pixel text-[#10b981] font-bold">Discussion Phase</h3>
                  <p className="text-sm font-sans font-semibold text-slate-800 dark:text-slate-200">
                    Review and debate submitted clues on the main screen!
                  </p>
                </div>
              )}

              {gameState.status === 'voting' && (
                <div className="space-y-4">
                  <h3 className="font-pixel text-lg text-rose-500 font-bold text-center">Cast Your Vote</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {gameState.players.filter(p => p.id !== playerId).map(p => (
                      <button
                        key={p.id}
                        onClick={() => submitVote(p.id)}
                        className={`p-3.5 border-2 rounded-xl text-left font-arcade text-xl font-bold flex justify-between items-center transition-all ${
                          currentPlayer?.votedForId === p.id 
                            ? "bg-rose-500 text-white border-slate-900" 
                            : "bg-[var(--bg-card-alt)] border-slate-200"
                        }`}
                      >
                        <span>👤 {p.name}</span>
                        {currentPlayer?.votedForId === p.id && <CheckCircle className="w-5 h-5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {gameState.status === 'game-over' && (
                <div className="bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-500 p-6 rounded-xl space-y-3 text-center">
                  <h3 className="font-pixel text-emerald-800 dark:text-emerald-300 font-extrabold">Round Over</h3>
                  <p className="text-sm font-sans font-semibold text-slate-800 dark:text-slate-200">
                    Winner: <strong className="uppercase">{gameState.winner}</strong>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render Host / Big Screen UI
  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      
      {/* Game Window Chrome Header */}
      <div className="bg-[var(--bg-card-alt)] border-2 border-[var(--border-main)] rounded-t-2xl p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 bg-rose-500 rounded-full" />
          <div className="w-3.5 h-3.5 bg-amber-500 rounded-full" />
          <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full" />
          <span className="font-pixel text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase tracking-wider ml-2 font-extrabold">
            ROOM: {roomCode || 'IMP-ROOM'}
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
              <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">SETUP LOBBY</span>
              <h2 className="font-pixel text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 font-bold">Gather Thy Fellowship</h2>
              <p className="font-sans text-base text-slate-800 dark:text-slate-100 max-w-md mx-auto font-semibold leading-relaxed">
                Add players (3-20), select a word category, then click start to receive secret words.
              </p>
            </div>

            {/* QR Scan Remote Joining Panel */}
            <div className="bg-[var(--bg-card-alt)] border-2 border-[#0284c7] dark:border-[#06b6d4] p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-2 text-left">
                <h4 className="font-pixel text-base text-[#0284c7] dark:text-[#06b6d4] font-bold flex items-center gap-2">
                  <QrCode className="w-5 h-5" /> Play From Your Phone (Remote Mode)
                </h4>
                <p className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 max-w-md">
                  Everyone scan the QR code to join this game lobby instantly from their own smartphones! No manual room codes required.
                </p>
                <div className="text-xs font-arcade font-bold text-[#16a34a] dark:text-[#34d399] mt-2 bg-[#d1fae5] dark:bg-emerald-950/60 px-3 py-1.5 rounded-lg inline-block shadow-xs border border-emerald-300 dark:border-emerald-800">
                  🔥 QR Code Scanned: {scanCount.toLocaleString()} times
                </div>
              </div>
              {joinUrl && (
                <div className="relative bg-white p-3 border-2 border-slate-900 rounded-xl shrink-0 shadow-md flex items-center justify-center overflow-hidden" style={{width: 176, height: 176}}>
                  <QRCodeSVG
                    value={joinUrl}
                    size={150}
                    level="H"
                    includeMargin={false}
                    style={{width: 150, height: 150, display: 'block'}}
                    aria-label="Scan QR code to join the Imposter game lobby on your phone"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 bg-[#fbbf24] border-2 border-slate-900 rounded-lg flex items-center justify-center font-pixel text-slate-900 text-sm shadow-[1px_1px_0px_#0f172a] shrink-0">
                      👾
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Category Selector Grid */}
            <div>
              <label className="font-pixel text-xs text-[#0284c7] dark:text-[#06b6d4] uppercase block mb-3 font-extrabold">1. {dictionary.languageSelectLabel}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DEFAULT_WORD_CATEGORIES.map(cat => {
                  const localizedCat = getLocalizedCategory(cat.id, locale);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => changeCategory(cat.id, localizedCat.name)}
                      className={`p-4 border-2 rounded-xl text-left font-arcade transition-all cursor-pointer ${
                        gameState.settings.category === cat.id
                          ? 'bg-[#0284c7] dark:bg-[#06b6d4] text-white dark:text-slate-950 border-slate-900 shadow-md font-bold scale-[1.02]'
                          : 'bg-[var(--bg-card-alt)] text-slate-900 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#0284c7]'
                      }`}
                    >
                      <div className="text-3xl">{cat.icon}</div>
                      <div className="font-bold text-lg mt-1">{localizedCat.name}</div>
                      <div className="text-xs font-sans opacity-90 font-semibold">{cat.words.length} words</div>
                    </button>
                  );
                })}
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
                  <Plus className="w-4 h-4 inline mr-1" /> Add
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {gameState.players.map((p) => (
                  <div key={p.id} className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-3.5 rounded-xl flex items-center justify-between font-arcade text-xl font-bold text-slate-900 dark:text-slate-100 shadow-sm">
                    <span className="truncate">👤 {p.name} {!p.isConnected && "(Disconnected)"}</span>
                    {gameState.players.length > 3 && isHost && (
                      <button
                        onClick={() => removePlayer(p.id)}
                        className="text-rose-500 hover:text-rose-700 p-1 font-bold cursor-pointer"
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
            {isHost && (
              <div className="text-center pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={startRound}
                  className="pixel-btn pixel-btn-cyan text-base sm:text-lg w-full sm:w-auto px-10 py-4 font-extrabold shadow-lg"
                >
                  🎮 {dictionary.playNowButton}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ROLE REVEAL STATE */}
        {gameState.status === 'role-reveal' && (
          <div className="text-center space-y-6 max-w-lg mx-auto py-6">
            <span className="pixel-badge bg-[#0284c7] dark:bg-[#06b6d4] text-white dark:text-slate-950 font-bold">PASS & PLAY SECRET CARD</span>
            
            <h3 className="font-pixel text-xl sm:text-2xl text-slate-900 dark:text-slate-100 font-bold">
              Pass Device To: <span className="text-[#d97706] dark:text-[#fbbf24]">{gameState.players[activePlayerIndex]?.name}</span>
            </h3>

            {!showRoleCard ? (
              <div className="bg-[var(--bg-card-alt)] border-2 border-[#fbbf24] p-8 rounded-2xl space-y-4 shadow-lg">
                <div className="text-5xl animate-bounce">🔒</div>
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-100">
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
                playerRole === 'imposter'
                  ? 'bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-200'
                  : 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-200'
              }`}>
                {playerRole === 'imposter' ? (
                  <>
                    <div className="text-5xl animate-pulse">🤫</div>
                    <h4 className="font-pixel text-2xl text-rose-600 dark:text-rose-400 font-bold">YOU ARE THE IMPOSTER!</h4>
                    <p className="font-sans text-base font-semibold text-slate-850 dark:text-slate-100 leading-relaxed">
                      You do not know the secret word! Listen carefully to other players' clues and bluff your way through!
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-5xl">🔑</div>
                    <h4 className="font-pixel text-xs text-emerald-750 dark:text-emerald-400 uppercase font-bold">Your Secret Word:</h4>
                    <div className="font-pixel text-3xl text-amber-600 dark:text-[#fbbf24] tracking-wider py-3 bg-white/80 dark:bg-black/40 border-2 border-emerald-500 rounded-xl font-extrabold">
                      {secretWord || "Loading..."}
                    </div>
                    <p className="font-sans text-sm font-semibold text-slate-850 dark:text-slate-100 leading-relaxed">
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

        {/* CLUE GIVING STATE */}
        {gameState.status === 'clue-giving' && (
          <div className="space-y-6 text-center max-w-lg mx-auto py-4 animate-fadeIn">
            <span className="pixel-badge bg-[#0284c7] dark:bg-[#06b6d4] text-white font-bold">CLUE SUBMISSION</span>
            <h3 className="font-pixel text-xl sm:text-2xl text-[#d97706] dark:text-[#fbbf24] font-bold">
              Clue Turn: {gameState.players[gameState.currentTurnIndex]?.name}
            </h3>

            {gameState.players[gameState.currentTurnIndex]?.id === playerId ? (
              <div className="bg-[var(--bg-card-alt)] border-2 border-[#fbbf24] p-8 rounded-2xl space-y-4 shadow-lg">
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-100">
                  It's your turn to submit a clue! Type a single word or short phrase that describes the secret word without giving it away to the Imposter.
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    id="local-clue-input"
                    placeholder="Enter your clue..."
                    className="w-full bg-[var(--bg-card-alt)] border-2 border-slate-350 dark:border-slate-700 p-3 font-arcade text-lg text-slate-900 dark:text-white rounded-xl focus:outline-none focus:border-[#fbbf24]"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        submitClue((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = "";
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById("local-clue-input") as HTMLInputElement;
                      if (input) {
                        submitClue(input.value);
                        input.value = "";
                      }
                    }}
                    className="pixel-btn pixel-btn-yellow w-full"
                  >
                    Submit Clue
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-8 rounded-2xl text-center space-y-3">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0284c7] mx-auto"></div>
                <p className="font-sans text-base text-slate-800 dark:text-slate-200">
                  Waiting for {gameState.players[gameState.currentTurnIndex]?.name} to submit a clue...
                </p>
              </div>
            )}

            {/* List of already submitted clues */}
            <div className="space-y-2 text-left pt-4">
              <h4 className="font-pixel text-xs text-slate-500 uppercase">Submitted Clues:</h4>
              <div className="grid grid-cols-2 gap-2">
                {gameState.players.map(p => (
                  <div key={p.id} className="bg-[var(--bg-card-alt)] p-3 rounded-lg border border-slate-200 dark:border-slate-800 font-arcade text-lg">
                    <span className="font-bold text-slate-700 dark:text-slate-300">👤 {p.name}: </span>
                    <span className="text-emerald-600 dark:text-emerald-400">{p.clue || "(Waiting...)"}</span>
                  </div>
                ))}
              </div>
            </div>
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
              <span className="font-arcade text-base text-slate-800 dark:text-slate-100 uppercase tracking-widest mt-1 block font-bold">Discussion Time Left</span>
            </div>

            {/* List of submitted clues */}
            <div className="space-y-2 text-left pt-4 max-w-xl mx-auto">
              <h4 className="font-pixel text-xs text-slate-500 uppercase">All Clues:</h4>
              <div className="grid grid-cols-2 gap-2">
                {gameState.players.map(p => (
                  <div key={p.id} className="bg-[var(--bg-card-alt)] p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 font-arcade text-lg">
                    <span className="font-bold text-slate-700 dark:text-slate-300">👤 {p.name}: </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{p.clue || "(No Clue)"}</span>
                  </div>
                ))}
              </div>
            </div>

            {isHost && (
              <button
                onClick={async () => {
                  await update(ref(database, `rooms/${roomCode}`), {
                    status: 'voting',
                    updatedAt: Date.now()
                  });
                }}
                className="pixel-btn pixel-btn-pink text-sm px-8 py-3.5 font-bold"
              >
                🗳️ Skip to Voting Phase
              </button>
            )}
          </div>
        )}

        {/* VOTING STATE */}
        {gameState.status === 'voting' && (
          <div className="space-y-6 text-center max-w-lg mx-auto py-4">
            <span className="pixel-badge bg-[#e11d48] dark:bg-[#f43f5e] text-white font-bold">VOTING PHASE</span>
            <h3 className="font-pixel text-2xl text-[#e11d48] dark:text-[#f43f5e] font-bold">Cast Thy Judgment</h3>
            <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-100">
              Select the player your group suspects of being the secret Imposter:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {gameState.players.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedVoteId(p.id)}
                  className={`p-4 border-2 rounded-xl font-arcade text-2xl font-bold flex items-center justify-between transition-all cursor-pointer ${
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
              onClick={() => {
                if (selectedVoteId) {
                  submitVote(selectedVoteId);
                }
              }}
              className={`pixel-btn pixel-btn-pink w-full py-4 text-base font-bold cursor-pointer ${!selectedVoteId ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Confirm Vote Selection
            </button>
          </div>
        )}

        {/* GAME OVER & REVEAL STATE */}
        {gameState.status === 'game-over' && (
          <div className="text-center space-y-6 max-w-lg mx-auto py-6">
            <span className="pixel-badge bg-[#fbbf24] text-slate-950 font-bold">ROUND RESULTS</span>

            {gameState.winner === 'civilians' ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/90 border-2 border-emerald-500 p-6 rounded-2xl space-y-3 shadow-lg">
                <div className="text-5xl">🏆</div>
                <h3 className="font-pixel text-2xl text-emerald-700 dark:text-emerald-400 font-bold">CIVILIANS WIN!</h3>
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-100">
                  You successfully caught the secret Imposter!
                </p>
              </div>
            ) : (
              <div className="bg-rose-50 dark:bg-rose-950/90 border-2 border-rose-500 p-6 rounded-2xl space-y-3 shadow-lg">
                <div className="text-5xl">👺</div>
                <h3 className="font-pixel text-2xl text-rose-700 dark:text-rose-400 font-bold">IMPOSTER WINS!</h3>
                <p className="font-sans text-base font-semibold text-slate-800 dark:text-slate-100">
                  The Imposter fooled the group and escaped detection!
                </p>
              </div>
            )}

            {/* Revealed Details */}
            <div className="bg-[var(--bg-card-alt)] border border-slate-300 dark:border-slate-800 p-5 rounded-xl space-y-2 text-left font-arcade text-xl font-bold text-slate-900 dark:text-slate-100">
              <div>🔑 <strong>Secret Word Was:</strong> <span className="text-[#d97706] dark:text-[#fbbf24]">{gameState.secretWord || "(Host-only Secret)"}</span></div>
              <div>👺 <strong>Secret Imposter Was:</strong> <span className="text-[#e11d48] dark:text-[#f43f5e]">{gameState.players.find(p => gameState.imposterIds?.includes(p.id))?.name || "The Imposter"}</span></div>
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

            {isHost && (
              <button
                onClick={startRound}
                className="pixel-btn pixel-btn-yellow w-full py-4 text-base font-bold cursor-pointer"
              >
                <RefreshCw className="w-5 h-5 inline mr-2" /> Play Next Round!
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
