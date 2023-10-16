import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/axios'



export const registerUser = createAsyncThunk(
    'auth/register',
    async (userInput, { rejectWithValue }) => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            let response = await axios.post(
                `/v1/users`,
                userInput,
                config
            )

            if(!response.data.success){
                
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

