// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8-jiccULCntsijUFiYvudT7k9c1Fi_t8",
  authDomain: "netflixgpt-6cf61.firebaseapp.com",
  projectId: "netflixgpt-6cf61",
  storageBucket: "netflixgpt-6cf61.appspot.com",
  messagingSenderId: "610723000503",
  appId: "1:610723000503:web:3e44d3f8d191c633799d32",
  measurementId: "G-VFR8W4KZSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line 
const analytics = getAnalytics(app);
export const auth = getAuth();