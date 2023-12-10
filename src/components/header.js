import React, { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleGptSearch } from "./utils/GptSlice";
import { language_const, netflix_logo } from "./utils/constant";
import { changeLanguage } from "./utils/ConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isgpt = useSelector((store) => store.gpt.gptSearchToggle);

  const navigate = useNavigate();
  const togglegpt = () => {
    dispatch(toggleGptSearch());
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

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
    <div className=" absolute z-10 bg-gradient-to-b from-black h-20 w-screen flex flex-col md:flex-row justify-between text-white font-bold">
      <a href={"/browse"}>
        <img
          className="h-20 w-[14rem] mx-auto md:mx-0"
          alt="logo"
          src={netflix_logo}
        />
      </a>
      {user && (
        <div className="flex justify-between  bg-black p-2 md:p-4">
          {isgpt ? (
            <>
              <select
                onChange={handleLanguage}
                className=" rounded-lg mt-1 outline-none bg-gray-900"
              >
                {language_const.map((lang) => (
                  <option key={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            </>
          ) : (
            ""
          )}

          <button
            onClick={togglegpt}
            className=" bg-red-700 mx-4 px-2 rounded-xl py-2 my-1"
          >
            {isgpt ? "Homepage" : "GPTSearch"}
          </button>
          <img
            alt="signout"
            className=" object-contain hidden md:block  w-12 h-12"
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
