import { products } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/products/product-card";

export function ProductsSection() {
  return (
    <section id="colecao" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Coleção"
            title="Peças selecionadas para compor uma presença elegante e discreta."
            description="Escolha por categoria, consulte disponibilidade e reserve diretamente com atendimento próximo."
          />
          <p className="max-w-sm text-sm leading-7 text-graphite">
            A curadoria reúne moda modesta, acessórios, beleza e itens devocionais dentro de uma mesma atmosfera visual.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
