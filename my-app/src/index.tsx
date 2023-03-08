import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Signin from './routes/signin/signin';
import LandingPage from "./routes/LandingPage/LandingPage";
import DisplayNewGame from './routes/NewGame/NewGame';
import DisplayJoinGame from './routes/JoinGame/JoinGame';

const router = createBrowserRouter([
  {
    path: "/LandingPage",
    element: <LandingPage />
  },
  {
    path: "/NewGame",
    element: <DisplayNewGame />
  },
  {
    path: "/JoinGame",
    element: <DisplayJoinGame />
  },
  {
    path: '/',
    element: <Signin/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
