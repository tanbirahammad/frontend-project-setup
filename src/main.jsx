import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
