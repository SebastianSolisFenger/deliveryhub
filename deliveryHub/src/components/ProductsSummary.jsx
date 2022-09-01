import React from 'react';
import { useSelector } from 'react-redux';
import { cartProducts } from '../stores/cart/cartSlice';
import ProductSummaryCard from './ProductSummaryCard';

const ProductsSummary = () => {
  const cart = useSelector(cartProducts);

  return (
    <div className="flex flex-col">
      {cart &&
        cart?.map((product, index) => {
          return <ProductSummaryCard key={index} product={product} />;
        })}
    </div>
  );
};

export default ProductsSummary;
