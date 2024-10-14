import type { Metadata } from "next";
import Header from "@/components/layout/header";
import TicTacToeWrapper from "@/components/tic-tac-toe/Wrapper";

export const metadata: Metadata = {
  title: "Tic Tac Toe | WebDev Zim Project",
  description: "A showcase of React, State Management, and Tailwind CSS.",
  alternates: {
    canonical: "/tic-tac-toe",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TicTacToe() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-6">
      <div className="text-center">
        <Header>Tic Tac Toe</Header>
      </div>

      <p className="my-12 text-center text-xl text-white ">
        A showcase of React, State Management, and TailwindCSS.
      </p>

      <TicTacToeWrapper />
      <div className="py-6"></div>
    </div>
  );
}
