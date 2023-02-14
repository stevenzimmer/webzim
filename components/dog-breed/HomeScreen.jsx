import React from "react";

export default function HomeScreen() {
    return (
        <div className="max-w-[800px]">
            <h1 className="text-center mb-12  text-4xl md:text-7xl">
                Dog breed guessing game
            </h1>
            <div className="mb-12 text-left px-12">
                <p className="text-xl md:text-2xl font-semibold mb-2">Rules:</p>
                <ul className="list-disc pl-8">
                    <li>Choose the dog that corresponds to the breed.</li>
                    <li>You&apos;ll have 30 seconds to pick as many dog breeds.</li>
                    <li>You&apos;re allowed three incorrect guesses.</li>
                    <li>
                        If you guess three right in a row the timer will
                        increment 5 seconds.
                    </li>
                    <li>Your high score will be saved.</li>
                </ul>
            </div>
            <div className="mb-12 text-left px-12">
                <p className="text-xl md:text-2xl font-semibold mb-2">
                    Built with:
                </p>
                <ul className="list-disc pl-8">
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>Immer</li>
                    <li>dog.ceo API</li>
                </ul>
            </div>
        </div>
    );
}
