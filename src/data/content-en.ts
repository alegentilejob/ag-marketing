import { User, Briefcase, Grid } from 'lucide-react';

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
    profileImage: "/profile/alessandro-gentile-image-profile.png",
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
        role: "Junior SEO | AEO",
        type: "Extracurricular Internship",
        company: "Naxa",
        website: "https://naxa.ws",
        period: "November 2025 - May 2026",
        location: "Bernareggio, Italy",
        introduction: {
          text: "Naxa is a strategic marketing agency based in Bernareggio, specializing in SEO, AEO, social media, digital campaigns, graphic design, and web development. A multidisciplinary environment where every client is a strategic project built from scratch.<br/><br/>At Naxa, I managed the entire strategic and operational cycle of organic positioning for the agency's clients — from the initial brief to reporting, and from technical analysis to continuous optimization. I did not perform isolated tasks: I worked across the entire value chain, learning to connect every activity to a measurable business objective.",
          image: "/media/experiences/naxa/MG_9908-w-poltu-quatu.jpg"
        },
        development: {
          text: "Every new client started with a structured brief: understanding objectives, analyzing the target market, mapping services and products offered, and assessing the starting point. From there, we built the strategy.<br/><br/>The <strong>operational process</strong> was divided into clear phases:<ul><li><strong>Traffic and existing positioning analysis:</strong> understanding which keyword clusters and audience segments brought visibility, identifying where opportunities lay and where there were losses.</li><li><strong>Comprehensive technical audit:</strong> checking compliance with Google's latest standards, user experience, and technical architecture. A technically sound website is a prerequisite for any organic strategy.</li><li><strong>Keyword gap and conceptual map:</strong> identifying competitor-occupied clusters and proposing topics aligned with the client's strategic positioning. From here, we built the keyword conceptual map — key and strategic topics, bridging occupied clusters and growth opportunities to develop.</li><li><strong>Answer Engine Optimization (AEO):</strong> in parallel with SEO, we worked on AEO to optimize the site's presence on AI response engines. Experimenting, reporting, and continuously optimizing the formats and content that worked best in this emerging context.</li><li><strong>Optimization and Reporting:</strong> integrating SEO elements into existing copy and creating new strategic content. Reporting via Google Analytics 4 and Looker Studio, monitoring key KPIs — users, engagement rate, bounce rate, first-page keywords, acquired audience segments. Each cycle concluded with planning subsequent iterations.</li></ul>",
          image: "/media/experiences/naxa/andaz-maui-at-wailea-resort-17697889581.jpg"
        },
        conclusion: {
          text: `This experience taught me something that goes beyond technical skills: I learned to work with speed and rigor simultaneously, understanding what it means to work effectively in a team and optimize processes by measuring results.<br/><br/>Key <strong>soft skills developed</strong>:<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10"><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Speed & Rigor</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Ability to perform in fast-paced environments while maintaining high methodical accuracy on every task.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Strategic Focus</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Recognizing what is truly impactful for the client and optimizing time and resources accordingly.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Team Collaboration</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Effective teamwork: maintaining clear communication, accessibility, and high reliability.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Process Optimization</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Continuous performance improvement driven by constant measurement of weekly metrics.</p></div></div></div><strong>Tools used:</strong> Google Analytics 4 · Google Search Console · Looker Studio · SEMrush · SEOZoom · PowerPoint · Excel`,
          image: "/media/experiences/naxa/cantieri-di-pisa-polaris-48-intro.jpg"
        },
        tags: ["SEO", "AEO", "Digital Strategy"]
      },
      {
        id: "fridhem-center",
        role: "Multi-purpose Staff",
        type: "Erasmus +",
        company: "Fridhem Center",
        website: "https://frid.nu/en/",
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
