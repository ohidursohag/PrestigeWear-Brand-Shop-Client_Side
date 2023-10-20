import Swal from "sweetalert2";
import ProductDataForm from "../../Components/Shared/ProductDataForm/ProductDataForm";
import BackToHome from "../../Components/BackToHome/BackToHome";

const AddProductPage = () => {

   const handleAddNewProduct = async (e) => {
      e.preventDefault();
      const form = e.target;
      const productName = form.productName.value;
      const productType = form.productType.value;
      const productImage = form.productImage.value;
      const productRatings = form.productRatings.value;
      const brandName = form.brandName.value;
      const productPrice = form.productPrice.value;
      const shortDescription = form.shortDescription.value;
      const newProductData = {
         productName, productImage, productType, productRatings, brandName, productPrice, shortDescription
      }
      console.log(newProductData);

      if (productName && productImage && productType && productRatings && brandName && productPrice && shortDescription) {
         try {
            const response = await fetch('https://prestige-wear-server-k269ec9mx-ohidursohag.vercel.app/products', {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(newProductData)
            })
            const result = await response.json();
            console.log(result);
            if (result) {
               Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: 'Product successfully added',
                  showConfirmButton: false,
                  timer: 1500
               })
               form.reset();
            }
         } catch (error) {
            console.error(error);
         }
      } else {
         Swal.fire({
            icon: 'error',
            title: 'Please fillup every input field',
         })
      }

   }

   return (
      <div className="px-2 container mx-auto ">
         <BackToHome></BackToHome>
         <h1 className="text-center my-10 text-4xl font-bold">Add New Product</h1>
         <div className="mt-10 bg-[#C1B17D] py-10 ">
            <form onSubmit={handleAddNewProduct}>
               <ProductDataForm buttonName={'Add Product'}></ProductDataForm>
            </form>
         </div>
      </div>
   );
};

export default AddProductPage;