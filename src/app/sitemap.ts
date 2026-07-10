import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://localhost:3000/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://localhost:3000/',
      lastModified: '2026-09-07',
      changeFrequency: 'weekly',
      priority: 0.5,
      images: [process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico'],
    },
  ]
}
