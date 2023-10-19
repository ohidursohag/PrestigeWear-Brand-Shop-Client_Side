import { createBrowserRouter } from "react-router-dom";
import ErrorHandlePage from "../Pages/Error/ErrorHandlePage";
import Signup from "../Pages/Signup/Signup";
import MainLayOut from "../Layouts/MainLayOut";
import Signin from "../Pages/Signin/Signin";
import HomePage from "../Pages/Home/HomePage";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";
import MyCartPage from "../Pages/MyCartPage/MyCartPage";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorHandlePage></ErrorHandlePage>,
      children: [
         {
            path: '/',
            element: <HomePage></HomePage>
         },
         {
            path: '/signup',
            element: <Signup></Signup>
         },
         {
            path: '/signin',
            element: <Signin></Signin>
         },
         {
            path: '/add-product',
            element: <AddProductPage></AddProductPage>
         },
         {
            path: '/my-cart',
            element: <MyCartPage></MyCartPage>
         },
      ]
   }
])

export default myCreatedRoutes;