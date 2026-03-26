import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TodoForm from "@/components/todos/form";

describe("TodoForm", () => {
  it("loads saved todos from localStorage and counts only incomplete items", async () => {
    localStorage.setItem(
      "todos",
      JSON.stringify([
        { title: "Ship feature", completed: false },
        { title: "Closed task", completed: true },
      ]),
    );

    render(<TodoForm />);

    await waitFor(() => {
      expect(screen.getByText("Ship feature")).toBeDefined();
      expect(screen.getByText("Closed task")).toBeDefined();
      expect(screen.getByText("Number of Todos: 1")).toBeDefined();
    });
  });

  it("adds a new task and persists it", () => {
    render(<TodoForm />);

    fireEvent.change(screen.getByRole("textbox", { name: "New task" }), {
      target: { value: "Write tests" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Add task" }));

    expect(screen.getByText("Write tests")).toBeDefined();
    expect(screen.getByText("Number of Todos: 1")).toBeDefined();
    expect(localStorage.getItem("todos")).toContain("Write tests");
  });

  it("marks a task complete, updates the incomplete count, and allows deleting it", async () => {
    localStorage.setItem(
      "todos",
      JSON.stringify([{ title: "Refactor app", completed: false }]),
    );

    render(<TodoForm />);

    await waitFor(() => {
      expect(screen.getByText("Refactor app")).toBeDefined();
    });

    fireEvent.click(screen.getByRole("checkbox"));

    expect(screen.getByText("Number of Todos: 0")).toBeDefined();
    expect(screen.getByRole("button", { name: "Delete Item" })).toBeDefined();
    expect(localStorage.getItem("todos")).toContain('"completed":true');

    fireEvent.click(screen.getByRole("button", { name: "Delete Item" }));

    expect(screen.queryByText("Refactor app")).toBeNull();
    expect(screen.getByText("Number of Todos: 0")).toBeDefined();
    expect(localStorage.getItem("todos")).toBe("[]");
  });
});
