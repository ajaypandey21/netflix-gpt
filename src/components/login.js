import React, { useRef, useState } from "react";
import Header from "./header";
import { validate } from "./utils/Validate";
import { auth } from "./utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { logo } from "./utils/constant";

const Login = () => {
  const [isloggedin, setloggedin] = useState(true);
  const [showpass, setShowPass] = useState(false);
  const [error, seterror] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleSignUp = () => {
    const message = validate(email.current.value, pass.current.value);
    seterror(message);
    if (message) return;
    if (!isloggedin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterror(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorCode + "-" + errorMessage);
        });
    }
  };
  const handleloggedin = () => {
    setloggedin(!isloggedin);
  };

  return (
    <div className="w-full max-h-screen  flex flex-col items-center">
      <Header />
      <div className="absolute h-full w-full overflow-hidden">
        <img alt="bg" className="h-full w-full object-cover" src={logo} />
      </div>

      <div className="xl:h-[500px] absolute flex flex-col text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-[0.8] sm:px-8 sm:py-8 px-16 py-16 rounded-md">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <h1 className="m-2 font-bold text-3xl">
            {isloggedin ? "Sign In" : "Sign Up"}
          </h1>
          <p className="font-bold text-red-700 text-lg">{error}</p>
          {!isloggedin && (
            <input
              ref={name}
              className=" bg-gray-700 my-3  px-4 mx-2 p-2  rounded-sm  focus: outline-none"
              placeholder="Full Name"
              type="text"
            ></input>
          )}
          <input
            ref={email}
            className=" bg-gray-700 my-3 px-4 mx-2   p-2  rounded-sm  focus: outline-none"
            placeholder="Email"
            type="email"
          ></input>

          <div className="flex flex-col">
            <input
              ref={pass}
              className="bg-gray-700 my-3 px-4 mx-2 p-2 rounded-sm focus:outline-none"
              placeholder="Password"
              type={showpass ? "text" : "password"}
            />
            <span>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-700 ml-2"
                checked={showpass}
                onChange={() => setShowPass(!showpass)}
              />
              <span className="ml-2 text-gray-300">Show Password</span>
            </span>
          </div>

          <button
            onClick={handleSignUp}
            className=" bg-red-800 my-8 px-4 mx-2  p-2  rounded-sm"
          >
            {isloggedin ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={handleloggedin}
            className="py-1 cursor-pointer text-gray-400"
          >
            {isloggedin ? "New to Netflix?" : "already a user?"}
            <button href="/" className=" text-white">
              {isloggedin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
