import React from 'react';
import { Tabs } from '../../components/Tabs';
import Button from '../../components/elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts } from '../../stores/menu/productSlice';
import { ReactComponent as ArrowRightSvg } from '../../assets/icons/arrow-right-long-svgrepo-com.svg';

const Cart = () => {
  const cart = useSelector(selectAllProducts);
  const tabs = ['Summary', 'Delivery', 'Payment'];

  if (!cart || cart.products.length === 0) {
    return (
      <div className="bg-white text-black h-full flex justify-center p-4">
        <h1> Your cart is empty!</h1>
      </div>
    );
  }
  return <div>Cart</div>;
};

export default Cart;
