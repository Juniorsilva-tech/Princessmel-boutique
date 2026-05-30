import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/data/products";

export function WeeklyCollectionSection() {
  const featured = products[0];

  return (
    <section id="novidades" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 rounded-[2.5rem] border border-white/65 bg-white/50 p-5 shadow-sm lg:grid-cols-[1.08fr_0.92fr] lg:p-7">
          <EditorialPlaceholder
            label="Coleção da semana"
            palette="from-[#efe0cf] via-[#b89268] to-[#fbf4ec]"
            className="min-h-[360px] rounded-[2rem] lg:min-h-[520px]"
          />

          <div className="flex flex-col justify-between rounded-[2rem] border border-graphite/10 bg-ivory/88 p-7 sm:p-9">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-brass">Novidade selecionada</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-graphite">{featured.description}</p>

              <div className="mt-8 grid gap-4 border-y border-graphite/10 py-6 sm:grid-cols-3">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-brass">Preço</p>
                  <p className="mt-2 font-serif text-2xl text-ink">{featured.price}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-brass">Status</p>
                  <p className="mt-2 text-sm text-graphite">Reserva via WhatsApp</p>
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-brass">Club</p>
                  <p className="mt-2 text-sm text-graphite">Acompanhe parcelas</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`https://wa.me/5500000000000?text=${encodeURIComponent(`Olá, quero reservar ou consultar disponibilidade do ${featured.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ className: "sm:min-w-48" })}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Reservar peça
              </Link>
              <Link
                href="/login"
                className={buttonVariants({ variant: "secondary", className: "sm:min-w-48" })}
              >
                Ver Club
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
