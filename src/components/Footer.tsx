"use client";
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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
                        <h3 className="whitespace-nowrap text-gray-900 dark:text-white">
                            {lang === 'it' ? 'Ti interessa contattarmi? ' : 'Interested in contacting me? '}
                            <span className="text-blue-600 block md:inline underline underline-offset-8">
                                {lang === 'it' ? 'Clicca qui' : 'Click here'}
                            </span>
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
                            {lang === 'it'
                                ? "Stai valutando il mio profilo per il tuo team? Contattami direttamente per un colloquio conoscitivo o connettiti con me su LinkedIn."
                                : "Evaluating my profile for your team? Contact me directly for a screening interview or connect with me on LinkedIn."}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                        <a
                            id="lnk_email"
                            href={`mailto:${siteConfig.contact.email}`}
                            onClick={() => trackContactClick('email', siteConfig.contact.email)}
                            className="btn-secondary w-full md:w-auto"
                        >
                            <span>{siteConfig.contact.email}</span>
                            <Mail size={18} />
                        </a>

                        <a
                            id="lnk_linkedin"
                            href={siteConfig.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackContactClick('linkedin', siteConfig.contact.linkedin)}
                            className="btn-secondary w-full md:w-auto"
                        >
                            <span>LinkedIn</span>
                            <Linkedin size={18} />
                        </a>

                        <a
                            id="lnk_phone"
                            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                            onClick={() => trackContactClick('phone', siteConfig.contact.phone)}
                            className="btn-secondary w-full md:w-auto"
                        >
                            <span>{siteConfig.contact.phone}</span>
                            <Phone size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
