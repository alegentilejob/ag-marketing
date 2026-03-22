import type { Metadata } from "next";
import { primaryFont } from "@/styles/fonts";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { cookies } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'it';

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

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  const lang = localeCookie ? localeCookie.value : 'it'; // Default to 'it'

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${primaryFont.variable} font-sans antialiased bg-white text-black dark:bg-[#111] dark:text-white transition-colors duration-300 min-h-screen flex`}
        data-track-language={lang}
      >
        <LanguageProvider initialLang={lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
