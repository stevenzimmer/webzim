import type { DogImage } from "@/lib/dog-breed/types";

const PHOTOS_PER_QUESTION = 4;

export default function onlyUniqueBreeds(pics: DogImage[]): DogImage[] {
  const uniqueBreeds = new Set<string>();
  const uniquePics = pics.filter((pic) => {
    const breed = pic.split("/")[4];

    if (!breed || uniqueBreeds.has(breed) || pic.includes(" ")) {
      return false;
    }

    uniqueBreeds.add(breed);
    return true;
  });

  return uniquePics.slice(
    0,
    Math.floor(uniquePics.length / PHOTOS_PER_QUESTION) * PHOTOS_PER_QUESTION,
  );
}
