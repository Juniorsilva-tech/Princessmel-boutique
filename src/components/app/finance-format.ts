import type { Debt } from "@/types/finance";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

export function getProgressPercentage(debt: Debt) {
  if (debt.totalAmount === 0) {
    return 100;
  }

  return Math.round((debt.paidAmount / debt.totalAmount) * 100);
}
