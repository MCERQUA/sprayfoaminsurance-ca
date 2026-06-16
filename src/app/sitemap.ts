import type { MetadataRoute } from 'next';

const SITE_URL = 'https://sprayfoaminsurance.ca';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-06-16'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/quote`,
      lastModified: new Date('2026-06-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
