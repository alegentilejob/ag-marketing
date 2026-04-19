"use client";
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { FadeIn, RevealText } from '@/components/animations';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { getLocalizedPath } from '@/utils/navigation';

export default function ExperienceHub() {
  const { lang, content } = useLanguage();
  const { sections } = content;
  const experiences = sections.experience.items;

  return (
    <PageLayout>
      <header className="mb-24">
        <RevealText>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 translate-x-[-4px] uppercase">
            {sections.experience.title} <span className="text-blue-600">.</span>
          </h1>
        </RevealText>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
            {lang === 'it' 
              ? 'Un percorso professionale costruito sull\'analisi, la strategia e la crescita continua.'
              : 'A professional journey built on analysis, strategy, and continuous growth.'}
          </p>
        </FadeIn>
      </header>

      <div className="grid grid-cols-1 gap-24">
        {experiences.map((job: any, index: number) => (
          <FadeIn key={job.id} delay={0.1 * index}>
            <Link 
              href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
              className="group relative flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-blue-600/30 transition-all duration-500"
            >
              {/* Left Side: Info */}
              <div className="flex-1 p-10 md:p-20 flex flex-col justify-between z-10">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
                      {job.period}
                    </span>
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-2 group-hover:text-blue-600 transition-colors">
                    {job.company}
                  </h2>
                  <h3 className="text-lg md:text-2xl font-light text-gray-400 mb-8 uppercase tracking-widest">
                    {job.role}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 mb-12">
                    <MapPin size={14} />
                    <span className="text-xs font-medium uppercase tracking-widest">{job.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-white">
                  <span>{lang === 'it' ? 'Vedi Dettagli' : 'View Details'}</span>
                  <div className="w-12 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-24" />
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Right Side: Visual */}
              <div className="flex-shrink-0 w-full md:w-[40%] h-[250px] md:h-auto overflow-hidden relative">
                <img 
                  src={job.introduction.image} 
                  alt={job.company} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="absolute -bottom-10 -right-10 text-[20rem] font-bold text-black/5 dark:text-white/5 pointer-events-none select-none tracking-tighter">
                0{experiences.length - index}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </PageLayout>
  );
}
