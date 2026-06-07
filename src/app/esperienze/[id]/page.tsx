"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Globe, Mail, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { ServiceCard, ActivitiesSection } from '@/components/framer-components';
import RevealText from '@/components/RevealText';
import SoftwareLogo from '@/components/SoftwareLogo';
import { motion } from 'framer-motion';
import { StandardH1, StandardH2 } from '@/components/Typography';

const clientLogos = [
  "/media/NaxaClienti_gelsia.png",
  "/media/NaxaClienti_eugin.png",
  "/media/NaxaClienti_rivamobili.png",
  "/media/NaxaClienti_resstende.png",
  "/media/NaxaClienti_omcazzaniga.webp",
  "/media/NaxaClienti__EZ.png",
  "/media/NaxaClienti_costacurta.png",
  "/media/NaxaClienti_reflexx.png"
];

export default function ExperienceDetailPage() {
  const { id } = useParams();
  const { lang, content } = useLanguage();
  const { siteConfig, sections } = content;

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

  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackContactClick('copy_email', siteConfig.contact.email, 'hero');
  };

  const job = sections.experience.items.find((item: any) => item.id === id);

  const activitiesMap: Record<string, Array<{ title: string, description: string }>> = {
    naxa: lang === 'it' ? [
      {
        title: "Analisi del traffico e posizionamento",
        description: "Comprensione strategica dei cluster di keyword e segmenti di pubblico per cui il sito riceve visibilità, identificando opportunità non presidiate o cluster a rischio."
      },
      {
        title: "Audit tecnico completo",
        description: "Verifica completa della conformità agli standard SEO di Google, esperienza utente e architettura tecnica per gettare basi organiche solide."
      },
      {
        title: "Keyword gap e mappa concettuale",
        description: "Studio concettuale delle keyword presidiate dai competitor per definire la mappa strategica delle opportunità di crescita e posizionamento del cliente."
      },
      {
        title: "Answer Engine Optimization (AEO)",
        description: "Ottimizzazione e posizionamento dei contenuti sui motori di risposta AI emergenti, testando formati strutturati per massimizzare la visibilità automatica."
      },
      {
        title: "Ottimizzazione e Reportistica",
        description: "Integrazione dei dati organici ed editoriali su Looker Studio e GA4, analizzando i trend di conversione e pianificando le future iterazioni operative."
      }
    ] : [
      {
        title: "Traffic analysis and positioning",
        description: "Strategic mapping of keyword clusters and audience segments driving traffic, identifying untapped opportunities or at-risk semantic areas."
      },
      {
        title: "Full technical audit",
        description: "Comprehensive verification of technical standards, user experience, and structural health to establish a solid organic foundation."
      },
      {
        title: "Keyword gap and conceptual map",
        description: "Benchmarking competitor rankings to model prospective semantic trees and discover high-value strategic growth categories."
      },
      {
        title: "Answer Engine Optimization (AEO)",
        description: "Fine-tuning structured content to rank inside emerging conversational AI search engines, optimizing for direct response generation."
      },
      {
        title: "Optimization and Reporting",
        description: "Compiling actionable performance metrics into custom Looker Studio and GA4 dashboards, driving iterative content marketing roadmap plans."
      }
    ],
    'fridhem-center': lang === 'it' ? [
      {
        title: "Content Strategy & Social Media",
        description: "Gestione e pianificazione strategica di contenuti multimediali per i canali social ufficiali del centro culturale."
      },
      {
        title: "Tracking delle Metriche Social",
        description: "Monitoraggio costante dei KPI di reach, engagement e growth rate per ottimizzare le campagne in tempo reale."
      },
      {
        title: "Adattabilità Cross-Cultural",
        description: "Integrazione rapida in contesti operativi internazionali e adattamento dello stile comunicativo a pubblici multiculturali."
      }
    ] : [
      {
        title: "Content Strategy & Social Media",
        description: "Strategic management and planning of multimedia content for the cultural center's official social channels."
      },
      {
        title: "Social Metrics Tracking",
        description: "Continuous monitoring of reach, engagement, and growth rate KPIs to optimize campaigns in real-time."
      },
      {
        title: "Cross-Cultural Adaptability",
        description: "Rapid integration into international operating contexts, tailoring the communication style for multicultural audiences."
      }
    ],
    anularis: lang === 'it' ? [
      {
        title: "Brand Strategy",
        description: "<strong>Fase di Briefing & Priority Planning:</strong> Analisi iniziale dello stato di fatto ed elaborazione delle priorità per riallineare la comunicazione visiva ed editoriale alla reale brand equity del lusso.<br/><br/><strong>Art Direction & Strategia d'Immagine:</strong> Definizione delle linee guida strategiche, della palette cromatica e del tono di voce per il riposizionamento del marchio.<br/><br/><strong>Pianificazione Canali Digitali:</strong> Ottimizzazione del sito web (prototipazione UX/UI) e del feed Instagram per convertire il nuovo posizionamento in lead commerciali."
      },
      {
        title: "Market Research",
        description: "Desk research strategica per l'espansione internazionale, individuando nel Medio Oriente l'area a più alta penetrazione per il prodotto, su due pilastri:<br/><br/><strong>Fattore Culturale:</strong> Focus massiccio su accessori e gioielleria di lusso rispetto all'abbigliamento.<br/><br/><strong>Fattore Business:</strong> EAU come hub globale degli Esports.<br/><br/><strong>Insight Strategico:</strong> Posizionare l'anello artigianale non come gadget, ma come status-symbol primo per celebrare le vittorie."
      },
      {
        title: "Growth Hacking",
        description: "Validato l'obiettivo strategico Esports, implementazione di una macchina di lead generation B2B:<br/><br/><strong>Outreach Automatizzato:</strong> Linked Helper per mappare e automatizzare il primo contatto LinkedIn con manager e figure chiave dei team Esports.<br/><br/><strong>Lead Nurturing Funnel:</strong> Integrazione dei lead in Mailchimp per campagne email personalizzate, scalando l'acquisizione clienti da zero."
      }
    ] : [
      {
        title: "Brand Strategy",
        description: "<strong>Briefing & Priority Planning:</strong> Initial analysis and prioritization to realign visual and editorial communication with true luxury brand equity.<br/><br/><strong>Art Direction & Image Strategy:</strong> Definition of strategic guidelines, colour palette, and tone of voice for brand repositioning.<br/><br/><strong>Digital Channel Planning:</strong> Optimization of the website (UX/UI prototyping) and Instagram feed to convert the new positioning into commercial leads."
      },
      {
        title: "Market Research",
        description: "Strategic desk research for international expansion, identifying the Middle East as the highest-penetration area, based on two pillars:<br/><br/><strong>Cultural Factor:</strong> Massive focus on luxury accessories and jewellery.<br/><br/><strong>Business Factor:</strong> UAE as the global Esports nerve centre.<br/><br/><strong>Strategic Insight:</strong> Positioning the artisanal ring not as a gadget, but as the premier status-symbol to celebrate victories."
      },
      {
        title: "Growth Hacking",
        description: "After validating the Esports strategic objective, implementation of a full B2B lead generation engine:<br/><br/><strong>Automated Outreach:</strong> Using Linked Helper to map and automate first-contact on LinkedIn with key figures in Esports teams.<br/><br/><strong>Lead Nurturing Funnel:</strong> Integrating qualified leads into Mailchimp for personalized email campaigns, scaling client acquisition from zero."
      }
    ]
  };

  if (!job) return (
    <PageLayout narrow>
      <p className="text-2xl text-gray-700 dark:text-gray-400 py-32 text-center font-normal">
        {lang === 'it' ? 'Esperienza non trovata.' : 'Experience not found.'}
      </p>
    </PageLayout>
  );

  return (
    <PageLayout customPadding="pt-[104px] pb-[104px]">
      <article className="max-w-[1400px] mx-auto">
        {/* Hero Section - 100vh dynamic viewport area: Header(80px) + Page padding-top(112px) + Breadcrumbs(64px) = 256px space above */}
        <header 
          className={`lg:min-h-[calc(100vh-260px)] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 pt-4 ${
            job.id === 'naxa' ? 'mb-12' : 'mb-[104px]'
          }`}
        >
          {/* Left Column: Text Content - Golden Ratio 61.8% */}
          <div className="w-full lg:w-[61.8%] flex flex-col justify-center text-left">
            <div className="flex flex-wrap items-center gap-4 text-blue-600 mb-4">
              <RevealText 
                lines={[job.period]} 
                lineClassName="text-[10px] font-bold uppercase tracking-[0.08em]"
                delay={0}
              />
            </div>

            <StandardH1
              lines={[job.company]}
              delay={0.1}
              className="mb-8"
            />

            <RevealText
              lines={[job.role]}
              lineClassName="text-xl md:text-2xl font-normal text-gray-600 dark:text-gray-400 uppercase tracking-[0.08em] mb-6"
              delay={0.2}
            />

            <div className="flex flex-wrap gap-2 mb-6">
              {job.tags.map((tag: string) => (
                <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.08em] bg-blue-600/5 dark:bg-blue-600/10 text-blue-600 px-3 py-1.5 border border-blue-600/10">
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.15, 0.85, 0.35, 1] }}
            >
              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => trackContactClick('email', siteConfig.contact.email, 'hero')}
                className="btn-primary w-fit flex items-center justify-between gap-4 mb-8 cursor-pointer pl-4 pr-3"
              >
                <span>{lang === 'it' ? 'Scrivi mail' : 'Write email'}</span>
                <span
                  onClick={handleCopy}
                  role="button"
                  tabIndex={0}
                  title={lang === 'it' ? 'Copia email' : 'Copy email'}
                  className="p-1.5 rounded-full border border-white/30 hover:bg-white/10 active:bg-white/20 transition-all flex items-center justify-center text-white shrink-0 cursor-pointer pointer-events-auto"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </span>
              </a>
            </motion.div>

            {/* Introduction text in hero section */}
            <div 
              className="text-gray-700 dark:text-gray-300 font-light leading-relaxed text-base md:text-lg mb-6"
              dangerouslySetInnerHTML={{ __html: job.introduction.text }} 
            />

            <div className="flex flex-wrap gap-6 items-center border-t border-gray-100 dark:border-gray-800 pt-5">
              <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <MapPin size={16} className="text-blue-600 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.08em]">{job.location}</span>
              </div>
              <a href={job.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                <Globe size={16} className="text-blue-600 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.08em] underline underline-offset-4">
                  {lang === 'it' ? 'Sito Ufficiale' : 'Official Website'}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Cover Image - Golden Ratio 38.2%, Aspect Ratio Aureo 1:1.618, Fitted to Viewport */}
          <div className="w-full lg:w-[38.2%] flex justify-center lg:justify-end items-center h-[60vh] lg:max-h-[calc(100vh-280px)] lg:h-auto overflow-hidden">
            <div 
              className="relative w-full h-full overflow-hidden"
              style={{ aspectRatio: '1 / 1.618' }}
            >
              <Image
                src={job.introduction.image}
                alt={lang === 'it' ? 'Introduzione' : 'Introduction'}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </header>

        {/* Client Logos Marquee Strip for Naxa */}
        {job.id === 'naxa' && (
          <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-50 dark:bg-neutral-900 border-y border-gray-100 dark:border-gray-800 py-6 overflow-hidden mb-0">
            <div className="w-full overflow-hidden flex select-none pointer-events-none">
              <div className="flex gap-16 whitespace-nowrap animate-marquee-rtl shrink-0 min-w-full items-center">
                {Array.from({ length: 3 }).map((_, loopIdx) => (
                  <React.Fragment key={loopIdx}>
                    {clientLogos.map((src, idx) => (
                      <div key={`${loopIdx}-${idx}`} className="relative h-10 w-32 shrink-0 flex items-center justify-center">
                        <Image
                          src={src}
                          alt="Naxa Client Logo"
                          fill
                          sizes="128px"
                          className="object-contain filter grayscale brightness-50 contrast-125 dark:brightness-150 dark:contrast-75 opacity-70"
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Container - Matches Hero Section margins (max-w-[1400px]) */}
        <div className="max-w-[1400px] mx-auto">
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none text-left mb-[104px]">
            {/* Key Project & Development Section */}
            <div className="mb-[104px]">
              {activitiesMap[job.id] ? (
                <ActivitiesSection 
                  noTopMargin={job.id === 'naxa'}
                  activities={activitiesMap[job.id]} 
                  title={lang === 'it' ? 'Progetto e Sviluppo chiave' : 'Key Project & Development'}
                  description={lang === 'it' 
                    ? "Le principali attività e aree strategiche gestite in autonomia all'interno di questa esperienza lavorativa:"
                    : "The main activities and strategic areas managed independently within this professional experience:"}
                />
              ) : (
                <>
                  <StandardH2
                    lines={[lang === 'it' ? 'Progetto e Sviluppo chiave' : 'Key Project & Development']}
                    className="mb-8"
                  />
                  <div 
                    className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-10"
                    dangerouslySetInnerHTML={{ __html: job.development.text }} 
                  />
                </>
              )}

              
              {/* Image cropped to exact Golden Aspect Ratio 1.618 : 1 */}
              <div 
                className="relative w-full border border-gray-100 dark:border-gray-800 overflow-hidden mb-16"
                style={{ aspectRatio: '1.618 / 1' }}
              >
                <Image
                  src={job.development.image}
                  alt={lang === 'it' ? 'Sviluppo' : 'Development'}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Software & tools utilized grid */}
              <SoftwareSection jobId={job.id} lang={lang} />
            </div>

            {/* Conclusion & Impact Section */}
            <div>
              <StandardH2
                lines={[lang === 'it' ? 'Conclusioni e Impatto' : 'Conclusions & Impact']}
                className="mb-8"
              />
              <div 
                className="text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-10"
                dangerouslySetInnerHTML={{ __html: job.conclusion.text }} 
              />
              {/* Image cropped to exact Golden Aspect Ratio 1.618 : 1 */}
              <div 
                className="relative w-full border border-gray-100 dark:border-gray-800 overflow-hidden"
                style={{ aspectRatio: '1.618 / 1' }}
              >
                <Image
                  src={job.conclusion.image}
                  alt={lang === 'it' ? 'Conclusione' : 'Conclusion'}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}

interface SoftwareItem {
  name: string;
  description: {
    it: string;
    en: string;
  };
}

const softwareData: Record<string, SoftwareItem[]> = {
  naxa: [
    {
      name: "Google Analytics 4",
      description: {
        it: "Monitoraggio dei KPI di traffico, comportamento degli utenti sul sito ed engagement rate per misurare l'efficacia dei contenuti.",
        en: "Monitoring traffic KPIs, on-site user behavior, and engagement rates to measure content effectiveness."
      }
    },
    {
      name: "Google Search Console",
      description: {
        it: "Analisi del posizionamento organico, monitoraggio dell'indicizzazione delle pagine e individuazione di eventuali errori di scansione.",
        en: "Analyzing organic rankings, monitoring page indexing, and identifying potential crawl errors."
      }
    },
    {
      name: "SEMrush",
      description: {
        it: "Analisi dei competitor, keyword research approfondita e tracciamento giornaliero del posizionamento dei cluster di parole chiave.",
        en: "Competitor analysis, deep keyword research, and daily position tracking of targeted keyword clusters."
      }
    },
    {
      name: "SEOZoom",
      description: {
        it: "Keyword research focalizzata sul mercato italiano, audit dei contenuti del sito e monitoraggio delle performance del traffico stimato.",
        en: "Keyword research focused on the Italian market, content auditing, and monitoring estimated organic traffic performance."
      }
    },
    {
      name: "Looker Studio",
      description: {
        it: "Creazione di dashboard interattive per integrare i dati di GA4 e GSC, rendendo i report mensili chiari e azionabili per i clienti.",
        en: "Creating interactive dashboards to integrate GA4 and GSC data, making monthly reports clear and actionable for clients."
      }
    },
    {
      name: "Excel",
      description: {
        it: "Elaborazione dati, pulizia di file di keyword complessi, analisi statistiche e monitoraggio avanzato tramite formule e tabelle pivot.",
        en: "Data processing, keyword list cleaning, statistical analysis, and advanced monitoring with formulas and pivot tables."
      }
    },
    {
      name: "PowerPoint",
      description: {
        it: "Progettazione di presentazioni strategiche per i clienti, sintetizzando report tecnici in layout visivi chiari e di forte impatto.",
        en: "Designing strategic client presentations, summarizing technical reports into clear and high-impact visual layouts."
      }
    }
  ],
  anularis: [
    {
      name: "Linked Helper",
      description: {
        it: "Automazione dell'outreach B2B su LinkedIn per intercettare manager e figure chiave dei team di Esports.",
        en: "Automating B2B outreach on LinkedIn to target managers and key figures in Esports teams."
      }
    },
    {
      name: "LinkedIn Sales Navigator",
      description: {
        it: "Mappatura mirata dei lead e segmentazione dettagliata dei decisori aziendali per campaigns di acquisizione ad alta efficacia.",
        en: "Targeted lead mapping and detailed segmentation of corporate decision makers for highly effective outreach campaigns."
      }
    },
    {
      name: "MailChimp",
      description: {
        it: "Creazione di campagne email automatizzate e newsletter personalizzate per nutrire i lead qualificati B2B.",
        en: "Creating automated email campaigns and personalized newsletters to nurture qualified B2B leads."
      }
    },
    {
      name: "Canva",
      description: {
        it: "Definizione delle nuove linee guida visive e coordinamento grafico per la creazione degli asset multimediali di brand.",
        en: "Defining new visual guidelines and graphic coordination to produce multimedia brand assets."
      }
    },
    {
      name: "Figma",
      description: {
        it: "Prototipazione rapida UX/UI delle pagine del sito web per ottimizzare il funnel di conversione dei lead.",
        en: "Rapid UX/UI prototyping of website pages to optimize the lead conversion funnel."
      }
    }
  ],
  'fridhem-center': [
    {
      name: "Meta Business Suite",
      description: {
        it: "Pianificazione strategica e pubblicazione automatica dei contenuti editoriali multimediali per Facebook e Instagram.",
        en: "Strategic scheduling and automated publishing of multimedia editorial content for Facebook and Instagram."
      }
    }
  ]
};

function SoftwareCard({ item, lang }: { item: SoftwareItem; lang: string }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative aspect-square border-b border-r border-gray-200 dark:border-gray-800 flex items-center justify-center p-4 md:p-6 cursor-pointer overflow-hidden text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "#2B13E2" : "rgba(249, 250, 251, 0.5)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Default State: Logo (disappears on hover) */}
      <motion.div
        className="flex flex-col items-center justify-center gap-3 w-full h-full"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.9 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <SoftwareLogo
          name={item.name}
          noBg={true}
          className="w-14 h-14 md:w-18 md:h-18"
        />
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.08em] font-maison text-gray-400 dark:text-gray-500 text-center">
          {item.name}
        </span>
      </motion.div>

      {/* Hover State: Text Description (appears on hover) */}
      <motion.div
        className="absolute inset-0 p-4 md:p-6 flex flex-col justify-start items-start text-left pointer-events-none"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 15,
        }}
        transition={{ duration: 0.3, ease: "easeOut", delay: isHovered ? 0.05 : 0 }}
      >
        <h4 
          className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.08em] font-maison mb-2 md:mb-3"
          style={{ color: '#ffffff' }}
        >
          {item.name}
        </h4>
        <p 
          className="font-medium font-sans text-[11px] sm:text-xs md:text-sm leading-relaxed tracking-tight"
          style={{
            color: '#ffffff',
            fontVariationSettings: '"opsz" 14',
          }}
        >
          {lang === 'it' ? item.description.it : item.description.en}
        </p>
      </motion.div>
    </motion.div>
  );
}

function SoftwareSection({ jobId, lang }: { jobId: string; lang: string }) {
  const items = softwareData[jobId];
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-[104px] mb-16 text-left">
      <StandardH2
        lines={[lang === 'it' ? 'Software & Strumenti Utilizzati' : 'Software & Tools Utilized']}
        className="mb-8"
      />
      <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg max-w-3xl mb-12">
        {lang === 'it'
          ? 'I principali strumenti tecnologici applicati per raggiungere gli obiettivi strategici ed operativi in questa esperienza:'
          : 'The main technological tools applied to achieve strategic and operational objectives in this experience:'}
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200 dark:border-gray-800 max-w-[1400px] mx-auto">
        {items.map((item, index) => (
          <SoftwareCard key={index} item={item} lang={lang} />
        ))}
      </div>
    </div>
  );
}
