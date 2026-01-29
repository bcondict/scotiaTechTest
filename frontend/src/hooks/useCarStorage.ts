import { useState, useEffect } from "react";
import type { IProduct } from "../types/product.types";
import type { ICartStorage } from "../types/ICartStorage.types";

export const useCartStorage = (): ICartStorage => {
  const [cart, setCart] = useState<IProduct[]>(() => {
    const saved = localStorage.getItem("shopping_cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bank_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProduct) => {
    setCart((prev) =>
      prev.find((p) => p.id === product.id) ? prev : [...prev, product],
    );
  };

  const clearCart = (): void => {
    setCart([]);
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    total,
    count: cart.length,
  };
};
