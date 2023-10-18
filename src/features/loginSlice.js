import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginActions';

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    success: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers:
    {
        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.success = true
            state.isLoading = false;
            state.error = null;
            sessionStorage.setItem("loginToken", JSON.stringify(payload.data.loginToken))

        },

        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        }
    }
})


export default loginSlice.reducer;