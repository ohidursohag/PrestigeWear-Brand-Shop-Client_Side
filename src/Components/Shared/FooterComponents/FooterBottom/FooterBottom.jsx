import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
const FooterBottom = () => {
   return (

         <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
               <span>©2023 All rights reserved</span>
            <a className='text-gray-400 hover:text-gray-200' href="#">
                  <span>Privacy policy</span>
               </a>
            <a className='text-gray-400 hover:text-gray-200' href="#">
                  <span>Terms of service</span>
               </a>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
               <a  href="#" title="YuoTube" className="flex items-center justify-center w-10 h-10 rounded-full text-2xl  hover:text-gray-300">
                  <IoLogoYoutube></IoLogoYoutube>
               </a>
               <a  href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full text-2xl hover:text-gray-300">
                  <FaTwitter></FaTwitter>
               </a>
               <a  href="#" title="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full text-2xl hover:text-gray-300">
                  <FaFacebookF></FaFacebookF>
               </a>
               <a  href="#" title="InstaGram" className="flex items-center justify-center w-10 h-10 rounded-full text-2xl hover:text-gray-300">
                  <FaInstagram></FaInstagram>
               </a>
            </div>
         </div>
   );
};

export default FooterBottom;