"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CreditCard, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-12 pt-9 sm:pb-16 sm:pt-12 lg:pb-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] xl:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brass shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Boutique modesta com curadoria
          </div>

          <h1 className="mt-7 font-serif text-[2.65rem] leading-[0.98] text-ink sm:text-5xl lg:text-[4.45rem] xl:text-[4.8rem]">
            Moda modesta com elegância contemporânea.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-graphite sm:text-lg">
            Peças femininas, masculinas, acessórios, beleza e itens devocionais selecionados para vestir com propósito e presença.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="#colecao" className={buttonVariants({ className: "sm:min-w-44" })}>
              Ver coleção
            </Link>
            <Link
              href="/login"
              className={buttonVariants({ variant: "secondary", className: "sm:min-w-52" })}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Acessar Club
            </Link>
          </div>

          <div className="mt-10 grid gap-5 border-t border-graphite/12 pt-7 sm:grid-cols-3">
            {[
              "Curadoria São Paulo",
              "Reserva direta no WhatsApp",
              "Club para acompanhar parcelas",
            ].map((item) => (
              <p key={item} className="text-sm leading-6 text-graphite">
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="relative"
        >
          <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
            <EditorialPlaceholder
              label="Editorial feminino"
              palette="from-[#f1e4d3] via-[#d3b18d] to-[#f7efe5]"
              className="min-h-[250px] sm:min-h-[430px]"
            />
            <div className="grid gap-4">
              <EditorialPlaceholder
                label="Bíblia devocional"
                palette="from-[#f7f1e8] via-[#ceb399] to-[#e5d8c6]"
                className="min-h-[190px]"
              />
              <div className="rounded-[1.75rem] border border-white/70 bg-ivory/88 p-5 shadow-velvet">
                <p className="text-xs uppercase tracking-[0.32em] text-brass">Coleção da semana</p>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  Destaques para reservar no WhatsApp e consultar saldo no Princessmel Club.
                </p>
                <Link
                  href="#novidades"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-ink transition hover:text-brass"
                >
                  Ver novidades
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <EditorialPlaceholder
                label="Beleza ritual"
                palette="from-[#e7ddcf] via-[#a98a64] to-[#f4ede4]"
                className="min-h-[160px]"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
