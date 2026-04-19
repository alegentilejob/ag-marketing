"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { FadeIn, RevealText } from '@/components/animations';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const { lang } = useLanguage();
  const category = params.category as string;

  const projects = lang === 'it' ? projectsIt : projectsEn;
  const categoryProjects = projects.filter(p => p.category === category);
  
  const categoryTitle = category.toUpperCase();

  return (
    <PageLayout>
      {/* Hero Section */}
      <header className="mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="flex-1">
            <FadeIn>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-8 block">
                {lang === 'it' ? 'Progetto Case Study' : 'Project Case Study'}
              </span>
            </FadeIn>
            <RevealText>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 uppercase leading-[0.85]">
                {categoryTitle}
              </h1>
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                {category === 'wolly' 
                  ? (lang === 'it' ? 'Un ecosistema narrativo e strategico dedicato alla rivoluzione della finanza personale tramite l\'intelligenza artificiale.' : 'A narrative and strategic ecosystem dedicated to the personal finance revolution via artificial intelligence.')
                  : (lang === 'it' ? 'Analisi verticali e ricerche approfondite che esplorano le dinamiche dei mercati e le nuove tecnologie.' : 'Vertical analysis and in-depth research exploring market dynamics and new technologies.')}
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3} className="md:text-right">
            <div className="inline-block p-8 border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
              <span className="block text-[40px] font-bold tracking-tighter mb-1">{categoryProjects.length}</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 whitespace-nowrap">
                {lang === 'it' ? 'Contributi Pubblicati' : 'Published Contributions'}
              </span>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Project articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-24 md:gap-y-32">
        {categoryProjects.map((project, index) => (
          <FadeIn key={project.id} delay={0.1 * index}>
            <Link 
              href={`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`}
              className="group block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-8 relative">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-[9px] font-bold uppercase tracking-widest">
                     {project.date}
                  </span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
              
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-light line-clamp-3 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                <span>{lang === 'it' ? 'Leggi l\'analisi completa' : 'Explore full analysis'}</span>
                <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-600" />
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </PageLayout>
  );
}
