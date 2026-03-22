"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteConfig as itSiteConfig, navigation as itNavigation, sections as itSections } from '../data/content-it';
import { siteConfig as enSiteConfig, navigation as enNavigation, sections as enSections } from '../data/content-en';

type Language = 'it' | 'en';

type ContentType = {
  siteConfig: typeof itSiteConfig;
  navigation: typeof itNavigation;
  sections: typeof itSections;
};

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentType;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  initialLang = 'it' 
}: { 
  children: React.ReactNode; 
  initialLang?: string;
}) {
  const [lang, setLangState] = useState<Language>(initialLang as Language);

  // Sync client state with document attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.setAttribute('data-track-language', lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`; // 1 year cookie
    document.documentElement.lang = newLang;
    document.body.setAttribute('data-track-language', newLang);
  };

  const content: ContentType = lang === 'it' 
    ? { siteConfig: itSiteConfig, navigation: itNavigation, sections: itSections }
    : { siteConfig: enSiteConfig, navigation: enNavigation, sections: enSections };

  return (
    <LanguageContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
