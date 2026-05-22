"use client";
import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedPath } from '@/utils/navigation';

export default function CategoryPage() {
  const params = useParams();
  const { lang } = useLanguage();
  const category = params.category as string;
  
  if (category.toLowerCase() === 'marketing') {
    return notFound();
  }

  const projects = lang === 'it' ? projectsIt : projectsEn;
  const categoryProjects = projects
    .filter(p => p.category === category)
    .sort((a, b) => {
      const dateA = `${a.year}-${a.month}-${a.day}`;
      const dateB = `${b.year}-${b.month}-${b.day}`;
      return dateA.localeCompare(dateB);
    });
  
  const categoryTitle = category.toUpperCase();

  const wollySections = [
    { id: 'desk-research', title: 'Desk Research' },
    { id: 'primary-research', title: 'Primary Research' },
    { id: 'product-design', title: 'Product Design' },
    { id: 'marketing-plan', title: 'Marketing Plan' },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <header className="mb-24 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-8 block">
              {lang === 'it' ? 'Progetto Case Study' : 'Project Case Study'}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 uppercase leading-[0.85] text-gray-900 dark:text-white">
              {categoryTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl font-normal leading-relaxed">
              {category === 'wolly' 
                ? (lang === 'it' ? 'Un ecosistema narrativo e strategico dedicato alla rivoluzione della finanza personale tramite l\'intelligenza artificiale.' : 'A narrative and strategic ecosystem dedicated to the personal finance revolution via artificial intelligence.')
                : (lang === 'it' ? 'Analisi verticali e ricerche approfondite che esplorano le dinamiche dei mercati e le nuove tecnologie.' : 'Vertical analysis and in-depth research exploring market dynamics and new technologies.')}
            </p>
          </div>
          
          <div className="text-left md:text-right">
            {category === 'wolly' ? (
              <div className="flex flex-col gap-3 items-start md:items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2">
                  {lang === 'it' ? 'Indice dei Moduli' : 'Module Index'}
                </span>
                <div className="flex flex-col gap-1 items-start md:items-end">
                  {wollySections.map((s) => (
                    <a 
                      key={s.id} 
                      href={`#${s.id}`}
                      className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-0.5"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="inline-block p-8 border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                <span className="block text-[40px] font-bold tracking-tighter mb-1 text-gray-900 dark:text-white">{categoryProjects.length}</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {lang === 'it' ? 'Contributi Pubblicati' : 'Published Contributions'}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Project articles list/grid */}
      <div className="space-y-32">
        {category === 'wolly' ? (
          wollySections.map((section) => {
            const sectionProjects = categoryProjects.filter(p => p.subcategory === section.id);
            
            return (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-12 border-b border-gray-100 dark:border-gray-800 pb-4">
                  {section.title}
                </h2>
                
                <div className="space-y-16">
                  {sectionProjects.length > 0 ? (
                    sectionProjects.map((project, index) => (
                      <Link 
                        key={project.id}
                        href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                        className="group block"
                      >
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                          <div className="w-full md:w-1/3 aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 relative border border-gray-100 dark:border-gray-800">
                            <Image 
                              src={project.coverImage} 
                              alt={project.title} 
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-all duration-700 group-hover:scale-105" 
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-4">
                              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600">
                                 {project.date}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors text-gray-900 dark:text-white">
                              {project.title}
                            </h3>
                            
                            <p className="text-base text-gray-700 dark:text-gray-300 font-normal line-clamp-2 mb-6 leading-relaxed max-w-2xl">
                              {project.description}
                            </p>

                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                              <span>{lang === 'it' ? 'Leggi l\'analisi completa' : 'Explore full analysis'}</span>
                              <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-600" />
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      {lang === 'it' ? 'In arrivo...' : 'Coming soon...'}
                    </p>
                  )}
                </div>
              </section>
            );
          })
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-24 md:gap-y-32">
            {categoryProjects.map((project, index) => (
              <Link 
                key={project.id}
                href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                className="group block"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-8 relative border border-gray-100 dark:border-gray-800">
                  <Image 
                    src={project.coverImage} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-[9px] font-bold uppercase tracking-widest">
                       {project.date}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal line-clamp-3 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                  <span>{lang === 'it' ? 'Leggi l\'analisi completa' : 'Explore full analysis'}</span>
                  <div className="w-8 h-px bg-gray-300 dark:bg-gray-700 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-600" />
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
