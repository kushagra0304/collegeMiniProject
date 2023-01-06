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
import App from "./app"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          { index: true, element: <Intro /> },
          {
            path: "intro",
            element: <Intro />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "createAccount",
            element: <CreateAccount />,
          },
          {
            path: "search",
            element: <Search />,
          },
          {
            path: "sell",
            element: <Sell />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
          {
            path: "account",
            element: <Account />,
          },
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
