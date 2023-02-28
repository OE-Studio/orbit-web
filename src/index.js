import React from 'react';
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
import SignupPassword from './components/auth/SignupPassword';
import SignupPin from './components/auth/SignupPin';
import Login from './Pages/Auth/Login';



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
        path: "/signup/phone-no",
        element: <SignupPhone />,
      },
      {
        path: "/signup/password",
        element: <SignupPassword />,
      },
      {
        path: "/signup/pin",
        element: <SignupPin />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
