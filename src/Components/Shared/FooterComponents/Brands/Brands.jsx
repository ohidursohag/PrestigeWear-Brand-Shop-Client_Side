import { Link } from "react-router-dom";

const Brands = () => {
   return (
      <div className="lg:w-1/4 sm:w-1/2 w-full  self-start">
         <h2 className=" font-semibold  tracking-widest text-lg mb-2">Brands</h2>
         <nav className="list-none flex justify-center md:justify-start gap-5 ">
            <div className="space-y-2">
               <li>
                  <Link to='/' className="text-gray-400 hover:text-gray-200 ">Nike</Link>
               </li>
               <li>
                  <Link to='/' className="text-gray-400 hover:text-gray-200 ">Adidas</Link>
               </li>
               <li>
                  <Link to='/' className="text-gray-400 hover:text-gray-200 ">Gucci</Link>
               </li>
            </div>
            <div className="space-y-2">
               <li>
                  <Link to='/' className="text-gray-400 hover:text-gray-200 ">Zara</Link>
               </li>
               <li>
                  <Link to='/' className="text-gray-400 hover:text-gray-200 ">H&M</Link>
               </li>
               <li>
                  <Link to='/' className="text-gray-400 hover:text-gray-200 ">{"Levi's"}</Link>
               </li>
            </div>
         </nav>
      </div>
   );
};

export default Brands;