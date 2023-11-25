import React, { useState } from 'react'
import Header from './header'

const Login = () => {
    const [isloggedin,setloggedin] = useState(true)
    const handleloggedin = () => {
        setloggedin(!isloggedin)

    }
  return (
    <div >
        <Header />
        <div className='absolute'>
        <img  alt='bg' src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
        </div>
        <form className='absolute w-3/12 bg-black p-12 text-white my-36 mx-auto right-0 left-0 rounded-md bg-opacity-[0.9]   '>
            <h1 className='m-2 font-bold text-3xl'>{isloggedin? "Sign In":"Sign Up"}</h1>
            { !isloggedin &&
              (<input className=' bg-gray-700 my-3  p-2 w-full rounded-sm  focus: outline-none' placeholder='Full Name' type='text' ></input>)
          }
          <input className=' bg-gray-700 my-3  p-2 w-full rounded-sm  focus: outline-none' placeholder='Email' type='email' ></input>
          <input className=' bg-gray-700 my-3  p-2 w-full rounded-sm focus: outline-none' placeholder='Password' type='password' ></input>
          <button className=' bg-red-800 my-8  p-2 w-full rounded-sm' >{isloggedin? "Sign In":"Sign Up"}</button> 
          <p onClick={handleloggedin} className='py-1 cursor-pointer text-gray-400'>{isloggedin? "New to Netflix?":"already a user?"} <a  className=' text-white'>{isloggedin? "Sign Up":"Sign In"}</a></p>

        </form>
    </div>
  )
}

export default Login