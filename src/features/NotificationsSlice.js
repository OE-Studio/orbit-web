import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


// Define the API endpoint URL

// Create the asynchronous thunk for fetching the wallet data
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`v1/users/notifications?token=${JSON.parse(
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
const notificationsSlice = createSlice({
  name: 'transactions',
  initialState: {
    notifications: null,
    loading: false,
    error: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload.alllNotifications;
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the wallet slice actions and reducer

export default notificationsSlice.reducer;
