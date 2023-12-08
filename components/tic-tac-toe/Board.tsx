import React from 'react'
import Tile from './Tile'
import Strike from './Strike'
import styles from "@/styles/TicTacToe.module.css"

export default function Board({tiles, onTileClick, playerTurn, winningStrike}: {tiles: Array<string>, onTileClick: (i: number) => void; playerTurn: string; winningStrike: string}) {

  return (
    <>
      <div className=''>
        <p className="text-lg text-center mb-4 font-semibold text-white">Player {playerTurn}&apos;s turn</p>
      </div>
      <div className='bg-slate-800 py-12'>      
        <div className={`${styles.board} grid relative place-content-center overflow-hidden rounded-lg shadow-white`}>
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
      </div>

    </>
)
}
