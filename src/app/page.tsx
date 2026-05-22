/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Header from "../components/Header";
import { Briefcase, ArrowRight } from 'lucide-react';
import { RevealText, RevealImage, FadeIn } from "../components/animations";
import { useLanguage } from "../context/LanguageContext";
import Link from 'next/link';
import Image from 'next/image';
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
  const latestProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const dateA = `${a.year}-${a.month}-${a.day}`;
      const dateB = `${b.year}-${b.month}-${b.day}`;
      return dateB.localeCompare(dateA);
    }).slice(0, 3);
  }, [projects]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      <Header activeSection={activeSection} />
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-44 pb-24 relative overflow-x-hidden">
        <section id="home" className="min-h-[85vh] md:pt-16 pb-16 flex flex-col justify-center">
          <div className="max-w-5xl">
            <RevealText delay={0.01}>
              <p className="text-blue-600 mb-4 text-xs md:text-sm font-sans font-extrabold uppercase tracking-[0.3em]">
                {siteConfig.meta.role}
              </p>
            </RevealText>
            <RevealText delay={0.05}>
              <h1 className="max-w-4xl text-gray-900 dark:text-gray-100 font-sans font-black tracking-tighter leading-[1.1]">
                {siteConfig.meta.tagline}
              </h1>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="mt-10 text-gray-600 dark:text-gray-300 max-w-2xl text-lg md:text-xl font-normal leading-relaxed font-sans tracking-wide">
                {siteConfig.meta.subtitle}
              </p>
            </RevealText>
          </div>

          {/* Random Moving Carousel */}
          <div className="relative mt-[104px] -mx-6 md:-mx-12 lg:-mx-24 overflow-hidden py-10">
            <div
              className="flex gap-6 will-change-transform"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {shuffledImages.length > 0 && [...shuffledImages, ...shuffledImages, ...shuffledImages, ...shuffledImages].map((src, i) => (
                <div key={i} className="flex-shrink-0 w-[320px] aspect-[3/4] border border-gray-100 dark:border-gray-800 p-2 bg-white dark:bg-black group">
                  <div className="w-full h-full overflow-hidden relative">
                    <Image
                      src={src}
                      alt="Portfolio detail"
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chi sono section */}
        <section id="about" className="relative py-[104px] bg-tech-blue border-y border-gray-100 dark:border-gray-800 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="mb-10 text-gray-900 dark:text-gray-100 font-sans font-bold tracking-tight">
                {sections.about.title}
              </h2>
              <p
                className="text-[16px] md:text-[18px] text-gray-800 dark:text-gray-200 max-w-3xl leading-[1.6] mb-10 font-normal font-sans tracking-wide"
                dangerouslySetInnerHTML={{ __html: sections.about.bio }}
              />

              {/* Education Sub-section */}
              <div className="space-y-10">
                <h3 className="text-xs md:text-sm font-sans font-extrabold uppercase tracking-[0.3em] text-gray-400">{lang === 'it' ? 'Formazione' : 'Education'}</h3>
                <div className="space-y-6">
                  {sections.about.education.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-blue-600 pl-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white font-sans tracking-tight">{edu.institution}</h4>
                      <p className="text-[14px] text-gray-500 dark:text-gray-400 font-sans tracking-wide mt-1">{edu.period} — {edu.location}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href={getLocalizedPath("/chi-sono", lang)}
                    id="nav_link_biografia"
                    className="btn-inline text-xs font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-white hover:text-blue-600 border-b-2 border-blue-600 pb-1.5 transition-all"
                  >
                    <span>{lang === 'it' ? 'Leggi Biografia Completa' : 'Read Full Biography'}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
            {/* Profile Image Box */}
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-none border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 relative overflow-hidden group">
              <Image
                src={siteConfig.meta.profileImage}
                alt={siteConfig.meta.name}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="z-[-1] uppercase text-[10px] tracking-widest absolute">{siteConfig.meta.name} {lang === 'it' ? 'Foto' : 'Photo'}</span>
            </div>
          </div>
        </section>

        {/* Esperienze Lavorative */}
        <section id="esperienze" className="py-[104px] border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-[30px] font-bold mb-16 text-gray-900 dark:text-gray-100 font-sans tracking-tight">
            {sections.experience.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {sections.experience.items.map((job: any) => (
              <Link
                key={job.id}
                href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
                id={`cta_exp_item_${job.id}`}
                className="group block p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-600 transition-all bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[300px]"
              >
                <div className="flex flex-col h-full relative z-10">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-blue-600 mb-6 block">
                    {job.period}
                  </span>
                  <h3 className="text-[28px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight group-hover:text-blue-600 transition-colors font-sans">
                    {job.company}
                  </h3>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-[0.2em] mb-8 font-sans">
                    {job.role}
                  </p>

                  <div className="mt-auto flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-gray-100">
                    <span>{lang === 'it' ? 'Dettagli Esperienza' : 'Experience Details'}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-8xl font-black text-black/[0.02] dark:text-white/[0.02] pointer-events-none select-none font-sans">
                  {job.company.charAt(0)}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={getLocalizedPath("/esperienze", lang)}
              id="cta_exp_view_all"
              className="btn-secondary group tracking-wider"
            >
              <span>{lang === 'it' ? 'Vedi Percorso Completo' : 'View Full Journey'}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Latest Case Studies Section */}
        <section className="py-[104px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-0 text-gray-900 dark:text-white font-sans">
              {lang === 'it' ? 'Ultimi Case Studies' : 'Latest Case Studies'}<span className="text-blue-600">.</span>
            </h2>
            <Link
              href={getLocalizedPath("/progetti", lang)}
              id="cta_projects_view_hub"
              className="btn-inline group tracking-wider"
            >
              <span>{lang === 'it' ? 'Esplora l\'Hub Progetti' : 'View All Projects'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {latestProjects.map((project: any, index: number) => (
              <Link
                key={project.id}
                href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                id={`cta_project_card_${project.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 text-[10px] font-sans font-extrabold uppercase tracking-[0.25em] border border-gray-100 dark:border-gray-800 rounded-md text-blue-600">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-[22px] font-bold tracking-tight mb-3 leading-tight group-hover:text-blue-600 transition-colors font-sans">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gray-400">
                    {project.date}
                  </span>
                  <div className="w-8 h-px bg-gray-200 dark:bg-gray-800" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-blue-600">
                    {lang === 'it' ? 'Analisi' : 'Analysis'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Skill e Software */}
        <section id="skills" className="py-[104px] border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-[30px] font-bold mb-16 text-gray-900 dark:text-gray-100 font-sans tracking-tight">
            {sections.skills.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xs md:text-sm font-sans font-extrabold uppercase tracking-[0.3em] text-gray-400 mb-10 border-b border-gray-100 dark:border-gray-800 pb-2">Hard Skills</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-4 md:space-y-4">
                {sections.skills.hard.map((skill: string, index: number) => (
                  <li key={index} className="text-[16px] text-gray-700 dark:text-gray-300 flex items-center gap-2 font-sans font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 bg-blue-600 shrink-0"></span> <span className="truncate" id={`lnk_skill_${skill.toLowerCase().replace(/\s/g, '_')}`}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-sans font-extrabold uppercase tracking-[0.3em] text-gray-400 mb-10 border-b border-gray-100 dark:border-gray-800 pb-2">Soft Skills</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-4 md:space-y-4">
                {sections.skills.soft.map((skill: string, index: number) => (
                  <li key={index} className="text-[16px] text-gray-700 dark:text-gray-300 flex items-center gap-2 font-sans font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 shrink-0"></span> <span className="truncate">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-sans font-extrabold uppercase tracking-[0.3em] text-gray-400 mb-10 border-b border-gray-100 dark:border-gray-800 pb-2">Software & Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                {sections.skills.software.map((sw: any, index: number) => (
                  <div key={index} className="flex items-center gap-2 md:gap-4 group">
                    <div className="flex flex-col min-w-0 border-l-2 border-gray-100 dark:border-gray-800 group-hover:border-blue-600 pl-4 py-1 transition-colors duration-300">
                      <span className="text-[16px] font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors truncate font-sans tracking-tight" id={`lnk_software_${sw.name.toLowerCase().replace(/\s/g, '_')}`}>{sw.name}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 truncate font-sans mt-0.5">{sw.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href={getLocalizedPath("/skills", lang)}
              className="btn-tertiary group font-sans tracking-wider"
            >
              <span>{lang === 'it' ? 'Vedi Tutti i Software & Skill' : 'View All Skills & Software'}</span>
              <ArrowRight size={16} className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
