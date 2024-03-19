import ms from "ms";

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

import hero from "/public/apple/assets/images/hero.jpeg";

export const heroImg = hero;

// import hmv from "/public/apple/assets/videos/hero.mp4";
// import smallmv from "/public/apple/assets/videos/smallHero.mp4";
// import highlightFirstmv from "/public/apple/assets/videos/highlight-first.mp4";
// import highlightSectmv from "/public/apple/assets/videos/hightlight-third.mp4";
// import highlightThirdmv from "/public/apple/assets/videos/hightlight-sec.mp4";
// import highlightFourthmv from "/public/apple/assets/videos/hightlight-fourth.mp4";
// import exploremv from "/public/apple/assets/videos/explore.mp4";
// import framemv from "/public/apple/assets/videos/frame.mp4";

import apple from "/public/apple/assets/images/apple.svg";
import search from "/public/apple/assets/images/search.svg";
import bag from "/public/apple/assets/images/bag.svg";
import watch from "/public/apple/assets/images/watch.svg";
import right from "/public/apple/assets/images/right.svg";
import replay from "/public/apple/assets/images/replay.svg";
import play from "/public/apple/assets/images/play.svg";
import pause from "/public/apple/assets/images/pause.svg";

import yellow from "/public/apple/assets/images/yellow.jpg";
import blue from "/public/apple/assets/images/blue.jpg";
import white from "/public/apple/assets/images/white.jpg";
import black from "/public/apple/assets/images/black.jpg";
import explore1 from "/public/apple/assets/images/explore1.jpg";
import explore2 from "/public/apple/assets/images/explore2.jpg";
import chip from "/public/apple/assets/images/chip.jpeg";
import frame from "/public/apple/assets/images/frame.png";

// export const heroVideo = hmv;
// export const smallHeroVideo = smallmv;
// export const highlightFirstVideo = highlightFirstmv;
// export const highlightSecondVideo = highlightSectmv;
// export const highlightThirdVideo = highlightThirdmv;
// export const highlightFourthVideo = highlightFourthmv;
// export const exploreVideo = exploremv;
// export const frameVideo = framemv;

export const appleImg = apple;
export const searchImg = search;
export const bagImg = bag;
export const watchImg = watch;
export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const yellowImg = yellow;
export const blueImg = blue;
export const whiteImg = white;
export const blackImg = black;
export const explore1Img = explore1;
export const explore2Img = explore2;
export const chipImg = chip;
export const frameImg = frame;
