import { Outlet, useNavigation } from "react-router-dom";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import NavBar from "../Components/Shared/NavBarComponents/NavBar/NavBar";
import Footer from "../Components/Shared/FooterComponents/Footer/Footer";

const MainLayOut = () => {
   const navigation = useNavigation()
   return (
      <div>
         <NavBar></NavBar>
         <div className="min-h-[360px]">
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayOut;