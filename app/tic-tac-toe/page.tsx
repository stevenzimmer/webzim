import type { Metadata } from 'next';
import Layout from "@/components/layout";
import Link from "next/link";
import Header from "@/components/layout/header";
import TicTacToeWrapper from "@/components/tic-tac-toe/Wrapper";

export const metadata: Metadata = {
  title: 'Tic Tac Toe | WebDev Zim Project',
  description: 'A showcase of React, State Management, and Tailwind CSS.',
};

export default function TicTacToe() {

  return (
    <Layout meta={{title: "Tic Tac Toe | Web Dev Zim Project", "description": "A showcase of React, State Management, and TailwindCSS."}}>
      <div className="py-20 px-6 max-w-[800px]">
        <div className="container">
          <Link href="/" className="font-bold mb-4 block text-white">&#8592; Back to Portfolio</Link>
      
          <Header>Tic Tac Toe</Header>

          <p className="text-center text-xl mb-6 text-white mt-6">
            A showcase of React, State Management, and TailwindCSS.
          </p>
          <TicTacToeWrapper />
        
      </div>
      </div>
      <div className="py-20"></div>
    </Layout>
  )
}

