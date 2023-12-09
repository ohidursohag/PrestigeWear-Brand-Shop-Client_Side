import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
   const { products } = useContext(AuthContext);

   
   console.log(products);
   const [sliderRef] = useKeenSlider({
      loop: true,
      rtl: true,
      slides: {
         perView: '3',        
         spacing: 10,
      },
   },
      [
         (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
               clearTimeout(timeout)
            }
            function nextTimeout() {
               clearTimeout(timeout)
               if (mouseOver) return
               timeout = setTimeout(() => {
                  slider.next()
               }, 1000)
            }
            slider.on("created", () => {
               slider.container.addEventListener("mouseover", () => {
                  mouseOver = true
                  clearNextTimeout()
               })
               slider.container.addEventListener("mouseout", () => {
                  mouseOver = false
                  nextTimeout()
               })
               nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
         },
      ]
   )
   return (
      <div className="container mx-auto">
         <h1 className="dark:text-white text-center text-5xl font-bold py-10">Featured Products</h1>
         <div ref={sliderRef} className="keen-slider">
            {
               products.map(product => <div className="relative" key={product?._id}>
                  <Link to={`/products/${product?._id}`}>
                     <div className="keen-slider__slide h-[400px] " style={{ backgroundImage: `url(${product?.productImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="px-3 py-2 space-y-2 absolute text-gray-300 w-full bottom-0 z-50 bg-black/30 backdrop-blur-md">
                           <h3 className=" text-2xl font-semibold">{product?.productName}</h3>
                           <h3 className="text-xl">{product?.brandName}</h3>
                        </div>
                     </div>
                  </Link>
               </div>
               )
            }
            
         </div>
      </div>
   );
};

export default FeaturedProducts;