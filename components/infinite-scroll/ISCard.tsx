import Image from "next/image";
import {ISItemProp} from "@/lib/types";
import { MotionDiv } from "./MotionDiv";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ISCard({item, index}: {
  item: ISItemProp;
  index: number;
}) {
  console.log({item});
  return (
    <MotionDiv
    variants={variants}
    initial='hidden'
    animate='visible'
    transition={{
      duration: 0.5,
      ease: "easeInOut",
      delay: index * 0.1,
    }}
    viewport={{ amount:0}}
    className='bg-gray-200 p-4 rounded-lg'>
      <p>#{item.rank}</p>
      <Image src={item.cover} alt={item.title} width={200} height={200} />
      <h3 className='text-lg font-bold'>{item.artist}</h3>
      <p className='text-sm'>{item.title}</p>
      <p>Weeks on Chart: {item.position.weeksOnChart}</p>
    </MotionDiv>
  )
}
