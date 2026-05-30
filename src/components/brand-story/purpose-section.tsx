import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    title: "Fé com delicadeza",
    description: "A identidade aparece em postura, escolha das peças e atendimento cuidadoso, sem excesso visual.",
  },
  {
    title: "Modéstia sofisticada",
    description: "Peças e apresentação preservam discrição, mas com acabamento editorial e percepção de valor.",
  },
  {
    title: "Boutique próxima",
    description: "Uma curadoria local com atendimento humano, reserva por conversa e experiência pensada para cada cliente.",
  },
];

export function PurposeSection() {
  return (
    <section id="proposito" className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2.25rem] border border-white/65 bg-ink px-7 py-10 text-ivory shadow-velvet sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne">Propósito</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            Vestir com intenção, presença e propósito.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-ivory/78">
            A Princessmel combina delicadeza, clareza e curadoria para mulheres e homens que buscam uma presença elegante, modesta e contemporânea.
          </p>
        </div>

        <div className="lg:pl-6">
          <SectionHeading
            eyebrow="Essência da marca"
            title="Uma boutique local com leitura premium, sensível e comercial."
            description="A experiência foi pensada para unir produto, conversa e propósito em uma vitrine limpa, acessível e memorável."
          />

          <div className="mt-10 space-y-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.75rem] border border-white/60 bg-white/55 p-6">
                <h3 className="font-serif text-2xl text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
