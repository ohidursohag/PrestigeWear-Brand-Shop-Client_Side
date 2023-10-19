import { Link } from "react-router-dom";

const ComapnyLinks = () => {
   return (
      <div className="lg:w-1/4 sm:w-1/2 w-full  self-start sm:mb-5 lg:mb-0">
         <h2 className=" font-semibold  tracking-widest text-lg mb-2">Company</h2>
         <nav className="list-none space-y-2">
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">About Us</Link>
            </li>
            
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">Latest News</Link>
            </li>
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">Careers</Link>
            </li>
            <li>
               <Link to='/' className="text-gray-400 hover:text-gray-200 ">My Cart</Link>
            </li>
         </nav>
      </div>
   );
};

export default ComapnyLinks;