import "./App.css";
import type { IProduct } from "./types/product.types";
import { Product } from "./components/product";
import { Navbar } from "./components/navbar";
import { useCartStorage } from "./hooks/useCarStorage";
import { useProduct } from "./hooks/useProducts";
import { useState } from "react";

function App() {
  const { cart, addToCart, removeFromCart, total, count } = useCartStorage();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todos");

  const { filteredProducts, loading } = useProduct(searchTerm, category);

  if (loading) {
    return <div className="loading">Cargando productos</div>;
  }

  return (
    <>
      <Navbar
        total={total}
        count={count}
        removeFromCart={removeFromCart}
        cart={cart}
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
      />

      <ul className="organizer">
        {filteredProducts.map((product: IProduct) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </>
  );
}

export default App;
