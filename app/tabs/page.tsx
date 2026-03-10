"use client";
import { useState, useEffect } from "react";

const tabs = {
  breakfast: {
    name: "Breakfast",
    description: "Start your day with our delicious breakfast options.",
  },
  lunch: {
    name: "Lunch",
    description: "Enjoy our tasty lunch menu, perfect for a midday meal.",
  },
  dinner: {
    name: "Dinner",
    description: "End your day with our exquisite dinner selections.",
  },
};

type TabId = keyof typeof tabs;
type Tab = (typeof tabs)[TabId];

export default function Tabs() {
  const tabKeys = Object.keys(tabs) as TabId[];
  const tabsEntries = Object.entries(tabs) as [TabId, Tab][];
  const [activeTab, setActiveTab] = useState<TabId | null>(null);
  const isTabId = (value: string): value is TabId => value in tabs;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tabId = e.currentTarget.id as TabId;
    setActiveTab(tabId);

    const url = new URL(window.location.href);
    // const searchParams = new URLSearchParams(url.search);
    url.searchParams.set("tabId", tabId);
    // window.location.search = "?tabId=" + tabId;
    window.history.replaceState({}, "", url.toString());
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const tabId = searchParams.get("tabId");

    if (tabId && isTabId(tabId)) {
      setActiveTab(tabId);
    } else {
      setActiveTab(tabKeys[0]);
    }
  }, [tabKeys]);

  return (
    <div className="max-w-[800px] px-6 py-20">
      <div className="container">
        <div className="mb-6">
          {tabsEntries.map(([item, obj]) => {
            return (
              <button
                key={item}
                id={item}
                className={`mx-6 border px-3 py-1 ${
                  item === activeTab ? "bg-blue-50 text-slate-900" : ""
                }`}
                onClick={handleClick}
              >
                {obj.name}
              </button>
            );
          })}
        </div>
        <div className="text-center">
          {activeTab && tabs[activeTab].description}
        </div>
      </div>
    </div>
  );
}
