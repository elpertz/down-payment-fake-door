import type { InstallmentRow } from "./types";

export function buildFixedInstallments(
  downPayment: number,
  monthlyPayment: number,
  startDate: Date
): InstallmentRow[] {
  const rows: InstallmentRow[] = [
    {
      number: 1,
      label: "Pagar hoy",
      date: formatDateLong(startDate),
      amount: downPayment,
    },
  ];

  for (let i = 1; i <= 3; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    rows.push({
      number: i + 1,
      label: i === 3 ? "Ultimo pago" : `En ${i} mes${i > 1 ? "es" : ""}`,
      date: formatDateLong(date),
      amount: monthlyPayment,
    });
  }

  return rows;
}

export function buildFlexibleInstallments(
  downPayment: number,
  monthlyPayment: number,
  totalCuotas: number,
  startDate: Date
): InstallmentRow[] {
  const financedMonths = totalCuotas - 1;
  const rows: InstallmentRow[] = [
    {
      number: 1,
      label: "Pagar hoy",
      date: formatDateLong(startDate),
      amount: downPayment,
    },
  ];

  for (let i = 1; i <= financedMonths; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    rows.push({
      number: i + 1,
      label:
        i === financedMonths
          ? "Ultimo pago"
          : `En ${i} mes${i > 1 ? "es" : ""}`,
      date: formatDateLong(date),
      amount: monthlyPayment,
    });
  }

  return rows;
}

function formatDateLong(date: Date): string {
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
}
