import React, { useContext } from "react";
import { ProductsContext } from "../context/MoviesContext";

function CategoryFilter() {
  // بناخد من الـ Context: الـ categories وأيهم المختار والدالة اللي بتغيّر
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(ProductsContext);

  return (
    <div style={{ margin: "20px 0" }}>
      {/* بنعمل loop على كل الـ categories ونعمل button لكل واحدة */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          // لو الـ category دي هي المختارة → غيّري الستايل
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            backgroundColor: selectedCategory === cat ? "#333" : "#eee",
            color: selectedCategory === cat ? "#fff" : "#333",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
