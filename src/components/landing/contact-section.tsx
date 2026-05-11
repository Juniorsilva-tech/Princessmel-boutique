import Link from "next/link";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";

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
            title="Uma vitrine premium que convida a conversa certa."
            description="Canal direto para reservas, consulta de disponibilidade e relacionamento com clientes da Princessmel."
          />
        </div>

        <div className="rounded-[2.25rem] border border-white/60 bg-gradient-to-br from-white/70 via-ivory/75 to-cream/80 p-7 shadow-velvet sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-brass">Fale com a boutique</p>
          <p className="mt-5 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Atendimento próximo para moda, acessórios, beleza e itens devocionais.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-graphite">
            Substitua os links por canais oficiais e transforme a landing em vitrine comercial ativa sem alterar a base de design.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20ver%20as%20pe%C3%A7as%20da%20Princessmel."
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ className: "sm:min-w-48" })}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chamar no WhatsApp
            </Link>
            <Link
              href="https://instagram.com/princessmelboutique"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary", className: "sm:min-w-48" })}
            >
              <Instagram className="mr-2 h-4 w-4" />
              Ver Instagram
            </Link>
          </div>

          <div className="mt-8 grid gap-4 border-t border-graphite/10 pt-6 text-sm text-graphite sm:grid-cols-2">
            <div>
              <p className="uppercase tracking-[0.2em] text-brass">Canal principal</p>
              <p className="mt-2">WhatsApp para reservas e atendimento.</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-brass">Presença social</p>
              <p className="mt-2 inline-flex items-center gap-2">
                Instagram para coleção, lançamentos e editorial.
                <ArrowUpRight className="h-4 w-4" />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
