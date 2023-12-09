import Rating from "react-rating";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
const ProductCard = ({ product }) => {
   const loc = useLocation()
   console.log(loc);
   const {_id, brandName, productImage, productName, productPrice, productRatings, productType } = product || {};
   // console.log(product);
   return (
      <div className="">
         <div className="dark:bg-white sm:flex w-full max-w-[720px] xl:max-w-[600px] 2xl:max-w-[720px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
            <figure className=" bg-black dark:bg-gray-600 sm:w-2/5 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none  bg-clip-border text-gray-700">
               <img
                  src={productImage}
                  alt="image"
                  className="h-full w-full rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none object-cover object-center"
               />
            </figure>
            <div className="p-6 flex-grow">
               <div>
                  <h3 className="mb-1 text-2xl font-semibold ">
                     {productName}
                  </h3>
                  <h3 className=" text-lg font-semibold   antialiased">
                     Brand: <span className="font-normal">{brandName}</span>
                  </h3>
                  <h3 className="mb-4 text-lg font-semibold  antialiased">
                     Type: <span className="font-normal">{productType}</span>
                  </h3>
                  <div className="flex items-center gap-2">
                     <Rating className="text-2xl text-amber-400"
                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                        fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                        fractions={2}
                        readonly={true}
                        initialRating={productRatings}
                     />
                     <p className="text-xl font-semibold">{productRatings}</p>
                  </div>
                  <h3 className="mb-4 block  text-2xl font-semibold    antialiased">
                     Price: $<span className="font-normal">{productPrice}</span>
                  </h3>
               </div>
               <div className="flex gap-10">
                  <Link className="inline-block" to={`/products/${_id}`}>
                     <button
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                     >
                        Details
                     </button>
                  </Link>
                  <Link state={loc.pathname} className="inline-block" to={`/update-product/${_id}`}>
                     <button
                        className="block w-full select-none rounded-lg bg-sky-500 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold  text-white shadow-md shadow-sky-500/50 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                        type="button"
                        data-ripple-light="true"
                     >
                        Update
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};
ProductCard.propTypes = {
   product: PropTypes.object
}
export default ProductCard;