Ecco la sintesi estrema in bullet point, ottimizzata per il massimo risparmio di token ma senza alcuna perdita informativa, strutturata come istruzioni dirette per l'AI:

📐 **1. Principi Matematici & Proporzioni**
- **Rapporto Aureo ($\phi \approx 1.618$)**: Calcola proporzionalmente margini, padding, media e testi.
- **Layout Ratio ($61.8\% / 38.2\%$)**: Dividi i layout asimmetrici a due colonne in Area Principale ($61.8\%$) e Sidebar ($38.2\%$).
- **Scala Tipografica & Media**: Applica la sequenza di Fibonacci ai font e usa aspect ratio aurei ($1.618:1$) per immagini/video.
- **Spirale Aurea & Punti di Forza**: Colloca gli elementi critici (CTA, loghi, icone) nei centri di attenzione naturali della spirale.

🌊 **2. Logica di Sviluppo a Cascata (Top-Down)**
- **Fase 1 - Vincoli Globali**: Mappa e sottrai gli ingombri fissi (Header, Navbar, Breadcrumb, Footer) e i margini globali per calcolare lo spazio residuo ($H_{\Delta}$, $W_{\Delta}$).
- **Fase 2 - Area Dinamica (Viewport)**: Isola lo spazio utile in un rettangolo perfetto senza scrollbar, calcolando l'altezza esatta:
  $$H_{\text{disponibile}} = 100\text{vh} - H_{\Delta}$$
- **Fase 3 - Suddivisione Modulare**: Dividi l'area utile in macro-sezioni (orizzontali/verticali) usando scomposizioni simmetriche (stesse dimensioni) o asimmetriche (quadrato $1$ + rettangolo $0.618$).
- **Fase 4 - Micro-Sezionamento**: Ripeti ricorsivamente la scomposizione in sotto-rettangoli geometrici fino al singolo componente, allineando gli elementi interni alle linee di forza e usando il white space come cuscinetto calcolato.

🤖 **3. Regole di Esecuzione AI & Best Practice**
- **Ordine Rigoroso**: Esegui tassativamente in sequenza (Fasi 1 ➔ 2 ➔ 3 ➔ 4).
- **Automazione & Flessibilità**: Applica le regole geometriche di default combinando $\phi$ e Regola dei Terzi, senza richieste esplicite dell'utente.
- **Adattabilità Responsiva**: Preserva le proporzioni geometriche e il vincolo "above the fold" (100vh) su tutti i breakpoint (mobile, tablet, ultrawide).
- **Autovalidazione**: Verifica matematicamente i pesi visivi e l'assenza di overflow interni prima di rilasciare il codice; se necessario, ricalcola altezze, padding e font.
