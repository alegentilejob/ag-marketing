"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { framerButtons, framerAnimations, framerColors } from '@/styles/framer-tokens';

/**
 * Arrow Icon Component
 */
function ArrowIcon() {
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
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

/**
 * Generic Framer Button Component
 */
function FramerButton({ variantKey, text }: { variantKey: keyof typeof framerButtons; text: string }) {
  const spec = framerButtons[variantKey] as any;
  const spring = framerAnimations.springButton;

  return (
    <motion.button
      className="group flex items-center justify-center select-none cursor-pointer border-none focus:outline-none shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{
        borderRadius: spec.borderRadius,
        padding: spec.padding,
        gap: spec.gap,
        backgroundColor: spec.backgroundColor,
        height: spec.height || "57px",
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
      <span
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
        {text}
      </span>
      <span
        className="transition-colors duration-300"
        variants={{
          visible: { color: spec.textColor },
          hover: { color: spec.hoverTextColor || spec.textColor }
        }}
        transition={spring}
      >
        <ArrowIcon />
      </span>
    </motion.button>
  );
}

export default function CentralizedSandboxPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] flex flex-col items-center justify-center p-6 transition-colors duration-300">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-2 leading-none">
          Framer Buttons <span className="text-[#2B13E2]">.</span>
        </h1>
        <p className="text-sm font-mono uppercase tracking-widest text-neutral-400">
          Sincronizzati al 100% da Framer MCP
        </p>
      </div>

      {/* Button Row Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-10 bg-white dark:bg-[#111] border border-neutral-200/50 dark:border-neutral-800 shadow-xl max-w-4xl w-full">
        {/* 1. Primary Button */}
        <div className="flex flex-col items-center gap-2">
          <FramerButton variantKey="primarySmall" text="Contattami" />
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mt-2">Primary</span>
        </div>

        {/* 2. Secondary Button */}
        <div className="flex flex-col items-center gap-2">
          <FramerButton variantKey="whiteSmall" text="Secondario" />
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mt-2">Secondary</span>
        </div>

        {/* 3. Third Button */}
        <div className="flex flex-col items-center gap-2">
          <FramerButton variantKey="blackSmall" text="Terzo Piano" />
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mt-2">Third</span>
        </div>
      </div>
    </div>
  );
}
