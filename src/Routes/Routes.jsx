import { createBrowserRouter } from "react-router-dom";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <div>Main Route</div>,
      children: [
         {
            path: '/',
            element: <div>This is Home Routes</div>
         }
      ]
   }
])

export default myCreatedRoutes;