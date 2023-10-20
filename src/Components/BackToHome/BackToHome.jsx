import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
const BackToHome = () => {
   return (
      <div>
         <div className="my-12">
            <Link to='/' className="group flex items-center  gap-3">
               <AiOutlineArrowLeft className="text-2xl group-hover:text-orange-500"></AiOutlineArrowLeft>
               <span className="font-Rancho text-xl group-hover:text-orange-500  text-[#374151]">Back to home</span>
            </Link>
         </div>
      </div>
   );
};

export default BackToHome;