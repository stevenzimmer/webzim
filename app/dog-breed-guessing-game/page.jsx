"use client";
import { useEffect, useRef } from "react";
import { useImmerReducer } from "use-immer";

import Link from "next/link";

// Helpers
import ourReducer from "@/lib/dog-breed/reducer";
import { initialState } from "@/lib/dog-breed/initialState";
import onlyUniqueBreeds from "@/lib/dog-breed/onlyUniqueBreeds";

// Components
import HeartIcon from "@/components/dog-breed/HeartIcon";
import PlayButton from "@/components/dog-breed/PlayButton";
import HomeScreen from "@/components/dog-breed/HomeScreen";
import KillScreen from "@/components/dog-breed/KillScreen";
import Photo from "@/components/dog-breed/Photo";
import Layout from "@/components/layout";

export default function DogBreedGuessingGame() {

  const timer = useRef(null);
  
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

    useEffect(() => {
        dispatch({
            type: "receiveHighScore",
            value: localStorage.getItem("highScore"),
        });
    }, []);

    useEffect(() => {
        if (state.highScore > 0) {
            localStorage.setItem("highScore", state.highScore);
        }
    }, [state.highScore]);

    useEffect(() => {
        if (state.bigCollection.length) {
            state.bigCollection.slice(0, 8).forEach((pic) => {
                new Image().src = pic;
            });
        }
    }, [state.bigCollection]);

    useEffect(() => {
        if (state.playing) {
            timer.current = setInterval(() => {
                dispatch({ type: "decreaseTime" });
            }, 1000);
            return () => {
                clearInterval(timer.current);
            };
        }
    }, [state.playing]);

    useEffect(() => {
        const reqController = new AbortController();
        async function fetchDogs() {
            try {
                const picsPromise = await fetch(
                    "https://dog.ceo/api/breeds/image/random/50",
                    {
                        signal: reqController.signal,
                    }
                );
                const pix = await picsPromise.json();
                const uniquePix = onlyUniqueBreeds(pix.message);

                dispatch({
                    type: "addToCollection",
                    value: uniquePix,
                });
            } catch (error) {}
        }
        fetchDogs();

        return () => {
            reqController.abort();
        };
    }, [state.fetchCount]);


  return (        
  <Layout  meta={{title: "Dog Breed Guessing Game | Webzim Project", "description": "Demonstration of state management using Immer and dog.ceo API"}}>    
     
        <Link href="/" className="font-bold  mb-4 block">&#8592; Back home</Link>
     
        {state.currentQuestion && (
          <div className="w-full py-20">
              <div className="text-center mb-6">
                  <span className="text-zing-300 mr-3">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className={`inline-block ${
                              state.playing && "animate-spin"
                          }`}
                          viewBox="0 0 16 16"
                      >
                          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                      </svg>
                  </span>
                  <span className="font-mono text-3xl relative top-2 ml-3">
                      0:
                      {state.timeRemaining < 10
                          ? `0${state.timeRemaining}`
                          : state.timeRemaining}
                  </span>
                  {[...Array(3 - state.strikes)].map(
                      (item, i) => {
                          return (
                              <HeartIcon
                                  className={`inline text-pink-300 mx-1`}
                                  key={i}
                              />
                          );
                      }
                  )}
                  {[...Array(state.strikes)].map((item, i) => {
                      return (
                          <HeartIcon
                              className={`inline text-pink-300 opacity-50 mx-1`}
                              key={i}
                          />
                      );
                  })}
              </div>
              <h1 className="text-center text-4xl md:text-7xl mb-6 capitalize">
                  {state.currentQuestion.breed.replace("-", " ")}
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-20">
                  {state.currentQuestion?.photos?.map(
                      (photo, i) => {
                          return (
                              <Photo
                                  key={i}
                                  index={i}
                                  photo={photo}
                                  dispatch={dispatch}
                              />
                          );
                      }
                  )}
              </div>
          </div>
      )}
      {state.playing === false &&
          Boolean(state.bigCollection.length) &&
          !state.currentQuestion && (
              <div className="max-w-[800px] py-20">
                  <HomeScreen />
                  <PlayButton dispatch={dispatch}>
                      Play
                  </PlayButton>
              </div>
      )}
      {(state.timeRemaining <= 0 || state.strikes >= 3) && state.currentQuestion && (
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md text-center text-white flex items-center justify-center">
                <div className="px-12">
                    <KillScreen state={state} />
                    <PlayButton dispatch={dispatch}>
                        Play Again
                    </PlayButton>
                </div>
            </div>
      )}
  </Layout>

  )
}