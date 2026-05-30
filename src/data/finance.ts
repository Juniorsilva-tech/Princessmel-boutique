import type { AdminMetric, Customer, Debt, Installment, Payment } from "@/types/finance";

export const customers: Customer[] = [
  {
    id: "CLI-1027",
    name: "Marina Oliveira",
    phone: "(11) 98412-4401",
    document: "342.178.998-10",
    status: "active",
    createdAt: "2026-02-14",
  },
  {
    id: "CLI-1088",
    name: "Beatriz Souza",
    phone: "(21) 97208-1134",
    document: "119.440.227-31",
    status: "late",
    createdAt: "2026-01-22",
  },
  {
    id: "CLI-1142",
    name: "Carolina Mendes",
    phone: "(31) 99103-8870",
    document: "087.336.551-90",
    status: "paid",
    createdAt: "2025-12-03",
  },
  {
    id: "CLI-1196",
    name: "Juliana Rocha",
    phone: "(41) 98884-7622",
    document: "563.771.420-04",
    status: "active",
    createdAt: "2026-03-06",
  },
];

export const debts: Debt[] = [
  {
    id: "DIV-7101",
    customerId: "CLI-1027",
    title: "Colecao festa e acessorios",
    totalAmount: 1280,
    paidAmount: 640,
    remainingAmount: 640,
    installmentsCount: 4,
    status: "open",
  },
  {
    id: "DIV-7102",
    customerId: "CLI-1088",
    title: "Pedido inverno premium",
    totalAmount: 960,
    paidAmount: 240,
    remainingAmount: 720,
    installmentsCount: 4,
    status: "late",
  },
  {
    id: "DIV-7103",
    customerId: "CLI-1142",
    title: "Enxoval boutique completo",
    totalAmount: 1500,
    paidAmount: 1500,
    remainingAmount: 0,
    installmentsCount: 3,
    status: "paid",
  },
  {
    id: "DIV-7104",
    customerId: "CLI-1196",
    title: "Look editorial e beleza",
    totalAmount: 720,
    paidAmount: 180,
    remainingAmount: 540,
    installmentsCount: 3,
    status: "open",
  },
];

export const installments: Installment[] = [
  { id: "PAR-1001", debtId: "DIV-7101", number: 1, amount: 320, dueDate: "2026-04-10", status: "paid" },
  { id: "PAR-1002", debtId: "DIV-7101", number: 2, amount: 320, dueDate: "2026-05-10", status: "paid" },
  { id: "PAR-1003", debtId: "DIV-7101", number: 3, amount: 320, dueDate: "2026-06-10", status: "pending" },
  { id: "PAR-1004", debtId: "DIV-7101", number: 4, amount: 320, dueDate: "2026-07-10", status: "pending" },
  { id: "PAR-2001", debtId: "DIV-7102", number: 1, amount: 240, dueDate: "2026-03-18", status: "paid" },
  { id: "PAR-2002", debtId: "DIV-7102", number: 2, amount: 240, dueDate: "2026-04-18", status: "late" },
  { id: "PAR-2003", debtId: "DIV-7102", number: 3, amount: 240, dueDate: "2026-05-18", status: "late" },
  { id: "PAR-2004", debtId: "DIV-7102", number: 4, amount: 240, dueDate: "2026-06-18", status: "pending" },
  { id: "PAR-3001", debtId: "DIV-7103", number: 1, amount: 500, dueDate: "2026-01-05", status: "paid" },
  { id: "PAR-3002", debtId: "DIV-7103", number: 2, amount: 500, dueDate: "2026-02-05", status: "paid" },
  { id: "PAR-3003", debtId: "DIV-7103", number: 3, amount: 500, dueDate: "2026-03-05", status: "paid" },
  { id: "PAR-4001", debtId: "DIV-7104", number: 1, amount: 180, dueDate: "2026-05-02", status: "paid" },
  { id: "PAR-4002", debtId: "DIV-7104", number: 2, amount: 270, dueDate: "2026-06-02", status: "pending" },
  { id: "PAR-4003", debtId: "DIV-7104", number: 3, amount: 270, dueDate: "2026-07-02", status: "pending" },
];

export const payments: Payment[] = [
  { id: "PG-501", debtId: "DIV-7101", amount: 320, method: "pix", paidAt: "2026-04-09" },
  { id: "PG-502", debtId: "DIV-7101", amount: 320, method: "card", paidAt: "2026-05-10" },
  { id: "PG-503", debtId: "DIV-7102", amount: 240, method: "cash", paidAt: "2026-03-18" },
  { id: "PG-504", debtId: "DIV-7103", amount: 1500, method: "pix", paidAt: "2026-03-04" },
  { id: "PG-505", debtId: "DIV-7104", amount: 180, method: "card", paidAt: "2026-05-02" },
];

export const adminMetrics: AdminMetric[] = [
  {
    label: "Total a receber",
    value: "R$ 1.900,00",
    description: "Saldo aberto em clientes com parcelas futuras ou atrasadas.",
  },
  {
    label: "Recebido no mes",
    value: "R$ 500,00",
    description: "Entradas confirmadas em maio de 2026.",
  },
  {
    label: "Clientes ativos",
    value: "2",
    description: "Clientes com compras em aberto e sem atraso critico.",
  },
  {
    label: "Clientes em atraso",
    value: "1",
    description: "Cliente com uma ou mais parcelas vencidas.",
  },
];

export const demoCustomer = customers[0];
export const demoDebt = debts.find((debt) => debt.customerId === demoCustomer.id) ?? debts[0];
