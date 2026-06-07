"use client";
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedPath } from '@/utils/navigation';
import { StandardH1 } from '@/components/Typography';
import { motion } from 'framer-motion';
import RevealText from '@/components/RevealText';

export default function ExperienceHub() {
  const { lang, content } = useLanguage();
  const { sections } = content;
  const experiences = sections.experience.items;

  return (
    <PageLayout>
      <header className="mb-16">
        <StandardH1
          lines={[
            <>
              {sections.experience.title} <span className="text-blue-600">.</span>
            </>
          ]}
          className="mb-6"
        />
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-normal">
          {lang === 'it'
            ? 'Un percorso professionale costruito sull\'analisi, la strategia e la crescita continua.'
            : 'A professional journey built on analysis, strategy, and continuous growth.'}
        </p>
      </header>

      {/* List of Experiences using the latest case studies component from home page */}
      <div className="flex flex-col border-t border-gray-300 dark:border-gray-700 w-full mt-12">
        {experiences.map((job: any, index: number) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.15, 0.85, 0.35, 1] }}
            className="w-full"
          >
            <Link
              href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
              className="group w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 px-4 md:px-10 border-b border-gray-300 dark:border-gray-700 hover:bg-blue-600 transition-all duration-[300ms]"
              style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
            >
              <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                {/* Left: Square Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-blue-600 overflow-hidden rounded-none">
                  <Image
                    src={job.introduction.image}
                    alt={job.company}
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover transition-transform duration-[400ms] group-hover:scale-95"
                    style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                  />
                </div>

                {/* Center: Title / Intro text */}
                <div className="flex-1 md:pl-10 text-left">
                  <RevealText
                    lines={[job.company]}
                    lineClassName="text-lg md:text-xl font-medium tracking-tight text-gray-900 dark:text-white group-hover:text-white! font-maison leading-snug transition-colors"
                  />
                  <RevealText
                    lines={[job.role]}
                    lineClassName="text-xs text-gray-400 dark:text-gray-500 group-hover:text-white! font-maison mt-1 uppercase tracking-wider transition-colors"
                    delay={0.05}
                  />
                </div>

                {/* Right: Date & Arrow */}
                <div className="flex items-center gap-6 shrink-0 text-left md:text-right">
                  <RevealText
                    lines={[job.period]}
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
    </PageLayout>
  );
}
