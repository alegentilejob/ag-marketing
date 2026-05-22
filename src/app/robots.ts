import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/design-system-centralizzato'],
    },
    sitemap: 'https://ag-marketing.vercel.app/sitemap.xml',
  };
}
