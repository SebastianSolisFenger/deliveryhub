import React, { useState, useEffect } from "react";

// FETCH DATA FROM API
const ProductsPreview = () => {
  const [products, setProducts] = useState([]);

  // USEEFFECT FOR FETCHING DATA WHEN COMPONENT IS MOUNTED
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto pb-4 w-2/3 text-white">
      <h2>Products</h2>
    </div>
  );
};

export default ProductsPreview;
