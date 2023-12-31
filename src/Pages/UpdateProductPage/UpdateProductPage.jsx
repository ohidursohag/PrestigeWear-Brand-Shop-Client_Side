import Swal from "sweetalert2";
import ProductDataForm from "../../Components/Shared/ProductDataForm/ProductDataForm";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import BackToHome from "../../Components/BackToHome/BackToHome";

const UpdateProductPage = () => {
   const existingProductData = useLoaderData()
   console.log(existingProductData);
   const loc = useLocation();
   console.log(loc.state);
   const navigate = useNavigate()
   const handleUpdateProduct = async (e) => {
      e.preventDefault();
      const form = e.target;
      const productName = form.productName.value;
      const productType = form.productType.value;
      const productImage = form.productImage.value;
      const productRatings = form.productRatings.value;
      const brandName = form.brandName.value;
      const productPrice = form.productPrice.value;
      const shortDescription = form.shortDescription.value;
      const UpdatedProductData = {
         productName, productImage, productType, productRatings, brandName, productPrice, shortDescription
      }
      console.log(UpdatedProductData);
      try {
         const response = await fetch(`https://prestige-wear-server.vercel.app/products/${existingProductData._id}`, {
            method: 'PUT',
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(UpdatedProductData),
         })
         const result = await response.json();
         console.log(result);
         if (result.modifiedCount) {
            Swal.fire({
               position: 'top',
               icon: 'success',
               title: 'Product successfully Updated',
               showConfirmButton: false,
               timer: 1500
            })
            
            navigate(loc.state)

         } else {
            Swal.fire({
               icon: 'error',
               title: 'Coffee is not updated',
               // showConfirmButton: false,
               timer: 1500
            })
         }
      } catch (error) {
         console.log(error.message);
      }
   }
   return (
      <div className="py-[100px]">
         <div className="px-2 container mx-auto">
            <BackToHome></BackToHome>
            <h1 className="text-center my-10 text-4xl font-bold dark:text-white">Update Product</h1>
            <div className=" mt-10 bg-[#C1B17D] py-10 ">
               <form onSubmit={handleUpdateProduct}>
                  <ProductDataForm buttonName={'Update'} existingProductData={existingProductData}></ProductDataForm>
               </form>
            </div>
         </div>
      </div>
   );
};

export default UpdateProductPage;