"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { framerColors, framerTypography, framerButtons, framerDemoData } from '@/styles/framer-tokens';
import { ServiceCard, ProjectCard, TestimonialCard, PricingCard, FaqAccordionList } from '@/components/framer-components';

/**
 * Arrow Icon Component
 */
function ArrowIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
    >
      <path 
        d="M6 3.5L10.5 8L6 12.5" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

/**
 * Generic Framer Button Component
 * Renders any button variant cataloged in framer-tokens.ts with full fidelity.
 */
export function FramerButtonShowcase({ variantKey }: { variantKey: keyof typeof framerButtons }) {
  const spec = framerButtons[variantKey];
  const spring = { type: "spring", stiffness: 300, damping: 25 };

  if (spec.type === "link") {
    return (
      <motion.a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="group relative flex items-center select-none cursor-pointer w-fit"
        style={{
          gap: spec.gap,
          padding: spec.padding,
        }}
        initial="initial"
        whileHover="hover"
      >
        <motion.span
          style={{
            fontFamily: spec.textStyle.fontFamily,
            fontWeight: spec.textStyle.fontWeight,
            fontSize: spec.textStyle.fontSize,
            lineHeight: spec.textStyle.lineHeight,
            letterSpacing: spec.textStyle.letterSpacing,
            fontVariationSettings: spec.textStyle.fontVariationSettings,
          }}
          variants={{
            initial: { color: spec.textColor },
            hover: { color: spec.hoverTextColor || spec.textColor }
          }}
          transition={spring}
        >
          Meet the team
        </motion.span>

        <motion.span
          variants={{
            initial: { color: spec.textColor },
            hover: { color: spec.hoverTextColor || spec.textColor }
          }}
          transition={spring}
        >
          <ArrowIcon />
        </motion.span>

        {spec.hasBottomBorder && (
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            variants={{
              initial: { backgroundColor: spec.borderColor },
              hover: { backgroundColor: spec.hoverBorderColor || spec.borderColor }
            }}
            transition={spring}
          />
        )}
      </motion.a>
    );
  }

  // Solid Button Variants
  return (
    <motion.button
      className="group flex items-center justify-center select-none cursor-pointer border-none focus:outline-none shadow-sm hover:shadow-md"
      style={{
        borderRadius: spec.borderRadius,
        padding: spec.padding,
        gap: spec.gap,
      }}
      variants={{
        visible: { 
          backgroundColor: spec.backgroundColor,
          color: spec.textColor 
        },
        hover: { 
          backgroundColor: spec.hoverBackgroundColor || spec.backgroundColor,
          color: spec.hoverTextColor || spec.textColor 
        }
      }}
      transition={spring}
      initial="visible"
      animate="visible"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        style={{
          fontFamily: spec.textStyle.fontFamily,
          fontWeight: spec.textStyle.fontWeight,
          fontSize: spec.textStyle.fontSize,
          lineHeight: spec.textStyle.lineHeight,
          letterSpacing: spec.textStyle.letterSpacing,
          fontVariationSettings: spec.textStyle.fontVariationSettings,
          position: "relative",
          top: "-0.5px"
        }}
        variants={{
          visible: { color: spec.textColor },
          hover: { color: spec.hoverTextColor || spec.textColor }
        }}
        transition={spring}
      >
        Meet the team
      </motion.span>
      <motion.span
        variants={{
          visible: { color: spec.textColor },
          hover: { color: spec.hoverTextColor || spec.textColor }
        }}
        transition={spring}
      >
        <ArrowIcon />
      </motion.span>
    </motion.button>
  );
}

/**
 * PrimaryButton Component (Framer 'Menu Icon' replica, nodeId: ePYScSbZ9)
 */
export function PrimaryButton() {
  const buttonSpring = {
    type: "spring",
    stiffness: 300,
    damping: 25
  };

  return (
    <motion.button
      className="relative overflow-hidden cursor-pointer select-none border-none focus:outline-none flex items-center justify-center shadow-lg"
      style={{
        borderRadius: "22px",
        padding: "8px 16px",
        width: "fit-content",
        height: "fit-content",
        backgroundColor: framerColors.primary.value,
      }}
      transition={buttonSpring}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 30px -10px rgba(0, 72, 249, 0.3)`,
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Menu"
    >
      <span
        className="font-medium inline-block select-none"
        style={{
          fontFamily: framerTypography.paragraphs.p20.fontFamily,
          fontWeight: framerTypography.paragraphs.p20.fontWeight,
          fontSize: framerTypography.paragraphs.p20.fontSize,
          lineHeight: framerTypography.paragraphs.p20.lineHeight,
          letterSpacing: framerTypography.paragraphs.p20.letterSpacing,
          color: framerColors.white.value,
          position: "relative",
          top: "-1px",
        }}
      >
        Menu
      </span>
    </motion.button>
  );
}

export default function CentralizedSandboxPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 25 }
    }
  };

  return (
    <div 
      className="min-h-screen bg-white text-neutral-950 flex flex-col items-center justify-start py-20 px-8 antialiased relative overflow-x-hidden"
      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
    >
      {/* Subtle light-blue radial glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,72,249,0.02)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <motion.div 
        className="w-full max-w-4xl flex flex-col gap-16 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Label */}
        <motion.div variants={itemVariants} className="border-b border-neutral-100 pb-6">
          <span className="text-[10px] font-mono tracking-widest text-[#0048F9] font-bold uppercase">
            Framer Design System Centralizzato
          </span>
          <h1 className="text-xl font-medium text-neutral-500 mt-1">
            Official Typography Templates & Button Components (Token-Driven)
          </h1>
        </motion.div>

        {/* Headings Showcase Section */}
        <div className="flex flex-col gap-14">
          <motion.h2 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Headings (Inter Display / Inter — opsz: 32)
          </motion.h2>
          
          {Object.entries(framerTypography.headings).map(([key, style]) => {
            const Tag = style.tag;
            return (
              <motion.div key={key} variants={itemVariants} className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                  {style.tag.toUpperCase()} — {style.path} ({style.fontSize} / Line Height: {style.lineHeight} / Spacing: {style.letterSpacing})
                </span>
                <Tag 
                  className="font-medium text-neutral-950 select-none"
                  style={{
                    fontFamily: style.fontFamily,
                    fontWeight: style.fontWeight,
                    fontSize: style.fontSize,
                    lineHeight: style.lineHeight,
                    letterSpacing: style.letterSpacing,
                    fontVariationSettings: style.fontVariationSettings,
                  }}
                >
                  {style.name === "Heading 108" ? "Alessandro Gentile" : 
                   style.name === "Heading 96" ? "Digital Strategist" :
                   style.name === "Heading 72" ? "Esperienze & Progetti" :
                   style.name === "Heading 48" ? "Junior Marketing Strategist" : "Informazioni di Contatto"}
                </Tag>
              </motion.div>
            );
          })}
        </div>

        {/* Paragraphs Showcase Section */}
        <div className="flex flex-col gap-10 border-t border-neutral-100 pt-14">
          <motion.h2 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Paragraphs (Inter — opsz: 14)
          </motion.h2>

          {Object.entries(framerTypography.paragraphs).map(([key, style]) => (
            <motion.div key={key} variants={itemVariants} className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                P — {style.path} ({style.fontSize} / Line Height: {style.lineHeight} / Spacing: {style.letterSpacing})
              </span>
              <p 
                className="font-medium text-neutral-700 select-none"
                style={{
                  fontFamily: style.fontFamily,
                  fontWeight: style.fontWeight,
                  fontSize: style.fontSize,
                  lineHeight: style.lineHeight,
                  letterSpacing: style.letterSpacing,
                  fontVariationSettings: style.fontVariationSettings,
                }}
              >
                {style.name === "Paragraph 24" ? "Strategie di marketing basate sui dati, ottimizzazione SEO e campagne performance digitali misurabili." :
                 style.name === "Paragraph 20" ? "Questo testo dimostrativo utilizza le precise specifiche di spaziatura, altezza linea e dimensione configurate nel file del progetto originale su Framer." :
                 style.name === "Paragraph 18" ? "Analisi competitiva, posizionamento del brand ed esecuzione di campagne digitali per ottimizzare il ritorno sull'investimento e incrementare l'efficacia dei canali." :
                 style.name === "Paragraph 16" ? "Sviluppo di strategie di posizionamento SEO, digital analytics, tracciamento tassonomico, gestione canali social media e inserzioni a performance." :
                 "Nota a piè di pagina: Stili tipografici globali sincronizzati in tempo reale dal server Framer MCP."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Framer Button Components & Variants Section (Pasted Image Request) */}
        <div className="flex flex-col gap-10 border-t border-neutral-100 pt-14">
          <motion.h2 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Button Component & Variants Showcase (Framer 'Button' nodeId: ynxsaIxXW)
          </motion.h2>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Line Link Variants */}
            <div className="flex flex-col gap-6 p-6 bg-neutral-50 border border-neutral-100 rounded-3xl">
              <span className="font-mono text-[9px] text-[#0048F9] font-bold uppercase tracking-widest">
                Line Links (Has Bottom Border & Hover States)
              </span>
              
              <div className="flex flex-col gap-6 py-4">
                {/* Line Small */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-400">Line - Small (nodeId: WjB918Y4I)</span>
                  <FramerButtonShowcase variantKey="lineSmall" />
                </div>
                {/* Line Medium */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-400">Line - Medium (nodeId: aFGI9eaSz)</span>
                  <FramerButtonShowcase variantKey="lineMedium" />
                </div>
                {/* Line Big */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-400">Line - Big (nodeId: P2MliArYS)</span>
                  <FramerButtonShowcase variantKey="lineBig" />
                </div>
              </div>
            </div>

            {/* Solid Button Variants */}
            <div className="flex flex-col gap-6 p-6 bg-neutral-50 border border-neutral-100 rounded-3xl">
              <span className="font-mono text-[9px] text-[#0048F9] font-bold uppercase tracking-widest">
                Solid Buttons (Border Radius 12px & Hover States)
              </span>
              
              <div className="flex flex-col gap-6 py-4">
                {/* White Small */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-400">White - Small</span>
                  <FramerButtonShowcase variantKey="whiteSmall" />
                </div>
                {/* Black Small */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-400">Black - Small</span>
                  <FramerButtonShowcase variantKey="blackSmall" />
                </div>
                {/* Primary Small */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-400">Primary - Small</span>
                  <FramerButtonShowcase variantKey="primarySmall" />
                </div>
                {/* White Big */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-400">White - Big</span>
                  <FramerButtonShowcase variantKey="whiteBig" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Color Palette Showcase Section */}
        <div className="flex flex-col gap-10 border-t border-neutral-100 pt-14">
          <motion.h2 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Color Palette (Color Styles)
          </motion.h2>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(framerColors).map(([key, style]) => (
              <div 
                key={key} 
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div 
                  className="w-full h-16 rounded-xl border border-neutral-200/50" 
                  style={{ backgroundColor: style.value }}
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-xs text-neutral-800">{style.name}</span>
                  <span className="font-mono text-[9px] text-neutral-400 uppercase select-all">{style.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Primary Button Section */}
        <motion.div 
          variants={itemVariants} 
          className="border-t border-neutral-100 pt-14 flex flex-col gap-4"
        >
          <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
            Menu Button — /Primary Component (nodeId: ePYScSbZ9)
          </span>
          <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-10 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-[#0048F9]/1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
            <PrimaryButton />
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* FRAMER LAYOUT & SPACING BLUEPRINT SYSTEM */}
        {/* ========================================================================= */}
        <motion.div 
          variants={itemVariants} 
          className="border-t border-neutral-100 pt-16 mt-8 flex flex-col gap-12"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#0048F9] font-bold uppercase">
              Framer Layout Blueprint & Spacing System
            </span>
            <h2 className="text-xl font-medium text-neutral-500 mt-1">
              Official structural formulas, container limitations, and responsive grid spacing rules.
            </h2>
          </div>

          {/* Interactive Spacing Token Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
              <span className="text-[9px] font-mono text-neutral-400 uppercase">Desktop Padding</span>
              <span className="font-bold text-neutral-900 text-2xl">100px / 60px</span>
              <p className="text-[11px] text-neutral-500 leading-normal">Applied to section wrappers. Generates generous whitespace for a premium editorial layout.</p>
              <code className="text-[9px] font-mono mt-2 bg-neutral-100 px-2 py-1 rounded text-[#0048F9] self-start">py-24 px-16</code>
            </div>

            <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
              <span className="text-[9px] font-mono text-neutral-400 uppercase">Container Limit</span>
              <span className="font-bold text-neutral-900 text-2xl">1800px Max</span>
              <p className="text-[11px] text-neutral-500 leading-normal">Defines the horizontal viewport constraint to keep readability optimal on ultrawide screens.</p>
              <code className="text-[9px] font-mono mt-2 bg-neutral-100 px-2 py-1 rounded text-[#0048F9] self-start">max-w-[1800px]</code>
            </div>

            <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
              <span className="text-[9px] font-mono text-neutral-400 uppercase">Block-Level Gaps</span>
              <span className="font-bold text-neutral-900 text-2xl">60px / 100px</span>
              <p className="text-[11px] text-neutral-500 leading-normal">Standard spacing between primary structural divisions and sibling page containers.</p>
              <code className="text-[9px] font-mono mt-2 bg-neutral-100 px-2 py-1 rounded text-[#0048F9] self-start">gap-16 lg:gap-24</code>
            </div>

            <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
              <span className="text-[9px] font-mono text-neutral-400 uppercase">Text & Tag Gaps</span>
              <span className="font-bold text-neutral-900 text-2xl">30px</span>
              <p className="text-[11px] text-neutral-500 leading-normal">Defines internal spacing between Section Badges, main Headings, and supportive descriptions.</p>
              <code className="text-[9px] font-mono mt-2 bg-neutral-100 px-2 py-1 rounded text-[#0048F9] self-start">gap-7</code>
            </div>
          </div>

          {/* Visual Grid Blueprint: 1:3 Column Ratio Showcase */}
          <div className="bg-neutral-50 border border-neutral-200/40 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0048F9]/5 text-[#0048F9] font-mono text-[8px] uppercase tracking-widest px-3 py-1 rounded-bl-xl border-l border-b border-neutral-200/20">
              Visual Grid Sandbox (1:3 Grid Ratio)
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-[#0048F9] font-semibold uppercase tracking-wider">
                Interactive Grid Layout Blueprint
              </span>
              <p className="text-xs text-neutral-500 max-w-xl">
                The standard Framer desktop section utilizes a 4-column responsive grid layout. The left column (25%) acts as an anchor for the Section Badge. The right columns (75%) hold headings and CTAs.
              </p>
            </div>

            {/* Simulated Live Blueprint Box */}
            <div className="border border-dashed border-neutral-300 rounded-2xl p-6 bg-white grid grid-cols-1 lg:grid-cols-4 gap-6 items-start font-mono text-xs">
              
              {/* Badge Column (1 Col Span) */}
              <div className="border border-dashed border-[#0048F9]/30 bg-[#0048F9]/1 rounded-xl p-4 flex flex-col gap-2 h-full">
                <span className="text-[9px] text-[#0048F9] font-bold uppercase tracking-wider">Column 1 (25% Width)</span>
                <div className="px-2 py-1 rounded bg-[#0048F9] text-white text-[9px] font-semibold uppercase self-start">
                  Section Badge
                </div>
                <span className="text-[10px] text-neutral-400">Section label anchor</span>
              </div>

              {/* Main Content Column (3 Cols Span) */}
              <div className="lg:col-span-3 border border-dashed border-neutral-300 bg-neutral-50/50 rounded-xl p-4 flex flex-col gap-4">
                <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Column 2-4 (75% Width)</span>
                
                <div className="flex flex-col gap-3">
                  <div className="h-4 bg-neutral-200 rounded w-2/3" />
                  <div className="h-4 bg-neutral-200 rounded w-1/2" />
                </div>
                
                <div className="flex flex-col gap-2 pt-2">
                  <div className="h-2.5 bg-neutral-200/70 rounded w-full" />
                  <div className="h-2.5 bg-neutral-200/70 rounded w-5/6" />
                </div>

                <div className="h-9 bg-[#0048F9]/10 border border-[#0048F9]/20 rounded-lg w-1/3 mt-2" />
              </div>
            </div>

            {/* Developer Integration Specs */}
            <div className="flex flex-col gap-3 border-t border-neutral-200/50 pt-6">
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                Developer Integration Code (Tailwind & React)
              </span>
              
              <div className="bg-neutral-900 text-neutral-300 rounded-xl p-4 text-[11px] font-mono overflow-x-auto leading-normal">
                {`{/* Standard Framer Section Container */}\n`}
                {`<section className="w-full bg-white py-[100px] px-[60px] flex justify-center border-b border-neutral-100">\n`}
                {`  <div className="w-full max-w-[1800px] flex flex-col gap-[60px]">\n\n`}
                {`    {/* Responsive 4-Column Grid Header */}\n`}
                {`    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 items-start">\n`}
                {`      <div className="col-span-1">\n`}
                {`        <Badge text="perspectives" />\n`}
                {`      </div>\n`}
                {`      <div className="col-span-1 lg:col-span-3 flex flex-col gap-[30px] items-start">\n`}
                {`        <h2 className="text-5xl lg:text-7xl font-medium tracking-tight">Our perspectives</h2>\n`}
                {`        <p className="text-lg lg:text-xl text-neutral-600 max-w-[500px]">Stay ahead with actionable insights.</p>\n`}
                {`        <Button href="/blog" text="All articles" />\n`}
                {`      </div>\n`}
                {`    </div>\n\n`}
                {`  </div>\n`}
                {`</section>`}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARDS & LISTS SHOWCASE SECTION */}
        {/* ========================================================================= */}
        
        {/* Section Header */}
        <motion.div 
          variants={itemVariants} 
          className="border-t border-neutral-100 pt-16 mt-8"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#0048F9] font-bold uppercase">
            Framer Cards & Lists Component Library
          </span>
          <h2 className="text-xl font-medium text-neutral-500 mt-1">
            Modular layout systems synced from Framer XML with interactive spring dynamics.
          </h2>
        </motion.div>

        {/* 1. Services List (ServiceCard nodeId: arC6CNm2o) */}
        <div className="flex flex-col gap-8">
          <motion.h3 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Services List Component (nodeId: arC6CNm2o — Horizontal Hover Accordion)
          </motion.h3>
          <motion.div variants={itemVariants} className="flex flex-col">
            {framerDemoData.services.map((service, idx) => (
              <ServiceCard
                key={idx}
                index={service.index}
                title={service.title}
                description={service.description}
              />
            ))}
          </motion.div>
        </div>

        {/* 2. Projects Grid (ProjectCard nodeId: GJDYW1pCq) */}
        <div className="flex flex-col gap-10 border-t border-neutral-100 pt-16">
          <motion.h3 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Projects Grid (nodeId: GJDYW1pCq — Image Parallax Scale & Slide-Up Arrow Button)
          </motion.h3>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {framerDemoData.projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                imageUrl={project.imageUrl}
                categories={project.categories}
              />
            ))}
          </motion.div>
        </div>

        {/* 3. Testimonials Grid (TestimonialCard nodeId: XrwYu3XaF) */}
        <div className="flex flex-col gap-10 border-t border-neutral-100 pt-16">
          <motion.h3 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Testimonial Cards (nodeId: XrwYu3XaF — Clean Background & Bold Typography)
          </motion.h3>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {framerDemoData.testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </motion.div>
        </div>

        {/* 4. Pricing Cards (PricingCard nodeId: lQuFCcWjD) */}
        <div className="flex flex-col gap-10 border-t border-neutral-100 pt-16">
          <motion.h3 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Pricing Architecture (nodeId: lQuFCcWjD — Multi-Tier Structured Cards)
          </motion.h3>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
            {framerDemoData.pricing.map((plan, idx) => (
              <PricingCard
                key={idx}
                planTitle={plan.planTitle}
                price={plan.price}
                priceUnit={plan.priceUnit}
                description={plan.description}
                features={plan.features}
                subFeatures={plan.subFeatures}
                actionText={plan.actionText}
                popular={plan.popular}
              />
            ))}
          </motion.div>
        </div>

        {/* 5. FAQ Accordion (FAQ Questions nodeId: hBptkB8kb / FaqQuestion nodeId: RFmnU3YMS) */}
        <div className="flex flex-col gap-10 border-t border-neutral-100 pt-16 pb-12">
          <motion.h3 
            variants={itemVariants} 
            className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest border-b border-neutral-100 pb-2"
          >
            Frequently Asked Questions List (nodeId: hBptkB8kb / FaqQuestion nodeId: RFmnU3YMS)
          </motion.h3>
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto w-full">
            <FaqAccordionList items={framerDemoData.faqs} />
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}
