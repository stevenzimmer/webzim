import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Nav from "@/components/layout/Nav";

describe("Nav", () => {
  it("renders the primary navigation links for the home page sections", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: /steven zimmer/i })).toBeDefined();
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeDefined();
    expect(
      screen.getByRole("link", { name: "Work" }).getAttribute("href"),
    ).toBe("/#work");
    expect(
      screen.getByRole("link", { name: "Projects" }).getAttribute("href"),
    ).toBe("/#projects");
    expect(
      screen.getByRole("link", { name: "Contact" }).getAttribute("href"),
    ).toBe("/#contact");
  });
});
