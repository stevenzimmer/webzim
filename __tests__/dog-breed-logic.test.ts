import { produce } from "immer";
import { describe, expect, it, vi } from "vitest";

import { initialState } from "@/lib/dog-breed/initialState";
import onlyUniqueBreeds from "@/lib/dog-breed/onlyUniqueBreeds";
import ourReducer from "@/lib/dog-breed/reducer";
import type { Action, DogQuestion } from "@/lib/dog-breed/types";

function reduce(state: typeof initialState, action: Action) {
  return produce(state, (draft) => {
    ourReducer(draft, action);
  });
}

function expectQuestion(
  question: typeof initialState.currentQuestion,
): asserts question is DogQuestion {
  expect(question).not.toBeNull();
}

describe("onlyUniqueBreeds", () => {
  it("keeps one photo per breed, drops invalid entries, and returns groups of four", () => {
    const pics = [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_10022.jpg",
      "https://images.dog.ceo/breeds/akita/Akita Inu.jpg",
      "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
      "https://images.dog.ceo/breeds/boxer/n02108089_1003.jpg",
      "https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg",
    ];

    expect(onlyUniqueBreeds(pics)).toEqual([
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_10022.jpg",
      "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
      "https://images.dog.ceo/breeds/boxer/n02108089_1003.jpg",
    ]);
  });
});

describe("dog breed reducer", () => {
  it("starts a new game using the first four photos and resets score state", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.4);

    const state = reduce(
      {
        ...initialState,
        points: 9,
        strikes: 2,
        timeRemaining: 12,
        bigCollection: [
          "https://images.dog.ceo/breeds/pug/a.jpg",
          "https://images.dog.ceo/breeds/beagle/b.jpg",
          "https://images.dog.ceo/breeds/boxer/c.jpg",
          "https://images.dog.ceo/breeds/corgi/d.jpg",
          "https://images.dog.ceo/breeds/doberman/e.jpg",
        ],
      },
      { type: "startPlaying" },
    );

    expect(state.playing).toBe(true);
    expect(state.points).toBe(0);
    expect(state.strikes).toBe(0);
    expect(state.timeRemaining).toBe(30);
    expectQuestion(state.currentQuestion);
    expect(state.currentQuestion.photos).toEqual(
      state.bigCollection.slice(0, 4),
    );
    expect(state.currentQuestion.answer).toBe(1);

    vi.restoreAllMocks();
  });

  it("rewards correct guesses, grants bonus time after three in a row, and advances the question", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.75);

    const state = reduce(
      {
        ...initialState,
        playing: true,
        timeRemaining: 10,
        inARow: 2,
        points: 2,
        bigCollection: [
          "https://images.dog.ceo/breeds/pug/a.jpg",
          "https://images.dog.ceo/breeds/beagle/b.jpg",
          "https://images.dog.ceo/breeds/boxer/c.jpg",
          "https://images.dog.ceo/breeds/corgi/d.jpg",
          "https://images.dog.ceo/breeds/doberman/e.jpg",
          "https://images.dog.ceo/breeds/husky/f.jpg",
          "https://images.dog.ceo/breeds/labrador/g.jpg",
          "https://images.dog.ceo/breeds/shiba/h.jpg",
        ],
        currentQuestion: {
          breed: "pug",
          photos: [
            "https://images.dog.ceo/breeds/pug/a.jpg",
            "https://images.dog.ceo/breeds/beagle/b.jpg",
            "https://images.dog.ceo/breeds/boxer/c.jpg",
            "https://images.dog.ceo/breeds/corgi/d.jpg",
          ],
          answer: 0,
        },
      },
      {
        type: "guessAttempt",
        value: 0,
      },
    );

    expect(state.points).toBe(3);
    expect(state.inARow).toBe(0);
    expect(state.timeRemaining).toBe(15);
    expectQuestion(state.currentQuestion);
    expect(state.currentQuestion.photos).toEqual([
      "https://images.dog.ceo/breeds/doberman/e.jpg",
      "https://images.dog.ceo/breeds/husky/f.jpg",
      "https://images.dog.ceo/breeds/labrador/g.jpg",
      "https://images.dog.ceo/breeds/shiba/h.jpg",
    ]);

    vi.restoreAllMocks();
  });

  it("ends the game after three incorrect guesses", () => {
    const state = reduce(
      {
        ...initialState,
        playing: true,
        strikes: 2,
        currentQuestion: {
          breed: "pug",
          photos: [],
          answer: 1,
        },
      },
      { type: "guessAttempt", value: 0 },
    );

    expect(state.strikes).toBe(3);
    expect(state.playing).toBe(false);
    expect(state.inARow).toBe(0);
  });

  it("requests more photos when the collection gets low", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    const state = reduce(
      {
        ...initialState,
        bigCollection: [
          "https://images.dog.ceo/breeds/pug/a.jpg",
          "https://images.dog.ceo/breeds/beagle/b.jpg",
          "https://images.dog.ceo/breeds/boxer/c.jpg",
          "https://images.dog.ceo/breeds/corgi/d.jpg",
        ],
      },
      { type: "startPlaying" },
    );

    expect(state.fetchCount).toBe(1);

    vi.restoreAllMocks();
  });
});
