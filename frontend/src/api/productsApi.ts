import productsData from "../../Products.json";
import type { IProduct } from "../types/product.types";

export const fetchProducts = (): Promise<IProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData as IProduct[]);
    }, 1500);
  });
};
