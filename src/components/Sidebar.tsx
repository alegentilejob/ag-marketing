"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Sidebar({ activeSection = "home" }: { activeSection?: string }) {
  const { lang, setLang, content } = useLanguage();
  const { navigation } = content;

  return (
    <nav className="fixed left-0 top-0 h-screen w-0 md:w-16 border-r border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-[#111]/50 backdrop-blur-md flex-col items-center py-10 z-50 hidden md:flex transition-colors duration-300">
      
      {/* Navigation Links */}
      <div className="flex flex-col gap-6 items-center w-full">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace('#', '');
          
          return (
            <a
              key={item.name}
              id={`nav_link_${item.href.replace('#', '') || 'home'}`}
              href={item.href}
              className={`p-2.5 rounded-none transition-all duration-300 group relative flex items-center justify-center
                ${isActive 
                  ? 'text-black dark:text-white scale-110' 
                  : 'text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              <Icon size={20} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Language Switcher */}
      <div className="mt-auto flex flex-col items-center">
        <button
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
          className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors py-2"
          aria-label="Toggle language"
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </div>
    </nav>
  );
}

