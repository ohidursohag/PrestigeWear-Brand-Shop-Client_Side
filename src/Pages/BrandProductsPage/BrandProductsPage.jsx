import { useContext } from "react";
import ProductCard from "../../Components/BrandProductsPageComponents/ProductCard";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BrandProductsPage = () => {
   const { products } = useContext(AuthContext)
   const brand = useLoaderData();
   const { brandName } = brand;

   const FilterBrand = products.filter((product) => product.brandName === brandName);
   // console.log(FilterBrand);


   return (
      <div className="container mx-auto">
         <div className="px-3 sm:px-5 my-[100px] flex gap-5 flex-wrap justify-center  items-center">
            {
               FilterBrand.length
                  ? FilterBrand.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                  : <div className=" w-max  text-5xl text-center space-y-5 h-[calc(100vh-300px)] flex flex-col gap-5  justify-center  items-center ">
                     <h1 className="text-orange-500 font-bold">Opps!!</h1>
                     <p className="text-3xl font-semibold">No product found</p>
                  </div>
            }

         </div>
         
      </div>
   );
};

export default BrandProductsPage;