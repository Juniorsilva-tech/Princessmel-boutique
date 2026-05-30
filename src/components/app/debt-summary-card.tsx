import Link from "next/link";

import type { Customer, Debt, Installment } from "@/types/finance";

import { formatCurrency, formatDate, getProgressPercentage } from "./finance-format";

export function DebtSummaryCard({
  customer,
  debt,
  nextInstallment,
}: {
  customer: Customer;
  debt: Debt;
  nextInstallment?: Installment;
}) {
  const progress = getProgressPercentage(debt);
  const whatsappText = encodeURIComponent(
    `Ola, Princessmel! Sou ${customer.name} e quero falar sobre minha proxima parcela do Princessmel Club.`,
  );

  return (
    <section className="rounded-4xl border border-brass/20 bg-ivory/90 p-6 shadow-velvet sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-editorial text-brass">Princessmel Club</p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Ola, {customer.name.split(" ")[0]}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-graphite">
            Seu resumo de compras, parcelas e pagamentos fica reunido aqui com a mesma curadoria da boutique.
          </p>
        </div>
        <div className="rounded-3xl border border-graphite/10 bg-canvas/70 px-5 py-4">
          <p className="text-xs uppercase tracking-editorial text-graphite">Proxima parcela</p>
          <p className="mt-2 font-serif text-2xl text-ink">
            {nextInstallment ? formatCurrency(nextInstallment.amount) : "Tudo quitado"}
          </p>
          <p className="text-sm text-graphite">
            {nextInstallment ? formatDate(nextInstallment.dueDate) : "Nenhum vencimento aberto"}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <AmountBlock label="Total da divida" value={formatCurrency(debt.totalAmount)} />
        <AmountBlock label="Valor pago" value={formatCurrency(debt.paidAmount)} />
        <AmountBlock label="Falta quitar" value={formatCurrency(debt.remainingAmount)} accent />
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between text-sm text-graphite">
          <span>Progresso de quitacao</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-cream">
          <div className="h-full rounded-full bg-brass" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`https://wa.me/5511999999999?text=${whatsappText}`}
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink bg-ink px-6 text-sm font-medium text-ivory transition hover:border-brass hover:bg-brass"
        >
          Chamar no WhatsApp
        </a>
        <Link
          href="/app/cartao"
          className="inline-flex h-12 items-center justify-center rounded-full border border-graphite/15 bg-canvas px-6 text-sm font-medium text-ink transition hover:border-brass/50"
        >
          Ver cartao
        </Link>
        <Link
          href="/app/parcelas"
          className="inline-flex h-12 items-center justify-center rounded-full border border-graphite/15 bg-canvas px-6 text-sm font-medium text-ink transition hover:border-brass/50"
        >
          Ver parcelas
        </Link>
      </div>
    </section>
  );
}

function AmountBlock({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-3xl border border-graphite/10 bg-canvas/70 p-5">
      <p className="text-xs uppercase tracking-editorial text-graphite">{label}</p>
      <p className={accent ? "mt-3 font-serif text-3xl text-brass" : "mt-3 font-serif text-3xl text-ink"}>{value}</p>
    </div>
  );
}
