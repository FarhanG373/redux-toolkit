import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "ideal",
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchproducts(state, actions){
    //     state.data = actions.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, actions) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, actions) => {
        state.data = actions.payload;
        state.status = "ideal";
      })
      .addCase(getProduct.rejected, (state, actions) => {
        state.status = "error";
      });
  },
});
export const { fetchproducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProduct = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
