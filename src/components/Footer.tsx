"use client";
import React, { useMemo } from 'react';
import { Linkedin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import RevealText from '@/components/RevealText';

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

    // Predefined scatter positions for the pixel effect around the text
    const pixelPositions = useMemo(() => [
        { top: '15%', left: '8%', size: 'w-4 h-4 md:w-6 md:h-6' },
        { top: '25%', right: '12%', size: 'w-6 h-6 md:w-8 md:h-8' },
        { top: '65%', left: '18%', size: 'w-5 h-5 md:w-7 md:h-7' },
        { top: '75%', right: '20%', size: 'w-4 h-4 md:w-5 md:h-5' },
        { bottom: '15%', left: '28%', size: 'w-6 h-6 md:w-8 md:h-8' },
        { bottom: '25%', right: '6%', size: 'w-5 h-5 md:w-6 md:h-6' },
        { top: '45%', left: '5%', size: 'w-4 h-4 md:w-5 md:h-5' },
        { bottom: '40%', right: '15%', size: 'w-6 h-6 md:w-8 md:h-8' },
    ], []);

    return (
        <footer id="contact" className="relative w-full bg-blue-600 border-none py-28 transition-colors overflow-hidden select-none">
            
            {/* Absolute scattered pixels (light blue with border) */}
            {pixelPositions.map((pos, idx) => (
                <div 
                    key={idx}
                    className={`absolute bg-blue-400/25 border border-white/5 pointer-events-none rounded-none ${pos.size}`}
                    style={{
                        top: pos.top || 'auto',
                        bottom: pos.bottom || 'auto',
                        left: pos.left || 'auto',
                        right: pos.right || 'auto',
                    }}
                />
            ))}

            <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center text-center gap-12">
                    
                    {/* Centered Main Tagline */}
                    <RevealText
                        lines={[lang === 'it' ? 'Iniziamo qualcosa di grande assieme' : 'Let\'s start something great together']}
                        lineClassName="text-white font-medium font-sans text-center tracking-tight leading-tight text-[clamp(28px,4.5vw,56px)] max-w-4xl uppercase"
                    />

                    {/* Email button with mail icon on the left & rounded corners */}
                    <div className="flex flex-col items-center gap-6 w-full max-w-md">
                        <a
                            id="lnk_email"
                            href={`mailto:${siteConfig.contact.email}`}
                            onClick={() => trackContactClick('email', siteConfig.contact.email)}
                            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-white/95 text-blue-600 font-sans text-sm md:text-base font-bold uppercase tracking-wider py-4 px-8 shadow-lg active:scale-95 hover:scale-102 transition-all rounded-full overflow-hidden"
                        >
                            <RevealText
                                lines={[
                                    <span key="email-content" className="flex items-center gap-3">
                                        <Mail size={18} className="shrink-0" />
                                        <span>{siteConfig.contact.email}</span>
                                    </span>
                                ]}
                                lineClassName="font-bold text-blue-600 uppercase flex items-center justify-center"
                                stagger={0}
                            />
                        </a>

                        {/* Secondary contacts (LinkedIn & Phone) kept subtle to preserve GTM tracking */}
                        <div className="flex items-center justify-center gap-6 mt-2">
                            <a
                                id="lnk_linkedin"
                                href={siteConfig.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackContactClick('linkedin', siteConfig.contact.linkedin)}
                                className="text-xs font-semibold uppercase tracking-widest text-blue-200 hover:text-white transition-colors flex items-center gap-1.5"
                            >
                                <RevealText
                                    lines={[
                                        <span key="linkedin-content" className="flex items-center gap-1.5">
                                            <Linkedin size={14} className="shrink-0" />
                                            <span>LinkedIn</span>
                                        </span>
                                    ]}
                                    lineClassName="text-xs font-semibold uppercase tracking-widest text-blue-200 group-hover:text-white flex items-center"
                                    stagger={0}
                                />
                            </a>
                            <a
                                id="lnk_phone"
                                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                                onClick={() => trackContactClick('phone', siteConfig.contact.phone)}
                                className="text-xs font-semibold uppercase tracking-widest text-blue-200 hover:text-white transition-colors flex items-center gap-1.5"
                            >
                                <RevealText
                                    lines={[
                                        <span key="phone-content" className="flex items-center gap-1.5">
                                            <Phone size={14} className="shrink-0" />
                                            <span>{siteConfig.contact.phone}</span>
                                        </span>
                                    ]}
                                    lineClassName="text-xs font-semibold uppercase tracking-widest text-blue-200 group-hover:text-white flex items-center"
                                    stagger={0}
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
