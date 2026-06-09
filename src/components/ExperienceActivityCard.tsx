"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceActivityCardProps {
  index: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const transitionSpring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 26
};

export default function ExperienceActivityCard({ title, description, isLast = false }: ExperienceActivityCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group w-full bg-transparent hover:bg-neutral-950 dark:hover:bg-white text-neutral-900 dark:text-neutral-100 hover:text-white dark:hover:text-black cursor-pointer select-none p-6 md:p-8 flex flex-col justify-center gap-2 min-h-[88px] transition-all duration-300 relative overflow-hidden ${
        !isLast ? "border-b border-gray-200 dark:border-zinc-850" : ""
      }`}
      style={{ borderRadius: "0px" }} // Explicitly no rounded corners
    >
      {/* Main Content Container - Centered vertically, expands on the Left on hover */}
      <div className="flex flex-col gap-3 flex-1 min-w-0 relative z-10 justify-center">
        {/* Title - Stable typographic styling with hover inversion */}
        <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-white dark:group-hover:text-black leading-none whitespace-normal break-words m-0 select-none transition-colors duration-300">
          {title}
        </h3>

        {/* Collapsible Description Panel - Appears dynamically on the LEFT on hover */}
        <AnimatePresence initial={false}>
          {isHovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: "auto",
                transition: { height: transitionSpring, opacity: { duration: 0.25 } }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { height: transitionSpring, opacity: { duration: 0.15 } }
              }}
              className="text-sm md:text-base font-light text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-200 dark:group-hover:text-neutral-800 leading-relaxed m-0 select-none transition-colors duration-300"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
