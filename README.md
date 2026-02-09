# UI Kit Starter (Beginner-Friendly)

This template helps you turn an idea into a clickable prototype fast, even if you are new to code. It includes reusable UI components, examples, and starter screens so you can focus on product thinking instead of setup.

## 5-Minute Setup (PNPM Only)

1. Open terminal in this project folder.
2. Install dependencies:

```bash
pnpm install
```

3. Start the local app:

```bash
pnpm dev
```

4. Open `http://localhost:3000`.

If this works, your environment is ready.

## Where To Click First

- `/` = Home page with entry points.
- `/examples` = Visual library of components and states.
- `/prototypes` = Scratchpad to build your own screen quickly.

Simple term:
- `Route` means page URL. Example: `/examples`.

## Best Practices (Use This Repo Well)

1. Reuse existing components before creating new ones.
2. Keep one prototype focused on one flow (example: signup only).
3. Check both mobile and desktop before sharing.
4. Run quality checks before handoff:
```bash
pnpm lint
pnpm build
```
5. Keep motion off while wireframing. Turn it on only for polished demos.

## What To Edit First

1. `app/prototypes/page.tsx` for your first feature screen.
2. `components/ui/*` only when you need new component variants.
3. `app/globals.css` only when tokens must change.

## AI Prompt Templates (Copy/Paste)

Template 1: Build a new section
```txt
Goal: Build a pricing section in app/prototypes/page.tsx.
Constraints: Use existing Card, Button, Badge. Keep spacing consistent with /examples. Mobile + desktop.
Output: Return exact code edits only.
```

Template 2: Improve an existing screen
```txt
Goal: Improve clarity and hierarchy in app/prototypes/page.tsx.
Constraints: Do not add new libraries. Reuse current components and typography tokens.
Output: Return patch-ready edits and a short reason for each change.
```

Template 3: UX exploration
```txt
Goal: Propose 3 UX variants for a lead form flow.
Constraints: Keep current visual style and components.
Output: Give variant A/B/C with pros/cons, then pick one and provide code edits.
```

## Common Mistakes and Fixes

1. Command not found for pnpm
- Fix: install pnpm globally, then rerun `pnpm install`.

2. Styles look wrong
- Fix: restart dev server and confirm `app/globals.css` is imported in `app/layout.tsx`.

3. Page returns 404
- Fix: confirm the route exists under the `app/` folder.

4. Build fails
- Fix: run `pnpm lint`, fix errors, then run `pnpm build` again.

## Quick Prototype Done Checklist

- [ ] One flow is complete (not multiple mixed flows)
- [ ] Main call-to-action is clear
- [ ] Mobile and desktop both checked
- [ ] Hover/focus/disabled states checked
- [ ] `pnpm lint` passes
- [ ] `pnpm build` passes

## Project Structure

- `app/page.tsx`: Home entry points
- `app/examples/page.tsx`: Component showcase
- `app/prototypes/page.tsx`: Starter workspace
- `components/ui/*`: Reusable components
- `app/globals.css`: Design tokens and global styles
- `lib/motion/*`: Motion toggle and transitions

## Motion Toggle

Motion is off by default.

Create `.env.local`:

```bash
NEXT_PUBLIC_UI_MOTION=on
```

Restart `pnpm dev` after changing env values.
