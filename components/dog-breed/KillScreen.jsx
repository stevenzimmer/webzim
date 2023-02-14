import React from "react";

export default function KillScreen({ state }) {
    return (
        <div>
            <h2 className="font-semibold text-5xl mb-3">Game over</h2>

            <p className="text-xl font-mono mb-3">
                {state.timeRemaining <= 0 && "Time ran out"}
                {state.strikes >= 3 && "Three strikes, you're out"}
            </p>
            <p className="text-xl mb-3 text-amber-400 ">
                Your Score:{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="inline-block relative bottom-1 mx-1"
                    viewBox="0 0 16 16"
                >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span className="font-semibold">{state.points}</span>
            </p>
            <p className="text-xl mb-3">
                Your all time High score: {state.highScore}
            </p>
        </div>
    );
}
