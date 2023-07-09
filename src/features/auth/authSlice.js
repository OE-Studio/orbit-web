import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from './authActions'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    userInput: {},
    success: false, // for monitoring the registration process.

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUserInput: (state, { payload }) => {
            const prevInput = JSON.parse(sessionStorage.getItem('userInput'))
            if (Object.keys(payload).length > 0) {
                state.userInput = { ...state.userInput, ...prevInput, ...payload }
            }
            else {
                state.userInput = {}
            }

            sessionStorage.setItem("userInput", JSON.stringify(state.userInput))
        },
    },
    extraReducers: {
        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
            state.userInfo = payload.data.data
            state.userToken = payload.data.loginToken
            sessionStorage.setItem("userInfo", JSON.stringify(payload.data.data))
            sessionStorage.setItem("loginToken", JSON.stringify(payload.data.loginToken))
            window.location.href = '/signup/email-otp'
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload

        },

    },

})

export const { updateUserInput } = authSlice.actions

export default authSlice.reducer