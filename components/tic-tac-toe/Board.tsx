import React from 'react'
import Tile from './Tile'
import Strike from './Strike'
import styles from "@/styles/TicTacToe.module.css"

export default function Board({tiles, onTileClick, playerTurn, winningStrike}: {tiles: Array<string>, onTileClick: (i: number) => void; playerTurn: string; winningStrike: string}) {

  return (
    <>
      <div className='mb-6'>
        <p className="text-lg text-center mb-4 font-semibold">Player {playerTurn}&apos;s turn</p>
      </div>
      <div className={`${styles.board} grid relative place-content-center`}>
        {tiles.map( (tile, i) => {
          let className = ""
          switch (i) {
            case 0:
            case 1:
            case 3:
            case 4:
              className = "right-border bottom-border"
              break;
            case 2:
            case 5:
              className = "bottom-border"
              break;
            case 6:
            case 7:
              className = "right-border"
              break;
          }
       
        return (
          <Tile playerTurn={playerTurn} onClick={() => onTileClick(i)} key={i} value={tile} className={className} /> 
        )})}
       <Strike winningStrike={winningStrike} />
      </div>
      
    </>
)
}
