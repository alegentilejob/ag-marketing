# Tassonomia di Tracciamento — Mappatura URL Bilingue

Documento di riferimento per la struttura URL, gli slug tradotti e gli identificativi di tracciamento GTM/GA4.

---

## 1. Convenzione URL Multilingua

- **Italiano (default)**: `ag-marketing.vercel.app/[pagina]`
- **Inglese**: `ag-marketing.vercel.app/en/[page]`

> [!IMPORTANT]
> L'italiano è la lingua predefinita e non ha prefisso. L'inglese usa sempre il prefisso `/en/`. I percorsi inglesi vengono gestiti via Middleware con `rewrite` interni, mantenendo gli URL "puliti" e ottimizzati per la SEO locale.

---

## 2. Mappatura Slug Finale (Implementata)

### Pagine Statiche (Mapping Middleware)

| Pagina | Percorso Interno (IT) | Slug Esterno (EN) | URL Finale EN |
| :--- | :--- | :--- | :--- |
| Homepage | `/` | `/` | `/en/` |
| Chi Sono | `/chi-sono` | `about-me` | `/en/about-me` |
| Esperienze | `/esperienze` | `experience` | `/en/experience` |
| Progetti | `/progetti` | `projects` | `/en/projects` |
| Skill | `/skills` | `skills` | `/en/skills` |
| Blog | `/blog` | `blog` | `/en/blog` |
| CV | `/cv` | `cv` | `/en/cv` |

> [!NOTE]
> La pagina `/grazie` (e `/en/thank-you`) è stata esclusa dal tracciamento delle conversioni principali in favore del tracciamento diretto degli eventi di contatto nel footer.

---

### Esperienze (dettaglio)

| Esperienza | URL Italiano | URL Inglese |
| :--- | :--- | :--- |
| Naxa | `/esperienze/naxa` | `/en/experience/naxa` |
| Fridhem Center | `/esperienze/fridhem-center` | `/en/experience/fridhem-center` |
| Anularis | `/esperienze/anularis` | `/en/experience/anularis` |

---

### Progetti (dettaglio — con data)

| Progetto | URL Italiano | URL Inglese |
| :--- | :--- | :--- |
| Wolly Finance | `/progetti/wolly/2026/04/18/desk-research-la-nuova-era-della-finanza-personale` | `/en/projects/wolly/2026/04/18/desk-research-the-new-era-of-personal-finance` |

---

### Blog (dettaglio — con data)

I blog condividono lo stesso dataset dei progetti. La struttura URL è identica:

| Articolo | URL Italiano | URL Inglese |
| :--- | :--- | :--- |
| Wolly Finance | `/blog/wolly/2026/04/18/desk-research-la-nuova-era-della-finanza-personale` | `/en/blog/wolly/2026/04/18/desk-research-the-new-era-of-personal-finance` |

---

## 3. Identificatori di Pagina per GA4

| Pagina | Page Path IT | Page Path EN | Content Group |
| :--- | :--- | :--- | :--- |
| Homepage | `/` | `/en/` | `home` |
| Chi Sono | `/chi-sono` | `/en/about-me` | `about` |
| Esperienze Hub | `/esperienze` | `/en/experience` | `experience` |
| Esperienza Dettaglio | `/esperienze/[id]` | `/en/experience/[id]` | `experience_detail` |
| Progetti Hub | `/progetti` | `/en/projects` | `projects` |
| Progetto Dettaglio | `/progetti/[cat]/[date]/[slug]` | `/en/projects/[cat]/[date]/[slug]` | `project_detail` |
| Skill | `/skills` | `/en/skills` | `skills` |
| Blog Hub | `/blog` | `/en/blog` | `blog` |
| Blog Dettaglio | `/blog/[cat]/[date]/[slug]` | `/en/blog/[cat]/[date]/[slug]` | `blog_detail` |

---

## 4. Header & Navigazione (ID Strategici Stabili)

Questi ID sono identici sia in IT che in EN per facilitare il tracciamento aggregato.

| Componente | ID | Data Attribute | Note |
| :--- | :--- | :--- | :--- |
| Logo "agm." | `nav_logo_header` | `logo_home` | Link dinamico (/, /en/) |
| Menu Experience | `nav_link_experience_header` | `nav_experience` | |
| Menu Projects | `nav_link_projects_header` | `nav_projects` | |
| Menu Skills | `nav_link_skills_header` | `nav_skills` | |
| Menu About | `nav_link_about_header` | `nav_about` | |
| Menu Blog | `nav_link_blog_header` | `nav_blog` | |
| Lingua IT/EN | `nav_lang_switch` | `lang_toggle` | |
| CTA Contatti | `cta_contact_header` | `contact_header` | |

---

## 5. Navigazione Mobile (ID Dedicati)

| Componente | ID | Note |
| :--- | :--- | :--- |
| Menu Experience | `nav_link_experience_mobile` | |
| Menu Projects | `nav_link_projects_mobile` | |
| Menu Skills | `nav_link_skills_mobile` | |
| Menu About | `nav_link_about_mobile` | |
| Menu Blog | `nav_link_blog_mobile` | |
| CTA Contatti | `cta_contact_mobile` | |

---

## 6. Componenti Globali (ID Semplificati)

| Componente | ID | Note |
| :--- | :--- | :--- |
| Biografia Link | `nav_link_biografia` | |
| Esperienze "Vedi Tutti" | `cta_exp_view_all` | |
| Card Esperienza | `cta_exp_item_[id]` | es: `cta_exp_item_naxa` |
| Hub Progetti Link | `cta_projects_view_hub` | |
| Card Progetto | `cta_project_card_[id]` | es: `cta_project_card_wolly-finance` |
| Email | `lnk_email` | |
| LinkedIn | `lnk_linkedin` | |
| Telefono | `lnk_phone` | |
| Skill | `lnk_skill_[name]` | es: `lnk_skill_seo_/_aeo` |
| Software | `lnk_software_[name]` | es: `lnk_software_google_analytics` |

---

## 7. Eventi Custom (Data Layer)

### `language_switch`
```js
{
  event: 'language_switch',
  from_lang: 'it',
  to_lang: 'en',
  page_path: '/progetti/wolly/...'
}
```

### `view_project`
```js
{
  event: 'view_project',
  project_id: 'wolly-finance',
  project_category: 'wolly',
  page_lang: 'en',
  page_path: '/en/projects/wolly/...'
}
```

### `view_article`
```js
{
  event: 'view_article',
  article_id: 'wolly-finance',
  article_category: 'wolly',
  page_lang: 'it',
  page_path: '/blog/wolly/...'
}
```

### `contact_click`
Pushato al click sui link di contatto. Sostituisce la Thank-you page come conversione principale.
```js
{
  event: 'contact_click',
  contact_type: 'email' | 'copy_email' | 'linkedin' | 'phone' | 'cv' | 'cover_letter',
  contact_value: 'email@example.com' | 'linkedin_url' | 'phone_number' | 'filename.pdf',
  click_location: 'hero' | 'footer',
  page_path: '/chi-sono'
}
```

---

## 8. Strategia UTM Standardizzata

Per garantire l'attribuzione corretta del traffico in GA4, utilizzare i seguenti parametri UTM quando si condivide il link del sito.

### LinkedIn (Social & Bio)

| Contesto | URL Suggerito | Note |
| :--- | :--- | :--- |
| **Bio Profilo (IT)** | `/?utm_source=linkedin&utm_medium=social&utm_campaign=bio_it` | |
| **Bio Profilo (EN)** | `/en/?utm_source=linkedin&utm_medium=social&utm_campaign=bio_en` | |
| **Post / Commenti** | `/?utm_source=linkedin&utm_medium=social&utm_campaign=post_[slug]` | Sostituire `[slug]` con titolo post |
| **Messaggi Direct** | `/?utm_source=linkedin&utm_medium=direct_message&utm_campaign=recruiter` | |

### Email & Outreach (CV & Cover Letter)

Utilizzare questi link nei documenti (PDF) o nelle email inviate ai recruiter.

| Contesto | URL Suggerito | Note |
| :--- | :--- | :--- |
| **CV / Resume (IT)** | `/?utm_source=cv&utm_medium=pdf&utm_campaign=curriculum_vitae_it` | Link cliccabile nel PDF |
| **CV / Resume (EN)** | `/en/?utm_source=cv&utm_medium=pdf&utm_campaign=curriculum_vitae_en` | |
| **Cover Letter (IT)** | `/?utm_source=cv&utm_medium=pdf&utm_campaign=cover_letter_it` | |
| **Cover Letter (EN)** | `/en/?utm_source=cv&utm_medium=pdf&utm_campaign=cover_letter_en` | |
| **Email Firma** | `/?utm_source=email&utm_medium=signature&utm_campaign=work_mail` | |
| **Email Personale** | `/?utm_source=email&utm_medium=direct&utm_campaign=outreach` | |

---

## 9. Manutenzione Checklist SEO/Tracking

- [ ] Verificare che ogni nuovo progetto abbia lo slug tradotto in `src/utils/navigation.ts`.
- [ ] Assicurarsi che le immagini abbiano tag `alt` descrittivi per l'SEO.
- [ ] Testare i link UTM periodicamente tramite il "DebugView" di GA4.
- [ ] Mantenere aggiornata la `SITEMAP.md` per riflettere nuove sezioni del sito.
