import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './login'
import Browse from './Browse'
import ErrorPage from './404'

const Body = () => {
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login />,
        errorElement:<ErrorPage/>

    },
    {
        path:"/browse",
        element :<Browse />
    }
])

  return (

    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body