import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.webdevzim.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.webdevzim.com/zimgpt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.webdevzim.com/tic-tac-toe',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.webdevzim.com/dog-breed-guessing-game',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ]
}