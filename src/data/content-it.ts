import { Home, User, Briefcase, Grid, Mail } from 'lucide-react';

export const siteConfig = {
  meta: {
    name: "Alessandro Gentile",
    role: "Junior Marketing Strategist",
    tagline: "Dall'analisi dei dati alla creazione di strategie creative",
    subtitle: "Disponibile full-time e stage · Monza (MB) · Disponibile da subito",
    location: "Monza (MB), Italia",
    birthdate: "19/06/2003",
    language: "it",
    profileImage: "/media/profile/Gemini_Generated_Image_awvuruawvuruawvu.png"
  },
  contact: {
    email: "alegentilejob@gmail.com",
    phone: "+393667360503",
    linkedin: "https://www.linkedin.com/in/alessandro-gentile-a1151a258/",
    website: "https://ag-marketing.vercel.app"
  }
};

export const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Chi sono', href: '#about', icon: User },
  { name: 'Esperienze', href: '#esperienze', icon: Briefcase },
  { name: 'Skill e Software', href: '#skills', icon: Grid },
  { name: 'Contattami', href: '#contact', icon: Mail },
];

export const sections = {
  about: {
    title: "Chi sono",
    bio: "Ho costruito le mie competenze attraverso tre esperienze consecutive in ambiti diversi: ottimizzazione SEO in agenzia, social media management in contesto internazionale e market research nel settore luxury.<br/><br/>Il filo comune è sempre stato lo stesso: partire dai dati, identificare pattern e tradurli in azioni concrete.<br/><br/>Sto cercando un contesto dove crescere come Marketing Strategist, contribuendo su analisi competitiva, SEO e strategie digitali basate su metriche reali.",
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
        id: "exp-1",
        role: "Junior SEO | AEO",
        type: "Stage extracurricolare",
        company: "Naxa",
        website: "https://www.naxa.ws/",
        period: "11/2025 – presente",
        location: "Bernareggio, Italia",
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
        tags: ["Analisi settimanale su Google Analytics + Search Console", "SEO", "AEO", "Data Analysis", "Content Strategy"]
      },
      {
        id: "exp-2",
        role: "Social Media Manager",
        type: "Volontariato",
        company: "Fridhem Center",
        website: "https://frid.nu/en/",
        period: "04/2025 – 05/2025",
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
        tags: ["Gestione contenuti per audience internazionale · Svezia", "Social Media", "Content Strategy", "Cross-cultural", "International"]
      },
      {
        id: "exp-3",
        role: "Junior Marketing Strategist",
        type: "Stage curricolare",
        company: "Anularis",
        website: "https://www.anularis.com/",
        period: "02/2025 – 04/2025",
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
