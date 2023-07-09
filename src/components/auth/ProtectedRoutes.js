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


const ProtectedRoutes = () => {
    const dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(() => {
        const storedFirstLoad = localStorage.getItem("firstLoad");
        return storedFirstLoad ? JSON.parse(storedFirstLoad) : true;
    });

    const [render, setRender] = useState(false);

    let user = JSON.parse(sessionStorage.getItem('user'))
    // Store Data
    const productsStatus = useSelector((state) => state.product.status);
    const walletStatus = useSelector((state) => state.wallet.status);
    const transactionStatus = useSelector((state) => state.transactions.status);


    // fetchProduct
    useEffect(() => {
        if (productsStatus === "idle") {
            console.log("fetch here");
            dispatch(fetchProducts()).then((payload) => { });
        }
        return () => { };
        // eslint-disable-next-line
    }, [productsStatus]);

    // fetchWallet
    useEffect(() => {
        if (walletStatus === "idle") {
            dispatch(fetchWalletData());
        }
        return () => { };
        // eslint-disable-next-line
    }, [walletStatus]);


    // fetchTransactions
    useEffect(() => {
        if (transactionStatus === "idle") {
            dispatch(fetchTransactions());
        }
        return () => { };
        // eslint-disable-next-line
    }, [transactionStatus]);

    useEffect(() => {
        if (
            productsStatus === "fulfilled" &&
            walletStatus === "fulfilled" &&
            transactionStatus === "fulfilled"

        ) {
            if (firstLoad) {
                setTimeout(() => {
                    console.log("all loaded");
                    setRender(true);
                    setFirstLoad(false); // Mark first load as completed
                    localStorage.setItem("firstLoad", JSON.stringify(false)); // Store firstLoad in local storage
                }, 1000); // Delay of 1000 milliseconds (1 second) only during the first load
            } else {
                setRender(true);
            }
        }
    }, [
        firstLoad,
        productsStatus,
        walletStatus,
        transactionStatus
    ]);


    return (
        <AnimatePresence>
            {user ?
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
                
                : <Navigate to='/login' />}
        </AnimatePresence>
    )
}

export default ProtectedRoutes