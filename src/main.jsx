import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import CreateUser from './components/CreateUser/CreateUser.jsx'
import DisplayUser from './components/DisplayUser/DisplayUser.jsx'




const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "createuser",
      element: <CreateUser />
    },
    {
      path: "displayuser",
      element: <DisplayUser />
    },
    {
      path: "edituser/:id",
      element: <CreateUser />
    }
  
  
  ]
  }

]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
