import React from "react";

export default function HeartIcon({ className }: {
    className: string;
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={className}
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
        </svg>
    );
}
