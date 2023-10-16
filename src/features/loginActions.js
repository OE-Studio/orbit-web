import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api/axios'



export const loginUser = createAsyncThunk(
    'auth/login',
    async (userInput, { rejectWithValue }) => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            let response = await axios.post(
                `/v1/users/login`,
                userInput,
                config
            )


            if (response.data.success === false) {
                
                return rejectWithValue(response.data.message)
            }

            return response

        } catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                
                return rejectWithValue(error.message)
            }
        }
    }
)

