"use client";
import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedPath } from '@/utils/navigation';
import RevealText from '@/components/RevealText';
import { StandardH1, StandardH2 } from '@/components/Typography';
import { motion } from 'framer-motion';

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
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.15, 0.85, 0.35, 1] }}
                        className="w-full"
                      >
                        <Link
                          href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                          className="group w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 px-4 md:px-10 border-b border-gray-300 dark:border-gray-700 hover:bg-blue-600 transition-all duration-[300ms]"
                          style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                        >
                          <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            
                            {/* Left: Square Image */}
                            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-blue-600 overflow-hidden rounded-none">
                              <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 96px, 128px"
                                className="object-cover transition-transform duration-[400ms] group-hover:scale-95"
                                style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                              />
                            </div>

                            {/* Center: Title / Intro text */}
                            <div className="flex-1 md:pl-10 text-left">
                              <RevealText
                                lines={[project.title]}
                                lineClassName="text-lg md:text-xl font-medium tracking-tight text-gray-900 dark:text-white group-hover:text-white! font-maison leading-snug transition-colors"
                              />
                              <RevealText
                                lines={[`${project.category} — ${lang === 'it' ? 'Analisi Modulo' : 'Module Analysis'}`]}
                                lineClassName="text-xs text-gray-400 dark:text-gray-500 group-hover:text-white! font-maison mt-1 uppercase tracking-wider transition-colors"
                                delay={0.05}
                              />
                            </div>

                            {/* Right: Date & Arrow */}
                            <div className="flex items-center gap-6 shrink-0 text-left md:text-right">
                              <RevealText
                                lines={[project.date]}
                                lineClassName="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-white! font-maison transition-colors"
                                delay={0.1}
                              />
                              <ArrowUpRight 
                                size={20} 
                                className="text-gray-400 dark:text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                              />
                            </div>

                          </div>
                        </Link>
                      </motion.div>
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
          <div className="flex flex-col border-t border-gray-300 dark:border-gray-700 w-full">
            {categoryProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.15, 0.85, 0.35, 1] }}
                className="w-full"
              >
                <Link
                  href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                  className="group w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 px-4 md:px-10 border-b border-gray-300 dark:border-gray-700 hover:bg-blue-600 transition-all duration-[300ms]"
                  style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                >
                  <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    
                    {/* Left: Square Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-blue-600 overflow-hidden rounded-none">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover transition-transform duration-[400ms] group-hover:scale-95"
                        style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                      />
                    </div>

                    {/* Center: Title / Intro text */}
                    <div className="flex-1 md:pl-10 text-left">
                      <RevealText
                        lines={[project.title]}
                        lineClassName="text-lg md:text-xl font-medium tracking-tight text-gray-900 dark:text-white group-hover:text-white! font-maison leading-snug transition-colors"
                      />
                      <RevealText
                        lines={[`${project.category} — ${lang === 'it' ? 'Analisi' : 'Analysis'}`]}
                        lineClassName="text-xs text-gray-400 dark:text-gray-500 group-hover:text-white! font-maison mt-1 uppercase tracking-wider transition-colors"
                        delay={0.05}
                      />
                    </div>

                    {/* Right: Date & Arrow */}
                    <div className="flex items-center gap-6 shrink-0 text-left md:text-right">
                      <RevealText
                        lines={[project.date]}
                        lineClassName="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-white! font-maison transition-colors"
                        delay={0.1}
                      />
                      <ArrowUpRight 
                        size={20} 
                        className="text-gray-400 dark:text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                      />
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
