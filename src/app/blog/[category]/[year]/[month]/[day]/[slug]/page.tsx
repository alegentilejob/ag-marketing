"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import { FadeIn, RevealText } from '@/components/animations';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/content-it';
import { StandardH1, StandardH2 } from '@/components/Typography';

export default function BlogPostPage() {
  const params = useParams();
  const { lang } = useLanguage();

  const category = params.category as string;
  const year = params.year as string;
  const month = params.month as string;
  const day = params.day as string;
  const slug = params.slug as string;

  // For this project, blog posts ARE project items not categorized as 'Wolly' 
  // (according to the blog/page.tsx logic we saw earlier)
  const projectsToSearch = lang === 'en'
    ? projectsEn.map(p => ({ ...p, _lang: 'en' as const }))
    : projectsIt.map(p => ({ ...p, _lang: 'it' as const }));

  const project = projectsToSearch.find(p =>
    p.category.toLowerCase() === category &&
    p.year === year &&
    p.month === month &&
    p.day === day &&
    p.slug === slug
  );

  const projectLang = project?._lang || lang;

  const labels = projectLang === 'it' ? {
    writtenBy: 'Scritto da',
    postNotFound: 'Articolo non trovato',
    backToBlog: 'Torna al Blog',
    readTime: '5 min lettura'
  } : {
    writtenBy: 'Written by',
    postNotFound: 'Article not found',
    backToBlog: 'Back to Blog',
    readTime: '5 min read'
  };

  // Data Layer Tracking
  React.useEffect(() => {
    if (project && typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'view_blog_post',
        post_id: project.id,
        post_category: project.category,
        page_lang: projectLang,
        page_path: window.location.pathname
      });
    }
  }, [project, projectLang]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-display">404</h1>
          <p className="text-gray-500 mb-8">{labels.postNotFound}</p>
          <Link href="/blog" className="btn-inline">
            {labels.backToBlog}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      <Header />

      <main className="w-full pt-32 pb-24 flex flex-col items-center overflow-x-hidden">
        {/* Main Article Container */}
        <article className="w-full max-w-4xl px-6 md:px-0">
          <Breadcrumbs />

          {/* Hero Section */}
          <header className="mb-12">
            <StandardH1
              lines={[project.title]}
              className="mb-8 leading-[1.1] uppercase font-display"
            />

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal mb-10">
                {project.description}
              </p>
            </FadeIn>

            {/* Metadata Row */}
            <FadeIn delay={0.3} className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 dark:border-gray-800 py-8">
              <Link
                href={lang === 'en' ? '/en/about-me' : '/chi-sono'}
                className="flex items-center gap-4 hover:opacity-70 transition-opacity group"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100 dark:border-gray-800 group-hover:border-blue-500/50 transition-all">
                  <Image
                    src={siteConfig.meta.profileImage}
                    alt={siteConfig.meta.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold mb-0.5">
                    {labels.writtenBy}
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {siteConfig.meta.name}
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full border border-gray-100 dark:border-gray-800 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
                  {project.date}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 border-l border-gray-100 dark:border-gray-800 pl-3">
                  {labels.readTime}
                </span>
              </div>
            </FadeIn>
          </header>

          {/* Featured Image */}
          <FadeIn delay={0.4} className="mb-20">
            <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 shadow-2xl relative">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Content Body */}
          <div className="space-y-16 text-left">
            {project.content.map((block, index) => {
              switch (block.type) {
                case 'text':
                  return (
                    <FadeIn key={index} delay={0.1 * index} className="prose prose-xl dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-500 prose-a:font-bold prose-a:underline decoration-blue-500/30 hover:decoration-blue-500 transition-all font-normal">
                      {block.data.title && (
                        <StandardH2
                          text={block.data.title}
                          className="mb-8 mt-16 text-gray-900 dark:text-white uppercase font-display"
                        />
                      )}
                      {block.data.html ? (
                        <div
                          className="text-gray-800 dark:text-gray-200 leading-[1.8] font-normal [&>p]:mb-8 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-8 [&>ol]:mb-8 [&>ol]:ml-6 [&>ol]:list-decimal [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mb-6 [&>h3]:mt-10 [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:mb-4 [&>h4]:mt-8 [&>strong]:text-gray-900 dark:[&>strong]:text-white [&>strong]:font-bold"
                          dangerouslySetInnerHTML={{
                            __html: block.data.html.replace(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g, (match: string, quote: string, url: string) => {
                              if (url.startsWith('http')) {
                                return match.includes('rel=') ? match : match + ' rel="noopener noreferrer" target="_blank"';
                              }
                              return match;
                            })
                          }}
                        />
                      ) : (
                        <p className="text-gray-800 dark:text-gray-200 leading-[1.8] whitespace-pre-line font-normal mb-8">
                          {block.data.text}
                        </p>
                      )}
                    </FadeIn>
                  );
                case 'table':
                  return (
                    <FadeIn key={index} delay={0.1 * index} className="overflow-x-auto my-12 shadow-sm border border-gray-100 dark:border-gray-800 w-full rounded-xl">
                      <table className="w-full text-left border-collapse bg-white dark:bg-[#111]">
                        <thead>
                          <tr>
                            {block.data.headers.map((h: string, i: number) => (
                              <th key={i} className="border-b-2 border-gray-200 dark:border-gray-700 py-5 px-6 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 bg-gray-50 dark:bg-gray-800/50">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.data.rows.map((row: string[], i: number) => (
                            <tr key={i} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors last:border-0">
                              {row.map((cell: string, j: number) => (
                                <td key={j} className="py-5 px-6 text-base text-gray-700 dark:text-gray-300 font-light border-r border-gray-50 dark:border-gray-800/50 last:border-0" dangerouslySetInnerHTML={{ __html: cell }} />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </FadeIn>
                  );
                case 'image':
                  return (
                    <FadeIn key={index} delay={0.1 * index} className="w-full">
                      <div className="group relative w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image 
                            src={block.data.src} 
                            alt={block.data.caption || project.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                        </div>
                        {block.data.caption && (
                          <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-[11px] font-mono uppercase tracking-widest font-bold text-gray-400 text-center">
                              {block.data.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  );
                default:
                  return null;
              }
            })}
          </div>

        </article>
      </main>
    </div>
  );
}
