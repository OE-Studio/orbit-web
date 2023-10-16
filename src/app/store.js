import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productsSlice";
import loginReducer from "../features/loginSlice"
import walletReducer from "../features/getWalletSlice"
import backgroundReducer from "../features/getAllBackgrounds"
import transactionsReducer from "../features/TransactionsSlice"
import notificationsReducer from "../features/NotificationsSlice"
import userReducer from '../features/profile/userSlice'
import virtualAccountReducer from '../features/getVirtualAccountSlice'
import bankListReducer from '../features/getBankList'

const store = configureStore({
    reducer: {
        auth: authReducer,
        login: loginReducer,
        product: productReducer,
        wallet: walletReducer,
        backgrounds: backgroundReducer,
        transactions: transactionsReducer,
        notifications: notificationsReducer,
        user: userReducer,
        virtualAccount: virtualAccountReducer,
        bankList: bankListReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat()
})


export default store;