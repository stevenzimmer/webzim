import { expect, test } from "@playwright/test";

test.describe("tabs", () => {
  test("reads the initial tab from the URL and updates it on click", async ({
    page,
  }) => {
    await page.goto("/tabs?tabId=lunch");

    await expect(
      page.getByText("Enjoy our tasty lunch menu, perfect for a midday meal."),
    ).toBeVisible();

    await page.getByRole("button", { name: "Dinner" }).click();

    await expect(page).toHaveURL(/tabId=dinner$/);
    await expect(
      page.getByText("End your day with our exquisite dinner selections."),
    ).toBeVisible();
  });
});
