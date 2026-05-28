"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { framerColors, framerTypography } from '@/styles/framer-tokens';
import { StandardH2 } from '@/components/Typography';

// Standard Framer-like Spring Animations
const transitionSpring = {
  type: "spring",
  stiffness: 280,
  damping: 26
};

/**
 * 1. SERVICE CARD (nodeId: arC6CNm2o)
 * Horizontal accordion-style list item that highlights and expands its description on hover.
 */
interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
}

export function ServiceCard({ index, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full border-b border-neutral-100 dark:border-neutral-800 cursor-pointer select-none relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? framerColors.primary.value : "rgba(255, 255, 255, 0)",
        borderRadius: "0px",
        padding: isHovered ? "28px 24px" : "24px 24px",
      }}
      transition={transitionSpring}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10 min-h-[56px]">
        
        {/* Left Side: Service Title Only */}
        <div className="flex items-center justify-center flex-1 min-w-0 text-center">
          <motion.h3
            className="font-medium whitespace-normal break-words text-neutral-900 dark:text-white transition-colors duration-200 text-center mx-auto"
            style={{
              fontFamily: framerTypography.headings.h48.fontFamily,
              fontWeight: framerTypography.headings.h48.fontWeight,
              fontSize: "clamp(24px, 4vw, 36px)",
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 32',
            }}
            animate={{
              color: isHovered ? framerColors.white.value : undefined
            }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        </div>

        {/* Middle: Expanding Description Block - Vertically Centered */}
        <div className="flex-[1.5] max-w-xl flex items-center">
          <motion.p
            className="text-sm font-medium leading-relaxed text-neutral-600 dark:text-neutral-300 transition-colors duration-200 my-auto text-center md:text-left"
            style={{
              fontFamily: framerTypography.paragraphs.p16.fontFamily,
              fontVariationSettings: '"opsz" 14',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
              color: isHovered ? "rgba(255, 255, 255, 0.9)" : undefined
            }}
            transition={transitionSpring}
          >
            {description}
          </motion.p>
        </div>

        {/* Right Side: Number Index & Animated SVG Action Circle - Aligned on the Right */}
        <div className="flex items-center gap-6 shrink-0 self-end md:self-center">
          {/* Index Number Right-Aligned */}
          <motion.span
            className="font-mono text-lg font-bold shrink-0 text-neutral-400 dark:text-neutral-500 transition-colors duration-200"
            style={{ fontFamily: '"Onest", sans-serif' }}
            animate={{
              color: isHovered ? framerColors.white.value : undefined
            }}
            transition={{ duration: 0.2 }}
          >
            {index}
          </motion.span>
        </div>

      </div>
    </motion.div>
  );
}

/**
 * 2. PROJECT CARD (nodeId: GJDYW1pCq)
 * Vertical card featuring a premium image scale parallax effect & slide-up action button on hover.
 */
interface ProjectCardProps {
  title: string;
  imageUrl: string;
  categories: string[];
}

export function ProjectCard({ title, imageUrl, categories }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-5 w-full cursor-pointer select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* 3D-like Image Container */}
      <div 
        className="w-full relative rounded-2xl overflow-hidden aspect-[1.48] bg-neutral-100 shadow-sm"
        style={{ height: "clamp(300px, 40vw, 560px)" }}
      >
        {/* Parallax / Zoom Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          animate={{
            scale: isHovered ? 1.06 : 1.0,
            y: isHovered ? -10 : 0
          }}
          transition={transitionSpring}
        />

        {/* Dark overlay on hover for extra premium contrast */}
        <motion.div 
          className="absolute inset-0 bg-black/5 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Slide-in Arrow Icon Wrapper */}
        <motion.div
          className="absolute right-6 bg-white rounded-full p-4 shadow-xl z-10 flex items-center justify-center"
          initial={{ opacity: 0, bottom: -60 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            bottom: isHovered ? 24 : -60,
          }}
          transition={transitionSpring}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke={framerColors.primary.value}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Meta Content row below image */}
      <div className="flex items-center justify-between gap-4 px-1">
        <h3
          className="font-medium text-neutral-900 leading-tight whitespace-normal break-words"
          style={{
            fontFamily: framerTypography.headings.h32.fontFamily,
            fontWeight: framerTypography.headings.h32.fontWeight,
            fontSize: "clamp(20px, 3vw, 32px)",
            letterSpacing: "-0.02em",
            fontVariationSettings: '"opsz" 32',
          }}
        >
          {title}
        </h3>

        {/* Category Tags */}
        <div className="flex items-center gap-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 tracking-wide uppercase border border-neutral-200/40"
              style={{ fontSize: "10px" }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * 3. TESTIMONIAL CARD (nodeId: XrwYu3XaF)
 * Elegant card displaying structured client feedback with clean dark headlines and quote details.
 */
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export function TestimonialCard({ quote, name, role, avatarUrl }: TestimonialCardProps) {
  return (
    <div
      className="w-full flex flex-col justify-between p-10 border border-neutral-200/30 rounded-2xl overflow-hidden min-h-[500px] md:min-h-[600px] hover:shadow-lg transition-all duration-500"
      style={{ backgroundColor: framerColors.secondary.value }}
    >
      {/* Quote Icon */}
      <div className="flex justify-end w-full">
        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
          <path
            d="M12.3033 20.973C16.98 15.903 24.0567 13.333 33.3333 13.333H36.6667V22.7297L33.9867 23.2663C29.42 24.1797 26.2433 25.9763 24.5433 28.613C23.656 30.0333 23.1529 31.6598 23.0833 33.333H33.3333C34.2174 33.333 35.0652 33.6842 35.6903 34.3093C36.3155 34.9344 36.6667 35.7823 36.6667 36.6663V59.9997C36.6667 63.6763 33.6767 66.6663 30 66.6663H9.99998C9.11593 66.6663 8.26808 66.3151 7.64296 65.69C7.01784 65.0649 6.66665 64.2171 6.66665 63.333V46.6663L6.67665 36.9363C6.64665 36.5663 6.01332 27.7997 12.3033 20.973ZM66.6667 66.6663H46.6667C45.7826 66.6663 44.9347 66.3151 44.3096 65.69C43.6845 65.0649 43.3333 64.2171 43.3333 63.333V46.6663L43.3433 36.9363C43.3133 36.5663 42.68 27.7997 48.97 20.973C53.6467 15.903 60.7233 13.333 70 13.333H73.3333V22.7297L70.6533 23.2663C66.0867 24.1797 62.91 25.9763 61.21 28.613C60.3227 30.0333 59.8196 31.6598 59.75 33.333H70C70.884 33.333 71.7319 33.6842 72.357 34.3093C72.9821 34.9344 73.3333 35.7823 73.3333 36.6663V59.9997C73.3333 63.6763 70.3433 66.6663 66.6667 66.6663Z"
            fill={framerColors.primary.value}
          />
        </svg>
      </div>

      {/* Testimonial Quote Statement */}
      <p
        className="font-medium text-neutral-900 my-8 leading-tight tracking-tight select-none"
        style={{
          fontFamily: framerTypography.headings.h48.fontFamily,
          fontWeight: framerTypography.headings.h48.fontWeight,
          fontSize: "clamp(26px, 4vw, 40px)",
          letterSpacing: "-0.04em",
          fontVariationSettings: '"opsz" 32',
        }}
      >
        “{quote}”
      </p>

      {/* Author Info & Profile Avatar */}
      <div className="flex items-end justify-between gap-6 border-t border-neutral-200/50 pt-6">
        <div className="flex flex-col gap-1.5">
          <span
            className="font-medium text-neutral-950"
            style={{
              fontFamily: framerTypography.paragraphs.p24.fontFamily,
              fontWeight: 500,
              fontSize: "20px",
              letterSpacing: "-0.03em",
              fontVariationSettings: '"opsz" 14',
            }}
          >
            {name}
          </span>
          <span
            className="text-neutral-500 font-medium"
            style={{
              fontFamily: framerTypography.paragraphs.p20.fontFamily,
              fontWeight: 500,
              fontSize: "15px",
              letterSpacing: "-0.01em",
              fontVariationSettings: '"opsz" 14',
            }}
          >
            {role}
          </span>
        </div>

        {/* Circular Avatar */}
        <div
          className="w-16 h-16 rounded-full bg-cover bg-center border border-neutral-300/40 shadow-sm shrink-0"
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
      </div>
    </div>
  );
}

/**
 * 4. PRICING CARD (nodeId: lQuFCcWjD)
 * Structured modular pricing component offering detailed lists, separator and action button.
 */
interface PricingCardProps {
  planTitle: string;
  price: string;
  priceUnit?: string;
  description: string;
  features: string[];
  subFeatures: string[];
  actionText: string;
  popular?: boolean;
}

export function PricingCard({
  planTitle,
  price,
  priceUnit = "/month",
  description,
  features,
  subFeatures,
  actionText,
  popular = false
}: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full flex flex-col justify-between p-9 rounded-[24px] border transition-all duration-500 relative ${
        popular 
          ? "bg-neutral-950 text-white border-neutral-850 shadow-2xl scale-[1.02] z-10" 
          : "bg-white text-neutral-950 border-neutral-200/60 shadow-md hover:shadow-xl"
      }`}
    >
      {/* Decorative Glow for Popular Plan */}
      {popular && (
        <div className="absolute -inset-px rounded-[24px] bg-gradient-to-tr from-[#0048F9]/20 to-transparent opacity-50 blur-[8px] pointer-events-none -z-10" />
      )}

      {/* Header Info */}
      <div className="flex flex-col gap-6">
        
        {/* Tier Title and Tag Badge */}
        <div className="flex items-center justify-between">
          <span
            className={`font-semibold text-sm uppercase tracking-wider ${
              popular ? "text-[#0048F9]" : "text-neutral-400"
            }`}
          >
            {planTitle}
          </span>
          {popular && (
            <span className="px-3 py-1 text-[9px] font-bold bg-[#0048F9] text-white rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          )}
        </div>

        {/* Plan Pricing */}
        <div className="flex items-baseline gap-2">
          <span 
            className="font-bold tracking-tighter"
            style={{ 
              fontSize: "clamp(36px, 5vw, 54px)", 
              fontFamily: '"Onest", sans-serif' 
            }}
          >
            {price}
          </span>
          <span 
            className={`font-medium ${popular ? "text-neutral-400" : "text-neutral-500"}`}
            style={{ fontSize: "16px" }}
          >
            {priceUnit}
          </span>
        </div>

        {/* Text Description */}
        <p 
          className={`text-sm leading-relaxed ${popular ? "text-neutral-300" : "text-neutral-600"}`}
          style={{ fontFamily: framerTypography.paragraphs.p16.fontFamily }}
        >
          {description}
        </p>

        {/* Divider */}
        <div className={`h-[1px] w-full my-2 ${popular ? "bg-neutral-800" : "bg-neutral-100"}`} />

        {/* Features List */}
        <div className="flex flex-col gap-4">
          <span 
            className={`text-xs font-semibold uppercase tracking-wider ${
              popular ? "text-neutral-400" : "text-neutral-400"
            }`}
          >
            Features Included:
          </span>
          
          <ul className="flex flex-col gap-3.5">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`rounded-full p-1 shrink-0 ${popular ? "bg-[#0048F9]/10 text-[#0048F9]" : "bg-neutral-100 text-neutral-800"}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm font-medium leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sub features sub-list */}
        {subFeatures && subFeatures.length > 0 && (
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-dashed border-neutral-250/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Includes:</span>
            <div className="flex flex-wrap gap-2">
              {subFeatures.map((item, i) => (
                <span 
                  key={i} 
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${
                    popular 
                      ? "bg-neutral-900 text-neutral-400 border border-neutral-800" 
                      : "bg-neutral-50 text-neutral-500 border border-neutral-100"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Button */}
      <motion.button
        className="w-full flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer select-none rounded-xl mt-10 py-4.5 px-6 border focus:outline-none"
        animate={{
          backgroundColor: popular 
            ? (isHovered ? "rgb(255, 255, 255)" : "rgb(0, 72, 249)")
            : (isHovered ? "rgb(0, 72, 249)" : "rgb(0, 0, 0)"),
          borderColor: popular
            ? (isHovered ? "rgb(255, 255, 255)" : "rgb(0, 72, 249)")
            : (isHovered ? "rgb(0, 72, 249)" : "rgb(0, 0, 0)"),
          color: popular 
            ? (isHovered ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)")
            : "rgb(255, 255, 255)",
        }}
        whileTap={{ scale: 0.985 }}
        transition={transitionSpring}
      >
        <span>{actionText}</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300">
          <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </div>
  );
}

/**
 * 5. FAQ ACCORDION ITEM (nodeId: RFmnU3YMS)
 * Interactive item with toggling description height and rotating plus icon.
 */
interface FaqAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({ question, answer, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <div className="w-full border-b border-neutral-100/80">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-8 text-left cursor-pointer focus:outline-none select-none group"
      >
        <span
          className="font-medium text-neutral-900 group-hover:text-[#0048F9] transition-colors duration-300"
          style={{
            fontFamily: framerTypography.paragraphs.p20.fontFamily,
            fontWeight: 500,
            fontSize: "clamp(16px, 3vw, 20px)",
            letterSpacing: "-0.01em",
            fontVariationSettings: '"opsz" 14',
          }}
        >
          {question}
        </span>

        {/* Plus / Close Icon Wrapper */}
        <motion.div
          className="w-10 h-10 rounded-full border border-neutral-200/60 bg-neutral-50 flex items-center justify-center shrink-0"
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "rgb(0, 72, 249)" : "rgb(250, 250, 250)",
            borderColor: isOpen ? "rgb(0, 72, 249)" : "rgba(0, 0, 0, 0.1)",
          }}
          transition={transitionSpring}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 1V13M1 7H13"
              stroke={isOpen ? "#ffffff" : "#000000"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      {/* Accordion Collapsible Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { height: transitionSpring, opacity: { duration: 0.25 } }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { height: transitionSpring, opacity: { duration: 0.15 } }
            }}
            className="overflow-hidden"
          >
            <p
              className="text-neutral-500 pb-8 leading-relaxed font-medium"
              style={{
                fontFamily: framerTypography.paragraphs.p18.fontFamily,
                fontWeight: 500,
                fontSize: "16px",
                letterSpacing: "-0.01em",
                fontVariationSettings: '"opsz" 14',
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * FAQ ACCORDION LIST (nodeId: hBptkB8kb)
 * Lists multiple FaqAccordionItem components with dynamic single-expansion tracking.
 */
interface FaqAccordionListProps {
  items: Array<{ question: string; answer: string }>;
}

export function FaqAccordionList({ items }: FaqAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like Framer mockup

  return (
    <div className="w-full flex flex-col">
      {items.map((item, idx) => (
        <FaqAccordionItem
          key={idx}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}

/**
 * 6. ACTIVITIES SECTION (Full screen width, blue background, grid layout)
 * Left column displays list of activities. Hovering an activity shows its details in the right column.
 */
interface ActivityItem {
  title: string;
  description: string;
}

interface ActivitiesSectionProps {
  activities: ActivityItem[];
  title?: string;
  description?: React.ReactNode;
}

export function ActivitiesSection({ activities, title, description }: ActivitiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!activities || activities.length === 0) return null;

  return (
    <div className="not-prose w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0048F9] text-white py-20 md:py-28 px-6 md:px-12 lg:px-24 select-none overflow-hidden my-16">
      <div className="max-w-[1400px] mx-auto mb-16 md:mb-24">
        {title && (
          <StandardH2
            text={title}
            className="mb-6"
            lineClassName="!text-white"
          />
        )}
        {description && (
          <div className="text-blue-50 font-light leading-relaxed text-lg max-w-3xl">
            {description}
          </div>
        )}
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: List of activities stacked */}
        <div className="flex flex-col border-t border-white/20">
          {activities.map((act, index) => {
            const isHovered = activeIndex === index;
            const numberStr = `0${index + 1}`;
            return (
              <div
                key={index}
                className="w-full flex items-center justify-between py-6 md:py-8 border-b border-white/20 cursor-pointer transition-all duration-300 relative"
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "transparent",
                  paddingLeft: isHovered ? "20px" : "0px",
                  paddingRight: isHovered ? "20px" : "0px",
                }}
              >
                <div className="flex items-center gap-6 md:gap-10 min-w-0">
                  <span
                    className={`font-mono text-sm md:text-base tracking-wider transition-opacity duration-300 shrink-0 leading-none self-center ${
                      isHovered ? "opacity-100 font-bold" : "opacity-50"
                    }`}
                  >
                    {numberStr}
                  </span>
                  <h3
                    className={`text-lg md:text-2xl lg:text-3xl font-medium tracking-tight transition-all duration-300 truncate whitespace-normal break-words leading-none self-center ${
                      isHovered ? "text-white translate-x-2" : "text-white/60"
                    }`}
                    style={{
                      fontFamily: framerTypography.headings.h48.fontFamily,
                    }}
                  >
                    {act.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Activity Detail Panel (Description text only) */}
        <div className="flex flex-col justify-center min-h-[250px] lg:sticky lg:top-32 self-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-white leading-relaxed font-normal text-lg md:text-xl lg:text-2xl max-w-xl"
              style={{
                fontFamily: framerTypography.paragraphs.p20.fontFamily,
                color: "#ffffff"
              }}
              dangerouslySetInnerHTML={{ __html: activities[activeIndex]?.description }}
            />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
