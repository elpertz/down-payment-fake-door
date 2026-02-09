# Starter Checklist

Use this checklist each time you begin a new prototype.

## 1) Environment Setup

- [ ] Open terminal in this project folder
- [ ] Run `pnpm install`
- [ ] Run `pnpm dev`
- [ ] Open `http://localhost:3000`

## 2) Understand The Kit

- [ ] Open `/examples`
- [ ] Review buttons, cards, form controls, labels, and badges
- [ ] Note which component variants you will reuse

## 3) Start Building

- [ ] Open `/prototypes`
- [ ] Pick one flow only (signup, pricing, dashboard, etc.)
- [ ] Replace placeholder text with your product copy
- [ ] Keep spacing and typography aligned with examples

## 4) AI Pairing Flow

- [ ] Write a clear prompt with goal + file path + constraints
- [ ] Ask AI for exact code edits, not abstract ideas
- [ ] Test the result immediately in browser
- [ ] Keep only useful changes

## 5) Quality Check

- [ ] Run `pnpm lint`
- [ ] Check mobile and desktop layouts
- [ ] Verify hover/focus/disabled states
- [ ] Confirm color contrast and readability

## 6) Motion Decision

- [ ] Keep motion off while wireframing
- [ ] Enable motion only for polished demos: `NEXT_PUBLIC_UI_MOTION=on`
- [ ] Restart dev server after changing env value

## 7) Ship Readiness

- [ ] Remove obvious placeholder text
- [ ] Verify links and button actions
- [ ] Run `pnpm build` before final handoff
