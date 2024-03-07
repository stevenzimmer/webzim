import type { Metadata } from 'next';
import Link from "next/link";
import DogBreedWrapper from '@/components/dog-breed/Wrapper';

export const metadata: Metadata = {
    title: 'Dog Breed Guessing Game | Web Zim Project',
    description: 'Demonstration of state management using Immer and dog.ceo API',
  };


export default function DogBreedGuessingGame() {

  return (        
        <div className='min-h-[800px] w-full py-20'>
            <Link href="/" className="font-bold  block text-white text-center mb-6">&#8592; Back home</Link>
            <div className='container'>
            <DogBreedWrapper />
            </div>
           
            
        </div>

  )
}