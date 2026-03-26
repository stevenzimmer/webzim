import { expect, test } from "@playwright/test";

test.describe("search", () => {
  test("searches for a query from the search page", async ({ page }) => {
    await page.goto("/search");

    await page.getByRole("textbox").fill("ipad");
    await page.getByRole("button", { name: "Search" }).click();

    await expect(page).toHaveURL(/\/search\?q=ipad$/);
    await expect(page.getByText("ipad")).toBeVisible();
  });
});
