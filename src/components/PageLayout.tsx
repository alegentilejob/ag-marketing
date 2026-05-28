"use client";
import React from 'react';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';

interface PageLayoutProps {
  children: React.ReactNode;
  /** If true, max-width is 4xl (article/content format). Default is full 1400px hub format. */
  narrow?: boolean;
  /** Show breadcrumbs (default: true) */
  showBreadcrumbs?: boolean;
  /** Custom top/bottom padding class. Defaults to 'pt-44 pb-24'. */
  customPadding?: string;
}

/**
 * Centralized page layout wrapper.
 * Provides consistent: Header, background, main padding, optional breadcrumbs.
 * Use `narrow` for article/detail pages, default for hub/list pages.
 */
export default function PageLayout({ 
  children, 
  narrow = false, 
  showBreadcrumbs = true,
  customPadding = 'pt-44 pb-24'
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      <Header />
      <main className={`${narrow ? 'w-full' : 'max-w-[1400px] mx-auto'} px-2 md:px-4 ${customPadding} transition-colors`}>
        {narrow ? (
          <div className="max-w-5xl mx-auto">
            {showBreadcrumbs && <Breadcrumbs />}
            {children}
          </div>
        ) : (
          <>
            {showBreadcrumbs && <Breadcrumbs />}
            {children}
          </>
        )}
      </main>
    </div>
  );
}
