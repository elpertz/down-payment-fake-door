# Down Payment Fake Door — UX Analysis

## Overview

Three prototype experiences testing user reactions to a down payment (cuota inicial) in an Addi credit flow. The experiment measures intent to pay via payment method selection, then reveals the down payment is no longer required.

**Purchase amount:** $720,000 COP
**Down payment tested:** $320,000 COP (44% of purchase)
**Post-reveal financing:** Full $720,000 COP

---

## Experience Comparison

### Option 1: "Fija" (Fixed — Klarna Pay-in-4 Model)

**Approach:** Down payment framed as first of 4 fixed installments (1 today + 3 monthly).

**Strengths:**
- Simple mental model — users understand "4 payments"
- Clear timeline with specific dates and amounts
- Familiar pattern (Klarna, Afterpay)

**Weaknesses:**
- No flexibility in cuota count
- Higher monthly payments due to fewer installments
- May feel rigid to users accustomed to choosing terms

**Reveal copy:** Variant #5 "Ya no pagas hoy" — honest, acknowledges the change directly.

---

### Option 2A: "Flexible" — Summary Card

**Approach:** Pay today + dropdown to select cuotas (6/9/12/18/24). Summary card shows remaining cuotas count and monthly amount.

**Strengths:**
- User feels in control (choosing cuotas)
- Summary is scannable — key numbers at a glance
- Progressive disclosure (details appear after selection)

**Weaknesses:**
- Less detailed than 2B — users may want to see the full timeline
- Summary card is abstract (counts, not dates)

**Reveal copy:** Variant #2 "Tu compra mejora" — positive framing, "Continuar" CTA fits the flexible flow.

---

### Option 2B: "Flexible" — Detailed Timeline

**Approach:** Dropdown inside card. When cuotas selected, full installment timeline appears (all rows with dates and amounts).

**Strengths:**
- Maximum transparency — every payment shown
- Builds confidence through detail
- Card-contained layout feels cohesive

**Weaknesses:**
- Can feel overwhelming with many rows (24 cuotas = 24 lines)
- Slower to scan than 2A summary
- More scrolling required

**Reveal copy:** Variant #8 "Actualizamos tu forma de pago" — transactional with $0 card, matches the detailed nature.

---

## Copy Variant Analysis (All 8)

| # | Title | Shows $0 Card | Description | CTA | Tone | Best For |
|---|-------|:---:|-------------|-----|------|----------|
| 1 | Actualizamos tu oferta | No | "Ya no necesitas realizar un **pago inicial hoy.** Elige cuantas cuotas quieres comprar para continuar." | Elegir cuotas | Neutral/transactional | Users who value clarity |
| 2 | Tu compra mejora | Yes | "**No necesitas hacer un pago hoy.** Ahora elige el numero de cuotas y continua con tu compra." | Continuar | Positive/encouraging | Flexible flows (2A) |
| 3 | Buenas noticias | Yes | "**Ya no necesitas pagar nada hoy.** Elige en cuantas cuotas quieres comprar y continua." | Elegir cuotas | Celebratory | Users who react to good news |
| 4 | Buenas noticias para tu compra | Yes | "**Ya no necesitas pagar nada hoy.** Ahora elige en cuantas cuotas quieres comprar." | Elegir cuotas | Celebratory/specific | Purchase-focused users |
| 5 | Ya no pagas hoy | Yes | "Aunque antes te pedimos un pago inicial, **ya no es necesario.** Elige tus cuotas para continuar." | Elegir cuotas | Honest/transparent | Fixed flows (acknowledges change) |
| 6 | Tu compra quedo mejor | No | "**No necesitas hacer un pago hoy.** Elige cuantas cuotas quieres y sigue con tu compra." | Elegir cuotas | Positive/casual | Mobile-first users |
| 7 | Pago inicial eliminado | No | "Continua eligiendo el numero de cuotas." | Elegir cuotas | Minimal/direct | Users who prefer brevity |
| 8 | Actualizamos tu forma de pago | Yes | "Ya **no necesitas realizar un pago inicial hoy.** Selecciona las cuotas para continuar." | Elegir cuotas | Transactional/formal | Detailed flows (2B) |

### Copy Assignment

| Demo | Variant | Rationale |
|------|---------|-----------|
| **Option 1** | #5 "Ya no pagas hoy" | Honest — acknowledges the initial ask was for a payment. Builds trust after showing a fixed plan. |
| **Option 2A** | #2 "Tu compra mejora" | Positive framing. "Continuar" CTA fits the flexible, choose-your-cuotas flow. |
| **Option 2B** | #8 "Actualizamos tu forma de pago" | Transactional tone with $0 card. Matches the detailed, data-heavy nature of 2B. |

---

## Key UX Considerations

### Cognitive Load
- Option 1 has the lowest cognitive load (4 simple rows)
- Option 2A balances flexibility with scannability
- Option 2B provides maximum information but highest cognitive load

### Trust & Transparency
- All options show the down payment upfront before the reveal
- The reveal screen is the critical moment — copy must balance surprise with reassurance
- Showing $0 on a card (variants 2,3,4,5,8) provides tangible proof the payment was removed

### Fake Door Intent Signal
- Payment method selection (PSE/Nequi/Credit Card) is the primary intent signal
- Users who select a method AND click "Continuar" show strongest intent
- The back button on the payment screen captures users who hesitate

### Post-Reveal Experience
- All options converge to the same loan selector (6/9/12/18/24 cuotas)
- Full $720K financed — monthly payments are higher than with the down payment
- This contrast (lower monthly with DP vs. higher without) tests whether users preferred paying today

---

## Loan Math Reference

### With Down Payment ($400K financed, FGA $44K)

| Cuotas | Monthly | Interest+FGA/cuota |
|--------|---------|-------------------|
| 4 (fixed) | $153,000 | $19,700 |
| 6 | $93,300 | $13,300 |
| 9 | $59,700 | $9,700 |
| 12 | $44,500 | $8,100 |
| 18 | $30,200 | $6,700 |
| 24 | $23,400 | $6,000 |

### Without Down Payment / Post-Reveal ($720K financed, FGA $79,200)

| Cuotas | Monthly | Interest+FGA/cuota |
|--------|---------|-------------------|
| 6 | $141,000 | $21,000 |
| 9 | $96,300 | $16,300 |
| 12 | $74,000 | $14,000 |
| 18 | $51,700 | $11,700 |
| 24 | $40,700 | $10,700 |
