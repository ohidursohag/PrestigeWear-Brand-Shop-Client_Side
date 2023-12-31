import { Outlet, useNavigation } from "react-router-dom";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import NavBar from "../Components/Shared/NavBarComponents/NavBar/NavBar";
import Footer from "../Components/Shared/FooterComponents/Footer/Footer";

const MainLayOut = () => {
   const navigation = useNavigation()
   return (
      <div>
         <NavBar></NavBar>
         <div className=" dark:bg-gray-900">
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayOut;