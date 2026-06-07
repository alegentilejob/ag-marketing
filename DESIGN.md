---
name: Alessandro Gentile Portfolio
description: Restrained Editorial Portfolio design system for Growth Marketing
colors:
  primary: "#2B13E2"
  primary-deep: "#1D0CA8"
  neutral-bg: "#ffffff"
  neutral-fg: "#171717"
  neutral-muted: "#6b7280"
  border: "#e5e7eb"
typography:
  display:
    fontFamily: "var(--font-display), 'Google Sans Flex', sans-serif"
    fontSize: "clamp(32px, 6vw, 64px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-primary), 'Google Sans Flex', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "-0.01em"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
---

# Design System: Alessandro Gentile Portfolio

## 1. Overview

**Creative North Star: "The Restrained Editorial"**

This system represents a high-end editorial and typographic visual language. It prioritizes generous whitespace (using Fibonacci intervals), sharp geometric divisions, and absolute clarity. The design centers on the growth marketing identity—blending analytical precision with elegant, print-like layout structures.

**Key Characteristics:**
*   **Grid Division**: Asymmetric 61.8% / 38.2% splits using the Golden Ratio for two-column sections.
*   **Flat & Geometric**: Complete removal of rounded cards and decorative drop-shadows. Corners are kept strictly square (`0px`) to convey structural strength.
*   **Contrast Density**: Deep black ink, pure white canvas, and a single institutional Ultramarine blue accent color.
*   **Whitespace is Content**: Whitespace is calculated mathematically and used to frame elements, preventing cognitive overload and visual slop.

## 2. Colors

The color system uses high-contrast, functional colors that emphasize typography and readability.

### Primary
*   **Digital Ultramarine** (#2B13E2): The core institutional brand accent. Reserved for active interactive triggers, primary buttons, and highlight states. Used on ≤10% of any given screen.

### Neutral
*   **Silent Canvas** (#ffffff): The main layout background. Provides a clean, paper-like background.
*   **Deep Ink** (#171717): The main typography color. Ensures excellent contrast and readability.
*   **Muted Ink** (#6b7280): Used for secondary labels, periods, and subtitles.
*   **Border Gray** (#e5e7eb): Subtle lines defining layout grids and divisions.

### Named Rules
**The Rarity Doctrine.** The accent color (Digital Ultramarine) must not be used decoratively. It is reserved for primary CTAs and interactive indicators. If a page feels too blue, remove color from secondary elements.

## 3. Typography

**Display Font:** 'Google Sans Flex' (fallback: sans-serif)
**Body Font:** 'Google Sans Flex' (fallback: sans-serif)
**Structural Font:** 'Maison Neue' (fallback: sans-serif)

### Hierarchy
*   **Display** (500, `clamp(32px, 6vw, 64px)`, 1.15): Used for main page/hero headings. Dominant element on the canvas.
*   **Headline** (500, `clamp(22px, 3vw, 36px)`, 1.25): Used for primary subheaders and skill tags.
*   **Title** (500, `clamp(20px, 2.5vw, 28px)`, 1.3): Used for card titles and section titles.
*   **Body** (400, `16px` / `18px`, 1.7): Used for all text paragraphs. Line length is capped at `65-75ch` to ensure optimal readability.
*   **Label** (700, `12px`, letter-spacing: `0.08em`, uppercase): Used for tags, navigation elements, and buttons.

### Named Rules
**The Line Length Guard.** Paragraph text must never span full-screen on desktop. Wrap paragraphs in width-constrained columns (`max-w-[65ch]`) to keep line length within optimal readability bounds.

## 4. Elevation

Depth is conveyed through layout composition, borders, and flat background blocks rather than shadows.

**The Flat-By-Default Rule.** Shadows are completely prohibited on cards, buttons, and sections. Layout division is handled via 1px borders (#e5e7eb) and tonal contrast.

## 5. Components

### Buttons
*   **Shape:** Full pill-shaped (`rounded-full` / `9999px`) for high contrast against square layout cards.
*   **Primary:** Digital Ultramarine (#2B13E2) background, white text. Padding is `12px 32px` (`py-3 px-8`), height is `min-h-[48px]`.
*   **States:** Interactive scale transitions on hover and tap via Framer Motion.

### Cards / Containers
*   **Corner Style:** Sharp square corners (`rounded-none` / `0px`).
*   **Borders:** 1px border (#e5e7eb) with no shadow.
*   **Hover:** Inside images scale up/down within container bounds, but card containers remain structurally static.

### Navigation
*   **Style:** Minimalist text links in Maison Neue font.
*   **States:** Underline animations revealing on hover from left to right using cubic-bezier curves.

## 6. Do's and Don'ts

### Do:
*   **Do** constraint paragraphs to `max-w-prose` or `max-w-[65ch]`.
*   **Do** use relative Fibonacci spacing (`8px`, `16px`, `24px`, `40px`, `64px`, `104px`, `168px`) for layout margins.
*   **Do** keep card borders at exactly `1px solid` with no drop shadows.

### Don't:
*   **Don't** use border-left or border-right greater than 1px as a colored accent stripe on cards.
*   **Don't** use neon background gradients or text gradients.
*   **Don't** exceed 64px (`6rem`) for display header sizes.
*   **Don't** use rounded corners (`border-radius` > 0px) on experience cards or project images.
*   **Don't** include tiny uppercase tracked eyebrows above sections on every page.
