import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    title: "Fé sem clichê visual",
    description: "A linguagem cristã aparece em intenção, postura e copy, não em excesso de símbolos ou apelo previsível.",
  },
  {
    title: "Modéstia sofisticada",
    description: "Peças e apresentação preservam discrição, mas com acabamento editorial e percepção de valor real.",
  },
  {
    title: "Boutique com ambição",
    description: "Princessmel nasce local, com atendimento próximo, e se posiciona como marca pronta para crescer com consistência.",
  },
];

export function PurposeSection() {
  return (
    <section id="proposito" className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2.25rem] border border-white/65 bg-ink px-7 py-10 text-ivory shadow-velvet sm:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne">Propósito</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            Vestidos para a glória de Deus.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-ivory/78">
            A Princessmel combina delicadeza, presença e clareza para vestir mulheres e homens com intenção. O resultado
            não é um site gospel genérico, mas uma boutique contemporânea que sabe comunicar fé com refinamento.
          </p>
        </div>

        <div className="lg:pl-6">
          <SectionHeading
            eyebrow="Essência da marca"
            title="Uma microempresa local com leitura premium, comercial e sensível."
            description="O posicionamento visual foi construído para parecer uma boutique moderna: limpa, editorial, acessível e memorável."
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
