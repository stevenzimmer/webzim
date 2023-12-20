import LoadMore from '@/components/infinite-scroll/LoadMore'
import Header from '@/components/layout/header'
import { fetchAnime } from '@/lib/action'

import ISSection from '@/components/infinite-scroll/ISSection'

export default async function InfiniteScroll() {
  const data = await fetchAnime(1);


  return (
    <div className='py-20'>
      <Header>
        Header
      </Header>
      <ISSection data={data} />
      <LoadMore />
     
    </div>
  )
}
