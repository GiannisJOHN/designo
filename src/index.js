import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProductPage from './views/Product Page'
import About from './views/About'
import Locations from './views/Locations'


import './css/css.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/webdesign",
    element: <ProductPage />,
  },
  {
    path: "/appdesign",
    element: <ProductPage />,
  },
  {
    path: "/graphicdesign",
    element: <ProductPage />,
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
