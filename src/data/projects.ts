export interface Project {
  id: string;
  category: string;
  subcategory?: 'desk-research' | 'primary-research' | 'product-design' | 'marketing-plan' | 'data-analysis';
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  }>;
}

export const projectsIt: Project[] = [

  {
    id: "wolly-primary-research-interpretation",
    category: "wolly",
    subcategory: "primary-research",
    year: "2026",
    month: "04",
    day: "28",
    slug: "test-di-mercato-interpretazione-dati-aprile-2026",
    title: "Test di Mercato: Interpretazione dei Dati",
    description: "Prima wave esplorativa con 6 rispondenti: il competitor reale di Wolly è la notifica push della banca, il freno è operativo non motivazionale, e il parsing AI è la condizione necessaria per l'esistenza del prodotto.",
    date: "28 Aprile 2026",
    coverImage: "/media/projects/wolly/primary-research-cover.jpg",
    content: [
      {
        type: 'text',
        data: {
          html: "<p><em>Questa è una prima fase esplorativa con un campione di 6 rispondenti validi. I dati non sono statisticamente rappresentativi e non intendono esserlo: l'obiettivo era identificare <strong>segnali qualitativi coerenti</strong>, non misurare distribuzioni. Le conclusioni vanno lette come ipotesi da validare in una seconda wave, non come certezze. Dove i segnali del <a href='/progetti/wolly/2026/04/21/user-research-validazione-problema-e-ai-trust' target='_self'><strong>form strategico</strong></a> convergono con la desk research secondaria, il grado di confidenza aumenta — ma viene indicato esplicitamente.</em></p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Sommario dei Dati",
          html: "<h3>Distribuzione per Ramo</h3><p>Il form prevedeva un filtro iniziale basato sul rapporto attuale con la gestione delle finanze:</p><ul><li><strong>Ramo B — \"Non utilizzo app, ma vorrei iniziare\":</strong> 4 rispondenti su 6.</li><li><strong>Ramo A — \"Utilizzo già regolarmente un app o strumento dedicato\":</strong> 2 rispondenti su 6.</li><li><strong>Ramo C e Ramo D:</strong> nessun rispondente.</li></ul>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Dato", "Ramo B (4 rispondenti)", "Ramo A (2 rispondenti)"],
          rows: [
            ["<strong>Obiettivo / Uso principale</strong>", "Overview semplice e chiara (2); Capire dove finiscono i soldi (1); Risparmiare (1)", "Risparmio (1); Analisi (1)"],
            ["<strong>Sistema attuale</strong>", "Notifiche della banca (3); Estratto conto saltuario (1)", "App della propria banca (entrambi)"],
            ["<strong>Freno / Fastidio principale</strong>", "Noia del caricamento manuale (3); Dubbio sull'effettiva utilità (1)", "Mancanza di personalizzazione (1); Categorie troppo rigide (1)"],
            ["<strong>Spesa per strumenti</strong>", "0 su 4 hanno provato strumenti in passato", "Entrambi utilizzano strumenti gratuiti"]
          ]
        }
      },
      {
        type: 'text',
        data: {
          title: "Metadati comportamentali",
          html: "<ul><li><strong>Dispositivo:</strong> 5 su 6 da mobile (predominanza iPhone).</li><li><strong>Metodo di pagamento:</strong> Prevalentemente digitale o mix; nessun utente \"cash only\".</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Il mercato non usa niente — e non è pigrizia",
          html: "<p>Il dato più rilevante è che chi non usa app si appoggia alle <strong>notifiche push della banca</strong>. È un sistema di ripiego che funziona quanto basta per non creare \"dolore\" immediato. Il <strong>competitor reale di Wolly non è un'altra app di budgeting</strong>, ma la notifica push che dice quanto hai speso senza però spiegare il contesto o il \"perché\".</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Il freno è operativo, non motivazionale",
          html: "<p>La \"noia del caricamento manuale\" è indicata come il freno principale dal <strong>75% del Ramo B</strong>. È una previsione di abbandono: l'utente vorrebbe il risultato ma teme di non saper sostenere l'abitudine. Il <strong>parsing AI diventa quindi la condizione necessaria per l'esistenza stessa del prodotto</strong> nella mente dell'utente.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Chi usa già qualcosa è soddisfatto — ma per il prezzo, non per le funzioni",
          html: "<p>Gli utenti già attivi usano strumenti gratuiti. La resistenza al pagamento è reale, ma il fastidio per le \"categorie troppo rigide\" della banca apre uno spiraglio: <strong>Wolly deve essere percepito come uno strumento qualitativamente diverso</strong>, capace di adattarsi alla semantica reale dell'utente.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "L'obiettivo è la visibilità, non il controllo",
          html: "<p>Il bisogno dominante è l'<strong>overview</strong>. Gli utenti non cercano un sistema di regole restrittive, ma uno \"specchio\" chiaro. Il messaggio di marketing più efficace sembra essere <em>\"Capisci finalmente dove vanno i tuoi soldi\"</em> piuttosto che <em>\"Risparmia di più\"</em>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Il pagamento digitale è già normalizzato",
          html: "<p>L'uso massiccio di pagamenti digitali valida l'ipotesi che il <strong>tracciamento automatico delle transazioni</strong> sarà percepito come un'estensione naturale del proprio comportamento, non come un'intrusione.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Conclusioni e Feature Prioritarie",
          html: "<h3>Zero frizione nell'ingresso</h3><p>Il <strong>parsing AI deve essere la prima interazione</strong>. Se l'onboarding richiede inserimento manuale, il prodotto perde contro la notifica bancaria.</p><p><em>Implicazione: L'utente deve sperimentare il parsing (via voce o foto) immediatamente, prima di tutorial o dashboard complesse.</em></p><h3>Overview immediata come output principale</h3><p>La Home deve offrire una <strong>lettura istantanea della situazione</strong>. L'Insight Engine (la frase AI giornaliera) è la feature con il maggior potenziale di retention, poiché fornisce un valore aggiunto che la banca non è in grado di generare.</p><h3>Il ruolo dell'AI deve essere invisibile ma sentito</h3><p>L'AI deve essere vissuta come un <strong>meccanismo fluido</strong>, non come un'etichetta di marketing. Bisogna vendere il risultato (<em>\"Registra in 5 secondi\"</em>) anziché il processo tecnologico. La soglia di tolleranza per errori di categorizzazione è bassa, data l'aspettativa ormai alta degli utenti mobile nel 2026.</p>"
        }
      }
    ]
  },

  {
    id: "wolly-base-demo",
    category: "wolly",
    subcategory: "product-design",
    year: "2026",
    month: "04",
    day: "26",
    slug: "costruire-la-demo-di-base-prima-dellarchitettura-ai",
    title: "Costruire la demo di base prima dell'architettura AI",
    description: "In attesa dei dati del form, si costruiscono le fondamenta dell'app: database dei movimenti, schermate principali e categorie di default. Un prototipo strutturato, non bello — e fatto apposta.",
    date: "26 Aprile 2026",
    coverImage: "/media/projects/wolly/demo app article/wolly-home-screen-demo.png",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>In attesa degli ultimi giorni per raccogliere nuove risposte dal form lanciato la settimana scorsa, l'obiettivo adesso è costruire le basi dell'app. Nonostante <strong>Wolly</strong> voglia essere innovativa e migliorare l'esperienza nella gestione delle spese personali, il prodotto deve partire dalle logiche convenzionali delle app di tracking — quelle che gli utenti già conoscono e si aspettano di trovare.</p><ul><li><strong>Input manuale delle spese</strong></li><li><strong>Overview in home del flusso di cassa</strong></li><li><strong>Lista filtrabile delle transazioni</strong> per categoria, sottocategoria e periodo</li><li><strong>Grafici sulla distribuzione delle spese</strong>, per capire dove vanno davvero i soldi</li></ul><p>Questo è il punto di partenza. Non perché sia il prodotto finale, ma perché serve una struttura solida e modulare su cui costruire tutto il resto senza dover ripartire da zero ogni volta.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Il database dei movimenti",
          html: "<p>Uno dei punti fondamentali di qualsiasi app di tracking è come vengono gestite le informazioni. I dati devono essere strutturati in modo da avere un <strong>valore semantico reale</strong> — non solo un elenco di numeri, ma informazioni che raccontano qualcosa sul comportamento di chi le inserisce.</p><p>L'obiettivo qui non è strafare. Le risposte del form potrebbero portare a modifiche anche profonde alla struttura, quindi la priorità è creare basi <strong>solide ma flessibili</strong>. La domanda centrale è: quali sono le informazioni che servono all'utente oggi, e che domani permetteranno di generare insight rilevanti?</p><h3>L'importo</h3><p>È la parte più ovvia ma fondamentale: ogni movimento è un'<strong>entrata o un'uscita</strong>, con un valore preciso. Senza questo, non esiste niente.</p><h3>La categoria e la sottocategoria</h3><p>Sono il livello di lettura più importante per capire le abitudini di spesa. La <strong>categoria</strong> dà una visione macro — salute, trasporti, shopping, svago. La <strong>sottocategoria</strong> va nel dettaglio — farmacia, bellezza personale, benzina, abbigliamento. Insieme permettono di capire non solo quanto si spende, ma <strong>dove e su cosa</strong>, che è la vera informazione utile.</p><h3>Il tempo</h3><p>Data e ora di ogni transazione permettono due cose: una buona organizzazione cronologica e la possibilità di individuare <strong>pattern nella spesa</strong>. Si spende di più nel weekend? Durante la pausa pranzo? Sotto le festività? Il tempo trasforma una lista di spese in una storia.</p><h3>Con chi</h3><p>Sapere se una spesa avviene in contesto sociale — e con chi — aggiunge una dimensione che nessuna app bancaria registra. Uscita a cena con amici, acquisto in famiglia, spesa da soli: sono <strong>comportamenti diversi, con logiche diverse</strong>.</p><h3>Dove</h3><p>La posizione — città, quartiere, indirizzo — permette di capire se si è in viaggio o nella routine quotidiana, e di collegare la spesa a un <strong>contesto geografico preciso</strong>. Un weekend fuori porta ha un profilo di spesa completamente diverso da una settimana normale.</p><p>Questi cinque livelli di informazione insieme raccontano molto di più di qualsiasi estratto conto bancario. Il punto critico però è uno: con quale frequenza l'utente inserirà davvero tutti questi dati? È una delle domande a cui il form sta cercando di rispondere.</p><p>Per ora si è creato un <strong>database locale</strong> che raccoglie queste informazioni in modo ordinato, con una struttura pensata per essere estesa senza stravolgere quello che già funziona.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Le schermate dell'app",
          html: "<p>Con il database impostato, il passo successivo è stato costruire le schermate principali — quelle che coprono il <strong>flusso base dell'utente</strong> dal momento in cui apre l'app.</p><h3>Dashboard</h3><p>È la prima cosa che si vede aprendo Wolly. Mostra il <strong>patrimonio totale</strong> — con la possibilità di nasconderlo per chi non vuole averlo sempre sotto gli occhi — e un sommario rapido di entrate e uscite filtrabili per settimana, mese, anno o tutto il periodo. C'è anche un grafico di tendenza e la lista delle ultime transazioni registrate. L'obiettivo è dare una <strong>fotografia immediata della situazione</strong> senza dover navigare l'app.</p>"
        }
      },
      {
        type: 'image',
        data: {
          src: "/media/projects/wolly/demo app article/wolly-home-screen-demo.png",
          caption: "La Dashboard di Wolly: overview del patrimonio e flussi di cassa."
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>Inserimento manuale</h3><p>La schermata di input è il cuore operativo dell'app in questa fase. Si inserisce l'importo, si sceglie se è un'entrata o un'uscita, si seleziona categoria e sottocategoria, si aggiunge la data e il metodo di pagamento. È anche possibile <strong>taggare le persone presenti</strong> e registrare la posizione. Più dati si inseriscono, più l'app ha materiale per costruire un'immagine precisa delle abitudini di spesa.</p><h3>Storico transazioni</h3><p>Una lista completa e <strong>filtrabile</strong> di tutti i movimenti registrati. Si può filtrare per periodo, categoria e sottocategoria, e accedere al dettaglio di ogni singola transazione.</p>"
        }
      },
      {
        type: 'image',
        data: {
          src: "/media/projects/wolly/demo app article/wolly-list-screen-demo.png",
          caption: "Storico movimenti: filtri avanzati per analizzare ogni singola spesa."
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>Hub statistiche</h3><p>La sezione dedicata all'analisi. Copre quattro aree: <strong>andamento del patrimonio nel tempo</strong>, analisi delle entrate, analisi delle uscite e confronto tra flusso in entrata e in uscita. È la parte dove i dati inseriti diventano leggibili e utili.</p>"
        }
      },
      {
        type: 'image',
        data: {
          src: "/media/projects/wolly/demo app article/wolly-graphics-screen-demo.png",
          caption: "Analytics Hub: andamento del patrimonio e distribuzione delle uscite."
        }
      },
      {
        type: 'text',
        data: {
          title: "Input manuale e categorie",
          html: "<p>Ho definito la struttura delle <strong>categorie e delle sottocategorie di default</strong> — quelle che l'utente trova già pronte all'apertura dell'app. Da lì in poi può inserire le transazioni manualmente, il che mi permette di testare il database in condizioni reali e capire se la struttura tiene.</p><p>Questo primo prototipo non è bello. È <strong>strutturato</strong>. Ed è esattamente quello che doveva essere in questa fase.</p><p>Se vuoi seguire lo sviluppo di Wolly, trovi tutti gli aggiornamenti qui sul blog. Il prossimo passo dipenderà da quello che emergerà dai dati del form — e ne parlerò non appena avrò qualcosa di concreto da raccontare.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-user-research",
    category: "wolly",
    subcategory: "primary-research",
    year: "2026",
    month: "04",
    day: "21",
    slug: "user-research-validazione-problema-e-ai-trust",
    title: "User Research: Validazione del Problema e AI Trust",
    description: "Ricerca qualitativa per identificare il Job to be Done fondamentale e validare l'automazione tramite AI come soluzione al tracking manuale.",
    date: "21 Aprile 2026",
    coverImage: "/media/projects/wolly/form article/wolly-research.png",
    content: [
      {
        type: 'text',
        data: {
          title: "Obiettivi della Ricerca",
          html: "<p>L'obiettivo di questa fase è raccogliere dati diretti dai potenziali utenti per orientare il design del prodotto. La ricerca mira a identificare l'unico compito fondamentale (<strong>Job to be Done</strong>) che l'app deve svolgere in modo eccellente per distinguersi, validando in particolare l'automazione tramite <strong>AI</strong> come soluzione alla frizione del tracking manuale.</p><p>👉 <strong>Contribuisci alla ricerca:</strong> Puoi vedere il progetto in pratica e aiutarci a raccogliere dati compilando il form ufficiale qui: <a href=\"https://wolly-finance.vercel.app/form\" target=\"_blank\"><strong>Wolly Finance Survey</strong></a>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Metriche e KPI di Riferimento",
          html: "<ul>\
<li><strong>Market Adoption (MA):</strong> Percentuale di utenti (target 25-40) che avvertono il bisogno di tracking.</li>\
<li><strong>Current Solution Gap (CSG):</strong> Identificazione dei limiti degli strumenti attuali (manualità, complessità).</li>\
<li><strong>User Orientation (UO):</strong> Prevalenza del risparmio conservativo rispetto all'investimento attivo.</li>\
<li><strong>AI Trust Factor (ATF):</strong> Propensione all'uso di algoritmi per la categorizzazione automatica.</li>\
<li><strong>Price Sensitivity (PS):</strong> Soglia di prezzo e categoria mentale degli abbonamenti \"irrinunciabili\".</li>\
<li><strong>Switching Cost (SC):</strong> Barriera legata al tempo di utilizzo e ai dati storici accumulati.</li>\
</ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Struttura del Form Strategico",
          html: "<h3>Main Question — Domanda Filtro</h3><p><em>Qual è il tuo rapporto attuale con la gestione digitale delle spese personali?</em></p><ul>\
<li>Utilizzo già regolarmente un'app o uno strumento dedicato → <strong>Ramo A</strong></li>\
<li>Non utilizzo app, ma vorrei iniziare a gestire meglio le mie finanze → <strong>Ramo B</strong></li>\
<li>Ho provato in passato, ma ho smesso → <strong>Ramo C</strong></li>\
<li>Non mi interessa monitorare le mie spese → <strong>Ramo D</strong></li>\
</ul>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>Analisi dei Rami</h3><h4>Ramo A — Utenti Attivi (Focus: Switching Cost & Automation)</h4><ul>\
<li><strong>A1-A3:</strong> Analisi delle abitudini e del tempo speso (frizione operativa).</li>\
<li><strong>A4 [AI Trust Factor]:</strong> Verifica se la categorizzazione è automatica o manuale.</li>\
<li><strong>A5:</strong> Identificazione dei \"pain points\" (Tempo, Dimenticanze, Rigidità).</li>\
<li><strong>A6 [Switching Cost]:</strong> Valutazione della fedeltà allo strumento attuale.</li>\
</ul><h4>Ramo B — Prospect (Focus: Current Solution Gap)</h4><ul>\
<li><strong>B1-B2:</strong> Obiettivi desiderati e metodi informali attuali (estratto conto, notifiche).</li>\
<li><strong>B3:</strong> Barriere all'entrata (noia, troppa scelta, costo).</li>\
</ul><h4>Ramo C — Churned (Focus: Retention & AI Validation)</h4><ul>\
<li><strong>C4-C5:</strong> Analisi del momento dell'abbandono (lavoro eccessivo, perdita del filo).</li>\
<li><strong>C6 [AI Trust Factor]:</strong> Domanda chiave sulla validazione dell'automazione come leva di retention.</li>\
</ul><h4>Ramo D — Non Interessati (Focus: User Orientation)</h4><ul>\
<li><strong>D1-D2:</strong> Analisi del mindset finanziario (risparmio futuro vs gestione attiva).</li>\
</ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Sezione Finale & Demografiche",
          html: "<p>La sezione finale raccoglie dati sull'età e sulle abitudini di pagamento (Digitale vs Contanti) per definire meglio il profilo tecnologico dell'utente ideale.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-finance",
    category: "wolly",
    subcategory: "desk-research",
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
          html: "<h3>Il Bisogno: Il Paradosso del Risparmiatore Italiano</h3><p>In Italia, la gestione del denaro non è vissuta come una disciplina tecnica, ma come un <strong>onere emotivo</strong> caratterizzato da <strong>senso di colpa, ansia e percezione di caos</strong>.</p><h4>Grandi risparmiatori, piccoli gestori</h4><p>L’<a href='https://edufinindex.it/' target='_blank'><strong>Edufin Index 2024</strong></a> (<strong>56/100</strong>) evidenzia un’<strong>insufficienza cronica</strong> nella capacità di gestire il flusso di spese, con una forte lacuna tra consapevolezza della necessità di risparmiare e <strong>competenza operativa quotidiana</strong>.</p><p><em>Fonte: Alleanza Assicurazioni – <a href='https://edufinindex.it/' target='_blank'>Rapporto Edufin Index 2024</a></em><br><em>Approfondimento: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Banca d’Italia – Indagini sull’alfabetizzazione finanziaria</a></em></p><h4>La “Subscription Economy” come trigger</h4><p>La fascia <strong>25‑44 anni</strong> è sommersa da abbonamenti e <strong>micro‑pagamenti</strong> (streaming, food delivery, app, servizi digitali), ma manca uno strumento semplice e centralizzato che <strong>“metta ordine”</strong> nei flussi, cosa che gli estratti conto bancari tradizionali non offrono.</p><p><em>Fonte: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Banca d’Italia – Indagine IACOFI</a></em></p><h4>Domanda di protezione, non di expertise</h4><p>L’interesse non è rivolto a diventare esperti di finanza, ma a ottenere un’<strong>assicurazione contro lo spreco</strong>: uno strumento che <strong>protegga il risparmio</strong> già accumulato, evitando <strong>piccoli “leakage” quotidiani</strong> e abbonamenti inutili.</p><p><strong>Sintesi della sezione:</strong> C’è interesse perché c’è un <strong>dolore reale</strong>: la sensazione di <strong>perdere il controllo su piccole uscite quotidiane</strong> non visibili sui normali estratti conto.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>La Soluzione: L'AI da \"Strumento\" ad \"Assistente Invisibile\"</h3><p>L’adozione dell’IA in Italia ha superato la fase sperimentale: il mercato dell’AI vale oltre <strong>1,8 miliardi di euro</strong> nel 2025.</p><h4>Dalla complessità alla conversazione</h4><p>L’<strong>interfaccia conversazionale</strong> è diventata uno standard: l’utente non vuole più grafici a torta complessi, ma la possibilità di interagire con <strong>linguaggio naturale</strong> per ottenere <strong>insight immediati</strong>.</p><p><em>Fonte 1: <a href='https://www.osservatori.net/it/ricerche/osservatori-attivi/artificial-intelligence' target='_blank'>Politecnico di Milano – Artificial Intelligence 2025</a></em><br><em>Fonte 2: <a href='https://aspeninstitute.it/programma/artificial-intelligence/' target='_blank'>Aspen Institute Italia – Rapporto AI</a></em></p><h4>Fine del data entry manuale</h4><p>Il fallimento delle vecchie app di PFM era legato alla necessità di <strong>inserimento manuale</strong>. Oggi l’IA può <strong>categorizzare automaticamente</strong> transazioni grezze in <strong>linguaggio “umano”</strong> e <strong>prevenire l'overspending</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>L'Incrocio: Perché l'AI per il Risparmio Funziona Ora</h3><p>L’AI agisce come ponte tra bassa alfabetizzazione finanziaria e bisogno di controllo quotidiano.</p>"
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
          html: "<p><em>Fonte Correlata: <a href='https://www.anitec-assinform.it/' target='_blank'>Anitec-Assinform – Il Digitale in Italia 2024</a></em></p><h3>Considerazione Finale</h3><p><strong>C’è interesse per un’app di risparmio personale AI‑powered in Italia? SÌ.</strong></p><p>L’interesse è guidato dal bisogno di <strong>semplificazione e controllo</strong> su un flusso di spese digitali sempre più complesso. L’utente italiano medio si sente <strong>sopraffatto</strong>. Un’AI che agisca come un <strong>“Vigile del Portafoglio”</strong> risponde a un’urgenza reale del mercato.</p>"
        }
      }
    ]
  },
  {
    id: "startup-budget-marketing",
    category: "marketing",
    year: "2026",
    month: "04",
    day: "23",
    slug: "marketing-digitale-startup-budget-basso",
    title: "Marketing per Startup con Budget Basso: Da Dove Iniziare",
    description: "Vuoi fare marketing per la tua startup ma hai poco budget? Scopri come identificare il target, scegliere i canali giusti e testare le tue idee senza sprechi.",
    date: "23 Aprile 2026",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text' as const,
        data: {
          html: "<p>Scopri come lanciare la <strong>strategia di marketing della tua startup</strong> senza grandi investimenti. Una guida pratica su come identificare il target, scegliere i canali giusti e <strong>testare prima di scalare</strong>.</p><p>Non serve un budget enorme per fare marketing digitale. <strong>Serve l'ordine giusto.</strong> Spesso, le startup falliscono non per mancanza di fondi, ma perch\u00e9 disperdono le poche risorse in troppe direzioni. Vediamo come costruire una base solida partendo da zero.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 1: Chi stai cercando di raggiungere?",
          html: "<p>Prima di scegliere qualsiasi canale o strumento, la domanda fondamentale \u00e8 una: <strong>a chi stai parlando?</strong></p><p>Non \"le PMI\" o \"i founder under 35\". Una <strong>persona specifica</strong>, con un <strong>problema specifico</strong> e un'<strong>urgenza reale</strong>. Definire questo punto con precisione \u00e8 il prerequisito di qualsiasi strategia di marketing digitale per startup.</p><p>Chiediti chi \u00e8 il tuo cliente ideale, cosa sa gi\u00e0 del problema che risolvi e quale risultato concreto vuole ottenere. Le persone non comprano prodotti: <strong>comprano miglioramenti</strong>. Pi\u00f9 sei preciso su questo, meno budget ti serve per raggiungerle.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 2: Scegli un canale solo",
          html: "<p>Con un budget basso la tentazione \u00e8 essere ovunque. \u00c8 <strong>l'errore pi\u00f9 comune nel digital marketing per startup</strong>: LinkedIn, Instagram, blog, newsletter, TikTok — tutti insieme, tutti male.</p><p>Ogni canale richiede tempo per capirne i meccanismi, testare i messaggi e costruire un'audience. <strong>Distribuire energia su cinque canali significa non imparare niente su nessuno.</strong></p><p>La domanda giusta \u00e8: dove si trova il mio cliente nel momento in cui \u00e8 pi\u00f9 ricettivo? Se vendi B2B, quasi sempre \u00e8 <strong>LinkedIn</strong>. Se il problema che risolvi viene cercato attivamente su Google, \u00e8 <strong>SEO e blog</strong>. Scegli quello. Presidialo per tre o quattro mesi. Quando vedi segnali concreti, aggiungi il secondo.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 3: Crea contenuto che risponde a domande reali",
          html: "<p>Una delle strategie di <strong>marketing a basso costo</strong> pi\u00f9 efficaci per le startup \u00e8 il <strong>content marketing</strong>: costa quasi zero se lo fai internamente, e costruisce fiducia nel tempo.</p><p>Il principio \u00e8 semplice: <strong>rispondi alle domande che il tuo cliente si fa prima ancora di sapere che esisti.</strong> Non scrivere di quanto \u00e8 innovativo il tuo prodotto. Scrivi del problema — descrivilo con tale precisione che chi lo vive pensi \"questa persona capisce esattamente la mia situazione.\"</p><p>Come trovi le domande giuste? Leggi le discussioni nelle community di settore, guarda le recensioni negative dei competitor, parla con potenziali clienti.</p><p><em>Nota: questo \u00e8 esattamente l'approccio usato per la <a href=\"/progetti/wolly/2026/04/21/user-research-validazione-problema-e-ai-trust\">user research di Wolly</a> — partire dalle domande reali degli utenti per costruire contenuto e posizionamento.</em></p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 4: Testa prima di scalare",
          html: "<p>Prima di investire tempo o budget su un'idea, <strong>validala in piccolo</strong>. Questo \u00e8 il cuore del <strong>growth marketing applicato alle startup con risorse limitate</strong>: non ottimizzare qualcosa che non sai ancora se funziona.</p><ul><li>Hai un'idea per un articolo? Pubblicala prima come <strong>post LinkedIn</strong> e guarda l'engagement.</li><li>Vuoi lanciare una campagna email? Mandala a un <strong>sottoinsieme della lista</strong> e controlla aperture e click.</li><li>Stai pensando a un formato di contenuto nuovo? Fai una <strong>versione minima</strong> prima di costruire quella definitiva.</li></ul><p>Questi micro-test costano pochissimo in termini di tempo e <strong>zero in termini di budget marketing</strong>, ma ti dicono con precisione cosa vale la pena sviluppare.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 5: Misura poche cose, ma quelle giuste",
          html: "<p>Con un budget basso \u00e8 fondamentale sapere <strong>cosa sta funzionando</strong>. Scegli <strong>due o tre metriche</strong> direttamente collegate all'obiettivo e monitorale con costanza.</p><ul><li>Se l'obiettivo \u00e8 acquisire contatti qualificati: <strong>traffico sul sito, tasso di conversione, fonte del traffico</strong>.</li><li>Se stai costruendo un'audience su LinkedIn: <strong>reach e engagement rate</strong> per post.</li></ul><p>Il punto non \u00e8 la perfezione dei dati — \u00e8 <strong>prendere decisioni basate su qualcosa di reale</strong>, non sull'istinto. Quando una cosa funziona, investi pi\u00f9 tempo l\u00ec. Quando dopo tre mesi un canale non d\u00e0 segnali, <strong>lascialo andare</strong> e concentra le risorse altrove.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Vuoi integrare nel tuo team una figura che fa marketing?",
          html: "<p>Se stai costruendo qualcosa a <strong>Milano o Monza</strong> — team piccolo, budget limitato, voglia di fare le cose con metodo — <strong>parliamone e vediamo come posso dare una mano.</strong></p><p>Sono un <strong>junior marketer con focus su growth marketing per startup</strong>. Ho applicato questi stessi principi in contesti reali: da <a href=\"/esperienze/naxa\"><strong>Naxa</strong></a> (startup hospitality, strategia da zero) a <a href=\"/esperienze/fridhem-center\"><strong>Fridhem Center</strong></a> (brand positioning internazionale), fino alla <a href=\"/progetti/wolly\">validazione di prodotto per Wolly</a>.</p><p>Se stai pensando di inserire qualcuno che gestisca il <strong>marketing digitale in autonomia</strong>, <a href=\"mailto:alegentilejob@gmail.com\"><strong>scrivimi</strong></a>.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-competitor-analysis",
    category: "wolly",
    subcategory: "marketing-plan",
    year: "2026",
    month: "05",
    day: "03",
    slug: "analisi-competitor-scenario-italia-2026",
    title: "Analisi dei Competitor — Scenario Italia 2026",
    description: "Il mercato italiano del 2026 è saturo di strumenti ma privo di compagni. Un'analisi a due livelli: i giganti bancari (competitor indiretti) e le app AI di finanza personale (competitor diretti) per identificare dove differenziarsi.",
    date: "3 Maggio 2026",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>Il mercato italiano del 2026 è <strong>saturo di strumenti ma privo di compagni</strong>. Questa analisi mappa il panorama competitivo su due livelli: i grandi player bancari (competitor indiretti, per abitudine d'uso) e le app AI di finanza personale (competitor diretti, per sovrapposizione di funzione) per identificare dove Wolly può costruire un vantaggio reale e difendibile.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "I Giganti Bancari (Competitor Indiretti)",
          html: "<p>Questi attori possiedono i dati e la fiducia, ma soffrono di un limite strutturale: sono percepiti come <strong>istituzioni, non come compagni di vita</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Intesa Sanpaolo Mobile",
          html: "<p>Il <strong>leader assoluto</strong> del mercato retail italiano. Rappresenta il \"muro\" contro cui Wolly si scontra a livello di abitudine d'uso.</p><ul><li><strong>Numeri:</strong> 8M di download, 13,9M clienti. Leader per depositi e prestiti.</li><li><strong>Funzionalità:</strong> Gestione aggregata multi-conto, categorizzazione automatica delle spese tramite AI, previsioni di budget e alert personalizzati.</li></ul><h3>Identità Visiva</h3><ul><li><strong>Archetipo:</strong> Sovrano / Saggio.</li><li><strong>Visual:</strong> Verde istituzionale (<code>#0F6735</code>) e font Trajan (ispirato alla Colonna Traiana). Comunica stabilità, potere e permanenza.</li></ul><p><strong>Punto Debole per Wolly:</strong> Il Tono di Voce (ToV) è <strong>freddo, autoritario e privo di empatia</strong>. È \"la banca nell'app\", non un alleato che ti capisce.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Hype (Gruppo Banca Sella)",
          html: "<p>La neobank \"challenger\" che ha educato gli under-35 alla gestione digitale dei soldi.</p><ul><li><strong>Numeri:</strong> 3M+ download. Primo player fintech per crescita tra i giovani.</li><li><strong>Funzionalità:</strong> La funzione <em>Radar</em> aggrega conti diversi e monitora i trend di spesa. Offre cashback e P2P gratuito.</li></ul><h3>Identità Visiva</h3><ul><li><strong>Visual:</strong> Blu Sella (<code>#0033CC</code>) e Verde Calm. Font custom sans-serif moderno.</li><li><strong>ToV:</strong> Empowering, tech-savvy e diretto. <em>\"Money is just a tool\"</em>.</li></ul><p><strong>Punto Debole per Wolly:</strong> Nonostante l'innovazione, rimane percepito come un \"conto\" (una commodity). <strong>Manca la narrazione emotiva</strong> della gestione quotidiana.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "BUDDY (UniCredit)",
          html: "<p>Il tentativo di UniCredit di umanizzare il banking attraverso un modello mobile-first.</p><ul><li><strong>Numeri:</strong> 5M download cumulativi, 410K utenti attivi.</li><li><strong>Funzionalità:</strong> Analisi della liquidità, report lifestyle (viaggi/esperienze) e chat umana 24/7.</li><li><strong>ToV:</strong> Amichevole e conversazionale. Si posiziona come \"banca-compagno di vita\".</li></ul><p><strong>Punto Debole per Wolly:</strong> È un \"ibrido\". Tenta l'approccio amichevole ma <strong>resta vincolato alla rigidità dei processi UniCredit</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "App AI di Finanza Personale (Competitor Diretti)",
          html: "<p>Questo segmento è composto da app tecnicamente avanzate ma <strong>emotivamente vuote</strong>. Qui Wolly ha lo spazio maggiore per differenziarsi.</p><h3>Sintesi Trasversale: Il \"Vuoto\" di Mercato</h3><p>Analizzando DailyCoin, TrackCent e The Budget, emergono tre criticità comuni:</p><ul><li><strong>Anonimato di Brand:</strong> Sono \"vibe-coded\" (costruite su template standard). Non hanno una voce, una mascotte o un'identità riconoscibile.</li><li><strong>Assenza di Narrativa:</strong> Le pagine store sono screenshot statici. Non raccontano una storia, vendono solo feature.</li><li><strong>Tono da Consulente:</strong> Cercano di educare l'utente (\"Dovresti risparmiare\") invece di accompagnarlo (\"Capisco come ti senti\").</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "DailyCoin",
          html: "<p>L'app più recente e orientata alla \"quantità\" di funzioni.</p><ul><li><strong>Focus:</strong> Input vocale AI multiplo (\"Colazione 10, Taxi 30\").</li><li><strong>Tecnica:</strong> Cambia modello AI (Gemini, DeepSeek) in base alla necessità. Molto completa (crypto, investimenti, Apple Watch).</li><li><strong>Criticità:</strong> Pricing confuso (settimanale/annuale/lifetime) e zero layer semantico. Registra l'importo, ma <strong>non capisce il perché della spesa</strong>.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "TrackCent",
          html: "<p>Il competitor più vicino al posizionamento \"Vivi e basta\" di Wolly.</p><ul><li><strong>Focus:</strong> Parsing estremo degli scontrini fotografati in qualsiasi lingua.</li><li><strong>Promessa:</strong> \"Smetti di tracciare, vivi\".</li><li><strong>Criticità:</strong> Il modello freemium è castrante (solo 14 scansioni AI al mese). L'insight AI è un paragrafo di testo generico, <strong>non una frase contestuale calda</strong>.</li></ul>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Feature", "Banche (Intesa/Buddy)", "AI App (DailyCoin/TrackCent)", "Wolly"],
          rows: [
            ["<strong>Dati</strong>", "Automatici (PSD2)", "Manuali / Parsing Foto", "Ibridi / Parsing Invisibile"],
            ["<strong>Identità</strong>", "Istituzionale (Fredda)", "Anonima (Tecnica)", "Uomo Comune (Calda)"],
            ["<strong>Tono</strong>", "Autorevole / Distante", "Neutro / Utility", "Empatico / Amichevole"],
            ["<strong>Insight</strong>", "Grafici a torta", "Report scritti da AI", "Frase Narrativa (Wrapped)"],
            ["<strong>Velocità</strong>", "Bassa (Login lungo)", "Media (Focus su input)", "Alta (Target 10 secondi)"]
          ]
        }
      },
      {
        type: 'text',
        data: {
          title: "Conclusioni: L'opportunità per Wolly",
          html: "<p>Il mercato italiano del 2026 è saturo di strumenti ma privo di compagni.</p><h3>Brand Identity come Barriera</h3><p>Wolly non deve competere sulle feature (il parsing lo fanno tutti), ma <strong>sull'emozione</strong>. Un'identità visiva coerente (stile Headspace) e un ToV da \"Uomo Comune\" creano un legame che i competitor di Hong Kong o dell'Est Europa non possono replicare.</p><h3>Insight vs Dati</h3><p>Mentre gli altri mostrano quanti soldi hai speso in \"Cibo\", Wolly deve dirti <strong>perché quel martedì sera hai scelto il delivery</strong>. L'insight comportamentale è il vero valore.</p><h3>Pricing Trasparente</h3><p>Il trial completo di 14 giorni di Wolly è un vantaggio contro i freemium limitati di TrackCent che <strong>frustrano l'utente proprio quando inizia a fidarsi</strong>.</p><h3>Wolly's Edge</h3><p>Dove gli altri offrono un <em>\"Financial Advisor\"</em> (noioso), Wolly offre un <em>\"Amico che sa fare i conti\"</em> (indispensabile).</p>"
        }
      }
    ]
  },
  {
    id: "wolly-buyer-persona",
    category: "wolly",
    subcategory: "marketing-plan",
    year: "2026",
    month: "05",
    day: "06",
    slug: "buyer-persona",
    title: "Buyer Persona",
    description: "Profilo del cliente target basato sulla ricerca primaria: 25–35 anni, area urbana, paga in digitale. Cerca chiarezza sulle proprie spese senza la fatica del caricamento manuale.",
    date: "6 Maggio 2026",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          title: "Nota Metodologica",
          html: "<p>Questa persona è costruita sui dati certi emersi dalla ricerca primaria (6 rispondenti, aprile 2026) e dalla desk research secondaria. Dove i dati non coprono, il campo non viene assunto — viene lasciato aperto per la seconda wave di ricerca. L'obiettivo di questo documento è fornire una base sufficiente per le decisioni di system design, UI e UX, non una profilazione psicografica completa.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Chi è",
          html: "<p>Uomo o donna, 25–35 anni, residente in area urbana italiana. Lavora, ha un reddito stabile e autonomo. Non gestisce finanze condivise con famiglia o partner in modo strutturato — le sue spese sono prevalentemente personali. Ha uno smartphone, lo usa intensivamente, paga quasi sempre in digitale.</p><p>Non usa nessuna app di finanza personale. Non ne ha mai usata una in modo continuativo. Non è disinteressato alla propria situazione finanziaria — sa che dovrebbe avere più chiarezza, ma non ha ancora trovato uno strumento che valesse lo sforzo di iniziare.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Comportamento Attuale",
          html: "<p>Il suo sistema di monitoraggio delle spese oggi è la notifica push della banca. Riceve la notifica, la legge, la chiude. Questo gli dà la conferma che la spesa è avvenuta — non gli dice niente sul contesto, sul pattern, sul perché.</p><p>Saltuariamente apre l'app della banca per guardare l'estratto conto. Non è un'abitudine strutturata — succede quando qualcosa lo preoccupa o quando è a fine mese e vuole capire dove è finito il denaro. Questo momento genera spesso una sensazione vaga di sorpresa o disagio, non ansia acuta.</p><p>Paga prevalentemente con carta o telefono. L'uso del contante è marginale o assente. Questo significa che tutte le sue transazioni esistono già in forma digitale da qualche parte — ma non in un posto che le renda leggibili come comportamento.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Obiettivo Dichiarato",
          html: "<p>Vuole una overview chiara e semplice di dove vanno i suoi soldi. Non vuole diventare esperto di finanza personale. Non cerca un sistema di regole o un budget rigido. Vuole uno specchio — una lettura immediata della propria situazione senza doverla costruire da solo.</p><p>Il bisogno non è risparmiare di più. È capire. Il risparmio è una conseguenza possibile, non il punto di partenza.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Freno Principale",
          html: "<p>Sa già che il caricamento manuale lo annoierà. Non è una paura vaga — è una previsione concreta basata su come conosce se stesso. Ha probabilmente già immaginato lo scenario: scarica l'app, inserisce le prime tre spese, dimentica di inserire la quarta, si sente in ritardo, smette.</p><p>Questo freno non è motivazionale — vuole il risultato. È operativo — non crede di riuscire a sostenere l'abitudine richiesta dallo strumento. La distinzione è critica per il design: non bisogna convincerlo che vale la pena, bisogna eliminare la fatica che teme.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Relazione con la Tecnologia",
          html: "<p>Usa lo smartphone come strumento primario per quasi tutto. È abituato a interfacce veloci e immediate — la sua soglia di tolleranza per la lentezza o la complessità è bassa. Non legge tutorial. Non esplora menu. Se qualcosa non è ovvio al primo contatto, passa oltre.</p><p>Ha app installate che non apre da settimane. Sa cos'è il freemium. Ha probabilmente già pagato almeno un abbonamento app in passato. Non è contrario a pagare per qualcosa che funziona — ma il valore deve essere percepito prima del pagamento, non promesso.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Relazione con il Denaro",
          html: "<p>Non è in crisi finanziaria. Ha un reddito che gli permette di vivere e spendere senza emergenze frequenti. Proprio per questo il dolore non è acuto — è sordo. Non è <em>\"non riesco ad arrivare a fine mese\"</em>, è <em>\"non so bene dove finiscono i soldi e ogni tanto mi sorprendo\"</em>.</p><p>Non cerca expertise finanziaria. Non vuole imparare a investire o ottimizzare il portafoglio. Vuole semplicemente non essere sorpreso dalla propria situazione a fine mese.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Cosa lo Attiva",
          html: "<p>Un momento di sorpresa — una spesa più alta del ricordato, un mese che è andato diversamente da come pensava. Non una crisi: una piccola frizione tra quello che credeva di spendere e quello che ha effettivamente speso.</p><p>In quel momento è ricettivo. Se incontra Wolly lì — nel messaggio giusto, nel canale giusto — la probabilità di download è alta. Se lo incontra in un momento neutro, senza quel trigger, la probabilità scende.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Cosa lo Fa Restare",
          html: "<p>Non la completezza dei dati. Non i grafici. La frase AI giornaliera — l'unica cosa che la banca non gli darà mai. Se quella frase è pertinente, specifica, non generica, e arriva nel momento giusto, diventa il motivo per aprire l'app ogni giorno. Se è generica o sbagliata, diventa il motivo per smettere.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Implicazioni per UI e UX",
          html: "<ul><li><strong>Prima schermata dopo l'onboarding:</strong> deve mostrare un dato reale, non uno stato vuoto. L'utente deve vedere immediatamente il prodotto al lavoro — non una dashboard vuota che aspetta i suoi input.</li><li><strong>Azione principale sempre visibile:</strong> registrare una spesa deve essere raggiungibile in un tap da qualsiasi schermata. Non nel menu. Non dopo uno scroll. Sempre visibile.</li><li><strong>Nessuna schermata di configurazione iniziale:</strong> ogni minuto speso a impostare l'app prima di vedere un risultato aumenta la probabilità di abbandono. L'onboarding deve portare alla prima spesa registrata, non alla prima preferenza selezionata.</li><li><strong>Feedback immediato post-parsing:</strong> dopo aver registrato una spesa, l'utente deve vedere subito cosa l'app ha capito. Non un loader. Non un messaggio generico di successo. Il risultato concreto del parsing — categoria, importo, contesto — visibile in meno di 3 secondi.</li><li><strong>Nessun colore rosso, nessun linguaggio di allerta:</strong> questo utente non è in emergenza e non vuole essere trattato come se lo fosse. Il rosso e il linguaggio di allerta attivano ansia dove non ce n'è bisogno e rompono il tono del prodotto.</li><li><strong>Gerarchia dell'informazione in Home:</strong> un numero principale leggibile a colpo d'occhio, una frase AI, tre transazioni recenti. Tutto il resto è nelle schermate di dettaglio. La Home risponde a una domanda sola: come sto andando?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Cosa Questo Documento Non Dice Ancora",
          html: "<p>La persona non è completa. Mancano dati certi su: livello di reddito specifico e pattern di risparmio, categorie di spesa dominanti, contesto sociale delle spese (solo vs gruppo), relazione emotiva precisa col denaro (ansioso vs curioso vs indifferente), e trigger di attivazione specifici per canale. Questi elementi verranno definiti nella seconda wave di ricerca primaria e integrati in una versione v2 di questo documento prima dello sviluppo delle feature v2.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Checklist di Sviluppo",
          html: "<p>Ogni nuovo elemento passa questi step, in ordine.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Allineamento con la Persona",
          html: "<ul><li>Questo elemento esiste perché la persona ne ha bisogno o perché è interessante tecnicamente?</li><li>Risolve il freno operativo o lo aumenta?</li><li>È comprensibile senza spiegazione al primo contatto?</li><li>Si rivolge a chi vuole visibilità, non controllo?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Allineamento con i Principi Core",
          html: "<ul><li>È raggiungibile in massimo 2 tap dalla Home?</li><li>L'azione principale è visibile senza scroll o menu?</li><li>Richiede meno di 10 secondi per essere completata?</li><li>Aggiunge complessità visiva alla Home? Se sì, appartiene a Stats o a una schermata di dettaglio.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Allineamento con il Tono",
          html: "<ul><li>Il copy usa parole vietate? (budget, dovresti, ottimo lavoro, ti consiglio, obiettivo)</li><li>Il tono è diretto e informale o è scivolato verso il formale?</li><li>Gli stati di errore e i messaggi vuoti hanno un tono coerente con il resto?</li><li>C'è un colore rosso o un linguaggio di allerta non necessario?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Parsing e Dati",
          html: "<ul><li>Se questo elemento dipende dal parsing, cosa succede se il parser sbaglia?</li><li>Se la confidence è sotto 0.7, è prevista una richiesta di conferma esplicita?</li><li>Se GPT non risponde, c'è un fallback dalla cache?</li><li>I dati mostrati usano sempre net_amount e mai gross_amount dove rilevante?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Stati Limite",
          html: "<ul><li>Cosa vede l'utente se non ha ancora transazioni?</li><li>Cosa vede se è il primo giorno di utilizzo?</li><li>Cosa succede senza connessione?</li><li>Cosa succede se il dato atteso non esiste ancora?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Posizione nell'Architettura",
          html: "<ul><li>È un servizio core o un servizio futuro? Se futuro, è il momento giusto?</li><li>Dipende da una feature non ancora costruita?</li><li>Introduce dipendenze tecniche che complicano lo sviluppo futuro?</li><li>È modulare — può essere aggiornato senza toccare il resto?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Impatto sulla Retention",
          html: "<ul><li>Questo elemento aumenta la probabilità che l'utente torni domani?</li><li>È il tipo di cosa che la banca non può dare?</li><li>Se sparisse, l'utente se ne accorgerebbe?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Verifica Finale",
          html: "<ul><li>Può essere semplificato ulteriormente senza perdere valore?</li><li>Un utente che lo vede per la prima volta capisce cosa fa senza leggere niente?</li><li>È coerente con tutto ciò che è già nell'app?</li></ul>"
        }
      }
    ]
  },
  {
    id: "wolly-brand-strategy",

    category: "wolly",
    subcategory: "marketing-plan",
    year: "2026",
    month: "05",
    day: "08",
    slug: "brand-strategy-document",
    title: "Brand Strategy Document",
    description: "Archetipo, Differenziazione & Direzione Visiva. L'app incarna l'archetipo dell'Uomo Comune: uno strumento che parla la tua lingua, non quella di un consulente finanziario.",
    date: "8 Maggio 2026",
    coverImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>Archetipo, Differenziazione & Direzione Visiva</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "L'Archetipo: Uomo Comune",
          html: "<p>Wolly incarna l'archetipo dell'<strong>Uomo Comune</strong> nella sua accezione più profonda: l'idealista deluso che ha scelto di stare con i piedi per terra.</p><ul><li><strong>Il suo atto eroico:</strong> Assumersi la responsabilità della propria vita quotidiana, un giorno alla volta, senza proclami.</li><li><strong>Il Buyer Persona:</strong> Qualcuno che cerca chiarezza sui propri soldi ma non si fida di soluzioni che lo facciano sentire inadeguato o giudicato. Cerca uno strumento che \"parli la sua lingua\" e non quella di un consulente finanziario.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Strategia di Differenziazione: Wolly vs La Banca",
          html: "<p>Il vero competitor di Wolly non è un'altra app di budgeting, ma la notifica push della banca.</p><ul><li><strong>La Banca:</strong> Fredda, neutra, istituzionale. È un sistema che comunica dati, non una voce che comunica supporto.</li><li><strong>Wolly:</strong> Deve essere l'antitesi visiva e relazionale di quella freddezza. Il valore di Wolly risiede nel fatto che l'utente, aprendola, sente immediatamente di non essere in un ambiente bancario. Il calore non è un decoro, è l'argomento di vendita che giustifica il prezzo.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Modello di Riferimento: La Tensione Creativa",
          html: "<p>La direzione di Wolly nasce dall'unione di due poli opposti ma complementari:</p>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Riferimento", "Ruolo", "Caratteristica da mutuare"],
          rows: [
            ["Headspace", "Narrativa Visiva", "Coerenza del tono, forme organiche, sensazione di essere accompagnati e mai giudicati."],
            ["Things 3", "Architettura d'Interazione", "Velocità d'esecuzione, rigore strutturale, efficienza estrema nel task."]
          ]
        }
      },
      {
        type: 'text',
        data: {
          html: "<p><strong>Il Vincolo Fondamentale:</strong> Wolly deve essere <em>\"Morbido ma Veloce\"</em>. Se Headspace rallenta intenzionalmente l'utente, Wolly deve accoglierlo con lo stesso calore ma permettergli di chiudere il task in meno di 10 secondi.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Il Messaggio Centrale",
          html: "<p>L'Uomo Comune dice: <em>\"Io sono come te. Essere normali è ok.\"</em></p><p>Tradotto per Wolly: <strong>\"Non devi diventare bravo con i soldi. Devi solo capire dove vanno i tuoi.\"</strong></p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Implicazioni sul Visual",
          html: "<ul><li><strong>Forme e Linee:</strong> Abbandonare il rigore geometrico del fintech per esplorare forme organiche e illustrazioni che sembrino \"fatte a mano\" (stile Headspace). Questo comunica che dietro l'app c'è una persona, non un algoritmo freddo.</li><li><strong>Font:</strong> Umanist sans-serif calda (DM Sans o Plus Jakarta Sans). I pesi devono creare una conversazione, non un report.</li><li><strong>Colori:</strong> Palette desaturata e quotidiana (verde salvia, terracotta morbida, blu slate). Evitare i colori \"allerta\" (rosso banca) o \"successo\" (verde neon).</li><li><strong>Velocità Visiva:</strong> Il calore non deve mai tradursi in animazioni superflue che rallentano l'inserimento dati. La \"morbidezza\" è nell'estetica, la \"velocità\" è nell'architettura.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Il Tono di Voce",
          html: "<p>Semplice, diretto, confidenziale.</p><ul><li><strong>La Frase AI Giornaliera:</strong> Parla come un amico curioso che ha dato un'occhiata all'estratto conto. Non dà consigli non richiesti, non fa il coach.</li><li><strong>Parole Vietate:</strong> Budget, dovresti, ti consiglio, ottimo lavoro, obiettivo. Queste appartengono al registro del \"Sovrano\" o del \"Saggio\", non dell'Uomo Comune.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Domande Aperte — Da Risolvere",
          html: "<ul><li><strong>Registro Visivo specifico:</strong> Wolly è più vicino alla morbidezza del Mulino Bianco o all'essenzialità diretta di Levi’s?</li><li><strong>La Frase AI:</strong> Deve avere un contenitore visivo dedicato (una card \"morbida\") o vivere nel flusso come testo puro per massimizzare la velocità?</li><li><strong>Il Colore di Accento:</strong> Quale colore desaturato garantisce la migliore leggibilità in Dark Mode senza perdere il calore dell'Uomo Comune?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Prossimi Passi",
          html: "<ul><li><strong>Costruzione Mood Board:</strong> Creazione di un binario visivo che metta a confronto la narrativa di Headspace con l'architettura di Things 3.</li><li><strong>Test 10 Secondi:</strong> Validazione dei wireframe per assicurarsi che l'estetica \"morbida\" non interferisca con la velocità d'uso.</li><li><strong>Test Visivo Beta:</strong> Sottoporre ai tester i due registri (Caldo/Avvolgente vs Diretto/Essenziale) per definire il colore accentuato.</li></ul>"
        }
      }
    ]
  },
  {
    id: "wolly-kpi-tracking",
    category: "wolly",
    subcategory: "data-analysis",
    year: "2026",
    month: "06",
    day: "03",
    slug: "tracciamento-e-analisi-dei-principali-kpi",
    title: "Tracciamento e analisi dei principali KPI",
    description: "La fase di impostazione per tracciare e analizzare il comportamento degli utenti, le prestazioni dell'infrastruttura e i costi vivi delle API AI di Wolly.",
    date: "3 Giugno 2026",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>Una delle fasi fondamentali nel lancio di un nuovo prodotto o di una piattaforma digitale è il tracciamento e l’analisi del comportamento degli utenti, nonché delle prestazioni generali e del corretto funzionamento tecnico. Le ricerche di mercato e i test preliminari possono permetterci di indirizzare il prodotto e di sviluppare i primi prototipi; tuttavia, solo l’analisi dei reali comportamenti d’uso sul campo può rilevare le effettive preferenze, i pattern di utilizzo e le aree di miglioramento prioritario.</p><p>Wolly, ad esempio, utilizza tre modalità differenti per la registrazione delle spese. Qual è la più utilizzata? Quanto tempo impiega l'applicazione per elaborare un singolo inserimento? Quanto costa un utente su base mensile? Sono tutte domande cruciali che necessitano di risposte basate su dati quantitativi presi da utenti reali. Dato che manca poco al lancio della prima demo privata (dedicata a una cerchia ristretta di tester), era fondamentale capire fin da ora cosa tracciare e come farlo dal punto di vista infrastrutturale.</p><p><em>*Nota: l'applicazione cerca di avvicinarsi fin da ora agli standard di privacy basandosi su ciò che viene tracciato realmente: i dati finanziari sono conservati in locale sul dispositivo, non viene effettuata profilazione o marketing, Firebase Analytics è disabilitato in questa beta e vengono raccolti solo dati strettamente necessari all'autenticazione (email tramite Google OAuth/Supabase) e all'elaborazione temporanea dei log AI.*</em></p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Obiettivi di analisi",
          html: "<p>La prima fase ha riguardato la definizione di obiettivi chiari di analisi: cosa serve sapere davvero? Quali punti strategici occorre definire? Cosa è fondamentale comprendere durante la prima demo privata? La definizione degli obiettivi è cruciale. Devono essere domande mirate, misurabili e, in sostanza, conformi ai criteri SMART (Specific, Measurable, Achievable, Relevant, Time-bound):</p><ul><li><strong>Quali tool di parsing utilizzano le persone:</strong> Questo dato è fondamentale per capire quale modalità specifica (tra quelle offerte) gli utenti preferiscono per registrare le nuove transazioni finanziarie. Isolare questo comportamento permetterà, in una fase successiva dello sviluppo, di ottimizzare i flussi principali, migliorando sia le prestazioni infrastrutturali sia l’usabilità dell’interfaccia (UX).</li><li><strong>Che tool di analisi utilizzano:</strong> È necessario capire se, per analizzare le proprie spese, le persone preferiscono interagire tramite testo scritto o tramite comandi vocali. Identificare la modalità principale serve non solo a ottimizzare l’esperienza utente, ma anche a comprendere quali siano gli strumenti nativi dell'applicazione ritenuti più utili e accessibili.</li><li><strong>Le persone chiedono consigli finanziari o analisi dello storico?</strong> In questa fase, anche alla luce della <a href='/progetti/wolly/2026/04/21/user-research-validazione-problema-e-ai-trust' target='_self'><strong>primary research</strong></a>, si è notato come le persone desiderino principalmente una panoramica chiara e immediata delle proprie spese (un'overview), piuttosto che consigli proattivi o un tutor finanziario personale. Nonostante ciò, l'obiettivo è verificare se Wolly possa evolvere in futuro verso la consulenza automatizzata o se gli utenti non mostrino interesse per questa funzionalità.</li><li><strong>Qual è il costo di un utente?</strong> Per garantire la sostenibilità economica del progetto e definire con precisione il prezzo del futuro abbonamento, occorre calcolare quanto costa un utente ogni mese. Essendo l’utilizzo dei servizi di Intelligenza Artificiale basato su una modalità <em>pay-as-you-go</em> (pagamento al consumo), i costi variabili per utente sono legati alle chiamate API. È quindi indispensabile tracciare il costo esatto di ogni singola operazione per non inficiare i margini.</li><li><strong>Quali pagine gli utenti utilizzano di più?</strong> Mappare il comportamento di navigazione all’interno dell'applicazione permette di individuare le sezioni e le feature più visitate. Nonostante l’app sia progettata per compiere la maggior parte delle azioni accedendo direttamente alle funzioni AI (riducendo la navigazione classica), occorre capire quali pagine di riepilogo o di impostazione catturano maggiormente l’interesse dell’utente.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Tool di tracciamento utilizzati e stack di analisi",
          html: "<p>Definiti gli obiettivi, è stato necessario individuare gli strumenti utili per le analisi e stabilire dove e come centralizzare i dati, così da poterli visualizzare e gestire in modo semplice, chiaro e veloce.</p><ul><li><strong>Google Analytics:</strong> Sebbene inizialmente configurato tramite <a href='https://firebase.google.com/products/analytics' target='_blank'><strong>Google Firebase</strong></a> per poter monitorare metriche aggregate come sessioni o schermate, Firebase Analytics è stato <strong>disabilitato in questa versione beta</strong> per avvicinarci fin da subito ai massimi standard di privacy e minimizzazione dei dati.</li><li><strong>Supabase:</strong> Utilizzato per memorizzare in modo totalmente anonimo esclusivamente i log tecnici e le metriche di backend legati all'uso dell'Intelligenza Artificiale, essenziali per monitorare l'andamento dei costi vivi e dei token consumati. Non vengono registrati né il testo delle domande, né i parametri o gli identificativi personali.</li><li><strong>Looker Studio:</strong> Utilizzato come piattaforma centralizzata per supervisionare esclusivamente l'andamento aggregato dei costi variabili e dei log tecnici archiviati su Supabase, garantendo una supervisione chiara e sicura in un'unica schermata.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Metriche di comportamento analizzate",
          html: "<p>Definiti gli obiettivi e gli strumenti, si è passati alla selezione delle metriche effettive. È fondamentale definire KPI chiari e di valore, che restituiscano informazioni rilevanti evitando il rischio di perdersi in metriche di vanità o dati ridondanti.</p><h3>Google Analytics (Disabilitato)</h3><p>Nessuna metrica di comportamento utente, navigazione o tracciamento dell'utilizzo dettagliato (come utenti unici, visualizzazioni di schermate o durata media delle sessioni) viene attualmente raccolta tramite Google Analytics, essendo questo disattivato nella versione beta.</p><h3>Supabase (Log AI Anonimi)</h3><p>Su Supabase vengono memorizzati esclusivamente i log tecnici e i metadati anonimi legati alle chiamate AI, fondamentali per tenere traccia dei costi e garantire le performance dell'infrastruttura:</p><ul><li><strong>Costo di ogni chiamata AI:</strong> Calcola l'esborso monetario associato a ogni singola richiesta inviata ai modelli di linguaggio per monitorare la sostenibilità finanziaria.</li><li><strong>Data di creazione della chiamata:</strong> Registra il timestamp dell'operazione per analizzare i flussi di utilizzo nel tempo.</li><li><strong>Versione dell'app:</strong> Traccia la build dell'applicazione per isolare problemi tecnici o anomalie legati a specifici rilasci.</li><li><strong>Token utilizzati (input, elaborazione, output):</strong> Misura il consumo di token per monitorare i costi di servizio legati alle risposte dell'IA.</li><li><strong>Durata dell'operazione:</strong> Registra la latenza di risposta del sistema per assicurare un'esperienza fluida.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Conclusione e riflessioni",
          html: "<p>Integrare l’infrastruttura di analisi in questa fase embrionale dell’applicazione si è rivelato un passo fondamentale: ci permetterà di orientare lo sviluppo del prodotto basandoci sui dati e di concentrare le risorse di sviluppo esclusivamente sulle funzionalità che generano reale valore per l’utente. Nel prossimo articolo mostrerò nel dettaglio come ho configurato la dashboard su Looker Studio per ottenere un’analisi dei dati chiara, efficiente e immediatamente azionabile.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-prototype-v001",
    category: "wolly",
    subcategory: "product-design",
    year: "2026",
    month: "06",
    day: "07",
    slug: "prototipizzazione-prima-versione-v001",
    title: "Sviluppo del primo prototipo funzionante (Wolly v0.0.1)",
    description: "Lanciare un'applicazione in un mercato saturo richiede una strategia chiara: non serve reinventare la ruota, ma farla girare meglio. Il mio obiettivo con Wolly v0.0.1 è stato gettare le basi di un'applicazione snella, focalizzata sulla gestione offline delle transazioni, per poi innestare in modo modulare un potente layer di Intelligenza Artificiale.",
    date: "7 Giugno 2026",
    coverImage: "/media/projects/wolly/wolly prototype/processed_Wolly_home.png",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>Lanciare un'applicazione in un mercato saturo come quello della finanza personale richiede una strategia chiara: non serve reinventare la ruota, ma farla girare meglio. Il mio obiettivo con Wolly v0.0.1 è stato gettare le basi di un'applicazione snella, focalizzata sulla gestione offline delle transazioni, per poi innestare in modo modulare un potente layer di Intelligenza Artificiale.</p><p>Questo articolo riassume la struttura logica e le scelte di UX/UI del primo prototipo funzionante. Ciascuna di queste aree sarà approfondita in articoli dedicati per analizzarne i dettagli implementativi.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Prototipo di base",
          html: "<p>L'obiettivo primario di Wolly v0.0.1 era validare un'applicazione snella, rapida e offline-first. Prima di far comunicare l'app con modelli AI complessi, è stato fondamentale implementare la <a href=\"/progetti/wolly/2026/04/26/costruire-la-demo-di-base-prima-dellarchitettura-ai\"><strong>stabilità di base della gestione finanziaria tradizionale</strong></a>. </p><h3>Core Engine & Database Locale</h3><p>Ho sviluppato un motore di transazione offline per l'inserimento e la categorizzazione manuale rapida di spese ed entrate. Tutti i dati sono memorizzati direttamente sul dispositivo dell'utente tramite SQLite/AsyncStorage, garantendo latenza zero e riservatezza assoluta. In questa prima fase locale si colloca anche il sistema contestuale di segnalazione anomalie (Anomaly Reporter) per monitorare lo stato operativo senza intaccare la privacy.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Schermate",
          html: "<p>L'interfaccia grafica restituisce all'utente una sintesi immediata del suo patrimonio e delle sue abitudini di consumo. Ho progettato e sviluppato quattro visualizzazioni verticali principali basate su grafici dinamici:</p><h3>Visualizzazioni dei Flussi</h3><ul><li><strong>Flusso di Cassa:</strong> Confronto diretto tra entrate e uscite mensili.</li><li><strong>Guadagni e Spese:</strong> Schede incentrate sul monitoraggio dei redditi e sull'aggregazione delle uscite per categorie.</li><li><strong>Net Worth:</strong> Stato complessivo del patrimonio accumulato al netto dei costi sostenuti.</li></ul>"
        }
      },
      {
        type: 'gallery',
        data: {
          images: [
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_home.png", alt: "Dashboard principale" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_ai_chat.png", alt: "Chat con Assistente AI" },
            { src: "/media/projects/wolly/wolly prototype/processed_wolly_fotocamera.png", alt: "OCR fotocamera scontrini" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_pagina_transazione.png", alt: "Dettaglio transazione accordion" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_pagina_spese.png", alt: "Storico e categorie" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_pagina_abbonamenti.png", alt: "Abbonamenti ricorrenti" }
          ]
        }
      },
      {
        type: 'text',
        data: {
          title: "Layer di parsing AI",
          html: "<p>La transizione offline-online avviene in modo trasparente e non distruttivo. Se la rete manca, l'app opera normalmente; in presenza di connessione, si innesta il layer AI per eliminare ogni frizione nell'inserimento dei dati.</p><h3>API esterne ed arricchimento semantico</h3><p>Collegando l'app a <strong>Groq API</strong> (per l'inferenza linguistica ad altissima velocità) e a <strong>Google Vision API</strong> (per il parsing visivo degli scontrini cartacei), l'applicazione cattura ed arricchisce ogni transazione. L'AI interpreta il contesto sociale (amici, famiglia), geografico (vacanze, trasferte), canali d'acquisto (online o fisico) e tag. Riconosce inoltre abbonamenti ricorrenti e uscite future programmate.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Analisi AI",
          html: "<p>Risolto l'inserimento dei dati, ho ripensato la fase di analisi eliminando i filtri di ricerca complessi. L'obiettivo è permettere all'utente di dialogare direttamente con il proprio storico finanziario.</p><h3>Query e Widget Just-in-Time (JIT)</h3><p>L'utente può porre domande in linguaggio naturale (es. \"Quanto ho speso l'ultimo mese con gli amici nei negozi online?\"). Il motore interpreta l'intento ed evoca template grafici preimpostati (JIT Widgets per totali, distribuzioni, liste o timeline) popolandoli dinamicamente con i dati estratti dal database locale.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Menu e navigazione",
          html: "<p>Il pannello di navigazione principale (Tab Bar) è stato strutturato per garantire un accesso fulmineo alle nuove funzioni AI, mantenendo un'usabilità familiare.</p><h3>Menu centralizzato multifunzione</h3><p>La Tab Bar a 5 icone ruota attorno al pulsante AI centrale. Per evitare di affollare lo schermo di bottoni, ho progettato un sistema a gesture multifunzione: click singolo per avviare il campo di testo AI, doppio click per la fotocamera OCR e pressione prolungata (Hold) per registrare l'audio (con un ring circolare SVG che visualizza il timer e gesture verso l'alto per annullare).</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Tracciamento",
          html: "<p>Trattandosi di informazioni finanziarie sensibili, la conformità e la sicurezza architetturale sono state prioritarie fin dal primo giorno di sviluppo.</p><h3>GDPR e Monitoraggio KPI</h3><p>Ho implementato log tecnici anonimi su Supabase per monitorare token e costi vivi API, garantendo conformità GDPR totale. Se desideri approfondire lo stack di tracciamento e la tecnologia utilizzata, puoi leggere l'<a href=\"/progetti/wolly/2026/06/03/tracciamento-e-analisi-dei-principali-kpi\"><strong>articolo dedicato alla strategia e ai KPI di tracciamento</strong></a>. Infine, ho previsto guardrail lato codice per filtrare richieste non pertinenti e limiti di token per prevenire abusi ed evitare picchi di costo imprevisti.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Punti fondamentali dell'app",
          html: "<p>A completamento dello sviluppo iniziale, ho strutturato i flussi d'accesso, il sistema di onboarding e le politiche di trattamento dati per coniugare semplicità operativa e sicurezza.</p><h3>Onboarding e Accessi</h3><p>L'onboarding iniziale è stato ridotto al minimo indispensabile per abbattere la barriera d'ingresso. L'accesso è gestito in modo sicuro tramite Google Login (OAuth), garantendo controlli d'accesso affidabili e limitando l'inserimento di credenziali proprietarie. Tutte le preferenze iniziali e la configurazione dell'utente vengono impostate in background durante il primo avvio.</p><h3>Privacy Policy</h3><p>I dati personali e finanziari sono protetti alla radice: la base dati risiede localmente sul dispositivo dell'utente. La trasmissione dati avviene esclusivamente in presenza del layer AI per l'arricchimento semantico, seguendo rigide policy di riservatezza in linea con la conformità GDPR, senza alcuna forma di tracciamento o profilazione commerciale.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Prossimi Passi",
          html: "<p>Il prossimo passo fondamentale sarà la pubblicazione di una versione demo accessibile al pubblico. Successivamente, verranno definite le ultime specifiche tecniche e i dettagli della brand identity dell'applicazione, ponendo le basi per il rilascio della prima versione ufficiale stabile.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-beta-landing",
    category: "wolly",
    subcategory: "product-design",
    year: "2026",
    month: "06",
    day: "11",
    slug: "creazione-landing-page-beta-tester",
    title: "Creazione della Landing Page per Beta Tester",
    description: "Sviluppo e design di una landing page ad alte prestazioni per raccogliere i beta tester di Wolly, integrando Server Actions, Google Sheets e un'infrastruttura sicura in linea con il GDPR.",
    date: "11 Giugno 2026",
    coverImage: "/media/projects/wolly/wolly-beta-android.png",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>La fase di test privato &egrave; un momento cruciale nel ciclo di vita di un'applicazione. Per accogliere e registrare i beta tester di <strong>Wolly</strong>, ho progettato e sviluppato una landing page dedicata sulla rotta <code>/beta</code>, con l'obiettivo di offrire un'esperienza utente fluida, sicura e dal design premium. Per convogliare il traffico verso il sito e raccogliere le prime iscrizioni, sono partito con un post dedicato su LinkedIn rivolto a professionisti e appassionati del settore.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Struttura del Sito (Pagine e Rotte)",
          html: "<p>Il sito &egrave; un'applicazione web sviluppata con <strong>Next.js</strong> strutturata con le seguenti rotte principali:</p><ul><li><strong>Home Page (<code>/</code>):</strong> Una landing page minimale progettata per avviare il caricamento rapido dell'applicazione.</li><li><strong>Beta Page (<code>/beta</code>):</strong> La pagina principale di atterraggio interamente dedicata all'acquisizione e iscrizione dei tester per la versione Beta di Wolly.</li><li><strong>Termini di Utilizzo (<code>/terms</code>):</strong> Pagina legale che stabilisce le regole d'uso del software in versione Beta, definendo le limitazioni di responsabilit&agrave; (come la memorizzazione offline locale SQLite sul dispositivo dell'utente) e le condizioni generali.</li><li><strong>Informativa Privacy (<code>/privacy</code>):</strong> Documento legale conforme al GDPR (Regolamento UE 2016/679) che spiega dettagliatamente quali dati vengono raccolti, come vengono protetti e i fornitori esterni coinvolti.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Elementi dell'Interfaccia Utente (UI)",
          html: "<p>Sulla pagina <code>/beta</code>, l'interfaccia &egrave; stata curata per garantire la massima eccellenza visiva e un'interazione dinamica:</p><ul><li><strong>Design Visivo:</strong> Sfondo caratterizzato da un blu profondo (<code>#1A73E8</code>) arricchito da animazioni fluide che muovono chiazze di luce sfocate (blur) in background, simulando un effetto tridimensionale fluttuante e moderno.</li><li><strong>Modulo di Registrazione:</strong> Un form minimale con un campo di input email arrotondato. All'invio corretto, il campo cambia colore trasformandosi in verde smeraldo con un'animazione di spunta (checkmark) di successo.</li><li><strong>Checkbox di Consenso:</strong> Due selezioni obbligatorie per l'utente, ovvero l'accettazione dei Termini di Utilizzo Beta (con link che si apre in una nuova scheda) e l'accettazione della Privacy Policy per il trattamento dei dati.</li><li><strong>Gestione degli Errori:</strong> Se l'utente tenta di inviare il form senza aver selezionato i consensi obbligatori, l'interfaccia mostra dinamicamente un messaggio di avviso animato in rosso.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Integrazioni e Gestione Dati (Backend)",
          html: "<p>La logica di registrazione e monitoraggio si appoggia a <strong>Server Actions</strong> di Next.js (nel file <code>actions.ts</code>), interfacciate in sicurezza con servizi esterni:</p><h3>Raccolta Email dei Tester</h3><p>La Server Action <code>submitBetaEmail</code> riceve l'indirizzo email e lo registra direttamente in un foglio di calcolo <strong>Google Sheets</strong> (nel foglio denominato <em>Beta</em>) tramite le API di Google. Il codice &egrave; strutturato per essere flessibile: se il foglio di calcolo <em>Beta</em> non esiste all'atto dell'invio, viene creato automaticamente prima di salvare i dati. Successivamente, queste email raccolte verranno integrate direttamente come profili abilitati all'interno di <strong>Supabase</strong> per consentire l'accesso controllato all'app mobile in qualità di beta tester.</p><h3>Gestione del Questionario (Survey)</h3><p>La Server Action <code>submitForm</code> gestisce le risposte a un questionario dettagliato sull'uso dei dati e delle finanze personali (suddiviso per rami: utenti attivi, prospect, utenti persi). Insieme alle risposte, vengono raccolti metadati tecnici utili all'analisi: timestamp di compilazione, Paese/Citt&agrave; (rilevato tramite gli header IP di Vercel), tipo di dispositivo utilizzato (Mobile, Tablet o Desktop), User Agent, tempo totale impiegato per la compilazione e numero di clic sul tasto Indietro.</p><h3>Architettura degli Accessi e Database</h3><ul><li><strong>Google OAuth:</strong> L'autenticazione per l'accesso all'app mobile avviene in sicurezza tramite un account Google valido.</li><li><strong>Supabase:</strong> Database cloud principale (ospitato in Irlanda, UE) per la gestione dell'autenticazione utente con regole di sicurezza RLS (Row Level Security).</li><li><strong>Sicurezza Locale:</strong> I dati finanziari reali dell'utente (transazioni, budget) risiedono esclusivamente in locale sul dispositivo in un database offline SQLite e non vengono caricati sul cloud.</li><li><strong>Elaborazione AI:</strong> Le richieste vocali e testuali inviate all'assistente passano temporaneamente tramite le API di Groq per l'elaborazione, senza essere in alcun modo memorizzate nel cloud.</li></ul>"
        }
      }
    ]
  }
];

export const projectsEn: Project[] = [

  {
    id: "wolly-primary-research-interpretation",
    category: "wolly",
    subcategory: "primary-research",
    year: "2026",
    month: "04",
    day: "28",
    slug: "market-test-data-interpretation-april-2026",
    title: "Market Test: Data Interpretation",
    description: "First exploratory wave with 6 respondents: Wolly's real competitor is the bank's push notification, the barrier is operational not motivational, and AI parsing is the necessary condition for the product's existence.",
    date: "April 28, 2026",
    coverImage: "/media/projects/wolly/primary-research-cover.jpg",
    content: [
      {
        type: 'text',
        data: {
          html: "<p><em>This is a first exploratory phase with a sample of 6 valid respondents. The data is not statistically representative, nor does it intend to be: the goal was to identify <strong>consistent qualitative signals</strong>, not measure distributions. Conclusions should be read as hypotheses to be validated in a second wave, not as certainties. Where signals from the <a href='/en/projects/wolly/2026/04/21/user-research-problem-validation-and-ai-trust' target='_self'><strong>strategic survey</strong></a> converge with secondary desk research, the confidence level increases — but this is stated explicitly.</em></p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Data Summary",
          html: "<h3>Branch Distribution</h3><p>The survey included an initial filter based on respondents' current relationship with financial management:</p><ul><li><strong>Branch B — \"I don't use apps, but I'd like to start\":</strong> 4 out of 6 respondents.</li><li><strong>Branch A — \"I already regularly use a dedicated app or tool\":</strong> 2 out of 6 respondents.</li><li><strong>Branch C and Branch D:</strong> no respondents.</li></ul>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Data", "Branch B (4 respondents)", "Branch A (2 respondents)"],
          rows: [
            ["<strong>Goal / Primary Use</strong>", "Simple and clear overview (2); Understanding where money goes (1); Saving money (1)", "Savings (1); Analysis (1)"],
            ["<strong>Current System</strong>", "Bank push notifications (3); Occasional bank statement (1)", "Own bank's app (both)"],
            ["<strong>Main Barrier / Frustration</strong>", "Boredom of manual data entry (3); Doubt about actual usefulness (1)", "Lack of customization (1); Categories too rigid (1)"],
            ["<strong>Spending on Tools</strong>", "0 out of 4 have tried tools in the past", "Both use free tools"]
          ]
        }
      },
      {
        type: 'text',
        data: {
          title: "Behavioral Metadata",
          html: "<ul><li><strong>Device:</strong> 5 out of 6 from mobile (predominantly iPhone).</li><li><strong>Payment method:</strong> Predominantly digital or mixed; no \"cash only\" users.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "The market uses nothing — and it's not laziness",
          html: "<p>The most relevant finding is that those who don't use apps rely on <strong>bank push notifications</strong>. It's a fallback system that works just enough to avoid immediate \"pain\". <strong>Wolly's real competitor is not another budgeting app</strong>, but the push notification that tells you how much you spent without explaining the context or the \"why\".</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "The barrier is operational, not motivational",
          html: "<p>\"Boredom of manual data entry\" is cited as the main barrier by <strong>75% of Branch B</strong>. This is a drop-off prediction: users want the result but fear they won't sustain the habit. <strong>AI parsing therefore becomes the necessary condition for the product's very existence</strong> in the user's mind.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Existing users are satisfied — but for the price, not the features",
          html: "<p>Active users are using free tools. The resistance to payment is real, but the frustration with \"too rigid categories\" from the bank opens a window: <strong>Wolly must be perceived as a qualitatively different tool</strong>, capable of adapting to the user's real spending semantics.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "The goal is visibility, not control",
          html: "<p>The dominant need is the <strong>overview</strong>. Users aren't looking for a system of restrictive rules, but a clear \"mirror\". The most effective marketing message seems to be <em>\"Finally understand where your money goes\"</em> rather than <em>\"Save more\"</em>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Digital payment is already normalized",
          html: "<p>The widespread use of digital payments validates the hypothesis that <strong>automatic transaction tracking</strong> will be perceived as a natural extension of one's behavior, not as an intrusion.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Conclusions and Feature Priorities",
          html: "<h3>Zero Onboarding Friction</h3><p><strong>AI parsing must be the first interaction</strong>. If onboarding requires manual entry, the product loses to the bank notification.</p><p><em>Implication: Users must experience parsing (via voice or photo) immediately, before tutorials or complex dashboards.</em></p><h3>Instant Overview as the Primary Output</h3><p>The Home screen must offer an <strong>immediate read of the situation</strong>. The Insight Engine (the daily AI sentence) is the feature with the greatest retention potential, as it provides added value that the bank cannot generate.</p><h3>AI's Role Must Be Invisible but Felt</h3><p>AI must be experienced as a <strong>fluid mechanism</strong>, not a marketing label. Sell the result (<em>\"Log in 5 seconds\"</em>), not the technology. The tolerance threshold for categorization errors is low, given the high expectations of mobile users in 2026.</p>"
        }
      }
    ]
  },

  {
    id: "wolly-base-demo",
    category: "wolly",
    subcategory: "product-design",
    year: "2026",
    month: "04",
    day: "26",
    slug: "building-the-base-demo-before-ai-architecture",
    title: "Building the Base Demo Before the AI Architecture",
    description: "While waiting for the last form responses, the focus shifts to building the app's foundations: a transaction database, core screens, and default categories. A structured prototype — not pretty by design.",
    date: "April 26, 2026",
    coverImage: "/media/projects/wolly/demo app article/wolly-home-screen-demo.png",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>While waiting for the last few days to collect new responses from the form launched last week, the goal now is to build the app's foundations. Even though <strong>Wolly</strong> aims to be innovative and improve the personal finance experience, the product needs to start from the conventional logic of tracking apps — the ones users already know and expect to find.</p><ul><li><strong>Manual expense input</strong></li><li><strong>Home dashboard with cash flow overview</strong></li><li><strong>Filterable transaction list</strong> by category, subcategory, and time period</li><li><strong>Expense distribution charts</strong>, to understand where money actually goes</li></ul><p>This is the starting point. Not because it's the final product, but because you need a solid, modular structure to build everything else on top of without restarting from scratch every time.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "The Transaction Database",
          html: "<p>One of the most fundamental aspects of any tracking app is how information is managed. Data needs to be structured so it carries <strong>real semantic value</strong> — not just a list of numbers, but information that tells a story about the behavior of whoever enters it.</p><p>The goal here is not to overdo it. Form responses could lead to significant structural changes, so the priority is building foundations that are <strong>solid but flexible</strong>. The core question is: what information does the user need today, and what will allow meaningful insights to be generated tomorrow?</p><h3>Amount</h3><p>The most obvious but fundamental part: every transaction is either <strong>income or an expense</strong>, with a precise value. Without this, nothing exists.</p><h3>Category and Subcategory</h3><p>These are the most important reading layers for understanding spending habits. The <strong>category</strong> gives a macro view — health, transport, shopping, leisure. The <strong>subcategory</strong> goes deeper — pharmacy, personal care, fuel, clothing. Together they reveal not just how much is spent, but <strong>where and on what</strong> — which is the truly useful information.</p><h3>Time</h3><p>The date and time of each transaction enable two things: good chronological organization and the ability to identify <strong>spending patterns</strong>. Do you spend more on weekends? During lunch breaks? Around the holidays? Time transforms a list of expenses into a story.</p><h3>With Whom</h3><p>Knowing whether a purchase happens in a social context — and with whom — adds a dimension that no banking app records. Dinner out with friends, family shopping, solo purchases: these are <strong>different behaviors, with different logic</strong>.</p><h3>Where</h3><p>Location — city, neighborhood, address — helps understand whether one is traveling or in daily routine, linking the expense to a <strong>precise geographic context</strong>. A weekend getaway has a completely different spending profile than a regular week.</p><p>These five layers of information together tell far more than any bank statement. But the critical question remains: how often will users actually fill in all this data? That's one of the things the form is trying to answer.</p><p>For now, a <strong>local database</strong> has been set up to collect this information in an orderly way, with a structure designed to be extended without breaking what already works.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "The App Screens",
          html: "<p>With the database in place, the next step was building the main screens — the ones covering the <strong>core user flow</strong> from the moment the app is opened.</p><h3>Dashboard</h3><p>The first thing you see when you open Wolly. It shows the <strong>total net worth</strong> — with the option to hide it for those who don't want it always visible — and a quick summary of income and expenses filterable by week, month, year, or the full period. There's also a trend chart and the list of the most recent recorded transactions. The goal is to give an <strong>immediate snapshot of the situation</strong> without having to navigate the app.</p>"
        }
      },
      {
        type: 'image',
        data: {
          src: "/media/projects/wolly/demo app article/wolly-home-screen-demo.png",
          caption: "Wolly Dashboard: overview of net worth and cash flows."
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>Manual Entry</h3><p>The input screen is the operational core of the app at this stage. You enter the amount, choose whether it's income or an expense, select category and subcategory, add the date and payment method. You can also <strong>tag the people present</strong> and log the location. The more data entered, the more material the app has to build an accurate picture of spending habits.</p><h3>Transaction History</h3><p>A complete and <strong>filterable list</strong> of all recorded transactions. You can filter by period, category, and subcategory, and access the detail of each individual transaction.</p>"
        }
      },
      {
        type: 'image',
        data: {
          src: "/media/projects/wolly/demo app article/wolly-list-screen-demo.png",
          caption: "Transaction history: advanced filters to analyze every single expense."
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>Statistics Hub</h3><p>The analysis section. It covers four areas: <strong>net worth over time</strong>, income analysis, expense analysis, and a comparison of inflows and outflows. This is where the entered data becomes readable and useful.</p>"
        }
      },
      {
        type: 'image',
        data: {
          src: "/media/projects/wolly/demo app article/wolly-graphics-screen-demo.png",
          caption: "Analytics Hub: net worth trends and expense distribution."
        }
      },
      {
        type: 'text',
        data: {
          title: "Manual Input and Categories",
          html: "<p>The structure of <strong>default categories and subcategories</strong> has been defined — the ones the user finds ready-made when they first open the app. From there, transactions can be entered manually, which lets me test the database under real conditions and understand whether the structure holds up.</p><p>This first prototype isn't pretty. It's <strong>structured</strong>. And that's exactly what it needed to be at this stage.</p><p>If you want to follow Wolly's development, all updates are here on the blog. The next step will depend on what the form data reveals — and I'll write about it as soon as there's something concrete to share.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-user-research",
    category: "wolly",
    subcategory: "primary-research",
    year: "2026",
    month: "04",
    day: "21",
    slug: "user-research-problem-validation-and-ai-trust",
    title: "User Research: Problem Validation & AI Trust",
    description: "Qualitative research project to identify the core Job to be Done and validate AI automation as the solution to manual tracking friction.",
    date: "April 21, 2026",
    coverImage: "/media/projects/wolly/form article/wolly-research.png",
    content: [
      {
        type: 'text',
        data: {
          title: "Research Objectives",
          html: "<p>The goal of this phase is to collect direct data from potential users to guide product design. The research aims to identify the single fundamental task (<strong>Job to be Done</strong>) that the app must perform excellently to stand out, specifically validating <strong>AI automation</strong> as the solution to manual tracking friction.</p><p>👉 <strong>Contribute to the research:</strong> You can see the project in practice and help us collect data by filling out the official form here: <a href=\"https://wolly-finance.vercel.app/form\" target=\"_blank\"><strong>Wolly Finance Survey</strong></a>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Reference Metrics & KPIs",
          html: "<ul>\
<li><strong>Market Adoption (MA):</strong> Percentage of users (target 25-40) who feel the need for tracking.</li>\
<li><strong>Current Solution Gap (CSG):</strong> Identification of the limitations of current tools (manual effort, complexity).</li>\
<li><strong>User Orientation (UO):</strong> Prevalence of conservative savings versus active investment.</li>\
<li><strong>AI Trust Factor (ATF):</strong> Propensity to use algorithms for automatic categorization.</li>\
<li><strong>Price Sensitivity (PS):</strong> Price threshold and mental category of \"essential\" subscriptions.</li>\
<li><strong>Switching Cost (SC):</strong> Barrier related to usage time and accumulated historical data.</li>\
</ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Strategic Survey Structure",
          html: "<h3>Main Question — Filter Question</h3><p><em>What is your current relationship with digital personal expense management?</em></p><ul>\
<li>I already regularly use a dedicated app or tool → <strong>Branch A</strong></li>\
<li>I don't use apps, but I'd like to start managing my finances better → <strong>Branch B</strong></li>\
<li>I've tried in the past but stopped → <strong>Branch C</strong></li>\
<li>I'm not interested in monitoring my expenses → <strong>Branch D</strong></li>\
</ul>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>Branch Analysis</h3><h4>Branch A — Active Users (Focus: Switching Cost & Automation)</h4><ul>\
<li><strong>A1-A3:</strong> Analysis of habits and time spent (operational friction).</li>\
<li><strong>A4 [AI Trust Factor]:</strong> Check if categorization is automatic or manual.</li>\
<li><strong>A5:</strong> Identification of pain points (Time, Forgetfulness, Rigidity).</li>\
<li><strong>A6 [Switching Cost]:</strong> Evaluation of loyalty to current tools.</li>\
</ul><h4>Branch B — Prospects (Focus: Current Solution Gap)</h4><ul>\
<li><strong>B1-B2:</strong> Desired outcomes and current informal methods (bank statements, notifications).</li>\
<li><strong>B3:</strong> Barriers to entry (boredom, too much choice, cost).</li>\
</ul><h4>Branch C — Churned (Focus: Retention & AI Validation)</h4><ul>\
<li><strong>C4-C5:</strong> Analysis of the drop-off moment (excessive work, losing track).</li>\
<li><strong>C6 [AI Trust Factor]:</strong> Key question on validating automation as a retention lever.</li>\
</ul><h4>Branch D — Not Interested (Focus: User Orientation)</h4><ul>\
<li><strong>D1-D2:</strong> Analysis of financial mindset (future savings vs active management).</li>\
</ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Final Section & Demographics",
          html: "<p>The final section collects data on age and payment habits (Digital vs Cash) to better define the ideal user's technology profile.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-finance",
    category: "wolly",
    subcategory: "desk-research",
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
          html: "<h3>The Need: The Paradox of the Italian Saver</h3><p>In Italy, money management is not perceived as a technical discipline, but as an <strong>emotional burden</strong> marked by <strong>guilt, anxiety, and a sense of chaos</strong>.</p><h4>Great savers, poor managers</h4><p>The <a href='https://edufinindex.it/' target='_blank'><strong>Edufin Index 2024</strong></a> (<strong>56/100</strong>) highlights a chronic inability to manage expense flows, with a significant gap between awareness and <strong>practical daily competence</strong>.</p><p><em>Source: Alleanza Assicurazioni – <a href='https://edufinindex.it/' target='_blank'>Edufin Index 2024 Report</a></em><br><em>In-depth: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Bank of Italy – Financial Literacy Surveys</a></em></p><h4>The “Subscription Economy” as a Trigger</h4><p>The <strong>25-44 age bracket</strong> is overwhelmed by subscriptions and <strong>micro-payments</strong>, but lacks a simple, centralized tool to <strong>\"organize\"</strong> these flows.</p><p><em>Source: <a href='https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html' target='_blank'>Bank of Italy – IACOFI Survey</a></em></p><h4>Demand for protection, not expertise</h4><p>The core interest is obtaining <strong>insurance against waste</strong>: a tool that <strong>protects savings</strong> by preventing <strong>daily “leakages”</strong> and unnecessary subscriptions.</p><p><strong>Section Summary:</strong> The interest is driven by a <strong>real pain point</strong>: the feeling of <strong>losing control over small digital expenses</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>The Solution: AI from \"Tool\" to \"Invisible Assistant\"</h3><p>AI adoption in Italy has surpassed the experimental phase: the market is worth over <strong>€1.8 billion</strong> in 2025.</p><h4>From complexity to conversation</h4><p><strong>Conversational interfaces</strong> have become standard: users want to interact using <strong>natural language</strong> to get <strong>immediate insights</strong>.</p><p><em>Source 1: <a href='https://www.osservatori.net/it/ricerche/osservatori-attivi/artificial-intelligence' target='_blank'>Politecnico di Milano – Artificial Intelligence 2025</a></em><br><em>Source 2: <a href='https://aspeninstitute.it/programma/artificial-intelligence/' target='_blank'>Aspen Institute Italia – AI Report</a></em></p><h4>The end of manual data entry</h4><p>Today, AI can <strong>automatically categorize</strong> raw transactions into <strong>“human” language</strong>, solving the failure of old manual PFM apps and <strong>preventing overspending</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          html: "<h3>The Intersection: Why AI for Savings Works Now</h3><p>AI acts as a bridge between low financial literacy and the need for daily control.</p>"
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
          html: "<p><em>Related Source: <a href='https://www.anitec-assinform.it/' target='_blank'>Anitec-Assinform \u2013 Digital in Italy 2024</a></em></p><h3>Final Consideration</h3><p><strong>Is there interest in an AI-powered savings app in Italy? YES.</strong></p><p>The interest is driven by a need for <strong>simplification and control</strong>. The average user feels <strong>overwhelmed</strong>. An AI as a <strong>\"Wallet Guard\"</strong> responds to a real market need.</p>"
        }
      }
    ]
  },
  {
    id: "startup-budget-marketing",
    category: "marketing",
    year: "2026",
    month: "04",
    day: "23",
    slug: "marketing-for-startups-low-budget",
    title: "Marketing for Startups on a Low Budget: Where to Start",
    description: "Want to do marketing for your startup but have a small budget? Learn how to identify your target, choose the right channels, and test ideas without waste.",
    date: "April 23, 2026",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text' as const,
        data: {
          html: "<p>Learn how to launch your <strong>startup's marketing strategy</strong> without big investments. A practical guide on identifying your target, choosing the right channels, and <strong>testing before scaling</strong>.</p><p>You don't need a huge budget for digital marketing. <strong>You need the right order.</strong> Startups often fail not for lack of funds, but because they spread scarce resources in too many directions. We'll see how to build a solid foundation from scratch.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 1: Who are you trying to reach?",
          html: "<p>Before choosing any channel or tool, there's one fundamental question: <strong>who are you talking to?</strong></p><p>Not \"SMEs\" or \"founders under 35\". A <strong>specific person</strong>, with a <strong>specific problem</strong> and a <strong>real urgency</strong>. Defining this precisely is the prerequisite of any startup digital marketing strategy — without it, even a large budget produces noise.</p><p>Ask yourself who your ideal customer is, what they already know about the problem you solve, and what concrete outcome they want. People don't buy products: <strong>they buy improvements</strong>. The more precise you are, the less budget you need to reach them.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 2: Pick just one channel",
          html: "<p>With a limited budget, the temptation is to be everywhere. It's <strong>the most common mistake in startup digital marketing</strong>: LinkedIn, Instagram, blog, newsletter, TikTok — all at once, all poorly.</p><p>Every channel requires time to understand its mechanics, test messages, and build an audience. <strong>Spreading energy across five channels means learning nothing about any of them.</strong></p><p>The right question is: where is my customer when they're most receptive? If you sell B2B, it's almost always <strong>LinkedIn</strong>. If the problem you solve is actively searched on Google, it's <strong>SEO and blogging</strong>. Pick one, dominate it for three or four months. When you see concrete signals — traffic, engagement, requests — add a second.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 3: Create content that answers real questions",
          html: "<p>One of the most effective <strong>low-cost marketing strategies</strong> for startups is <strong>content marketing</strong>: it costs almost nothing if done internally, and builds trust over time.</p><p>The principle is simple: <strong>answer the questions your customer asks before they even know you exist.</strong> Don't write about how innovative your product is. Write about the problem — describe it with such precision that whoever lives it thinks \"this person understands my situation.\"</p><p>How do you find the right questions? Read discussions in industry communities, look at competitor negative reviews, talk to potential customers. The answers are already out there — you just need to collect them and turn them into useful content.</p><p><em>Note: this is exactly the approach I used for <a href=\"/en/projects/wolly/2026/04/21/user-research-problem-validation-and-ai-trust\">Wolly's user research</a> — starting from real user questions to build content and positioning.</em></p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 4: Test before you scale",
          html: "<p>Before investing time or budget on an idea, <strong>validate it small</strong>. This is the core of <strong>growth marketing applied to resource-constrained startups</strong>: don't optimize something you don't yet know works.</p><ul><li>Have an article idea? Publish it first as a <strong>LinkedIn post</strong> and watch engagement.</li><li>Want to launch an email campaign? Send it to a <strong>subset of your list</strong> and check opens and clicks.</li><li>Thinking about a new content format? Do a <strong>minimal version</strong> before building the full one.</li></ul><p>These micro-tests cost very little in time and <strong>zero in marketing budget</strong>, but tell you precisely what's worth developing and what isn't.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Step 5: Measure a few things — but the right ones",
          html: "<p>With a low budget, it's critical to know <strong>what's working</strong>. You don't need to collect data on everything — you need to pick <strong>two or three metrics</strong> directly tied to your goal and track them consistently.</p><ul><li>If the goal is acquiring qualified leads: <strong>site traffic, conversion rate, traffic source</strong>.</li><li>If you're building a LinkedIn audience: <strong>reach and engagement rate</strong> per post.</li></ul><p>The point isn't perfect data — it's <strong>making decisions based on something real</strong>, not instinct. When something works, invest more time there. When a channel shows no signals after three months, <strong>let it go</strong> without regret and focus resources elsewhere.</p>"
        }
      },
      {
        type: 'text' as const,
        data: {
          title: "Want to add a marketing-focused team member?",
          html: "<p>If you're building something in <strong>Milan or Monza</strong> — small team, limited budget, a desire to do things methodically — <strong>let's connect and see how I can help.</strong></p><p>I'm a <strong>junior marketer focused on growth marketing for startups</strong>. I've applied these same principles in real contexts: from <a href=\"/en/experience/naxa\"><strong>Naxa</strong></a> (hospitality startup, strategy from scratch) to <a href=\"/en/experience/fridhem-center\"><strong>Fridhem Center</strong></a> (international brand positioning), through the <a href=\"/en/projects/wolly\">Wolly product validation</a>.</p><p>If you're thinking of bringing in someone to manage <strong>digital marketing independently</strong>, <a href=\"mailto:alegentilejob@gmail.com\"><strong>reach out</strong></a>.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-competitor-analysis",
    category: "wolly",
    subcategory: "marketing-plan",
    year: "2026",
    month: "05",
    day: "03",
    slug: "competitor-analysis-italy-2026",
    title: "Competitor Analysis — Italy 2026 Landscape",
    description: "Italy's 2026 market is saturated with tools but devoid of companions. A two-level analysis: banking giants (indirect competitors) and AI personal finance apps (direct competitors) to identify where to truly differentiate.",
    date: "May 3, 2026",
    coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>Italy's 2026 market is <strong>saturated with tools but devoid of companions</strong>. This analysis maps the competitive landscape at two levels: major banking players (indirect competitors, by habit of use) and AI personal finance apps (direct competitors, by functional overlap) to identify where Wolly can build a real, defensible advantage.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Banking Giants (Indirect Competitors)",
          html: "<p>These players own the data and the trust, but suffer from a structural limitation: they are perceived as <strong>institutions, not life companions</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Intesa Sanpaolo Mobile",
          html: "<p>The <strong>undisputed leader</strong> of the Italian retail market. It's the \"wall\" Wolly runs into in terms of usage habits.</p><ul><li><strong>Numbers:</strong> 8M downloads, 13.9M customers. Leader in deposits and loans.</li><li><strong>Features:</strong> Multi-account aggregation, AI-powered automatic expense categorization, budget forecasts and personalized alerts.</li></ul><h3>Visual Identity</h3><ul><li><strong>Archetype:</strong> Ruler / Sage.</li><li><strong>Visual:</strong> Institutional green (<code>#0F6735</code>) and Trajan font. Communicates stability, power, and permanence.</li></ul><p><strong>Wolly's Opening:</strong> The Tone of Voice is <strong>cold, authoritative, and lacking empathy</strong>. It's \"the bank in an app\", not an ally who understands you.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Hype (Banca Sella Group)",
          html: "<p>The \"challenger\" neobank that educated the under-35s on digital money management.</p><ul><li><strong>Numbers:</strong> 3M+ downloads. Top fintech player for youth growth.</li><li><strong>Features:</strong> The <em>Radar</em> function aggregates different accounts and monitors spending trends. Offers cashback and free P2P.</li></ul><h3>Visual Identity</h3><ul><li><strong>Visual:</strong> Sella Blue (<code>#0033CC</code>) and Calm Green. Modern custom sans-serif font.</li><li><strong>ToV:</strong> Empowering, tech-savvy, and direct. <em>\"Money is just a tool\"</em>.</li></ul><p><strong>Wolly's Opening:</strong> Despite the innovation, it's still perceived as an \"account\" (a commodity). <strong>The emotional narrative of daily management is missing</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "BUDDY (UniCredit)",
          html: "<p>UniCredit's attempt to humanize banking through a mobile-first model.</p><ul><li><strong>Numbers:</strong> 5M cumulative downloads, 410K active users.</li><li><strong>Features:</strong> Liquidity analysis, lifestyle reports (travel/experiences), and 24/7 human chat.</li><li><strong>ToV:</strong> Friendly and conversational. Positioned as a \"life-companion bank\".</li></ul><p><strong>Wolly's Opening:</strong> It's a \"hybrid\". It attempts the friendly approach but <strong>remains constrained by the rigidity of UniCredit's processes</strong>.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "AI Personal Finance Apps (Direct Competitors)",
          html: "<p>This segment consists of technically advanced but <strong>emotionally hollow</strong> apps. This is where Wolly has the most room to differentiate.</p><h3>Cross-cutting Synthesis: The Market \"Void\"</h3><p>Analyzing DailyCoin, TrackCent, and The Budget, three common issues emerge:</p><ul><li><strong>Brand Anonymity:</strong> They are \"vibe-coded\" (built on standard templates). They have no voice, mascot, or recognizable identity.</li><li><strong>Absence of Narrative:</strong> App Store pages are static screenshots. They don't tell a story — they just sell features.</li><li><strong>Consultant Tone:</strong> They try to educate the user (\"You should save more\") instead of walking alongside them (\"I understand how you feel\").</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "DailyCoin",
          html: "<p>The most recent app, focused on feature \"quantity\".</p><ul><li><strong>Focus:</strong> Multiple AI voice input (\"Breakfast 10, Taxi 30\").</li><li><strong>Approach:</strong> Switches AI models (Gemini, DeepSeek) based on need. Very complete (crypto, investments, Apple Watch).</li><li><strong>Weakness:</strong> Confusing pricing (weekly/annual/lifetime) and zero semantic layer. It logs the amount, but <strong>doesn't understand the why behind the expense</strong>.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "TrackCent",
          html: "<p>The competitor closest to Wolly's \"Just live\" positioning.</p><ul><li><strong>Focus:</strong> Extreme parsing of receipts photographed in any language.</li><li><strong>Promise:</strong> \"Stop tracking, start living\".</li><li><strong>Weakness:</strong> The freemium model is crippling (only 14 AI scans per month). The AI insight is a generic text paragraph — <strong>not a warm, contextual sentence</strong>.</li></ul>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Feature", "Banks (Intesa/Buddy)", "AI Apps (DailyCoin/TrackCent)", "Wolly"],
          rows: [
            ["<strong>Data</strong>", "Automatic (PSD2)", "Manual / Photo Parsing", "Hybrid / Invisible Parsing"],
            ["<strong>Identity</strong>", "Institutional (Cold)", "Anonymous (Technical)", "Everyman (Warm)"],
            ["<strong>Tone</strong>", "Authoritative / Distant", "Neutral / Utility", "Empathetic / Friendly"],
            ["<strong>Insight</strong>", "Pie charts", "AI-written reports", "Narrative Sentence (Wrapped)"],
            ["<strong>Speed</strong>", "Low (Long login)", "Medium (Input-focused)", "High (10-second target)"]
          ]
        }
      },
      {
        type: 'text',
        data: {
          title: "Conclusions: The Opportunity for Wolly",
          html: "<p>Italy's 2026 market is saturated with tools but devoid of companions.</p><h3>Brand Identity as a Barrier</h3><p>Wolly must not compete on features (everyone does parsing), but on <strong>emotion</strong>. A consistent visual identity (Headspace-style) and an \"Everyman\" ToV create a bond that competitors from Hong Kong or Eastern Europe cannot replicate.</p><h3>Insight vs Data</h3><p>While others show how much you spent on \"Food\", Wolly must tell you <strong>why on that Tuesday evening you chose delivery</strong>. Behavioral insight is the real value.</p><h3>Transparent Pricing</h3><p>Wolly's full 14-day trial is an advantage over TrackCent's limited freemium that <strong>frustrates the user just as they start to trust the product</strong>.</p><h3>Wolly's Edge</h3><p>Where others offer a <em>\"Financial Advisor\"</em> (boring), Wolly offers a <em>\"Friend who's good with money\"</em> (indispensable).</p>"
        }
      }
    ]
  },
  {
    id: "wolly-buyer-persona",
    category: "wolly",
    subcategory: "marketing-plan",
    year: "2026",
    month: "05",
    day: "06",
    slug: "buyer-persona",
    title: "Buyer Persona",
    description: "Target customer profile based on primary research: 25–35, urban area, digital payer. Seeks clarity on their spending without the friction of manual data entry.",
    date: "May 6, 2026",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          title: "Methodological Note",
          html: "<p>This persona is built on confirmed data from primary research (6 respondents, April 2026) and secondary desk research. Where data is lacking, the field is not assumed — it is left open for the second research wave. The goal of this document is to provide a sufficient foundation for system design, UI and UX decisions, not a complete psychographic profile.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Who They Are",
          html: "<p>Male or female, 25–35 years old, living in an Italian urban area. Employed, with a stable and independent income. Does not manage shared finances with family or a partner in a structured way — their expenses are predominantly personal. They own a smartphone, use it intensively, and almost always pay digitally.</p><p>They don't use any personal finance app. They've never used one consistently. They're not indifferent to their financial situation — they know they should have more clarity, but haven't found a tool worth the effort of starting.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Current Behavior",
          html: "<p>Their expense tracking system today is the bank's push notification. They receive it, read it, close it. This confirms the transaction happened — it tells them nothing about context, pattern, or why.</p><p>Occasionally they open the bank app to check the statement. It's not a structured habit — it happens when something worries them or at the end of the month when they want to understand where the money went. This moment often generates a vague feeling of surprise or discomfort, not acute anxiety.</p><p>They pay predominantly by card or phone. Cash use is marginal or absent. This means all their transactions already exist in digital form somewhere — just not in a place that makes them readable as behavior.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Stated Goal",
          html: "<p>They want a clear and simple overview of where their money goes. They don't want to become a personal finance expert. They're not looking for a system of rules or a rigid budget. They want a mirror — an immediate reading of their situation without having to build it themselves.</p><p>The need is not to save more. It's to understand. Saving is a possible consequence, not the starting point.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Main Barrier",
          html: "<p>They already know that manual entry will bore them. It's not a vague fear — it's a concrete prediction based on how well they know themselves. They've probably already imagined the scenario: download the app, enter the first three expenses, forget the fourth, feel behind, quit.</p><p>This barrier is not motivational — they want the result. It's operational — they don't believe they can sustain the habit the tool requires. This distinction is critical for design: you don't need to convince them it's worth it, you need to eliminate the friction they fear.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Relationship with Technology",
          html: "<p>They use their smartphone as their primary tool for almost everything. They're accustomed to fast, immediate interfaces — their tolerance threshold for slowness or complexity is low. They don't read tutorials. They don't explore menus. If something isn't obvious on first contact, they move on.</p><p>They have apps installed that they haven't opened in weeks. They know what freemium is. They've probably already paid for at least one app subscription in the past. They're not opposed to paying for something that works — but the value must be perceived before payment, not promised.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Relationship with Money",
          html: "<p>They're not in financial crisis. They have an income that lets them live and spend without frequent emergencies. Precisely because of this, the pain is not acute — it's dull. It's not <em>\"I can't make it to the end of the month\"</em>, it's <em>\"I don't really know where the money goes and I'm sometimes surprised\"</em>.</p><p>They're not seeking financial expertise. They don't want to learn to invest or optimize their portfolio. They simply want to not be surprised by their situation at the end of the month.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "What Activates Them",
          html: "<p>A moment of surprise — an expense higher than remembered, a month that went differently than expected. Not a crisis: a small friction between what they thought they were spending and what they actually spent.</p><p>In that moment they're receptive. If they encounter Wolly there — the right message, the right channel — the probability of download is high. If they encounter it in a neutral moment, without that trigger, the probability drops.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "What Makes Them Stay",
          html: "<p>Not data completeness. Not charts. The daily AI sentence — the one thing the bank will never give them. If that sentence is relevant, specific, non-generic, and arrives at the right moment, it becomes the reason to open the app every day. If it's generic or wrong, it becomes the reason to stop.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "UI and UX Implications",
          html: "<ul><li><strong>First screen after onboarding:</strong> must show real data, not an empty state. The user must immediately see the product at work — not an empty dashboard waiting for their input.</li><li><strong>Primary action always visible:</strong> logging an expense must be reachable in one tap from any screen. Not in the menu. Not after scrolling. Always visible.</li><li><strong>No initial configuration screen:</strong> every minute spent setting up the app before seeing a result increases the probability of abandonment. Onboarding must lead to the first logged expense, not the first selected preference.</li><li><strong>Immediate post-parsing feedback:</strong> after logging an expense, the user must immediately see what the app understood. Not a loader. Not a generic success message. The concrete result of the parsing — category, amount, context — visible in under 3 seconds.</li><li><strong>No red, no alert language:</strong> this user is not in an emergency and doesn't want to be treated as if they are. Red and alert language activate anxiety where none is needed and break the product's tone.</li><li><strong>Information hierarchy on Home:</strong> one main number readable at a glance, an AI sentence, three recent transactions. Everything else is in detail screens. Home answers one question only: how am I doing?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "What This Document Doesn't Say Yet",
          html: "<p>The persona is not complete. Certain data is still missing on: specific income level and saving patterns, dominant spending categories, social context of spending (alone vs group), precise emotional relationship with money (anxious vs curious vs indifferent), and channel-specific activation triggers. These elements will be defined in the second primary research wave and integrated into a v2 of this document before v2 feature development.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Development Checklist",
          html: "<p>Every new element passes these steps, in order.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Alignment with the Persona",
          html: "<ul><li>Does this element exist because the persona needs it, or because it's technically interesting?</li><li>Does it resolve the operational barrier or increase it?</li><li>Is it understandable without explanation on first contact?</li><li>Does it address someone who wants visibility, not control?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Alignment with Core Principles",
          html: "<ul><li>Is it reachable in at most 2 taps from Home?</li><li>Is the primary action visible without scrolling or menus?</li><li>Does it take less than 10 seconds to complete?</li><li>Does it add visual complexity to Home? If so, it belongs in Stats or a detail screen.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Alignment with Tone",
          html: "<ul><li>Does the copy use forbidden words? (budget, you should, great job, I recommend, goal)</li><li>Is the tone direct and informal, or has it slipped toward formal?</li><li>Do error states and empty messages have a consistent tone with the rest?</li><li>Is there a red color or unnecessary alert language?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Parsing and Data",
          html: "<ul><li>If this element depends on parsing, what happens if the parser is wrong?</li><li>If confidence is below 0.7, is an explicit confirmation request provided?</li><li>If GPT doesn't respond, is there a cache fallback?</li><li>Does the displayed data always use net_amount and never gross_amount where relevant?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Edge States",
          html: "<ul><li>What does the user see if they have no transactions yet?</li><li>What do they see on their first day of use?</li><li>What happens without a connection?</li><li>What happens if the expected data doesn't exist yet?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Position in Architecture",
          html: "<ul><li>Is it a core service or a future service? If future, is now the right moment?</li><li>Does it depend on a feature not yet built?</li><li>Does it introduce technical dependencies that complicate future development?</li><li>Is it modular — can it be updated without touching the rest?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Impact on Retention",
          html: "<ul><li>Does this element increase the probability that the user returns tomorrow?</li><li>Is it the kind of thing the bank can't provide?</li><li>If it disappeared, would the user notice?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Final Check",
          html: "<ul><li>Can it be simplified further without losing value?</li><li>Does a user seeing it for the first time understand what it does without reading anything?</li><li>Is it consistent with everything already in the app?</li></ul>"
        }
      }
    ]
  },
  {
    id: "wolly-brand-strategy",

    category: "wolly",
    subcategory: "marketing-plan",
    year: "2026",
    month: "05",
    day: "08",
    slug: "brand-strategy",
    title: "Brand Strategy Document",
    description: "Archetype, Differentiation & Visual Direction. The app embodies the Everyman archetype: a tool that speaks your language, not that of a financial advisor.",
    date: "May 8, 2026",
    coverImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>Archetype, Differentiation & Visual Direction</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "The Archetype: Everyman",
          html: "<p>Wolly embodies the <strong>Everyman</strong> archetype in its deepest sense: the disillusioned idealist who has chosen to keep their feet on the ground.</p><ul><li><strong>Its heroic act:</strong> Taking responsibility for one's daily life, one day at a time, without proclamations.</li><li><strong>The Buyer Persona:</strong> Someone who seeks clarity on their money but doesn't trust solutions that make them feel inadequate or judged. They seek a tool that \"speaks their language\" and not that of a financial advisor.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Differentiation Strategy: Wolly vs The Bank",
          html: "<p>Wolly's true competitor is not another budgeting app, but the bank's push notification.</p><ul><li><strong>The Bank:</strong> Cold, neutral, institutional. It's a system that communicates data, not a voice that communicates support.</li><li><strong>Wolly:</strong> It must be the visual and relational antithesis of that coldness. Wolly's value lies in the fact that the user, upon opening it, immediately feels they are not in a banking environment. Warmth is not a decoration; it's the selling point that justifies the price.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Reference Model: Creative Tension",
          html: "<p>Wolly's direction arises from the union of two opposite but complementary poles:</p>"
        }
      },
      {
        type: 'table',
        data: {
          headers: ["Reference", "Role", "Feature to Borrow"],
          rows: [
            ["Headspace", "Visual Narrative", "Consistency of tone, organic shapes, the feeling of being accompanied and never judged."],
            ["Things 3", "Interaction Architecture", "Speed of execution, structural rigor, extreme task efficiency."]
          ]
        }
      },
      {
        type: 'text',
        data: {
          html: "<p><strong>The Fundamental Constraint:</strong> Wolly must be <em>\"Soft but Fast\"</em>. If Headspace intentionally slows the user down, Wolly must welcome them with the same warmth but allow them to close the task in less than 10 seconds.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "The Central Message",
          html: "<p>The Everyman says: <em>\"I am like you. Being normal is okay.\"</em></p><p>Translated for Wolly: <strong>\"You don't have to get good with money. You just need to understand where yours goes.\"</strong></p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Visual Implications",
          html: "<ul><li><strong>Shapes and Lines:</strong> Moving away from fintech's geometric rigor to explore organic shapes and \"hand-drawn\" illustrations (Headspace style). This communicates that there's a person behind the app, not a cold algorithm.</li><li><strong>Font:</strong> Warm humanist sans-serif (DM Sans or Plus Jakarta Sans). Weights should create a conversation, not a report.</li><li><strong>Colors:</strong> Desaturated and everyday palette (sage green, soft terracotta, slate blue). Avoid \"alert\" colors (bank red) or \"success\" colors (neon green).</li><li><strong>Visual Speed:</strong> Warmth must never translate into superfluous animations that slow down data entry. \"Softness\" is in the aesthetics, \"speed\" is in the architecture.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Tone of Voice",
          html: "<p>Simple, direct, confidential.</p><ul><li><strong>The Daily AI Sentence:</strong> Speaks like a curious friend who's taken a look at the bank statement. It doesn't give unsolicited advice, it doesn't coach.</li><li><strong>Forbidden Words:</strong> Budget, you should, I recommend, great job, goal. These belong to the register of the \"Ruler\" or the \"Sage\", not the Everyman.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Open Questions — To Be Resolved",
          html: "<ul><li><strong>Specific Visual Register:</strong> Is Wolly closer to the softness of Mulino Bianco or the direct essentiality of Levi's?</li><li><strong>The AI Sentence:</strong> Should it have a dedicated visual container (a \"soft\" card) or live in the flow as pure text to maximize speed?</li><li><strong>Accent Color:</strong> Which desaturated color ensures the best readability in Dark Mode without losing the Everyman's warmth?</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Next Steps",
          html: "<ul><li><strong>Mood Board Construction:</strong> Creating a visual track comparing Headspace's narrative with Things 3's architecture.</li><li><strong>10-Second Test:</strong> Validating wireframes to ensure the \"soft\" aesthetic doesn't interfere with speed of use.</li><li><strong>Visual Beta Test:</strong> Presenting the two registers (Warm/Enveloping vs Direct/Essential) to testers to define the accent color.</li></ul>"
        }
      }
    ]
  },
  {
    id: "wolly-kpi-tracking",
    category: "wolly",
    subcategory: "data-analysis",
    year: "2026",
    month: "06",
    day: "03",
    slug: "tracking-and-analyzing-key-kpis",
    title: "Tracking and Analyzing Key KPIs",
    description: "The setup phase for tracking and analyzing user behavior, infrastructure performance, and live API costs for Wolly's AI systems.",
    date: "3 June 2026",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>One of the fundamental phases in launching a new product or digital platform is tracking and analyzing user behavior, as well as general performance and technical functionality. Market research and preliminary tests allow us to guide the product and develop the first prototypes; however, only the analysis of real usage behaviors in the field can reveal actual preferences, usage patterns, and priority areas for improvement.</p><p>Wolly, for example, uses three different modes for logging expenses. Which one is used the most? How long does the application take to process a single entry? How much does a user cost on a monthly basis? These are all crucial questions that require answers based on quantitative data from real users. Since the launch of the first private demo (dedicated to a restricted circle of testers) is just around the corner, it was essential to understand right now what to track and how to do it from an infrastructural standpoint.</p><p><em>*Note: the application aims to adhere to privacy standards from the start based on what is actually tracked: financial data is stored locally on the device, no profiling or marketing is conducted, Firebase Analytics is disabled in this beta, and only data strictly necessary for authentication (email via Google OAuth/Supabase) and temporary AI log processing is collected.*</em></p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Analysis Objectives",
          html: "<p>The first phase involved defining clear analysis objectives: what do we really need to know? What strategic points do we need to define? What is essential to understand during the first private demo? The definition of objectives is crucial. They must be targeted, measurable, and conform to SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound):</p><ul><li><strong>Which parsing tools people use:</strong> This data is essential for understanding which specific mode (among those offered) users prefer to record new financial transactions. Isolating this behavior will allow, in a later stage of development, the optimization of primary flows, improving both infrastructural performance and user interface usability (UX).</li><li><strong>Which analysis tool they use:</strong> It is necessary to understand whether, to analyze their expenses, people prefer to interact via written text or voice commands. Identifying the primary mode serves not only to optimize the user experience but also to understand which native tools of the application are considered most useful and accessible.</li><li><strong>Do people ask for financial advice or analysis of historical data?</strong> In this phase, also in light of the <a href='/en/projects/wolly/2026/04/21/user-research-problem-validation-and-ai-trust' target='_self'><strong>primary research</strong></a>, it was noted that people primarily desire a clear and immediate overview of their expenses (an overview), rather than proactive advice or a personal financial tutor. Despite this, the goal is to verify if Wolly can evolve in the future towards automated consulting or if users show no interest in this feature.</li><li><strong>What is the cost of a user?</strong> To ensure the economic sustainability of the project and accurately define the price of the future subscription, we need to calculate how much a user costs each month. Since the use of Artificial Intelligence services is based on a <em>pay-as-you-go</em> model (billing by consumption), the variable costs per user are linked to API calls. It is therefore essential to track the exact cost of each single operation in order not to affect margins.</li><li><strong>Which pages do users use the most?</strong> Mapping navigation behavior within the application allows for the identification of the most visited sections and features. Although the app is designed to perform most actions by directly accessing AI functions (reducing classic navigation), we need to understand which summary or settings pages capture the most user interest.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Tracking Tools Used and Analysis Stack",
          html: "<p>Once the objectives were defined, it was necessary to identify the useful tools for the analyses and establish where and how to centralize the data, so that it could be viewed and managed in a simple, clear, and fast way.</p><ul><li><strong>Google Analytics:</strong> Although initially configured using <a href='https://firebase.google.com/products/analytics' target='_blank'><strong>Google Firebase</strong></a> to monitor aggregate metrics like sessions or screens, Firebase Analytics has been <strong>disabled in this beta version</strong> to align with high privacy standards and data minimization.</li><li><strong>Supabase:</strong> Used to store completely anonymous technical logs and backend metrics related to AI usage, which are essential for tracking variable costs and token consumption. Query text, parameters, or personal identifiers are not stored.</li><li><strong>Looker Studio:</strong> Used as a centralized platform to supervise only the aggregate trend of variable costs and technical logs stored on Supabase, ensuring a clear and secure overview in a single screen.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Behavioral Metrics Analyzed",
          html: "<p>Having defined objectives and tools, we moved to selecting the actual metrics. It is essential to define clear and valuable KPIs that yield relevant information, avoiding the risk of getting lost in vanity metrics or redundant data.</p><h3>Google Analytics (Disabled)</h3><p>No user behavior, navigation, or detailed usage tracking metrics (such as unique users, screen views, or average session duration) are currently collected via Google Analytics, as it is disabled in the beta version.</p><h3>Supabase (Anonymous AI Logs)</h3><p>Only anonymous technical logs and metadata related to AI calls are stored on Supabase, which are essential for tracking costs and ensuring infrastructure performance:</p><ul><li><strong>Cost of each AI call:</strong> Calculates the monetary outlay associated with each single request sent to the language models to monitor financial sustainability.</li><li><strong>Call creation date:</strong> Records the exact timestamp of the operation to analyze usage flows over time.</li><li><strong>App version:</strong> Tracks the application build to isolate technical issues or anomalies linked to specific releases.</li><li><strong>Tokens used (input, processing, output):</strong> Measures token consumption to monitor service costs linked to AI responses.</li><li><strong>Operation duration:</strong> Records the response latency of the system to ensure a _smooth user experience._</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Conclusion and Reflections",
          html: "<p>Integrating the analysis infrastructure in this embryonic phase of the application has proven to be a fundamental step: it will allow us to guide product development based on data and concentrate development resources exclusively on the features that generate real value for the user. In the next article, I will show in detail how I configured the Looker Studio dashboard to obtain clear, efficient, and immediately actionable data analysis.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-prototype-v001",
    category: "wolly",
    subcategory: "product-design",
    year: "2026",
    month: "06",
    day: "07",
    slug: "prototyping-first-version-v001",
    title: "Development of the first working prototype (Wolly v0.0.1)",
    description: "Launching an application in a market already saturated and consolidated like that of personal finance apps requires a clear strategy: you don't need to reinvent the wheel, but you need to make it turn better. My goal from the beginning was to create an innovative product that bends to the real needs of the user, introducing a powerful Artificial Intelligence layer without disrupting the visual standards that people are already used to.",
    date: "June 7, 2026",
    coverImage: "/media/projects/wolly/wolly prototype/processed_Wolly_home.png",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>Launching a personal finance application in a saturated market requires a clear strategy: you don't need to reinvent the wheel, but to make it turn better. My goal with Wolly v0.0.1 was to lay the foundation of a lean application focused on offline transaction management, subsequently grafting a powerful Artificial Intelligence layer in a modular way.</p><p>This article summarizes the logical structure and UX/UI choices of the first functional prototype. Each of these areas will be explored in depth in dedicated upcoming articles.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Base Prototype",
          html: "<p>The primary goal of Wolly v0.0.1 was to validate a lean, responsive, and offline-first application. Before having the app communicate with complex AI models, it was essential to implement the <a href=\"/en/projects/wolly/2026/04/26/building-the-base-demo-before-ai-architecture\"><strong>base stability of traditional financial management</strong></a>.</p><h3>Core Engine & Local Database</h3><p>I developed an offline transaction engine for rapid manual logging and categorization of expenses and income. All data is stored directly on the user's device via SQLite/AsyncStorage, ensuring zero latency and absolute privacy. This initial local phase also hosts the contextual bug reporting system (Anomaly Reporter) to monitor operational health without compromising privacy.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Screens",
          html: "<p>The graphical interface provides the user with an immediate overview of their net worth and spending habits. I designed and developed four main vertical views based on dynamic charts:</p><h3>Flow Visualizations</h3><ul><li><strong>Cash Flow:</strong> Direct comparison between monthly income and expenses.</li><li><strong>Earnings & Expenses:</strong> Cards focused on tracking revenue sources and aggregating expenses by category.</li><li><strong>Net Worth:</strong> Overall state of accumulated wealth net of expenses incurred.</li></ul>"
        }
      },
      {
        type: 'gallery',
        data: {
          images: [
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_home.png", alt: "Main Dashboard" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_ai_chat.png", alt: "AI Assistant Chat" },
            { src: "/media/projects/wolly/wolly prototype/processed_wolly_fotocamera.png", alt: "OCR Camera Parsing" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_pagina_transazione.png", alt: "Transaction detail accordion" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_pagina_spese.png", alt: "Transaction history and categories" },
            { src: "/media/projects/wolly/wolly prototype/processed_Wolly_pagina_abbonamenti.png", alt: "Active subscriptions" }
          ]
        }
      },
      {
        type: 'text',
        data: {
          title: "AI Parsing Layer",
          html: "<p>The offline-to-online transition happens transparently and non-destructively. If network connectivity is lost, the app operates normally; when online, the AI layer grafts onto the existing system to eliminate manual input friction.</p><h3>External APIs & Semantic Enrichment</h3><p>By connecting the app to the <strong>Google Vision API</strong> (for receipt scanning) and the <strong>Groq API</strong> (for fast natural language inference), the application automatically captures and enriches each transaction. The AI interprets social context (friends, family), geographic status (vacation, business trips), purchase channels (online/offline), and smart tags, while also identifying future planned expenses and active subscriptions.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "AI Analysis",
          html: "<p>Once transaction logging was automated, I redesigned the analysis workflow, removing complex search filters. The objective is to let the user directly converse with their financial history.</p><h3>Queries & Just-in-Time (JIT) Widgets</h3><p>The user can ask open-ended questions in natural language (e.g. \"How much did I spend online this month with friends?\"). The AI interprets the intent, queries the local database, and evokes pre-configured UI templates (JIT Widgets for totals, distributions, lists, or timelines) populated on-the-fly.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Menu and Navigation",
          html: "<p>The main navigation menu (Tab Bar) was structured to guarantee lightning-fast access to the new AI features, maintaining a familiar layout.</p><h3>Centralized Multi-Gesture Menu</h3><p>The 5-icon Tab Bar centers around the central AI button. To avoid cluttering the screen with buttons, I designed a multi-gesture interaction system: single tap to open the AI text field, double tap to open the OCR camera, and long press (Hold) to record audio (with an SVG circular progress ring indicating the timer and swipe-up gestures to cancel).</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Tracking",
          html: "<p>Dealing with sensitive financial information made compliance and secure architecture priorities from day one of development.</p><h3>GDPR & KPI Monitoring</h3><p>I implemented anonymized technical logs on Supabase to monitor API token usage and latency, ensuring full GDPR compliance. If you want to explore the tracking stack and technology in depth, read the <a href=\"/en/projects/wolly/2026/06/03/tracking-and-analyzing-key-kpis\"><strong>dedicated tracking strategy and KPI article</strong></a>. Lastly, I implemented code-level guardrails to filter irrelevant requests and token limits to secure the system from cost spikes.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Core App Features",
          html: "<p>To complete the initial development phase, I structured the login flows, onboarding system, and data management policies to merge operational ease with system security.</p><h3>Onboarding and Access</h3><p>The initial user onboarding flow was reduced to the absolute minimum to lower the entry barrier. Access is managed securely via Google Login (OAuth), ensuring reliable access control and eliminating the need for custom credentials. All initial preferences and configurations are loaded in the background during the first launch.</p><h3>Privacy Policy</h3><p>Personal and financial data are secured at the core: the primary database resides locally on the user's device. Data transmission only occurs when utilizing the AI semantic enrichment layer, adhering to strict privacy policies aligned with GDPR compliance, without any form of commercial tracking or profiling.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Next Steps",
          html: "<p>The next milestone will be the release of a publicly accessible demo version. Following this, the final technical specifications and brand identity details will be established, laying the foundation for the launch of the first official stable version.</p>"
        }
      }
    ]
  },
  {
    id: "wolly-beta-landing",
    category: "wolly",
    subcategory: "product-design",
    year: "2026",
    month: "06",
    day: "11",
    slug: "creating-landing-page-beta-testers",
    title: "Creating the Landing Page for Beta Testers",
    description: "Development and design of a high-performance landing page to gather Wolly's beta testers, integrating Server Actions, Google Sheets, and a secure infrastructure in line with GDPR.",
    date: "June 11, 2026",
    coverImage: "/media/projects/wolly/wolly-beta-android.png",
    content: [
      {
        type: 'text',
        data: {
          html: "<p>The private testing phase is a crucial milestone in any application's lifecycle. To welcome and register beta testers for <strong>Wolly</strong>, I designed and developed a dedicated landing page on the <code>/beta</code> route, focusing on delivering a smooth, secure, and premium user experience. To drive initial traffic and capture early registrations, I launched a targeted LinkedIn post directed at professionals and enthusiasts.</p>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Website Structure (Pages & Routes)",
          html: "<p>The website is a web application built using <strong>Next.js</strong> and structured around the following main routes:</p><ul><li><strong>Home Page (<code>/</code>):</strong> A minimal landing page designed to kickstart the site's loading process.</li><li><strong>Beta Page (<code>/beta</code>):</strong> The primary landing page dedicated to tester sign-ups for the Wolly Beta version.</li><li><strong>Terms of Use (<code>/terms</code>):</strong> A legal page defining the rules of use for the Beta software, liability limitations (such as SQLite local offline storage on the user's device), and general terms.</li><li><strong>Privacy Policy (<code>/privacy</code>):</strong> A GDPR-compliant (EU Regulation 2016/679) legal page explaining which data is collected, how it is secured, and which external vendors are involved.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "User Interface (UI) Elements",
          html: "<p>On the <code>/beta</code> page, the interface has been crafted to ensure visual excellence and dynamic interactions:</p><ul><li><strong>Visual Design:</strong> A deep blue background (<code>#1A73E8</code>) enriched with fluid animations that move blurred light spots, simulating a floating, modern three-dimensional effect.</li><li><strong>Registration Form:</strong> A minimal form featuring a rounded email input field. Upon successful submission, the input field dynamically transitions to emerald green with a checkmark animation.</li><li><strong>Consent Checkboxes:</strong> Mandatory checkboxes for the user, requiring the acceptance of the Beta Terms of Use (opening in a new tab) and the Privacy Policy for data processing.</li><li><strong>Error Handling:</strong> If the user attempts to sign up without selecting the mandatory consents, the interface dynamically displays a red animated warning message.</li></ul>"
        }
      },
      {
        type: 'text',
        data: {
          title: "Integrations & Data Management (Backend)",
          html: "<p>Registration and tracking logic relies on Next.js <strong>Server Actions</strong> (implemented in <code>actions.ts</code>), securely interfacing with external services:</p><h3>Tester Email Collection</h3><p>The <code>submitBetaEmail</code> Server Action processes the email input and logs it directly into a <strong>Google Sheets</strong> spreadsheet (in a sheet named <em>Beta</em>) using Google APIs. The system is flexible: if the <em>Beta</em> sheet does not exist upon submission, it is automatically created before writing the data. In a second step, these gathered emails will be integrated as authorized profiles in <strong>Supabase</strong> to grant the testers login permissions to the mobile app.</p><h3>Survey Management</h3><p>The <code>submitForm</code> Server Action handles responses to a detailed questionnaire concerning data usage and personal finance (split into branches: active users, prospects, lost users). Along with the survey answers, useful analysis metadata is collected: submission timestamp, Country/City (detected via Vercel IP headers), device type (Mobile, Tablet, or Desktop), User Agent, total completion time, and the number of clicks on the back button.</p><h3>Access Architecture & Databases</h3><ul><li><strong>Google OAuth:</strong> App authentication is managed securely via a valid Google Account.</li><li><strong>Supabase:</strong> The main cloud database (hosted in Ireland, EU) handling user authentication under Row Level Security (RLS) policies.</li><li><strong>Local Security:</strong> Actual user financial data (transactions, budgets) resides entirely locally on the device in an offline SQLite database and is never uploaded to the cloud.</li><li><strong>AI Processing:</strong> Voice and text queries sent to the AI assistant pass temporarily through Groq APIs for inference but are never stored in the cloud.</li></ul>"
        }
      }
    ]
  }
];



