"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

export default function ExperienceDetailPage() {
  const { id } = useParams();
  const { lang, content } = useLanguage();
  const { sections } = content;

  const job = sections.experience.items.find((item: any) => item.id === id);

  if (!job) return (
    <PageLayout narrow>
      <p className="text-2xl text-gray-700 dark:text-gray-400 py-32 text-center font-normal">
        {lang === 'it' ? 'Esperienza non trovata.' : 'Experience not found.'}
      </p>
    </PageLayout>
  );

  return (
    <PageLayout narrow>
      <article>
        {/* Hero Section */}
        <header className="mb-20">
          <div className="flex flex-wrap items-center gap-4 text-blue-600 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
              {job.period}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 uppercase leading-tight text-gray-900 dark:text-white">
            {job.company}
          </h1>

          <h2 className="text-xl md:text-3xl font-normal text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-10">
            {job.role}
          </h2>

          <div className="flex flex-wrap gap-2 mb-12">
            {job.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-blue-600/5 dark:bg-blue-600/10 text-blue-600 px-3 py-1.5 border border-blue-600/10">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 items-center border-y border-gray-100 dark:border-gray-800 py-8">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
              <MapPin size={16} className="text-blue-600 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest">{job.location}</span>
            </div>
            <a href={job.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
              <Globe size={16} className="text-blue-600 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest underline underline-offset-4">
                {lang === 'it' ? 'Sito Ufficiale' : 'Official Website'}
              </span>
            </a>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg prose-blue dark:prose-invert max-w-none text-left mb-24">
          <div className="mb-16">
            <div className="relative w-full aspect-video border border-gray-100 dark:border-gray-800 mb-10 overflow-hidden">
              <Image
                src={job.introduction.image}
                alt={lang === 'it' ? 'Introduzione' : 'Introduction'}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>
            <div 
              className="text-gray-700 dark:text-gray-300 font-normal leading-relaxed"
              dangerouslySetInnerHTML={{ __html: job.introduction.text }} 
            />
          </div>

          <div className="mb-16">
            <h2 className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-4 text-gray-900 dark:text-white">
              {lang === 'it' ? 'Progetto e Sviluppo chiave' : 'Key Project & Development'}
            </h2>
            <div 
              className="text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-10"
              dangerouslySetInnerHTML={{ __html: job.development.text }} 
            />
            <div className="relative w-full aspect-video border border-gray-100 dark:border-gray-800 overflow-hidden">
              <Image
                src={job.development.image}
                alt={lang === 'it' ? 'Sviluppo' : 'Development'}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-4 text-gray-900 dark:text-white">
              {lang === 'it' ? 'Conclusioni e Impatto' : 'Conclusions & Impact'}
            </h2>
            <div 
              className="text-gray-700 dark:text-gray-300 font-normal leading-relaxed"
              dangerouslySetInnerHTML={{ __html: job.conclusion.text }} 
            />
            <div className="relative w-full aspect-video border border-gray-100 dark:border-gray-800 mt-10 overflow-hidden">
              <Image
                src={job.conclusion.image}
                alt={lang === 'it' ? 'Conclusione' : 'Conclusion'}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
