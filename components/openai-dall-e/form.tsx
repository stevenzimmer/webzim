"use client";
import { useState } from "react";
export default function Form() {
  const [answer, setAnswer] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [prompt, setPrompt] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();
    if (prompt) {
      setErrorMsg("");
      setIsLoading(true);

      const response = await fetch("/api/get-painting", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      // console.log({data});
      setAiPrompt(data.aiPrompt);
      setAnswer(data.img);
      setIsLoading(false);
    } else {
      setErrorMsg("Please describe the image");
    }
  }

  async function handleChange(e: React.ChangeEvent<any>) {
    setPrompt(e.target.value);
  }
  return (
    <>
      <form className="our-form my-12" onSubmit={handleSubmit}>
        <input
          placeholder="Describe the image you want to generate..."
          className="mb-2 w-full rounded border-slate-200"
          type="text"
          onChange={handleChange}
        />
        <button
          disabled={isLoading}
          className="rounded bg-indigo-200 px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          Generate image
        </button>
      </form>
      <div className="h-screen">
        {errorMsg && <div>{errorMsg}</div>}

        {isLoading && (
          <div>
            <svg
              className="mx-auto mb-2 h-10 w-10 animate-spin text-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-center text-xl text-white">Generating Image</p>
          </div>
        )}

        {!isLoading && answer && (
          <div className="mx-auto mb-6 max-w-[512px] rounded bg-slate-800 p-6">
            <img
              className="aspect-square w-full"
              src={answer}
              alt={`${prompt} AI generated Image`}
            />
          </div>
        )}
        {aiPrompt && (
          <div className="rounded bg-slate-800 p-6 text-white">
            <p className="mb-3 font-semibold">Revised Prompt</p>
            <p> {aiPrompt}</p>
          </div>
        )}
      </div>
    </>
  );
}
