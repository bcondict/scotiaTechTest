import type { IProduct } from "../types/product.types";

interface ProductProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}

export const Product = ({ product, addToCart }: ProductProps) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <li className="product">
      <img
        src={product.image}
        alt={`Image of ${product.title}`}
        className="product__img"
        loading="lazy" // Optional: for better performance
      />
      <div className="product--div">
        <p className="product__title">{product.title}</p>
        <p className="product__price">{price}</p>
        <div className="btn-container">
          <button
            className="product__add-car-button"
            onClick={() => addToCart(product)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </li>
  );
};
