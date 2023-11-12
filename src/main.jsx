import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProviders from './providers/AuthProviders.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={routes}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
