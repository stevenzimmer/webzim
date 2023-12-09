"use client";
import Board from "@/components/tic-tac-toe/Board";
import { useState, useEffect } from "react";
const PLAYER_X = "X";
const PLAYER_O = "O";
export default function TicTacToeWrapper() {

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [winningStrike, setWinningStrike] = useState("");
const [winner, setWinner] = useState<null | string>(null);
  useEffect(( ) => {
    setWinner(checkWinner(tiles));
  }, [tiles]);

  const winningCombos = [
    {
      combo: [0,1,2],
      strikeClass: "strike-row-1"
    },
    {
      combo: [3,4,5],
      strikeClass: "strike-row-2"
    },
    {
      combo: [6,7,8],
      strikeClass: "strike-row-3"
    },
    {
      combo: [0,3,6],
      strikeClass: "strike-col-1"
    },
    {
      combo: [1,4,7],
      strikeClass: "strike-col-2"
    },
    {
      combo: [2,5,8],
      strikeClass: "strike-col-3"
    },
    {
      combo: [0,4,8],
      strikeClass: "strike-diag-1"
    },
    {
      combo: [2,4,6],
      strikeClass: "strike-diag-2"
    }
  ]
  
  const checkWinner = (tiles: Array<string>) => {
  
    for (let i = 0; i < winningCombos.length; i++) {
      const [a,b,c] = winningCombos[i].combo;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setWinningStrike(winningCombos[i].strikeClass);
        return tiles[a];
      }
    }
    return null;
  }
  const handleTileClick = (i: number) => {
    const newTiles = [...tiles];
    if (newTiles[i] ) {
      return;
    }
    newTiles[i] = playerTurn;
    setTiles(newTiles);
    setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
  }
  return (
    <>
      <Board winningStrike={winningStrike} playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} />
      {winningStrike && (
        <>
          <div className={`border-dotted border-emerald-400 border-4 p-6 text-xl text-center mt-12 text-white`}>
            Player {winner} wins!
          </div>     
          <button className={`mt-12 p-6 rounded text-white w-full text-2xl bg-blue-400`} onClick={() => {
            setTiles(Array(9).fill(null));
            setPlayerTurn(PLAYER_X);
            setWinningStrike("");
          }}>Reset</button>
        </>
      )}

      {!winningStrike && !tiles.includes(null) && (
        <>
        <div className={`border-dotted border-red-400 border-4 p-6 text-xl text-center mt-12 text-white`}>
          Draw!
        </div>     
        <button className={`mt-12 p-6 rounded text-white w-full text-2xl bg-blue-400`} onClick={() => {
          setTiles(Array(9).fill(null));
          setPlayerTurn(PLAYER_X);
          setWinningStrike("");
        }}>Reset</button>
      </>
      )}
    </>
  )
}
