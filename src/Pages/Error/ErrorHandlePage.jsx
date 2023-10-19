import { Link, useNavigate, useRouteError } from "react-router-dom";
import { RiArrowGoBackLine } from 'react-icons/ri'

import Lottie from "lottie-react";
import ErrorAnimation from "../../assets/Lottie/error.json";

const ErrorHandlePage = () => {
   const navigate = useNavigate()
   const error = useRouteError()
   console.log(error);
   return (
      <div className="container mx-auto min-h-screen flex justify-center items-center">
         <div className="flex flex-col justify-center items-center space-y-5">
            <Lottie className="w-[200px] " animationData={ErrorAnimation} loop={true} />
            <div className="text-7xl font-bold ">{error.status}</div>
            <div className="text-3xl font-medium  ">{error.statusText || error.error.message}</div>
            <div className="text-3xl font-medium  ">{error.data}</div>

            <div>
               <Link onClick={() => navigate(-1)} className="text-[#FF444A] bg-[rgba(255,68,74,0.15)] px-2 py-1 rounded-md text-xl font-medium hover:underline flex items-center gap-2">Go Back <RiArrowGoBackLine /> </Link>
            </div>
         </div>
      </div>
   );
};

export default ErrorHandlePage;