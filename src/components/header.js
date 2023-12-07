import React, { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleGptSearch } from "./utils/GptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  
  const navigate = useNavigate();
  const togglegpt = () =>{
    dispatch(toggleGptSearch())
  }
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // eslint-disable-next-line
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <div className=" absolute z-10 bg-gradient-to-b from-black h-20 w-screen flex justify-between text-white font-bold">
      <img
        className=" h-20 w-[14rem] "
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex p-4">
          <button onClick={togglegpt} className=" bg-red-700 mx-4 px-2 rounded-xl py-2 my-1">GPTSearch</button>
          <img
            alt="signout"
            className=" object-contain  w-12 h-12"
            src={user?.photoURL}
          ></img>
          
          <div className="flex flex-col">
            <p>{user.displayName}</p>
            <button onClick={handleSignOut}>(Signout)</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
