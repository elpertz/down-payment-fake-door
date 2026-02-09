# Addi UIKit Color Tokens

Complete color ramps extracted from the Addi UIKit Figma file. Each category has 11 stops (50-950). Shades marked with ★ are the default/brand shade for that category.

Search patterns: `danger`, `success`, `warning`, `brand`, `cf`, `aqua`, `orange`, `purple`, `gray`

## danger (Red)

| Scale | Hex |
|-------|-----|
| 50 | `#fef2f2` |
| 100 | `#ffe2e2` |
| 200 | `#ffc9c9` |
| 300 | `#ffa2a2` |
| 400 | `#ff6467` |
| 500 | `#fb2c36` |
| 600 | `#e7000b` |
| 700 | `#c10007` |
| 800 | `#9f0712` |
| 900 | `#82181a` |
| 950 | `#460809` |

## success (Green)

| Scale | Hex |
|-------|-----|
| 50 | `#f0fdf4` |
| 100 | `#dcfce7` |
| 200 | `#b9f8cf` |
| 300 | `#7bf1a8` |
| 400 | `#05df72` |
| 500 | `#00c950` |
| 600 | `#00a63e` |
| 700 | `#008236` |
| 800 | `#016630` |
| 900 | `#0d542b` |
| 950 | `#032e15` |

## warning (Yellow)

| Scale | Hex |
|-------|-----|
| 50 | `#fefce8` |
| 100 | `#fef9c2` |
| 200 | `#fff085` |
| 300 | `#ffdf20` |
| 400 | `#fdc700` |
| 500 | `#f0b100` |
| 600 | `#d08700` |
| 700 | `#a65f00` |
| 800 | `#894b00` |
| 900 | `#733e0a` |
| 950 | `#432004` |

## brand (Addi) — default: 700 ★

The primary Addi color. Use brand-700 for interactive elements (buttons, links, active states).

| Scale | Hex |
|-------|-----|
| 50 | `#eff8ff` |
| 100 | `#dbeffe` |
| 200 | `#bfe4fe` |
| 300 | `#92d4fe` |
| 400 | `#5fbafb` |
| 500 | `#3a9cf7` |
| 600 | `#247eec` |
| 700 ★ | `#1c67d8` |
| 800 | `#1d54b0` |
| 900 | `#1d498b` |
| 950 | `#172d54` |

## cf — default: 500 ★

| Scale | Hex |
|-------|-----|
| 50 | `#eef8ff` |
| 100 | `#d9eeff` |
| 200 | `#bce2ff` |
| 300 | `#8ed1ff` |
| 400 | `#59b6ff` |
| 500 ★ | `#2c93ff` |
| 600 | `#1b77f5` |
| 700 | `#1460e1` |
| 800 | `#174db6` |
| 900 | `#19448f` |
| 950 | `#142a57` |

## aqua — default: 200 ★

| Scale | Hex |
|-------|-----|
| 50 | `#effefd` |
| 100 | `#c8fffa` |
| 200 ★ | `#86fef5` |
| 300 | `#52f6ef` |
| 400 | `#1ee3e1` |
| 500 | `#06c4c6` |
| 600 | `#019ba0` |
| 700 | `#067a7f` |
| 800 | `#0a6065` |
| 900 | `#0e5053` |
| 950 | `#002e33` |

## orange — default: 400 ★

| Scale | Hex |
|-------|-----|
| 50 | `#fff6ed` |
| 100 | `#ffebd4` |
| 200 | `#ffd3a8` |
| 300 | `#ffb371` |
| 400 ★ | `#ff8f43` |
| 500 | `#fe6711` |
| 600 | `#ef4c07` |
| 700 | `#c63608` |
| 800 | `#9d2c0f` |
| 900 | `#7e2710` |
| 950 | `#441006` |

## purple — default: 300 ★

| Scale | Hex |
|-------|-----|
| 50 | `#f4f4fe` |
| 100 | `#edeafd` |
| 200 | `#dcd8fc` |
| 300 ★ | `#c5bdf9` |
| 400 | `#a392f3` |
| 500 | `#8565ed` |
| 600 | `#7345e2` |
| 700 | `#6333ce` |
| 800 | `#532aad` |
| 900 | `#46248e` |
| 950 | `#2a1560` |

## gray (Neutral) — default: 950 ★

| Scale | Hex |
|-------|-----|
| 50 | `#f9fafb` |
| 100 | `#f3f4f6` |
| 200 | `#e5e7eb` |
| 300 | `#d1d5dc` |
| 400 | `#99a1af` |
| 500 | `#6a7282` |
| 600 | `#4a5565` |
| 700 | `#364153` |
| 800 | `#1e2939` |
| 900 | `#101828` |
| 950 ★ | `#030712` |

---

## Platform Format Examples

### Web (CSS Custom Properties)

```css
:root {
  --color-brand-50: #eff8ff;
  --color-brand-100: #dbeffe;
  --color-brand-200: #bfe4fe;
  --color-brand-300: #92d4fe;
  --color-brand-400: #5fbafb;
  --color-brand-500: #3a9cf7;
  --color-brand-600: #247eec;
  --color-brand-700: #1c67d8;
  --color-brand-800: #1d54b0;
  --color-brand-900: #1d498b;
  --color-brand-950: #172d54;
  /* Repeat for each category */
}

/* Usage */
.button-primary {
  background-color: var(--color-brand-700);
  color: #fff;
}
```

### React Native (Constants)

```js
export const colors = {
  brand: {
    50: '#eff8ff',
    100: '#dbeffe',
    200: '#bfe4fe',
    300: '#92d4fe',
    400: '#5fbafb',
    500: '#3a9cf7',
    600: '#247eec',
    700: '#1c67d8',
    800: '#1d54b0',
    900: '#1d498b',
    950: '#172d54',
  },
  // Repeat for each category
};

// Usage
const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.brand[700],
    color: '#fff',
  },
});
```

## Common Color Assignments

| Purpose | Token | Hex |
|---------|-------|-----|
| Heading text | gray-950 | `#030712` |
| Body text | gray-600 | `#4a5565` |
| Muted text | gray-400 | `#99a1af` |
| Surface / background | gray-50 | `#f9fafb` |
| Dividers / borders | gray-200 | `#e5e7eb` |
| Primary interactive | brand-700 | `#1c67d8` |
| Primary surface | brand-50 | `#eff8ff` |
| Error text / border | danger-500 | `#fb2c36` |
| Error surface | danger-50 | `#fef2f2` |
| Success text | success-700 | `#008236` |
| Success surface | success-50 | `#f0fdf4` |
| Warning text | warning-700 | `#a65f00` |
| Warning surface | warning-50 | `#fefce8` |
