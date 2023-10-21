
import { Link } from 'react-router-dom';
import NavLogo from '../../../../assets/logo/logo_color.png'
import NavLinks from "../NavLinks/NavLinks";
import DarkMode from '../../../DarkMode/DarkMode';
const NavBar = () => {
   return (
      <div className='bg-gray-700/50 backdrop-blur z-50 fixed w-full top-0 '>

         <div className="container mx-auto px-2 flex items-center justify-between py-5">
            <Link to="/" className="flex">
               <img className='w-[180px]' src={NavLogo} alt="" />
            </Link>
            <NavLinks></NavLinks>
            <div className='md:hidden absolute right-14 top-[26px] md:right-[220px] '>
               <DarkMode></DarkMode>
            </div>
         </div>
      </div>
   );
};

export default NavBar;