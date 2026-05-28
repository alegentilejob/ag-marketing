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
import RevealText from "@/components/RevealText";

export default function Header({ activeSection = "home" }: { activeSection?: string }) {
  const { lang, setLang, content } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const { navigation, sections, siteConfig } = content;
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 font-sans ${isMobileMenuOpen ? 'bg-blue-600 text-white border-none' : 'bg-white dark:bg-[#111] border-b border-gray-100 dark:border-gray-800'}`}>

      {/* ── Desktop Header: 3-zone layout ── */}
      <div className="hidden md:grid grid-cols-3 max-w-[1400px] mx-auto px-2 md:px-4 h-20 items-center">

        {/* Zone 1: Logo (left) */}
        <div className="flex items-center">
          <Link href={getLocalizedPath("/", lang)} className="flex items-center">
            <img
              src="/media/Personal branding/1x/AGM_blacklogo.png"
              alt="AGM"
              className="h-7 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Zone 2: Nav (center) */}
        <nav className="flex flex-row flex-nowrap items-center justify-center gap-6 lg:gap-8 h-full whitespace-nowrap">
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
                  className={`flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider transition-all hover:text-blue-600 font-maison
                    ${isActive ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  <RevealText
                    lines={[
                      <span key={item.name} className="flex items-center gap-1.5">
                        {item.name}
                        {hasDropdown && (
                          <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                          />
                        )}
                      </span>
                    ]}
                    lineClassName="inline-block"
                    stagger={0}
                    animateOnMount={true}
                  />
                </Link>

                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[calc(100%)] left-1/2 -translate-x-1/2 min-w-[200px] bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 shadow-2xl p-2"
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
                              <span className="text-sm font-medium font-maison uppercase tracking-wider text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
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
                              <span className="text-sm font-medium font-maison uppercase tracking-wider text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
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

        {/* Zone 3: Actions (right) */}
        <div className="flex items-center justify-end gap-8">
          <button
            id="nav_lang_switch"
            onClick={handleLanguageChange}
            className="text-sm font-medium uppercase tracking-wider text-gray-400 hover:text-blue-600 transition-colors font-maison"
            aria-label="Toggle language"
          >
            <RevealText
              lines={[lang === 'it' ? 'EN' : 'IT']}
              lineClassName="inline-block"
              stagger={0}
              animateOnMount={true}
            />
          </button>
          <Link
            id="cta_contact_header"
            href="#contact"
            onClick={scrollToContact}
            className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors font-maison"
          >
            <RevealText
              lines={[lang === 'it' ? 'Contatti' : 'Contact']}
              lineClassName="inline-block"
              stagger={0}
              animateOnMount={true}
            />
          </Link>
        </div>
      </div>

      {/* ── Mobile Header ── */}
      <div className="md:hidden max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={getLocalizedPath("/", lang)} className="flex items-center">
          <img
            src="/media/Personal branding/1x/AGM_blacklogo.png"
            alt="AGM"
            className={`h-7 w-auto object-contain transition-all duration-300 ${isMobileMenuOpen ? 'brightness-0 invert' : 'dark:invert'}`}
          />
        </Link>
        <button
          className={`p-2 -mr-2 flex items-center justify-center focus:outline-none transition-colors duration-300 ${isMobileMenuOpen ? 'text-white' : 'text-gray-900 dark:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
              <path d="M1 2H21" strokeWidth="2" strokeLinecap="round" />
              <path d="M1 12H21" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full min-h-[calc(100vh-80px)] bg-blue-600 px-4 py-8 flex flex-col md:hidden shadow-2xl z-40 text-white"
          >
            <div className="flex flex-col gap-2 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  id={`nav_link_${item.name.toLowerCase().replace(/\s+/g, '_')}_mobile`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-5 border-b border-white/10 font-maison"
                >
                  <RevealText
                    lines={[
                      <span key={item.name} className="flex items-center justify-between w-full">
                        <span className="text-2xl font-normal uppercase tracking-wider text-white">
                          {item.name}
                        </span>
                        <ArrowRight size={24} className="text-white" />
                      </span>
                    ]}
                    lineClassName="w-full"
                    stagger={0}
                    animateOnMount={true}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



