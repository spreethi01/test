// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate
// } from "react-router-dom";
// import Completed from './components/completed/completed';


// const router = createBrowserRouter([
//   {
//     path: '',
//     element: <Navigate to="home/?dark=0" />,
//   },
//   {
//     path: 'home',
//     element: <App></App>
//   },
//   {
//     path: 'level1completed/:data',
//     element: <Completed />
//   }

// ]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  HashRouter as Router, // Change to HashRouter
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Completed from './components/completed/completed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home/?dark=0" />} />
        <Route path="home" element={<App />} />
        <Route path="level1completed/:data" element={<Completed />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
