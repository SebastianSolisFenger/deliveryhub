import React from "react";

const ProductPreviewCard = ({ product }) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPreviewCard;
