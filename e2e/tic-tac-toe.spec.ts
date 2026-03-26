import { expect, test } from "@playwright/test";

test.describe("tic tac toe", () => {
  test("plays a winning round and resets the board", async ({ page }) => {
    await page.goto("/tic-tac-toe");

    const tiles = page.getByRole("button", { name: /tile|empty tile/i });

    await tiles.nth(0).click();
    await tiles.nth(3).click();
    await tiles.nth(1).click();
    await tiles.nth(4).click();
    await tiles.nth(2).click();

    await expect(page.getByText("Player X wins!")).toBeVisible();

    const markedTiles = await tiles.evaluateAll((elements) =>
      elements.map((element) => element.textContent),
    );

    await tiles.nth(5).click();

    const afterExtraClick = await tiles.evaluateAll((elements) =>
      elements.map((element) => element.textContent),
    );
    expect(afterExtraClick).toEqual(markedTiles);

    await page.getByRole("button", { name: "Reset" }).click();

    await expect(page.getByText("Player X's turn")).toBeVisible();
    await expect(page.getByText("Player X wins!")).toHaveCount(0);
  });
});
