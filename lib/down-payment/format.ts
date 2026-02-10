export function formatCOP(amount: number): string {
  const formatted = amount
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$ ${formatted}`;
}
