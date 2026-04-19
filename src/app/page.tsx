"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Header from "../components/Header";
import { Briefcase, ArrowRight } from 'lucide-react';
import { RevealText, RevealImage, FadeIn } from "../components/animations";
import { useLanguage } from "../context/LanguageContext";
import Link from 'next/link';
import { getLocalizedPath } from "@/utils/navigation";

import { projectsIt, projectsEn } from './../data/projects';

export default function Home() {
  const { lang, content } = useLanguage();
  const { siteConfig, sections } = content;
  const projects = lang === 'it' ? projectsIt : projectsEn;

  // State for the carousel offset and shuffled images to avoid hydration mismatch
  const [offset, setOffset] = useState(0);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState("home");

  // Base list of images from media folders (excluding profile)
  const baseImages = useMemo(() => [
    "/media/experiences/anularis/FotoAnularis.png",
    "/media/experiences/anularis/PremiazioneAnularis-1-768x433.png",
    "/media/experiences/anularis/Tavola disegno 7@2x.png",
    "/media/experiences/fridhem/Tavola disegno 1@2x.png",
    "/media/experiences/fridhem/Tavola disegno 2@2x.png",
    "/media/experiences/fridhem/Tavola disegno 3@2x.png",
    "/media/experiences/naxa/MG_9908-w-poltu-quatu.jpg",
    "/media/experiences/naxa/andaz-maui-at-wailea-resort-17697889581.jpg",
    "/media/experiences/naxa/cantieri-di-pisa-polaris-48-intro.jpg",
    "/media/experiences/fridhem/Tavola disegno 15.png",
    "/media/experiences/anularis/maschile-1-768x351.png"
  ], []);

  useEffect(() => {
    // Shuffle only on the client to prevent hydration errors
    setShuffledImages([...baseImages].sort(() => Math.random() - 0.5));
    
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (baseImages.length * 600));
    }, 25);
    return () => clearInterval(interval);
  }, [baseImages]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Track sections defined in navigation
    const sectionIds = ['home', 'about', 'esperienze', 'skills', 'contact'];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      <Header activeSection={activeSection} />
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-44 pb-24 relative overflow-x-hidden">
        <section id="home" className="min-h-[85vh] md:pt-12 pb-12 flex flex-col justify-center">
          <div className="max-w-4xl">
            <RevealText delay={0.1}>
              <p className="text-gray-500 mb-4 text-sm md:text-base font-medium tracking-wide">
                {siteConfig.meta.role}
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-3xl text-gray-900 dark:text-gray-100">
                {siteConfig.meta.tagline}
              </h1>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="mt-8 text-gray-400 max-w-2xl text-xl md:text-2xl font-light leading-relaxed">
                {siteConfig.meta.subtitle}
              </p>
            </RevealText>
          </div>

          {/* Random Moving Carousel */}
          <FadeIn delay={0.4} className="relative mt-24 -mx-6 md:-mx-12 lg:-mx-24 overflow-hidden py-10">
            <div 
              className="flex gap-6 transition-transform duration-300 ease-linear"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {shuffledImages.length > 0 && [...shuffledImages, ...shuffledImages, ...shuffledImages, ...shuffledImages].map((src, i) => (
                <div key={i} className="flex-shrink-0 w-[320px] aspect-[3/4] border border-gray-100 dark:border-gray-800 p-2 bg-white dark:bg-black group">
                  <div className="w-full h-full overflow-hidden relative">
                    <img 
                      src={src} 
                      alt="Portfolio detail" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Chi sono section */}
        <section id="about" className="py-24 border-t border-gray-100 dark:border-gray-800 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <RevealText>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
                  {sections.about.title}
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p 
                className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-12"
                dangerouslySetInnerHTML={{ __html: sections.about.bio }}
              />
            </RevealText>

            {/* Education Sub-section */}
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400">{lang === 'it' ? 'Formazione' : 'Education'}</h3>
              </FadeIn>
              <div className="space-y-6">
                {sections.about.education.map((edu, idx) => (
                  <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                    <div className="border-l-2 border-blue-600 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h4>
                      <p className="text-gray-500">{edu.period} — {edu.location}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.5} className="mt-12">
                <Link 
                  href={getLocalizedPath("/chi-sono", lang)}
                  id="nav_link_biografia"
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] pb-2 border-b-2 border-blue-600 hover:text-blue-600 transition-all font-bold"
                >
                  {lang === 'it' ? 'Leggi Biografia Completa' : 'Read Full Biography'}
                  <ArrowRight size={14} />
                </Link>
              </FadeIn>
            </div>
          </div>
          {/* Profile Image Box */}
          <RevealImage delay={0.5} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-none border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 relative overflow-hidden group">
            <img 
              src={siteConfig.meta.profileImage} 
              alt={siteConfig.meta.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="z-[-1] uppercase text-[10px] tracking-widest absolute">{siteConfig.meta.name} {lang === 'it' ? 'Foto' : 'Photo'}</span>
          </RevealImage>
        </section>

        {/* Esperienze Lavorative */}
        <section id="esperienze" className="py-24 border-t border-gray-100 dark:border-gray-800">
          <RevealText>
            <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-gray-900 dark:text-gray-100">
              {sections.experience.title}
            </h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {sections.experience.items.map((job: any) => (
              <Link 
                key={job.id} 
                href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
                id={`cta_exp_item_${job.id}`}
                className="group block p-10 border border-gray-100 dark:border-gray-800 hover:border-blue-600 transition-all bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden"
              >
                <div className="flex flex-col h-full relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 block">
                    {job.period}
                  </span>
                  <h3 className="text-3xl font-bold mb-2 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                    {job.company}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-8">
                    {job.role}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-gray-100">
                    <span>{lang === 'it' ? 'Dettagli Esperienza' : 'Experience Details'}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-8xl font-black text-black/[0.02] dark:text-white/[0.02] pointer-events-none select-none">
                  {job.company.charAt(0)}
                </div>
              </Link>
            ))}
          </div>
          
          <FadeIn className="mt-16 text-center">
            <Link 
                href={getLocalizedPath("/esperienze", lang)} 
                id="cta_exp_view_all"
                className="inline-flex items-center gap-3 px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all shadow-xl"
            >
                {lang === 'it' ? 'Vedi Percorso Completo' : 'View Full Journey'}
                <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </section>

        {/* Latest Case Studies Section */}
        <section className="py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <RevealText>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-0">
                {lang === 'it' ? 'Ultimi Case Studies' : 'Latest Case Studies'}<span className="text-blue-600">.</span>
              </h2>
            </RevealText>
            <FadeIn delay={0.2}>
              <Link 
                href={getLocalizedPath("/progetti", lang)}
                id="cta_projects_view_hub"
                className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] pb-2 border-b-2 border-gray-100 dark:border-gray-800 hover:border-blue-600 transition-all font-bold"
              >
                {lang === 'it' ? 'Esplora l\'Hub Progetti' : 'View All Projects'}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project: any, index: number) => (
              <FadeIn key={project.id} delay={0.1 * index}>
                <Link 
                  href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                  id={`cta_project_card_${project.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 text-[8px] font-bold uppercase tracking-[0.4em] border border-gray-100 dark:border-gray-800">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {project.date}
                    </span>
                    <div className="w-8 h-px bg-gray-200 dark:bg-gray-800" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                      {lang === 'it' ? 'Analisi' : 'Analysis'}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>        {/* Progetti Personali - Rimosso per ora
        <section id="projects" className="py-24 border-t border-gray-100 dark:border-gray-800">
          ...
        </section>
        */}

        {/* Skill e Software */}
        <section id="skills" className="py-16 md:py-24 border-t border-gray-100 dark:border-gray-800">
          <RevealText>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-900 dark:text-gray-100">
              {sections.skills.title}
            </h2>
          </RevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <FadeIn delay={0.1}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-2">Hard Skills</h3>
              </FadeIn>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 md:space-y-4">
                {sections.skills.hard.map((skill, index) => (
                  <FadeIn key={index} delay={0.2 + index * 0.05}>
                    <li className="text-base md:text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2 font-bold">
                      <span className="w-1.5 h-1.5 bg-blue-600 shrink-0"></span> <span className="truncate" id={`lnk_skill_${skill.toLowerCase().replace(/\s/g, '_')}`}>{skill}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
            <div>
              <FadeIn delay={0.1}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-2">Soft Skills</h3>
              </FadeIn>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 md:space-y-4">
                {sections.skills.soft.map((skill, index) => (
                  <FadeIn key={index} delay={0.2 + index * 0.05}>
                    <li className="text-base md:text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2 font-bold">
                      <span className="w-1.5 h-1.5 bg-gray-300 shrink-0"></span> <span className="truncate">{skill}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
            <div>
              <FadeIn delay={0.1}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-2">Software & Tools</h3>
              </FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                {sections.skills.software.map((sw: any, index: number) => (
                  <FadeIn key={index} delay={0.2 + index * 0.05} className="flex items-center gap-2 md:gap-4 group">
                    <div className="flex flex-col min-w-0 border-l-2 border-gray-100 dark:border-gray-800 pl-4 py-1">
                      <span className="text-sm md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors truncate" id={`lnk_software_${sw.name.toLowerCase().replace(/\s/g, '_')}`}>{sw.name}</span>
                      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 truncate">{sw.category}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
          
          <FadeIn className="mt-16 text-center">
            <Link 
                href={getLocalizedPath("/skills", lang)} 
                className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-black dark:border-white font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
            >
                {lang === 'it' ? 'Vedi Tutti i Software & Skill' : 'View All Skills & Software'}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}
