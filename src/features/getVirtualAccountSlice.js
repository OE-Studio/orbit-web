import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


// Define the API endpoint URL

// Create the asynchronous thunk for fetching the wallet data
export const fetchVirtualAccount = createAsyncThunk(
  'virtualAccount/fetchWalletData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`v1/users/getUserVirtualWallet?token=${JSON.parse(
        sessionStorage.getItem("loginToken")
      )}`);
      return response.data;
    } catch (error) {
      // Handle any errors and return with rejectWithValue
      
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the wallet slice
const virtualAccount = createSlice({
  name: 'virtualAccount',
  initialState: {
    data: null,
    loading: false,
    error: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVirtualAccount.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchVirtualAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.mySageWallet;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchVirtualAccount.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the wallet slice actions and reducer

export default virtualAccount.reducer;
