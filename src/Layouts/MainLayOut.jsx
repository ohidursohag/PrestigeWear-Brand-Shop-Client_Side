import { Outlet, useNavigation } from "react-router-dom";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import NavBar from "../Components/Shared/NavBarComponents/NavBar/NavBar";

const MainLayOut = () => {
   const navigation = useNavigation()
   return (
      <div>
         <NavBar></NavBar>
         <div >
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
      </div>
   );
};

export default MainLayOut;