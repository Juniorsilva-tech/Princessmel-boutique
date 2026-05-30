export type CustomerStatus = "active" | "late" | "paid";
export type DebtStatus = "open" | "late" | "paid";
export type InstallmentStatus = "paid" | "pending" | "late";
export type PaymentMethod = "pix" | "card" | "cash";

export type Customer = {
  id: string;
  name: string;
  phone: string;
  document: string;
  status: CustomerStatus;
  createdAt: string;
};

export type Debt = {
  id: string;
  customerId: string;
  title: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  installmentsCount: number;
  status: DebtStatus;
};

export type Installment = {
  id: string;
  debtId: string;
  number: number;
  amount: number;
  dueDate: string;
  status: InstallmentStatus;
};

export type Payment = {
  id: string;
  debtId: string;
  amount: number;
  method: PaymentMethod;
  paidAt: string;
};

export type AdminMetric = {
  label: string;
  value: string;
  description: string;
};
