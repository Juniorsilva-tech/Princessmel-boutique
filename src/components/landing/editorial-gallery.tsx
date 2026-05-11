import { Container } from "@/components/ui/container";
import { EditorialPlaceholder } from "@/components/ui/editorial-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

const galleryItems = [
  {
    label: "Vestidos",
    palette: "from-[#f4e8db] via-[#d1ab82] to-[#f7f1ea]",
    className: "min-h-[340px] lg:col-span-2",
  },
  {
    label: "Masculino",
    palette: "from-[#e6ddd2] via-[#9b8268] to-[#f0ebe4]",
    className: "min-h-[340px]",
  },
  {
    label: "Beleza",
    palette: "from-[#f5ede3] via-[#ccb49c] to-[#efe1d4]",
    className: "min-h-[240px]",
  },
  {
    label: "Tecidos",
    palette: "from-[#efe0cf] via-[#ba956d] to-[#f7efe5]",
    className: "min-h-[240px]",
  },
  {
    label: "Vitrine",
    palette: "from-[#ece2d6] via-[#ad8861] to-[#f5eee6]",
    className: "min-h-[240px] lg:col-span-2",
  },
];

export function EditorialGallery() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Editorial"
          title="Estrutura pronta para campanhas, detalhes de tecido e vitrine de coleção."
          description="Os placeholders foram desenhados para manter valor percebido alto até a entrada das fotos reais."
          align="center"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <EditorialPlaceholder
              key={item.label}
              label={item.label}
              palette={item.palette}
              className={item.className}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
