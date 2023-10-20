import Swal from "sweetalert2";
import ProductDataForm from "../../Components/Shared/ProductDataForm/ProductDataForm";
import { useLoaderData } from 'react-router-dom';

const UpdateProductPage = () => {
   const existingProductData = useLoaderData()
   console.log(existingProductData);

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
         const response = await fetch(`http://localhost:5000/products/${existingProductData._id}`, {
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
               title: 'Coffee successfully Updated',
               showConfirmButton: false,
               timer: 1500
            })

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
      <div>
         <div className="px-2">
            <h1 className="text-center my-10 text-4xl font-bold">Update Product</h1>
            <div className="container mx-auto mt-10 bg-[#FF444A] py-10 ">
               <form onSubmit={handleUpdateProduct}>
                  <ProductDataForm buttonName={'Update'} existingProductData={existingProductData}></ProductDataForm>
               </form>
            </div>
         </div>
      </div>
   );
};

export default UpdateProductPage;