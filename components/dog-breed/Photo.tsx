import { useState, useEffect } from "react";
import type { InitialState, Action } from "@/lib/dog-breed/types";

export default function Photo({ photo, index, dispatch }: {
    photo: string;
    index: number;
    dispatch: React.Dispatch<Action> ;

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
                className={`rounded-lg relative h-40 lg:h-80 bg-cover bg-center cursor-pointer ${
                    disabled && "grayscale cursor-not-allowed"
                }`}
                style={{
                    backgroundImage: `url(${photo})`,
                }}
            >
                {disabled && (
                    <div className="bg-black/60 absolute w-full h-full flex items-center backdrop-blur-sm justify-center">
                        <p className="text-center text-white capitalize text-xl">
                            Breed: {photo.split("/")[4].replace("-", " ")}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
