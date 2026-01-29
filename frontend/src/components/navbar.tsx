import { useState } from "react";
import type { IProduct } from "../types/product.types";
import { NavbarButton } from "./navbarButton";
import { CartProductList } from "./cartProductList";

interface NavbarProps {
  total: number;
  count: number;
  removeFromCart: (id: number) => void;
  cart: IProduct[];
  setSearchTerm: (value: string) => void;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar = ({
  total,
  count,
  removeFromCart,
  cart,
  setSearchTerm,
  setCategory,
}: NavbarProps) => {
  const [showCartContent, setShowCartContent] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const updateShowCartContent = () => {
    setShowCartContent(!showCartContent);
  };

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);

  const categories = ["Todos", "Cuenta", "Tarjeta", "Crédito"];

  const changeCategory = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setCategory((category: string) =>
      categories.at(id)! === category ? categories.at(0)! : categories.at(id)!,
    );
    if (activeId !== id) {
      e.currentTarget.classList.toggle("selected");
    }
    setActiveId((prevId) => (prevId === id ? 0 : id));
  };

  return (
    <section className="top">
      <nav className="navbar">
        <div className="navbar-div">
          <input
            type="text"
            id="Search"
            className="navbar__input"
            placeholder={"Buscar productos"}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="navbar-div">
          <NavbarButton
            id={0}
            className={"navbar__btn"}
            changeCategory={changeCategory}
            label="Todos"
            isActive={activeId === 0}
          />
          <NavbarButton
            id={1}
            className={"navbar__btn"}
            changeCategory={changeCategory}
            label="Cuentas"
            isActive={activeId === 1}
          />
          <NavbarButton
            id={2}
            className={"navbar__btn"}
            changeCategory={changeCategory}
            label="Tarjetas"
            isActive={activeId === 2}
          />
          <NavbarButton
            id={3}
            className={"navbar__btn"}
            changeCategory={changeCategory}
            label="Cr&eacute;dito"
            isActive={activeId === 3}
          />
          <button
            className="navbar__btn navbar__btn__cart"
            onClick={updateShowCartContent}
          ></button>
        </div>
      </nav>

      <article
        className={
          showCartContent
            ? "navbar-article cart-content"
            : "navbar-article cart-content hidden"
        }
      >
        <p className="cart-content__text">Carrito de compras</p>
        <ul className="cart-content--products">
          {cart.map((product: IProduct) => (
            <CartProductList
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
        <section className="cart-content--amount">
          Total ({count} productos)
        </section>
        <section className="cart-content--cost">Total: {totalPrice}</section>
      </article>
    </section>
  );
};
