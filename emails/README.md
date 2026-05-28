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

### 3. UTM applicati

Tutti i link del template usano solo:

```
utm_medium=cold_outreach&utm_campaign=get_interview
```

| Sezione | Link tracciato |
|---------|---------------|
| Chi sono | `/chi-sono` |
| Esperienza Naxa | `/esperienze/naxa` |
| Esperienza Anularis | `/esperienze/anularis` |
| Tutte le esperienze | `/esperienze` |
| Progetto Wolly | `/progetti/wolly` |
| LinkedIn | `linkedin.com/in/...` |
| Portfolio | `ag-marketing.vercel.app` |

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
