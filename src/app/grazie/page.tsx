"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import { StandardH1, StandardH2 } from '@/components/Typography';

export default function ThankYouPage() {
  const { lang } = useLanguage();

  const content = lang === 'it' ? {
    title: 'Grazie!',
    subtitle: 'Il tuo messaggio è stato inviato con successo.',
    description: 'Ti risponderò il prima possibile. Nel frattempo, puoi continuare a esplorare i miei progetti.',
    backHome: 'Torna alla Home',
    viewProjects: 'Guarda i progetti'
  } : {
    title: 'Thank You!',
    subtitle: 'Your message has been sent successfully.',
    description: 'I will get back to you as soon as possible. In the meantime, feel free to explore my latest projects.',
    backHome: 'Back to Home',
    viewProjects: 'View Projects'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      <Header />
      
      <main className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center border border-blue-100 dark:border-blue-800">
              <CheckCircle className="text-blue-600 w-10 h-10" />
            </div>
          </div>

          <StandardH1
            lines={[content.title]}
            className="mb-6 uppercase text-center"
            lineClassName="text-6xl md:text-8xl font-black tracking-tighter"
          />
          
          <StandardH2
            text={content.subtitle}
            className="mb-6 text-center"
            lineClassName="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
          />

          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 font-light leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/"
              id="cta_thankyou_home"
              className="group flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xl"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {content.backHome}
            </Link>

            <Link 
              href="/progetti"
              id="cta_thankyou_projects"
              className="group flex items-center gap-3 border-2 border-gray-100 dark:border-gray-800 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              <Send className="w-4 h-4 text-blue-600" />
              {content.viewProjects}
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
