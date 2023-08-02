import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productsSlice";
import loginReducer from "../features/loginSlice"
import walletReducer from "../features/getWalletSlice"
import transactionsReducer from "../features/TransactionsSlice"
import userReducer from '../features/profile/userSlice'
import virtualAccountReducer from '../features/getVirtualAccountSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        login: loginReducer,
        product: productReducer,
        wallet: walletReducer,
        transactions: transactionsReducer,
        user: userReducer,
        virtualAccount: virtualAccountReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})


export default store;