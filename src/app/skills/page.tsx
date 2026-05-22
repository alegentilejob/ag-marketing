"use client";
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, Terminal, Palette, BarChart3, Cloud, Share2, MonitorSpeaker } from 'lucide-react';

export default function SkillsPage() {
  const { lang, content } = useLanguage();
  const { sections } = content;

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'analytics': return <BarChart3 className="text-blue-600" size={24} />;
      case 'design': return <Palette className="text-blue-600" size={24} />;
      case 'social': return <Share2 className="text-blue-600" size={24} />;
      case 'data': return <Terminal className="text-blue-600" size={24} />;
      case 'presentation': return <MonitorSpeaker className="text-blue-600" size={24} />;
      default: return <Cloud className="text-blue-600" size={24} />;
    }
  };

  return (
    <PageLayout>
      <header className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 translate-x-[-4px] uppercase text-gray-900 dark:text-white">
          {sections.skills.title} <span className="text-blue-600">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-normal">
          {lang === 'it' 
            ? 'Un set di competenze tecniche e trasversali focalizzate sull\'ottimizzazione dei processi digitali e della brand identity.'
            : 'A set of technical and soft skills focused on optimizing digital processes and brand identity.'}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Hard Skills Sidebar */}
        <div className="lg:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
            {lang === 'it' ? 'Competenze Chiave' : 'Hard Skills'}
          </h3>
          <ul className="space-y-5">
            {sections.skills.hard.map((skill: string, index: number) => (
              <li key={index} className="flex items-center gap-4 group">
                <div className="w-2 h-2 bg-blue-600 scale-0 group-hover:scale-100 transition-transform shrink-0" />
                <span className="text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-blue-600 transition-colors text-gray-900 dark:text-white">{skill}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 mt-16 mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
            {lang === 'it' ? 'Soft Skills' : 'Soft Skills'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {sections.skills.soft.map((skill: string, index: number) => (
              <div key={index} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Software & Tools Main Grid */}
        <div className="lg:col-span-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
            {lang === 'it' ? 'Software & Strumenti' : 'Software & Tools'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sections.skills.software.map((sw: any, index: number) => (
              <div key={index} className="p-8 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white dark:bg-black border border-gray-100 dark:border-gray-800">
                    {getIcon(sw.category)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">{sw.category}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tighter text-gray-900 dark:text-white">{sw.name}</h4>
                <div className="flex items-center gap-2 mt-auto text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 size={12} />
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em]">
                    {lang === 'it' ? 'Piena Padronanza' : 'Full Proficiency'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
