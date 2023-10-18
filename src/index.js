import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider } from "react-router-dom";


// import ErrorPage from "./error-page";
import "./index.css";

import Home from './Pages/Home';
import Card from './Pages/Card';
import Settings from './Pages/Settings';
import ProfileSettings from './components/settings-outlet/ProfileSettings';
import AppearanceSettings from './components/settings-outlet/AppearanceSettings';
import BankSettings from './components/settings-outlet/Bank';
import PinSettings from './components/settings-outlet/PinSettings';
import PasswordSettings from './components/settings-outlet/PasswordSettings';
import DeleteAccount from './components/settings-outlet/DeleteAccount';
import Transaction from './Pages/Transaction';
import SignUp from './Pages/Auth/SignUp';
import { Provider } from 'react-redux'
import store from './app/store';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import SignupGeneral from './components/auth/SignupGeneral';
import SignupEmail from './components/auth/SignupEmail';
import SignupPhone from './components/auth/SignupPhone';
import SignupPin from './components/auth/SignupPin';
import Login from './Pages/Auth/Login';
import SignupEmailOTP from './components/auth/SignupEmailOTP';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import ForgotPasswordEmail from './Pages/Auth/ForgotPassword/ForgotPasswordEmail';
import ForgotPasswordOtp from './Pages/Auth/ForgotPassword/ForgotPasswordOtp';
import UpdatePassword from './Pages/Auth/ForgotPassword/UpdatePassword';
import UpdateSuccess from './Pages/Auth/ForgotPassword/UpdateSuccess';
import ContactUs from './components/settings-outlet/ContactUs';
import SignupReferral from './components/auth/SignupReferral';
import MobileLayout from './Pages/MobileLayout';
import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([

  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cards",
        element: <Card />
      },
      {
        path: "/transactions",
        element: <Transaction />
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "/settings",
            element: <ProfileSettings />
          },
          {
            path: "/settings/appearance",
            element: <AppearanceSettings />
          },
          {
            path: "/settings/bank",
            element: <BankSettings />
          },
          {
            path: "/settings/pin",
            element: <PinSettings />
          },
          {
            path: "/settings/password",
            element: <PasswordSettings />
          },
          {
            path: "/settings/delete",
            element: <DeleteAccount />
          },
          {
            path: "/settings/contact",
            element: <ContactUs />
          },
        ]
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUp />,
    children: [
      {
        path: "/signup",
        element: <SignupGeneral />,
      },
      {
        path: "/signup/email",
        element: <SignupEmail />,
      },
      {
        path: "/signup/email-otp",
        element: <SignupEmailOTP />,
      },
      {
        path: "/signup/phone-no",
        element: <SignupPhone />,
      },
      {
        path: "/signup/pin",
        element: <SignupPin />,
      },
      {
        path: "/signup/referral",
        element: <SignupReferral />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    children: [
      {
        path: "/forgot-password",
        element: <ForgotPasswordEmail />,
      },
      {
        path: "/forgot-password/otp",
        element: <ForgotPasswordOtp />,
      },
      {
        path: "/forgot-password/update",
        element: <UpdatePassword />,
      },
      {
        path: "/forgot-password/update-success",
        element: <UpdateSuccess />,
      },

    ]
  }
]);


// const isMobileOrTablet = window.innerWidth <= 768; // You can adjust this threshold as needed



const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the breakpoint as needed
    

    // Function to update the state based on the media query
    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches);
    };

    // Initial check and add event listener
    handleResize();
    mobileMediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener on unmount
    return () => {
      mobileMediaQuery.removeEventListener('change', handleResize);
    };
  }, []);
  
  if (isMobile) {
    // Render a different component for mobile or tablet
    return <MobileLayout />;
  } else {
    // Render the desktop component
    return (
      <React.StrictMode>
        <Provider store={store}>
        <ToastContainer />
          <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>
    );
  }
};

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
