import { createBrowserRouter } from "react-router-dom";
import ErrorHandlePage from "../Pages/Error/ErrorHandlePage";
import Signup from "../Pages/Signup/Signup";
import MainLayOut from "../Layouts/MainLayOut";
import Signin from "../Pages/Signin/Signin";
import HomePage from "../Pages/Home/HomePage";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";
import MyCartPage from "../Pages/MyCartPage/MyCartPage";
import BrandProductsPage from "../Pages/BrandProductsPage/BrandProductsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import UpdateProductPage from "../Pages/UpdateProductPage/UpdateProductPage";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorHandlePage></ErrorHandlePage>,
      children: [
         {
            path: '/',
            element: <HomePage></HomePage>,
            loader: () => fetch('http://localhost:5000/brands')
         },
         {
            path: '/brands/:id',
            element: <BrandProductsPage></BrandProductsPage>,
            loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)
         },
         {
            path: '/products/:id',
            element: <PrivateRoute>
               <ProductDetailsPage></ProductDetailsPage>
            </PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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
            element: <PrivateRoute>
               <AddProductPage></AddProductPage>
            </PrivateRoute>
         },
         {
            path: '/update-product/:id',
            element: <PrivateRoute>
               <UpdateProductPage></UpdateProductPage>
            </PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
         },
         {
            path: '/my-cart',
            element: <PrivateRoute>
               <MyCartPage></MyCartPage>
            </PrivateRoute>,
            loader: () => fetch(`http://localhost:5000/cart-data`)
         },
      ]
   }
])

export default myCreatedRoutes;