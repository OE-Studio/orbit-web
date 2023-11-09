import React, { useEffect, useState } from "react";

import { Navigate } from 'react-router-dom'
import RootLayout from '../../Pages/RootLayout'
import { AnimatePresence } from 'framer-motion'
// import PinDialog from '../TransactionPin/PinDialog'
// import { PINProvider } from '../TransactionPin/PinContext'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsAction";
import { fetchWalletData } from "../../features/getWalletSlice";
import { fetchTransactions } from "../../features/TransactionsSlice";
import logo from '../../assets/loadaer.svg'
import { getUserProfile } from "../../features/profile/userAction";
import { fetchVirtualAccount } from "../../features/getVirtualAccountSlice";
import { fetchBankList } from "../../features/getBankList";

import { fetchNotifications } from "../../features/NotificationsSlice";
import { fetchAllBackground } from "../../features/getAllBackgrounds";





const ProtectedRoutes = () => {
    const dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(() => {
        const storedFirstLoad = localStorage.getItem("firstLoad");
        return storedFirstLoad ? JSON.parse(storedFirstLoad) : true;
    });

    const [render, setRender] = useState(false);

    let user = JSON.parse(sessionStorage.getItem('loginToken'))
    // Store Data
    const userStatus = useSelector((state) => state.user.status);
    const productsStatus = useSelector((state) => state.product.status);
    const walletStatus = useSelector((state) => state.wallet.status);
    const transactionStatus = useSelector((state) => state.transactions.status);
    const virtualAccountStatus = useSelector((state) => state.virtualAccount.status);
    const bankListStatus = useSelector((state) => state.bankList.status);
    const notificationStatus = useSelector((state) => state.notifications.status);
    const bgStatus = useSelector((state) => state.backgrounds.status);



    // getUser
    useEffect(() => {
        if (user && userStatus === "idle") {
            dispatch(getUserProfile())
        }
        // eslint-disable-next-line
    }, [userStatus]);

    // getBankList
    useEffect(() => {
        if (user && bankListStatus === "idle") {
            dispatch(fetchBankList())

        }
        // eslint-disable-next-line
    }, [bankListStatus]);

    // getVirtualAccount
    useEffect(() => {
        if (user && virtualAccountStatus === "idle") {
            dispatch(fetchVirtualAccount())
        }
        // eslint-disable-next-line
    }, [virtualAccountStatus]);

    // fetchProduct
    useEffect(() => {
        if (user && productsStatus === "idle") {
            dispatch(fetchProducts())
        }
        return () => { };
        // eslint-disable-next-line
    }, [productsStatus]);

    // fetchWallet
    useEffect(() => {
        if (user && walletStatus === "idle") {
            dispatch(fetchWalletData());
        }
        return () => { };
        // eslint-disable-next-line
    }, [walletStatus]);


    // fetchBackgrounds
    useEffect(() => {
        if (user && bgStatus === "idle") {
            dispatch(fetchAllBackground());
        }
        return () => { };
        // eslint-disable-next-line
    }, [bgStatus]);


    // fetchTransactions
    useEffect(() => {
        if (user && transactionStatus === "idle") {
            dispatch(fetchTransactions());
        }
        return () => { };
        // eslint-disable-next-line
    }, [transactionStatus]);

    // fetchNotifications
    useEffect(() => {
        if (user && notificationStatus === "idle") {
            dispatch(fetchNotifications());
        }
        return () => { };
        // eslint-disable-next-line
    }, [notificationStatus]);

    useEffect(() => {
        if (user &&
            productsStatus === "fulfilled" &&
            walletStatus === "fulfilled"
            && transactionStatus === "fulfilled"
            && notificationStatus === "fulfilled"
            && userStatus === "fulfilled"
            && bankListStatus === "fulfilled"

        ) {
            if (firstLoad) {
                setTimeout(() => {

                    setRender(true);
                    setFirstLoad(false); // Mark first load as completed
                    localStorage.setItem("firstLoad", JSON.stringify(false)); // Store firstLoad in local storage
                }, 1000); // Delay of 1000 milliseconds (1 second) only during the first load
            } else {
                setRender(true);
            }
        }
    }, [
        user,
        firstLoad,
        productsStatus,
        walletStatus,
        transactionStatus,
        userStatus, bankListStatus, notificationStatus
    ]);


    return (
        <AnimatePresence>
            {!user ? <Navigate to='/login' /> :
                render ? (
                    <>
                        <RootLayout />
                    </>
                ) : (
                    <>
                        <div className="animate-ping w-screen h-screen center">
                            <img src={logo} alt="" />
                        </div>
                    </>
                )

            }
        </AnimatePresence>
    )
}

export default ProtectedRoutes