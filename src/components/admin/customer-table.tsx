import Link from "next/link";

import { debts } from "@/data/finance";
import type { Customer } from "@/types/finance";
import { formatCurrency } from "@/components/app/finance-format";

const statusLabel = {
  active: "Ativo",
  late: "Em atraso",
  paid: "Quitado",
} as const;

export function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <section className="rounded-4xl border border-graphite/10 bg-ivory/90 p-5 shadow-velvet">
      <div className="grid gap-3">
        {customers.map((customer) => {
          const debt = debts.find((item) => item.customerId === customer.id);

          return (
            <article
              key={customer.id}
              className="grid gap-4 rounded-3xl border border-graphite/10 bg-canvas/70 p-4 lg:grid-cols-[1.2fr_1fr_0.8fr_0.8fr_0.8fr_auto] lg:items-center"
            >
              <div>
                <p className="font-serif text-xl text-ink">{customer.name}</p>
                <p className="text-sm text-graphite">{customer.phone}</p>
              </div>
              <p className="text-sm text-graphite">{customer.document}</p>
              <StatusBadge status={customer.status} />
              <MoneyBlock label="Total" value={debt ? debt.totalAmount : 0} />
              <MoneyBlock label="Falta" value={debt ? debt.remainingAmount : 0} />
              <div className="flex flex-col gap-2">
                <MoneyBlock label="Pago" value={debt ? debt.paidAmount : 0} />
                <Link
                  href="/admin/cobrancas"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-ink bg-ink px-4 text-sm text-ivory transition hover:border-brass hover:bg-brass"
                >
                  Ver cobranca
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function MoneyBlock({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-[0.7rem] uppercase tracking-editorial text-graphite">{label}</p>
      <p className="font-serif text-lg text-ink">{formatCurrency(value)}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: Customer["status"] }) {
  const tone =
    status === "late"
      ? "border-red-800/20 bg-red-50 text-red-900"
      : status === "paid"
        ? "border-emerald-700/20 bg-emerald-50 text-emerald-800"
        : "border-brass/20 bg-champagne/30 text-graphite";

  return <span className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${tone}`}>{statusLabel[status]}</span>;
}
