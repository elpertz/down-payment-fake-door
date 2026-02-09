---
name: addi-figma-mcp
description: Addi's UIKit design system + Figma MCP integration for implementing designs with correct tokens. Use when implementing Figma designs for Addi products, building Addi UI components, working with Addi color or typography tokens, translating Figma designs to code (Web or React Native), or when a Figma URL is provided for an Addi project. Triggers on "implement design", "Addi tokens", "design system", "use the UIKit", or when building any Addi UI.
---

# Addi Figma MCP

Implements Addi designs from Figma using the UIKit token system. Requires a Figma MCP server connection (remote or desktop).

## Platform Detection

Before generating any code, detect the project's platform:

1. Check `package.json` for `react-native` dependency
2. If found → **React Native**: Use `StyleSheet.create()`, colors as hex strings, sizes as unitless numbers
3. If not found → **Web**: Use CSS custom properties (`var(--color-brand-700)`), sizes in `px`

**Web token format:**
```css
:root {
  --color-brand-700: #1c67d8;
  --color-gray-950: #030712;
}

.heading { color: var(--color-gray-950); }
```

**React Native token format:**
```js
import { colors } from '@/tokens';

const styles = StyleSheet.create({
  heading: { color: colors.gray[950] },
});
```

## UIKit Color System

The Addi UIKit uses a numeric scale (50-950) as the **single source of truth**. Never hardcode hex values — always reference a token.

### Categories

9 color categories, each with 11 stops. Default shades (★) are the primary accent for each category:

| Category | Default ★ | Hex | Role |
|----------|----------|-----|------|
| brand | 700 | `#1c67d8` | Primary interactive (buttons, links, active) |
| gray | 950 | `#030712` | Text, dark surfaces |
| danger | — | — | Errors, destructive actions |
| success | — | — | Confirmations, positive states |
| warning | — | — | Cautions, attention |
| cf | 500 | `#2c93ff` | CF product color |
| aqua | 200 | `#86fef5` | Aqua accent |
| orange | 400 | `#ff8f43` | Orange accent |
| purple | 300 | `#c5bdf9` | Purple accent |

### Common Assignments

| Purpose | Token | Hex |
|---------|-------|-----|
| Heading text | gray-950 | `#030712` |
| Body text | gray-600 | `#4a5565` |
| Muted / placeholder | gray-400 | `#99a1af` |
| Surface background | gray-50 | `#f9fafb` |
| Dividers / borders | gray-200 | `#e5e7eb` |
| Primary button bg | brand-700 | `#1c67d8` |
| Selected card bg | brand-50 | `#eff8ff` |
| Selected card border | brand-700 | `#1c67d8` |
| Error border / text | danger-500 | `#fb2c36` |
| Error surface | danger-50 | `#fef2f2` |
| Success text | success-700 | `#008236` |
| Success surface | success-50 | `#f0fdf4` |

Full color ramps with all hex values → `references/uikit-tokens.md`

## Figma-to-Code Naming Map

Figma uses different labels than the code token names:

| Figma UI Label | Figma Variable | Code Token |
|----------------|---------------|------------|
| Addi | `color/brand/*` | `brand-{scale}` |
| Neutral | `color/gray/*` | `gray-{scale}` |
| Red | `color/danger/*` | `danger-{scale}` |
| Green | `color/success/*` | `success-{scale}` |
| Yellow | `color/warning/*` | `warning-{scale}` |
| CF | `color/cf/*` | `cf-{scale}` |
| Aqua | `color/aqua/*` | `aqua-{scale}` |
| Orange | `color/orange/*` | `orange-{scale}` |
| Purple | `color/purple/*` | `purple-{scale}` |

When Figma shows `#000000` (pure black), map to `gray-950`. When a hex is close to a token but not exact, use the nearest token.

## Typography

Font: **Outfit** (weights: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold). All sizes are unitless — Web appends `px`, React Native uses directly.

| Style | Size | Weight | LH | LS | Usage |
|-------|------|--------|-----|-----|-------|
| display-lg | 32 | 700 | 1.2 | -0.64 | Hero numbers |
| display | 28 | 700 | 1.2 | -0.56 | Large headings |
| title-screen | 26 | 600 | 1.2 | -0.26 | Main screen title |
| title-section | 22 | 600 | 1.2 | -0.22 | Section heading |
| title-subsection | 18 | 600 | 1.2 | -0.18 | Subsection heading |
| title-body | 16 | 600 | 1.3 | -0.16 | Card titles |
| title-group | 14 | 500 | 1.3 | -0.14 | Group labels |
| title-legal | 12 | 500 | 1.2 | -0.12 | Small emphasized |
| interactive | 14 | 600 | 1.3 | -0.14 | Buttons, links |
| interactive-lg | 16 | 600 | 1.3 | -0.16 | Large CTAs |
| body-large | 16 | 400 | 1.3 | 0 | Primary body |
| body | 14 | 400 | 1.3 | 0 | Default body |
| legal | 12 | 400 | 1.2 | 0 | Disclaimers |

**Size inference**: When Figma text has no style variable, infer from size + weight + context. Style names are semantic hints — `title-screen` is the main heading, `title-section` is a section within it. See `references/typography.md` for inference rules.

Always pair a typography style with a color token. Headings use gray-950, body uses gray-600, muted uses gray-400.

Full definitions + platform format → `references/typography.md`

## Design-to-Code Workflow

Follow these 5 steps when implementing a Figma design:

### Step 1: Extract from Figma

Parse the Figma URL to get the node ID (`?node-id=X-Y` → use `X:Y`).

Call these Figma MCP tools:

1. `get_design_context` — structured layout, colors, typography, spacing
2. `get_screenshot` — visual reference for validation (always call after get_design_context)
3. `get_variable_defs` — extract any Figma variables defined in the file

If `get_design_context` returns too much data, call `get_metadata` first for a structural overview, then request individual child nodes.

### Step 2: Map to UIKit Tokens

For every value in the Figma output:

- **Colors**: Find the nearest UIKit token. Never use raw hex in output code.
  - Pure black → gray-950
  - Pure white → `#fff` or gray-50 for surfaces
  - Close-but-not-exact hex → nearest token (note deviation in comment)
- **Typography**: Match to the closest Addi text style by size + weight
- **Spacing/radius**: Use standard values from the project

Flag any values that don't map to existing tokens.

### Step 3: Detect Project Conventions

- Run platform detection (Web vs React Native)
- Scan the component directory structure
- Check for existing token definitions in the project
- Look for existing component library usage (Radix, custom, etc.)
- Call `get_code_connect_map` to find components already mapped to Figma nodes

### Step 4: Generate Code

- Use the detected platform's token format (CSS custom properties or StyleSheet)
- Reuse existing project components — search before creating new ones
- Use Figma-provided assets directly (localhost URLs). Never create placeholders. Never import new icon packages.
- Follow the project's file structure and naming conventions

### Step 5: Validate

- Compare generated output against the Figma screenshot
- Verify all colors reference UIKit tokens (no hardcoded hex values)
- Verify typography matches Addi text styles
- Check responsive behavior is correct
- Accessibility: contrast ratios meet WCAG AA, interactive elements have proper labels

Full Figma MCP tool reference → `references/figma-workflow.md`

## Token Mapping Rules

When Figma returns hex values that need mapping:

1. **Exact match**: Use the token directly
2. **Close match** (within ~5% lightness): Use the nearest token
3. **No match**: Flag it, suggest the nearest alternative, note the deviation
4. **Project already has tokens**: Map UIKit tokens to the project's existing token names for consistency

**Common raw-to-token mappings:**

| Raw Value | Token |
|-----------|-------|
| `#000000` | gray-950 |
| `#ffffff` | `#fff` (or gray-50 for surface) |
| `#1c67d8` | brand-700 |
| `#030712` | gray-950 |
| `#4a5565` | gray-600 |
| `#99a1af` | gray-400 |

## Rules

### MUST

- Use UIKit numeric tokens (50-950) as the source of truth
- Pair every text element with both a typography style and a color token
- Search for existing components before creating new ones
- Use semantic HTML elements and accessibility attributes
- Prefer project consistency over pixel-perfect Figma match when tokens conflict
- Call `get_screenshot` after `get_design_context` for visual validation

### MUST NOT

- Hardcode hex colors, font sizes, or spacing values
- Import new icon packages — use Figma-provided assets
- Create duplicate components when existing ones can be reused
- Use placeholder images or icons when Figma provides real assets
- Assume any CSS framework — always check the project's actual styling approach
- Use semantic strength naming (weak/strong) unless the project explicitly defines it

## Component Patterns

Common Addi patterns with examples in Web CSS + React Native → `references/component-patterns.md`

Components covered: buttons (primary, secondary, ghost), cards (default, selected), benefit badges, alerts (success, danger, warning), inputs (default, error).
