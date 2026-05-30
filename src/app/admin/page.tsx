import Link from "next/link";

import { AdminShell } from "@/components/admin/admin-shell";
import { DebtCard } from "@/components/admin/debt-card";
import { MetricCard } from "@/components/admin/metric-card";
import { adminMetrics, debts } from "@/data/finance";

export default function AdminPage() {
  const collectionDebts = debts.filter((debt) => debt.status !== "paid");

  return (
    <AdminShell>
      <section>
        <p className="text-xs uppercase tracking-editorial text-brass">Painel interno</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Cobrancas Princessmel</h1>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>
      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <div className="space-y-4">
          {collectionDebts.slice(0, 2).map((debt) => (
            <DebtCard key={debt.id} debt={debt} />
          ))}
        </div>
        <aside className="rounded-4xl border border-graphite/10 bg-ivory/90 p-6 shadow-velvet">
          <p className="text-xs uppercase tracking-editorial text-brass">Acoes rapidas</p>
          <div className="mt-5 grid gap-3">
            <Link href="/admin/clientes" className="rounded-full border border-graphite/10 bg-canvas px-5 py-3 text-sm text-ink">
              Revisar clientes
            </Link>
            <Link href="/admin/cobrancas" className="rounded-full border border-graphite/10 bg-canvas px-5 py-3 text-sm text-ink">
              Gerar mensagens
            </Link>
            <Link href="/app" className="rounded-full border border-graphite/10 bg-canvas px-5 py-3 text-sm text-ink">
              Ver demo cliente
            </Link>
          </div>
        </aside>
      </section>
    </AdminShell>
  );
}
