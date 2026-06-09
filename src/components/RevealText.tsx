"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
    lines: (string | React.ReactNode)[];
    className?: string;
    lineClassName?: string;
    delay?: number;
    stagger?: number;
    animateOnMount?: boolean;
}

const easeExpoRoot = [0.15, 0.85, 0.35, 1] as const;

export default function RevealText({
    lines,
    className = "",
    lineClassName = "",
    delay = 0,
    stagger = 0.15,
    animateOnMount = false
}: RevealTextProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            {lines.map((line, idx) => (
                <div 
                    key={idx} 
                    className="overflow-hidden block relative py-[0.05em] -my-[0.05em]"
                >
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={animateOnMount ? { y: 0 } : undefined}
                        whileInView={!animateOnMount ? { y: 0 } : undefined}
                        viewport={!animateOnMount ? { once: true, margin: "-10% 0px" } : undefined}
                        transition={{
                            duration: 0.85,
                            ease: easeExpoRoot,
                            delay: delay + idx * stagger
                        }}
                        className={`block origin-bottom ${lineClassName}`}
                    >
                        {line}
                    </motion.span>
                </div>
            ))}
        </div>
    );
}
