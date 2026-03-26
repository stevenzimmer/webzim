import React from "react";

export default function KillScreen({
  state,
}: {
  state: {
    timeRemaining: number;
    strikes: number;
    points: number;
    highScore: number;
  };
}) {
  return (
    <div>
      <h2 className="mb-3 text-5xl font-semibold">Game over</h2>

      <p className="mb-3 font-mono text-xl">
        {state.timeRemaining <= 0 && "Time ran out"}
        {state.strikes >= 3 && "Three strikes, you're out"}
      </p>
      <p className="mb-3 text-xl text-amber-400">
        Your Score:{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="relative bottom-1 mx-1 inline-block"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <span className="font-semibold">{state.points}</span>
      </p>
      <p className="mb-3 text-xl">
        Your all time High score: {state.highScore}
      </p>
    </div>
  );
}
