

export type InitialState = {
  points: number;
  strikes: number;
  timeRemaining: number;
  highScore: number;
  bigCollection: any[];
  currentQuestion: any;
  playing: boolean;
  fetchCount: number;
  inARow: number;
};

export type Action =
  | { type: "receiveHighScore"; value: number }
  | { type: "decreaseTime"; }
  | { type: "guessAttempt"; value: number }
  | { type: "addToCollection"; value: string }
  | { type: "startPlaying"; };
