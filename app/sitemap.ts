import { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/zimgpt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/todos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/floating-clock`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/tic-tac-toe`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/dog-breed-guessing-game`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}
