import { Home, User, Briefcase, Grid, Mail } from 'lucide-react';

export const siteConfig = {
  meta: {
    name: "Alessandro Gentile",
    role: "Junior Marketing Strategist",
    tagline: "From data analysis to the creation of creative strategies",
    subtitle: "Monza (MB), Italy",
    location: "Monza (MB), Italy",
    birthdate: "19/06/2003",
    language: "en",
    bio: "Junior Marketing Strategist with a strong data-driven approach. Specialized in web performance analysis and the development of measurable digital strategies, I transform complex insights into concrete actions for brand growth.",
    profileImage: "/media/profile/Gemini_Generated_Image_awvuruawvuruawvu.png",
    url: "https://alessandrogentile.marketing",
    languages: [
      { name: "Italian", level: "Native" },
      { name: "English", level: "B2" }
    ]
  },
  contact: {
    email: "alegentilejob@gmail.com",
    phone: "+393667360503",
    linkedin: "https://www.linkedin.com/in/alessandro-gentile-a1151a258/",
    website: "https://ag-marketing.vercel.app"
  }
};

export const navigation = [
  { key: 'experience', name: 'Experience', href: '/en/experience', icon: Briefcase },
  { key: 'projects', name: 'Projects', href: '/en/projects', icon: Grid },
  { key: 'skills', name: 'Skills', href: '/en/skills', icon: Grid },
  { key: 'about', name: 'About Me', href: '/en/about-me', icon: User },
  { key: 'blog', name: 'Blog', href: '/en/blog', icon: Grid },
];

export const sections = {
  about: {
    title: "About Me",
    bio: "Junior Marketing Strategist with a strong data-driven approach. Specialized in web performance analysis and the development of measurable digital strategies, I transform complex insights into concrete actions for brand growth.",
    education: [
      {
        institution: "ITS Digital Marketing – Fondazione Ammi",
        period: "09/2023 – 11/2025",
        location: "Monza, Italy"
      },
      {
        institution: "Liceo Scientifico – Achille Mapelli",
        period: "09/2017 – 07/2022",
        location: "Monza, Italy"
      }
    ]
  },
  experience: {
    title: "Work Experience",
    items: [
      {
        id: "naxa",
        role: "Marketing Strategist Intern",
        type: "Curricular Internship - ITS Angelo Rizzoli",
        company: "Naxa",
        website: "https://www.naxa.it",
        period: "October 2025 - March 2026",
        location: "Milan, Italy",
        introduction: {
          text: "Experience focused on <strong>digital presence optimization</strong> through <strong>web performance analysis</strong> and <strong>SEO</strong> strategies based on real data.",
          image: "/media/experiences/naxa/MG_9908-w-poltu-quatu.jpg"
        },
        development: {
          text: "I conducted <strong>web performance analysis</strong> (traffic, conversion rate, bounce rate, user engagement) using <strong>Google Analytics</strong> and <strong>Search Console</strong> to identify trends and optimization opportunities. I performed <strong>digital competitor analysis</strong> on search engines, developing a <strong>keyword strategy</strong> and a <strong>content approach</strong> to identify competitive gaps. I elaborated optimization strategies using a methodical approach of <strong>continuous testing, measurement, and iteration</strong>.",
          image: "/media/experiences/naxa/andaz-maui-at-wailea-resort-17697889581.jpg"
        },
        conclusion: {
          text: "This experience allowed me to develop a <strong>systematic approach</strong> to digital optimization and to refine my ability to <strong>read data</strong> in order to make <strong>strategic decisions</strong>.",
          image: "/media/experiences/naxa/cantieri-di-pisa-polaris-48-intro.jpg"
        },
        tags: ["SEO", "SEA", "Marketing Strategy", "Data Analysis", "Content Marketing"]
      },
      {
        id: "fridhem-center",
        role: "Multi-purpose Staff",
        type: "Erasmus +",
        company: "Fridhem Center",
        website: "https://fridhem.org",
        period: "June 2024 - August 2024",
        location: "Stjärnsund, Sweden",
        introduction: {
          text: "International experience in a <strong>cross-cultural</strong> context, focused on <strong>strategic social content management</strong> for a Swedish cultural center.",
          image: "/media/experiences/fridhem/Tavola disegno 1@2x.png"
        },
        development: {
          text: "I developed a <strong>content strategy</strong> by analyzing the performance of previous content and best practices in the cultural sector. I monitored <strong>social metrics</strong> (reach, engagement, growth rate) to evaluate content effectiveness and optimize the strategy in real-time. I adapted communication and approach to an <strong>international cultural context</strong>, developing strong <strong>cross-cultural adaptability</strong>.",
          image: "/media/experiences/fridhem/Tavola disegno 2@2x.png"
        },
        conclusion: {
          text: "An experience that strengthened my ability to work in <strong>international environments</strong> and to adapt <strong>communication strategies</strong> to diverse audiences and cultural contexts.",
          image: "/media/experiences/fridhem/Tavola disegno 3@2x.png"
        },
        tags: ["Hospitality", "International Environment", "Event Support"]
      },
      {
        id: "anularis",
        role: "Field Marketing Intern",
        type: "Curricular Internship - High School",
        company: "Anularis",
        website: "https://www.anularis.com",
        period: "May 2023 - June 2023",
        location: "Milan, Italy",
        introduction: {
          text: "Internship in the <strong>luxury jewelry</strong> sector, with a focus on <strong>market research</strong> and market analysis of the <strong>Middle East</strong> to support strategic positioning decisions.",
          image: "/media/experiences/anularis/FotoAnularis.png"
        },
        development: {
          text: "I conducted <strong>market research</strong> and <strong>data analysis</strong> on the luxury market, studying <strong>purchasing behaviors</strong> and emotional dynamics. I realized a <strong>competitive landscape mapping</strong>, analyzing <strong>pricing positioning</strong> and digital communication. I supported <strong>performance marketing</strong> campaigns on email marketing and tracked <strong>conversion metrics</strong>.",
          image: "/media/experiences/anularis/PremiazioneAnularis-1-768x433.png"
        },
        conclusion: {
          text: "I acquired a <strong>strategic vision</strong> of luxury marketing and the ability to conduct <strong>complex market analysis</strong> to support business decisions.",
          image: "/media/experiences/anularis/Tavola disegno 7@2x.png"
        },
        tags: ["Market research on the Middle East luxury market", "Market Research", "Luxury Marketing", "Performance Marketing", "Competitive Analysis"]
      }
    ]
  },
  skills: {
    title: "Skills & Software",
    hard: [
      "Market Analysis",
      "KPI Monitoring",
      "Competitor Analysis",
      "Brand Management",
      "Digital Strategies",
      "SEO / AEO",
      "Social Media Marketing",
      "Email Marketing",
      "Performance Marketing",
      "Copywriting"
    ],
    soft: [
      "Proactivity",
      "Curiosity",
      "Initiative",
      "Team Working",
      "Problem Solving",
      "Cultural Adaptability"
    ],
    software: [
      { name: "Google Analytics", category: "Analytics", icon: "/media/skills/google-analytics.svg" },
      { name: "Google Search Console", category: "Analytics", icon: "/media/skills/google-search-console.svg" },
      { name: "Meta Business Suite", category: "Social", icon: "/media/skills/meta.svg" },
      { name: "Excel", category: "Data", icon: "/media/skills/excel.svg" },
      { name: "PowerPoint", category: "Presentation", icon: "/media/skills/powerpoint.svg" },
      { name: "Adobe Suite", category: "Design", icon: "/media/skills/adobe.svg" },
      { name: "Canva", category: "Design", icon: "/media/skills/canva.svg" },
      { name: "Figma", category: "Design", icon: "/media/skills/figma.svg" }
    ]
  },
  languages: [
    { name: "Italian", level: "Native" },
    { name: "English", level: "B2" }
  ]
};
