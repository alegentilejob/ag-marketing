"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  framerColors, 
  framerTypography, 
  framerSpacing, 
  framerAnimations, 
  framerEffects, 
  framerNav, 
  framerHero, 
  framerSectionHeaders, 
  framerSpecNotes, 
  framerFooter, 
  framerSpecsPanel, 
  framerButtons, 
  framerDemoData 
} from '@/styles/framer-tokens';
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
export function FramerButtonShowcase({ variantKey, text }: { variantKey: keyof typeof framerButtons; text?: string }) {
  const spec = framerButtons[variantKey];
  const spring = framerAnimations.springButton;
  const buttonText = text || "Meet the team";

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
          {buttonText}
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
        backgroundColor: spec.backgroundColor,
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
        {buttonText}
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
export function PrimaryButton({ onClick }: { onClick?: () => void }) {
  const buttonSpring = framerAnimations.springButton;

  return (
    <motion.button
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer select-none border-none focus:outline-none flex items-center justify-center shadow-lg"
      style={{
        borderRadius: framerSpacing.buttonRadiusFull,
        padding: "8px 16px",
        width: "fit-content",
        height: "fit-content",
        backgroundColor: framerColors.primary.value,
      }}
      transition={buttonSpring}
      whileHover={{
        scale: 1.05,
        boxShadow: framerEffects.shadowPrimaryGlow,
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={framerNav.menuButtonLabel}
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
        {framerNav.menuButtonLabel}
      </span>
    </motion.button>
  );
}

/**
 * 1. GridBackground Component
 * Recreates the authentic Framer design background with thin absolute lines and subtle radial glow.
 */
function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft blue radial glow */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px]" 
        style={{ background: framerEffects.heroGlow }}
      />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 flex justify-between px-6 md:px-12 lg:px-24">
        <div className="w-[1px] h-full" style={{ backgroundColor: framerColors.gridLine.value }} />
        <div className="w-[1px] h-full" style={{ backgroundColor: framerColors.gridLine.value }} />
        <div className="w-[1px] h-full" style={{ backgroundColor: framerColors.gridLine.value }} />
        <div className="w-[1px] h-full" style={{ backgroundColor: framerColors.gridLine.value }} />
        <div className="w-[1px] h-full" style={{ backgroundColor: framerColors.gridLine.value }} />
      </div>

      {/* Horizontal Divider Lines */}
      <div className="absolute top-1/4 left-0 right-0 h-[1px]" style={{ backgroundColor: framerColors.gridLine.value }} />
      <div className="absolute top-2/4 left-0 right-0 h-[1px]" style={{ backgroundColor: framerColors.gridLine.value }} />
      <div className="absolute top-3/4 left-0 right-0 h-[1px]" style={{ backgroundColor: framerColors.gridLine.value }} />
    </div>
  );
}

/**
 * 2. FramerSection Component
 * Reusable wrapper for standard Framer section paddings, widths, and structural containers.
 */
interface FramerSectionProps {
  id?: string;
  children: React.ReactNode;
  borderBottom?: boolean;
  className?: string;
  hasBackground?: boolean;
}

function FramerSection({ 
  id, 
  children, 
  borderBottom = true, 
  className = "",
  hasBackground = false 
}: FramerSectionProps) {
  return (
    <section 
      id={id}
      className={`w-full flex justify-center relative overflow-hidden ${className}`}
      style={{
        paddingTop: framerSpacing.sectionPaddingY,
        paddingBottom: framerSpacing.sectionPaddingY,
        paddingLeft: framerSpacing.sectionPaddingXSm,
        paddingRight: framerSpacing.sectionPaddingXSm,
        borderBottom: borderBottom ? `1px solid ${framerColors.divider.value}` : "none",
      }}
    >
      {hasBackground && <GridBackground />}
      <div 
        className="w-full flex flex-col z-10"
        style={{
          maxWidth: framerSpacing.containerMaxWidth,
          gap: framerSpacing.containerGapMd,
        }}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * 3. SectionHeader Component
 * Implements the 1:3 Framer grid layout blueprint. Left: Section Badge; Right: Main Heading & supportive paragraph text.
 */
interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  titleTag?: "h2" | "h3";
}

function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  titleTag = "h2" 
}: SectionHeaderProps) {
  const Tag = titleTag;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 items-start">
      {/* Left Column (25% Width): Section Badge */}
      <div className="col-span-1">
        <span 
          className="px-3.5 py-1.5 rounded-md font-mono text-[9px] font-extrabold uppercase tracking-widest inline-block select-none"
          style={{
            backgroundColor: framerColors.primarySubtle.value,
            color: framerColors.primary.value,
            border: `1px solid ${framerColors.primaryBorder.value}`,
          }}
        >
          {badge}
        </span>
      </div>

      {/* Right Columns (75% Width): Title & Subtitle */}
      <div className="col-span-1 lg:col-span-3 flex flex-col gap-6 items-start">
        <Tag 
          className="font-medium tracking-tight leading-tight select-none"
          style={{
            fontFamily: framerTypography.headings.h72.fontFamily,
            fontWeight: framerTypography.headings.h72.fontWeight,
            fontSize: "clamp(32px, 5vw, 64px)",
            letterSpacing: framerTypography.headings.h72.letterSpacing,
            fontVariationSettings: framerTypography.headings.h72.fontVariationSettings,
            color: framerColors.neutral950.value,
          }}
        >
          {title}
        </Tag>
        {subtitle && (
          <p 
            className="max-w-xl font-medium leading-relaxed select-none"
            style={{
              fontFamily: framerTypography.paragraphs.p18.fontFamily,
              fontSize: "16px",
              fontVariationSettings: framerTypography.paragraphs.p18.fontVariationSettings,
              color: framerColors.neutral500.value,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * MAIN CENTRALIZED SANDBOX HOMEPAGE
 */
export default function CentralizedSandboxPage() {
  const [activeMenuTab, setActiveMenuTab] = useState("hero");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSpecsPanelOpen, setIsSpecsPanelOpen] = useState(false);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    setActiveMenuTab(id);
    setIsSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start antialiased relative overflow-x-hidden"
      style={{ 
        fontFamily: framerTypography.paragraphs.p16.fontFamily,
        backgroundColor: framerColors.white.value,
        color: framerColors.neutral950.value,
      }}
    >
      {/* ---------------- NAVIGATION HEADER ---------------- */}
      <header 
        className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 flex items-center justify-center px-6 md:px-12 lg:px-24"
        style={{
          height: framerSpacing.navHeight,
          backgroundColor: framerEffects.navBackground,
          borderBottom: `1px solid ${framerColors.divider.value}`,
          backdropFilter: `blur(${framerEffects.blurNav})`,
        }}
      >
        <div className="w-full max-w-[1400px] flex items-center justify-between">
          {/* Logo Name */}
          <div 
            onClick={() => handleScrollTo("hero")}
            className="font-mono text-xs font-black tracking-widest cursor-pointer select-none uppercase"
            style={{ color: framerColors.neutral900.value }}
          >
            {framerNav.brandName} <span style={{ color: framerColors.primary.value }}>{framerNav.brandDot}</span> {framerNav.brandSuffix}
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {framerNav.links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="font-mono text-[9px] font-bold uppercase tracking-wider cursor-pointer border-none bg-transparent transition-colors"
                style={{
                  color: activeMenuTab === link.id ? framerColors.primary.value : framerColors.neutral400.value,
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions & Framer Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSpecsPanelOpen(!isSpecsPanelOpen)}
              className="px-3.5 py-2 rounded-full border font-mono text-[9px] font-bold uppercase tracking-wider transition-all hidden sm:block bg-transparent cursor-pointer"
              style={{
                borderColor: framerColors.neutral200.value,
                color: framerColors.neutral900.value,
              }}
            >
              {isSpecsPanelOpen ? framerNav.specsButtonCloseLabel : framerNav.specsButtonLabel}
            </button>
            <PrimaryButton onClick={() => setIsSidebarOpen(true)} />
          </div>
        </div>
      </header>

      {/* ---------------- MOBILE SIDEBAR MENU ---------------- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            {/* Sidebar Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={framerAnimations.springSidebar}
              className="fixed top-0 right-0 bottom-0 w-80 shadow-2xl z-50 p-10 flex flex-col justify-between border-l"
              style={{
                backgroundColor: framerColors.white.value,
                borderColor: framerColors.neutral100.value,
              }}
            >
              <div className="flex flex-col gap-10">
                {/* Header Row */}
                <div className="flex justify-between items-center">
                  <span 
                    className="font-mono text-[9px] font-black tracking-widest uppercase"
                    style={{ color: framerColors.primary.value }}
                  >
                    {framerNav.sidebarTitle}
                  </span>
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-colors cursor-pointer"
                    style={{
                      backgroundColor: framerColors.neutral50.value,
                      borderColor: framerColors.neutral200.value,
                      color: framerColors.neutral950.value,
                    }}
                  >
                    {framerNav.sidebarCloseIcon}
                  </button>
                </div>
                {/* Links */}
                <nav className="flex flex-col gap-6">
                  {framerNav.sidebarLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className="text-left font-medium tracking-tight border-none bg-transparent py-2 text-2xl transition-colors hover:text-[#0048F9] cursor-pointer"
                      style={{ 
                        fontFamily: framerTypography.headings.h48.fontFamily,
                        color: activeMenuTab === link.id ? framerColors.primary.value : framerColors.neutral950.value,
                      }}
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sidebar Footer info */}
              <div className="flex flex-col gap-4 border-t pt-6" style={{ borderColor: framerColors.neutral100.value }}>
                <span className="font-mono text-[8px]" style={{ color: framerColors.neutral400.value }}>{framerNav.sidebarFooterLabel}</span>
                <button
                  onClick={() => {
                    setIsSidebarOpen(false);
                    setIsSpecsPanelOpen(true);
                  }}
                  className="w-full text-center py-3 rounded-xl font-mono text-[9px] font-bold uppercase tracking-widest border-none cursor-pointer"
                  style={{
                    backgroundColor: framerColors.neutral950.value,
                    color: framerColors.white.value,
                  }}
                >
                  {framerNav.sidebarSpecsCtaLabel}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ---------------- TOP DESIGN SPECIFICATIONS POPUP ---------------- */}
      <AnimatePresence>
        {isSpecsPanelOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={framerAnimations.springSection}
            className="fixed top-24 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 max-w-[1400px] mx-auto z-40 rounded-3xl p-6 md:p-10 overflow-y-auto max-h-[80vh] flex flex-col gap-10 border shadow-2xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderColor: "rgba(229, 229, 229, 0.6)",
              backdropFilter: `blur(${framerEffects.blurNav})`,
            }}
          >
            <div className="flex justify-between items-start border-b pb-4" style={{ borderColor: framerColors.neutral100.value }}>
              <div>
                <span className="text-[10px] font-mono tracking-widest font-bold uppercase" style={{ color: framerColors.primary.value }}>
                  {framerSpecsPanel.sectionLabel}
                </span>
                <h3 className="text-lg font-bold mt-1" style={{ color: framerColors.neutral900.value }}>
                  {framerSpecsPanel.panelTitle}
                </h3>
              </div>
              <button
                onClick={() => setIsSpecsPanelOpen(false)}
                className="px-3 py-1.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider transition-colors border-none cursor-pointer"
                style={{
                  backgroundColor: framerColors.neutral100.value,
                  color: framerColors.neutral900.value,
                }}
              >
                {framerSpecsPanel.closeBtnLabel}
              </button>
            </div>

            {/* Sub-grid of Tokens */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Typography Spec Column */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest border-b pb-2" style={{ color: framerColors.primary.value, borderColor: framerColors.neutral100.value }}>
                  {framerSpecsPanel.colTypography}
                </span>
                <div className="space-y-4">
                  {Object.entries(framerTypography.headings).map(([key, style]) => (
                    <div key={key} className="flex flex-col gap-1 border-l-2 pl-3" style={{ borderColor: framerColors.primaryBorder.value }}>
                      <span className="text-[9px] font-mono" style={{ color: framerColors.neutral400.value }}>{style.name} ({style.tag})</span>
                      <span className="text-[12px] font-semibold" style={{ color: framerColors.neutral800.value }}>{style.fontSize} · {style.letterSpacing} · {style.fontWeight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Styles spec Column */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest border-b pb-2" style={{ color: framerColors.primary.value, borderColor: framerColors.neutral100.value }}>
                  {framerSpecsPanel.colColors}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(framerColors).map(([key, style]) => (
                    <div key={key} className="flex items-center gap-2.5 p-2 border rounded-xl" style={{ borderColor: "rgba(229, 229, 229, 0.4)" }}>
                      <div className="w-8 h-8 rounded-lg border" style={{ backgroundColor: style.value, borderColor: framerColors.neutral200.value }} />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold leading-tight" style={{ color: framerColors.neutral700.value }}>{style.name}</span>
                        <span className="font-mono text-[8px] uppercase select-all" style={{ color: framerColors.neutral400.value }}>{style.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spacing & Container Rules Column */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest border-b pb-2" style={{ color: framerColors.primary.value, borderColor: framerColors.neutral100.value }}>
                  {framerSpecsPanel.colSpacing}
                </span>
                <div className="space-y-3.5 text-xs">
                  {framerSpecsPanel.spacingRows.map((row, idx) => (
                    <div key={idx} className="flex justify-between border-b pb-1" style={{ borderColor: framerColors.neutral50.value, color: framerColors.neutral600.value }}>
                      <span className="font-semibold" style={{ color: framerColors.neutral800.value }}>{row.label}</span>
                      <span className="font-mono" style={{ color: framerColors.primary.value }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <FramerSection id="hero" borderBottom={true} hasBackground={true} className="pt-36 pb-20 md:pb-28">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          style={{ gap: framerSpacing.cardPadding }}
          variants={framerAnimations.containerVisible}
          initial="hidden"
          animate="visible"
        >
          {/* Floating springs mini pills */}
          <motion.div variants={framerAnimations.itemVisible} className="flex flex-wrap justify-center gap-3.5 select-none">
            {framerHero.pills.map((pill, idx) => (
              <motion.div
                key={idx}
                className="px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider shadow-sm cursor-default"
                style={{
                  backgroundColor: pill.active ? framerColors.neutral950.value : framerColors.white.value,
                  color: pill.active ? framerColors.white.value : framerColors.neutral500.value,
                  borderColor: pill.active ? framerColors.neutral900.value : framerColors.neutral200.value,
                }}
                whileHover={{ y: -3, scale: 1.03 }}
                transition={framerAnimations.springPill}
              >
                {pill.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Large Header Badge */}
          <motion.div variants={framerAnimations.itemVisible} className="mt-4">
            <span 
              className="font-mono text-[9px] font-extrabold uppercase tracking-[0.3em]"
              style={{ color: framerColors.primary.value }}
            >
              {framerHero.brandLabel}
            </span>
          </motion.div>

          {/* Main Giant Headline */}
          <motion.h1 
            variants={framerAnimations.itemVisible}
            className="font-medium tracking-tighter leading-[1.02] select-none uppercase max-w-4xl"
            style={{
              fontFamily: framerTypography.headings.h96.fontFamily,
              fontWeight: framerTypography.headings.h96.fontWeight,
              fontSize: "clamp(42px, 8vw, 92px)",
              letterSpacing: framerTypography.headings.h96.letterSpacing,
              fontVariationSettings: framerTypography.headings.h96.fontVariationSettings,
              color: framerColors.neutral950.value,
            }}
          >
            {framerHero.headline} <span style={{ color: framerColors.primary.value }}>{framerHero.headlineAccent}</span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p 
            variants={framerAnimations.itemVisible}
            className="max-w-2xl leading-relaxed"
            style={{
              fontFamily: framerTypography.paragraphs.p24.fontFamily,
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: framerTypography.paragraphs.p24.fontWeight,
              fontVariationSettings: framerTypography.paragraphs.p24.fontVariationSettings,
              color: framerColors.neutral500.value,
            }}
          >
            {framerHero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={framerAnimations.itemVisible} className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-6">
            <FramerButtonShowcase variantKey={framerHero.ctaPrimary.variantKey} text={framerHero.ctaPrimary.text} />
            <FramerButtonShowcase variantKey={framerHero.ctaSecondary.variantKey} text={framerHero.ctaSecondary.text} />
          </motion.div>
        </motion.div>
      </FramerSection>

      {/* ---------------- 2. SERVICES SECTION ---------------- */}
      <FramerSection id="servizi" borderBottom={true}>
        <SectionHeader 
          badge={framerSectionHeaders.servizi.badge} 
          title={framerSectionHeaders.servizi.title} 
          subtitle={framerSectionHeaders.servizi.subtitle}
        />
        
        {/* Services List Card Component */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1 hidden lg:block select-none">
            {/* Visual spacer showing spacing detail */}
            <div 
              className="border border-dashed rounded-2xl p-5 flex flex-col gap-2 font-mono text-[8px] w-fit"
              style={{
                borderColor: framerColors.primaryBorder.value,
                backgroundColor: framerColors.primaryGlow.value,
                color: framerColors.primary.value,
              }}
            >
              <span>{framerSpecNotes.servizi.title}</span>
              <span className="font-bold">{framerSpecNotes.servizi.nodeId} {framerSpecNotes.servizi.label}</span>
              {framerSpecNotes.servizi.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 flex flex-col">
            {framerDemoData.services.map((service, idx) => (
              <ServiceCard
                key={idx}
                index={service.index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </FramerSection>

      {/* ---------------- 3. PORTFOLIO SHOWCASE SECTION ---------------- */}
      <FramerSection id="portfolio" borderBottom={true}>
        <SectionHeader 
          badge={framerSectionHeaders.portfolio.badge} 
          title={framerSectionHeaders.portfolio.title} 
          subtitle={framerSectionHeaders.portfolio.subtitle}
        />

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 hidden lg:block select-none">
            <div 
              className="border border-dashed rounded-2xl p-5 flex flex-col gap-2 font-mono text-[8px] w-fit"
              style={{
                borderColor: framerColors.primaryBorder.value,
                backgroundColor: framerColors.primaryGlow.value,
                color: framerColors.primary.value,
              }}
            >
              <span>{framerSpecNotes.portfolio.title}</span>
              <span className="font-bold">{framerSpecNotes.portfolio.nodeId} {framerSpecNotes.portfolio.label}</span>
              {framerSpecNotes.portfolio.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {framerDemoData.projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                imageUrl={project.imageUrl}
                categories={project.categories}
              />
            ))}
          </div>
        </div>
      </FramerSection>

      {/* ---------------- 4. TESTIMONIALS SECTION ---------------- */}
      <FramerSection id="testimonianze" borderBottom={true}>
        <SectionHeader 
          badge={framerSectionHeaders.opinioni.badge} 
          title={framerSectionHeaders.opinioni.title} 
          subtitle={framerSectionHeaders.opinioni.subtitle}
        />

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 hidden lg:block select-none">
            <div 
              className="border border-dashed rounded-2xl p-5 flex flex-col gap-2 font-mono text-[8px] w-fit"
              style={{
                borderColor: framerColors.primaryBorder.value,
                backgroundColor: framerColors.primaryGlow.value,
                color: framerColors.primary.value,
              }}
            >
              <span>{framerSpecNotes.opinioni.title}</span>
              <span className="font-bold">{framerSpecNotes.opinioni.nodeId} {framerSpecNotes.opinioni.label}</span>
              {framerSpecNotes.opinioni.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {framerDemoData.testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </FramerSection>

      {/* ---------------- 5. PRICING SECTION ---------------- */}
      <FramerSection id="prezzi" borderBottom={true}>
        <SectionHeader 
          badge={framerSectionHeaders.prezzi.badge} 
          title={framerSectionHeaders.prezzi.title} 
          subtitle={framerSectionHeaders.prezzi.subtitle}
        />

        {/* Pricing Cards Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
          <div className="lg:col-span-1 hidden lg:block select-none">
            <div 
              className="border border-dashed rounded-2xl p-5 flex flex-col gap-2 font-mono text-[8px] w-fit"
              style={{
                borderColor: framerColors.primaryBorder.value,
                backgroundColor: framerColors.primaryGlow.value,
                color: framerColors.primary.value,
              }}
            >
              <span>{framerSpecNotes.prezzi.title}</span>
              <span className="font-bold">{framerSpecNotes.prezzi.nodeId} {framerSpecNotes.prezzi.label}</span>
              {framerSpecNotes.prezzi.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
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
          </div>
        </div>
      </FramerSection>

      {/* ---------------- 6. FAQ SECTION ---------------- */}
      <FramerSection id="faq" borderBottom={true}>
        <SectionHeader 
          badge={framerSectionHeaders.faq.badge} 
          title={framerSectionHeaders.faq.title} 
          subtitle={framerSectionHeaders.faq.subtitle}
        />

        {/* FAQ Accordions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 hidden lg:block select-none">
            <div 
              className="border border-dashed rounded-2xl p-5 flex flex-col gap-2 font-mono text-[8px] w-fit"
              style={{
                borderColor: framerColors.primaryBorder.value,
                backgroundColor: framerColors.primaryGlow.value,
                color: framerColors.primary.value,
              }}
            >
              <span>{framerSpecNotes.faq.title}</span>
              <span className="font-bold">{framerSpecNotes.faq.nodeId} {framerSpecNotes.faq.label}</span>
              {framerSpecNotes.faq.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 w-full">
            <FaqAccordionList items={framerDemoData.faqs} />
          </div>
        </div>
      </FramerSection>

      {/* ---------------- 7. FOOTER SECTION ---------------- */}
      <footer 
        className="w-full border-t flex justify-center relative overflow-hidden"
        style={{
          paddingTop: framerSpacing.footerPaddingY,
          paddingBottom: framerSpacing.footerPaddingY,
          paddingLeft: framerSpacing.sectionPaddingXSm,
          paddingRight: framerSpacing.sectionPaddingXSm,
          backgroundColor: framerColors.background.value,
          borderColor: framerColors.neutral200.value,
        }}
      >
        <div 
          className="w-full flex flex-col z-10"
          style={{
            maxWidth: framerSpacing.containerMaxWidth,
            gap: "48px",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b pb-12" style={{ borderColor: "rgba(0, 0, 0, 0.15)" }}>
            {/* Left side brand */}
            <div className="flex flex-col gap-3 max-w-md">
              <span className="font-mono text-[10px] font-black tracking-widest uppercase" style={{ color: framerColors.neutral900.value }}>
                {framerFooter.brandName}
              </span>
              <p 
                className="text-xs font-medium leading-relaxed"
                style={{ color: framerColors.neutral500.value }}
              >
                {framerFooter.description}
              </p>
            </div>

            {/* Right side spec toggle */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={() => setIsSpecsPanelOpen(true)}
                className="px-5 py-3 rounded-xl font-mono text-[9px] font-bold uppercase tracking-widest border-none cursor-pointer hover:bg-neutral-800 transition-colors"
                style={{
                  backgroundColor: framerColors.neutral950.value,
                  color: framerColors.white.value,
                }}
              >
                {framerFooter.specsCtaLabel}
              </button>
            </div>
          </div>

          {/* Base credentials row */}
          <div 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-medium font-mono"
            style={{ color: framerColors.neutral400.value }}
          >
            <span>{framerFooter.copyrightPrefix}{new Date().getFullYear()}{framerFooter.copyrightSuffix}</span>
            <span>{framerFooter.techLabel}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
