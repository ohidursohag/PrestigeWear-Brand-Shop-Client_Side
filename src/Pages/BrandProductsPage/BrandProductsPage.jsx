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
      <div>
         <div className="px-3 my-[100px]">
            {
               FilterBrand.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
            }
            
         </div>
         {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur minus placeat molestiae unde sequi maiores possimus! </p> */}
      </div>
   );
};

export default BrandProductsPage;