import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Completed from './components/completed/completed';


const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to="home/?dark=0" />,
  },
  {
    path: 'home',
    element: <App></App>
  },
  {
    path: 'level1completed/:data',
    element: <Completed />
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
