
import styles from "@/styles/TicTacToe.module.css"
export default function Strike({winningStrike}: {winningStrike: string}) {
  return (
    <div className={`absolute bg-amber-600 ${styles[winningStrike]}`}></div>
  )
}
