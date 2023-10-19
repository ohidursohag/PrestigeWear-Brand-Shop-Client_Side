import { Outlet, useNavigation } from "react-router-dom";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";

const MainLayOut = () => {
   const navigation = useNavigation()
   return (
      <div>
         <div >
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
      </div>
   );
};

export default MainLayOut;