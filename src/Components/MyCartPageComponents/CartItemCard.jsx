import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
const CartItemCard = ({ cartItem, handleRemoveDeletedItem }) => {
   const { _id, brandName, productImage, productName, productPrice } = cartItem || {};

   const handleDeleteCartItem = async (id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You want to remove this item!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, Remove it!'
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const response = await fetch(`https://prestige-wear-server-k269ec9mx-ohidursohag.vercel.app/cart-data/${id}`, {
                  method: 'DELETE',
               })
               const result = await response.json();
               console.log(result);
               handleRemoveDeletedItem(id)
               if (result.deletedCount) {
                  Swal.fire({
                     position: 'top',
                     icon: 'success',
                     title: 'Coffee successfully Deleted',
                     showConfirmButton: false,
                     timer: 1500
                  })

               }
            } catch (error) {
               console.error(error);
            }
         }
      })
   }

   return (
      <div >
         <div className=" sm:flex sm:h-[100px] w-full justify-between  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
            <figure className=" h-[200px] sm:h-auto sm:w-1/5  bg-black  rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none  bg-clip-border text-gray-700">
               <img
                  src={productImage}
                  alt="image"
                  className="h-full w-full rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none object-cover object-center"
               />
            </figure>
            <div className="p-6 flex-grow flex justify-between items-center">
               <div>
                  <h3 className="mb-1 text-2xl font-semibold ">
                     {productName}
                  </h3>
                  <div className='flex gap-5'>
                     <h3 className=" text-lg font-semibold   antialiased">
                        Brand: <span className="font-normal">{brandName}</span>
                     </h3>

                     <h3 className="mb-4 block  text-lg font-semibold    antialiased">
                        Price: $<span className="font-normal">{productPrice}</span>
                     </h3>
                  </div>
               </div>
               <button onClick={() => handleDeleteCartItem(_id)} title='Delete Coffee' className=' bg-[#EA4744] w-[40px] h-[40px] flex items-center justify-center rounded-lg '>
                  <MdDelete className='  text-white text-2xl '></MdDelete>
               </button >

            </div>
         </div>
      </div>
   );
};
CartItemCard.propTypes = {
   cartItem: PropTypes.object,
   handleRemoveDeletedItem: PropTypes.func.isRequired,
}
export default CartItemCard;