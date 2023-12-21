"use client";
import { fetchWeeklyChart } from "@/lib/action";
import { useEffect, useState } from "react";
import { useInView }from "react-intersection-observer";
import ISSection from "./ISSection";
import {format} from "date-fns";
import { ISItemProp } from "@/lib/types";

const currentDate = format(new Date(), "yyyy-MM-dd");

// console.log({currentDate})

export default function LoadMore() {
  const [ref, inView] = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [date, setDate] = useState(currentDate);
  useEffect(() => {
    if (inView) {
      // console.log("in view");

      fetchWeeklyChart(date, pageNumber).then((res) => {
        // console.log({res});
        if(!res) return;
        
        if(!isIterable(res)) return;
        
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


function isIterable(obj : any) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}