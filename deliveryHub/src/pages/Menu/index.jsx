import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productSlice";
import { useEffect } from "react";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  // when component mounts, fetch products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <div>Menu</div>;
};

export default Menu;
