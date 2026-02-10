# Down Payment Fake Door

Testing ideas for down payment willingness among prospect users.

## What is this?

A fake-door experiment to measure user interest and willingness to commit to a down payment before building the full feature. The goal is to validate demand with minimal investment by presenting the concept to prospects and tracking engagement signals.

## How it works

1. Prospects are shown a down payment option during the flow
2. We measure clicks, drop-offs, and completion rates
3. Data informs whether to invest in a full implementation

## Tech stack

- **Next.js 16** with App Router
- **Tailwind CSS 4** with design tokens
- **Addi UI Kit** — Figma-aligned component library

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project structure

```
app/                  → Pages and layouts
components/ui/        → Reusable UI components
lib/                  → Utilities and motion config
public/               → Static assets (logos, icons)
```

## Routes

- `/` — Home page
- `/examples` — Component showcase
- `/prototypes/example-one` — Prototype workspace
- `/docs` — Project guide
