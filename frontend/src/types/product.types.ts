export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export type Category = "Todos" | "Cuenta" | "Crédito" | "Tarjeta";
