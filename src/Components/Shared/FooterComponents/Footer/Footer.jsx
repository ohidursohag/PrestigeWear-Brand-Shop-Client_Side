import LogoAndSocialMedia from "../LogoAndSocialMedia/LogoAndSocialMedia";
import ProductsLinks from "../ProductsLinks/ProductsLinks";
import ContactLinks from "../ContactLinks/ContactLinks";
import Brands from "../Brands/Brands";
import ComapnyLinks from "../ComapnyLinks/ComapnyLinks";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {
   return (
      <footer className="bg-[#1A1919]  text-white">
         <div className="container px-5 md:px-10 pt-16 mx-auto ">
            <div className="flex md:items-center  md:flex-row   flex-col">
               <LogoAndSocialMedia></LogoAndSocialMedia>
               <div className="flex-grow">
                  <div className=" w-full flex flex-wrap items-center md:pl-16  md:mt-0 mt-10 md:text-left text-center space-y-5 sm:space-y-0">
                     <ComapnyLinks></ComapnyLinks>
                     <ProductsLinks></ProductsLinks>
                     <Brands></Brands>
                     <ContactLinks></ContactLinks>
                  </div>
               </div>
            </div>
            <FooterBottom></FooterBottom>
         </div>
      </footer>
   );
};

export default Footer;