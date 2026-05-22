/**
 * ============================================================
 * FRAMER DESIGN SYSTEM TOKENS — CENTRALIZZATO COMPLETO
 * ============================================================
 * Ogni valore visivo, di spaziatura, animazione e layout
 * è definito qui con un nome semantico. Nulla è hardcodato
 * nella pagina. Tutte le modifiche avvengono solo in questo file.
 *
 * Fonte: Live Framer MCP Server (ag-marketing canvas)
 * ============================================================
 */

// ─────────────────────────────────────────────
// 1. COLORI
// ─────────────────────────────────────────────
export const framerColors = {
  background: {
    name: "Background",
    value: "rgb(243, 243, 241)",
    cssVar: "--framer-background",
  },
  black: {
    name: "Black",
    value: "rgb(0, 0, 0)",
    cssVar: "--framer-black",
  },
  primary: {
    name: "Primary",
    value: "rgb(0, 72, 249)",
    cssVar: "--framer-primary",
  },
  primaryHover: {
    name: "Primary Hover",
    value: "rgb(0, 58, 200)",
    cssVar: "--framer-primary-hover",
  },
  primarySubtle: {
    name: "Primary Subtle",
    value: "rgba(0, 72, 249, 0.05)",
    cssVar: "--framer-primary-subtle",
  },
  primaryGlow: {
    name: "Primary Glow",
    value: "rgba(0, 72, 249, 0.035)",
    cssVar: "--framer-primary-glow",
  },
  primaryBorder: {
    name: "Primary Border",
    value: "rgba(0, 72, 249, 0.1)",
    cssVar: "--framer-primary-border",
  },
  white: {
    name: "White",
    value: "rgb(255, 255, 255)",
    cssVar: "--framer-white",
  },
  black60: {
    name: "Black 60%",
    value: "rgba(0, 0, 0, 0.6)",
    cssVar: "--framer-black-60",
  },
  neutral50: {
    name: "Neutral 50",
    value: "rgb(250, 250, 250)",
    cssVar: "--framer-neutral-50",
  },
  neutral100: {
    name: "Neutral 100",
    value: "rgb(245, 245, 245)",
    cssVar: "--framer-neutral-100",
  },
  neutral200: {
    name: "Neutral 200",
    value: "rgb(229, 229, 229)",
    cssVar: "--framer-neutral-200",
  },
  neutral400: {
    name: "Neutral 400",
    value: "rgb(163, 163, 163)",
    cssVar: "--framer-neutral-400",
  },
  neutral500: {
    name: "Neutral 500",
    value: "rgb(115, 115, 115)",
    cssVar: "--framer-neutral-500",
  },
  neutral950: {
    name: "Neutral 950",
    value: "rgb(10, 10, 10)",
    cssVar: "--framer-neutral-950",
  },
  divider: {
    name: "Divider",
    value: "rgba(0, 0, 0, 0.08)",
    cssVar: "--framer-divider",
  },
  gridLine: {
    name: "Grid Line",
    value: "rgba(0, 0, 0, 0.04)",
    cssVar: "--framer-grid-line",
  },
};

// ─────────────────────────────────────────────
// 2. TIPOGRAFIA
// ─────────────────────────────────────────────
export const framerTypography = {
  headings: {
    h108: {
      name: "Heading 108",
      path: "/Headings/108 Medium",
      fontSize: "108px",
      lineHeight: "0.96",
      letterSpacing: "-0.04em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 32',
      tag: "h1" as const,
    },
    h96: {
      name: "Heading 96",
      path: "/Headings/96 Medium",
      fontSize: "96px",
      lineHeight: "1.0",
      letterSpacing: "-0.06em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 32',
      tag: "h1" as const,
    },
    h72: {
      name: "Heading 72",
      path: "/Headings/72 Medium",
      fontSize: "72px",
      lineHeight: "1.0",
      letterSpacing: "-0.04em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 32',
      tag: "h2" as const,
    },
    h48: {
      name: "Heading 48",
      path: "/Headings/48 Medium",
      fontSize: "48px",
      lineHeight: "1.1",
      letterSpacing: "-0.04em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 32',
      tag: "h2" as const,
    },
    h32: {
      name: "Heading 32",
      path: "/Headings/32 Medium",
      fontSize: "32px",
      lineHeight: "1.2",
      letterSpacing: "-0.02em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 32',
      tag: "h3" as const,
    },
  },
  paragraphs: {
    p24: {
      name: "Paragraph 24",
      path: "/Paragraph/24 Medium",
      fontSize: "24px",
      lineHeight: "1.4",
      letterSpacing: "-0.04em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 14',
      tag: "p" as const,
    },
    p20: {
      name: "Paragraph 20",
      path: "/Paragraph/20 Medium",
      fontSize: "20px",
      lineHeight: "1.4",
      letterSpacing: "-0.02em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 14',
      tag: "p" as const,
    },
    p18: {
      name: "Paragraph 18",
      path: "/Paragraph/18 Medium",
      fontSize: "18px",
      lineHeight: "1.4",
      letterSpacing: "-0.02em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 14',
      tag: "p" as const,
    },
    p16: {
      name: "Paragraph 16",
      path: "/Paragraph/16 Medium",
      fontSize: "16px",
      lineHeight: "1.4",
      letterSpacing: "-0.02em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 14',
      tag: "p" as const,
    },
    p14: {
      name: "Paragraph 14",
      path: "/Paragraph/14 Medium",
      fontSize: "14px",
      lineHeight: "1.4",
      letterSpacing: "-0.02em",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontWeight: 500,
      fontVariationSettings: '"opsz" 14',
      tag: "p" as const,
    },
  },
  ui: {
    mono: {
      name: "UI Mono Label",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: "9px",
      fontWeight: 700,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
    },
    badge: {
      name: "UI Badge",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: "9px",
      fontWeight: 800,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
    },
    navLink: {
      name: "UI Nav Link",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: "9px",
      fontWeight: 700,
      letterSpacing: "0.1em",
      lineHeight: "1.4",
    },
    label: {
      name: "UI Label",
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.2em",
      lineHeight: "1.4",
    },
  },
};

// ─────────────────────────────────────────────
// 3. SPAZIATURA & LAYOUT
// ─────────────────────────────────────────────
export const framerSpacing = {
  // Padding sezione (desktop)
  sectionPaddingY: "96px",          // py-24
  sectionPaddingX: "96px",          // px-24 (largo)
  sectionPaddingXMd: "48px",        // px-12 (medio)
  sectionPaddingXSm: "24px",        // px-6 (mobile)

  // Container
  containerMaxWidth: "1400px",      // max-w-[1400px]
  containerGapLg: "96px",           // gap-24 (tra blocchi principali)
  containerGapMd: "64px",           // gap-16

  // Grid Blueprint 1:3
  gridBadgeColSpan: 1,              // Colonna badge (25% larghezza)
  gridContentColSpan: 3,            // Colonne contenuto (75% larghezza)
  gridCols: 4,                      // Totale colonne griglia desktop

  // Spaziatura interna componenti
  sectionHeaderGap: "30px",         // gap-7 (badge → titolo)
  cardPadding: "24px",              // Padding base card
  cardPaddingHover: "28px 24px",    // Padding card al hover
  cardBorderRadius: "12px",         // Raggio angoli card
  cardBorderRadiusLg: "24px",       // Raggio card pricing/testimonial
  navHeight: "80px",                // Altezza navbar fissa
  heroTopPadding: "144px",          // pt-36 — spazio dalla navbar
  pillGap: "14px",                  // gap-3.5 pillole hero

  // Componenti
  buttonRadiusMd: "12px",           // Bottoni solidi
  buttonRadiusFull: "22px",         // Menu PrimaryButton
  badgePaddingX: "14px",            // Padding badge orizzontale
  badgePaddingY: "6px",             // Padding badge verticale
  specsPanelPaddingMd: "40px",      // Padding pannello specifiche desktop
  specsPanelPaddingSm: "24px",      // Padding pannello specifiche mobile
  footerPaddingY: "64px",           // Padding footer verticale
};

// ─────────────────────────────────────────────
// 4. ANIMAZIONI (Spring Physics)
// ─────────────────────────────────────────────
export const framerAnimations = {
  // Spring principale sezioni — usata per reveal e transizioni layout
  springSection: {
    type: "spring" as const,
    stiffness: 260,
    damping: 25,
  },
  // Spring bottoni (feedback tattile rapido)
  springButton: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
  },
  // Spring hover card agile
  springCard: {
    type: "spring" as const,
    stiffness: 280,
    damping: 26,
  },
  // Spring sidebar mobile (scorrimento pannello)
  springSidebar: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  },
  // Spring pillole hero floating
  springPill: {
    type: "spring" as const,
    stiffness: 350,
    damping: 15,
  },
  // Stagger children — sezione animazione
  staggerSection: {
    staggerChildren: 0.08,
  },
  // Varianti di reveal elementi
  itemHidden: { opacity: 0, y: 20 },
  itemVisible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 25 },
  },
  containerHidden: { opacity: 0 },
  containerVisible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// ─────────────────────────────────────────────
// 5. SHADOW / EFFETTI VISIVI
// ─────────────────────────────────────────────
export const framerEffects = {
  // Glow radiale sfumato in background (Hero)
  heroGlow: `radial-gradient(circle at center, rgba(0, 72, 249, 0.035) 0%, transparent 70%)`,
  // Shadow bottoni (idle → hover)
  shadowButtonIdle: "0 1px 3px rgba(0,0,0,0.1)",
  shadowButtonHover: "0 4px 16px rgba(0,0,0,0.12)",
  // Shadow PrimaryButton glow
  shadowPrimaryGlow: "0 10px 30px -10px rgba(0, 72, 249, 0.3)",
  // Shadow card al hover
  shadowCardHover: "0 8px 32px rgba(0,0,0,0.07)",
  // Shadow pannello specs
  shadowPanel: "0 25px 60px rgba(0,0,0,0.1)",
  // Blur glassmorphism navbar
  blurNav: "12px",
  // Background navbar con trasparenza
  navBackground: "rgba(255, 255, 255, 0.70)",
};

// ─────────────────────────────────────────────
// 6. SEZIONE — BADGE (nodeId: struttura comune)
// ─────────────────────────────────────────────
export const framerSectionBadges = {
  servizi:      { label: "01 / SERVIZI",    specNodeRef: "arC6CNm2o" },
  portfolio:    { label: "02 / PORTFOLIO",  specNodeRef: "GJDYW1pCq" },
  opinioni:     { label: "03 / OPINIONI",   specNodeRef: "XrwYu3XaF" },
  prezzi:       { label: "04 / PREZZI",     specNodeRef: "lQuFCcWjD" },
  faq:          { label: "05 / DOMANDE",    specNodeRef: "hBptkB8kb" },
};

// ─────────────────────────────────────────────
// 7. NAVIGAZIONE
// ─────────────────────────────────────────────
export const framerNav = {
  // Brand logo
  brandName:   "A. Gentile",
  brandDot:    ".",
  brandSuffix: "Design",
  // Desktop nav links
  links: [
    { id: "hero",      label: "Home"     },
    { id: "servizi",   label: "Servizi"  },
    { id: "portfolio", label: "Progetti" },
    { id: "prezzi",    label: "Prezzi"   },
    { id: "faq",       label: "FAQ"      },
  ],
  // Mobile sidebar links
  sidebarLinks: [
    { id: "hero",      label: "Home Base"         },
    { id: "servizi",   label: "I Nostri Servizi"  },
    { id: "portfolio", label: "Portfolio Hub"      },
    { id: "prezzi",    label: "Tariffe e Piani"   },
    { id: "faq",       label: "Supporto & Domande" },
  ],
  // Navbar action buttons
  specsButtonLabel:      "Vedi Regole Design",
  specsButtonCloseLabel: "Chiudi Regole",
  menuButtonLabel:       "Menu",
  // Sidebar header & footer
  sidebarTitle:          "NAVIGAZIONE",
  sidebarCloseIcon:      "✕",
  sidebarFooterLabel:    "DESIGN SYSTEM FRAMEWORK",
  sidebarSpecsCtaLabel:  "Regole Tipografiche",
};

// ─────────────────────────────────────────────
// 8. HERO SECTION
// ─────────────────────────────────────────────
export const framerHero = {
  // Brand badge above headline
  brandLabel:      "ALESSANDRO GENTILE",
  // Main headline (split: normal + accent colored)
  headline:        "Digital",
  headlineAccent:  "Strategist",
  // Subtitle paragraph
  subtitle:        "Strategie di marketing basate sui dati, ottimizzazione SEO e campagne performance digitali misurabili fatte per crescere.",
  // CTA buttons
  ctaPrimary:   { variantKey: "primarySmall" as const, text: "Inizia Ora"       },
  ctaSecondary: { variantKey: "lineMedium"   as const, text: "Vedi i Progetti"  },
  // Floating spring pills
  pills: [
    { text: "🚀 SEO & AEO",       active: true  },
    { text: "📈 Digital Strategy", active: false },
    { text: "💻 Web Design",       active: false },
    { text: "📊 Marketing Data",   active: true  },
  ],
};

// ─────────────────────────────────────────────
// 9. SEZIONI — HEADER CONTENUTI
// ─────────────────────────────────────────────
export const framerSectionHeaders = {
  servizi: {
    badge:    framerSectionBadges.servizi.label,
    title:    "Servizi & Strategia",
    subtitle: "Progettiamo sistemi digitali completi, ottimizzati per la conversione e basati su precise misurazioni delle performance di business.",
  },
  portfolio: {
    badge:    framerSectionBadges.portfolio.label,
    title:    "Progetti Selezionati",
    subtitle: "Un'occhiata ad alcuni dei lavori più significativi realizzati con metodologie avanzate, design puliti e sviluppo d'eccellenza.",
  },
  opinioni: {
    badge:    framerSectionBadges.opinioni.label,
    title:    "Dicono di Me",
    subtitle: "La soddisfazione dei nostri partner e dei clienti testimonia la dedizione e il rigore metodico che applichiamo a ciascun progetto.",
  },
  prezzi: {
    badge:    framerSectionBadges.prezzi.label,
    title:    "Prezzi e Tariffe",
    subtitle: "Modelli trasparenti, nessuna sorpresa. Scegli il piano ideale per portare il tuo business al livello successivo.",
  },
  faq: {
    badge:    framerSectionBadges.faq.label,
    title:    "Domande Frequenti",
    subtitle: "Hai delle curiosità? Trova qui le risposte ai dubbi più comuni sulla nostra metodologia di lavoro e sui processi operativi.",
  },
};

// ─────────────────────────────────────────────
// 9b. PANNELLO SPECIFICHE (Specs Panel popup)
// ─────────────────────────────────────────────
export const framerSpecsPanel = {
  // Header
  sectionLabel:    "DISEGNO CENTRALIZZATO",
  panelTitle:      "Specifiche dei Token e delle Regole Sincronizzate",
  closeBtnLabel:   "Chiudi ✕",
  // Column headings
  colTypography:   "TYPOGRAPHY SPECS",
  colColors:       "COLOR PALETTE",
  colSpacing:      "SPACING & CONTAINER RULES",
  // Spacing rows labels
  spacingRows: [
    { label: "Desktop Padding:",       value: "py-24 px-[60px]"      },
    { label: "Container Max-width:",   value: "1400px limit"         },
    { label: "1:3 Grid Spacing Ratio:",value: "Left: 25% | Right: 75%" },
    { label: "Spring Physics Config:", value: "stiff: 280, damp: 26"  },
  ],
};

// ─────────────────────────────────────────────
// 10. NOTE SPEC PER SEZIONI (colonna sinistra 1:3 grid)
// ─────────────────────────────────────────────
export const framerSpecNotes = {
  servizi: {
    title:  "LAYOUT SPECS",
    nodeId: "arC6CNm2o",
    label:  "Accordion",
    lines:  ["Height transitions: auto", "Padding hover: 28px 24px"],
  },
  portfolio: {
    title:  "GRID BLUEPRINT",
    nodeId: "GJDYW1pCq",
    label:  "Card",
    lines:  ["Parallax Zoom: scale 1.06", "Tap Response: scale 0.995"],
  },
  opinioni: {
    title:  "TESTIMONIAL SPEC",
    nodeId: "XrwYu3XaF",
    label:  "Quote",
    lines:  ["Background: #F3F3F1", "Font: Inter Display 40px"],
  },
  prezzi: {
    title:  "TIER ARCHITECTURE",
    nodeId: "lQuFCcWjD",
    label:  "Plan",
    lines:  ["Shadow: hover scale 1.02", "CTA Animations: spring"],
  },
  faq: {
    title:  "FAQ DETAILS",
    nodeId: "hBptkB8kb",
    label:  "List",
    lines:  ["Plus icon rotation: 45°", "Active color: #0048F9"],
  },
};

// ─────────────────────────────────────────────
// 11. FOOTER
// ─────────────────────────────────────────────
export const framerFooter = {
  brandName:       "Alessandro Gentile",
  description:     "Design system centralizzato tokenizzato. Sviluppo a pixel perfetto sincronizzato in tempo reale con i componenti strutturali della tela di Framer.",
  specsCtaLabel:   "Vedi Regole Tipografiche",
  copyrightPrefix: "© ",
  copyrightSuffix: " ALESSANDRO GENTILE. ALL RIGHTS RESERVED.",
  techLabel:       "SYNCHRONIZED BY FRAMER MCP SERVER INTEGRATION",
};

// ─────────────────────────────────────────────
// 12. PULSANTI COMPONENT VARIANTS
// ─────────────────────────────────────────────
export const framerButtons = {
  lineSmall: {
    name: "Line - Small",
    nodeId: "WjB918Y4I",
    type: "link",
    padding: "0px 0px 4px 0px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p16,
    textColor: framerColors.black.value,
    borderColor: framerColors.black.value,
    hasBottomBorder: true,
    hoverNodeId: "e7Es_grtf",
    hoverTextColor: framerColors.primary.value,
    hoverBorderColor: framerColors.primary.value,
  },
  lineMedium: {
    name: "Line - Medium",
    nodeId: "aFGI9eaSz",
    type: "link",
    padding: "0px 0px 6px 0px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p18,
    textColor: framerColors.black.value,
    borderColor: framerColors.black.value,
    hasBottomBorder: true,
    hoverNodeId: "GR9q2lLiW",
    hoverTextColor: framerColors.primary.value,
    hoverBorderColor: framerColors.primary.value,
  },
  lineBig: {
    name: "Line - Big",
    nodeId: "P2MliArYS",
    type: "link",
    padding: "0px 0px 4px 0px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p20,
    textColor: framerColors.black.value,
    borderColor: framerColors.black.value,
    hasBottomBorder: true,
    hoverNodeId: "whKi0ULem",
    hoverTextColor: framerColors.primary.value,
    hoverBorderColor: framerColors.primary.value,
  },
  whiteSmall: {
    name: "White - Small",
    nodeId: "CnjzjM9Or",
    type: "button",
    backgroundColor: framerColors.white.value,
    borderRadius: framerSpacing.buttonRadiusMd,
    padding: "14px 24px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p16,
    textColor: framerColors.black.value,
    hoverNodeId: "eOSjG8foy",
    hoverBackgroundColor: framerColors.primary.value,
    hoverTextColor: framerColors.white.value,
  },
  blackSmall: {
    name: "Black - Small",
    nodeId: "gH1_62Ei9",
    type: "button",
    backgroundColor: framerColors.black.value,
    borderRadius: framerSpacing.buttonRadiusMd,
    padding: "14px 24px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p16,
    textColor: framerColors.white.value,
    hoverNodeId: "aKkpFPzev",
    hoverBackgroundColor: framerColors.primary.value,
    hoverTextColor: framerColors.white.value,
  },
  primarySmall: {
    name: "Primary - Small",
    nodeId: "xF2w39ktx",
    type: "button",
    backgroundColor: framerColors.primary.value,
    borderRadius: framerSpacing.buttonRadiusMd,
    padding: "14px 24px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p16,
    textColor: framerColors.white.value,
    hoverNodeId: "Fw8nyC0np",
    hoverBackgroundColor: framerColors.primaryHover.value,
    hoverTextColor: framerColors.white.value,
  },
  whiteBig: {
    name: "White - Big",
    nodeId: "JMzV7RDmI",
    type: "button",
    backgroundColor: framerColors.white.value,
    borderRadius: framerSpacing.buttonRadiusMd,
    padding: "20px 48px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p18,
    textColor: framerColors.black.value,
    hoverNodeId: "f01EGxXnS",
    hoverBackgroundColor: framerColors.primary.value,
    hoverTextColor: framerColors.white.value,
  },
};

// ─────────────────────────────────────────────
// 13. CONTENUTI DEMO (framerDemoData)
// ─────────────────────────────────────────────
export const framerDemoData = {
  services: [
    {
      index: "01",
      title: "Website Design",
      description: "Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return.",
    },
    {
      index: "02",
      title: "Brand Strategy",
      description: "We shape unique brand identities and positionings that tell a compelling story, connecting deeply with your target audience's desires.",
    },
    {
      index: "03",
      title: "SEO & Growth",
      description: "Optimizing visibility through organic search strategy and precision analytics to scale your reach and maximize conversions effectively.",
    },
  ],
  projects: [
    {
      title: "Arrows",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      categories: ["Website", "Marketing"],
    },
    {
      title: "Terrain Coffee",
      imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop",
      categories: ["E-commerce", "Identity"],
    },
    {
      title: "Valkyrie System",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      categories: ["Web App", "SaaS"],
    },
  ],
  testimonials: [
    {
      quote: "Finally found a team that understands both design and business. Our brand now perfectly captures what makes us different.",
      name: "Tom Bennett",
      role: "Founder @ Terrain Coffee",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "The interface logic feels responsive and premium. They translated our technical workflow into a gorgeous, intuitive dashboard.",
      name: "Sarah Jenkins",
      role: "CTO @ Valkyrie System",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
  ],
  pricing: [
    {
      planTitle: "Essential",
      price: "$1,499",
      priceUnit: "/month",
      description: "For businesses ready to level up their digital presence with a professional custom landing page and continuous brand refinement.",
      features: ["Custom One-Page Website", "Responsive Design System", "Basic SEO Optimization"],
      subFeatures: ["Figma source files", "2 revision rounds", "Standard hosting deployment"],
      actionText: "Get Started",
      popular: false,
    },
    {
      planTitle: "Growth Elite",
      price: "$2,999",
      priceUnit: "/month",
      description: "Ideal for growing startups needing deep UI systems, advanced e-commerce integrations, high-performance copy, and search dominance.",
      features: ["Multi-page Web App System", "Custom Micro-animations", "E-commerce & CMS Setup", "Advanced Search Mastery"],
      subFeatures: ["Priority support channel", "Unlimited revision rounds", "Full taxonomy integration"],
      actionText: "Scale Now",
      popular: true,
    },
  ],
  faqs: [
    {
      question: "What types of projects do you typically work on?",
      answer: "We specialize in digital solutions including website development, web applications, e-commerce platforms, and enterprise software integrations. Our expertise spans diverse industries, delivering strategic technological solutions tailored to unique business challenges.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines range from 4-6 weeks for small websites to 16-24 weeks for complex enterprise integrations. Each project is carefully scoped to balance efficiency with comprehensive development requirements.",
    },
    {
      question: "What's your development process like?",
      answer: "We follow an agile methodology with initial consultation, detailed project scoping, iterative development sprints, and continuous client collaboration. Our process ensures alignment between technical implementation and strategic business objectives.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "We offer 30-day post-launch support and optional maintenance packages that include performance monitoring, security updates, and technical assistance. Clients can choose from flexible support contracts to meet their long-term technological needs.",
    },
    {
      question: "Can you work with our existing systems and team?",
      answer: "We conduct comprehensive system audits to ensure seamless integration with your current technology stack and organizational workflow. Our team provides flexible collaboration models, knowledge transfer, and transparent communication to minimize disruption.",
    },
  ],
};
