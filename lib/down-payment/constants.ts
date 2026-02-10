import type {
  CuotasOption,
  PaymentMethod,
  RevealCopyVariant,
} from "./types";

export const PURCHASE_AMOUNT = 720_000;
export const DOWN_PAYMENT = 320_000;
export const FINANCED_AMOUNT = 400_000;
export const PAYMENT_DAY = 28;
export const START_DATE = new Date(2026, 1, 24); // 24 feb 2026

export const CUOTAS_OPTIONS: CuotasOption[] = [6, 9, 12, 18, 24];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "pse", label: "Débito PSE", icon: "pse" },
  { id: "nequi", label: "Nequi", icon: "nequi" },
  { id: "credit-card", label: "Tarjeta de crédito", icon: "credit-card" },
];

export const LOADER_MESSAGES = [
  "Evaluando tu solicitud...",
  "Consultando tu historial...",
  "Preparando tu oferta...",
];

export const REVEAL_COPY_VARIANTS: RevealCopyVariant[] = [
  {
    id: 1,
    title: "Actualizamos tu oferta",
    showZeroCard: false,
    description:
      "Ya no necesitas realizar un **pago inicial hoy.** Elige cuantas cuotas quieres comprar para continuar.",
    cta: "Elegir cuotas",
  },
  {
    id: 2,
    title: "Buenas noticias:\nhoy no pagas nada",
    showZeroCard: true,
    description:
      "Íbamos a pedirte un pago inicial, **pero en este caso no es necesario.**\nElige tus cuotas para continuar.",
    cta: "Continuar",
  },
  {
    id: 3,
    title: "Buenas noticias",
    showZeroCard: true,
    description:
      "**Ya no necesitas pagar nada hoy.** Elige en cuantas cuotas quieres comprar y continua.",
    cta: "Elegir cuotas",
  },
  {
    id: 4,
    title: "Buenas noticias para tu compra",
    showZeroCard: true,
    description:
      "**Ya no necesitas pagar nada hoy.** Ahora elige en cuantas cuotas quieres comprar.",
    cta: "Elegir cuotas",
  },
  {
    id: 5,
    title: "Ya no pagas hoy",
    showZeroCard: true,
    description:
      "Aunque antes te pedimos un pago inicial, **ya no es necesario.** Elige tus cuotas para continuar.",
    cta: "Elegir cuotas",
  },
  {
    id: 6,
    title: "Tu compra quedo mejor",
    showZeroCard: false,
    description:
      "**No necesitas hacer un pago hoy.** Elige cuantas cuotas quieres y sigue con tu compra.",
    cta: "Elegir cuotas",
  },
  {
    id: 7,
    title: "Pago inicial eliminado",
    showZeroCard: false,
    description: "Continua eligiendo el numero de cuotas.",
    cta: "Elegir cuotas",
  },
  {
    id: 8,
    title: "Actualizamos tu forma de pago",
    showZeroCard: true,
    description:
      "Ya **no necesitas realizar un pago inicial hoy.** Selecciona las cuotas para continuar.",
    cta: "Elegir cuotas",
  },
];

// Pre-computed installment data WITH down payment ($400K financed)
export const WITH_DOWN_PAYMENT_DATA: Record<
  number,
  { monthly: number; interestFga: number }
> = {
  4: { monthly: 156_200, interestFga: 23_000 },
  6: { monthly: 93_300, interestFga: 13_300 },
  9: { monthly: 59_700, interestFga: 9_700 },
  12: { monthly: 44_500, interestFga: 8_100 },
  18: { monthly: 30_200, interestFga: 6_700 },
  24: { monthly: 23_400, interestFga: 6_000 },
};

// Pre-computed installment data WITHOUT down payment ($720K financed, post-reveal)
export const POST_REVEAL_DATA: Record<
  number,
  { monthly: number; interestFga: number }
> = {
  6: { monthly: 141_000, interestFga: 21_000 },
  9: { monthly: 96_300, interestFga: 16_300 },
  12: { monthly: 74_000, interestFga: 14_000 },
  18: { monthly: 51_700, interestFga: 11_700 },
  24: { monthly: 40_700, interestFga: 10_700 },
};
