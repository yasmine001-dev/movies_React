import React, { useState } from "react";
import ProductForm from "../components/controlled/ProductForm";
import ProductList from "../components/controlled/ProductList";

function Controlled() {
  // products:array of all products
  // setProducts:update products
  //useState([]) : empty arr
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1>Controlled</h1>
      <hr />

      <ProductForm products={products} setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
}

export default Controlled;
