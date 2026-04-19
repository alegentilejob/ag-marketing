"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { FadeIn, RevealText } from '@/components/animations';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Globe } from 'lucide-react';

export default function ExperienceDetailPage() {
  const { id } = useParams();
  const { lang, content } = useLanguage();
  const { sections } = content;
  
  const job = sections.experience.items.find((item: any) => item.id === id);

  if (!job) return (
    <PageLayout narrow>
      <p className="text-2xl text-gray-400 py-32 text-center">
        {lang === 'it' ? 'Esperienza non trovata.' : 'Experience not found.'}
      </p>
    </PageLayout>
  );

  return (
    <PageLayout narrow>
      <article>
        {/* Hero Section */}
        <header className="mb-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 text-blue-600 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                {job.period}
              </span>
            </div>
          </FadeIn>
          
          <RevealText>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 uppercase leading-tight">
              {job.company}
            </h1>
          </RevealText>
          
          <RevealText delay={0.1}>
            <h2 className="text-xl md:text-3xl font-light text-gray-500 uppercase tracking-widest mb-10">
              {job.role}
            </h2>
          </RevealText>

          <FadeIn delay={0.15} className="flex flex-wrap gap-2 mb-12">
            {job.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-blue-600/5 dark:bg-blue-600/10 text-blue-600 px-3 py-1.5 border border-blue-600/10">
                {tag}
              </span>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap gap-8 items-center border-y border-gray-100 dark:border-gray-800 py-8">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-600 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white">{job.location}</span>
            </div>
            <a href={job.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              <Globe size={16} className="text-blue-600 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest underline underline-offset-4">
                {lang === 'it' ? 'Sito Ufficiale' : 'Official Website'}
              </span>
            </a>
          </FadeIn>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg prose-blue dark:prose-invert max-w-none text-left mb-24">
          <div className="mb-16">
            <img 
              src={job.introduction.image} 
              alt={lang === 'it' ? 'Introduzione' : 'Introduction'} 
              className="w-full aspect-[21/9] object-cover object-center border border-gray-100 dark:border-gray-800 mb-10"
            />
            <div dangerouslySetInnerHTML={{ __html: job.introduction.text }} />
          </div>

          <div className="mb-16">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12 border-l-4 border-blue-600 mb-12">
              <h3 className="mt-0 text-blue-600 uppercase tracking-widest text-sm font-bold">
                {lang === 'it' ? 'Progetto e Sviluppo chiave' : 'Key Project & Development'}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: job.development.text }} className="mb-0" />
            </div>
            <img 
              src={job.development.image} 
              alt={lang === 'it' ? 'Sviluppo' : 'Development'} 
              className="w-full aspect-[16/10] object-cover border border-gray-100 dark:border-gray-800"
            />
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-sm font-bold text-gray-400 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
              {lang === 'it' ? 'Conclusioni e Impatto' : 'Conclusions & Impact'}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: job.conclusion.text }} />
            <img 
              src={job.conclusion.image} 
              alt={lang === 'it' ? 'Conclusione' : 'Conclusion'} 
              className="w-full aspect-[16/6] object-cover border border-gray-100 dark:border-gray-800 mt-10"
            />
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
