import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
const BackToHome = () => {
   return (
      <div>
         <div className="py-12">
            <Link to='/' className="group flex items-center  gap-3">
               <AiOutlineArrowLeft className="text-2xl dark:text-white group-hover:text-[#C1B17D]"></AiOutlineArrowLeft>
               <span className="font-Rancho text-xl dark:text-white group-hover:text-[#C1B17D]  text-[#374151]">Back to home</span>
            </Link>
         </div>
      </div>
   );
};

export default BackToHome;