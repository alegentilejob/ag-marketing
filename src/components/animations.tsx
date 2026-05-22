"use client";

import React from "react";

/**
 * ANIMATIONS DISABLED BY USER REQUEST
 * These components now return children directly without motion effects
 * to ensure maximum visibility and reliability across all pages.
 */

export const RevealText = ({ 
  children, 
  className = "",
  inline = false
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  inline?: boolean
}) => {
  const Comp = inline ? "span" : "div";
  return <Comp className={className}>{children}</Comp>;
};

export const RevealImage = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string 
}) => {
  return <div className={className}>{children}</div>;
};

export const FadeIn = ({ 
  children, 
  className = "",
  as: Component = "div"
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  as?: any
}) => {
  const Comp = Component as any;
  return <Comp className={className}>{children}</Comp>;
};
