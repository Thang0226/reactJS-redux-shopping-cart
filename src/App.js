import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
