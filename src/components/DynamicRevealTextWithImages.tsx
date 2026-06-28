"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface DynamicRevealTextWithImagesProps {
    text: string;
    images: string[];
    wordsPerImage?: number;
    className?: string;
    lineClassName?: string;
    delay?: number;
    stagger?: number;
    animateOnMount?: boolean;
}

const easeExpoRoot = [0.15, 0.85, 0.35, 1] as const;

export default function DynamicRevealTextWithImages({
    text,
    images,
    wordsPerImage = 3,
    className = "",
    lineClassName = "",
    delay = 0,
    stagger = 0.15,
    animateOnMount = false
}: DynamicRevealTextWithImagesProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<any[][]>([]);
    const [items, setItems] = useState<any[]>([]);
    
    useEffect(() => {
        // Process words to interleave images only once on mount to keep random rotations stable
        const words = text.split(" ").filter(w => w.trim() !== "");
        const newItems: any[] = [];
        let imageIndex = 0;
        
        words.forEach((word, index) => {
            newItems.push({ type: 'word', content: word, id: `word-${index}` });
            
            // Insert image after every 'wordsPerImage' words, except after the very last word
            if ((index + 1) % wordsPerImage === 0 && index !== words.length - 1 && images.length > 0) {
                // Alternate rotation between left (negative) and right (positive)
                // random between 15 and 35
                const angle = Math.floor(Math.random() * 20) + 15;
                const rotation = imageIndex % 2 === 0 ? angle : -angle;
                newItems.push({ 
                    type: 'image', 
                    content: images[imageIndex % images.length], 
                    rotation, 
                    id: `img-${imageIndex}` 
                });
                imageIndex++;
            }
        });
        setItems(newItems);
    }, [text, images, wordsPerImage]);

    useEffect(() => {
        if (items.length === 0) return;
        
        const updateLines = () => {
            if (!containerRef.current) return;
            const elements = Array.from(containerRef.current.children) as HTMLElement[];
            
            let currentLineTop = -1;
            let currentLine: any[] = [];
            const newLines: any[][] = [];
            
            elements.forEach((el, index) => {
                const top = el.offsetTop;
                // Use a larger threshold based on font size to handle different heights
                if (currentLineTop === -1 || Math.abs(currentLineTop - top) < 30) {
                    currentLine.push(items[index]);
                    currentLineTop = top;
                } else {
                    newLines.push([...currentLine]);
                    currentLine = [items[index]];
                    currentLineTop = top;
                }
            });
            
            if (currentLine.length > 0) {
                newLines.push(currentLine);
            }
            
            setLines(newLines);
        };

        // Initial compute
        updateLines();
        
        window.addEventListener('resize', updateLines);
        // Small delays to ensure fonts are loaded and layout is stable
        const timeout1 = setTimeout(updateLines, 100);
        const timeout2 = setTimeout(updateLines, 500);
        
        return () => {
            window.removeEventListener('resize', updateLines);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [items]);

    return (
        <div className={`relative w-full ${className}`}>
            {/* Hidden measuring container */}
            <div 
                ref={containerRef} 
                className={`flex flex-wrap justify-center items-start opacity-0 absolute inset-0 pointer-events-none z-[-1] w-full`}
                aria-hidden="true"
            >
                {items.map((item, idx) => {
                    if (item.type === 'word') {
                        return <span key={idx} className={`${lineClassName} mx-[0.25em]`}>{item.content}</span>;
                    } else {
                        // Dummy box for image measuring - square aspect ratio matching font cap-height roughly
                        return <div key={idx} className={`inline-block mx-[0.6em] ${lineClassName}`} style={{ height: '3.6em', width: '3.6em', fontSize: 'inherit' }}></div>;
                    }
                })}
            </div>

            {/* Actual animated lines */}
            <div className="flex flex-col relative z-10 w-full items-center text-center">
                {lines.length > 0 ? (
                    lines.map((line, lineIdx) => (
                        <div 
                            key={`line-${lineIdx}`} 
                            className="flex items-center justify-center py-[0.4em] -my-[0.1em] whitespace-nowrap"
                        >
                            {line.map((item, itemIdx) => {
                                if (item.type === 'word') {
                                    return (
                                        <div key={item.id} className="overflow-hidden relative mx-[0.25em]">
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={animateOnMount ? { y: 0 } : undefined}
                                                whileInView={!animateOnMount ? { y: 0 } : undefined}
                                                viewport={!animateOnMount ? { once: true, margin: "-10% 0px" } : undefined}
                                                transition={{
                                                    duration: 0.85,
                                                    ease: easeExpoRoot,
                                                    delay: delay + lineIdx * stagger + itemIdx * 0.02
                                                }}
                                                className={`block origin-bottom ${lineClassName}`}
                                            >
                                                {item.content}
                                            </motion.span>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={item.id} className="relative mx-[0.6em] inline-flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0, rotate: 0 }}
                                                animate={animateOnMount ? { scale: 1, rotate: item.rotation } : undefined}
                                                whileInView={!animateOnMount ? { scale: 1, rotate: item.rotation } : undefined}
                                                viewport={!animateOnMount ? { once: true, margin: "-10% 0px" } : undefined}
                                                transition={{
                                                    duration: 0.85,
                                                    ease: easeExpoRoot,
                                                    delay: delay + lineIdx * stagger + itemIdx * 0.02
                                                }}
                                                className={`relative inline-block overflow-hidden ${lineClassName}`}
                                                style={{ 
                                                    height: '3.6em', 
                                                    width: '3.6em', 
                                                    fontSize: 'inherit',
                                                    transformOrigin: 'center'
                                                }}
                                            >
                                                <Image 
                                                    src={item.content} 
                                                    alt="inline reveal"
                                                    fill
                                                    priority
                                                    sizes="(max-width: 768px) 100px, 250px"
                                                    className="object-cover"
                                                />
                                            </motion.div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    ))
                ) : (
                    // Fallback to invisible text to maintain layout height while measuring
                    <div className={`opacity-0 flex flex-wrap justify-center ${lineClassName}`}>
                        {text.split(" ").map((w, i) => (
                            <span key={i} className="mr-[0.25em]">{w}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
