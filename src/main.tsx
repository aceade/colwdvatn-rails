import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Home';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fares from './Fares';
import { Freight } from './Freight';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/fares/",
    element: <Fares/>
  },
  {
    path: "/freight/",
    element: <Freight/>
  }
], {
  basename: "/colwdvatn-rails"
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
