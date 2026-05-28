"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DynamicRevealTextProps {
    text: string;
    className?: string;
    lineClassName?: string;
    delay?: number;
    stagger?: number;
    animateOnMount?: boolean;
}

const easeExpoRoot = [0.15, 0.85, 0.35, 1];

export default function DynamicRevealText({
    text,
    className = "",
    lineClassName = "",
    delay = 0,
    stagger = 0.15,
    animateOnMount = false
}: DynamicRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<string[]>([]);
    
    // Split the text into words
    const words = text.split(" ");
    
    useEffect(() => {
        const updateLines = () => {
            if (!containerRef.current) return;
            const wordElements = Array.from(containerRef.current.children) as HTMLElement[];
            
            let currentLineTop = -1;
            let currentLine: string[] = [];
            const newLines: string[] = [];
            
            wordElements.forEach((el, index) => {
                const top = el.offsetTop;
                // Use a threshold of 10px to account for slight subpixel rendering differences
                if (currentLineTop === -1 || Math.abs(currentLineTop - top) < 10) {
                    currentLine.push(words[index]);
                    currentLineTop = top;
                } else {
                    newLines.push(currentLine.join(" "));
                    currentLine = [words[index]];
                    currentLineTop = top;
                }
            });
            
            if (currentLine.length > 0) {
                newLines.push(currentLine.join(" "));
            }
            
            setLines(prev => {
                if (prev.length !== newLines.length) return newLines;
                for (let i = 0; i < prev.length; i++) {
                    if (prev[i] !== newLines[i]) return newLines;
                }
                return prev;
            });
        };

        // Initial compute
        updateLines();
        
        // Setup resize listener
        window.addEventListener('resize', updateLines);
        // Add a small delay for fonts loading
        const timeout = setTimeout(updateLines, 100);
        
        return () => {
            window.removeEventListener('resize', updateLines);
            clearTimeout(timeout);
        };
    }, [text, words]);

    return (
        <div className={`relative ${className}`}>
            {/* Hidden measuring container - uses flex wrap to calculate natural line breaks */}
            <div 
                ref={containerRef} 
                className={`flex flex-wrap opacity-0 absolute inset-0 pointer-events-none z-[-1]`}
                aria-hidden="true"
            >
                {words.map((word, idx) => (
                    <span key={idx} className={`${lineClassName} mr-[0.25em]`}>{word}</span>
                ))}
            </div>

            {/* Actual animated lines */}
            <div className="flex flex-col relative z-10">
                {lines.length > 0 ? (
                    lines.map((line, idx) => (
                        <div 
                            key={`${line}-${idx}`} 
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
                    ))
                ) : (
                    // Fallback to invisible text to maintain layout height while measuring
                    <div className={`opacity-0 ${lineClassName}`}>{text}</div>
                )}
            </div>
        </div>
    );
}
