import { Link } from "react-router-dom";

const ProductsLinks = () => {
   return (
      <div className="lg:w-1/4 sm:w-1/2 w-full  self-start sm:mb-5 lg:mb-0">
         <h2 className=" font-semibold  tracking-widest text-lg mb-2">Product</h2>
         <nav className="list-none space-y-2">
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">{"Men's"}</Link>
            </li>
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">{"Women's"}</Link>
            </li>
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">{"Kid's"}</Link>
            </li>
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">{"Sport's"}</Link>
            </li>
         </nav>
      </div>
   );
};

export default ProductsLinks;