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
      <div className="flex flex-col border-t border-gray-300 dark:border-gray-700 w-full mt-12 mb-12">
        {filteredProjects.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.15, 0.85, 0.35, 1] }}
            className="w-full"
          >
            <Link
              href={getLocalizedPath(`/blog/${article.category.toLowerCase()}/${article.year}/${article.month}/${article.day}/${article.slug}`, lang)}
              className="group w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 px-4 md:px-10 border-b border-gray-300 dark:border-gray-700 hover:bg-blue-600 transition-all duration-[300ms]"
              style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
            >
              <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                {/* Left: Square Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-blue-600 overflow-hidden rounded-none">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover transition-transform duration-[400ms] group-hover:scale-95"
                    style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                  />
                </div>

                {/* Center: Title / Intro text */}
                <div className="flex-1 md:pl-10 text-left">
                  <RevealText
                    lines={[article.title]}
                    lineClassName="text-lg md:text-xl font-medium tracking-tight text-gray-900 dark:text-white group-hover:text-white! font-maison leading-snug transition-colors"
                  />
                  <RevealText
                    lines={[`${article.category} — ${lang === 'it' ? 'Articolo Blog' : 'Blog Article'}`]}
                    lineClassName="text-xs text-gray-400 dark:text-gray-500 group-hover:text-white! font-maison mt-1 uppercase tracking-wider transition-colors"
                    delay={0.05}
                  />
                </div>

                {/* Right: Date & Arrow */}
                <div className="flex items-center gap-6 shrink-0 text-left md:text-right">
                  <RevealText
                    lines={[article.date]}
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
