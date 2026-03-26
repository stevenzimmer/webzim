import { useState, useEffect } from "react";
import type { InitialState, Action } from "@/lib/dog-breed/types";

export default function Photo({
  photo,
  index,
  dispatch,
}: {
  photo: string;
  index: number;
  dispatch: React.Dispatch<Action>;
}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(false);
  }, [photo]);

  return (
    <>
      <div
        onClick={() => {
          if (!disabled) {
            dispatch({
              type: "guessAttempt",
              value: index,
            });
            setDisabled(true);
          }
        }}
        className={`relative h-40 cursor-pointer overflow-hidden rounded-lg border bg-cover bg-center lg:h-80 ${
          disabled
            ? "cursor-not-allowed border-slate-800 grayscale"
            : "border-transparent hover:border-teal-200"
        }`}
        style={{
          backgroundImage: `url(${photo})`,
        }}
      >
        {disabled && (
          <div className="absolute flex h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm">
            <p className="text-center text-xl capitalize text-white">
              Breed: {photo.split("/")[4].replace("-", " ")}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
