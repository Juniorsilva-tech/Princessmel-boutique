import { products } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/products/product-card";

export function ProductsSection() {
  return (
    <section id="colecao" className="py-14 sm:py-18">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Coleção"
            title="Peças selecionadas para uma presença elegante e discreta."
            description="Consulte disponibilidade, reserve pelo atendimento e acompanhe compras pelo Club."
          />
          <p className="max-w-sm text-sm leading-7 text-graphite">
            Moda modesta, acessórios, beleza e Bíblias em uma vitrine mais direta para escolher rápido.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
