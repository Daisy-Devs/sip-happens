# ☕ Sip Happens — Café Website Demo

A full-stack demo project built to showcase modern web application development. Features a public-facing café website with a secure admin dashboard, all in a single monorepo.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), Tailwind CSS |
| Backend | Node.js, Express |
| State | RTK |
| Data | Supabase |
| Deployment | ? (frontend) + ? (API) |

---

## Project Structure

```
sip-happens/
├── apps/
│   ├── web/       #frontend  
|   ├── admin/      #admin panel
│   └── api/       #backend
├── packages/
│   └── shared/   # Types, schemas,components constants shared across apps
├── package.json
├── .gitignore
└── README.md
```

---

## Features

### Public Website
- **Home** — animated hero, featured drinks, testimonials, highlights
- **About** — café story, team, sourcing philosophy, timeline
- **Menu** — filterable/searchable menu with categories and pricing
- **Gallery** — masonry grid with lightbox
- **Contact** — contact form, business hours, embedded map, FAQ

### Admin Dashboard
- Menu item management — add, edit, delete, toggle availability
- Category management
- Dashboard overview with item/category counts
- Dark mode support

---
*Built as a portfolio/demo project. Not affiliated with any real café.*
