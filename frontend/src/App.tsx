import "./App.css";
import products from "../Products.json";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-div">
          <input
            type="text"
            id="Search"
            className="navbar__input"
            placeholder={"Buscar productos"}
          />
        </div>
        <div className="navbar-div">
          <button className="navbar__btn selected">Todos</button>
          <button className="navbar__btn">Cuentas</button>
          <button className="navbar__btn">Tarjetas</button>
          <button className="navbar__btn">Cr&eacute;dito</button>
        </div>
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
