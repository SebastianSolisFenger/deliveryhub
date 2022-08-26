// We are also importing createAsyncAction because we are gonna be making API calls like an async action.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products.push(action.payload.data);
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

// return whats currrently stored in our redux state of products
export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:8080/api/products-by-categories");
    const data = await res.json();
    return data;
  }
);

export const selectAllProducts = (state) => state.products;
