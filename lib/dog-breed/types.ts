export type DogImage = string;

export type DogQuestion = {
  breed: string;
  photos: DogImage[];
  answer: number;
};

export type InitialState = {
  points: number;
  strikes: number;
  timeRemaining: number;
  highScore: number;
  bigCollection: DogImage[];
  currentQuestion: DogQuestion | null;
  playing: boolean;
  fetchCount: number;
  inARow: number;
};

export type Action =
  | { type: "receiveHighScore"; value: number }
  | { type: "decreaseTime" }
  | { type: "guessAttempt"; value: number }
  | { type: "addToCollection"; value: DogImage[] }
  | { type: "startPlaying" };
