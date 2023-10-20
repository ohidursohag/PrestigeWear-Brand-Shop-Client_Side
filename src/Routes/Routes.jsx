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

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorHandlePage></ErrorHandlePage>,
      children: [
         {
            path: '/',
            element: <HomePage></HomePage>,
            loader: () => fetch('https://prestige-wear-server-f7a4g5d6k-ohidursohag.vercel.app/brands')
         },
         {
            path: '/brands/:id',
            element: <BrandProductsPage></BrandProductsPage>,
            loader: ({ params }) => fetch(`https://prestige-wear-server-f7a4g5d6k-ohidursohag.vercel.app/brands/${params.id}`)
         },
         {
            path: '/products/:id',
            element: <ProductDetailsPage></ProductDetailsPage>,
            loader: ({ params }) => fetch(`https://prestige-wear-server-f7a4g5d6k-ohidursohag.vercel.app/products/${params.id}`)
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