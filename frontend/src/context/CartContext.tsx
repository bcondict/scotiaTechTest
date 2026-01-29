import {
  createContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
  useContext,
} from "react";
import type { IProduct } from "../types/product.types";

interface CartContextType {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  totalItems: number;
  totalPrice: number;
}
interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("bank_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("bank_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProduct) => {
    setCart((prevCart: IProduct[]) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        // Si ya existe, podrías aumentar la cantidad o simplemente mantenerlo
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart: IProduct[]) =>
      prevCart.filter((item) => item.id !== productId),
    );
  };

  const { totalItems, totalPrice }: { totalItems: number; totalPrice: number } =
    useMemo(() => {
      return {
        totalItems: cart.length,
        totalPrice: cart.reduce(
          (acc: number, item: IProduct) => acc + item.price,
          0,
        ),
      };
    }, [cart]);

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
