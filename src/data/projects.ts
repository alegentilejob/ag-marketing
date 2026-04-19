export interface Project {
  id: string;
  category: string;
  year: string;
  month: string;
  day: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  content: Array<{
    type: 'text' | 'image' | 'video' | 'gallery' | 'table';
    data: any;
  }>;
}

export const projectsIt: Project[] = [
  {
    id: "wolly-finance",
    category: "wolly",
    year: "2026",
    month: "04",
    day: "18",
    slug: "desk-research-la-nuova-era-della-finanza-personale",
    title: "Desk research: La Nuova Era della Finanza Personale",
    description: "App di Risparmio Personale Powered by AI in Italia: analisi del paradosso del risparmiatore italiano e della soluzione tramite intelligenza artificiale.",
    date: "18 Aprile 2026",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          title: "Introduzione",
          html: "<p>Questo documento sintetizza la <strong>ricerca di mercato</strong> effettuata per rispondere a un unico quesito fondamentale: esiste in Italia un <strong>reale interesse</strong> per un’app di risparmio e gestione delle spese alimentata dall’<strong>Intelligenza Artificiale</strong>?</p><p>L’analisi si concentra esclusivamente sulla <strong>finanza personale e familiare</strong>, escludendo contesti aziendali o strategie di investimento avanzate.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>1. Il Bisogno: Il Paradosso del Risparmiatore Italiano</h3><p>In Italia, la gestione del denaro non è vissuta come una disciplina tecnica, ma come un <strong>onere emotivo</strong> caratterizzato da <strong>senso di colpa, ansia e percezione di caos</strong>.</p><h4>1.1 Grandi risparmiatori, piccoli gestori</h4><p>L’<a href='https://edufinindex.it/' target='_blank'><strong>Edufin Index 2024</strong></a> (<strong>56/100</strong>) evidenzia un’<strong>insufficienza cronica</strong> nella capacità di gestire il flusso di spese, con una forte lacuna tra consapevolezza della necessità di risparmiare e <strong>competenza operativa quotidiana</strong>.</p><p><em>Fonte: Alleanza Assicurazioni – <a href='https://edufinindex.it/' target='_blank'>Rapporto Edufin Index 2024</a></em><br><em>Approfondimento: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Banca d’Italia – Indagini sull’alfabetizzazione finanziaria</a></em></p><h4>1.2 La “Subscription Economy” come trigger</h4><p>La fascia <strong>25‑44 anni</strong> è sommersa da abbonamenti e <strong>micro‑pagamenti</strong> (streaming, food delivery, app, servizi digitali), ma manca uno strumento semplice e centralizzato che <strong>“metta ordine”</strong> nei flussi, cosa che gli estratti conto bancari tradizionali non offrono.</p><p><em>Fonte: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Banca d’Italia – Indagine IACOFI</a></em></p><h4>1.3 Domanda di protezione, non di expertise</h4><p>L’interesse non è rivolto a diventare esperti di finanza, ma a ottenere un’<strong>assicurazione contro lo spreco</strong>: uno strumento che <strong>protegga il risparmio</strong> già accumulato, evitando <strong>piccoli “leakage” quotidiani</strong> e abbonamenti inutili.</p><p><strong>Sintesi della sezione:</strong> C’è interesse perché c’è un <strong>dolore reale</strong>: la sensazione di <strong>perdere il controllo su piccole uscite quotidiane</strong> non visibili sui normali estratti conto.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>2. La Soluzione: L'AI da \"Strumento\" ad \"Assistente Invisibile\"</h3><p>L’adozione dell’IA in Italia ha superato la fase sperimentale: il mercato dell’AI vale oltre <strong>1,8 miliardi di euro</strong> nel 2025.</p><h4>2.1 Dalla complessità alla conversazione</h4><p>L’<strong>interfaccia conversazionale</strong> è diventata uno standard: l’utente non vuole più grafici a torta complessi, ma la possibilità di interagire con <strong>linguaggio naturale</strong> per ottenere <strong>insight immediati</strong>.</p><p><em>Fonte 1: <a href='https://www.osservatori.net/it/ricerche/osservatori-attivi/artificial-intelligence' target='_blank'>Politecnico di Milano – Artificial Intelligence 2025</a></em><br><em>Fonte 2: <a href='https://aspeninstitute.it/programma/artificial-intelligence/' target='_blank'>Aspen Institute Italia – Rapporto AI</a></em></p><h4>2.2 Fine del data entry manuale</h4><p>Il fallimento delle vecchie app di PFM era legato alla necessità di <strong>inserimento manuale</strong>. Oggi l’IA può <strong>categorizzare automaticamente</strong> transazioni grezze in <strong>linguaggio “umano”</strong> e <strong>prevenire l'overspending</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>3. L'Incrocio: Perché l'AI per il Risparmio Funziona Ora</h3><p>L’AI agisce come ponte tra bassa alfabetizzazione finanziaria e bisogno di controllo quotidiano.</p>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Fattore di interesse", "Ruolo dell’AI", "Impatto sull’utente"],
          rows: [
            ["<strong>Budgeting automatico</strong>", "Analizza i conti e identifica sprechi/abbonamenti.", "Toglie la <strong>fatica mentale</strong> della pianificazione."],
            ["<strong>Linguaggio semplice</strong>", "Traduce termini bancari in consigli chiari.", "Abbassa la barriera della <strong>scarsa competenza</strong>."],
            ["<strong>Forecasting</strong>", "Anticipa le spese future basandosi sullo storico.", "Riduce l’<strong>ansia da “sorpresa”</strong> a fine mese."]
          ]
        }
      },
      {
        type: 'text',
        data: {
          html: "<p><em>Fonte Correlata: <a href='https://www.anitec-assinform.it/' target='_blank'>Anitec-Assinform – Il Digitale in Italia 2024</a></em></p><h3>4. Considerazione Finale</h3><p><strong>C’è interesse per un’app di risparmio personale AI‑powered in Italia? SÌ.</strong></p><p>L’interesse è guidato dal bisogno di <strong>semplificazione e controllo</strong> su un flusso di spese digitali sempre più complesso. L’utente italiano medio si sente <strong>sopraffatto</strong>. Un’AI che agisca come un <strong>“Vigile del Portafoglio”</strong> risponde a un’urgenza reale del mercato.</p>"
        }
      }
    ]
  }
];

export const projectsEn: Project[] = [
  {
    id: "wolly-finance",
    category: "wolly",
    year: "2026",
    month: "04",
    day: "18",
    slug: "desk-research-the-new-era-of-personal-finance",
    title: "Desk research: The New Era of Personal Finance",
    description: "Desk Research: AI-Powered Personal Savings App in Italy - analyzing the saver's paradox and the AI solution.",
    date: "April 18, 2026",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          title: "Introduction",
          html: "<p>This document summarizes the <strong>market research</strong> conducted to answer one fundamental question: is there <strong>real interest</strong> in Italy for a savings and expense management app powered by <strong>Artificial Intelligence</strong>?</p><p>The analysis focuses exclusively on <strong>personal and family finance</strong>, excluding corporate contexts or advanced investment strategies.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>1. The Need: The Paradox of the Italian Saver</h3><p>In Italy, money management is not perceived as a technical discipline, but as an <strong>emotional burden</strong> marked by <strong>guilt, anxiety, and a sense of chaos</strong>.</p><h4>1.1 Great savers, poor managers</h4><p>The <a href='https://edufinindex.it/' target='_blank'><strong>Edufin Index 2024</strong></a> (<strong>56/100</strong>) highlights a chronic inability to manage expense flows, with a significant gap between awareness and <strong>practical daily competence</strong>.</p><p><em>Source: Alleanza Assicurazioni – <a href='https://edufinindex.it/' target='_blank'>Edufin Index 2024 Report</a></em><br><em>In-depth: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Bank of Italy – Financial Literacy Surveys</a></em></p><h4>1.2 The “Subscription Economy” as a Trigger</h4><p>The <strong>25-44 age bracket</strong> is overwhelmed by subscriptions and <strong>micro-payments</strong>, but lacks a simple, centralized tool to <strong>\"organize\"</strong> these flows.</p><p><em>Source: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Bank of Italy – IACOFI Survey</a></em></p><h4>1.3 Demand for protection, not expertise</h4><p>The core interest is obtaining <strong>insurance against waste</strong>: a tool that <strong>protects savings</strong> by preventing <strong>daily “leakages”</strong> and unnecessary subscriptions.</p><p><strong>Section Summary:</strong> The interest is driven by a <strong>real pain point</strong>: the feeling of <strong>losing control over small digital expenses</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>2. The Solution: AI from \"Tool\" to \"Invisible Assistant\"</h3><p>AI adoption in Italy has surpassed the experimental phase: the market is worth over <strong>€1.8 billion</strong> in 2025.</p><h4>2.1 From complexity to conversation</h4><p><strong>Conversational interfaces</strong> have become standard: users want to interact using <strong>natural language</strong> to get <strong>immediate insights</strong>.</p><p><em>Source 1: <a href='https://www.osservatori.net/it/ricerche/osservatori-attivi/artificial-intelligence' target='_blank'>Politecnico di Milano – Artificial Intelligence 2025</a></em><br><em>Source 2: <a href='https://aspeninstitute.it/programma/artificial-intelligence/' target='_blank'>Aspen Institute Italia – AI Report</a></em></p><h4>2.2 The end of manual data entry</h4><p>Today, AI can <strong>automatically categorize</strong> raw transactions into <strong>“human” language</strong>, solving the failure of old manual PFM apps and <strong>preventing overspending</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>3. The Intersection: Why AI for Savings Works Now</h3><p>AI acts as a bridge between low financial literacy and the need for daily control.</p>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Interest Factor", "Role of AI", "Impact on User"],
          rows: [
            ["<strong>Automatic Budgeting</strong>", "Analyzes accounts and identifies waste.", "Removes <strong>mental fatigue</strong>."],
            ["<strong>Simple Language</strong>", "Translates terms into clear advice.", "Lowers the <strong>competence barrier</strong>."],
            ["<strong>Forecasting</strong>", "Anticipates future expenses.", "Reduces <strong>anxiety</strong>."]
          ]
        }
      },
      {
        type: 'text',
        data: {
          html: "<p><em>Related Source: <a href='https://www.anitec-assinform.it/' target='_blank'>Anitec-Assinform – Digital in Italy 2024</a></em></p><h3>4. Final Consideration</h3><p><strong>Is there interest in an AI-powered savings app in Italy? YES.</strong></p><p>The interest is driven by a need for <strong>simplification and control</strong>. The average user feels <strong>overwhelmed</strong>. An AI as a <strong>\"Wallet Guard\"</strong> responds to a real market need.</p>"
        }
      }
    ]
  }
];
