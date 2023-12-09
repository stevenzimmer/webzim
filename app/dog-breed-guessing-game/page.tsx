import type { Metadata } from 'next';
import Link from "next/link";
import Layout from "@/components/layout";
import DogBreedWrapper from '@/components/dog-breed/Wrapper';

export const metadata: Metadata = {
    title: 'Dog Breed Guessing Game | Web Zim Project',
    description: 'Demonstration of state management using Immer and dog.ceo API',
  };


export default function DogBreedGuessingGame() {

  return (        
    <Layout >    
        <div className='min-h-[800px] w-full'>
            <Link href="/" className="font-bold  block text-white text-center mb-6">&#8592; Back home</Link>
            <DogBreedWrapper />
            
        </div>
    </Layout>
  )
}