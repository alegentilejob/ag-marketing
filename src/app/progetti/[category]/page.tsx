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
import RevealText from '@/components/RevealText';
import { StandardH1, StandardH2 } from '@/components/Typography';

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
      return dateB.localeCompare(dateA);
    });
  
  const categoryTitle = category.toUpperCase();

  const wollySections = [
    { id: 'data-analysis', title: lang === 'it' ? 'Analisi Dati' : 'Data Analysis' },
    { id: 'marketing-plan', title: 'Marketing Plan' },
    { id: 'product-design', title: 'Product Design' },
    { id: 'primary-research', title: 'Primary Research' },
    { id: 'desk-research', title: 'Desk Research' },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-blue-600 mb-8 block">
              {lang === 'it' ? 'Progetto Case Study' : 'Project Case Study'}
            </span>
            <StandardH1
              lines={[categoryTitle]}
              className="mb-8 uppercase font-display"
            />
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
                <h2 className="text-[10px] font-bold uppercase tracking-[0.08em] text-blue-600 mb-12 border-b border-gray-100 dark:border-gray-800 pb-4">
                  {section.title}
                </h2>
                
                <div className="flex flex-col gap-12">
                  {sectionProjects.length > 0 ? (
                    sectionProjects.map((project, index) => (
                      <Link 
                        key={project.id}
                        href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                        className="group relative flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-blue-600/30 transition-all duration-500 gap-0 md:gap-6"
                      >
                        {/* Left Side: Info - Golden Ratio 61.8% */}
                        <div className="w-full md:w-[61.8%] p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-blue-600">
                              {project.date}
                            </span>
                            <StandardH2
                              text={project.title}
                              className="mb-2 mt-4"
                              lineClassName="group-hover:text-blue-600 transition-colors"
                            />
                            <h3 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-8 uppercase tracking-[0.08em]">
                              {project.category} — {lang === 'it' ? 'Analisi Modulo' : 'Module Analysis'}
                            </h3>
                            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light mb-8 line-clamp-2">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.08em] text-gray-900 dark:text-white mt-auto">
                            <span>{lang === 'it' ? 'Esplora Modulo' : 'Explore Module'}</span>
                            <div className="w-12 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-24" />
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>

                        {/* Right Side: Visual - Golden Ratio 38.2% */}
                        <div 
                          className="w-full md:w-[38.2%] relative overflow-hidden flex-shrink-0 border-l border-gray-100 dark:border-gray-800 min-h-[250px]"
                          style={{ aspectRatio: '1 / 1.618' }}
                        >
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 text-[12rem] md:text-[16rem] font-bold text-black/5 dark:text-white/5 pointer-events-none select-none tracking-tighter leading-none">
                          0{sectionProjects.length - index}
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
                    <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-[9px] font-bold uppercase tracking-[0.08em]">
                       {project.date}
                    </span>
                  </div>
                </div>
                
                <StandardH2
                  text={project.title}
                  className="mb-4 tracking-tight"
                  lineClassName="group-hover:text-blue-600 transition-colors text-2xl md:text-3xl lg:text-4xl font-bold"
                />
                
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal line-clamp-3 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.08em] text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
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
