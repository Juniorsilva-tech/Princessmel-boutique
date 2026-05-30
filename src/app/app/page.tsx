import { DebtSummaryCard } from "@/components/app/debt-summary-card";
import { AppShell } from "@/components/app/app-shell";
import { debts, demoCustomer, demoDebt, installments } from "@/data/finance";
import { formatCurrency } from "@/components/app/finance-format";

export default function CustomerAppPage() {
  const nextInstallment = installments.find((installment) => installment.debtId === demoDebt.id && installment.status !== "paid");
  const openDebts = debts.filter((debt) => debt.status !== "paid");

  return (
    <AppShell>
      <DebtSummaryCard customer={demoCustomer} debt={demoDebt} nextInstallment={nextInstallment} />
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {openDebts.slice(0, 2).map((debt) => (
          <article key={debt.id} className="rounded-3xl border border-graphite/10 bg-ivory/80 p-5 shadow-velvet">
            <p className="text-xs uppercase tracking-editorial text-brass">Compra em acompanhamento</p>
            <h2 className="mt-2 font-serif text-2xl text-ink">{debt.title}</h2>
            <p className="mt-2 text-sm text-graphite">Saldo restante: {formatCurrency(debt.remainingAmount)}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
