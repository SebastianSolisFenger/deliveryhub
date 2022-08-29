import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productSlice";
import { useEffect } from "react";
import ProductDetailCard from '../../components/ProductDetailCard'

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  // when component mounts, fetch products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products.products[0].products);

  return (
    <div className="bg-white">
      <h1 className="text-white">whatt</h1>
      <div className="menu-wrapper">
        {/* {products.products.map((product, index) => {
          console.log(product);
          return (
            <>
              <div className="text-white">{product.name.name}</div>
              <div className="text-white">{product.products[0].name}</div>
            </>
          );
        })} */}
        {products.products[0].products.map((product, index) => {
          return  <ProductDetailCard key={index}  product={product}/>
        })}
      </div>
    </div>
  );
};

export default Menu;
