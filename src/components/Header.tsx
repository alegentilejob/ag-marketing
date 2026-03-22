import { ArrowUpRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Header({ activeSection = "home" }: { activeSection?: string }) {
  const { lang, setLang, content } = useLanguage();
  const { navigation } = content;

  const isContact = activeSection === 'contact';

  const currentNav = navigation.find(n => n.href.replace('#', '') === activeSection);
  const CurrentIcon = currentNav ? currentNav.icon : null;

  return (
    <>
      <div className="hidden md:block fixed top-6 right-6 md:top-12 md:right-12 z-50">
        <AnimatePresence>
          {!isContact && (
            <motion.a
              key="contact-btn"
              id="btn_contact_header"
              data-track-category="navigation"
              data-track-label="contact_header_trigger"
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <span>{lang === 'it' ? 'contatti' : 'contact'}</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Header Menu */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white/80 dark:bg-[#111]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50 flex items-center justify-between p-4 px-6 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <AnimatePresence>
              <motion.a
                key="mobile-contact"
                id="btn_contact_header_mobile"
                data-track-category="navigation"
                data-track-label="contact_header_trigger_mobile"
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md flex items-center gap-2"
              >
                {lang === 'it' ? 'Contattami' : 'Contact Me'}
              </motion.a>
          </AnimatePresence>

          <button
            onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
            className="flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-blue-600 transition-colors bg-white dark:bg-gray-800"
            aria-label="Toggle language"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'it' ? 'EN' : 'IT'}</span>
          </button>
        </div>

        {CurrentIcon && (
          <div id="nav_indicator_mobile" data-track-category="navigation" data-track-label={`section_indicator_${activeSection}`} className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-900 dark:text-gray-100 shadow-sm border border-gray-200 dark:border-gray-700">
            <CurrentIcon size={18} className="stroke-[2.5px]" />
          </div>
        )}
      </div>
    </>
  );
}

