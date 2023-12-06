import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Home';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fares from './Fares';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/fares",
    element: <Fares/>
  }
], {
  basename: "/colwdvatn-rails"
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
