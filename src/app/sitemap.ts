import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://goodroomhouse.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/team`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/spirit`, changeFrequency: "monthly", priority: 0.6 },
  ];
}


