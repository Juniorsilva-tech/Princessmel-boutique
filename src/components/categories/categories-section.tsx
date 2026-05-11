import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Categorias"
          title="Uma boutique pequena, mas com leitura completa de estilo e propósito."
          description="A seleção combina moda, acessórios, beleza e itens devocionais dentro de uma mesma atmosfera visual."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <article
              key={category.name}
              className={[
                "group rounded-[2rem] border border-white/70 bg-white/55 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-velvet",
                index === 0 ? "xl:col-span-2" : "",
              ].join(" ")}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-brass">{category.eyebrow}</p>
              <h3 className="mt-10 font-serif text-3xl text-ink">{category.name}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-graphite">{category.description}</p>
              <div className="mt-10 h-px w-full bg-gradient-to-r from-brass/40 to-transparent transition duration-300 group-hover:from-brass" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
