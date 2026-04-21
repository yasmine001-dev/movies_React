import React, { useContext } from "react";
import { ProductsContext } from "../context/MoviesContext";
import ProductCard from "./MovieCard";

function ProductList() {
  // بناخد الـ filteredProducts من الـ Context مباشرة
  const { filteredProducts } = useContext(ProductsContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // لو الـ cards كتير → انزل سطر جديد
      }}
    >
      {/* لو مفيش منتجات في التصنيف ده */}
      {filteredProducts.length === 0 && (
        <p>No products found in this category.</p>
      )}

      {/* بنعمل loop وبنبعت كل منتج للـ ProductCard */}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
