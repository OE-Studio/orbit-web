import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productsSlice";
import loginReducer from "../features/loginSlice"
import walletReducer from "../features/getWalletSlice"
import transactionsReducer from "../features/TransactionsSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        login: loginReducer,
        product: productReducer,
        wallet: walletReducer,
        transactions: transactionsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})


export default store;