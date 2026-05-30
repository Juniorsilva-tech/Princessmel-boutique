"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CreditCard, MessageCircle, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { buttonVariants } from "@/components/ui/button";

const categories = ["Vestidos", "Feminino", "Masculino", "Beleza", "Bíblias", "Acessórios"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-gradient-to-br from-white/74 via-ivory/88 to-cream/82 p-5 shadow-frame sm:p-7 lg:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,255,255,0.72),transparent_28%),radial-gradient(circle_at_90%_16%,rgba(184,149,106,0.16),transparent_30%)]" />

          <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex min-h-[520px] flex-col justify-between rounded-[2.25rem] bg-ink p-7 text-ivory shadow-velvet sm:p-10 lg:min-h-[600px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-champagne/25 bg-ivory/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-champagne">
                  <Sparkles className="h-3.5 w-3.5" />
                  Boutique modesta com curadoria
                </div>

                <h1 className="mt-8 max-w-[11ch] font-serif text-[3.25rem] leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
                  Elegância discreta.
                </h1>
                <p className="mt-7 max-w-lg text-base leading-8 text-ivory/74 sm:text-lg">
                  Peças femininas e masculinas, acessórios, beleza, Bíblias e Palavra do Dia para vestir e viver com propósito.
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="#novidades" className={buttonVariants({ className: "border-champagne bg-champagne text-ink hover:border-ivory hover:bg-ivory sm:min-w-44" })}>
                    Ver novidades
                  </Link>
                  <Link
                    href="/login"
                    className={buttonVariants({ variant: "secondary", className: "border-ivory/20 bg-ivory/8 text-ivory hover:bg-ivory/14 sm:min-w-44" })}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Acessar Club
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 border-t border-ivory/12 pt-6 sm:grid-cols-3">
                  {["Reserva por conversa", "Curadoria local", "Palavra do dia"].map((item) => (
                    <p key={item} className="text-xs uppercase tracking-[0.22em] text-ivory/58">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-rows-[1fr_auto]">
              <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
                <EditorialPlaceholder
                  label="Vitrine principal"
                  palette="from-[#f1e4d3] via-[#c39b6f] to-[#f7efe5]"
                  className="min-h-[360px] rounded-[2.1rem] lg:min-h-[480px]"
                />

                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-white/70 bg-ivory/88 p-6 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-brass">Coleção da semana</p>
                    <h2 className="mt-5 font-serif text-3xl leading-tight text-ink">Vestido Aurora</h2>
                    <p className="mt-4 text-sm leading-7 text-graphite">
                      Peça destaque para ocasiões especiais, cultos e encontros com presença serena.
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-graphite/10 pt-5">
                      <span className="font-serif text-2xl text-ink">R$ 289</span>
                      <Link href="#contato" className="inline-flex items-center gap-2 text-sm text-ink transition hover:text-brass">
                        Reservar
                        <MessageCircle className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <EditorialPlaceholder
                    label="Palavra do dia"
                    palette="from-[#f7f1e8] via-[#bda181] to-[#e5d8c6]"
                    className="min-h-[210px] rounded-[2rem]"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((item) => (
                      <span key={item} className="rounded-full border border-brass/15 bg-ivory/80 px-3 py-2 text-xs text-graphite">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link href="#colecao" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-ink transition hover:text-brass">
                    Explorar coleção
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
