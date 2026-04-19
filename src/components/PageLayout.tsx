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
}

/**
 * Centralized page layout wrapper.
 * Provides consistent: Header, background, main padding, optional breadcrumbs.
 * Use `narrow` for article/detail pages, default for hub/list pages.
 */
export default function PageLayout({ children, narrow = false, showBreadcrumbs = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111] transition-colors duration-300">
      <Header />
      <main className={`${narrow ? 'w-full' : 'max-w-[1400px] mx-auto'} px-6 md:px-12 lg:px-24 pt-44 pb-24 transition-colors`}>
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
