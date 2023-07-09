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

            state.user = payload;
            state.success = true
            state.isLoading = false;
            state.error = null;
            sessionStorage.setItem("user", JSON.stringify(payload.data.existingUser))
            sessionStorage.setItem("loginToken", JSON.stringify(payload.data.loginToken))

        },

        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = 'Invalid password or email';
        }
    }
})


export default loginSlice.reducer;