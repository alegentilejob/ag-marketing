"use client";
import React, { useState, useMemo } from 'react';
import PageLayout from '@/components/PageLayout';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, Filter } from 'lucide-react';
import { getLocalizedPath } from '@/utils/navigation';
import RevealText from '@/components/RevealText';
import { StandardH1, StandardH2 } from '@/components/Typography';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const { lang } = useLanguage();
  // Filter out 'Wolly' as it's a project/case study, not a blog post
  const allProjects = lang === 'it' ? projectsIt : projectsEn;
  const blogArticles = useMemo(() => 
    allProjects
      .filter(p => p.category.toLowerCase() !== 'wolly')
      .sort((a, b) => {
        const dateA = `${a.year}-${a.month}-${a.day}`;
        const dateB = `${b.year}-${b.month}-${b.day}`;
        return dateA.localeCompare(dateB);
      }), 
    [allProjects]
  );
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories excluding 'wolly'
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogArticles.map(p => p.category.toLowerCase())));
    return ['all', ...cats];
  }, [blogArticles]);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return blogArticles;
    return blogArticles.filter(p => p.category.toLowerCase() === selectedCategory);
  }, [blogArticles, selectedCategory]);

  return (
    <PageLayout>
      <header className="mb-16">
        <StandardH1
          lines={[
            <>
              {lang === 'it' ? 'Insights & Blog' : 'Insights & Blog'} <span className="text-blue-600">.</span>
            </>
          ]}
          className="mb-6 translate-x-[-4px] uppercase"
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="flex-1">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-normal">
                    {lang === 'it' 
                        ? 'Analisi, riflessioni e casi studio sul mondo del marketing digitale e delle tecnologie emergendi.' 
                        : 'Analysis, reflections, and case studies on the world of digital marketing and emerging technologies.'}
                </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        aria-label={`Filter by ${cat}`}
                        className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.08em] border transition-all cursor-pointer
                            ${selectedCategory === cat 
                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                                : 'bg-transparent border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-blue-600 hover:text-blue-600'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </header>

      {/* Blog Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 w-full mt-16 mb-24">
        {filteredProjects.map((article, index) => {
          const isFeatured = index === 0;

          return (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full flex flex-col ${isFeatured ? 'md:col-span-2' : ''}`}
            >
              <Link
                href={getLocalizedPath(`/blog/${article.category.toLowerCase()}/${article.year}/${article.month}/${article.day}/${article.slug}`, lang)}
                className="group w-full flex flex-col gap-6"
              >
                {/* Image */}
                <div className={`relative w-full ${isFeatured ? 'h-[50vh] md:h-[65vh]' : 'h-[40vh] md:h-[45vh]'} bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-none`}>
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <RevealText
                      lines={[`${article.category} \u2022 ${lang === 'it' ? 'Articolo Blog' : 'Blog Article'}`]}
                      lineClassName="text-[10px] text-blue-600 dark:text-blue-400 font-maison uppercase tracking-[0.08em]"
                    />
                    <RevealText
                      lines={[article.date]}
                      lineClassName="text-[10px] text-gray-500 dark:text-gray-400 font-maison uppercase tracking-[0.08em]"
                      delay={0.1}
                    />
                  </div>

                  <div className="flex items-start justify-between gap-6">
                    <RevealText
                      lines={[article.title]}
                      lineClassName={`${isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-maison tracking-tight text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-[400ms]`}
                    />
                    <ArrowUpRight 
                      size={isFeatured ? 32 : 24} 
                      className="text-gray-400 dark:text-gray-500 transition-transform duration-[400ms] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0 mt-1" 
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-32 text-center">
            <p className="text-2xl text-gray-600 dark:text-gray-400 font-normal italic">
                {lang === 'it' ? 'Nessun articolo trovato per questa categoria.' : 'No articles found for this category.'}
            </p>
        </div>
      )}
    </PageLayout>
  );
}
