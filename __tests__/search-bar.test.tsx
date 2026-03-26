import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import SearchBar from "@/components/search/SearchBar";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push,
  }),
}));

describe("SearchBar", () => {
  beforeEach(() => {
    push.mockReset();
  });

  it("navigates to the search results when the search button is clicked", () => {
    render(<SearchBar />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "iphone" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    expect(push).toHaveBeenCalledWith("/search?q=iphone");
  });

  it("navigates on Enter and blurs the field on Escape", () => {
    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { value: "macbook" },
    });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(push).toHaveBeenCalledWith("/search?q=macbook");

    input.focus();
    expect(document.activeElement).toBe(input);
    fireEvent.keyDown(input, { key: "Escape" });
    expect(document.activeElement).not.toBe(input);
  });
});
