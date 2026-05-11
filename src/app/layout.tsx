import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Princessmel Boutique",
  description:
    "Landing conceitual premium para a Princessmel Boutique, com moda, acessórios, beleza e propósito em uma linguagem editorial.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
