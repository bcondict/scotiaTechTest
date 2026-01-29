import type { IProduct } from "./product.types";

export interface ICartStorage {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  total: number;
  count: number;
  clearCart: () => void; // Añadimos esto como mejora de funcionalidad
}
