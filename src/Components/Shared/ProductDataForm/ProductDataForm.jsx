import PropTypes from 'prop-types';
const ProductDataForm = ({ buttonName, existingProductData } ) => {
   const { productName, productImage, productType, productRatings, brandName, productPrice, shortDescription } = existingProductData || {};
  
   return (
      <div className="w-full  ">
         <div className="w-[90%] mx-auto">
            <div className=" md:flex gap-5">
               <div className="md:w-[50%] space-y-6">
                  <div>
                     <label htmlFor="productName" className="text-xl font-medium "> Product Name</label>
                     <input type="text" name="productName" defaultValue={productName} id="productName" placeholder="Enter Product Name" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="productType" className="text-xl font-medium ">Product Type</label>
                     <input type="text" name="productType" defaultValue={productType} id="productType" placeholder="Enter Product Type" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="productPrice" className="text-xl font-medium ">Product Price</label>
                     <input type="number" name="productPrice" defaultValue={productPrice} id="productPrice" placeholder="Enter Product Price" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="productRatings" className="text-xl font-medium ">Product Ratings</label>
                     <input type="number" step="0.5" min={0} max={5} name="productRatings" defaultValue={productRatings} id="productRatings" placeholder="Enter Product Ratings" className="  h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
               </div>
               <div className="md:w-[50%] space-y-6">
                  <div>
                     <label htmlFor="brandName" className="text-xl font-medium ">Brand Name</label>                  
                     <select className=" h-14 w-full mt-1  bg-white px-4  outline-none" name="brandName" id="brandName" >
                        <option defaultValue={brandName} value={brandName} >{brandName||'Brand Name'}</option>
                        <option value="Nike" >Nike</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Gucci">Gucci</option>
                        <option value="Zara">Zara</option>
                        <option value="H&M">H&M</option>
                        <option value="Levi's">{"Levi's"}</option>
                     </select>
                  </div>


                  <div>
                     <label htmlFor="productImage" className="text-xl font-medium ">Product Image</label>
                     <input type="url" name="productImage" defaultValue={productImage} id="productImage" placeholder="Enter Product Image URL" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="shortDescription" className="text-xl font-medium ">Short Description</label>
                     <textarea type="text" rows={7} name="shortDescription" defaultValue={shortDescription} id="shortDescription" placeholder="Enter Short Description" className="   w-full pt-1  mt-1  bg-white px-4   outline-none" />
                  </div>
               </div>
            </div>

            <div className="mt-7 font-Rancho ">
               <input type="submit" name="submit" id="submit" value={buttonName} className=" cursor-pointer h-16 w-full mt-1  bg-[#D2B48C] px-4 text-[#8f601e] font-bold border-[3px] border-[#fbcd28] text-2xl outline-none" />
            </div>
         </div>
      </div>
   );
};
ProductDataForm.propTypes = {
   buttonName: PropTypes.string,
   existingProductData : PropTypes.object
}
export default ProductDataForm;