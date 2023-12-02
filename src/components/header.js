import React from 'react'   
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';


const Header = () => {
  const user = useSelector(store=> store.user)
  const navigate= useNavigate()
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className=' absolute z-10 bg-gradient-to-b from-black h-20 w-screen flex justify-between'  >
        <img className=' h-20 w-[14rem] ' alt='logo'
         src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
        { user && <div className='flex p-4'>
          <img alt='signout' className=' object-contain rounded-full w-12 h-14'
           src={user?.photoURL}></img>
           <div className='flex flex-col'>
           <p>{user.displayName}</p>
           <button onClick={handleSignOut}>(Signout)</button>

           </div>
         </div>}
    </div>
    
  )
}

export default Header;