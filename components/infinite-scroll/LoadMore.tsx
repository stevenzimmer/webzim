"use client";
import { fetchWeeklyChart } from "@/lib/action";
import { useEffect, useState } from "react";
import { useInView }from "react-intersection-observer";
import ISSection from "./ISSection";

export default function LoadMore() {
  const [ref, inView] = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
 const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    if (inView) {
      console.log("in view");

      fetchWeeklyChart("2022-10-08", pageNumber).then((res) => {
        console.log({res});
        if(!res) return;
        
        setData([...data, ...res as JSX.Element[]]);
        setPageNumber(pageNumber + 1);
     
      });
    }
  }, [inView]);
  return (
    <>
    {pageNumber !== 0 && (
      <ISSection data={data} />
    )}


      <section className='text-center text-2xl text-white py-20'>
        <div ref={ref}>
          Loading More...
        </div>
      </section>
    </>
  )
}
