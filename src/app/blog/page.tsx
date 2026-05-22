"use client";
import React, { useState, useMemo } from 'react';
import PageLayout from '@/components/PageLayout';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { getLocalizedPath } from '@/utils/navigation';

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
      <header className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 translate-x-[-4px] uppercase text-gray-900 dark:text-white">
          {lang === 'it' ? 'Insights & Blog' : 'Insights & Blog'} <span className="text-blue-600">.</span>
        </h1>
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
                        className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.map((article, index) => (
          <Link 
            key={article.id}
            href={getLocalizedPath(`/blog/${article.category.toLowerCase()}/${article.year}/${article.month}/${article.day}/${article.slug}`, lang)}
            className="group block h-full flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <Image 
                src={article.coverImage} 
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.3em] border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 block">
                {article.date} — {lang === 'it' ? '5 min lettura' : '5 min read'}
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors leading-tight text-gray-900 dark:text-white">
                {article.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-normal line-clamp-3 mb-8 flex-1 leading-relaxed">
                {article.description}
              </p>
              
              <div className="mt-auto flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                <span>{lang === 'it' ? 'Leggi Articolo' : 'Read Article'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
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
