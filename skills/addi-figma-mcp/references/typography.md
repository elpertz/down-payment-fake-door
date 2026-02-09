# Addi UIKit Typography

Font family: **Outfit** (Google Fonts). All sizes are unitless — Web appends `px`, React Native uses as-is.

Search patterns: `display`, `title`, `body`, `legal`, `interactive`, `Outfit`

## Text Styles

### Display

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| display-lg | 32 | 700 (Bold) | 1.2 | -0.64 | Hero numbers, large monetary amounts |
| display | 28 | 700 (Bold) | 1.2 | -0.56 | Feature highlights, large headings |

### Title

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| title-screen | 26 | 600 (SemiBold) | 1.2 | -0.26 | Main screen title — the primary heading |
| title-section | 22 | 600 (SemiBold) | 1.2 | -0.22 | Section heading within a screen |
| title-subsection | 18 | 600 (SemiBold) | 1.2 | -0.18 | Subsection or card group heading |
| title-body | 16 | 600 (SemiBold) | 1.3 | -0.16 | Card titles, emphasized body labels |
| title-group | 14 | 500 (Medium) | 1.3 | -0.14 | Group labels, small headings |
| title-legal | 12 | 500 (Medium) | 1.2 | -0.12 | Small emphasized text, footnote labels |

### Body

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| body-large | 16 | 400 (Regular) | 1.3 | 0 | Primary body text, descriptions |
| body | 14 | 400 (Regular) | 1.3 | 0 | Default body text, paragraphs |
| legal | 12 | 400 (Regular) | 1.2 | 0 | Legal disclaimers, fine print |

### Interactive

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| interactive | 14 | 600 (SemiBold) | 1.3 | -0.14 | Buttons, links, tappable actions |
| interactive-large | 16 | 600 (SemiBold) | 1.3 | -0.16 | Large buttons, primary CTAs |

## Size Inference Rules

When Figma text doesn't have an explicit style variable, infer from size and context:

| Figma Size | Likely Style | Notes |
|------------|-------------|-------|
| 32 | display-lg | Always display-lg |
| 28 | display | Always display |
| 26 | title-screen | Main heading of a screen |
| 24 | title-screen or title-section | If it's the main heading → title-screen. If inside a section → title-section |
| 22 | title-section | Section heading |
| 18 | title-subsection | Subsection heading |
| 16 + SemiBold | title-body or interactive-large | If tappable → interactive-large. Otherwise → title-body |
| 16 + Regular | body-large | Body text |
| 14 + SemiBold | interactive | Buttons, links |
| 14 + Medium | title-group | Group labels |
| 14 + Regular | body | Default body |
| 12 + Medium | title-legal | Emphasized small text |
| 12 + Regular | legal | Disclaimers, fine print |

## Color Pairing

Always pair a typography style with a color token:

| Text Role | Color Token | Example |
|-----------|------------|---------|
| Primary heading | gray-950 | Screen title, section heading |
| Secondary heading | gray-700 | Subsection, card title |
| Body text | gray-600 | Descriptions, paragraphs |
| Muted / helper | gray-400 | Placeholders, timestamps |
| Interactive | brand-700 | Links, active labels |
| Error | danger-500 | Validation messages |
| Success | success-700 | Confirmation messages |

## Platform Format

### Web CSS

```css
.text-display-lg {
  font-family: 'Outfit', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.64px;
}

.text-title-screen {
  font-family: 'Outfit', sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.26px;
}

.text-body {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0;
}

.text-interactive {
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.14px;
}
```

### React Native StyleSheet

```js
const typography = {
  displayLg: {
    fontFamily: 'Outfit-Bold',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 32 * 1.2, // 38.4
    letterSpacing: -0.64,
  },
  titleScreen: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 26 * 1.2, // 31.2
    letterSpacing: -0.26,
  },
  body: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14 * 1.3, // 18.2
    letterSpacing: 0,
  },
  interactive: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 14 * 1.3, // 18.2
    letterSpacing: -0.14,
  },
};
```

**React Native font family names** follow the `{Family}-{Weight}` convention:
- `Outfit-Regular` (400)
- `Outfit-Medium` (500)
- `Outfit-SemiBold` (600)
- `Outfit-Bold` (700)
