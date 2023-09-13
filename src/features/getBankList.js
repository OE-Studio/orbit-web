
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


// Define the API endpoint URL

// Create the asynchronous thunk for fetching the wallet data
export const fetchBankList = createAsyncThunk(
  'bankList/fetchBankList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`v1/banklist`);
      return response.data;
    } catch (error) {
      // Handle any errors and return with rejectWithValue
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the Bank List slice
const bankList = createSlice({
  name: 'Bank List',
  initialState: {
    data: null,
    loading: false,
    error: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBankList.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchBankList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.bank.data;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchBankList.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the wallet slice actions and reducer

export default bankList.reducer;
