import { MetadataRoute } from 'next';
import { projectsIt, projectsEn } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ag-marketing.vercel.app';
  const currentDate = new Date();

  // 1. Static Pages (Italian & English)
  const staticPages = [
    { it: '/', en: '/en/' },
    { it: '/chi-sono', en: '/en/about-me' },
    { it: '/blog', en: '/en/blog' },
  ];

  const staticSitemaps = staticPages.flatMap((page) => [
    {
      url: `${baseUrl}${page.it}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: page.it === '/' ? 1 : 0.8,
    },
    {
      url: `${baseUrl}${page.en}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: page.en === '/en/' ? 1 : 0.8,
    },
  ]);

  const blogItSitemaps = projectsIt.filter(p => !p.category.includes('wolly')).map((project) => ({
    url: `${baseUrl}/blog/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogEnSitemaps = projectsEn.filter(p => !p.category.includes('wolly')).map((project) => ({
    url: `${baseUrl}/en/blog/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticSitemaps,
    ...blogItSitemaps,
    ...blogEnSitemaps,
  ];
}
