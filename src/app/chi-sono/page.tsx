"use client";
import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MapPin, Calendar } from 'lucide-react';

export default function AboutPage() {
  const { lang, content } = useLanguage();
  const { siteConfig, sections } = content;

  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left Column: Image & Basic Info */}
        <div className="lg:sticky lg:top-40">
          <div className="aspect-[4/5] bg-gray-50 dark:bg-gray-900 overflow-hidden border border-gray-100 dark:border-gray-800 relative">
            <Image
              src={siteConfig.meta.profileImage}
              alt={siteConfig.meta.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <MapPin size={18} className="text-blue-600 shrink-0" />
              <span className="text-base font-normal">{siteConfig.meta.location}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Calendar size={18} className="text-blue-600 shrink-0" />
              <span className="text-base font-normal">{siteConfig.meta.birthdate}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Mail size={18} className="text-blue-600 shrink-0" />
              <span className="text-base font-normal underline underline-offset-4 break-all">{siteConfig.contact.email}</span>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">
              {lang === 'it' ? 'Lingue' : 'Languages'}
            </h3>
            <div className="space-y-4">
              {siteConfig.meta.languages.map((l: any) => (
                <div key={l.name} className="flex justify-between items-center">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">{l.name}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-widest">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Education */}
        <div>
          <header className="mb-14">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-tight text-gray-900 dark:text-white">
              {sections.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-12">
              {sections.about.bio}
            </p>
          </header>

          <section className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
              {lang === 'it' ? 'Background Accademico' : 'Academic Background'}
            </h3>
            <div className="space-y-10">
              {sections.about.education.map((edu: any, index: number) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 block mb-2">{edu.period}</span>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-tight text-gray-900 dark:text-white">{edu.institution}</h4>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin size={12} />
                    <span className="text-xs font-medium uppercase tracking-widest">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">
              {lang === 'it' ? 'Vision Strategica' : 'Strategic Vision'}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-normal leading-relaxed">
              {lang === 'it'
                ? "Credo fermamente che il marketing moderno debba essere un connubio indissolubile tra l'analisi rigorosa dei dati e la creatività strategica. Ogni mia azione è guidata dalla volontà di trasformare metriche complesse in storie di successo misurabili."
                : "I firmly believe that modern marketing must be an indissoluble fusion of rigorous data analysis and strategic creativity. Every action I take is guided by the desire to transform complex metrics into measurable success stories."}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
