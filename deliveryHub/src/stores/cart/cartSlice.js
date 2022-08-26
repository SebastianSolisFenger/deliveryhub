import { createSlice } from "@reduxjs/toolkit";

// CREATE SLICE ALLOWS US TO CREATE ACTIONS AND REDUCERS IN ONE PLACE

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  //
  // reducers in this case would be all the functions we want to perform in the cart
  //
  reducers: {
    // ADD TO CART
    addToCart: (state, action) => {
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    // CLEAR CART
    clearCart: (state) => {
      return {
        products: [],
      };
    },
    // INCREMENT PRODUCT AMOUNT
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    // DECREMENT PRODUCT AMOUNT
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
    },
  },
});

export const cartProducts = (state) => state.cart.products;

// export functions
export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
