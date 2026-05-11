export type ProductCategory =
  | "Vestidos"
  | "Feminino"
  | "Masculino"
  | "Beleza"
  | "Bíblias"
  | "Acessórios";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  description: string;
  palette: string;
  note: string;
};
