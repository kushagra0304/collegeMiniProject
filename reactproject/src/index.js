import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Intro from "./routes/intro";
import ErrorPage from "./error-page";
import Login from './routes/login';
import Home from './routes/home';
import CreateAccount from './routes/createAccount';
import Search from './routes/search';
import Sell from './routes/sell';
import Chat from './routes/chat';
import Account from './routes/account';
import Product from './routes/product';
import App from "./app"
import Wishlist from './routes/wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // children: [
    //   {
    //     errorElement: <ErrorPage/>,
    //     children: [
    //       { index: true, element: <Intro /> },
    //       {
    //         path: "intro",
    //         element: <Intro />,
    //       },
    //       {
    //         path: "wishlist",
    //         element: <Wishlist />,
    //       },
    //       {
    //         path: "login",
    //         element: <Login />,
    //       },
    //       {
    //         path: "home",
    //         element: <Home />,
    //       },
    //       {
    //         path: "createAccount",
    //         element: <CreateAccount />,
    //       },
    //       {
    //         path: "search",
    //         element: <Search />,
    //       },
    //       {
    //         path: "sell",
    //         element: <Sell />,
    //       },
    //       {
    //         path: "chat",
    //         element: <Chat />,
    //       },
    //       {
    //         path: "account",
    //         element: <Account />,
    //       },
    //       {
    //         path: "product",
    //         element: <Product />
    //       }
    //     ]
    //   }
    // ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/> );

reportWebVitals();
