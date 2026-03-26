import { expect, test } from "@playwright/test";

test.describe("todos", () => {
  test("adds, persists, completes, and deletes a todo", async ({ page }) => {
    await page.goto("/todos");

    await page.getByRole("textbox", { name: "New task" }).fill("Ship tests");
    await page.getByRole("button", { name: "Add task" }).click();

    await expect(page.getByText("Ship tests")).toBeVisible();
    await expect(page.getByText("Number of Todos: 1")).toBeVisible();

    await page.reload();

    await expect(page.getByText("Ship tests")).toBeVisible();
    await expect(page.getByText("Number of Todos: 1")).toBeVisible();

    await page.getByRole("checkbox").check();

    await expect(page.getByText("Number of Todos: 0")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Delete Item" }),
    ).toBeVisible();

    await page.getByRole("button", { name: "Delete Item" }).click();

    await expect(page.getByText("Number of Todos: 0")).toBeVisible();
    await expect(page.getByText("Ship tests")).toHaveCount(0);
  });
});
