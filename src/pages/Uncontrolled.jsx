import React, { useState } from "react";
import ProductForm from "../components/uncontrolled/ProductForm";
import ProductList from "../components/uncontrolled/ProductList";

function Uncontrolled() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1>Uncontrolled </h1>
      <ProductForm products={products} setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
}

export default Uncontrolled;
