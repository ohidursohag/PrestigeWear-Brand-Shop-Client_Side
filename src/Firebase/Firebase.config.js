// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDAV9D_L9jgFM6z9en_jQBbhaSeaJHWVgA",
   authDomain: "prestigewear-85bc9.firebaseapp.com",
   projectId: "prestigewear-85bc9",
   storageBucket: "prestigewear-85bc9.appspot.com",
   messagingSenderId: "40657457229",
   appId: "1:40657457229:web:4f90e760c3b9adf885cc04"
};

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig));
export default auth;