import ProductDataForm from "../../Components/Shared/ProductDataForm/ProductDataForm";

const AddProductPage = () => {
   return (
      <div className="px-2">
         <h1 className="text-center my-10 text-4xl font-bold">Add New Product</h1>
         <div className="container mx-auto mt-10 bg-[#FF444A] py-10 ">
            <form >
               <ProductDataForm></ProductDataForm>
            </form>
         </div>
      </div>
   );
};

export default AddProductPage;