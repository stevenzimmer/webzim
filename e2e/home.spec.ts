import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("renders the main sections", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { level: 1, name: "Steven Zimmer" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: "Recent Freelance Work" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: "Personal Projects" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Ready to ship a fast, polished product experience?",
      }),
    ).toBeVisible();
  });

  test("navigates to the projects section from the primary nav", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Projects" }).click();

    await expect(page).toHaveURL(/#projects$/);
    await expect(
      page.getByRole("heading", { level: 2, name: "Personal Projects" }),
    ).toBeVisible();
  });
});
