import Link from "next/link";
import { CreditCard, MessageCircle, ShieldCheck, WalletCards } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

const features = [
  {
    icon: CreditCard,
    title: "Cartão digital",
    description: "A cliente acompanha identificação, saldo restante e percentual quitado em uma tela simples.",
  },
  {
    icon: WalletCards,
    title: "Parcelas claras",
    description: "Valores pagos, próximos vencimentos e histórico ficam organizados em poucos toques.",
  },
  {
    icon: ShieldCheck,
    title: "Controle da boutique",
    description: "O admin visualiza clientes, cobranças e saldos sem depender de planilha solta.",
  },
];

export function PrincessmelClubSection() {
  return (
    <section id="club" className="py-14 sm:py-18">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brass/20 bg-ink p-7 text-ivory shadow-frame sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(217,197,169,0.26),transparent_32%),linear-gradient(135deg,rgba(184,149,106,0.22),transparent_45%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-champagne">Princessmel Club</p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                Compre, acompanhe parcelas e consulte seu saldo com clareza.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-ivory/72">
                Uma área simples para clientes visualizarem quanto falta quitar e para a boutique organizar cobranças com mais presença profissional.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/login" className={buttonVariants({ className: "border-champagne bg-champagne text-ink hover:border-ivory hover:bg-ivory" })}>
                  Entrar no Club
                </Link>
                <Link
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20saber%20como%20funciona%20o%20Princessmel%20Club."
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary", className: "border-ivory/20 bg-ivory/8 text-ivory hover:bg-ivory/15" })}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Perguntar no WhatsApp
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article key={feature.title} className="rounded-[1.75rem] border border-ivory/12 bg-ivory/8 p-5 backdrop-blur">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-ivory">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ivory/68">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
