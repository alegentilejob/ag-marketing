# Email Campaign — Outreach Startup Milano

Cartella dedicata ai template HTML per la campagna di email marketing di candidatura spontanea verso startup a Milano.

---

## File

| File | Descrizione |
|------|-------------|
| `outreach-startup-template.html` | Template principale da importare su Brevo |

---

## Come usare su Brevo

### 1. Importa il template
- Vai su **Brevo → Email → Template**
- Clicca **"Nuovo Template"** → **"Incolla HTML"**
- Copia e incolla il contenuto di `outreach-startup-template.html`

### 2. Personalizzazione automatica — Nome Azienda
Il campo `{{ contact.COMPANY }}` viene sostituito automaticamente da Brevo con il valore dell'attributo **COMPANY** nel profilo contatto.

Per impostare il valore:
- Vai su **Contatti** → seleziona il contatto
- Compila il campo **"Azienda"** (o `COMPANY`)
- In invio Brevo sostituisce automaticamente ogni `{{ contact.COMPANY }}` con il valore reale

### 3. Tracciamento UTM dei Click (utm_content)

Per poter tracciare esattamente **quale bottone o link** viene cliccato all'interno dell'email (ad esempio: per capire se i lettori cliccano sul CV in alto o in basso), abbiamo aggiunto il parametro `utm_content` direttamente nel codice HTML dei template.

Brevo manterrà questo parametro e aggiungerà dinamicamente gli altri parametri standard della campagna (`utm_source`, `utm_medium`, `utm_campaign`, `utm_id`).

Ecco i valori di `utm_content` utilizzati nei vari link:

| Sezione / Elemento | Link con utm_content | Scopo |
|--------------------|----------------------|-------|
| **Hero CV** | `/media/AlessandroGentile_CV.pdf?utm_content=hero_cv` | Visualizzazione CV dall'Hero (solo template LeanTil) |
| **Hero Cover Letter** | `/media/AlessandroGentile_LetteraDiPresentazione.pdf?utm_content=hero_cover_letter` | Visualizzazione Cover Letter dall'Hero (solo template LeanTil) |
| **Skills Link** | `/skills?utm_content=skills_link` | Link "Vedi tutte le skill" |
| **Esperienza Naxa** | `/esperienze/naxa?utm_content=exp_naxa` | Card dell'esperienza Naxa |
| **Esperienza Naxa Arrow** | `/esperienze/naxa?utm_content=exp_naxa_arrow` | Freccia angolare della card Naxa |
| **Esperienza Anularis** | `/esperienze/anularis?utm_content=exp_anularis` | Card dell'esperienza Anularis |
| **Esperienza Anularis Arrow** | `/esperienze/anularis?utm_content=exp_anularis_arrow` | Freccia angolare della card Anularis |
| **Esperienza Fridhem** | `/esperienze/fridhem-center?utm_content=exp_fridhem` | Card dell'esperienza Fridhem Center |
| **Esperienza Fridhem Arrow** | `/esperienze/fridhem-center?utm_content=exp_fridhem_arrow` | Freccia angolare della card Fridhem Center |
| **Tutte le esperienze** | `/esperienze?utm_content=all_experiences` | Link "Vedi tutte le esperienze" |
| **Progetto Wolly** | `/progetti/wolly?utm_content=wolly_project` | Link al caso studio Wolly |
| **Footer CV** | `/media/AlessandroGentile_CV.pdf?utm_content=footer_cv` | Pulsante principale CV nel footer |
| **Footer Cover Letter** | `/media/AlessandroGentile_LetteraDiPresentazione.pdf?utm_content=footer_cover_letter` | Pulsante Cover Letter nel footer (solo template LeanTil) |
| **Footer Website Link** | `/?utm_content=footer_website` | Link testuale "Visita il mio sito web" |
| **Footer CV Link** | `/media/AlessandroGentile_CV.pdf?utm_content=footer_cv_link` | Link testuale "Scarica CV" |
| **Footer Cover Letter Link** | `/media/AlessandroGentile_LetteraDiPresentazione.pdf?utm_content=footer_cover_letter_link` | Link testuale "Lettera di Presentazione" (solo template LeanTil) |

### 4. CTA email
Il bottone principale apre una email pre-compilata:
```
alegentilejob@gmail.com
Oggetto: Colloquio — Alessandro Gentile × [Azienda]
```

### 5. Unsubscribe
Il tag `{{ unsubscribe }}` è obbligatorio per Brevo — viene sostituito automaticamente con il link di disiscrizione.

---

## Checklist pre-invio

- [ ] Profilo contatto su Brevo ha il campo **COMPANY** compilato
- [ ] Invia una **email di test** a te stesso prima della campagna
- [ ] Controlla che `{{ contact.COMPANY }}` venga sostituito correttamente nell'anteprima Brevo
- [ ] Verifica che i link UTM siano tracciati in GA4 / analytics del sito
