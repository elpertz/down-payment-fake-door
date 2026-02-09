# AGENTS.md

## Project Purpose
This repository is a beginner-friendly UI kit for fast product prototyping.
Goal: help users move from idea to clickable screen quickly using reusable components and clear routes.

## File Map (Read This First)
- `app/page.tsx`: Home entry points (workflow + project-type starters)
- `app/examples/page.tsx`: Full component showcase and states
- `app/prototypes/page.tsx`: Scratchpad to build prototype flows
- `components/ui/*`: Reusable UI primitives and wrappers
- `app/globals.css`: Design tokens and typography utilities
- `README.md`: Beginner onboarding and practical usage
- `STARTER-CHECKLIST.md`: Build/ship checklist
- `skills/*/SKILL.md`: Local project skills for repeatable workflows

## Editing Guardrails
1. Keep language beginner-first in docs and user-facing copy.
2. Reuse existing UI components before creating new ones.
3. Keep one screen focused on one flow unless user asks otherwise.
4. Preserve current visual system (tokens, typography, spacing rhythm).
5. Prefer minimal, patch-ready edits over large rewrites.
6. Validate with `pnpm lint` and `pnpm build` before handoff when possible.

## Skill Trigger List (Local)
Use these repo-local skills when request intent matches:
- `skills/addi-figma-mcp/SKILL.md` (preferred for Figma URLs and Addi design-system alignment)
- `skills/new-project-prototype/SKILL.md`
- `skills/ui-iteration-process/SKILL.md`
- `skills/ux-exploration-flow/SKILL.md`

## Agent Execution Order
1. Understand the request and lock success criteria.
2. Locate the exact files to edit.
3. Reuse existing component primitives and patterns.
4. Return patch-ready changes in small, verifiable steps.
5. Provide verification commands and expected outcomes.

## Teaching Note
For response style, coaching behavior, and review rubric, follow:
- `docs/AGENT-ROLE-PROTOTYPE-COACH.md`
