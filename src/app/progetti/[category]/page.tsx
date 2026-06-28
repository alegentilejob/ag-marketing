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

  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const wollySections = [
    { id: 'data-analysis', title: lang === 'it' ? 'Analisi Dati' : 'Data Analysis' },
    { id: 'marketing-plan', title: 'Marketing Plan' },
    { id: 'product-design', title: 'Product Design' },
    { id: 'primary-research', title: 'Primary Research' },
    { id: 'desk-research', title: 'Desk Research' },
  ];

  const filteredProjects = activeFilter 
    ? categoryProjects.filter(p => p.subcategory === activeFilter)
    : categoryProjects;
  
  const categoryTitle = category.toUpperCase();

  return (
    <PageLayout>
      {/* Hero Section */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="flex-1">
            <span className="text-[10px] font-maison uppercase tracking-[0.08em] text-blue-600 mb-8 block">
              {lang === 'it' ? 'Progetto Case Study' : 'Project Case Study'}
            </span>
            <StandardH1
              lines={[categoryTitle]}
              className="mb-8 uppercase font-maison tracking-tight"
            />
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl font-normal leading-relaxed">
              {category === 'wolly' 
                ? (lang === 'it' ? 'Sto sviluppando Wolly, un\'app AI per la comprensione e registrazione delle proprie spese. Approfondisci tutti i passaggi, dal prototipo alla preparazione alla pubblicazione.' : 'I\'m developing Wolly, an AI app for understanding and tracking personal expenses. Explore all the steps, from the prototype to the preparation for publication.')
                : (lang === 'it' ? 'Analisi verticali e ricerche approfondite che esplorano le dinamiche dei mercati e le nuove tecnologie.' : 'Vertical analysis and in-depth research exploring market dynamics and new technologies.')}
            </p>
          </div>
          
          <div className="text-left md:text-right">
            {category === 'wolly' ? (
              <div className="flex flex-col gap-4 items-start md:items-end">
                <span className="text-[10px] font-maison uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400">
                  {lang === 'it' ? 'Filtra per Modulo' : 'Filter by Module'}
                </span>
                <div className="flex flex-col gap-2 items-start md:items-end">
                  <button 
                    onClick={() => setActiveFilter(null)}
                    className={`text-[10px] font-maison uppercase tracking-[0.08em] transition-colors duration-[400ms] ${!activeFilter ? 'text-blue-600' : 'text-gray-900 dark:text-white hover:text-blue-600'}`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {lang === 'it' ? 'Tutti i moduli' : 'All modules'}
                  </button>
                  {wollySections.map((s) => (
                    <button 
                      key={s.id} 
                      onClick={() => setActiveFilter(s.id)}
                      className={`text-[10px] font-maison uppercase tracking-[0.08em] transition-colors duration-[400ms] ${activeFilter === s.id ? 'text-blue-600' : 'text-gray-900 dark:text-white hover:text-blue-600'}`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="inline-block md:text-right">
                <span className="block text-[80px] md:text-[120px] font-maison leading-none tracking-tight text-blue-600 mb-4">{categoryProjects.length}</span>
                <span className="block text-[10px] font-maison uppercase tracking-[0.08em] text-gray-900 dark:text-white whitespace-nowrap">
                  {lang === 'it' ? 'Contributi Pubblicati' : 'Published Contributions'}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Project articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-24 mb-32">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex"
          >
            <Link
              href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
              className="group w-full flex flex-col bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-600 transition-colors duration-[400ms] rounded-none overflow-hidden"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {/* Top: Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>

              {/* Bottom: Content */}
              <div className="flex flex-col p-8 flex-1 justify-between gap-12">
                <div>
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <RevealText
                      lines={[`${project.category} / ${lang === 'it' ? 'Analisi' : 'Analysis'}`]}
                      lineClassName="text-[10px] font-maison uppercase tracking-[0.08em] text-blue-600"
                      delay={0}
                    />
                    <ArrowUpRight 
                      size={20} 
                      className="text-gray-400 dark:text-gray-500 transition-all duration-[400ms] transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600" 
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <RevealText
                    lines={[project.title]}
                    lineClassName="text-2xl md:text-3xl tracking-tight text-gray-900 dark:text-white font-maison leading-snug"
                    delay={0.05}
                  />
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-6 mt-auto">
                  <RevealText
                    lines={[project.date]}
                    lineClassName="text-sm text-gray-500 dark:text-gray-400 font-maison"
                    delay={0.1}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
