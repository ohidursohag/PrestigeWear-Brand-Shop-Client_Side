import { useLoaderData } from "react-router-dom";
import CartItemCard from "../../Components/MyCartPageComponents/CartItemCard";
import { useState } from "react";

const MyCartPage = () => {
   const cartItems = useLoaderData()
   const [currentCartItems, setCurrentCartItems] = useState(cartItems);

   const handleRemoveDeletedItem = (id) => {
      const remainingItems = currentCartItems.filter(item => item._id !== id);
      setCurrentCartItems(remainingItems)
   }
   // const handleDeleteCartItem = (id) => {
   //    Swal.fire({
   //       title: 'Are you sure?',
   //       text: "You want to remove this item!",
   //       icon: 'warning',
   //       showCancelButton: true,
   //       confirmButtonColor: '#3085d6',
   //       cancelButtonColor: '#d33',
   //       confirmButtonText: 'Yes, Remove it!'
   //    }).then(async (result) => {
   //       if (result.isConfirmed) {
   //          try {
   //             const response = await fetch(`http://localhost:5000/cart-data/${id}`, {
   //                method: 'DELETE',
   //             })
   //             const result = await response.json();
   //             console.log(result);
   //             if (result.deletedCount) {
   //                Swal.fire({
   //                   position: 'top',
   //                   icon: 'success',
   //                   title: 'Coffee successfully Deleted',
   //                   showConfirmButton: false,
   //                   timer: 1500
   //                })
   //                handleRemoveDeletedItem(id)
   //             }
   //          } catch (error) {
   //             console.error(error);
   //          }
   //       }
   //    })
   // }

   
   
   return (
      <div className="container mx-auto px-2 sm:px-4">
         <h1 className="text-center text-4xl font-bold my-10 ">My Cart</h1>
         <div className="space-y-8 sm:space-y-5 max-w-[700px] mx-auto">
            {
               currentCartItems.map((cartItem) => <CartItemCard key={cartItem._id} cartItem={cartItem} handleRemoveDeletedItem={handleRemoveDeletedItem}></CartItemCard>)
            }
         </div>
      </div>
   );
};

export default MyCartPage;