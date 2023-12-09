import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';
const AdvertiseMentSlider = ({ filterAdimage }) => {
   const { image1, image2, image3 } = filterAdimage?.advertiseImg||{} ;
   console.log(image1, image2, image3);
   console.log(filterAdimage);
   return (
      <div>
         <div className="">
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} dynamicHeight={false} showThumbs={false} swipeable={true} transitionTime={500} stopOnHover={false} emulateTouch={true} >
               <div style={{ backgroundImage: `url(${image1})`}} className={`relative sm:!h-[650px] !h-[500px] lg:!h-[750px] bg-black/50  bg-blend-overlay bg-center bg-contain bg-no-repeat`}>
               </div>
               
               <div style={{ backgroundImage: `url(${image2})` }} className={`relative sm:!h-[650px] !h-[500px] lg:!h-[750px] bg-black/50  bg-blend-overlay bg-center bg-contain bg-no-repeat`}>             
               </div>

               <div style={{ backgroundImage: `url(${image3})` }} className={`relative sm:!h-[650px] !h-[500px] lg:!h-[750px] bg-black/50  bg-blend-overlay bg-center bg-contain bg-no-repeat`}>              
               </div>
              
            </Carousel>

         </div>
      </div>
   );
};
AdvertiseMentSlider.propTypes = {
   filterAdimage: PropTypes.object
}
export default AdvertiseMentSlider;