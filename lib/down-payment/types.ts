export type PaymentMethodId = "pse" | "nequi" | "credit-card";

export type CuotasOption = 6 | 9 | 12 | 18 | 24;

export interface InstallmentRow {
  number: number;
  label: string;
  date: string;
  amount: number;
}

export interface RevealCopyVariant {
  id: number;
  title: string;
  description: string;
  cta: string;
  showZeroCard: boolean;
}

export interface PaymentMethod {
  id: PaymentMethodId;
  label: string;
  icon: "pse" | "nequi" | "credit-card";
}
