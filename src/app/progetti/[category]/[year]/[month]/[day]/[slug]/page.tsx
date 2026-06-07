"use client";
import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { FadeIn, RevealText } from '@/components/animations';
import { Calendar, Tag, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/content-it';
import { StandardH1, StandardH2 } from '@/components/Typography';

export default function ProjectPage() {
  const params = useParams();
  const { lang } = useLanguage();
  
  const category = params.category as string;
  
  if (category.toLowerCase() === 'marketing') {
    return notFound();
  }
  const year = params.year as string;
  const month = params.month as string;
  const day = params.day as string;
  const slug = params.slug as string;

  const allProjects = [
    ...projectsIt.map(p => ({ ...p, _lang: 'it' })),
    ...projectsEn.map(p => ({ ...p, _lang: 'en' }))
  ];

  const project = allProjects.find(p => 
    p.category === category && 
    p.year === year && 
    p.month === month && 
    p.day === day && 
    p.slug === slug
  );



  // If we found a project but it's in the wrong language, 
  // we can use it anyway, but we should use the content from that project.
  const projectLang = project?._lang || lang;
  
  // Use translations for fixed labels based on the project's language
  const labels = projectLang === 'it' ? {
    writtenBy: 'Scritto da',
    projectNotFound: 'Progetto non trovato',
    backToProjects: 'Torna ai progetti',
    readTime: '5 min lettura'
  } : {
    writtenBy: 'Written by',
    projectNotFound: 'Project not found',
    backToProjects: 'Back to projects',
    readTime: '5 min read'
  };

  // Data Layer Tracking
  React.useEffect(() => {
    if (project && typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'view_project',
        project_id: project.id,
        project_category: project.category,
        page_lang: projectLang,
        page_path: window.location.pathname
      });
    }
  }, [project, projectLang]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-500 mb-8">{labels.projectNotFound}</p>
          <Link href="/progetti" className="text-blue-600 font-bold uppercase tracking-widest text-xs border-b-2 border-blue-600 pb-1">
            {labels.backToProjects}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageLayout customPadding="pt-[104px] pb-[104px]">

        {/* Hero Section - Stacked for full-width alignment */}
        <header className="w-full max-w-4xl mx-auto px-6 md:px-0 mb-12">
            <h1 className="mb-8 leading-[1.1] uppercase font-display">
              <StandardH1
                lines={[project.title]}
                className=""
              />
            </h1>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal mb-10">
                {project.description}
              </p>
            </FadeIn>

            {/* Metadata Row */}
            <FadeIn delay={0.3} className="flex flex-wrap items-center gap-6 border-y border-gray-100 dark:border-gray-800 py-6 mb-12">
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



        {/* Main Article Container - Centered for optimal reading */}
        <article className="w-full max-w-4xl mx-auto px-6 md:px-0">
          {/* Content Body - Left aligned in centered container */}
          <div className="space-y-16 text-left">
            {project.content.map((block, index) => {
              switch (block.type) {
                case 'text':
                  return (
                    <FadeIn key={index} delay={0.1 * index} className="prose prose-xl dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-600 prose-a:font-bold prose-a:underline decoration-blue-600/30 hover:decoration-blue-600 transition-all">
                      {block.data.title && (
                        <h2 className="mb-8 mt-16 text-gray-900 dark:text-white uppercase">
                          <StandardH2
                            text={block.data.title}
                            className=""
                            size="small"
                          />
                        </h2>
                      )}
                      {block.data.html ? (
                        <div 
                          className="text-gray-600 dark:text-gray-400 leading-[1.8] font-light [&>p]:mb-8 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-8 [&>ol]:mb-8 [&>ol]:ml-6 [&>ol]:list-decimal [&>h3]:text-2xl [&>h3]:font-medium [&>h3]:mb-6 [&>h3]:mt-10 [&>h4]:text-xl [&>h4]:font-medium [&>h4]:mb-4 [&>h4]:mt-8 [&>strong]:text-gray-900 dark:[&>strong]:text-white [&>strong]:font-bold" 
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
                        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] whitespace-pre-line font-light mb-8">
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
                                <th key={i} className="border-b-2 border-gray-200 dark:border-gray-700 py-5 px-6 text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-50 dark:bg-gray-800/50">
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
                      <div className={`group relative w-full overflow-hidden border border-gray-100 dark:border-gray-800 ${
                        block.data.src.includes('wolly prototype') || block.data.src.includes('processed_')
                          ? 'max-w-md mx-auto shadow-lg'
                          : ''
                      }`}>
                          <div className={`relative overflow-hidden ${
                            block.data.src.includes('wolly prototype') || block.data.src.includes('processed_')
                              ? 'aspect-[1440/2960]'
                              : 'aspect-video'
                          }`}>
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
                                <p className="text-[11px] uppercase tracking-widest font-bold text-gray-400 text-center">
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
        </article>
    </PageLayout>
  );
}
