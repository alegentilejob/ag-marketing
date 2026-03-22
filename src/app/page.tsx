"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Briefcase } from 'lucide-react';
import { RevealText, RevealImage, FadeIn } from "../components/animations";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { lang, content } = useLanguage();
  const { siteConfig, sections } = content;

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
    <div className="flex min-h-screen w-full">
      <Sidebar activeSection={activeSection} />
      <main className="flex-1 ml-0 md:ml-16 p-6 pt-24 md:p-12 lg:p-24 relative overflow-x-hidden">
        <Header activeSection={activeSection} />
        <section id="home" className="min-h-[85vh] md:pt-12 pb-12 flex flex-col justify-center">
          <div className="max-w-4xl">
            <RevealText delay={0.1}>
              <p className="text-gray-500 mb-4 text-sm md:text-base font-medium tracking-wide">
                {siteConfig.meta.role}
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight max-w-3xl text-gray-900 dark:text-gray-100">
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
          <div className="space-y-32">
            {sections.experience.items.map((job: any) => (
              <article key={job.id} className="relative">
                {/* Header of the job */}
                <div className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <FadeIn delay={0.1} className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{job.period}</span>
                        <span className="text-xs text-gray-400">{job.location} | {job.type}</span>
                    </FadeIn>
                    <RevealText delay={0.2}>
                      <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                          {job.role}
                      </h3>
                    </RevealText>
                    <FadeIn delay={0.3} className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <div className="flex items-center gap-3">
                            <p className="text-2xl text-gray-500 font-medium italic">@ {job.company}</p>
                            {job.website && (
                                <a 
                                    href={job.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </a>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {job.tags && job.tags.map((tag: string, tIdx: number) => (
                                <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border border-gray-100 dark:border-gray-800 text-gray-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Slides / Phases */}
                <div className="space-y-24">
                  {[
                    { label: lang === 'it' ? "Introduzione" : "Introduction", data: job.introduction },
                    { label: lang === 'it' ? "Svolgimento del lavoro" : "Core Development", data: job.development },
                    { label: lang === 'it' ? "Conclusione" : "Conclusion", data: job.conclusion }
                  ].map((phase, idx) => (
                    <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
                      <div className={idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                        <FadeIn delay={0.2}>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{phase.label}</h4>
                        </FadeIn>
                        <RevealText delay={0.3}>
                          <p 
                            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: phase.data.text }}
                          />
                        </RevealText>
                      </div>
                      <RevealImage delay={0.4} className={`aspect-square bg-gray-100 dark:bg-gray-800 rounded-none border border-gray-100 dark:border-gray-700 overflow-hidden relative ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                         {phase.data.image && (
                           <img 
                            src={phase.data.image} 
                            alt={phase.label}
                            className="absolute inset-0 w-full h-full object-cover bg-gray-200"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                           />
                         )}
                         <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 uppercase tracking-widest animate-pulse z-[-1]">
                           {phase.label} {lang === 'it' ? 'Immagine' : 'Image'}
                         </div>
                      </RevealImage>
                    </div>
                  ))}
                </div>
              </article>
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
                      <span className="w-1.5 h-1.5 bg-blue-600 shrink-0"></span> <span className="truncate">{skill}</span>
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
                      <span className="text-sm md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors truncate">{sw.name}</span>
                      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 truncate">{sw.category}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 bg-blue-600 text-white mt-24 -mb-6 md:-mb-12 lg:-mb-24">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Right Column: Contact Form (Moved up on mobile) */}
            <FadeIn delay={0.2} className="relative overflow-hidden order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-white relative z-10 border-l-[6px] border-white pl-4 py-1">
                {lang === 'it' ? 'Form Contatti' : 'Contact Form'}
              </h3>
              
              <form 
                id="form_contact_main" 
                data-track-category="conversion" 
                data-track-label="contact_form_attempt"
                className="flex flex-col gap-8 relative z-10" 
                onSubmit={(e) => {
                  e.preventDefault(); 
                  window.location.href = `mailto:${siteConfig.contact.email}`;
              }}>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-blue-100 mb-2">{lang === 'it' ? 'La tua Email' : 'Your Email'}</label>
                  <input type="email" id="email" className="w-full border-b border-white/30 bg-transparent py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-white/30 font-medium" placeholder="hello@company.com" required />
                </div>
                <div>
                  <label htmlFor="azienda" className="block text-xs font-bold uppercase tracking-widest text-blue-100 mb-2">{lang === 'it' ? 'Azienda (Opzionale)' : 'Company (Optional)'}</label>
                  <input type="text" id="azienda" className="w-full border-b border-white/30 bg-transparent py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-white/30 font-medium" placeholder={lang === 'it' ? "Nome Azienda" : "Company Name"} />
                </div>
                <div>
                  <label htmlFor="descrizione" className="block text-xs font-bold uppercase tracking-widest text-blue-100 mb-2">{lang === 'it' ? 'Descrizione Progetto' : 'Project Description'}</label>
                  <textarea id="descrizione" rows={4} className="w-full border-b border-white/30 bg-transparent py-3 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder-white/30 font-medium" placeholder={lang === 'it' ? "Di cosa hai bisogno?" : "What do you need?"} required></textarea>
                </div>
                <button 
                  type="submit" 
                  id="btn_contact_submit"
                  data-track-category="conversion"
                  data-track-label="contact_form_submission"
                  className="mt-4 px-8 py-5 bg-white text-blue-600 font-bold uppercase tracking-[0.2em] text-[11px] w-full hover:bg-blue-50 transition-colors shadow-xl flex justify-center items-center gap-3"
                >
                  {lang === 'it' ? 'Invia Messaggio' : 'Send Message'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            </FadeIn>

            {/* Left Column: Infos & Actions (Moved down on mobile) */}
            <div className="flex flex-col gap-12 order-2 lg:order-1">
              <div>
                <RevealText>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white text-left tracking-tight">
                      {lang === 'it' ? "Risorse per Recruitment" : "Recruitment Resources"}
                  </h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="text-xl text-blue-100 max-w-lg text-left leading-relaxed mb-8">
                      {lang === 'it' 
                        ? "Stai valutando il mio profilo per il tuo team? Qui puoi scaricare la documentazione completa aggiornata o contattarmi direttamente per un colloquio conoscitivo."
                        : "Evaluating my profile for your team? Here you can download the complete updated documentation or contact me directly for a screening interview."}
                  </p>
                </RevealText>
                
                <FadeIn delay={0.3}>
                  <div className="flex flex-col gap-4 text-left border-l-2 border-white/20 pl-6 my-8">
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-2xl md:text-3xl font-bold text-white hover:text-blue-100 transition-colors lowercase">
                      {siteConfig.contact.email}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-2xl md:text-3xl font-bold text-white hover:text-blue-100 transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <button
                      id="btn_download_portfolio"
                      data-track-category="conversion"
                      data-track-label="portfolio_pdf_download"
                      onClick={() => {
                        const win = window.open('/portfolio-pdf', '_blank');
                        if (win) {
                          win.onload = () => {
                            setTimeout(() => {
                              win.print();
                              // win.close(); // Optional: close after print dialog
                            }, 500);
                          };
                        }
                      }}
                      className="hidden md:flex items-center justify-center gap-3 px-8 py-5 bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all uppercase tracking-widest text-[11px] shadow-xl shrink-0 border border-transparent"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
                      {lang === 'it' ? 'Scarica Portfolio' : 'Download Portfolio'}
                  </button>
                  <button
                      id="btn_download_cv"
                      data-track-category="conversion"
                      data-track-label="cv_pdf_download"
                      onClick={() => {
                        const win = window.open('/cv', '_blank');
                        if (win) {
                          win.onload = () => {
                            setTimeout(() => {
                              win.print();
                            }, 500);
                          };
                        }
                      }}
                      className="hidden md:flex items-center justify-center gap-3 px-8 py-5 border border-white/30 text-white font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-[11px] shrink-0"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                      {lang === 'it' ? 'Scarica CV' : 'Download CV'}
                  </button>
                  <a
                      id="lnk_linkedin_contact"
                      data-track-category="engagement"
                      data-track-label="social_linkedin_visit"
                      href={siteConfig.contact.linkedin}
                      target="_blank"
                      className="md:col-span-2 flex items-center justify-center gap-3 px-8 py-5 bg-[#0A66C2] text-white font-bold hover:bg-[#004182] transition-all uppercase tracking-widest text-[11px] shadow-xl border border-[#0A66C2]"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-linkedin"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                      {lang === 'it' ? 'Connettiti su LinkedIn' : 'Connect on LinkedIn'}
                  </a>
              </FadeIn>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
