import { useLoaderData } from "react-router-dom";
import BrandsNameCards from "../../Components/HomePageComponents/BrandsNameCards/BrandsNameCards";
import BannerSlider from "../../Components/HomePageComponents/BannerSlider/BannerSlider";

const HomePage = () => {
   const brands = useLoaderData()
   return (
      <div>
         <div>
            <BannerSlider></BannerSlider>
         </div>
         <div className="container mx-auto">
            
            <div className="my-10 flex justify-center gap-10 sm:gap-8 md:gap-10  px-1 flex-wrap">
               {
                  brands.map(brand => <BrandsNameCards key={brand._id} brand={brand}></BrandsNameCards>)
               }

            </div>
         </div>
     </div>
   );
};

export default HomePage;