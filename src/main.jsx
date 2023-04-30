import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Components/RouterLayout/Router.jsx'
import AuthContext from './Components/AuthContex/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={route}/>
    </AuthContext>
  </React.StrictMode>,
)
