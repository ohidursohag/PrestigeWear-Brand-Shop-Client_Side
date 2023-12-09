import { useContext, useEffect, useState} from "react";
import ProductCard from "../../Components/BrandProductsPageComponents/ProductCard";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import BackToHome from "../../Components/BackToHome/BackToHome";
import AdvertiseMentSlider from "../../Components/BrandProductsPageComponents/AdvertiseMentSlider";

const BrandProductsPage = () => {
   const [AdvertiseData, setAdvertiseData] = useState()
   const { products } = useContext(AuthContext)
   const brand = useLoaderData();
   const { brandName } = brand;


   useEffect(() => {
      fetch('https://prestige-wear-server.vercel.app/adimg')
         .then((response) => response.json())
         .then(data => setAdvertiseData(data))
         .catch((error) => console.error(error))
   }, [])
   console.log(AdvertiseData);
   const FilterBrand = products?.filter((product) => product.brandName.toLowerCase() === brandName.toLowerCase());

   const filterAdimage = AdvertiseData?.find(adData => adData.brandName.toLowerCase() === brandName.toLowerCase())
   // console.log(filterAdimage);
   return (
      <div className="dark:bg-gray-900 py-[100px]">
         <div className="container mx-auto">
            <BackToHome></BackToHome>
            <div className="lg:mb-[100px] max-w-[650px]  mx-auto">
               <AdvertiseMentSlider filterAdimage={filterAdimage}></AdvertiseMentSlider>
            </div>
            <div className="px-3 sm:px-5  flex gap-5 flex-wrap justify-center lg:mt-[200px] mt-[100px] items-center">
               {
                  FilterBrand?.length
                     ? FilterBrand?.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                     : <div className=" w-max  text-5xl text-center space-y-5  flex flex-col gap-5  justify-center   items-center ">
                        <h1 className="text-[#C1B17D] font-bold">Opps!!</h1>
                        <p className="text-3xl font-semibold dark:text-white">No product found</p>
                     </div>
               }
            </div>
         </div>
      </div>
   );
};

export default BrandProductsPage;