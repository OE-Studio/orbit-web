import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


// Define the API endpoint URL

// Create the asynchronous thunk for fetching the wallet data
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`v1/users/transactions/getUserTransactions?token=${JSON.parse(
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
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: null,
    loading: false,
    error: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the wallet slice actions and reducer

export default transactionsSlice.reducer;
