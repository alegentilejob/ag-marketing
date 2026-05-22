/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from 'react';
import { Home, Printer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Software {
  name: string;
  category: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  website: string;
  introduction: { text: string; image: string };
  development: { text: string; image: string };
  conclusion: { text: string; image: string };
  tags: string[];
}


export default function PortfolioPDF() {
  const { lang, content } = useLanguage();
  const { siteConfig, sections } = content;

  const handlePrint = () => {
    const originalTitle = document.title;
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    document.title = `${siteConfig.meta.name.replace(' ', '')}_Portfolio_${month}-${year}`;
    window.print();
    document.title = originalTitle;
  };

  // Helper to optimize image size for PDF export
  const optimizeImage = (src: string, width: number = 1080) => {
    if (!src || src.startsWith('http') || src.startsWith('data:')) return src;
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=80`;
  };

  return (
    <div className="min-h-screen bg-[#111] py-20 px-4 print:bg-white print:py-0 print:px-0 flex flex-col items-center">
      {/* Control Bar */}
      <div className="w-full max-w-[29.7cm] mb-12 flex justify-between items-center print:hidden px-4">
        <a href="/" 
           id="btn_back_to_site_portfolio"
           data-track-category="navigation"
           data-track-label="portfolio_exit_to_home"
           className="flex items-center gap-2 text-gray-400 hover:text-white font-bold uppercase tracking-[0.2em] text-[11px] transition-colors"
        >
          <Home size={16} />
          <span>{lang === 'it' ? 'Torna al Sito' : 'Back to Site'}</span>
        </a>
        <button 
          onClick={handlePrint}
          id="btn_export_portfolio_pdf"
          data-track-category="conversion"
          data-track-label="portfolio_pdf_export_click"
          className="flex items-center gap-3 bg-blue-600 text-white px-10 py-5 font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl hover:bg-white hover:text-blue-600 transition-all"
        >
          <Printer size={18} />
          <span>{lang === 'it' ? 'Esporta Portfolio PDF' : 'Export Portfolio PDF'}</span>
        </button>
      </div>

      <div className="w-full max-w-[29.7cm] flex flex-col gap-24 print:gap-0 print:block">
        
        {/* SLIDE 1: COVER */}
        <section className="slide-export w-[29.7cm] h-[21cm] bg-white flex relative overflow-hidden box-border print:page-break-after-always">
          <div className="w-[55%] flex flex-col justify-center px-16 py-12">
            <p className="text-[11px] text-blue-600 uppercase tracking-[0.2em] font-bold mb-4 whitespace-nowrap">{siteConfig.meta.role}</p>
            <h1 className="text-[52px] font-bold leading-tight text-gray-900 mb-6">
              {siteConfig.meta.name}
            </h1>
            <p className="text-base leading-[1.7] text-gray-500 max-w-md mb-12">
              {siteConfig.meta.tagline}
            </p>
            
            <div className="mt-auto space-y-4 text-[12px] text-gray-500">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-1">Email</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-blue-600 transition-colors uppercase">{siteConfig.contact.email}</a>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-1">Phone</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-blue-600 transition-colors">{siteConfig.contact.phone}</a>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-1">Location</span>
                {siteConfig.meta.location}
              </div>
            </div>
          </div>
          <div className="w-[45%] bg-gray-100">
            <img 
              src={optimizeImage(siteConfig.meta.profileImage, 800)} 
              alt="" 
              loading="eager"
              className="w-full h-full object-cover" 
            />
          </div>
        </section>

        {/* SLIDE 2: ABOUT */}
        <section className="slide-export w-[29.7cm] h-[21cm] bg-white flex flex-col justify-center px-[3cm] py-[2cm] relative overflow-hidden box-border print:page-break-after-always">
          <p className="text-[11px] text-blue-600 uppercase tracking-[0.2em] font-bold mb-12">01 / {lang === 'it' ? 'VISIONE STRATEGICA' : 'STRATEGIC VISION'}</p>
          <div className="border-l-4 border-blue-600 pl-8">
            <p className="text-[18px] leading-[1.7] text-gray-800 font-medium" dangerouslySetInnerHTML={{ __html: sections.about.bio }} />
          </div>
        </section>

        {/* SLIDE 3: SKILLS */}
        <section className="slide-export w-[29.7cm] h-[21cm] bg-white flex flex-col justify-center px-[3cm] py-[2cm] relative overflow-hidden box-border print:page-break-after-always">
          <p className="text-[11px] text-blue-600 uppercase tracking-[0.2em] font-bold mb-12">02 / SKILLSET & ARSENAL</p>
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
               {sections.skills.hard.map((skill, idx) => (
                 <div key={idx} className="flex gap-4 items-baseline">
                   <span className="text-gray-400 font-bold text-sm">{String(idx + 1).padStart(2, '0')}</span>
                   <span className="text-[16px] text-gray-800 leading-[1.7]">{skill}</span>
                 </div>
               ))}
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 content-start">
                {sections.skills.software.map((sw: Software, idx: number) => (
                  <div key={idx} className="border-b border-gray-100 pb-2 flex flex-col">
                    <span className="text-[14px] font-bold text-gray-900">{sw.name}</span>
                    <span className="text-[10px] text-gray-500 uppercase mt-1">{sw.category}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SLIDES */}
        {sections.experience.items.map((job: ExperienceItem, jidx: number) => (
          <React.Fragment key={job.id}>
            {/* Discovery */}
            <section className="slide-export w-[29.7cm] h-[21cm] bg-white flex relative overflow-hidden box-border print:page-break-after-always">
              <div className="w-[45%] h-full bg-gray-900 flex flex-col justify-end p-8 overflow-hidden relative">
                {job.introduction.image && (
                  <img 
                    src={optimizeImage(job.introduction.image, 1080)} 
                    alt="" 
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover opacity-40" 
                  />
                )}
                <div className="relative z-10 w-full">
                  <p className="text-[11px] text-blue-500 uppercase tracking-[0.2em] font-bold mb-6">0{jidx + 1} / DISCOVERY</p>
                  <a href={job.website} target="_blank" className="group flex flex-col gap-6">
                     <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                        {job.introduction.image && (
                          <img 
                            src={optimizeImage(job.introduction.image, 300)} 
                            alt="" 
                            loading="eager"
                            className="w-full h-full object-cover brightness-110" 
                          />
                        )}
                     </div>
                     <h3 className="text-[48px] font-bold leading-tight text-white uppercase tracking-tighter group-hover:text-blue-500 transition-colors">
                       {job.company}
                     </h3>
                  </a>
                </div>
              </div>
              <div className="w-[55%] flex flex-col justify-center px-16 py-12">
                <h4 className="text-[36px] font-bold text-gray-900 mb-2 leading-tight">{job.role}</h4>
                <div className="text-[12px] text-gray-500 space-y-1 mb-10">
                  <p>{job.period}</p>
                  <p>{job.location} | {job.type}</p>
                </div>
                <div>
                  <p className="text-[11px] text-blue-600 uppercase tracking-[0.2em] font-bold mb-4">Market Intelligence</p>
                  <p className="text-[16px] leading-[1.7] text-gray-600 line-clamp-5" dangerouslySetInnerHTML={{ __html: job.introduction.text }} />
                </div>
              </div>
            </section>

            {/* Execution */}
            <section className="slide-export w-[29.7cm] h-[21cm] bg-[#fcfcfc] flex flex-col justify-center px-[3cm] py-[2cm] relative overflow-hidden box-border print:page-break-after-always">
              <header className="mb-12">
                <p className="text-[11px] text-blue-600 uppercase tracking-[0.2em] font-bold mb-2">0{jidx + 1} / EXECUTION</p>
                <h3 className="text-[36px] font-bold text-gray-900"><a href={job.website} target="_blank" className="hover:text-blue-600 transition-colors">{job.company}</a> — {lang === 'it' ? 'Operatività' : 'Execution'}</h3>
              </header>
              <div className="flex flex-row gap-16">
                <div className="flex-1 space-y-6">
                  {job.development.text.split('. ').filter((s: string) => s.length > 5).slice(0, 3).map((bullet: string, bidx: number) => (
                    <div key={bidx} className="flex gap-4">
                       <span className="w-1.5 h-1.5 bg-blue-600 mt-2.5 shrink-0 rounded-full" />
                       <p className="text-[16px] leading-[1.7] text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: bullet.endsWith('.') ? bullet : bullet + '.' }} />
                    </div>
                  ))}
                </div>
                <div className="w-80 h-full">
                  <div className="aspect-[4/5] bg-gray-100 border border-gray-200 overflow-hidden relative mb-6">
                    {job.development.image && (
                      <img 
                        src={optimizeImage(job.development.image, 800)} 
                        alt="" 
                        loading="eager"
                        className="w-full h-full object-cover" 
                      />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag: string, tidx: number) => (
                      <span key={tidx} className="text-[12px] text-gray-400 font-medium">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="slide-export w-[29.7cm] h-[21cm] bg-white flex flex-col justify-center px-[3cm] py-[2cm] relative overflow-hidden box-border print:page-break-after-always">
              <p className="text-[11px] text-blue-600 uppercase tracking-[0.2em] font-bold mb-12">0{jidx + 1} / IMPACT 03/03</p>
              
              <div className="max-w-6xl grid grid-cols-2 gap-16 items-center">
                <div className="space-y-16">
                  <p className="text-[20px] leading-[1.7] text-gray-800 line-clamp-6" dangerouslySetInnerHTML={{ __html: job.conclusion.text }} />
                  
                </div>
                <div className="h-[12cm] bg-gray-50 border border-gray-100 overflow-hidden relative">
                  {job.conclusion.image && (
                    <img 
                      src={optimizeImage(job.conclusion.image, 1080)} 
                      alt="" 
                      loading="eager"
                      className="w-full h-full object-cover" 
                    />
                  )}
                </div>
              </div>
            </section>
          </React.Fragment>
        ))}

        {/* PROJECTS SLIDE - Rimosso per ora
        <section className="slide-export w-[29.7cm] h-[21cm] bg-white flex flex-col justify-center px-[2cm] py-[2cm] pb-10 relative overflow-hidden box-border print:page-break-after-always">
          ...
        </section>
        */}

        {/* CONTACT SLIDE */}
        <section className="slide-export w-[29.7cm] h-[21cm] bg-gray-50 flex flex-col justify-center px-[3cm] py-[2cm] pb-10 relative overflow-hidden box-border print:page-break-after-always">
          <p className="text-[11px] text-blue-600 uppercase tracking-[0.2em] font-bold mb-8">LET'S CONNECT</p>
          <h2 className="text-[36px] font-bold text-gray-900 mb-16">{lang === 'it' ? 'Iniziamo una conversazione' : "Let&apos;s start a conversation"}</h2>

          <div className="space-y-10 border-l px-8 border-gray-200">
             <div className="flex flex-col md:flex-row md:gap-20">
               <div>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">{lang === 'it' ? 'Email Diretta' : 'Direct Email'}</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[24px] font-medium text-blue-600 lowercase hover:underline">
                     {siteConfig.contact.email}
                  </a>
               </div>
               <div>
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">{lang === 'it' ? 'Recapito Telefonico' : 'Phone Number'}</span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-[24px] font-medium text-blue-600 lowercase hover:underline">
                     {siteConfig.contact.phone}
                  </a>
               </div>
             </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Social Professional</span>
                <a href={siteConfig.contact.linkedin} target="_blank" className="text-[24px] font-medium text-gray-800 lowercase hover:underline">
                  {siteConfig.contact.linkedin.replace('https://www.linkedin.com/in/', '').replace('https://linkedin.com/in/', '').replace('/', '')}
                </a>
              </div>
          </div>

          <div className="mt-auto pt-16">
             <p className="text-[24px] font-bold text-gray-900 lowercase">{siteConfig.meta.name}</p>
             <p className="text-[12px] text-gray-500 uppercase mt-2">Marketing Strategist & Growth Partner</p>
          </div>
        </section>

      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
            -webkit-print-color-adjust: exact;
          }
          .min-h-screen {
            min-height: 0 !important;
            padding: 0 !important;
          }
          section {
            page-break-after: always !important;
            break-after: always !important;
            display: flex !important;
            width: 29.7cm !important;
            height: 21cm !important;
            position: relative !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
          }
          .slide-export {
            padding: 8vh 10vw !important;
            max-height: 100% !important;
            height: 100vh !important;
            width: 100vw !important;
          }
        }
      `}</style>
    </div>
  );
}
