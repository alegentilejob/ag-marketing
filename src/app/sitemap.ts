import { MetadataRoute } from 'next';
import { projectsIt, projectsEn } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ag-marketing.vercel.app';
  const currentDate = new Date();

  // 1. Static Pages (Italian & English)
  const staticPages = [
    { it: '/', en: '/en/' },
    { it: '/chi-sono', en: '/en/about-me' },
    { it: '/esperienze', en: '/en/experience' },
    { it: '/progetti', en: '/en/projects' },
    { it: '/skills', en: '/en/skills' },
    { it: '/blog', en: '/en/blog' },
    { it: '/cv', en: '/en/cv' },
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

  // 2. Experience Detail Pages
  const experienceIds = ['naxa', 'fridhem-center', 'anularis'];
  const experienceSitemaps = experienceIds.flatMap((id) => [
    {
      url: `${baseUrl}/esperienze/${id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/experience/${id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);

  // 3. Project Detail Pages (Italian)
  const projectItSitemaps = projectsIt.map((project) => ({
    url: `${baseUrl}/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 4. Project Detail Pages (English)
  const projectEnSitemaps = projectsEn.map((project) => ({
    url: `${baseUrl}/en/projects/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 5. Blog Detail Pages (Mirror of projects but with /blog prefix)
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

  // 6. Category Hubs (for projects/blog)
  const categories = Array.from(new Set([...projectsIt, ...projectsEn].map(p => p.category.toLowerCase())));
  const hubSitemaps = categories.flatMap(cat => [
      {
          url: `${baseUrl}/progetti/${cat}`,
          lastModified: currentDate,
          changeFrequency: 'monthly' as const,
          priority: 0.5,
      },
      {
          url: `${baseUrl}/en/projects/${cat}`,
          lastModified: currentDate,
          changeFrequency: 'monthly' as const,
          priority: 0.5,
      }
  ]);

  return [
    ...staticSitemaps,
    ...experienceSitemaps,
    ...projectItSitemaps,
    ...projectEnSitemaps,
    ...blogItSitemaps,
    ...blogEnSitemaps,
    ...hubSitemaps
  ];
}
