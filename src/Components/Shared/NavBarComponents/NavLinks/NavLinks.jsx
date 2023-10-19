import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SignInAndSignoutButtonToggle from "../SignInAndSignoutButtonToggle/SignInAndSignoutButtonToggle";

const NavLinks = () => {
   const [isShowNavLinks, setIsShowNavLinks] = useState(false)

   return (
      <div className="md:w-[60%] ">
         <div className="relative">
            <button onClick={() => setIsShowNavLinks(!isShowNavLinks)}
               className="text-3xl text-[#FF444A] font-bold md:hidden">
               {
                  isShowNavLinks ? <AiOutlineClose /> : <AiOutlineMenu />
               }
            </button>
         </div >
         <div className="flex items-center justify-between">
            <ul className={`text-lg xl:text-xl rounded-l-lg bg-[#FF444A] md:bg-transparent font-medium absolute md:static duration-[1200ms] md:duration-0  ${isShowNavLinks ? 'top-16 sm:top-16 right-0' : '-top-[300px] right-0'}  space-y-2 md:space-y-0  text-right md:text-start z-50 px-6 py-7  md:p-0 md:flex md:items-center  md:gap-5 lg:gap-10 `}>
               <li>
                  <NavLink className={({ isActive }) => isActive ? 'text-white md:text-[#FF444A] underline ' : ''} to='/'>Home</NavLink>
               </li>
               <li>
                  <NavLink className={({ isActive }) => isActive ? 'text-white md:text-[#FF444A] underline ' : ''} to='/add-product'>Add Product</NavLink>
               </li>
               <li>
                  <NavLink className={({ isActive }) => isActive ? 'text-white md:text-[#FF444A] underline ' : ''} to='/my-cart'>My Cart</NavLink>
               </li>
               <div className="md:hidden">
                  <SignInAndSignoutButtonToggle></SignInAndSignoutButtonToggle>
               </div>
            </ul>
            <div className="hidden md:block">
               <SignInAndSignoutButtonToggle></SignInAndSignoutButtonToggle>
            </div>
         </div>
      </div>
   );
};

export default NavLinks;