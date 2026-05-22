# Linee Guida di Sviluppo Grafico e Tipografico (Metodologia THAt & Design System)

Questa guida delinea i principi universali e riutilizzabili per lo sviluppo grafico e tipografico, strutturata come una "skill" semantica basata sui fondamenti dei sistemi di design e della tipografia professionale. **Qualsiasi agente AI deve leggere e applicare rigorosamente questo documento prima di intraprendere qualsiasi operazione di sviluppo visivo o tipografico su questa codebase.**

---

### 1. Fondamenta e Logica di Sistema
Ogni elemento grafico deve far parte di un **linguaggio visivo comune** che riduca il debito di design e acceleri il processo creativo.
*   **Design Tokens:** Codifica le decisioni di design (colori, spaziature, font) come entità atomiche e variabili riutilizzabili per garantire una **singola fonte di verità** tra diverse piattaforme.
*   **Centralizzazione e Riutilizzo:** Controlla sempre se intestazioni (headings), testi, bottoni, card o altri componenti UI sono già stati centralizzati e definiti a livello globale nel design system o in `globals.css`. Non inventare nuove varianti, classi estemporanee o stili ad-hoc se un componente o uno stile equivalente è già presente. Riutilizza ed estendi esclusivamente gli stili centralizzati per mantenere una coerenza visiva rigorosa in tutta la codebase.
*   **Griglia e Struttura (Rapporti Aurea e Fibonacci):** Utilizza una **scala basata sulla sequenza di Fibonacci** (1, 2, 3, 5, 8, 13, 21, 34, 55, 89...) e sui **rapporti della Sezione Aurea (1.618)** per determinare margini, padding e distanze spaziali coerenti e armoniose. Ad esempio, scala le spaziature base di 8px tramite moltiplicatori di Fibonacci (es. 8px, 16px, 24px, 40px, 64px, 104px, 168px) per creare progressioni di spazio che richiamano le geometrie della natura ed offrono una sensazione di naturale armonia ed equilibrio visivo.
*   **Componenti Modulari:** Costruisci elementi (bottoni, input) affinché siano **modulari, componibili, generici e flessibili**, evitando dipendenze incrociate non gestite.

### 2. Standard Tipografici (Macro e Micro)
La tipografia deve equilibrare funzione ed estetica, agendo sia a livello di composizione (macro) che di dettaglio (micro).
*   **Gerarchia Visiva:** Stabilisci una gerarchia chiara variando dimensione, peso e postura. Il titolo deve essere l'elemento più evidente, seguito da sottotitoli e testo del corpo.
*   **Dimensioni Base:** Utilizza **16px (1rem)** come dimensione di base per il testo del corpo, essendo lo standard per la leggibilità nei browser.
*   **Interlinea (Leading):** Imposta un rapporto di **1.4–1.5x** rispetto alla dimensione del font per i blocchi di testo estesi, e un rapporto più stretto (**1.125–1.25x**) per i titoli.
*   **Scala Modulare:** Usa una scala matematica (es. rapporto 8:13 o sequenza di Fibonacci) per generare dimensioni di testo coerenti e armoniose.

### 3. Sviluppo degli Elementi (Processo THAt)
Applica la metodologia **THAt** per lo sviluppo di ogni nuovo elemento o carattere tipografico:
1.  **Trajectorizing (Traiettoria):** Definisci il punto di partenza scegliendo "caratteri di controllo" o forme iniziali che carichino il design di potenziale per informare gli elementi successivi.
2.  **Homologizing (Omologazione):** Sviluppa una **continuità relazionale** tra le forme. Gli elementi devono derivare logicamente dai predecessori (es. la curva di una 'n' informa quella di una 'm' o 'u') per creare un sistema armonioso.
3.  **Attenuating (Attenuazione):** Affina il design attraverso un **test critico costante**. Identifica le incongruenze visive e correggile per ottenere un miglioramento accrescitivo (Accretive Amelioration).

### 4. Colore e Accessibilità
Il colore non è solo estetica, ma veicola feedback, informazioni e gerarchia.
*   **Palette Funzionale:** Definisci 1-3 colori primari per il brand, neutri (grigi) per sfondi e bordi, e colori di stato per **errore, avviso e successo**.
*   **Accessibilità (WCAG):** Assicura che i contrasti cromatici rispettino le linee guida **WCAG 2.0** (rapporto minimo 4.5:1 per testo normale) per rendere il contenuto fruibile a tutti.

### 5. Regole di Refinitura
*   **Spaziatura (Kerning & Tracking):** Regola lo spazio tra i caratteri per evitare collisioni o buchi visivi, specialmente a dimensioni grandi (Display).
*   **Allineamento:** Prediligi l'allineamento a sinistra (**Flush Left**) per i paragrafi estesi per facilitare la lettura, mantenendo una lunghezza di riga tra i **45 e i 75 caratteri**.

---
*Documento di riferimento visivo e tipografico per lo sviluppo del portfolio.*
