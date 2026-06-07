"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { FadeIn, RevealText } from '@/components/animations';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
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
    <PageLayout narrow customPadding="pt-[104px] pb-[104px]">
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
            <FadeIn delay={0.3} className="flex flex-wrap items-center gap-6 border-y border-gray-100 dark:border-gray-800 py-8">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full border border-gray-100 dark:border-gray-800 text-[10px] font-maison font-bold uppercase tracking-[0.08em] text-blue-600">
                  {project.category}
                </span>
                <span className="text-[10px] font-maison font-bold uppercase tracking-[0.08em] text-gray-400">
                  {project.date}
                </span>
                <span className="text-[10px] font-maison font-bold uppercase tracking-[0.08em] text-gray-400 border-l border-gray-100 dark:border-gray-800 pl-3">
                  {labels.readTime}
                </span>
              </div>
            </FadeIn>
          </header>



          {/* Content Body */}
          <div className="space-y-16 text-left">
            {project.content.map((block, index) => {
              switch (block.type) {
                case 'text':
                  return (
                    <FadeIn key={index} delay={0.1 * index} className="prose prose-xl dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-600 prose-a:font-bold prose-a:underline decoration-blue-600/30 hover:decoration-blue-600 transition-all font-normal">
                      {block.data.title && (
                        <StandardH2
                          text={block.data.title}
                          className="mb-8 mt-16 text-gray-900 dark:text-white uppercase font-display"
                          size="small"
                        />
                      )}
                      {block.data.html ? (
                        <div
                          className="text-gray-800 dark:text-gray-200 leading-[1.8] font-normal [&>p]:mb-8 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-8 [&>ol]:mb-8 [&>ol]:ml-6 [&>ol]:list-decimal [&>h3]:text-2xl [&>h3]:font-medium [&>h3]:mb-6 [&>h3]:mt-10 [&>h4]:text-xl [&>h4]:font-medium [&>h4]:mb-4 [&>h4]:mt-8 [&>strong]:text-gray-900 dark:[&>strong]:text-white [&>strong]:font-bold"
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
                              <th key={i} className="border-b-2 border-gray-200 dark:border-gray-700 py-5 px-6 text-[10px] font-maison font-bold uppercase tracking-[0.08em] text-gray-500 bg-gray-50 dark:bg-gray-800/50">
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
                      <div className="group relative w-full overflow-hidden border border-gray-100 dark:border-gray-800">
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
                            <p className="text-[11px] font-maison uppercase tracking-[0.08em] font-bold text-gray-400 text-center">
                              {block.data.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  );
                case 'gallery':
                  return (
                    <FadeIn key={index} delay={0.1 * index} className="w-full">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12">
                        {block.data.images.map((img: { src: string; alt?: string }, i: number) => (
                          <div key={i} className="relative overflow-hidden aspect-[3/4] w-full">
                            <Image 
                              src={img.src} 
                              alt={img.alt || project.title} 
                              fill
                              sizes="(max-width: 768px) 50vw, 300px"
                              className="object-cover" 
                            />
                          </div>
                        ))}
                      </div>
                    </FadeIn>
                  );
                default:
                  return null;
              }
            })}
          </div>
    </PageLayout>
  );
}
