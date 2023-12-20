
// import {ISItemProp} from "@/lib/types"
// import ISCard from './ISCard'

export default function ISSection({data}: {
  data: JSX.Element[];
  }) {
  return (
    <section className='py-2'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data}
      </div>
    </div>

  </section>
  )
}
