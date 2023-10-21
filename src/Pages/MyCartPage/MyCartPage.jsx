import { useLoaderData } from "react-router-dom";
import CartItemCard from "../../Components/MyCartPageComponents/CartItemCard";
import { useState } from "react";
import BackToHome from "../../Components/BackToHome/BackToHome";

const MyCartPage = () => {
   const cartItems = useLoaderData()
   const [currentCartItems, setCurrentCartItems] = useState(cartItems);

   const handleRemoveDeletedItem = (id) => {
      const remainingItems = currentCartItems.filter(item => item._id !== id);
      setCurrentCartItems(remainingItems)
   }

   
   
   return (
      <div className="dark:bg-gray-900 py-[100px]">
         <div className="container mx-auto px-2 sm:px-4">
            <BackToHome></BackToHome>
            <h1 className="text-center text-4xl font-bold my-10 dark:text-white">My Cart</h1>
            <div className="space-y-8 sm:space-y-5 max-w-[700px] mx-auto">
               {
                  currentCartItems.map((cartItem) => <CartItemCard key={cartItem._id} cartItem={cartItem} handleRemoveDeletedItem={handleRemoveDeletedItem}></CartItemCard>)
               }
            </div>
         </div>
      </div>
   );
};

export default MyCartPage;