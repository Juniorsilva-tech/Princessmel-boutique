import type { ProductCategory } from "@/types/product";

export const categories: Array<{
  name: ProductCategory;
  eyebrow: string;
  description: string;
}> = [
  {
    name: "Vestidos",
    eyebrow: "Assinatura da marca",
    description: "Peças de presença suave, recorte elegante e delicadeza com intenção.",
  },
  {
    name: "Feminino",
    eyebrow: "Curadoria boutique",
    description: "Looks femininos com modéstia sofisticada, frescor editorial e acabamento visual limpo.",
  },
  {
    name: "Masculino",
    eyebrow: "Presença essencial",
    description: "Seleção masculina com sobriedade atual, boa modelagem e leitura refinada.",
  },
  {
    name: "Beleza",
    eyebrow: "Ritual diário",
    description: "Produtos para cuidado e autocuidado com estética calma e composição sensorial.",
  },
  {
    name: "Bíblias",
    eyebrow: "Propósito em forma",
    description: "Itens devocionais selecionados para unir significado, leitura e beleza discreta.",
  },
  {
    name: "Acessórios",
    eyebrow: "Detalhes que concluem",
    description: "Bolsas e complementos que valorizam a produção sem disputar atenção.",
  },
];
