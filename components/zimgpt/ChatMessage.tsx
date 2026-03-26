"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";

export default function ChatMessage() {
  const { previousChats, currentTitle } = useContext(ZimGPTContext);
  return (
    <>
      {" "}
      {previousChats !== null &&
        previousChats
          .filter((chat, index) => {
            return chat.title === currentTitle;
          })
          .map((chat, index) => {
            return (
              <div
                key={index}
                className={`rounded p-6 text-left ${chat.role === "user" ? "bg-slate-700" : ""}`}
              >
                <div className="">
                  <p className="text-sm text-slate-300">{chat.role}</p>
                  <p className="text-lg text-slate-50">{chat.content}</p>
                </div>
              </div>
            );
          })}
    </>
  );
}
