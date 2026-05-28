import { Home, User, Briefcase, Grid, Mail } from 'lucide-react';
import { framerHero } from '../styles/framer-tokens';

export const siteConfig = {
  meta: {
    name: "Alessandro Gentile",
    role: `${framerHero.headline} ${framerHero.headlineAccent}`, // "Digital Strategist"
    tagline: framerHero.subtitle, // "Strategie di marketing basate sui dati, ottimizzazione SEO..."
    subtitle: framerHero.subtitle, 
    location: "Monza (MB), Italia",
    birthdate: "19/06/2003",
    language: "it",
    profileImage: "/profile/alessandro-gentile-image-profile.png"
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
  // { name: 'Progetti', href: '#projects', icon: Lightbulb },
  { name: 'Skill e Software', href: '#skills', icon: Grid },
  { name: 'Contattami', href: '#contact', icon: Mail },
];

export const sections = {
  about: {
    title: "Chi sono",
    bio: "Sono un <strong>Junior Marketing Strategist</strong> con formazione in <strong>Digital Marketing</strong> e competenze analitiche sviluppate attraverso esperienze in <strong>ottimizzazione web</strong>, analisi di performance e strategie digitali. Il mio approccio è <strong>data-driven</strong>: analizzo metriche, comportamenti utente e trend di mercato per trasformare insight complessi in <strong>azioni concrete e misurabili</strong>. Il mio obiettivo è crescere come Marketing Strategist, specializzandomi in <strong>analisi competitiva</strong>, <strong>brand positioning</strong> e strategie di marketing basate su <strong>dati quantitativi</strong>.",
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
        role: "Junior SEO | AEO",
        type: "Stage Extracurricolare",
        company: "Naxa",
        website: "https://naxa.ws",
        period: "Novembre 2025 - Maggio 2026",
        location: "Bernareggio, Italia",
        introduction: {
          text: "Naxa è un'agenzia di marketing strategico con sede a Bernareggio, specializzata in SEO, AEO, social media, campagne digitali, grafica e sviluppo web. Un contesto multidisciplinare dove ogni cliente è un progetto strategico da costruire da zero.<br/><br/>In Naxa ho gestito l'intero ciclo strategico e operativo del posizionamento organico per i clienti dell'agenzia — dal brief iniziale alla reportistica, dall'analisi tecnica all'ottimizzazione continua. Non ho eseguito task isolati: ho lavorato sull'intera filiera, imparando a connettere ogni attività a un obiettivo di business misurabile.",
          image: "/media/experiences/naxa/MG_9908-w-poltu-quatu.jpg"
        },
        development: {
          text: "Ogni nuovo cliente iniziava con un brief strutturato: comprensione degli obiettivi, analisi del mercato di riferimento, mappatura dei servizi e dei prodotti offerti e valutazione della situazione di partenza. Da lì costruivamo la strategia.<br/><br/>Il <strong>processo operativo</strong> si articolava in fasi chiare:<ul><li><strong>Analisi del traffico e posizionamento esistente:</strong> capire per quali cluster di keyword e segmenti di pubblico il sito riceveva visibilità, dove c'erano opportunità e dove c'erano perdite.</li><li><strong>Audit tecnico completo:</strong> checklist tecnica completa del sito, verificando la conformità agli standard più recenti di Google, dell'esperienza utente e dell'architettura tecnica. Un sito tecnicamente corretto è la condizione necessaria per qualsiasi strategia organica.</li><li><strong>Keyword gap e mappa concettuale:</strong> identificare quali cluster erano già presidiati dalla concorrenza e proporre tematiche coerenti con il posizionamento strategico del cliente. Da qui costruivamo la mappa concettuale delle keyword — tematiche principali e strategiche, tra cluster già presidiati e opportunità di crescita da sviluppare.</li><li><strong>Answer Engine Optimization (AEO):</strong> in parallelo alla SEO lavoravamo sull'AEO per ottimizzare la presenza del sito sui motori di risposta AI. Sperimentazione, reportistica e ottimizzazione continua dei formati e dei contenuti che funzionavano meglio in questo contesto emergente.</li><li><strong>Ottimizzazione e Reportistica:</strong> integrazione di elementi SEO nei testi esistenti e creazione di nuovi contenuti strategici. Reportistica tramite Google Analytics 4 e Looker Studio, monitorando i KPI principali — utenti, engagement rate, bounce rate, keyword in prima pagina, segmenti di pubblico acquisiti. Ogni ciclo si chiudeva con la pianificazione delle iterazioni successive.</li></ul>",
          image: "/media/experiences/naxa/andaz-maui-at-wailea-resort-17697889581.jpg"
        },
        conclusion: {
          text: `Questa esperienza mi ha insegnato qualcosa che va oltre le competenze tecniche: ho imparato a lavorare con velocità e rigore contemporaneamente, capendo cosa significa lavorare in team in modo efficace ed ottimizzare i processi misurandone i risultati.<br/><br/>Le principali <strong>soft skill sviluppate</strong>:<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10"><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Velocità & Rigore</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Capacità di lavorare in contesti rapidi mantenendo un rigore metodico elevato in ogni singolo task.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Focus Strategico</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Capacità di identificare ciò che è davvero importante per il cliente, ottimizzando tempo e risorse.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Team Working</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Collaborazione efficace ed affidabile: comunicazione chiara e reperibilità anche sui task più complessi.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Ottimizzazione dei Processi</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Miglioramento continuo basato sulla misurazione costante delle performance settimanali.</p></div></div></div>`,
          image: "/media/experiences/naxa/cantieri-di-pisa-polaris-48-intro.jpg"
        },
        tags: ["SEO", "AEO", "Digital Strategy"]
      },
      {
        id: "fridhem-center",
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
        tags: ["Social Media", "Content Strategy", "Cross-cultural", "International"]
      },
      {
        id: "anularis",
        role: "Brand Strategist",
        type: "Stage Curriculare - ITS AMMI Monza",
        company: "Anularis",
        website: "https://www.anularis.com/",
        period: "Febbraio 2025 – Aprile 2025",
        location: "Milano, Italia",
        introduction: {
          text: "Anularis è un'azienda artigianale milanese specializzata nella creazione di anelli sportivi commemorativi ad alto valore — oggetti unici, fatti a mano, con l'ambizione di posizionarsi nel mondo del lusso artigianale internazionale.<br/><br/>In questo contesto ho ricoperto il ruolo di <strong>unico marketer in-house</strong>, operando come un vero e proprio <strong>junior brand & growth strategist d'agenzia</strong>: ho ascoltato gli obiettivi del datore di lavoro, tradotto le necessità aziendali in un brief strutturato e pianificato le attività per priorità. La sfida principale? Colmare il forte divario tra l'obiettivo di posizionamento nel lusso e una comunicazione che non rifletteva ancora questa identità.",
          image: "/media/experiences/anularis/FotoAnularis.png"
        },
        development: {
          text: "Il <strong>processo operativo</strong> si è articolato in tre macro-aree strategiche:<br/><br/><strong>1. Brand Strategy & Identity Re-alignment</strong><br/>Ho analizzato il disallineamento tra il posizionamento obiettivo e la comunicazione reale, definendo le linee guida strategiche, la palette cromatica e il tono di voce per il riposizionamento del brand. Ho coordinato il lavoro operativo dei colleghi grafici per la produzione degli asset visivi, ottimizzando UX/UI del sito e il feed Instagram per convertire il nuovo posizionamento in lead commerciali.<br/><br/><strong>2. Market Research & Internazionalizzazione (Focus Esports in Medio Oriente)</strong><br/>Ho condotto una <strong>desk research strategica</strong> per l'espansione internazionale, individuando nel Medio Oriente l'area a più alta penetrazione per il prodotto, basandomi su due pilastri analitici:<ul><li><strong>Fattore Culturale:</strong> consapevolezza degli usi e costumi locali che pongono un focus massiccio sugli accessori e sulla gioielleria di lusso rispetto al tradizionale mercato dell'abbigliamento.</li><li><strong>Fattore Business:</strong> analisi degli investimenti verticali degli Emirati Arabi Uniti, diventati il centro nevralgico mondiale del gaming e delle competizioni e-sportive.</li></ul>L'<strong>insight strategico chiave</strong>: posizionare l'anello commemorativo artigianale non come un semplice gadget, ma come l'oggetto status-symbol primo, identificativo e differenziante per celebrare le vittorie nel mercato Esports.<br/><br/><strong>3. B2B Growth Hacking & Marketing Automation</strong><br/>Validato l'obiettivo strategico, ho progettato e implementato una vera e propria <strong>macchina di acquisizione contatti B2B</strong>:<ul><li><strong>Scouting & Outreach Automatizzato:</strong> utilizzo di Linked Helper per mappare, intercettare e automatizzare il primo contatto su LinkedIn con decision maker, manager e figure chiave del settore Esports.</li><li><strong>Lead Nurturing Funnel:</strong> integrazione dei lead qualificati in Mailchimp per campagne di email marketing personalizzate, scalando il processo di acquisizione clienti da zero.</li></ul>",
          image: "/media/experiences/anularis/PremiazioneAnularis-1-768x433.png"
        },
        conclusion: {
          text: `Questa esperienza mi ha permesso di operare con una responsabilità strategica totale, dall'analisi alla pianificazione fino all'esecuzione — gestendo l'intera filiera del marketing come un unico progetto integrato.<br/><br/>Le principali <strong>competenze sviluppate</strong>:<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10"><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Pensiero Strategico</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Capacità di leggere il contesto di business, definire priorità e tradurre obiettivi aziendali in piani d'azione strutturati.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Market Intelligence</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Ricerca di mercato cross-culturale e analisi geopolitica per identificare opportunità di espansione internazionale ad alto potenziale.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Growth Hacking B2B</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Progettazione e lancio di sistemi di lead generation automatizzati su LinkedIn, integrando outreach e nurturing in un funnel scalabile.</p></div></div><div class="p-6 border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:border-blue-600 transition-all rounded-xl flex flex-col gap-4 group"><div class="w-12 h-12 flex items-center justify-center bg-blue-600/10 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><h4 class="text-[22px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight leading-tight font-sans">Coordinamento & Leadership</h4><p class="text-[16px] text-gray-500 dark:text-gray-400 font-normal leading-relaxed tracking-wide font-sans">Direzione strategica del team operativo: allineamento degli asset grafici alla vision di brand e gestione delle priorità di progetto.</p></div></div></div>`,
          image: "/media/AnelliAnularisInTeca.png"
        },
        tags: ["Brand Strategy", "Market Research", "Marketing Automation"]
      }
    ]
  },
  projects: {
    title: "Progetti Personali",
    items: [
      {
        id: "proj-1",
        title: "Analisi SEO & AEO",
        category: "SEO / Data Analysis",
        description: "Progetto di <strong>ottimizzazione organica</strong> con analisi delle keyword, <strong>audit tecnico</strong> e sviluppo di una strategia di contenuto basata su <strong>dati di ricerca reali</strong>.",
        tags: ["Google Search Console", "Google Analytics", "SEMrush"],
        image: "/media/projects/seo-analysis/cover.jpg"
      },
      {
        id: "proj-2",
        title: "Competitive Landscape – Luxury Jewelry ME",
        category: "Market Research",
        description: "Mappatura competitiva del mercato jewelry luxury nel Medio Oriente: analisi di posizionamento, pricing, presenza digitale e gap di opportunità.",
        tags: ["Excel", "Google Trends", "Meta Business Suite"],
        image: "/media/projects/luxury-market/cover.jpg"
      },
      {
        id: "proj-3",
        title: "Social Media Strategy – Fridhem Center",
        category: "Social Media",
        description: "Sviluppo e implementazione di una content strategy per un centro culturale internazionale, con monitoraggio KPI e ottimizzazione continua dei contenuti.",
        tags: ["Meta Business Suite", "Canva", "Google Analytics"],
        image: "/media/projects/social-strategy/cover.jpg"
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
