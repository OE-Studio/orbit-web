import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/axios'



export const getUserProfile = createAsyncThunk(
    'user/fetch',
    async (userInput, { rejectWithValue }) => {
        try {

            let response = await axios.get(
                `v1/users/profile?token=${JSON.parse(
                    sessionStorage.getItem("loginToken")
                )}`
            )
            return response


        } catch (error) {
            // return custom error message from backend if present
            // if (error.response && error.response.data.message) {
            //     return rejectWithValue(error.response.data.message)
            // } else {
            //     return rejectWithValue(error.message)
            // }
            return rejectWithValue(error)
        }
    }
)

