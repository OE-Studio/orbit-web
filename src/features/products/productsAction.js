import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




export const fetchProducts = createAsyncThunk(
    'product/fetch',
    async (userInput, { rejectWithValue }) => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            let response = await axios.get(
                `https://orbit-finance-api.herokuapp.com/admin/api/v1/products`,
                config
            )
            return response

        } catch (error) {
            // return custom error message from backend if present
            // if (error.response && error.response.data.message) {
            //     return rejectWithValue(error.response.data.message)
            // } else {
            //     return rejectWithValue(error.message)
            // }
            console.log(error)
        }
    }
)

