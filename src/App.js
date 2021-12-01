import Header from "./components/header";
import ProductList from "./components/product-list";
import { CartProvider } from "./providers/cart";
import { CatalogueProvider } from "./providers/catalogue";
import Cart from "./components/cart";

import "./App.css";

function App() {
  return (
    <div className="divContainer">
      <CatalogueProvider>
        <CartProvider>
          <Header title="Lista de compras" />
          <ProductList type="catalogue" />
          <Cart title="Carrinho" />
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
