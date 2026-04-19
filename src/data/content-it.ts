import { Home, User, Briefcase, Grid, Mail } from 'lucide-react';

export const siteConfig = {
  meta: {
    name: "Alessandro Gentile",
    role: "Junior Marketing Strategist",
    tagline: "Dall'analisi dei dati alla creazione di strategie creative",
    subtitle: "Monza (MB), Italia",
    location: "Monza (MB), Italia",
    birthdate: "19/06/2003",
    language: "it",
    bio: "Junior Marketing Strategist con un forte approccio data-driven. Specializzato nell'analisi delle performance web e nello sviluppo di strategie digitali misurabili, trasformo insight complessi in azioni concrete per la crescita del brand.",
    profileImage: "/media/profile/Gemini_Generated_Image_awvuruawvuruawvu.png",
    url: "https://alessandrogentile.marketing",
    languages: [
      { name: "Italiano", level: "Madrelingua" },
      { name: "Inglese", level: "B2" }
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
  { key: 'experience', name: 'Esperienze', href: '/esperienze', icon: Briefcase },
  { key: 'projects', name: 'Progetti', href: '/progetti', icon: Grid },
  { key: 'skills', name: 'Skill', href: '/skills', icon: Grid },
  { key: 'about', name: 'Chi sono', href: '/chi-sono', icon: User },
  { key: 'blog', name: 'Blog', href: '/blog', icon: Grid },
];

export const sections = {
  about: {
    title: "Chi sono",
    bio: "Junior Marketing Strategist con un forte approccio data-driven. Specializzato nell'analisi delle performance web e nello sviluppo di strategie digitali misurabili, trasformo insight complessi in azioni concrete per la crescita del brand.",
    education: [
      {
        institution: "ITS Digital Marketing – Fondazione Ammi",
        period: "09/2023 – 11/2025",
        location: "Monza, Italia"
      },
      {
        institution: "Liceo Scientifico – Achille Mapelli",
        period: "09/2017 – 07/2022",
        location: "Monza, Italia"
      }
    ]
  },
  experience: {
    title: "Esperienze Lavorative",
    items: [
      {
        id: "naxa",
        role: "Stage Marketing Strategist",
        type: "Stage Curriculare - ITS Angelo Rizzoli",
        company: "Naxa",
        website: "https://www.naxa.it",
        period: "Ottobre 2025 - Marzo 2026",
        location: "Milano, Italia",
        introduction: {
          text: "Esperienza focalizzata sull'<strong>ottimizzazione della presenza digitale</strong> attraverso <strong>analisi delle performance web</strong> e strategie <strong>SEO</strong> basate su dati reali.",
          image: "/media/experiences/naxa/MG_9908-w-poltu-quatu.jpg"
        },
        development: {
          text: "Ho condotto <strong>analisi delle performance web</strong> (traffico, conversion rate, bounce rate, user engagement) tramite <strong>Google Analytics</strong> e <strong>Search Console</strong> per identificare trend e opportunità di ottimizzazione. Ho effettuato <strong>analisi competitor digitale</strong> sui motori di ricerca, sviluppando <strong>keyword strategy</strong> e <strong>content approach</strong> per identificare gap competitivi. Ho elaborato strategie di ottimizzazione con un approccio metodico di <strong>test, misurazione e iterazione continua</strong>.",
          image: "/media/experiences/naxa/andaz-maui-at-wailea-resort-17697889581.jpg"
        },
        conclusion: {
          text: "Questa esperienza mi ha permesso di sviluppare un <strong>approccio sistematico</strong> all'ottimizzazione digitale e di affinare la capacità di <strong>leggere i dati</strong> per prendere <strong>decisioni strategiche</strong>.",
          image: "/media/experiences/naxa/cantieri-di-pisa-polaris-48-intro.jpg"
        },
        tags: ["SEO", "SEA", "Marketing Strategy", "Data Analysis", "Content Marketing"]
      },
      {
        id: "fridhem-center",
        role: "Staff Multi-purpose",
        type: "Erasmus +",
        company: "Fridhem Center",
        website: "https://fridhem.org",
        period: "Giugno 2024 - Agosto 2024",
        location: "Stjärnsund, Svezia",
        introduction: {
          text: "Esperienza internazionale in un contesto <strong>cross-culturale</strong>, focalizzata sulla <strong>gestione strategica dei contenuti social</strong> per un centro culturale svedese.",
          image: "/media/experiences/fridhem/Tavola disegno 1@2x.png"
        },
        development: {
          text: "Ho sviluppato una <strong>content strategy</strong> analizzando le performance dei contenuti precedenti e le best practice del settore culturale. Ho monitorato le <strong>metriche social</strong> (reach, engagement, growth rate) per valutare l'efficacia dei contenuti e ottimizzare la strategia in tempo reale. Ho adattato comunicazione e approccio a un <strong>contesto culturale internazionale</strong>, sviluppando forte <strong>adattabilità cross-cultural</strong>.",
          image: "/media/experiences/fridhem/Tavola disegno 2@2x.png"
        },
        conclusion: {
          text: "Un'esperienza che ha rafforzato la mia capacità di lavorare in <strong>ambienti internazionali</strong> e di adattare <strong>strategie di comunicazione</strong> a pubblici e contesti culturali diverse.",
          image: "/media/experiences/fridhem/Tavola disegno 3@2x.png"
        },
        tags: ["Hospitality", "International Environment", "Event Support"]
      },
      {
        id: "anularis",
        role: "Stage Field Marketing",
        type: "Stage Curriculare - Liceo",
        company: "Anularis",
        website: "https://www.anularis.com",
        period: "Maggio 2023 - Giugno 2023",
        location: "Milano, Italia",
        introduction: {
          text: "Stage nel settore <strong>luxury jewelry</strong>, con focus su <strong>market research</strong> e analisi del mercato del <strong>Medio Oriente</strong> per supportare decisioni strategiche di posizionamento.",
          image: "/media/experiences/anularis/FotoAnularis.png"
        },
        development: {
          text: "Ho condotto <strong>market research</strong> e <strong>analisi dati</strong> sul mercato luxury, studiando <strong>comportamenti d'acquisto</strong> e dinamiche emotive. Ho realizzato un <strong>competitive landscape mapping</strong>, analizzando <strong>posizionamento di prezzo</strong> e comunicazione digitale. Ho supportato campagne di <strong>performance marketing</strong> su email marketing e tracking delle <strong>metriche di conversione</strong>.",
          image: "/media/experiences/anularis/PremiazioneAnularis-1-768x433.png"
        },
        conclusion: {
          text: "Ho acquisito una <strong>visione strategica</strong> del marketing luxury e la capacità di condurre <strong>analisi di mercato complesse</strong> a supporto di decisioni di business.",
          image: "/media/experiences/anularis/Tavola disegno 7@2x.png"
        },
        tags: ["Market research su mercato luxury Medio Oriente", "Market Research", "Luxury Marketing", "Performance Marketing", "Competitive Analysis"]
      }
    ]
  },
  skills: {
    title: "Skill e Software",
    hard: [
      "Analisi di mercato",
      "Monitoraggio KPI",
      "Analisi competitor",
      "Brand management",
      "Digital strategies",
      "SEO / AEO",
      "Social Media Marketing",
      "Email Marketing",
      "Performance Marketing",
      "Copywriting"
    ],
    soft: [
      "Proattività",
      "Curiosità",
      "Intraprendenza",
      "Team working",
      "Problem solving",
      "Adattabilità culturale"
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
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "B2" }
  ]
};
