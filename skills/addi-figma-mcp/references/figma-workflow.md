# Figma MCP Workflow

Reference for using Figma MCP tools when implementing Addi designs.

Search patterns: `get_design_context`, `get_screenshot`, `get_variable_defs`, `get_metadata`, `get_code_connect_map`, `create_design_system_rules`, `asset`

## Figma MCP Tools

### get_design_context

The primary tool. Returns structured code representation of a Figma node.

```
get_design_context({
  nodeId: "1:2",
  clientLanguages: "typescript,css",
  clientFrameworks: "react",  // or "react-native", "vue", etc.
  artifactType: "COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN"
})
```

**Parameters:**
- `nodeId`: Extract from Figma URL `?node-id=X-Y` → use `X:Y`
- `clientLanguages`: Comma-separated. Common: `"typescript,css"` or `"typescript"`
- `clientFrameworks`: Match the project. Use `"react"` for web, `"react-native"` for mobile
- `artifactType`: One of `WEB_PAGE_OR_APP_SCREEN`, `COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN`, `REUSABLE_COMPONENT`, `DESIGN_SYSTEM`

**IMPORTANT**: Always call `get_screenshot` after this tool for visual validation.

### get_screenshot

Captures a visual screenshot of the Figma node. Always call after `get_design_context`.

```
get_screenshot({
  nodeId: "1:2",
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

Use this screenshot to validate your implementation matches the design.

### get_variable_defs

Extracts design token definitions (colors, typography, spacing variables) from the Figma file.

```
get_variable_defs({
  nodeId: "1:2",
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

Returns a JSON object mapping variable paths to values, e.g.:
```json
{
  "color/brand/700 (brand)": "#1c67d8",
  "color/gray/950": "#030712",
  "font/size/22": "22"
}
```

### get_metadata

Returns XML metadata with node IDs, layer types, names, positions, and sizes. Useful when `get_design_context` returns too much data or you need a structural overview.

```
get_metadata({
  nodeId: "1:2",
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

### get_code_connect_map

Returns mappings between Figma node IDs and existing code components.

```
get_code_connect_map({
  nodeId: "1:2",
  clientLanguages: "typescript",
  clientFrameworks: "react"
})
```

Returns:
```json
{
  "1:2": {
    "codeConnectSrc": "src/components/Button.tsx",
    "codeConnectName": "Button"
  }
}
```

### create_design_system_rules

Generates project-specific design system rules for a CLAUDE.md file.

```
create_design_system_rules({
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

Produces rules about component discovery, token usage, styling approach, and Figma MCP integration flow for the project.

## Workflow

### Step 1: Parse Figma URL

Extract node ID from URL:
- `https://figma.com/design/:fileKey/:fileName?node-id=1-2` → nodeId `1:2`
- `https://figma.com/design/:fileKey/branch/:branchKey/:fileName` → use branchKey as fileKey

### Step 2: Extract Design

Call `get_design_context` and `get_screenshot` in parallel:

1. `get_design_context` → structured layout with colors, typography, spacing
2. `get_screenshot` → visual reference image

If output is too large, call `get_metadata` first for structure overview, then `get_design_context` on specific child nodes.

### Step 3: Extract Variables (optional)

Call `get_variable_defs` if you need to confirm token definitions or discover project-specific variables.

### Step 4: Check Existing Components

Call `get_code_connect_map` to see if any Figma nodes already map to code components. Reuse existing components instead of creating new ones.

### Step 5: Map to Addi Tokens

Map every value from Figma to the nearest Addi UIKit token:
- Colors → `references/uikit-tokens.md`
- Typography → `references/typography.md`
- Components → `references/component-patterns.md`

## Asset Handling

**IMPORTANT**: The Figma MCP server provides image and SVG assets via localhost URLs.

- Use localhost asset URLs directly in code (e.g., `http://localhost:3845/assets/abc123.png`)
- NEVER create placeholder images or icons
- NEVER import new icon packages — use the assets from the Figma payload
- For production, download these assets to the project's asset directory

## Troubleshooting

### Output too large
Call `get_metadata` first to see the node tree structure. Then call `get_design_context` on individual child nodes instead of the parent.

### Missing variables
Not all Figma files have variables defined. When `get_variable_defs` returns limited data, use the hex values from `get_design_context` and map them to the nearest Addi UIKit token using `references/uikit-tokens.md`.

### Token mismatch
When a Figma hex value doesn't exactly match any UIKit token:
1. Find the nearest token by visual similarity
2. Use the token (not the raw hex)
3. Note the deviation in a comment

### Black (#000000) in Figma
Designers often use pure black. Map to gray-950 (`#030712`) unless the design explicitly requires pure black.
