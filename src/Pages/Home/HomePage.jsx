import { useLoaderData } from "react-router-dom";
import BrandsNameCards from "../../Components/BrandsNameCards/BrandsNameCards";

const HomePage = () => {
   const brands = useLoaderData()
   return (
      <div className="container mx-auto">
         <div className="my-10 flex justify-center gap-10 sm:gap-8 md:gap-10  px-1 flex-wrap">
            {
               brands.map(brand => <BrandsNameCards key={brand._id} brand={brand}></BrandsNameCards>)
            }
            
         </div>
      </div>
   );
};

export default HomePage;