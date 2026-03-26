"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";
import MobileBGOverlay from "./mobileBGOverlay";
import Close from "./close";
import CreateNewChat from "./createNewChat";
import AllottedChats from "./allottedChats";
import Subheader from "@/components/layout/subheader";
import NewChat from "./newChat";
import PreviousChats from "./previousChats";
import Link from "next/link";
export default function Sidebar() {
  const { mobileOpen } = useContext(ZimGPTContext);
  return (
    <>
      <MobileBGOverlay />

      <aside
        className={`absolute z-50 flex h-screen w-4/5 flex-col justify-between bg-slate-800 p-6 shadow-lg transition-transform duration-200 lg:relative lg:w-1/4 lg:-translate-x-0 ${mobileOpen ? "" : "-translate-x-full"}`}
      >
        <Close />
        <CreateNewChat />

        <AllottedChats />
        <nav className="my-6 h-full border-t py-6">
          <div className="lg:hidden">
            <Subheader>Previous Chats</Subheader>
          </div>

          <ul>
            <NewChat />
            <PreviousChats />
          </ul>
        </nav>
      </aside>
    </>
  );
}
