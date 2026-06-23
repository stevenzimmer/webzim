import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";

function createTestLocalStorage(): Storage {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.get(key) ?? null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
  };
}

const testLocalStorage = createTestLocalStorage();

function useTestLocalStorage() {
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: testLocalStorage,
  });

  Object.defineProperty(window, "localStorage", {
    configurable: true,
    value: testLocalStorage,
  });
}

beforeEach(() => {
  useTestLocalStorage();
});

afterEach(() => {
  useTestLocalStorage();
  localStorage.clear();
  cleanup();
});
