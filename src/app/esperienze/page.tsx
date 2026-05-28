"use client";
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedPath } from '@/utils/navigation';
import { StandardH1, StandardH2 } from '@/components/Typography';

export default function ExperienceHub() {
  const { lang, content } = useLanguage();
  const { sections } = content;
  const experiences = sections.experience.items;

  return (
    <PageLayout>
      <header className="mb-16">
        <StandardH1
          lines={[
            <>
              {sections.experience.title} <span className="text-blue-600">.</span>
            </>
          ]}
          className="mb-6"
        />
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-normal">
          {lang === 'it'
            ? 'Un percorso professionale costruito sull\'analisi, la strategia e la crescita continua.'
            : 'A professional journey built on analysis, strategy, and continuous growth.'}
        </p>
      </header>

      {/* List of Experiences - Stack with constant gap (e.g. 32px or 48px) */}
      <div className="flex flex-col gap-12">
        {experiences.map((job: any, index: number) => (
          <Link
            key={job.id}
            href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
            className="group relative flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-blue-600/30 transition-all duration-500 gap-0 md:gap-6"
          >
            {/* Left Side: Info - Golden Ratio 61.8% */}
            <div className="w-full md:w-[61.8%] p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
                  {job.period}
                </span>
                <StandardH2
                  text={job.company}
                  className="mb-2 mt-4"
                  lineClassName="group-hover:text-blue-600 transition-colors"
                />
                <h3 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-8 uppercase tracking-widest">
                  {job.role}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-12">
                  <MapPin size={14} />
                  <span className="text-xs font-medium uppercase tracking-widest">{job.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-white mt-auto">
                <span>{lang === 'it' ? 'Vedi Dettagli' : 'View Details'}</span>
                <div className="w-12 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-24" />
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Right Side: Visual - Golden Ratio 38.2% */}
            <div 
              className="w-full md:w-[38.2%] relative overflow-hidden flex-shrink-0 border-l border-gray-100 dark:border-gray-800"
              style={{ aspectRatio: '1 / 1.618' }}
            >
              <Image
                src={job.introduction.image}
                alt={job.company}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute -bottom-6 -right-6 text-[12rem] md:text-[16rem] font-bold text-black/5 dark:text-white/5 pointer-events-none select-none tracking-tighter leading-none">
              0{experiences.length - index}
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
