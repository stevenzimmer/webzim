import styles from "@/styles/TicTacToe.module.css";

export default function Tile({
  className,
  value,
  onClick,
  playerTurn,
}: {
  className: string;
  value: string;
  onClick: () => void;
  playerTurn: string;
}) {
  // convert classname string to array
  const classNames = className?.split(" ");
  // add player turn class
  const hoverState = playerTurn === "X" ? "x-hover" : "o-hover";
  return (
    <button
      type="button"
      aria-label={
        value ? `Tile ${value}` : `Empty tile for player ${playerTurn}`
      }
      onClick={onClick}
      className={`flex items-center justify-center text-3xl text-white ${
        styles.tile
      } ${
        className &&
        classNames.map((className) => styles[className] + " ").join("")
      } ${!value && styles[hoverState]} ${
        !value && "cursor-pointer hover:bg-slate-600"
      }`}
    >
      {value}
    </button>
  );
}
