import type { InitialState } from "@/lib/dog-breed/types";

export const initialState: InitialState = {
    points: 0,
    strikes: 0,
    timeRemaining: 0,
    highScore: 0,
    bigCollection: [],
    currentQuestion: null,
    playing: false,
    fetchCount: 0,
    inARow: 0,
};
