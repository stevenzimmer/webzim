"use client";

import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useRef, useState, useTransition } from "react";

export default function SearchBar() {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();

  const handleSearch = () => {
    const trimmedSearch = search.trim();
    if (!trimmedSearch) {
      return;
    }

    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(trimmedSearch)}`);
    });
  };

  return (
    <form
      className="flex h-14 w-full flex-col"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
    >
      <label htmlFor={inputId} className="sr-only">
        Search the site
      </label>
      <div className="relative h-full">
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          value={search}
          disabled={isSearching}
          placeholder="Search projects and pages"
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring relative z-10 flex h-full w-full rounded-md border bg-white px-3 py-3 text-sm text-slate-800 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleSearch();
            }

            if (event.key === "Escape") {
              inputRef.current?.blur();
            }
          }}
        />
        <button
          type="submit"
          disabled={isSearching}
          aria-label="Search"
          className="absolute inset-y-0 right-0 z-10 h-full w-16 rounded-l-none bg-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSearching ? (
            <Loader2 className="h-full w-full animate-spin px-3 text-white" />
          ) : (
            <Search className="h-full w-full px-3 text-white" />
          )}
        </button>
      </div>
    </form>
  );
}
