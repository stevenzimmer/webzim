import styles from "@/styles/TicTacToe.module.css";

export default function  Tile({className, value, onClick, playerTurn}: {className: string; value: string; onClick: () => void, playerTurn: string}) {
  // convert classname string to array
  const classNames = className?.split(' ');
  // add player turn class
  const hoverState = playerTurn === "X" ? "x-hover" : "o-hover";
  return (
    <div onClick={onClick} className={`text-current flex items-center justify-center text-3xl ${styles.tile} ${className && classNames.map( (className, i) =>  styles[className] + " ").join("") } ${!value && styles[hoverState]} ${!value && "hover:bg-slate-100 cursor-pointer"}`}>{value}</div>
  )
}
