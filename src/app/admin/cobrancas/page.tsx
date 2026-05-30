import { AdminShell } from "@/components/admin/admin-shell";
import { DebtCard } from "@/components/admin/debt-card";
import { debts } from "@/data/finance";

export default function AdminCollectionsPage() {
  return (
    <AdminShell>
      <section className="mb-6">
        <p className="text-xs uppercase tracking-editorial text-brass">Cobrancas</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">Gestao visual de parcelas</h1>
      </section>
      <div className="grid gap-5">
        {debts.map((debt) => (
          <DebtCard key={debt.id} debt={debt} />
        ))}
      </div>
    </AdminShell>
  );
}
