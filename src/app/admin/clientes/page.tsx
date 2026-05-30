import { AdminShell } from "@/components/admin/admin-shell";
import { CustomerTable } from "@/components/admin/customer-table";
import { customers } from "@/data/finance";

export default function AdminCustomersPage() {
  return (
    <AdminShell>
      <section className="mb-6">
        <p className="text-xs uppercase tracking-editorial text-brass">Clientes</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">Carteira Princessmel</h1>
      </section>
      <CustomerTable customers={customers} />
    </AdminShell>
  );
}
