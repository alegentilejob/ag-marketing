"use client";
import React from 'react';
import Header from '@/components/Header';
import { FadeIn, RevealText } from '@/components/animations';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Tag } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getLocalizedPath } from '@/utils/navigation';

export default function ProjectsHub() {
  const { lang } = useLanguage();
  const projects = lang === 'it' ? projectsIt : projectsEn;

  // Group projects by category
  const groups = projects.reduce((acc, project) => {
    if (project.category.toLowerCase() === 'marketing') return acc;
    const cat = project.category.toUpperCase();
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  // Sort projects within each category by date (ascending)
  Object.keys(groups).forEach(cat => {
    groups[cat].sort((a, b) => {
      const dateA = `${a.year}-${a.month}-${a.day}`;
      const dateB = `${b.year}-${b.month}-${b.day}`;
      return dateA.localeCompare(dateB);
    });
  });

  // Ensure 'WOLLY' is first if it exists
  const sortedCategories = Object.keys(groups).sort((a, b) => {
    if (a === 'WOLLY') return -1;
    if (b === 'WOLLY') return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-40 pb-24">
        <Breadcrumbs />
        <header className="mb-24">
          <RevealText>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 translate-x-[-4px]">
              {lang === 'it' ? 'Progetti' : 'Projects'} <span className="text-blue-600">.</span>
            </h1>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
              {lang === 'it' 
                ? 'Una raccolta curata dei miei lavori, dalle ricerche di mercato alle implementazioni AI.'
                : 'A curated collection of my work, from market research to AI implementations.'}
            </p>
          </FadeIn>
        </header>

        <div className="grid grid-cols-1 gap-24">
          {sortedCategories.map((category, index) => {
            const firstProject = groups[category][0];
            const articleCount = groups[category].length;

            return (
              <FadeIn key={category} delay={0.1 * index}>
                <Link 
                  href={getLocalizedPath(`/progetti/${category.toLowerCase()}`, lang)}
                  className="group relative flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-blue-600/30 transition-all duration-500"
                >
                  {/* Left Side: Massive Project Title & Count */}
                  <div className="flex-1 p-12 md:p-20 flex flex-col justify-between z-10">
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-center">
                          Project Case Study
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                          {articleCount} {lang === 'it' ? 'CONTRIBUTI' : 'CONTRIBUTIONS'}
                        </span>
                      </div>
                      <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8 group-hover:text-blue-600 transition-colors">
                        {category}
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed mb-12">
                        {category === 'WOLLY' 
                          ? (lang === 'it' ? 'Sviluppo e marketing strategy per una fintech AI-powered rivoluzionaria.' : 'Strategy and marketing development for a revolutionary AI-powered fintech.')
                          : (lang === 'it' ? 'Analisi strategiche e ricerche desk approfondite su mercati emergenti.' : 'Strategic analysis and in-depth desk research on emerging markets.')}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-white">
                      <span>{lang === 'it' ? 'Esplora Progetto' : 'Explore Project'}</span>
                      <div className="w-12 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-24" />
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Right Side: Hero Image */}
                  <div className="flex-1 h-[400px] md:h-auto overflow-hidden relative">
                    <Image 
                      src={firstProject.coverImage} 
                      alt={category} 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Background Large Number */}
                  <div className="absolute -bottom-10 -right-10 text-[20rem] font-bold text-black/5 dark:text-white/5 pointer-events-none select-none tracking-tighter">
                    0{index + 1}
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </main>
    </div>
  );
}

