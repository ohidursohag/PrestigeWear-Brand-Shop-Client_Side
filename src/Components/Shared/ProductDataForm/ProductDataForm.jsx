
const ProductDataForm = () => {
   return (
      <div className="w-full  ">
         <div className="w-[90%] mx-auto">
            <div className=" md:flex gap-5">
               <div className="md:w-[50%] space-y-6">
                  <div>
                     <label htmlFor="productName" className="text-xl font-medium "> Product Name</label>
                     <input type="text" name="productName" defaultValue={'productName'} id="productName" placeholder="Enter Product Name" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="productType" className="text-xl font-medium ">Product Type</label>
                     <input type="text" name="productType" defaultValue={'productType'} id="productType" placeholder="Enter Product Type" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="productImage" className="text-xl font-medium ">Product productImage</label>
                     <input type="text" name="productImage" defaultValue={'productImage'} id="productImage" placeholder="Enter Product productImage" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="productRatings" className="text-xl font-medium ">Product Ratings</label>
                     <input type="number" name="productRatings" defaultValue={'productRatings'} id="productRatings" placeholder="Enter Product Ratings" className="  h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
               </div>
               <div className="md:w-[50%] space-y-6">
                  <div>
                     <label htmlFor="brandName" className="text-xl font-medium ">Brand Name</label>
                     <input type="text" name="brandName" defaultValue={'brandName'} id="brandName" placeholder="Enter Brand Name" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  {/* <div>
                     <label htmlFor="taste" className="text-xl font-medium ">Taste</label>
                     <input type="text" name="taste" defaultValue={'taste'} id="taste" placeholder="Enter coffee taste" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div> */}
                  
                  <div>
                     <label htmlFor="productImage" className="text-xl font-medium ">Product Image</label>
                     <input type="number" name="productImage" defaultValue={'productImage'} id="productImage" placeholder="Enter Product Image URL" className=" h-14 w-full mt-1  bg-white px-4  outline-none" />
                  </div>
                  <div>
                     <label htmlFor="shortDescription" className="text-xl font-medium ">Short Description</label>
                     <textarea type="text" rows={7} name="shortDescription" defaultValue={''} id="shortDescription" placeholder="Enter Short Description" className="   w-full  mt-1  bg-white px-4   outline-none" />
                  </div>
               </div>
            </div>
            
            <div className="mt-7 font-Rancho ">
               <input type="submit" name="submit" id="submit" value={'Add Product'} className=" cursor-pointer h-16 w-full mt-1  bg-[#D2B48C] px-4 text-[#331A15] border-[3px] border-[#331A15] text-2xl outline-none" />
            </div>
         </div>
      </div>
   );
};

export default ProductDataForm;