import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './login'
import Browse from './Browse'
import ErrorPage from './404'
import { auth } from './utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './utils/userSlice'
import {  onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch()


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

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL}=user
      dispatch(addUser({ uid:uid,email:email,displayName:displayName,photoURL:photoURL}))}
       else {
      // User is signed out
       // eslint-disable-next-line 
      dispatch(removeUser()) 
    }
  });
   // eslint-disable-next-line 
},[])

  return (

    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body