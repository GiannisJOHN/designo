import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WebDesign from './views/Web design'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/webdesign",
    element: <WebDesign />,
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
