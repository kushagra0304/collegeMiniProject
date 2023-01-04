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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "createAccount",
    element: <CreateAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sell",
    element: <Sell />,
    errorElement: <ErrorPage />,
  },
  {
    path: "chat",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
  {
    path: "account",
    element: <Account />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
