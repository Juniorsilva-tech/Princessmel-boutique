import { AppShell } from "@/components/app/app-shell";
import { InstallmentList } from "@/components/app/installment-list";
import { demoDebt, installments, payments } from "@/data/finance";

export default function CustomerInstallmentsPage() {
  const debtInstallments = installments.filter((installment) => installment.debtId === demoDebt.id);
  const debtPayments = payments.filter((payment) => payment.debtId === demoDebt.id);

  return (
    <AppShell>
      <InstallmentList installments={debtInstallments} payments={debtPayments} />
    </AppShell>
  );
}
