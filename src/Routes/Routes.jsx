import { createBrowserRouter } from "react-router-dom";
import ErrorHandlePage from "../Pages/Error/ErrorHandlePage";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <div>Main Route</div>,
      errorElement:<ErrorHandlePage></ErrorHandlePage>,
      children: [
         {
            path: '/',
            element: <div>This is Home Routes</div>
         },
         {
            path: '/signup',
            element: <div>This is SignUP Routes</div>
         },
         {
            path: '/signin',
            element: <div>This is SignUP Routes</div>
         },
      ]
   }
])

export default myCreatedRoutes;