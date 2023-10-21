import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const BannerSlider = () => {
   return (
      <div className="!h-[400px] sm:!h-[500px] lg:!h-screen">
         <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} dynamicHeight={false} showThumbs={false} swipeable={true} transitionTime={500} stopOnHover={false} emulateTouch={true} >
            <div className="relative sm:!h-[500px] !h-[400px] lg:!h-screen bg-black/50 bg-[url('https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg')] bg-blend-overlay bg-center bg-cover bg-no-repeat">

               <div className="absolute w-[100px] sm:w-[150px] lg:w-[200px] bottom-2 left-3">
                  <img className="  " src="https://i.ibb.co/PjJQqy7/Nike.png" />
               </div>
               
            </div>
            <div className=" sm:!h-[500px]  !h-[400px] lg:!h-screen bg-black/60 bg-[url('https://i.pinimg.com/originals/9c/9f/0c/9c9f0c5221ef90c7d05ba151671bf482.png')] bg-blend-overlay bg-center bg-cover relative bg-no-repeat">

               <div className="absolute w-[100px] sm:w-[150px] lg:w-[200px]  bottom-2 left-3">
                  <img className="  " src="https://i.ibb.co/6X34VfD/Adidas.png" />
               </div>
               
            </div>
            <div className=" sm:!h-[500px] !h-[400px] lg:!h-screen  bg-black/50 bg-[url('https://www.rli.uk.com/wp-content/uploads/2022/02/Gucci.jpg')] bg-blend-overlay bg-center bg-cover bg-no-repeat relative">

               <div className="absolute w-[100px] sm:w-[150px] lg:w-[200px] bottom-2 left-3">
                  <img className="  " src="https://i.ibb.co/cxR8GYZ/Gucci.png" />
               </div>

               
            </div>
            <div className="sm:!h-[500px] !h-[400px] lg:!h-screen  bg-black/50 bg-[url('https://i.ytimg.com/vi/Fr4Ztb1rz7o/maxresdefault.jpg')] bg-blend-overlay bg-center bg-cover bg-no-repeat relative">

               <div className="absolute w-[100px] sm:w-[150px] lg:w-[200px] bottom-2 left-3">
                  <img className="  " src="https://i.ibb.co/pjKQSv5/Zara.png" />
               </div>
            </div>
            <div className="sm:!h-[500px] !h-[400px] lg:!h-screen relative bg-black/50 bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/c5d35098220605.5ed75fffa8ada.jpg')] bg-blend-overlay bg-center bg-cover bg-no-repeat ">
               
               <div className="absolute w-[100px] sm:w-[150px] lg:w-[200px] bottom-2 left-3">
                  <img className="  " src="https://i.ibb.co/HHjFQtj/H-M.png" />
               </div>
            </div>
            <div className="sm:!h-[500px] !h-[400px] lg:!h-screen relative  bg-black/50 bg-[url('https://i.pinimg.com/originals/a3/36/45/a33645ca1bfbe52a1b896b06f34d001d.jpg')] bg-blend-overlay bg-center bg-cover bg-no-repeat">
                       
               <div className="absolute w-[100px] sm:w-[150px] lg:w-[200px] bottom-2 left-3">
                  <img className="  " src="https://i.ibb.co/RCQL0ZY/Levis.png" />
               </div>
            </div>
         </Carousel>
         
      </div>
   );
};

export default BannerSlider;