import type { Metadata } from "next";
import LoadMore from "@/components/infinite-scroll/LoadMore";
import Header from "@/components/layout/header";
import { fetchWeeklyChart } from "@/lib/action";
import ISSection from "@/components/infinite-scroll/ISSection";

// const currentDate = format(new Date(), "yyyy-MM-dd");

export const metadata: Metadata = {
  alternates: {
    canonical: "/infinite-scroll",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function InfiniteScroll() {
  // const data = await fetchWeeklyChart("2022-10-08", 0) as JSX.Element[];
  // console.log({data})
  return (
    <div className="py-20">
      <Header>Header</Header>
      {/* <ISSection data={data} /> */}
      <LoadMore />
    </div>
  );
}
