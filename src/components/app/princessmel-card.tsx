import type { Customer, Debt, Installment } from "@/types/finance";

import { formatCurrency, formatDate, getProgressPercentage } from "./finance-format";

const statusLabel = {
  active: "Ativa",
  late: "Em atraso",
  paid: "Quitada",
} as const;

export function PrincessmelCard({
  customer,
  debt,
  nextInstallment,
}: {
  customer: Customer;
  debt: Debt;
  nextInstallment?: Installment;
}) {
  const progress = getProgressPercentage(debt);

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="relative overflow-hidden rounded-4xl border border-brass/30 bg-ink p-7 text-ivory shadow-frame sm:p-9">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(217,197,169,0.28),transparent_34%),linear-gradient(135deg,rgba(159,124,80,0.38),transparent_42%)]" />
        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-editorial text-champagne">Princessmel Club</p>
              <h1 className="mt-10 font-serif text-3xl sm:text-4xl">{customer.name}</h1>
            </div>
            <span className="rounded-full border border-champagne/30 px-3 py-1 text-xs text-champagne">
              {statusLabel[customer.status]}
            </span>
          </div>
          <p className="mt-8 font-mono text-lg tracking-[0.18em] text-ivory/90">PMCL {customer.id.slice(4)} 2026</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <CardMeta label="Cliente" value={customer.id} />
            <CardMeta label="Restante" value={formatCurrency(debt.remainingAmount)} />
            <CardMeta label="Quitado" value={`${progress}%`} />
          </div>
        </div>
      </div>

      <div className="rounded-4xl border border-graphite/10 bg-ivory/90 p-6 shadow-velvet">
        <p className="text-xs uppercase tracking-editorial text-brass">Vencimento</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">
          {nextInstallment ? formatDate(nextInstallment.dueDate) : "Sem parcelas abertas"}
        </h2>
        <p className="mt-4 text-sm leading-6 text-graphite">
          Cartao visual de acompanhamento interno. A autenticacao real e integracao financeira entram em uma etapa
          futura.
        </p>
      </div>
    </section>
  );
}

function CardMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-editorial text-champagne">{label}</p>
      <p className="mt-2 text-sm text-ivory">{value}</p>
    </div>
  );
}
