/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowUpRight, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useState, useRef, useEffect } from "react";
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
  const [showHeader, setShowHeader] = useState(true);

  const isHomepage = pathname === '/' || pathname === '/it' || pathname === '/en' || pathname === '/it/' || pathname === '/en/';

  useEffect(() => {
    if (!isHomepage) {
      setShowHeader(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans ${isMobileMenuOpen ? 'bg-[#0038A8] text-white border-none' : 'bg-white dark:bg-[#111] border-b border-[#0038A8]/10'} ${(!showHeader && !isMobileMenuOpen) ? '-translate-y-full' : 'translate-y-0'}`}>

      {/* ── Desktop Header: 3-zone layout ── */}
      <div className="hidden md:grid grid-cols-3 max-w-[1400px] mx-auto px-2 md:px-4 h-16 items-center">

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
                  className={`flex items-center gap-1.5 text-[14px] font-normal normal-case tracking-normal transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#0038A8] font-maison
                    ${isActive ? 'text-[#0038A8]' : 'text-[#0D1016] dark:text-white'}`}
                >
                  <RevealText
                    lines={[
                      <span key={item.name} className="flex items-center gap-1.5">
                        {item.name}
                        {hasDropdown && (
                          <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${openDropdown === item.name ? 'rotate-180' : ''}`} 
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
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-[calc(100%)] left-1/2 -translate-x-1/2 min-w-[200px] bg-white dark:bg-[#111] border border-[#0038A8]/10 shadow-2xl p-2"
                    >
                      <div className="grid gap-1">
                        {isProjects ? (
                          Array.from(new Set(projects.map(p => p.category))).map((cat) => (
                            <Link
                              key={cat}
                              href={getLocalizedPath(`/progetti/${cat.toLowerCase()}`, lang)}
                              className="group flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-400"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className="text-[14px] font-normal font-maison normal-case tracking-normal text-[#0D1016] dark:text-white group-hover:text-[#0038A8] transition-colors duration-400">
                                {cat}
                              </span>
                              <ArrowRight size={10} className="text-gray-300 group-hover:text-[#0038A8] group-hover:translate-x-1 transition-all duration-400" />
                            </Link>
                          ))
                        ) : (
                          experienceItems.map((job: any) => (
                            <Link
                              key={job.id}
                              href={getLocalizedPath(`/esperienze/${job.id}`, lang)}
                              className="group flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-400"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className="text-[14px] font-normal font-maison normal-case tracking-normal text-[#0D1016] dark:text-white group-hover:text-[#0038A8] transition-colors duration-400">
                                {job.company}
                              </span>
                              <ArrowRight size={10} className="text-gray-300 group-hover:text-[#0038A8] group-hover:translate-x-1 transition-all duration-400" />
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
            className="text-[14px] font-normal normal-case tracking-normal text-[#0D1016] dark:text-white hover:text-[#0038A8] transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] font-maison"
            aria-label="Toggle language"
          >
            <RevealText
              lines={[lang === 'it' ? 'EN' : 'IT']}
              lineClassName="inline-block"
              stagger={0}
              animateOnMount={true}
            />
          </button>
          <a
            id="cta_contact_header"
            href={`mailto:${siteConfig.contact.email}`}
            onClick={() => {
              if (typeof window !== 'undefined') {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                  event: 'contact_click',
                  contact_type: 'email',
                  contact_value: siteConfig.contact.email,
                  click_location: 'header',
                  page_path: window.location.pathname
                });
              }
            }}
            className="bg-[#0038A8] text-white text-[13px] font-inter font-normal tracking-normal normal-case rounded-full px-5 py-2.5 leading-none hover:bg-[#1D0CA8] shadow-[0_4px_24px_rgba(0,56,168,0.15)] flex items-center justify-center font-sans transition-all duration-300"
          >
            {lang === 'it' ? 'Scrivi mail' : 'Write email'}
          </a>
        </div>
      </div>

      {/* ── Mobile Header ── */}
      <div className="md:hidden max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-16 left-0 w-full min-h-[calc(100vh-64px)] bg-[#0038A8] px-4 py-8 flex flex-col md:hidden shadow-2xl z-40 text-white"
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
                        <span className="text-2xl font-normal normal-case tracking-normal text-white font-maison">
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
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-center w-full">
                <a
                  id="cta_contact_mobile_menu"
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (typeof window !== 'undefined') {
                      (window as any).dataLayer = (window as any).dataLayer || [];
                      (window as any).dataLayer.push({
                        event: 'contact_click',
                        contact_type: 'email',
                        contact_value: siteConfig.contact.email,
                        click_location: 'mobile_menu',
                        page_path: window.location.pathname
                      });
                    }
                  }}
                  className="bg-white text-[#0038A8] text-[15px] font-inter font-normal tracking-normal normal-case rounded-full px-6 py-3.5 leading-none transition-all select-none cursor-pointer w-full text-center hover:bg-gray-100 shadow-[0_4px_24px_rgba(0,56,168,0.15)] flex items-center justify-center font-sans"
                >
                  {lang === 'it' ? 'Scrivi mail' : 'Write email'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



