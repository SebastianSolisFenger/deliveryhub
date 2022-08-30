import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";

const Navigation = () => {
  const productsInCart = useSelector(cartProducts);
  return (
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
