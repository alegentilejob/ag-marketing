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

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full pb-16">
        {experiences.map((job: any, index: number) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Link
              href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
              className="group flex flex-col gap-6"
            >
              <div className="relative w-full aspect-[4/5] bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-none">
                <Image
                  src={job.introduction.image}
                  alt={job.company}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start gap-4">
                  <RevealText
                    lines={[job.company]}
                    lineClassName="text-xl md:text-2xl font-maison tracking-tight text-gray-900 dark:text-white"
                  />
                  <div className="w-10 h-10 shrink-0 rounded-full bg-transparent group-hover:bg-blue-600 transition-colors duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-blue-600">
                    <ArrowUpRight 
                      size={18} 
                      className="text-gray-900 dark:text-white group-hover:text-white transition-colors duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-3">
                  <RevealText
                    lines={[job.role]}
                    lineClassName="text-xs font-maison uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400"
                    delay={0.05}
                  />
                  <RevealText
                    lines={[job.period]}
                    lineClassName="text-xs font-maison text-gray-500 dark:text-gray-400"
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
