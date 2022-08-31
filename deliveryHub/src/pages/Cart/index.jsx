import React from 'react';
import { Tabs } from '../../components/Tabs';
import Button from '../../components/elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts } from '../../stores/cart/cartSlice';
import useTabSwitch from '../../hooks/useTabSwitch';
import { ReactComponent as ArrowRightSvg } from '../../assets/icons/arrow-right-long-svgrepo-com.svg';
import AddressForm from '../../components/AddressForm';

const Cart = () => {
  const cart = useSelector(cartProducts);
  const tabs = ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

  if (!cart || cart.length === 0) {
    return (
      <div className="bg-white text-black h-full flex justify-center p-4">
        <h1> Your cart is empty!</h1>
      </div>
    );
  }
  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border  border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
      <div className={`tabs ${currentTab !== 'Summary' ? 'hidded' : ''}`}>
        Summary
      </div>
      <div className={`tabs ${currentTab !== 'Delivery' ? 'hidded' : ''}`}>
        <AddressForm />
      </div>
      <div className={`tabs ${currentTab !== 'Payment' ? 'hidded' : ''}`}>
        Payment Form
      </div>
    </div>
  );
};

export default Cart;
