import type { IProduct } from "../types/product.types";

interface CartProductListProps {
  product: IProduct;
  removeFromCart: (id: number) => void;
}
export const CartProductList = ({
  product,
  removeFromCart,
}: CartProductListProps) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <li className="cart-item">
      <img src={product.image} className="cart-item__img" />
      <div className="cart-item__div">
        <p className="cart-item__text">{product.title}</p>
        <p className="cart-item__text">{price}</p>
      </div>
      <button
        className="cart-item__btn"
        onClick={() => removeFromCart(product.id)}
      />
    </li>
  );
};
