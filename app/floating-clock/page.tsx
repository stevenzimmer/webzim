import type { Metadata } from 'next';
import Layout from "@/components/layout";
import Header from '@/components/layout/header';
import Clock from '@/components/floating-clock/clock';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Floating Clock | Web Dev Zim Project',
  description: 'A showcase of JavaScript Date object, CSS positioning, and color contrast management.',
};
export default function FloatingClock() {
  
  return (
    <Layout>
      <div className='container px-6 py-20'>
        <div className='relative px-6'>
          <div className='mb-6 lg:mb-0 lg:absolute left-0 top-0 bottom-0 z-10'>
          <Link href="/" className="font-bold  block text-slate-800 p-6 hover:bg-slate-100 bg-white rounded shadow-md">&#8592; Back to Portfolio</Link>
          </div>
          <Header>Floating Clock</Header>
        </div>
        
        <div className='min-h-[300px] md:min-h-[600px] bg-slate-800  relative shadow-lg rounded-lg mt-6 mb-20'>
          <Clock />
        </div>
      
      </div>
    </Layout>
  )
}
