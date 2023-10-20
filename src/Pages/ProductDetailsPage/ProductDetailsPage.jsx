import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
const ProductDetailsPage = () => {

   const product = useLoaderData()
   const { brandName, productImage, productName, productPrice, productRatings, productType, shortDescription } = product || {};

   console.log(product);
   return (

      <div className="container mx-auto px-3 py-[100px] min-h-[calc(100vh-105px)] flex justify-center items-center">
         <div className=" sm:flex w-full  sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  ">
            <figure className=" sm:w-1/2 h-[300px] sm:h-full bg-black  rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none  bg-clip-border text-gray-700">
               <img
                  src={productImage}
                  alt="image"
                  className="h-full w-full rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none object-cover object-center"
               />
            </figure>
            <div className="p-6 flex-grow flex flex-col justify-center">
               <div>
                  <h3 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold ">
                     {productName}
                  </h3>
                  <h3 className=" text-lg xl:text-xl font-semibold   antialiased">
                     Brand: <span className="font-normal">{brandName}</span>
                  </h3>
                  <h3 className="mb-4 text-lg xl:text-xl font-semibold  antialiased">
                     Type: <span className="font-normal">{productType}</span>
                  </h3>

                  <div className="my-3">
                     <p className="max-w-[400px] xl:text-xl">
                        <span className="mb-4 text-lg xl:text-xl font-semibold  antialiased">Description:</span> <br />
                        {shortDescription}
                     </p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                     <Rating className="text-2xl lg:text-3xl text-amber-400"
                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                        fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                        fractions={2}
                        readonly={true}
                        initialRating={productRatings}
                     />
                     <p className="text-xl lg:text-3xl font-semibold">{productRatings}</p>
                  </div>
                  <h3 className=" mb-4 lg:mb-6 block  text-2xl font-semibold    antialiased">
                     Price: $<span className="font-normal">{productPrice}</span>
                  </h3>
               </div>
               <div className="flex gap-10">

                  <Link className="inline-block" to="/my-cart">
                     <button
                        className="block w-full select-none rounded-lg bg-sky-500 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-white shadow-md shadow-sky-500/50 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                        type="button"
                        data-ripple-light="true"
                     >
                        Add to Cart
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetailsPage;