import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Signin from './routes/Signin/Signin';
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
    element: <Signin />
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

reportWebVitals();
