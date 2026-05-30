import type { Installment, Payment } from "@/types/finance";

import { formatCurrency, formatDate } from "./finance-format";

const installmentStatus = {
  paid: "Pago",
  pending: "Pendente",
  late: "Atrasado",
} as const;

const paymentMethod = {
  pix: "Pix",
  card: "Cartao",
  cash: "Dinheiro",
} as const;

export function InstallmentList({
  installments,
  payments,
}: {
  installments: Installment[];
  payments: Payment[];
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
      <section className="rounded-4xl border border-graphite/10 bg-ivory/90 p-6 shadow-velvet">
        <p className="text-xs uppercase tracking-editorial text-brass">Parcelas</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">Seu plano de quitacao</h1>
        <div className="mt-6 space-y-3">
          {installments.map((installment) => (
            <article
              key={installment.id}
              className="flex flex-col gap-3 rounded-3xl border border-graphite/10 bg-canvas/70 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-serif text-xl text-ink">Parcela {installment.number}</p>
                <p className="text-sm text-graphite">Vence em {formatDate(installment.dueDate)}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={statusClass(installment.status)}>{installmentStatus[installment.status]}</span>
                <strong className="font-serif text-xl text-ink">{formatCurrency(installment.amount)}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-4xl border border-graphite/10 bg-ivory/90 p-6 shadow-velvet">
        <p className="text-xs uppercase tracking-editorial text-brass">Historico</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">Pagamentos</h2>
        <div className="mt-6 space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="border-b border-graphite/10 pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-graphite">{paymentMethod[payment.method]}</span>
                <strong className="font-serif text-xl text-ink">{formatCurrency(payment.amount)}</strong>
              </div>
              <p className="mt-1 text-sm text-graphite">{formatDate(payment.paidAt)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function statusClass(status: Installment["status"]) {
  const base = "rounded-full border px-3 py-1 text-xs font-medium";

  if (status === "paid") {
    return `${base} border-emerald-700/20 bg-emerald-50 text-emerald-800`;
  }

  if (status === "late") {
    return `${base} border-red-800/20 bg-red-50 text-red-900`;
  }

  return `${base} border-brass/20 bg-champagne/30 text-graphite`;
}
