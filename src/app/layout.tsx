import type { Metadata } from "next";
import { primaryFont, displayFont, monoFont } from "@/styles/fonts";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { cookies, headers } from "next/headers";
import Footer from "@/components/Footer";
import Script from "next/script";
import { getLocalizedPath } from "@/utils/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const headerList = await headers();
  const middlewareLang = headerList.get('x-next-lang');
  const path = headerList.get('x-next-path') || '/';
  const lang = middlewareLang || cookieStore.get('NEXT_LOCALE')?.value || 'it';

  const baseUrl = 'https://ag-marketing.vercel.app';

  const translations = {
    it: {
      title: "Alessandro Gentile Marketing",
      description: "Portfolio di Alessandro Gentile, Junior Marketing Strategist specializzato in data-driven strategies e ottimizzazione digitale."
    },
    en: {
      title: "Alessandro Gentile Marketing",
      description: "Portfolio of Alessandro Gentile, Junior Marketing Strategist specialized in data-driven strategies and digital optimization."
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.it;

  const itPath = getLocalizedPath(path, 'it');
  const enPath = getLocalizedPath(path, 'en');

  return {
    title: t.title,
    description: t.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'it-IT': `${baseUrl}${itPath}`,
        'en-US': `${baseUrl}${enPath}`,
      }
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerList = await headers();
  const middlewareLang = headerList.get('x-next-lang');
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  const lang = (middlewareLang || localeCookie?.value || 'it') as string;

  return (
    <html lang={lang}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted',
                'wait_for_update': 500
              });

              gtag('js', new Date());
              gtag('config', 'G-94DM407J4F');

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KHJHK4MD');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://ag-marketing.vercel.app/#person",
                  "name": "Alessandro Gentile",
                  "jobTitle": "Junior Marketing Strategist",
                  "url": "https://ag-marketing.vercel.app",
                  "telephone": "+393667360503",
                  "email": "alegentilejob@gmail.com",
                  "image": "https://ag-marketing.vercel.app/media/profile/Gemini_Generated_Image_awvuruawvuruawvu.png",
                  "sameAs": [
                    "https://www.linkedin.com/in/alessandro-gentile-a1151a258/"
                  ],
                  "description": "Junior Marketing Strategist con un forte approccio data-driven, specializzato in analisi performance e strategie digitali misurabili.",
                  "knowsAbout": ["Digital Marketing", "SEO", "Data Analysis", "Marketing Strategy", "Performance Marketing"]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://ag-marketing.vercel.app/#service",
                  "name": "Alessandro Gentile Marketing Strategist",
                  "url": "https://ag-marketing.vercel.app",
                  "image": "https://ag-marketing.vercel.app/media/profile/Gemini_Generated_Image_awvuruawvuruawvu.png",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Monza",
                    "addressCountry": "IT"
                  },
                  "founder": { "@id": "https://ag-marketing.vercel.app/#person" }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${primaryFont.variable} ${displayFont.variable} ${monoFont.variable} font-sans antialiased bg-white text-black dark:bg-[#111] dark:text-white transition-colors duration-300 min-h-screen bg-grid`}
        data-track-language={lang}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHJHK4MD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LanguageProvider initialLang={lang}>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
