import type { Draft } from "immer";
import type { Action, DogQuestion, InitialState } from "@/lib/dog-breed/types";

const PHOTOS_PER_QUESTION = 4;
const FETCH_THRESHOLD = 12;

function generateQuestion(draft: Draft<InitialState>): DogQuestion {
  if (draft.bigCollection.length <= FETCH_THRESHOLD) {
    draft.fetchCount += 1;
  }

  if (draft.currentQuestion) {
    draft.bigCollection = draft.bigCollection.slice(PHOTOS_PER_QUESTION);
  }

  const justFour = draft.bigCollection.slice(0, PHOTOS_PER_QUESTION);
  const answer = Math.floor(Math.random() * justFour.length);

  return {
    breed: justFour[answer].split("/")[4],
    photos: justFour,
    answer,
  };
}

export default function dogBreedReducer(
  draft: Draft<InitialState>,
  action: Action,
) {
  if (draft.points > draft.highScore) {
    draft.highScore = draft.points;
  }

  switch (action.type) {
    case "receiveHighScore":
      draft.highScore = action.value || 0;
      return;

    case "decreaseTime":
      if (draft.timeRemaining <= 0) {
        draft.playing = false;
      } else {
        draft.timeRemaining -= 1;
      }
      return;

    case "guessAttempt":
      if (!draft.playing || !draft.currentQuestion) {
        return;
      }

      if (action.value === draft.currentQuestion.answer) {
        draft.points += 1;
        draft.inARow += 1;
        draft.currentQuestion = generateQuestion(draft);
      } else {
        draft.strikes += 1;
        draft.inARow = 0;

        if (draft.strikes >= 3) {
          draft.playing = false;
        }
      }

      if (draft.inARow === 3) {
        draft.timeRemaining += 5;
        draft.inARow = 0;
      }
      return;

    case "addToCollection":
      draft.bigCollection = draft.bigCollection.concat(action.value);
      return;

    case "startPlaying":
      draft.points = 0;
      draft.timeRemaining = 30;
      draft.strikes = 0;
      draft.playing = true;
      draft.currentQuestion = generateQuestion(draft);
      return;
  }
}
