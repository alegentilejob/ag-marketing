"use client";
import React from 'react';
import RevealText from './RevealText';
import DynamicRevealText from './DynamicRevealText';

interface DisplayHeadingProps {
  /**
   * The text to display. If provided, the heading can wrap dynamically.
   * If useDynamic is true (or by default for H2), this will calculate line breaks dynamically.
   */
  text?: string;
  /**
   * An array of pre-split lines to display. Ideal for structured layouts like the main hero tagline.
   */
  lines?: (string | React.ReactNode)[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  animateOnMount?: boolean;
  size?: 'default' | 'small' | 'large';
}

/**
 * Reusable Display H1 component.
 * Modeled after the homepage main hero tagline:
 * "Sono Alessandro Gentile, growth marketer.
 *  Il mio obiettivo è entrare in una startup..."
 */
export function DisplayH1({
  text,
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
  animateOnMount = true
}: DisplayHeadingProps) {
  // Base classes for Display H1
  const baseLineClass = "text-gray-900 dark:text-white font-medium font-sans text-[clamp(32px,6vw,64px)] tracking-tight leading-tight text-left display-h1";
  const combinedLineClass = `${baseLineClass} ${lineClassName}`.trim();

  // If pre-split lines are provided, use RevealText
  if (lines && lines.length > 0) {
    return (
      <RevealText
        lines={lines}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  // If only a single string text is provided, use DynamicRevealText for responsive automatic wrapping
  if (text) {
    return (
      <DynamicRevealText
        text={text}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  return null;
}

/**
 * Reusable Display H2 component.
 * Modeled after the homepage skill section introductory tagline:
 * "Nel mio percorso ho avuto l'opportunità di poter unire..."
 */
export function DisplayH2({
  text,
  lines,
  className = "",
  lineClassName = "",
  delay = 0.1,
  stagger = 0.12,
  animateOnMount = false
}: DisplayHeadingProps) {
  // Base classes for Display H2 (does not force text color, letting it adapt e.g. on blue background)
  const baseLineClass = "font-medium font-sans text-[clamp(22px,3vw,36px)] tracking-tight leading-tight text-left display-h2";
  const combinedLineClass = `${baseLineClass} ${lineClassName}`.trim();

  // If pre-split lines are provided, use RevealText
  if (lines && lines.length > 0) {
    return (
      <RevealText
        lines={lines}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  // By default, H2 paragraphs wrap dynamically, so DynamicRevealText is preferred if text is provided
  if (text) {
    return (
      <DynamicRevealText
        text={text}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  return null;
}

/**
 * Reusable Standard H2 component.
 * Modeled after the homepage section header:
 * "Ultimi Case Studies"
 */
export function StandardH2({
  text,
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
  animateOnMount = false,
  size = 'default'
}: DisplayHeadingProps) {
  // Base classes for Standard H2 — mirrors "Esperienze Lavorative" section heading in homepage
  const sizeClass = size === 'small' ? 'text-[clamp(24px,3vw,36px)]' : 'text-[clamp(32px,5vw,56px)]';
  const baseLineClass = `text-gray-900 dark:text-white font-medium tracking-tight leading-tight font-maison ${sizeClass} standard-h2`;
  const combinedLineClass = `${baseLineClass} ${lineClassName}`.trim();

  // If pre-split lines are provided, use RevealText
  if (lines && lines.length > 0) {
    return (
      <RevealText
        lines={lines}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  // If only a single string text is provided, use DynamicRevealText for responsive automatic wrapping
  if (text) {
    return (
      <DynamicRevealText
        text={text}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  return null;
}

/**
 * Reusable Standard H1 component.
 * Modeled after the standard page H1 headings but enlarged by +2px.
 */
export function StandardH1({
  text,
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
  animateOnMount = false
}: DisplayHeadingProps) {
  // Base classes for Standard H1 — same as StandardH2 / Esperienze Lavorative homepage but +2px
  const baseLineClass = "text-gray-900 dark:text-white font-medium tracking-tight leading-tight font-maison text-[clamp(34px,5vw,58px)] standard-h1";
  const combinedLineClass = `${baseLineClass} ${lineClassName}`.trim();

  // If pre-split lines are provided, use RevealText
  if (lines && lines.length > 0) {
    return (
      <RevealText
        lines={lines}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  // If only a single string text is provided, use DynamicRevealText for responsive automatic wrapping
  if (text) {
    return (
      <DynamicRevealText
        text={text}
        className={className}
        lineClassName={combinedLineClass}
        delay={delay}
        stagger={stagger}
        animateOnMount={animateOnMount}
      />
    );
  }

  return null;
}
