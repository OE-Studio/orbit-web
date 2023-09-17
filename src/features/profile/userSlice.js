import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from './userAction';



const initialState = {
  user: {},
  cashFlow: {},
  isLoading: false,
  error: null,
  status: 'idle',
};

const user = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "pending"
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        
        state.user = { ...action.payload.data.user };
        state.cashFlow = { ...action.payload.data.totalFunding, ...action.payload.data.totalSpending };
        state.isLoading = false;
        state.error = null;
        state.status = "fulfilled"
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.log(action.payload)
        state.status = "failed"
      });
  },
});

export default user.reducer;