"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";
export default function AllottedChats() {
  const { previousChats } = useContext(ZimGPTContext);
  return (
    <>
      {previousChats.length >= 20 && (
        <div className="mt-6 rounded bg-amber-700 p-3 ">
          <p className="mb-3 text-sm text-slate-300">
            You have exceeded the number of chats messages allotted for testing.
            You are welcome to review your previous chats.
          </p>
          <p>
            Please email if you like what you&apos;ve seen:
            stevenzimmer40@gmail.com
          </p>
        </div>
      )}
    </>
  );
}
