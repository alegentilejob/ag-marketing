/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowUpRight, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useState, useRef } from "react";
import Link from "next/link";
import { projectsIt, projectsEn } from "@/data/projects";
import { getLocalizedPath } from "@/utils/navigation";

export default function Header({ activeSection = "home" }: { activeSection?: string }) {
  const { lang, setLang, content } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const { navigation, sections } = content;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLanguageChange = () => {
    const newLang = lang === 'it' ? 'en' : 'it';

    // Push language switch event to Data Layer
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'language_switch',
        from_lang: lang,
        to_lang: newLang,
        page_path: window.location.pathname
      });
    }

    // We don't call setLang(newLang) immediately here to avoid a "flash" of 404 
    // on dynamic blog/project pages where the slug must match the language.
    // The LanguageProvider will sync with the new pathname after router.push completes.

    // Use the navigation utility to get the correct target path
    const targetPath = getLocalizedPath(pathname, newLang);

    // Special handling for dynamic projects/blog slugs if not matched by simple replacement
    const isDynamicRoute = pathname.includes('/progetti/') ||
      pathname.includes('/projects/') ||
      pathname.includes('/blog/');

    if (isDynamicRoute) {
      const parts = pathname.split('/').filter(Boolean);
      const currentSlug = parts[parts.length - 1];

      const allProjects = [...projectsIt, ...projectsEn];
      const currentProject = allProjects.find(p => p.slug === currentSlug);

      if (currentProject) {
        const targetProjects = newLang === 'it' ? projectsIt : projectsEn;
        const targetProject = targetProjects.find(p => p.id === currentProject.id);

        if (targetProject) {
          // Replace only the slug part to preserve the category/year/month/day structure
          const newPath = targetPath.replace(currentSlug, targetProject.slug);
          router.push(newPath);
          return;
        }
      }
    }

    router.push(targetPath);
  };

  const projects = (lang === 'it' ? projectsIt : projectsEn).filter(p => p.category.toLowerCase() !== 'marketing');
  const experienceItems = sections.experience.items;

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // If not on current page, standard Link behavior handles navigation to the anchor
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#111] border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-28 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <Link href={lang === 'en' ? "/en/" : "/"} id="nav_logo_header" className="flex items-center gap-2 group">
            <span className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white transition-all group-hover:text-blue-600">
              agm<span className="text-blue-600">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            const isProjects = item.name === 'Progetti' || item.name === 'Projects';
            const isExperience = item.name === 'Esperienze' || item.name === 'Experience';
            const hasDropdown = isProjects || isExperience;

            return (
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={hasDropdown ? () => handleMouseEnter(item.name) : undefined}
                onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  id={`nav_link_${item.key}_header`}
                  className={`flex items-center gap-1.5 text-sm font-semibold transition-all hover:text-blue-600 
                    ${isActive ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  {item.name}
                  {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />}
                </Link>

                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[calc(100%)] left-0 min-w-[200px] bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 shadow-2xl p-2"
                    >
                      <div className="grid gap-1">
                        {isProjects ? (
                          Array.from(new Set(projects.map(p => p.category))).map((cat) => (
                            <Link
                              key={cat}
                              href={getLocalizedPath(`/progetti/${cat.toLowerCase()}`, lang)}
                              className="group flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                {cat}
                              </span>
                              <ArrowRight size={10} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))
                        ) : (
                          experienceItems.map((job: any) => (
                            <Link
                              key={job.id}
                              href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
                              className="group flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                {job.company}
                              </span>
                              <ArrowRight size={10} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Language Switcher */}
          <button
            id="nav_lang_switch"
            onClick={handleLanguageChange}
            className="text-sm font-semibold text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'it' ? 'EN' : 'IT'}
          </button>

          {/* Contact Button (Desktop) */}
          <Link
            id="cta_contact_header"
            href="#contact"
            onClick={scrollToContact}
            className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-sm"
          >
            <span>{lang === 'it' ? 'Contatti' : 'Contact'}</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-28 left-0 w-full bg-white dark:bg-[#111] border-b border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              const isProjects = item.name === 'Progetti' || item.name === 'Projects';
              const isExperience = item.name === 'Esperienze' || item.name === 'Experience';
              const hasDropdown = isProjects || isExperience;
              const isOpen = openDropdown === item.name;

              return (
                <div key={item.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      id={`nav_link_${item.key}_mobile`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl font-bold transition-colors
                        ${isActive ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
                    >
                      {item.name}
                    </Link>
                    {hasDropdown && (
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                        className="p-2 text-gray-400"
                        aria-label={isOpen ? "Close dropdown" : "Open dropdown"}
                      >
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {isOpen && hasDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 dark:bg-gray-900/50 mt-4 border-l-2 border-blue-600"
                      >
                        <div className="p-4 grid gap-4">
                          {isProjects ? (
                            Array.from(new Set(projects.map(p => p.category))).map((cat) => (
                              <Link
                                key={cat}
                                href={getLocalizedPath(`/progetti/${cat.toLowerCase()}`, lang)}
                                className="flex items-center justify-between"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  {cat}
                                </span>
                                <ArrowRight size={12} className="text-blue-600" />
                              </Link>
                            ))
                          ) : (
                            experienceItems.map((job: any) => (
                              <Link
                                key={job.id}
                                href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
                                className="flex items-center justify-between"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  {job.company}
                                </span>
                                <ArrowRight size={12} className="text-blue-600" />
                              </Link>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <Link
              href="#contact"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                scrollToContact(e);
              }}
              className="mt-4 btn-primary"
            >
              {lang === 'it' ? 'Contattami' : 'Contact Me'}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



