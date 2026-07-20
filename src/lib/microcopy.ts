export interface MicrocopyItem {
  retroDisplay: string;
  plainAccessibilityFallback: string;
}

export const UI_MICROCOPY: Record<string, MicrocopyItem> = {
  startGame: {
    retroDisplay: "Begin the Deceit",
    plainAccessibilityFallback: "Start game with selected options"
  },
  createRoom: {
    retroDisplay: "Forge a Gathering",
    plainAccessibilityFallback: "Create a new private or public room"
  },
  joinRoom: {
    retroDisplay: "Enter the Hall",
    plainAccessibilityFallback: "Join an existing game room with a room code"
  },
  playAgain: {
    retroDisplay: "Once More, Deceiver!",
    plainAccessibilityFallback: "Restart game and play another round"
  },
  copyInvite: {
    retroDisplay: "Summon Thy Fellowship",
    plainAccessibilityFallback: "Copy room invitation link to clipboard"
  },
  submitVote: {
    retroDisplay: "Cast Thy Judgment",
    plainAccessibilityFallback: "Submit your vote for suspected imposter"
  },
  revealImposter: {
    retroDisplay: "Unmask the Deceiver",
    plainAccessibilityFallback: "Reveal the imposter identity and result"
  },
  waitingPlayers: {
    retroDisplay: "Awaiting more souls...",
    plainAccessibilityFallback: "Waiting for more players to join the lobby"
  },
  noRoomsFound: {
    retroDisplay: "The hall stands empty. Forge thy own.",
    plainAccessibilityFallback: "No active public rooms found. Create your own room."
  },
  loadingGame: {
    retroDisplay: "Gathering the words of power...",
    plainAccessibilityFallback: "Loading game data and initializing roles"
  },
  connectionLost: {
    retroDisplay: "The thread is severed. Reconnecting...",
    plainAccessibilityFallback: "Network connection lost. Attempting to reconnect."
  },
  roomFull: {
    retroDisplay: "This hall has no more seats.",
    plainAccessibilityFallback: "Room is full. Maximum players reached."
  },
  invalidWord: {
    retroDisplay: "That word isn't in the list — try another.",
    plainAccessibilityFallback: "Invalid word submitted. Please select a valid word."
  }
};
