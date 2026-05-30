import Link from "next/link";
import { MessageCircle, UserRound } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contato" className="pb-24 pt-20 sm:pb-28 sm:pt-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Atendimento próximo para escolher, reservar e acompanhar suas peças."
            description="Fale com a boutique para consultar disponibilidade, reservar produtos e entender o Princessmel Club."
          />
        </div>

        <div className="rounded-[2.25rem] border border-white/60 bg-gradient-to-br from-white/70 via-ivory/75 to-cream/80 p-7 shadow-velvet sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-brass">Fale com a boutique</p>
          <p className="mt-5 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Reserva por conversa, curadoria próxima e acompanhamento pelo Club.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-graphite">
            Converse com a Princessmel para consultar tamanhos, separar peças, combinar retirada ou entrega e acompanhar compras pelo Club.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#colecao"
              className={buttonVariants({ className: "sm:min-w-48" })}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Ver peças
            </Link>
            <Link
              href="/login"
              className={buttonVariants({ variant: "secondary", className: "sm:min-w-48" })}
            >
              <UserRound className="mr-2 h-4 w-4" />
              Entrar no Club
            </Link>
          </div>

          <div className="mt-8 grid gap-4 border-t border-graphite/10 pt-6 text-sm text-graphite sm:grid-cols-2">
            <div>
              <p className="uppercase tracking-[0.2em] text-brass">Canal principal</p>
              <p className="mt-2">WhatsApp para reservas, dúvidas, disponibilidade e atendimento direto.</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-brass">Presença social</p>
              <p className="mt-2">Novidades, bastidores de coleção e Palavra do Dia em breve no perfil oficial.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
