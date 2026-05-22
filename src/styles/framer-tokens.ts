/**
 * Framer Design System Tokens
 * 
 * Automatically cataloged and organized from the live Framer MCP server resources.
 * Contains color styles, typography styles, button variants, and configuration options.
 */

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
  white: {
    name: "White",
    value: "rgb(255, 255, 255)",
    cssVar: "--framer-white",
  },
  black60: {
    name: "Black 60%",
    value: "rgba(0, 0, 0, 0.6)",
    cssVar: "--framer-black-60",
  }
};

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
    }
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
    }
  }
};

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
    borderRadius: "12px",
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
    borderRadius: "12px",
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
    borderRadius: "12px",
    padding: "14px 24px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p16,
    textColor: framerColors.white.value,
    hoverNodeId: "Fw8nyC0np",
    hoverBackgroundColor: "rgb(0, 58, 200)", // Darker blue hover for tactile primary feedback
    hoverTextColor: framerColors.white.value,
  },
  whiteBig: {
    name: "White - Big",
    nodeId: "JMzV7RDmI",
    type: "button",
    backgroundColor: framerColors.white.value,
    borderRadius: "12px",
    padding: "20px 48px",
    gap: "8px",
    textStyle: framerTypography.paragraphs.p18,
    textColor: framerColors.black.value,
    hoverNodeId: "f01EGxXnS",
    hoverBackgroundColor: framerColors.primary.value,
    hoverTextColor: framerColors.white.value,
  }
};

export const framerDemoData = {
  services: [
    {
      index: "01",
      title: "Website Design",
      description: "Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return."
    },
    {
      index: "02",
      title: "Brand Strategy",
      description: "We shape unique brand identities and positionings that tell a compelling story, connecting deeply with your target audience's desires."
    },
    {
      index: "03",
      title: "SEO & Growth",
      description: "Optimizing visibility through organic search strategy and precision analytics to scale your reach and maximize conversions effectively."
    }
  ],
  projects: [
    {
      title: "Arrows",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      categories: ["Website", "Marketing"]
    },
    {
      title: "Terrain Coffee",
      imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop",
      categories: ["E-commerce", "Identity"]
    },
    {
      title: "Valkyrie System",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      categories: ["Web App", "SaaS"]
    }
  ],
  testimonials: [
    {
      quote: "Finally found a team that understands both design and business. Our brand now perfectly captures what makes us different.",
      name: "Tom Bennett",
      role: "Founder @ Terrain Coffee",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The interface logic feels responsive and premium. They translated our technical workflow into a gorgeous, intuitive dashboard.",
      name: "Sarah Jenkins",
      role: "CTO @ Valkyrie System",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    }
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
      popular: false
    },
    {
      planTitle: "Growth Elite",
      price: "$2,999",
      priceUnit: "/month",
      description: "Ideal for growing startups needing deep UI systems, advanced e-commerce integrations, high-performance copy, and search dominance.",
      features: ["Multi-page Web App System", "Custom Micro-animations", "E-commerce & CMS Setup", "Advanced Search Mastery"],
      subFeatures: ["Priority support channel", "Unlimited revision rounds", "Full taxonomy integration"],
      actionText: "Scale Now",
      popular: true
    }
  ],
  faqs: [
    {
      question: "What types of projects do you typically work on?",
      answer: "We specialize in digital solutions including website development, web applications, e-commerce platforms, and enterprise software integrations. Our expertise spans diverse industries, delivering strategic technological solutions tailored to unique business challenges."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines range from 4-6 weeks for small websites to 16-24 weeks for complex enterprise integrations. Each project is carefully scoped to balance efficiency with comprehensive development requirements."
    },
    {
      question: "What's your development process like?",
      answer: "We follow an agile methodology with initial consultation, detailed project scoping, iterative development sprints, and continuous client collaboration. Our process ensures alignment between technical implementation and strategic business objectives."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "We offer 30-day post-launch support and optional maintenance packages that include performance monitoring, security updates, and technical assistance. Clients can choose from flexible support contracts to meet their long-term technological needs."
    },
    {
      question: "Can you work with our existing systems and team?",
      answer: "We conduct comprehensive system audits to ensure seamless integration with your current technology stack and organizational workflow. Our team provides flexible collaboration models, knowledge transfer, and transparent communication to minimize disruption."
    }
  ]
};

