import { AppShell } from "@/components/app/app-shell";
import { PrincessmelCard } from "@/components/app/princessmel-card";
import { demoCustomer, demoDebt, installments } from "@/data/finance";

export default function CustomerCardPage() {
  const nextInstallment = installments.find((installment) => installment.debtId === demoDebt.id && installment.status !== "paid");

  return (
    <AppShell>
      <PrincessmelCard customer={demoCustomer} debt={demoDebt} nextInstallment={nextInstallment} />
    </AppShell>
  );
}
