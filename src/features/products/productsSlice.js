import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsAction';


const initialState = {
  products: [],
  isLoading: false,
  error: null,
  status: 'idle',
};

const productsSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "pending"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.data.answers;
        
        state.isLoading = false;
        state.error = null;
        state.status = "fulfilled"
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = "failed"
      });
  },
});

export default productsSlice.reducer;