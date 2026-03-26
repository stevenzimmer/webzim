import { describe, expect, it } from "vitest";

describe("search page", () => {
  it("renders nothing when the query is missing so the layout can show the search input", async () => {
    const mod = await import("../app/search/page");

    expect(mod.default({ searchParams: {} })).toBeNull();
  });

  it("renders the query when a valid search param is provided", async () => {
    const mod = await import("../app/search/page");
    const result = mod.default({ searchParams: { q: "airpods" } });

    if (!result) {
      throw new Error("Expected the search page to render a result");
    }

    expect(result.props.children).toBe("airpods");
  });
});
