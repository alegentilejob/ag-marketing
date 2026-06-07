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
        role: "Junior web performance and SEO",
        type: "Extracurricular Internship",
        company: "Naxa",
        website: "https://naxa.ws",
        period: "November 2025 - May 2026",
        location: "Bernareggio, Italy",
        introduction: {
          text: "Naxa is a strategic marketing agency based in Bernareggio, specializing in SEO, AEO, social media, digital campaigns, graphic design, and web development. It operates as a multidisciplinary environment where every client is a custom-made project to design, optimize, and position online.<br/><br/>During the internship, I managed the <strong>organic traffic analysis</strong>, the execution of complex <strong>technical SEO audits</strong>, the detailed study of <strong>keyword gaps and conceptual maps</strong>, content optimization for AI search engines via <strong>AEO</strong>, and continuous monitoring with <strong>Looker Studio</strong> reporting.",
          image: "/media/experiences/naxa/MG_9908-w-poltu-quatu.jpg"
        },
        development: {
          text: "Every new client started with a structured brief: understanding objectives, analyzing the target market, mapping services and products offered, and assessing the starting point. From there, we built the strategy.<br/><br/>The <strong>operational process</strong> was divided into clear phases:<ul><li><strong>Traffic and existing positioning analysis:</strong> understanding which keyword clusters and audience segments brought visibility, identifying where opportunities lay and where there were losses.</li><li><strong>Comprehensive technical audit:</strong> checking compliance with Google's latest standards, user experience, and technical architecture. A technically sound website is a prerequisite for any organic strategy.</li><li><strong>Keyword gap and conceptual map:</strong> identifying competitor-occupied clusters and proposing topics aligned with the client's strategic positioning. From here, we built the keyword conceptual map — key and strategic topics, bridging occupied clusters and growth opportunities to develop.</li><li><strong>Answer Engine Optimization (AEO):</strong> in parallel with SEO, we worked on AEO to optimize the site's presence on AI response engines. Experimenting, reporting, and continuously optimizing the formats and content that worked best in this emerging context.</li><li><strong>Optimization and Reporting:</strong> integrating SEO elements into existing copy and creating new strategic content. Reporting via Google Analytics 4 and Looker Studio, monitoring key KPIs — users, engagement rate, bounce rate, first-page keywords, acquired audience segments. Each cycle concluded with planning subsequent iterations.</li></ul>",
          image: "/media/experiences/naxa/andaz-maui-at-wailea-resort-17697889581.jpg"
        },
        conclusion: {
          text: `This experience taught me something that goes beyond technical skills: I learned to work with speed and rigor simultaneously, understanding what it means to work effectively in a team and optimize processes by measuring results.<br/><br/>Key <strong>soft skills developed</strong>:<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10"><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Speed & Rigor</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Ability to perform in fast-paced environments while maintaining high methodical accuracy on every task.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Strategic Focus</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Recognizing what is truly impactful for the client and optimizing time and resources accordingly.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Team Collaboration</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Effective teamwork: maintaining clear communication, accessibility, and high reliability.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Process Optimization</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Continuous performance improvement driven by constant measurement of weekly metrics.</p></div></div></div>`,
          image: "/media/experiences/naxa/cantieri-di-pisa-polaris-48-intro.jpg"
        },
        tags: ["SEO", "AEO", "Digital Strategy"]
      },
      {
        id: "fridhem-center",
        role: "Social Media Manager",
        type: "Erasmus +",
        company: "Fridhem Center",
        website: "https://frid.nu/en/",
        period: "June 2024 - August 2024",
        location: "Stjärnsund, Sweden",
        introduction: {
          text: "Fridhem Center is a Swedish cultural center located in Stjärnsund, dedicated to promoting multicultural events, international hospitality, and community exchange projects. It stands as a key meeting point for artists, volunteers, and visitors coming together from all over the world.<br/><br/>In this context, I was responsible for the <strong>strategic management of social channels</strong>, the continuous tracking of <strong>reach, engagement, and growth rate</strong>, the creation of <strong>content marketing plans</strong>, and supporting international events, working within a team built on <strong>cross-cultural adaptability</strong>.",
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
        role: "Brand Strategist",
        type: "Curricular Internship - ITS AMMI Monza",
        company: "Anularis",
        website: "https://www.anularis.com",
        period: "February 2025 - April 2025",
        location: "Milan, Italy",
        introduction: {
          text: "Anularis is a Milanese artisanal company specializing in crafting high-value commemorative sports rings — unique, handmade objects aiming to establish themselves in the international artisanal luxury market. A brand that merges Italian goldsmith tradition with athletic victory celebrations.<br/><br/>As the sole in-house marketer, I managed the <strong>brand strategy and visual identity realignment</strong> of the site and social channels, planned <strong>market research and B2B international expansion</strong> for the Esports market in the Middle East, and designed <strong>growth hacking and marketing automation</strong> flows on LinkedIn.",
          image: "/media/experiences/anularis/FotoAnularis.png"
        },
        development: {
          text: "The <strong>operational process</strong> unfolded across three strategic macro-areas:<br/><br/><strong>1. Brand Strategy & Identity Re-alignment</strong><br/>I analysed the misalignment between the target positioning and the actual communication output, defining the strategic guidelines, colour palette, and tone of voice for brand repositioning. I directed the operational work of the graphic team for visual asset production, optimising the website UX/UI and Instagram feed to convert the new positioning into commercial leads.<br/><br/><strong>2. Market Research & Internationalisation (Esports Focus in the Middle East)</strong><br/>I conducted <strong>strategic desk research</strong> for international expansion, identifying the Middle East as the highest-penetration market for the product, based on two analytical pillars:<ul><li><strong>Cultural Factor:</strong> awareness of local customs that place a massive focus on luxury accessories and jewellery over traditional clothing markets.</li><li><strong>Business Factor:</strong> analysis of the UAE's vertical investments, which have made it the global nerve centre of gaming and Esports competitions.</li></ul>The <strong>key strategic insight</strong>: positioning the artisanal commemorative ring not as a mere gadget, but as the premier status-symbol object — identifying and differentiating for celebrating victories in the Esports market.<br/><br/><strong>3. B2B Growth Hacking & Marketing Automation</strong><br/>Once the strategic objective was validated, I designed and implemented a full <strong>B2B lead acquisition engine</strong>:<ul><li><strong>Scouting & Automated Outreach:</strong> using Linked Helper to map, identify, and automate first-contact outreach on LinkedIn with decision-makers, managers, and key figures in the Esports and competitive gaming sector.</li><li><strong>Lead Nurturing Funnel:</strong> integrating qualified leads into Mailchimp for personalised email marketing campaigns, scaling the client acquisition process from zero.</li></ul>",
          image: "/media/experiences/anularis/PremiazioneAnularis-1-768x433.png"
        },
        conclusion: {
          text: `This experience allowed me to operate with total strategic ownership — from analysis and planning through to execution — managing the entire marketing chain as a single integrated project.<br/><br/>Key <strong>skills developed</strong>:<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10"><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Strategic Thinking</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Ability to read the business context, set priorities, and translate company objectives into structured action plans.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Market Intelligence</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Cross-cultural market research and geopolitical analysis to identify high-potential international expansion opportunities.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">B2B Growth Hacking</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Designing and launching automated lead generation systems on LinkedIn, integrating outreach and nurturing into a scalable funnel.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Coordination & Leadership</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Strategic direction of the operational team: aligning graphic assets with the brand vision and managing project priorities.</p></div></div></div>`,
          image: "/media/AnelliAnularisInTeca.png"
        },
        tags: ["Brand Strategy", "Market Research", "Marketing Automation"]
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
