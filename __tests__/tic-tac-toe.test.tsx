import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TicTacToeWrapper from "@/components/tic-tac-toe/Wrapper";

describe("TicTacToeWrapper", () => {
  it("plays a winning game for X, stops further moves, and resets cleanly", () => {
    render(<TicTacToeWrapper />);

    const tiles = () =>
      screen.getAllByRole("button", { name: /tile|empty tile/i });

    expect(screen.getByText("Player X's turn")).toBeDefined();

    fireEvent.click(tiles()[0]);
    fireEvent.click(tiles()[3]);
    fireEvent.click(tiles()[1]);
    fireEvent.click(tiles()[4]);
    fireEvent.click(tiles()[2]);

    expect(screen.getByText("Player X wins!")).toBeDefined();
    expect(screen.getByText("Winner!")).toBeDefined();

    const beforeExtraClick = tiles().map((tile) => tile.textContent);
    fireEvent.click(tiles()[5]);
    expect(tiles().map((tile) => tile.textContent)).toEqual(beforeExtraClick);

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("Player X's turn")).toBeDefined();
    expect(screen.queryByText("Player X wins!")).toBeNull();
    expect(
      screen.getAllByRole("button", { name: /empty tile for player x/i }),
    ).toHaveLength(9);
  });

  it("shows a draw when all tiles are filled without a winner", () => {
    render(<TicTacToeWrapper />);

    const tiles = () =>
      screen.getAllByRole("button", { name: /tile|empty tile/i });

    [0, 1, 2, 4, 3, 5, 7, 6, 8].forEach((tileIndex) => {
      fireEvent.click(tiles()[tileIndex]);
    });

    expect(screen.getByText("Draw!")).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });
});
