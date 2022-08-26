import React from "react";
import AddProduct from "./AddProduct";

const ProductPreviewCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    // TODO: CREATE AFTER SETTING UP REDUX STATE FOR CART TO ADD PRODUCT THERE
  };

  return (
    <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
      <img src={product.imageUrl} alt={product.name} />
      <h2 className="pb-2 text-lg">{product.name}</h2>
      <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
      <AddProduct onAddProduct={addProduct} />
    </div>
  );
};

export default ProductPreviewCard;
