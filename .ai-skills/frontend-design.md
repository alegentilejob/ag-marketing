# Frontend Design Skill & System Guidelines
This document defines the core visual, typographical, structural, and animation guidelines for building high-end, premium web applications. **Any AI assistant (including Antigravity) must read and follow this document strictly when writing frontend code.**

---

## 1. Design System & Spacing (Fibonacci & 8px Grid)
To avoid the generic "AI-generated layout" look, we apply a strict spacing and layout system based on natural mathematical harmony:
*   **Base Grid**: Use an 8px base grid.
*   **Fibonacci Progression**: For margins, padding, and gap sizes, scale spacings using the Fibonacci sequence scaled by 8px:
    *   `8px` (2xs) / `16px` (xs) / `24px` (sm) / `40px` (md) / `64px` (lg) / `104px` (xl) / `168px` (2xl)
*   **Layout Ratios**:
    *   **Main content vs Sidebar**: Use a golden ratio split of **61.8% / 38.2%** for two-column layouts.
    *   **Hero section height**: Maintain it strictly within viewport bounds (`100vh` minus navigation heights) to avoid premature scrolling ("above-the-fold" integrity).

## 2. Typography & Hierarchy
Typography must be intentional, clean, and highly readable.
*   **Font Pairing**:
    *   *Headers*: Premium modern Sans-Serif or Display fonts (e.g., `Inter`, `Outfit`, `Playfair Display`).
    *   *Body*: Neutral, highly readable Sans-Serif (e.g., `Inter`, `system-ui`).
*   **Size & Line Height (Leading)**:
    *   **Base size**: `16px` (1rem) for body text.
    *   **Line-height**: `1.4–1.5` for long paragraphs, and `1.15–1.25` for headings to prevent loose rendering.
    *   **Line length**: Maintain line lengths between `45` and `75` characters for optimal readability.

## 3. Premium Animations (Framer Motion)
Static interfaces feel lifeless. We use Framer Motion to make pages feel premium and responsive.
*   **Entrance Animations**:
    *   Apply subtle, scroll-triggered fades and translations (e.g., `y: [20, 0]`, `opacity: [0, 1]`, duration `0.6s`, ease: `[0.16, 1, 0.3, 1]` for custom cubic-bezier feel).
*   **Staggered Reveals**:
    *   Use Framer Motion's `staggerChildren` for grids, card lists, and menu items to reveal content sequentially.
*   **Interactive Elements**:
    *   Buttons, cards, and links must have micro-interactions on hover/tap (e.g., `whileHover={{ scale: 1.02 }}` or custom transition curves, never rigid instantly-changing states).

## 4. Component Integration Rules (e.g., 21st.dev / Shadcn UI)
When copy-pasting component code from libraries like **21st.dev** or **shadcn/ui**:
1.  **Refactor to Theme**: Map the component's color classes (like hardcoded hex codes or arbitrary gray values) to the project's Tailwind config or CSS variables (e.g., `bg-primary`, `text-foreground`, `border-border`).
2.  **Add Framer Motion**: Introduce scroll-triggered fades, hover scaling, or layout animations if not already present.
3.  **Real Copy**: Replace all placeholder text, generic lorem-ipsum, and generic icons with contextually relevant, production-ready copy and consistent icons (e.g., using `Lucide React`).

## 5. Avoid the "Generic AI Aesthetic"
*   Never use plain, fully saturated primary colors (e.g., pure blue `#0000ff` or bright green `#00ff00`). Use curated, sophisticated palettes (such as slate/zinc neutrals combined with deep emerald, indigo, or amber accents).
*   Use subtle glassmorphism (backdrop-blur, border opacity, soft shadow) rather than solid thick borders.
*   Do not leave default styled scrollbars; style them to match the page theme.
