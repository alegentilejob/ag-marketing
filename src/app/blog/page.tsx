"use client";
import React, { useState, useMemo } from 'react';
import PageLayout from '@/components/PageLayout';
import { projectsIt, projectsEn } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { getLocalizedPath } from '@/utils/navigation';
import RevealText from '@/components/RevealText';
import { StandardH1, StandardH2 } from '@/components/Typography';

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
      <div className="flex flex-col gap-12 mb-12">
        {filteredProjects.map((article, index) => (
          <Link 
            key={article.id}
            href={getLocalizedPath(`/blog/${article.category.toLowerCase()}/${article.year}/${article.month}/${article.day}/${article.slug}`, lang)}
            className="group relative flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-blue-600/30 transition-all duration-500 gap-0 md:gap-6"
          >
            {/* Left Side: Info - Golden Ratio 61.8% */}
            <div className="w-full md:w-[61.8%] p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-blue-600">
                  {article.date}
                </span>
                <StandardH2
                  text={article.title}
                  className="mb-2 mt-4"
                  lineClassName="group-hover:text-blue-600 transition-colors"
                />
                <h3 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-8 uppercase tracking-[0.08em]">
                  {article.category} — {lang === 'it' ? 'Articolo Blog' : 'Blog Article'}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light mb-8 line-clamp-2">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.08em] text-gray-900 dark:text-white mt-auto">
                <span>{lang === 'it' ? 'Leggi Articolo' : 'Read Article'}</span>
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
                src={article.coverImage}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute -bottom-6 -right-6 text-[12rem] md:text-[16rem] font-bold text-black/5 dark:text-white/5 pointer-events-none select-none tracking-tighter leading-none">
              0{filteredProjects.length - index}
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
