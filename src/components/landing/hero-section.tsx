"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14">
      <Container className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brass shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Boutique editorial com propósito
          </div>

          <h1 className="mt-8 font-serif text-[2.9rem] leading-[0.95] text-ink sm:text-6xl lg:text-[4.9rem]">
            Delicadeza, propósito e presença em cada detalhe.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-graphite sm:text-xl">
            Vestidos para a glória de Deus. Moda feminina e masculina com curadoria, clareza e elegância.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#colecao" className={buttonVariants({ className: "sm:min-w-44" })}>
              Explorar coleção
            </Link>
            <Link
              href="#proposito"
              className={buttonVariants({ variant: "secondary", className: "sm:min-w-44" })}
            >
              Conhecer a marca
            </Link>
          </div>

          <div className="mt-12 grid gap-5 border-t border-graphite/12 pt-8 sm:grid-cols-3">
            {[
              "Curadoria de São Paulo",
              "Peças, beleza e Bíblias",
              "Reserva e atendimento no WhatsApp",
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
          className="relative lg:pb-10"
        >
          <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <EditorialPlaceholder
              label="Editorial delicado"
              palette="from-[#f1e4d3] via-[#d3b18d] to-[#f7efe5]"
              className="min-h-[260px] sm:min-h-[380px]"
            />
            <div className="grid gap-4">
              <EditorialPlaceholder
                label="Coleção atual"
                palette="from-[#f7f1e8] via-[#ceb399] to-[#e5d8c6]"
                className="min-h-[180px]"
              />
              <EditorialPlaceholder
                label="Detalhes e texturas"
                palette="from-[#e7ddcf] via-[#a98a64] to-[#f4ede4]"
                className="min-h-[220px]"
              />
            </div>
          </div>

          <div className="absolute -bottom-1 left-4 max-w-[260px] rounded-[1.75rem] border border-white/70 bg-ivory/90 p-5 shadow-velvet sm:left-auto sm:right-8">
            <p className="text-xs uppercase tracking-[0.32em] text-brass">Essência Princessmel</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              Moda com identidade, respiro visual e sofisticação comercial para uma boutique em crescimento.
            </p>
            <Link
              href="#contato"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink transition hover:text-brass"
            >
              Falar com a loja
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
