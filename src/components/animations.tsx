"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Custom easing function resembling square root
const sqrtEase = [0.1, 0.7, 0.2, 1] as const; // Fast start, very slow tail

export const RevealText = ({ 
  children, 
  delay = 0, 
  className = "",
  inline = false
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  inline?: boolean
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  
  const Comp = inline ? "span" : "div";

  return (
    <Comp ref={ref} className={`overflow-hidden block ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 1, delay, ease: sqrtEase }}
        className={inline ? "inline-block inline" : ""}
      >
        {children}
      </motion.div>
    </Comp>
  );
};

export const RevealImage = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={isInView ? { clipPath: "inset(0 0 0% 0)" } : { clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: 1.2, delay, ease: sqrtEase }}
        className="w-full h-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeIn = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
