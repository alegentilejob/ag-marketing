"use client";
import React, { useState, useMemo } from 'react';
import PageLayout from '@/components/PageLayout';
import { FadeIn, RevealText } from '@/components/animations';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { getLocalizedPath } from '@/utils/navigation';

export default function BlogPage() {
  const { lang } = useLanguage();
  // Filter out 'Wolly' as it's a project/case study, not a blog post
  const allProjects = lang === 'it' ? projectsIt : projectsEn;
  const blogArticles = useMemo(() => 
    allProjects.filter(p => p.category.toLowerCase() !== 'wolly'), 
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
      <header className="mb-24">
        <RevealText>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 translate-x-[-4px] uppercase">
            {lang === 'it' ? 'Insights & Blog' : 'Insights & Blog'} <span className="text-blue-600">.</span>
          </h1>
        </RevealText>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <FadeIn delay={0.2} className="flex-1">
                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
                    {lang === 'it' 
                        ? 'Analisi, riflessioni e casi studio sul mondo del marketing digitale e delle tecnologie emergendi.' 
                        : 'Analysis, reflections, and case studies on the world of digital marketing and emerging technologies.'}
                </p>
            </FadeIn>
            
            {/* Category Filter */}
            <FadeIn delay={0.3} className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all
                            ${selectedCategory === cat 
                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                                : 'bg-transparent border-gray-100 dark:border-gray-800 text-gray-400 hover:border-blue-600 hover:text-blue-600'}`}
                    >
                        {cat}
                    </button>
                ))}
            </FadeIn>
        </div>
      </header>

      {/* Blog Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.map((article, index) => (
          <FadeIn key={article.id} delay={0.1 * (index % 3)}>
            <Link 
              href={getLocalizedPath(`/blog/${article.category.toLowerCase()}/${article.year}/${article.month}/${article.day}/${article.slug}`, lang)}
              className="group block h-full flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <img 
                  src={article.coverImage} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.3em] border border-gray-100 dark:border-gray-800">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">
                  {article.date} — {lang === 'it' ? '5 min lettura' : '5 min read'}
                </span>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-light line-clamp-3 mb-8 flex-1 leading-relaxed">
                  {article.description}
                </p>
                
                <div className="mt-auto flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                  <span>{lang === 'it' ? 'Leggi Articolo' : 'Read Article'}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-32 text-center">
            <p className="text-2xl text-gray-400 font-light italic">
                {lang === 'it' ? 'Nessun articolo trovato per questa categoria.' : 'No articles found for this category.'}
            </p>
        </div>
      )}
    </PageLayout>
  );
}
