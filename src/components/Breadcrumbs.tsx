"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const { lang, content } = useLanguage();
  const { siteConfig } = content;

  if (pathname === '/') return null;

  const isEnPath = pathname.startsWith('/en/') || pathname === '/en';
  const allSegments = pathname.split('/').filter(s => s !== '' && s !== 'en');
  
  // Helper to format segment names
  const formatSegment = (segment: string) => {
    // Replace hyphens with spaces and capitalize
    const formatted = segment.replace(/-/g, ' ');
    return formatted.toUpperCase();
  };
  
  // Build breadcrumb items
  const breadcrumbs = allSegments.map((segment, index) => {
    // Reconstruct href: if we started with /en, we must keep it in the link to maintain language
    const prefix = isEnPath ? '/en/' : '/';
    const relPath = allSegments.slice(0, index + 1).join('/');
    const href = `${prefix}${relPath}`;
    
    const isDateSegment = /^\d{2,4}$/.test(segment);
    const isLast = index === allSegments.length - 1;

    return {
      label: formatSegment(segment),
      href,
      isDateSegment,
      isLast,
    };
  }).filter(crumb => !crumb.isDateSegment);

  // Update isLast for the filtered collection
  if (breadcrumbs.length > 0) {
    breadcrumbs[breadcrumbs.length - 1].isLast = true;
  }

  // Prepare Schema.org JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.meta.url || "https://alessandrogentile.marketing"
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.label,
        "item": `${siteConfig.meta.url || "https://alessandrogentile.marketing"}${crumb.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <nav aria-label="Breadcrumb" className="flex mb-12">
        <ol className="flex items-center space-x-2 md:space-x-4">
          <li>
            <Link
              href={isEnPath ? "/en/" : "/"}
              className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">HOME</span>
            </Link>
          </li>

          {breadcrumbs.map((crumb) => (
            <li key={crumb.href} className="flex items-center space-x-2 md:space-x-4">
              <ChevronRight size={14} className="text-gray-300" />
              {crumb.isLast ? (
                <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest truncate max-w-[200px] md:max-w-none leading-none">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors text-[10px] font-bold uppercase tracking-widest leading-none"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
