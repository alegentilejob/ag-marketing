# LinkedIn UTM Strategy & Template Guide

Questo documento contiene i template pronti all'uso per tracciare il traffico proveniente da LinkedIn verso il sito **ag-marketing.vercel.app**.

---

## 1. Struttura Generale UTM
Per LinkedIn, utilizziamo sempre i seguenti parametri base:
- `utm_source=linkedin`
- `utm_medium=social` (o `direct_message` per i messaggi privati)

---

## 2. Template Pronti all'Uso

### A. Link Bio (Profilo LinkedIn)
Da inserire nella sezione "Link in bio" o nelle informazioni di contatto.
- **Italiano:** `https://ag-marketing.vercel.app/?utm_source=linkedin&utm_medium=social&utm_campaign=bio_it`
- **Inglese:** `https://ag-marketing.vercel.app/en/?utm_source=linkedin&utm_medium=social&utm_campaign=bio_en`

### B. Post e Commenti
Utilizzare questo formato per ogni nuovo post. Sostituire `[slug]` con una parola chiave che identifichi il post (es. `wolly_launch`).
- **Template:** `https://ag-marketing.vercel.app/?utm_source=linkedin&utm_medium=social&utm_campaign=post_[slug]`

### C. Messaggi Diretti (Recruiter / Networking)
Da usare quando invii il link privatamente.
- **Template:** `https://ag-marketing.vercel.app/?utm_source=linkedin&utm_medium=direct_message&utm_campaign=outreach`

---

## 3. Tabella Rapida di Consultazione

| Destinazione | Lingua | UTM Campaign | Link Completo |
| :--- | :--- | :--- | :--- |
| Homepage | IT | `bio_it` | [Copia IT Bio](https://ag-marketing.vercel.app/?utm_source=linkedin&utm_medium=social&utm_campaign=bio_it) |
| Homepage | EN | `bio_en` | [Copia EN Bio](https://ag-marketing.vercel.app/en/?utm_source=linkedin&utm_medium=social&utm_campaign=bio_en) |
| Progetti | IT | `projects_it` | [Copia IT Hub](https://ag-marketing.vercel.app/progetti/?utm_source=linkedin&utm_medium=social&utm_campaign=projects_it) |
| Progetti | EN | `projects_en` | [Copia EN Hub](https://ag-marketing.vercel.app/en/projects/?utm_source=linkedin&utm_medium=social&utm_campaign=projects_en) |

---

## 4. Come Generare Nuovi Link (Generator Rapido)
Se vuoi creare un link per una pagina specifica, incolla questo codice nella console del browser (F12) mentre sei sulla pagina del tuo sito:

```javascript
(function() {
  const url = new URL(window.location.href);
  url.searchParams.set('utm_source', 'linkedin');
  url.searchParams.set('utm_medium', 'social');
  url.searchParams.set('utm_campaign', 'post_' + prompt("Inserisci il nome della campagna (es: lancio_blog):"));
  console.log("%cLink Generato:", "color: #0077b5; font-weight: bold; font-size: 16px;");
  console.log(url.toString());
})();
```

---

## 5. Verifica in Google Analytics (GA4)
1. Apri **GA4**.
2. Vai in **Report** > **Acquisizione** > **Acquisizione Traffico**.
3. Filtra per "Sorgente/Mezzo sessione" per vedere `linkedin / social`.
4. Aggiungi una dimensione secondaria "Campagna sessione" per distinguere `bio_it`, `bio_en`, ecc.
