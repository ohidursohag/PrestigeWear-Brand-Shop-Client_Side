import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
const ContactLinks = () => {
   return (
      <div className="lg:w-1/4 sm:w-1/2 w-full self-start">
         <h2 className=" font-semibold  tracking-widest text-lg mb-2">Contact</h2>
         <div className="list-none space-y-3">
            <li>
               <span className="text-gray-400 hover:text-gray-200 ">524 Broadway , NYC</span>
            </li>
            <li>
               <span className="text-gray-400 hover:text-gray-200 ">+1 777 - 978 - 5570</span>
            </li>         
         </div>
         <div className="flex justify-center md:justify-start items-center pt-4 space-x-2 ">
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

export default ContactLinks;