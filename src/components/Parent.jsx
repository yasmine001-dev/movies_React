import React, { useEffect, useState } from "react";
import Child from "./Child";
export default function Parent() {
  const [products, setProducts]=useState(
    [{
    id: 10,
    count: 15,
    code: "BAT-99",
    price: 250,
    onsale: true
  },
  {
    id: 20,
    count: 8,
    code: "PND-01",
    price: 180,
    onsale: false
  },
  {
    id: 30,
    count: 20,
    code: "DDP-24",
    price: 320,
    onsale: true
  },
  {
    id: 40,
    count: 5,
    code: "MNK-12",
    price: 450,
    onsale: false
  },
  {
    id: 50,
    count: 0,
    code: "BRB-05",
    price: 150,
    onsale: true
  }]
  );
  useEffect(()=>{
    console.log("start");
  },[]);
  function deleteProduct(id) {
    let productsCopy= structuredClone(products);
    //أنا عايز كل حاجة إلا دا
    let newProducts= productsCopy.filter((product)=>product.id !=id);
    // اللي مش محذوفة

     console.log(newProducts);
     setProducts(newProducts);

  }
  function updateProduct(index) {
    let productsCopy= structuredClone(products);
    productsCopy[index].count++;
    setProducts(productsCopy);
  }
  return (
    <>
{products.map((product, index) => (
  <Child  key={product.id} product={product} delete={deleteProduct} update={updateProduct} productIndex ={index} />
))}      
      
    </>
  );
}
