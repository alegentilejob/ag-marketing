"use client";
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { RevealText, FadeIn } from './animations';

const Footer = () => {
    const { lang, content } = useLanguage();
    const { siteConfig } = content;

    const trackContactClick = (type: string, value: string) => {
        if (typeof window !== 'undefined') {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
                event: 'contact_click',
                contact_type: type,
                contact_value: value,
                page_path: window.location.pathname
            });
        }
    };

    return (
        <footer id="contact" className="w-full bg-white dark:bg-[#111] border-t border-gray-100 dark:border-gray-800 py-24 transition-colors">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center text-center gap-16">
                    <div className="space-y-6">
                        <RevealText>
                            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase whitespace-nowrap">
                                {lang === 'it' ? 'Ti interessa contattarmi? ' : 'Interested in contacting me? '}
                                <span className="text-blue-600 block md:inline underline underline-offset-8">
                                    {lang === 'it' ? 'Clicca qui' : 'Click here'}
                                </span>
                            </h3>
                        </RevealText>
                        <FadeIn delay={0.2}>
                            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                                {lang === 'it'
                                    ? "Stai valutando il mio profilo per il tuo team? Contattami direttamente per un colloquio conoscitivo o connettiti con me su LinkedIn."
                                    : "Evaluating my profile for your team? Contact me directly for a screening interview or connect with me on LinkedIn."}
                            </p>
                        </FadeIn>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        <a
                            id="lnk_email"
                            href={`mailto:${siteConfig.contact.email}`}
                            onClick={() => trackContactClick('email', siteConfig.contact.email)}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all border border-gray-100 dark:border-gray-800 group-hover:border-blue-600 shadow-sm">
                                <Mail size={24} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {siteConfig.contact.email}
                            </span>
                        </a>

                        <a
                            id="lnk_linkedin"
                            href={siteConfig.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackContactClick('linkedin', siteConfig.contact.linkedin)}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all border border-gray-100 dark:border-gray-800 group-hover:border-blue-600 shadow-sm">
                                <Linkedin size={24} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                LinkedIn
                            </span>
                        </a>

                        <a
                            id="lnk_phone"
                            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                            onClick={() => trackContactClick('phone', siteConfig.contact.phone)}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all border border-gray-100 dark:border-gray-800 group-hover:border-blue-600 shadow-sm">
                                <Phone size={24} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {siteConfig.contact.phone}
                            </span>
                        </a>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
