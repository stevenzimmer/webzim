"use client";
import { fetchAnime } from "@/lib/action";
import { useEffect, useState } from "react";
import { useInView }from "react-intersection-observer";
import {ISItemProp} from "@/lib/types"
import ISSection from "./ISSection";


export default function LoadMore() {
  const [ref, inView] = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
  const [page, setPage] = useState(2);
  useEffect(() => {
    if (inView) {
      console.log("Load more");
      fetchAnime(page).then((res) => {
        // console.log(res);
        setData([...data, ...res]);
        setPage(page + 1);
      });
    }
  }, [inView]);
  return (
    <>
    <ISSection data={data} />

    <section className='text-center text-2xl text-white py-20'>
      <div ref={ref}>
      Loading More...
      </div>
   
    </section>
    </>
  )
}
