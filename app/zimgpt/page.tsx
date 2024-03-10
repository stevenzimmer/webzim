import { Metadata } from "next";
import Header from "@/components/layout/header";
import Input from "@/components/zimgpt/input";
import AllottedChats from "@/components/zimgpt/allottedChats";
import Hamburger from "@/components/zimgpt/hamburger";
import ChatMessage from "@/components/zimgpt/ChatMessage";
import Sidebar from "@/components/zimgpt/Sidebar";
import Loader from "@/components/zimgpt/Loader";
import Nav from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "ZimGPT | WebDev Zim Project",
  description:
    "A showcase of the OpenAI API and SDK, React, TypeScript, State Management, and Context API.",
};

export default function ZimGPT() {
  return (
    <div className="relative flex text-slate-50">
      <Sidebar />
      <section className="h-screen w-full overflow-scroll  p-6 ">
        <Nav />
        <div className="mx-auto max-w-[650px] py-12 lg:py-20">
          <div className="flex w-full items-center justify-center">
            <Hamburger />
            <div>
              <Header>ZimGPT </Header>
            </div>
          </div>

          <AllottedChats />
          <div className="my-12 ">
            <ChatMessage />

            <Loader />
            <div className="relative z-10 my-12 w-full  ">
              <Input />
            </div>

            <p className="mt-6 text-center text-sm text-slate-300">
              ZimGPT is far from perfect and can make mistakes. Consider
              checking important information. Also API calls are not free nor
              cheap so users are limited to 10 chat messages. Please chat
              responsibly. :)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
