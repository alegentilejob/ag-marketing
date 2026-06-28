/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Header from "../components/Header";
import { ArrowUpRight, Mail, Copy, Check, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { useLanguage } from "../context/LanguageContext";
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedPath } from "@/utils/navigation";
import { projectsIt, projectsEn } from './../data/projects';
import { framerTypography, framerColors } from "@/styles/framer-tokens";
import HeroCarousel from '@/components/HeroCarousel';
import RevealText from '@/components/RevealText';
import DynamicRevealText from '@/components/DynamicRevealText';
import DynamicRevealTextWithImages from '@/components/DynamicRevealTextWithImages';
import TertiaryButton from '@/components/TertiaryButton';
import SoftwareLogo from '@/components/SoftwareLogo';
import { DisplayH1, DisplayH2, StandardH2 } from '@/components/Typography';


const softwareList = [
  { name: "GA4" },
  { name: "Semrush" },
  { name: "MailChimp" },
  { name: "Meta" },
  { name: "Wordpress" },
  { name: "GSC" },
  { name: "PPT" },
  { name: "DataStudio" },
  { name: "SEOZoom" },
  { name: "Excel" },
  { name: "Linked Helper" },
  { name: "LinkedIn Sales Navigator" },
  { name: "Canva" },
  { name: "Figma" }
];

export default function Home() {
  const { lang, content } = useLanguage();
  const { siteConfig, sections } = content;
  const projects = lang === 'it' ? projectsIt : projectsEn;
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  const trackContactClick = (type: string, value: string, location: string = 'hero') => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'contact_click',
        contact_type: type,
        contact_value: value,
        click_location: location,
        page_path: window.location.pathname
      });
    }
  };

  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackContactClick('copy_email', siteConfig.contact.email, 'hero');
  };

  // ── Intro animation removed ──

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

    const sectionIds = ['home', 'about', 'esperienze', 'skills', 'contact'];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getCaptionForImage = (src: string) => {
    if (src.includes('anularis')) return lang === 'it' ? "Anularis — Luxury Market Research" : "Anularis — Luxury Market Research";
    if (src.includes('fridhem')) return lang === 'it' ? "Fridhem Center — Social Media Strategy" : "Fridhem Center — Social Media Strategy";
    if (src.includes('naxa') || src.includes('MG_9908')) return lang === 'it' ? "Naxa — SEO & AEO Advanced Strategy" : "Naxa — SEO & AEO Advanced Strategy";
    return lang === 'it' ? "Alessandro Gentile — Digital Strategy" : "Alessandro Gentile — Digital Strategy";
  };

  const latestProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const dateA = `${a.year}-${a.month}-${a.day}`;
      const dateB = `${b.year}-${b.month}-${b.day}`;
      return dateB.localeCompare(dateA);
    }).slice(0, 3);
  }, [projects]);

  const defaultImages = useMemo(() => {
    const expImages = [
      "/media/experiences/anularis/FotoAnularis.png",
      "/media/experiences/fridhem/Tavola disegno 1@2x.png",
      "/media/experiences/naxa/MG_9908-w-poltu-quatu.jpg",
    ];
    const projImages = projects
      .filter(p => !p.slug.includes('woly') && !p.id.includes('woly') && p.category.toLowerCase() !== 'marketing')
      .map(p => p.coverImage);
    return Array.from(new Set([...expImages, ...projImages]));
  }, [projects]);

  const [carouselImages, setCarouselImages] = useState<string[]>(defaultImages);

  useEffect(() => {
    setCarouselImages([...defaultImages].sort(() => Math.random() - 0.5));
  }, [defaultImages]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (carouselImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselImages]);

  // Predefined and deterministic random-style sequences of missing squares for each row.
  // Row 1 has 1 missing square, Row 2 has 3 missing squares, Row 3 has 2 missing squares.
  const row1Missing = [16];
  const row2Missing = [6, 20, 34];
  const row3Missing = [9, 25];

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      {/* ── Intro animation removed ── */}

      <Header activeSection={activeSection} />
      <main className="pt-0 pb-24 relative">

        {/* ─── HERO SECTION ─── */}
        <section id="home" className="relative w-full min-h-screen flex flex-col justify-center py-20 overflow-hidden bg-white dark:bg-[#111]">

          {/* Tagline — only renders (and reveals) once intro is done */}
          <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 w-full mb-12 flex flex-col gap-6">
            <DynamicRevealTextWithImages
              key="hero-text"
              text={
                lang === 'it'
                  ? "Sono Alessandro Gentile, growth marketer. Il mio obiettivo è entrare in una startup e dare il massimo ogni giorno, crescendo e contribuendo agli obiettivi del team."
                  : "I'm Alessandro Gentile, growth marketer. My goal is to join a startup and give my best every day, growing and contributing to the team's objectives."
              }
              images={defaultImages}
              wordsPerImage={3}
              delay={0}
              stagger={0.12}
              animateOnMount={true}
              lineClassName="text-gray-900 dark:text-white font-medium font-sans text-[clamp(19px,4.8vw,64px)] tracking-tight leading-tight display-h1 uppercase"
            />
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.15, 0.85, 0.35, 1] }}
              className="flex justify-center w-full"
            >
              <motion.a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => trackContactClick('email', siteConfig.contact.email, 'hero')}
                className="bg-[#0038A8] text-white text-[14px] font-inter font-normal tracking-normal normal-case rounded-full px-6 py-3 leading-none transition-none select-none cursor-pointer w-fit mt-10 hover:bg-[#1D0CA8] shadow-[0_4px_24px_rgba(0,56,168,0.15)] flex items-center justify-center"
              >
                {lang === 'it' ? 'Scrivi mail' : 'Write email'}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: scrollOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-0.5 text-gray-400 dark:text-gray-500 cursor-pointer pointer-events-auto"
              onClick={() => {
                document.getElementById('esperienze')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-[10px] font-maison uppercase tracking-[0.2em] select-none text-gray-400 dark:text-gray-500">
                {lang === 'it' ? 'Scorri' : 'Scroll'}
              </span>
              <ChevronDown size={14} className="text-[#0038A8] dark:text-white" />
            </motion.div>
          </motion.div>

        </section>

        {/* Esperienze Lavorative */}
        <section id="esperienze" className="py-[104px] border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-[1400px] mx-auto px-2 md:px-4">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <RevealText
                lines={[sections.experience.title]}
                lineClassName="text-gray-900 dark:text-gray-100 font-medium tracking-tight leading-tight font-maison text-[clamp(32px,5vw,56px)]"
              />
              <TertiaryButton
                href={getLocalizedPath("/esperienze", lang)}
                id="cta_exp_scopri"
                text={lang === 'it' ? 'Scopri di più' : 'Learn more'}
                variant="default"
                className="shrink-0"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {sections.experience.items.map((job: any, idx: number) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.15, 0.85, 0.35, 1] }}
                  className="group block"
                >
                  <Link
                    href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
                    id={`cta_exp_item_${job.id}`}
                    className="block cursor-pointer"
                  >
                    {/* Container aspect ratio, overflow hidden, brand blue background underneath */}
                    <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-blue-600 rounded-none">
                      <Image
                        src={job.introduction.image}
                        alt={job.company}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[400ms] group-hover:scale-95"
                        style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                      />
                    </div>
                    <RevealText
                      lines={[job.role]}
                      lineClassName="text-[22px] font-normal tracking-tight mb-2 leading-tight text-gray-900 dark:text-white font-maison"
                    />
                    <RevealText
                      lines={[job.company]}
                      lineClassName="text-[14px] text-gray-500 dark:text-gray-400 font-normal uppercase tracking-[0.08em] mb-1 font-maison"
                      delay={0.05}
                    />
                    <RevealText
                      lines={[job.period]}
                      lineClassName="text-[10px] font-maison font-normal uppercase tracking-[0.08em] text-gray-400 block mt-2"
                      delay={0.1}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Skill e Software (Solid brand blue banner block with tagline & marquee) */}
        <section id="skills" className="relative w-full bg-blue-600 border-0 pt-[120px] pb-16 flex flex-col overflow-hidden">

          <div className="max-w-[1400px] mx-auto px-2 md:px-4 w-full relative z-10 mb-16">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
              <DisplayH2
                text={
                  lang === 'it'
                    ? "Nel mio percorso ho avuto l'opportunità di poter unire competenze strategiche e pratiche, ottenendo una visione a 360°: dall'idea fino alla sua realizzazione."
                    : "In my journey, I had the opportunity to combine strategic and practical skills, achieving a 360° vision: from the idea to its realization."
                }
                lineClassName="text-white!"
                delay={0.1}
                stagger={0.12}
                className="w-full lg:w-[75%]"
              />
              <TertiaryButton
                href={getLocalizedPath("/skills", lang)}
                id="cta_skills_scopri"
                text={lang === 'it' ? 'Scopri di più' : 'Learn more'}
                variant="white"
                className="shrink-0 md:mt-2"
              />
            </div>
          </div>

          {/* Staggered Alternating Infinite Marquees with dynamically omitted squares */}
          <div className="w-full flex flex-col gap-8 select-none pointer-events-none">
            
            {/* Row 1: Left to Right (GA4, MailChimp, Wordpress) */}
            <div className="w-full overflow-hidden flex">
              <div className="flex gap-8 whitespace-nowrap animate-marquee-ltr shrink-0 min-w-full">
                {Array.from({ length: 40 }).map((_, idx) => {
                  // Show a logo every 4 slots
                  const sw = idx % 4 === 0 ? [softwareList[0], softwareList[2], softwareList[4], softwareList[8], softwareList[10]][(idx / 4) % 5] : null;
                  const isVisible = sw && !row1Missing.includes(idx);
                  return isVisible ? (
                    <SoftwareLogo
                      key={idx}
                      name={sw.name}
                      className="w-24 h-24 md:w-32 md:h-32"
                    />
                  ) : (
                    <div key={idx} className="w-24 h-24 md:w-32 md:h-32 bg-blue-400/30 rounded-none shrink-0 border border-white/5" />
                  );
                })}
              </div>
            </div>

            {/* Row 2: Right to Left (Semrush, Meta, PPT) */}
            <div className="w-full overflow-hidden flex">
              <div className="flex gap-8 whitespace-nowrap animate-marquee-rtl shrink-0 min-w-full pl-16">
                {Array.from({ length: 40 }).map((_, idx) => {
                  // Show a logo every 4 slots, offset by 2
                  const sw = (idx - 2) % 4 === 0 ? [softwareList[1], softwareList[3], softwareList[6], softwareList[9], softwareList[11]][Math.floor((idx - 2) / 4) % 5] : null;
                  const isVisible = sw && !row2Missing.includes(idx);
                  return isVisible ? (
                    <SoftwareLogo
                      key={idx}
                      name={sw.name}
                      className="w-24 h-24 md:w-32 md:h-32"
                    />
                  ) : (
                    <div key={idx} className="w-24 h-24 md:w-32 md:h-32 bg-blue-400/35 rounded-none shrink-0 border border-white/5" />
                  );
                })}
              </div>
            </div>

            {/* Row 3: Left to Right (GSC, DataStudio) */}
            <div className="w-full overflow-hidden flex">
              <div className="flex gap-8 whitespace-nowrap animate-marquee-ltr shrink-0 min-w-full pl-32">
                {Array.from({ length: 40 }).map((_, idx) => {
                  // Show a logo every 4 slots, offset by 1
                  const sw = (idx - 1) % 4 === 0 ? [softwareList[5], softwareList[7], softwareList[12], softwareList[13]][Math.floor((idx - 1) / 4) % 4] : null;
                  const isVisible = sw && !row3Missing.includes(idx);
                  return isVisible ? (
                    <SoftwareLogo
                      key={idx}
                      name={sw.name}
                      className="w-24 h-24 md:w-32 md:h-32"
                    />
                  ) : (
                    <div key={idx} className="w-24 h-24 md:w-32 md:h-32 bg-blue-400/30 rounded-none shrink-0 border border-white/5" />
                  );
                })}
              </div>
            </div>

          </div>

        </section>

        {/* Latest Case Studies Section */}
        <section className="w-full bg-white dark:bg-[#111] py-[104px] border-t border-gray-300 dark:border-gray-700">
          
          {/* Header inside the grid max-w container */}
          <div className="max-w-[1400px] mx-auto px-2 md:px-4">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <StandardH2
                lines={[lang === 'it' ? 'Ultimi Case Studies' : 'Latest Case Studies']}
              />
              <TertiaryButton
                href={getLocalizedPath("/progetti", lang)}
                id="cta_projects_scopri"
                text={lang === 'it' ? 'Scopri di più' : 'Learn more'}
                variant="default"
                className="shrink-0"
              />
            </div>
          </div>

          {/* List Rows at absolute w-full - edge-to-edge */}
          <div className="flex flex-col border-t border-gray-300 dark:border-gray-700 w-full">
            {latestProjects.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.15, 0.85, 0.35, 1] }}
                className="w-full"
              >
                <Link
                  href={getLocalizedPath(`/progetti/${project.category}/${project.year}/${project.month}/${project.day}/${project.slug}`, lang)}
                  id={`cta_project_card_${project.id}`}
                  className="group w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 px-4 md:px-10 border-b border-gray-300 dark:border-gray-700 hover:bg-blue-600 transition-all duration-[300ms]"
                  style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                >
                  
                  {/* Horizontal inner boundary constraint (to keep layout contents aligned with page edges but bg full width) */}
                  <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    
                    {/* Left: Square Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-blue-600 overflow-hidden rounded-none">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        priority={index < 3}
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover transition-transform duration-[400ms] group-hover:scale-95"
                        style={{ transitionTimingFunction: 'var(--ease-expo-root)' }}
                      />
                    </div>

                    {/* Center: Title / Intro text */}
                    <div className="flex-1 md:pl-10 text-left">
                      <RevealText
                        lines={[project.title]}
                        lineClassName="text-lg md:text-xl font-medium tracking-tight text-gray-900 dark:text-white group-hover:text-white! font-maison leading-snug transition-colors"
                      />
                      <RevealText
                        lines={[`${project.category} — ${lang === 'it' ? 'Analisi' : 'Analysis'}`]}
                        lineClassName="text-xs text-gray-400 dark:text-gray-500 group-hover:text-white! font-maison mt-1 uppercase tracking-wider transition-colors"
                        delay={0.05}
                      />
                    </div>

                    {/* Right: Date & Arrow */}
                    <div className="flex items-center gap-6 shrink-0 text-left md:text-right">
                      <RevealText
                        lines={[project.date]}
                        lineClassName="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-white! font-maison transition-colors"
                        delay={0.1}
                      />
                      <ArrowUpRight 
                        size={20} 
                        className="text-gray-400 dark:text-gray-500 transition-all duration-300 transform group-hover:scale-110 group-hover:text-white!" 
                      />
                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}
          </div>

        </section>


      </main>
    </div>
  );
}
