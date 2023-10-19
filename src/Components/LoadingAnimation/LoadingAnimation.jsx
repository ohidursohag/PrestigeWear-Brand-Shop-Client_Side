import Lottie from 'lottie-react';
import lodingAnimation from '../../assets/Lottie/loading.json'

const LoadingAnimation = () => {
   return (
      <div>
         <div className=" min-h-screen flex justify-center items-center">
            <Lottie animationData={lodingAnimation}></Lottie>
         </div>
      </div>
   );
};

export default LoadingAnimation;