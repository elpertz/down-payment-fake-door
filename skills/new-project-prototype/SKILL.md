---
name: new-project-prototype
description: Create a new prototype screen or flow quickly using existing project components and structure. Trigger when a user asks to start a new page, feature mock, or end-to-end prototype flow.
---

# New Project Prototype

## Trigger
Use this skill when the user asks to create a new prototype, screen, or flow from scratch.

## Workflow
1. Choose flow type (landing page, pricing, signup/lead, dashboard empty state, or custom).
2. Select target file and route (default: `app/prototypes/page.tsx` unless user asks otherwise).
3. Scaffold section structure: header, core content blocks, primary CTA.
4. Wire core components from `components/ui` (Card, Button, Input, Label, Badge, etc.).
5. Add responsive layout classes for mobile-first behavior.
6. Define success criteria (what the user can click/read/test after changes).

## Output Contract
Return:
1. Touched file list with paths.
2. Patch-ready code edits.
3. Acceptance checklist:
- [ ] Clear flow and CTA
- [ ] Uses existing components
- [ ] Mobile + desktop usable
- [ ] Lint/build checks provided
