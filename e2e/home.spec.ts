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
        name: "Need a faster, clearer web platform?",
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

  test("opens mobile navigation in a drawer", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open navigation menu" }).click();

    await expect(
      page.getByRole("navigation", { name: "Mobile primary" }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Contact" }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.getByRole("navigation", { name: "Mobile primary" }),
    ).toBeHidden();
  });
});
