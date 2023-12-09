import { useLoaderData } from "react-router-dom";
import BrandsNameCards from "../../Components/HomePageComponents/BrandsNameCards/BrandsNameCards";
import BannerSlider from "../../Components/HomePageComponents/BannerSlider/BannerSlider";
import FeaturedProducts from "../../Components/HomePageComponents/FeaturedProducts/FeaturedProducts";
import CustomerReview from "../../Components/HomePageComponents/CustomerReview/CustomerReview";

const HomePage = () => {
   const brands = useLoaderData()
   return (
      <div className="dark:bg-gray-900">
         <div className="pb-12">
            <BannerSlider></BannerSlider>
         </div>

         <div>
            <FeaturedProducts></FeaturedProducts>
         </div>
         
         <div className="container mx-auto py-[100px]">
            <h1 className="dark:text-white text-center text-5xl font-bold py-10">Brands</h1>
            <div className="  flex justify-center gap-10 sm:gap-8 md:gap-10  px-1 flex-wrap">
               {
                  brands.map(brand => <BrandsNameCards key={brand._id} brand={brand}></BrandsNameCards>)
               }

            </div>
         </div>

         <CustomerReview></CustomerReview>
     </div>
   );
};

export default HomePage;