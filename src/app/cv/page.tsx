"use client";

import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Globe, Home, Printer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CVPage() {
  const { lang, content } = useLanguage();
  const { siteConfig, sections } = content;

  const handlePrint = () => {
    const originalTitle = document.title;
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    // Use hyphen instead of slash for reliable filename saving
    document.title = `${siteConfig.meta.name.replace(/\s+/g, '')}_cv_${month}-${year}`;
    window.print();
    document.title = originalTitle;
  };

  const labels = {
    it: {
      experience: "Esperienza lavorativa",
      education: "Formazione",
      skills: "Competenze",
      languages: "Lingue",
      techSkills: "Hard Skill",
      softSkills: "Soft Skill",
      website: "Portfolio",
      print: "Esporta CV (PDF)",
      back: "Home"
    },
    en: {
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      techSkills: "Hard Skills",
      softSkills: "Soft Skills",
      website: "Portfolio",
      print: "Export CV (PDF)",
      back: "Home"
    }
  }[lang as 'it' | 'en'] || (lang === 'it' ? {
    experience: "Esperienza lavorativa",
    education: "Formazione",
    skills: "Competenze",
    languages: "Lingue",
    techSkills: "Hard Skill",
    softSkills: "Soft Skill",
    website: "Portfolio",
    print: "Esporta CV (PDF)",
    back: "Home"
  } : {
    experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    techSkills: "Hard Skills",
    softSkills: "Soft Skills",
    website: "Portfolio",
    print: "Export CV (PDF)",
    back: "Home"
  });

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center py-12 px-4 print:bg-white print:py-0 print:px-0">
      {/* Control Bar - Hidden when printing */}
      <div className="w-full max-w-[21cm] mb-8 flex justify-between items-center print:hidden">
        <a 
          href="/" 
          id="btn_back_to_site_cv"
          className="flex items-center gap-2 text-stone-600 hover:text-black transition-colors font-semibold uppercase tracking-widest text-[11px]"
        >
          <Home size={16} />
          <span>{labels.back}</span>
        </a>
        <button 
          onClick={handlePrint}
          id="btn_export_cv_pdf"
          className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-none font-bold uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-stone-800 transition-all active:scale-95"
        >
          <Printer size={16} />
          <span>{labels.print}</span>
        </button>
      </div>

      {/* CV Paper Area - Optimized for ATS */}
      <div 
        id="cv-container"
        className="w-[21cm] bg-white shadow-[0_0_50px_rgba(0,0,0,0.05)] p-[2cm] print:shadow-none print:w-full print:p-0 min-h-[29.7cm] flex flex-col"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {/* Header Section */}
        <header className="mb-8 border-b-2 border-black pb-6 flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold uppercase tracking-tight mb-3 text-black">{siteConfig.meta.name}</h1>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10pt] text-gray-800">
             <div className="flex items-center gap-1.5">
                <Mail size={12} className="text-black" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">{siteConfig.contact.email}</a>
             </div>
             <div className="flex items-center gap-1.5">
                <Phone size={12} className="text-black" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">{siteConfig.contact.phone}</a>
             </div>
             <div className="flex items-center gap-1.5 text-black">
                <MapPin size={12} />
                <span>{siteConfig.meta.location}</span>
             </div>
             <div className="flex items-center gap-1.5">
                <Linkedin size={12} className="text-black" />
                <a href={siteConfig.contact.linkedin} target="_blank" className="hover:underline">LinkedIn</a>
             </div>
             <div className="flex items-center gap-1.5">
                <Globe size={12} className="text-black" />
                <a href={siteConfig.contact.website} target="_blank" className="hover:underline">{labels.website}</a>
             </div>
          </div>
        </header>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-black">{labels.experience}</h2>
          <div className="space-y-6">
            {sections.experience.items.map((job: any) => (
              <div key={job.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[11pt] font-bold text-black">
                    {job.role} — {job.company}
                  </h3>
                  <span className="text-[10pt] font-medium italic text-gray-700">{job.period}</span>
                </div>
                {/* Clean bullet points for ATS */}
                <ul className="list-disc list-outside ml-5 space-y-1.5 mt-2">
                  {job.development.text.split('. ').filter((s: string) => s.trim().length > 5).map((bullet: string, bidx: number) => {
                     let cleanBullet = bullet.trim();
                     if (!cleanBullet.endsWith('.')) cleanBullet += '.';
                     // Remove HTML tags for ATS
                     const textOnly = cleanBullet.replace(/<[^>]*>?/gm, '');
                     return (
                        <li key={bidx} className="text-[10.5pt] leading-snug text-gray-800">
                          {textOnly}
                        </li>
                     );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-black">{labels.education}</h2>
          <div className="space-y-4">
            {sections.about.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <div>
                  <h3 className="text-[11pt] font-bold text-black uppercase">{edu.institution}</h3>
                  <p className="text-[10pt] text-gray-700">{edu.location}</p>
                </div>
                <span className="text-[10pt] italic text-gray-700">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-black">{labels.skills}</h2>
          <div className="space-y-3">
             <div className="text-[10.5pt] leading-relaxed">
                <strong className="text-black">{labels.techSkills}: </strong>
                <span className="text-gray-800">
                   {[...sections.skills.hard, ...sections.skills.software.map((s:any) => s.name)].join(', ')}
                </span>
             </div>
             <div className="text-[10.5pt] leading-relaxed">
                <strong className="text-black">{labels.softSkills}: </strong>
                <span className="text-gray-800">
                   {sections.skills.soft.join(', ')}
                </span>
             </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h2 className="text-[14pt] font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-black">{labels.languages}</h2>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {(sections as any).languages.map((lang: any, idx: number) => (
              <div key={idx} className="text-[10.5pt]">
                <strong className="text-black">{lang.name}: </strong>
                <span className="text-gray-800">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Footer */}
        <footer className="mt-auto pt-10 border-t border-stone-100">
          <p className="text-[8.5pt] text-gray-500 italic text-center leading-tight">
            {lang === 'it' 
              ? "Autorizzo il trattamento dei miei dati personali ai sensi del Decreto Legislativo 30 giugno 2003, n. 196 e dell'art. 13 del GDPR (Regolamento UE 2016/679)."
              : "I authorize the processing of my personal data pursuant to Legislative Decree 30 June 2003, no. 196 and art. 13 of the GDPR (EU Regulation 2016/679)."}
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1.5cm 2cm;
          }
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          .print\\:px-0 { padding-left: 0 !important; padding-right: 0 !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          #cv-container {
            width: 100% !important;
            min-height: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            font-family: 'Times New Roman', Georgia, serif !important;
          }
          a {
            text-decoration: none !important;
            color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
