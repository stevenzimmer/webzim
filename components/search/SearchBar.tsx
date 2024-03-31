"use client";
import { Search, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>("");
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }

    if (e.key === "Escape") {
      inputRef?.current?.blur();
    }
  };

  const handleSearch = () => {
    startTransition(() => {
      router.push("/search?q=" + search);
    });
    console.log(inputRef.current?.value);
  };

  return (
    <div className="flex h-14 w-full flex-col ">
      <div className="relative h-full">
        <input
          disabled={isSearching}
          value={search}
          ref={inputRef}
          type="text"
          className="border-input
          bg-background
          ring-offset-background
          placeholder:text-muted-foreground
          focus-visible:ring-ring
          relative
          z-10
          flex
          h-full
          w-full
          rounded-md
          border
          bg-white
          px-3
          py-3
          text-sm
          text-slate-800
      focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          disabled={isSearching}
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 z-10 h-full w-16 rounded-l-none bg-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSearching ? (
            <Loader2 className="h-full w-full animate-spin px-3 text-white" />
          ) : (
            <Search className="h-full w-full px-3 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
