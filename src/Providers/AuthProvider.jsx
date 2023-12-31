import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [products, setProducts] = useState([]);
   // const [AdvertiseData, setAdvertiseData] = useState()
   const googleProvider = new GoogleAuthProvider()


   // create User with email and password
   const registerWithEmailPass = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // login user with email and password
   const loginWithEmailPass = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   // Signup/login user with Google account
   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider)
   }

   // LogOut user
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }

   // get currently logged in user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false);
      })
      return () => unSubscribe();

   }, [])

   // Get Product Data 
   useEffect(() => {
      fetch('https://prestige-wear-server.vercel.app/products')
         .then((response) => response.json())
         .then(data => setProducts(data))
         .catch((error) => console.error(error))
   }, [])

   // Get Advertisement Data
   // useEffect(() => {
   //    fetch('https://prestige-wear-server.vercel.app/adimg')
   //       .then((response) => response.json())
   //       .then(data => setAdvertiseData(data))
   //       .catch((error) => console.error(error))
   // }, [])

   const authInfo = {
      user,
      registerWithEmailPass,
      loginWithEmailPass,
      googleLogin,
      logOut,
      loading,
      products,
      // AdvertiseData,
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};
AuthProvider.propTypes = {
   children: PropTypes.node.isRequired
}
export default AuthProvider;