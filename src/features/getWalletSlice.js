import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


// Define the API endpoint URL

// Create the asynchronous thunk for fetching the wallet data
export const fetchWalletData = createAsyncThunk(
  'wallet/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`v1/users/getUserWallet?token=${JSON.parse(
        sessionStorage.getItem("loginToken")
      )}`);
      return response.data;
    } catch (error) {
      // Handle any errors and return with rejectWithValue
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the wallet slice
const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
      data: null,
      loading: false,
      error: null,
      status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWalletData.pending, (state) => {
          state.loading = true;
          state.status = 'pending';
          state.error = null;
        })
        .addCase(fetchWalletData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.status = 'fulfilled';
          state.error = null;
        })
        .addCase(fetchWalletData.rejected, (state, action) => {
          state.loading = false;
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });

// Export the wallet slice actions and reducer

export default walletSlice.reducer;
