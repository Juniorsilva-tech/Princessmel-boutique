import { customers, installments } from "@/data/finance";
import { formatCurrency, formatDate } from "@/components/app/finance-format";
import type { Debt } from "@/types/finance";

const statusLabel = {
  open: "Aberta",
  late: "Em atraso",
  paid: "Quitada",
} as const;

export function DebtCard({ debt }: { debt: Debt }) {
  const customer = customers.find((item) => item.id === debt.customerId);
  const debtInstallments = installments.filter((installment) => installment.debtId === debt.id);
  const nextInstallment = debtInstallments.find((installment) => installment.status !== "paid");
  const message = `Ola, ${customer?.name ?? "cliente"}! Aqui e a Princessmel Boutique. Identificamos o saldo de ${formatCurrency(
    debt.remainingAmount,
  )} referente a ${debt.title}. Podemos combinar o pagamento da proxima parcela?`;

  return (
    <article className="rounded-4xl border border-graphite/10 bg-ivory/90 p-6 shadow-velvet">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-editorial text-brass">{customer?.name ?? "Cliente nao encontrado"}</p>
          <h2 className="mt-2 font-serif text-3xl text-ink">{debt.title}</h2>
          <p className="mt-2 text-sm text-graphite">
            {formatCurrency(debt.remainingAmount)} em aberto de {formatCurrency(debt.totalAmount)}
          </p>
        </div>
        <span className="w-fit rounded-full border border-brass/20 bg-champagne/30 px-3 py-1 text-xs font-medium text-graphite">
          {statusLabel[debt.status]}
        </span>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {debtInstallments.map((installment) => (
          <div key={installment.id} className="rounded-3xl border border-graphite/10 bg-canvas/70 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-serif text-lg text-ink">Parcela {installment.number}</p>
              <p className="text-sm text-graphite">{formatCurrency(installment.amount)}</p>
            </div>
            <p className="mt-1 text-sm text-graphite">{formatDate(installment.dueDate)}</p>
            <p className="mt-2 text-xs uppercase tracking-editorial text-brass">{installment.status}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-graphite/10 bg-canvas/70 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-editorial text-graphite">Proxima acao</p>
            <p className="mt-1 text-sm text-graphite">
              {nextInstallment ? `Parcela ${nextInstallment.number} vence em ${formatDate(nextInstallment.dueDate)}` : "Sem acao pendente"}
            </p>
          </div>
          <button className="h-11 rounded-full border border-ink bg-ink px-5 text-sm font-medium text-ivory transition hover:border-brass hover:bg-brass">
            Gerar mensagem WhatsApp
          </button>
        </div>
        <p className="mt-4 rounded-2xl bg-ivory p-4 text-sm leading-6 text-graphite">{message}</p>
      </div>
    </article>
  );
}
