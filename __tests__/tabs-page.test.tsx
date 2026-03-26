import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Tabs from "../app/tabs/page";

describe("Tabs page", () => {
  it("uses the tabId query param for the initial tab selection", async () => {
    window.history.replaceState({}, "", "http://localhost/tabs?tabId=lunch");

    render(<Tabs />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Enjoy our tasty lunch menu, perfect for a midday meal.",
        ),
      ).toBeDefined();
    });
  });

  it("switches tabs and updates the URL query param", () => {
    window.history.replaceState({}, "", "http://localhost/tabs");

    render(<Tabs />);

    fireEvent.click(screen.getByRole("button", { name: "Dinner" }));

    expect(
      screen.getByText("End your day with our exquisite dinner selections."),
    ).toBeDefined();
    expect(window.location.search).toContain("tabId=dinner");
  });
});
