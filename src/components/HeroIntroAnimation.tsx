"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeroIntroAnimationProps {
  images: string[];
  onComplete: () => void;
}

// Expo ease matching the design system
const EASE_EXPO = [0.15, 0.85, 0.35, 1] as const;

// ── Timing ──────────────────────────────────────────────────────────
const DOT_HOLD_MS       = 500;   // dot sits alone before images appear
const CELL_STAGGER_MS   = 65;    // delay between each cell starting to grow
const CELL_EXPAND_DUR_S = 0.9;   // each cell's grow animation duration (s)
const CELLS             = 8;     // number of image cells

// Whitewash starts this many ms after the expand phase begins
const WHITEWASH_DELAY_S   = 0.3;
// Whitewash fade-in duration (covers the cells while they're growing)
const WHITEWASH_DUR_S     = 1.1;

// Total time for all cells to finish growing
const TOTAL_EXPAND_MS = (CELLS - 1) * CELL_STAGGER_MS + CELL_EXPAND_DUR_S * 1000;

// 'fading' phase starts when whitewash is fully opaque
const FADING_AT_MS = DOT_HOLD_MS + (WHITEWASH_DELAY_S + WHITEWASH_DUR_S) * 1000 + 60;

// onComplete fires after the outer overlay has faded to transparent
const OUTER_FADE_DUR_MS = 450;
const COMPLETE_AT_MS    = FADING_AT_MS + OUTER_FADE_DUR_MS + 30;

// ── Sizes matching the real carousel ─────────────────────────────────
const CELL_W_MOBILE  = 188;
const CELL_H_MOBILE  = 250;
const CELL_W_DESKTOP = 340;
const CELL_H_DESKTOP = 453;
const GAP_MOBILE     = 8;
const GAP_DESKTOP    = 16;

export default function HeroIntroAnimation({ images, onComplete }: HeroIntroAnimationProps) {
  const [phase, setPhase] = useState<'dot' | 'expand' | 'fading'>('dot');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Build cell list cycling through available images
  const cells = Array.from({ length: CELLS }, (_, i) => images[i % images.length] ?? images[0]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('expand'), DOT_HOLD_MS);
    const t2 = setTimeout(() => setPhase('fading'), FADING_AT_MS);
    const t3 = setTimeout(() => onComplete(), COMPLETE_AT_MS);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cellW = isMobile ? CELL_W_MOBILE : CELL_W_DESKTOP;
  const cellH = isMobile ? CELL_H_MOBILE : CELL_H_DESKTOP;
  const gap   = isMobile ? GAP_MOBILE    : GAP_DESKTOP;

  return (
    <AnimatePresence>
      {/* ── Outer overlay — the full-screen white canvas ── */}
      <motion.div
        key="intro-overlay"
        className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'fading' ? 0 : 1 }}
        transition={{ duration: OUTER_FADE_DUR_MS / 1000, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Background fill */}
        <div className="absolute inset-0 bg-white dark:bg-[#111]" />

        {/* ── Seed dot ── */}
        <motion.div
          className="absolute bg-blue-600"
          initial={{ width: 16, height: 16, opacity: 1 }}
          animate={
            phase !== 'dot'
              ? { opacity: 0, scale: 0.4, transition: { duration: 0.2, ease: EASE_EXPO } }
              : { width: 16, height: 16, opacity: 1 }
          }
          style={{ borderRadius: 0 }}
        />

        {/* ── Image cells row ── */}
        <AnimatePresence>
          {phase !== 'dot' && (
            <motion.div
              key="cells-row"
              className="absolute flex items-center"
              style={{
                gap,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {cells.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-900"
                  initial={{ width: 16, height: 16, opacity: 0 }}
                  animate={{ width: cellW, height: cellH, opacity: 1 }}
                  transition={{
                    duration: CELL_EXPAND_DUR_S,
                    delay: idx * (CELL_STAGGER_MS / 1000),
                    ease: EASE_EXPO,
                  }}
                  style={{ borderRadius: 0 }}
                >
                  <Image
                    src={src}
                    alt="Portfolio showcase"
                    fill
                    priority={idx < 4}
                    sizes={`(max-width: 768px) ${CELL_W_MOBILE}px, ${CELL_W_DESKTOP}px`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Whitewash veil — fades in over the growing cells ── */}
        {phase !== 'dot' && (
          <motion.div
            className="absolute inset-0 bg-white dark:bg-[#111] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: WHITEWASH_DUR_S,
              delay: WHITEWASH_DELAY_S,
              ease: [0.25, 0, 0.6, 1],
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
