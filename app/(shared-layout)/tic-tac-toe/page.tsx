import type { Metadata } from 'next';
import Header from "@/components/layout/header";
import TicTacToeWrapper from "@/components/tic-tac-toe/Wrapper";

export const metadata: Metadata = {
  title: 'Tic Tac Toe | WebDev Zim Project',
  description: 'A showcase of React, State Management, and Tailwind CSS.',
};

export default function TicTacToe() {

  return (
      <div className="py-6 px-6 max-w-[800px] mx-auto">
          <div className='text-center'>
          <Header>Tic Tac Toe</Header>
          </div>

          <p className="text-center text-xl my-12 text-white ">
            A showcase of React, State Management, and TailwindCSS.
          </p>

          <TicTacToeWrapper />
          <div className='py-6'></div>
      </div>
  

  )
}

