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

  console.log(products);
  console.log(products.status);

  return (
    <div>
      {products.status === "fulfilled" &&
        products.products.map((product, index) => {
          return (
            <div key={index}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
