import { MapPin, MessageCircleMore, PackageCheck, Sparkles, UserRoundCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    icon: UserRoundCheck,
    title: "Atendimento direto",
    description: "Contato próximo, linguagem clara e relacionamento de boutique para apoiar escolha, reserva e dúvidas.",
  },
  {
    icon: MapPin,
    title: "Curadoria de São Paulo",
    description: "Seleção com leitura de tendência, acabamento comercial e sensibilidade para uma clientela real.",
  },
  {
    icon: PackageCheck,
    title: "Moda, beleza e acessórios",
    description: "Mix compacto, porém coerente, incluindo feminino, masculino, beleza, Bíblias e detalhes complementares.",
  },
  {
    icon: MessageCircleMore,
    title: "Reserva pelo WhatsApp",
    description: "Fluxo simples para vender rápido sem depender de checkout complexo logo no primeiro estágio do projeto.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[2.25rem] border border-white/60 bg-white/55 p-7 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="Experiência"
            title="Uma experiência comercial limpa, humana e pronta para conversão."
            description="A navegação foi desenhada para parecer sofisticada sem perder objetividade de varejo."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-[1.75rem] border border-graphite/8 bg-ivory/75 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/20 bg-white/70 text-brass">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex items-center gap-3 rounded-full border border-brass/15 bg-canvas px-5 py-4 text-sm text-graphite">
            <Sparkles className="h-4 w-4 text-brass" />
            Estrutura pronta para evoluir em catálogo completo, carrinho e integração futura.
          </div>
        </div>
      </Container>
    </section>
  );
}
