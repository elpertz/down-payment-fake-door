# Addi Component Patterns

Common UI patterns using Addi UIKit tokens. Each component is shown in Web CSS and React Native StyleSheet format.

Search patterns: `button`, `card`, `badge`, `alert`, `input`

## Button (Primary)

### Web CSS

```html
<button class="btn-primary">Continuar</button>
```

```css
.btn-primary {
  background-color: var(--color-brand-700);
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.16px;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
}
```

### React Native

```js
const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.brand[700],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#fff',
    fontFamily: 'Outfit-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16 * 1.3,
    letterSpacing: -0.16,
  },
});
```

## Button (Secondary)

### Web CSS

```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-brand-700);
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.14px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid var(--color-brand-700);
}
```

### React Native

```js
btnSecondary: {
  backgroundColor: 'transparent',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: colors.brand[700],
  alignItems: 'center',
},
btnSecondaryText: {
  color: colors.brand[700],
  fontFamily: 'Outfit-SemiBold',
  fontSize: 14,
  fontWeight: '600',
  lineHeight: 14 * 1.3,
  letterSpacing: -0.14,
},
```

## Button (Ghost / Link)

### Web CSS

```css
.btn-ghost {
  background-color: transparent;
  color: var(--color-brand-700);
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.14px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}
```

### React Native

```js
btnGhost: {
  backgroundColor: 'transparent',
  paddingVertical: 8,
  paddingHorizontal: 16,
},
btnGhostText: {
  color: colors.brand[700],
  fontFamily: 'Outfit-SemiBold',
  fontSize: 14,
  fontWeight: '600',
  lineHeight: 14 * 1.3,
  letterSpacing: -0.14,
},
```

## Card (Default)

### Web CSS

```css
.card {
  background-color: #fff;
  border: 1px solid var(--color-gray-200);
  border-radius: 16px;
  padding: 16px;
}
.card-title {
  color: var(--color-gray-950);
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.16px;
}
.card-body {
  color: var(--color-gray-600);
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
}
```

### React Native

```js
card: {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: colors.gray[200],
  borderRadius: 16,
  padding: 16,
},
cardTitle: {
  color: colors.gray[950],
  fontFamily: 'Outfit-SemiBold',
  fontSize: 16,
  fontWeight: '600',
  lineHeight: 16 * 1.3,
  letterSpacing: -0.16,
},
cardBody: {
  color: colors.gray[600],
  fontFamily: 'Outfit-Regular',
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 14 * 1.3,
},
```

## Card (Selected)

### Web CSS

```css
.card-selected {
  background-color: var(--color-brand-50);
  border: 2px solid var(--color-brand-700);
  border-radius: 16px;
  padding: 16px;
}
```

### React Native

```js
cardSelected: {
  backgroundColor: colors.brand[50],
  borderWidth: 2,
  borderColor: colors.brand[700],
  borderRadius: 16,
  padding: 16,
},
```

## Badge (Benefit)

### Web CSS

```css
.badge-benefit {
  background-color: var(--color-success-50);
  color: var(--color-success-700);
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  padding: 4px 8px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
```

### React Native

```js
badgeBenefit: {
  backgroundColor: colors.success[50],
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderRadius: 8,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
},
badgeBenefitText: {
  color: colors.success[700],
  fontFamily: 'Outfit-Medium',
  fontSize: 12,
  fontWeight: '500',
  lineHeight: 12 * 1.2,
},
```

## Alert

### Web CSS

```css
/* Success */
.alert-success {
  background-color: var(--color-success-50);
  border: 1px solid var(--color-success-200);
  border-radius: 12px;
  padding: 12px 16px;
}
.alert-success-text {
  color: var(--color-success-700);
}

/* Danger */
.alert-danger {
  background-color: var(--color-danger-50);
  border: 1px solid var(--color-danger-200);
}
.alert-danger-text {
  color: var(--color-danger-700);
}

/* Warning */
.alert-warning {
  background-color: var(--color-warning-50);
  border: 1px solid var(--color-warning-200);
}
.alert-warning-text {
  color: var(--color-warning-700);
}
```

### React Native

```js
alertSuccess: {
  backgroundColor: colors.success[50],
  borderWidth: 1,
  borderColor: colors.success[200],
  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 16,
},
alertSuccessText: {
  color: colors.success[700],
},
// Same pattern for danger (danger[50], danger[200], danger[700])
// Same pattern for warning (warning[50], warning[200], warning[700])
```

## Input (Default)

### Web CSS

```css
.input {
  background-color: #fff;
  border: 1px solid var(--color-gray-300);
  border-radius: 12px;
  padding: 12px 16px;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--color-gray-950);
}
.input::placeholder {
  color: var(--color-gray-400);
}
.input:focus {
  border-color: var(--color-brand-700);
  outline: none;
}
```

### React Native

```js
input: {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: colors.gray[300],
  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 16,
  fontFamily: 'Outfit-Regular',
  fontSize: 14,
  fontWeight: '400',
  lineHeight: 14 * 1.3,
  color: colors.gray[950],
},
```

## Input (Error)

### Web CSS

```css
.input-error {
  border-color: var(--color-danger-500);
}
.input-error-message {
  color: var(--color-danger-500);
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 4px;
}
```

### React Native

```js
inputError: {
  borderColor: colors.danger[500],
},
inputErrorMessage: {
  color: colors.danger[500],
  fontFamily: 'Outfit-Regular',
  fontSize: 12,
  fontWeight: '400',
  lineHeight: 12 * 1.2,
  marginTop: 4,
},
```
