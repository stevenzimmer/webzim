"use server"

import ISCard from "@/components/infinite-scroll/ISCard";
import { ISItemProp } from "@/lib/types";

export const fetchAnime = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=6&order=popularity`)
  const data = await response.json();
  // console.log(data);
  return data.map((item: ISItemProp, index:number) => (
    <ISCard key={index} item={item} index={index} />
   ))
}