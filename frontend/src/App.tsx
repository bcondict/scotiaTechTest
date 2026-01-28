import "./App.css";
import products from "../Products.json";

function App() {
  return (
    <>
      <h1>Data from JSON:</h1>
      <nav className="navbar">
        <input type="text" />
        <button>Todos</button>
        <button>Cuentas</button>
        <button>Tarjetas</button>
        <button>Cr&eacute;dito</button>
      </nav>

      <ul className="organizer">
        {products.map((product) => {
          const price = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price);

          return (
            <li className="product" key={product.id}>
              <img
                src={product.image}
                alt={"Image of account"}
                className="product__img"
              />
              <div className="product--div">
                <p className="product__tittle">{product.title}</p>
                <p className="product__price">{price}</p>
                <div className="btn-container">
                  <button className="product__add-car-button">
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
