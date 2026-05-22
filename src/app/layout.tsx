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

  // Localized Titles and Descriptions based on path
  const getPageMeta = (l: string, p: string) => {
    const isEn = l === 'en';

    // Normalize path for comparison (remove /en/ prefix if present)
    const cleanPath = p.replace(/^\/en/, '') || '/';

    if (cleanPath === '/' || cleanPath === '') {
      return {
        title: "Alessandro Gentile Marketing | Strategist",
        description: isEn
          ? "Portfolio of Alessandro Gentile, Junior Marketing Strategist specialized in data-driven strategies."
          : "Portfolio di Alessandro Gentile, Junior Marketing Strategist specializzato in strategie data-driven."
      };
    }

    if (cleanPath.includes('chi-sono') || cleanPath.includes('about-me')) {
      return {
        title: isEn ? "About Me | Alessandro Gentile Marketing" : "Chi Sono | Alessandro Gentile Marketing",
        description: isEn ? "Learn more about my background and approach." : "Scopri di più sul mio percorso e il mio approccio."
      };
    }

    if (cleanPath.includes('esperienze') || cleanPath.includes('experience')) {
      return {
        title: isEn ? "Experience | Alessandro Gentile Marketing" : "Esperienze | Alessandro Gentile Marketing",
        description: isEn ? "My professional journey and key achievements." : "Il mio percorso professionale e traguardi raggiunti."
      };
    }

    if (cleanPath.includes('progetti') || cleanPath.includes('projects')) {
      return {
        title: isEn ? "Projects | Alessandro Gentile Marketing" : "Progetti | Alessandro Gentile Marketing",
        description: isEn ? "A collection of my work and case studies." : "Una raccolta dei miei lavori e case studies."
      };
    }

    if (cleanPath.includes('cv')) {
      return {
        title: isEn ? "Curriculum Vitae | Alessandro Gentile Marketing" : "Curriculum Vitae | Alessandro Gentile Marketing",
        description: isEn ? "Professional CV and skills." : "CV professionale e competenze."
      };
    }

    return {
      title: "Alessandro Gentile Marketing",
      description: isEn
        ? "Portfolio of Alessandro Gentile, Junior Marketing Strategist."
        : "Portfolio di Alessandro Gentile, Junior Marketing Strategist."
    };
  };

  const meta = getPageMeta(lang, path);

  const itPath = getLocalizedPath(path, 'it');
  const enPath = getLocalizedPath(path, 'en');

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      siteName: 'Alessandro Gentile Marketing',
    },
    robots: {
      index: !path.includes('/progetti/') && !path.includes('/projects/'),
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
  const path = headerList.get('x-next-path') || '/';
  const isDesignSystem = path.includes('/design-system-centralizzato');

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet" />
        <Script
          id="gtm-script"
          strategy="lazyOnload"
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
                  "image": "https://ag-marketing.vercel.app/profile/alessandro-gentile-image-profile.png",
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
                  "image": "https://ag-marketing.vercel.app/profile/alessandro-gentile-image-profile.png",
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
          {!isDesignSystem && <Footer />}
        </LanguageProvider>
      </body>
    </html>
  );
}
