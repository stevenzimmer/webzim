"use client";

import { useEffect, useRef } from "react";
import { useImmerReducer } from "use-immer";
import Header from "@/components/layout/header";
import HeartIcon from "@/components/dog-breed/HeartIcon";
import HomeScreen from "@/components/dog-breed/HomeScreen";
import KillScreen from "@/components/dog-breed/KillScreen";
import Photo from "@/components/dog-breed/Photo";
import PlayButton from "@/components/dog-breed/PlayButton";
import { initialState } from "@/lib/dog-breed/initialState";
import onlyUniqueBreeds from "@/lib/dog-breed/onlyUniqueBreeds";
import ourReducer from "@/lib/dog-breed/reducer";
import type { Action, DogImage, InitialState } from "@/lib/dog-breed/types";

type DogApiResponse = {
  message: DogImage[];
};

export default function DogBreedWrapper() {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [state, dispatch] = useImmerReducer<InitialState, Action>(
    ourReducer,
    initialState,
  );

  useEffect(() => {
    dispatch({
      type: "receiveHighScore",
      value: Number(localStorage.getItem("highScore")),
    });
  }, [dispatch]);

  useEffect(() => {
    if (state.highScore > 0) {
      localStorage.setItem("highScore", String(state.highScore));
    }
  }, [state.highScore]);

  useEffect(() => {
    if (state.bigCollection.length) {
      state.bigCollection.slice(0, 8).forEach((pic) => {
        const image = new Image();
        image.src = pic;
      });
    }
  }, [state.bigCollection]);

  useEffect(() => {
    if (!state.playing) {
      return;
    }

    timer.current = setInterval(() => {
      dispatch({ type: "decreaseTime" });
    }, 1000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [dispatch, state.playing]);

  useEffect(() => {
    const reqController = new AbortController();

    async function fetchDogs() {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/50",
          {
            signal: reqController.signal,
          },
        );
        const data = (await response.json()) as DogApiResponse;
        const uniquePics = onlyUniqueBreeds(data.message);

        dispatch({
          type: "addToCollection",
          value: uniquePics,
        });
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Unable to fetch dog images", error);
        }
      }
    }

    fetchDogs();

    return () => {
      reqController.abort();
    };
  }, [dispatch, state.fetchCount]);

  return (
    <>
      {state.currentQuestion && (
        <div className="w-full pb-20">
          <div className="mb-6 text-center">
            <span className="mr-3 text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#fffff"
                className={`inline-block ${state.playing ? "animate-spin" : ""}`}
                viewBox="0 0 16 16"
              >
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </span>
            <span className="relative top-2 ml-3 font-mono text-3xl text-white">
              0:
              {state.timeRemaining < 10
                ? `0${state.timeRemaining}`
                : state.timeRemaining}
            </span>
            {[...Array(3 - state.strikes)].map((_, index) => {
              return (
                <HeartIcon
                  className="mx-1 inline text-pink-300"
                  key={`heart-${index}`}
                />
              );
            })}
            {[...Array(state.strikes)].map((_, index) => {
              return (
                <HeartIcon
                  className="mx-1 inline text-pink-300 opacity-50"
                  key={`heart-strike-${index}`}
                />
              );
            })}
          </div>
          <div className="text-center">
            <Header>{state.currentQuestion.breed.replace("-", " ")}</Header>
          </div>

          <div className="grid grid-cols-2 gap-5 px-5 py-12 lg:grid-cols-4">
            {state.currentQuestion.photos.map((photo, index) => {
              return (
                <Photo
                  key={photo}
                  index={index}
                  photo={photo}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
        </div>
      )}
      {state.playing === false &&
        Boolean(state.bigCollection.length) &&
        !state.currentQuestion && (
          <div className="mx-auto max-w-[800px] pb-20">
            <HomeScreen />
            <PlayButton dispatch={dispatch}>Play</PlayButton>
          </div>
        )}
      {(state.timeRemaining <= 0 || state.strikes >= 3) &&
        state.currentQuestion && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-center text-white backdrop-blur-md">
            <div className="px-12">
              <KillScreen state={state} />
              <PlayButton dispatch={dispatch}>Play Again</PlayButton>
            </div>
          </div>
        )}
    </>
  );
}
