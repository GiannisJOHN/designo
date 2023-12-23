import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//pages
import Home from './pages/home'
import ProductPage from 'pages/product'
import About from './pages/about'
import Locations from './pages/locations'
import Contact from 'pages/contact'

//css
import './css/global-styles.css'
import './css/utility.css'


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
    path: "/contact",
    element: <Contact />,
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
