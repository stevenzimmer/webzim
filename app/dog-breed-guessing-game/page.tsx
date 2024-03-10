import type { Metadata } from "next";
import DogBreedWrapper from "@/components/dog-breed/Wrapper";
import Nav from "@/components/layout/Nav";
export const metadata: Metadata = {
  title: "Dog Breed Guessing Game | Web Zim Project",
  description: "Demonstration of state management using Immer and dog.ceo API",
};

export default function DogBreedGuessingGame() {
  return (
    <>
      <Nav />
      <div className="min-h-[800px] w-full py-20">
        <div className="container">
          <DogBreedWrapper />
        </div>
      </div>
    </>
  );
}
