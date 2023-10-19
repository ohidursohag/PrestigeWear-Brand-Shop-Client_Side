import footerLogo from '../../../../assets/logo/logo_color.png'
const LogoAndSocialMedia = () => {
   return (
      <div>
         <div className="w-64 space-y-3  md:mx-0 mx-auto text-center md:text-left">
            <figure>
               <img src={footerLogo} alt="" />
            </figure>
            
            <div className=''>
               <h1 className='text-xl  font-semibold  text-white'>Connect with Us</h1>
               <form className='space-y-5 '>
                  <input type="text" name="name" id="name" placeholder="Name" className=" h-10 w-full mt-1  bg-white px-4 text-sm outline-none" />
                  <input type="email" name="email" id="email" placeholder="email" className=" h-10 w-full mt-1  bg-white px-4 text-sm outline-none" />
                  <textarea name="message" id="message" className='w-full h-[100px]'></textarea>
                  <button className='font-Rancho text-xl px-2 py-2 border-[2px]  rounded-lg' type="submit">Send Message</button>
               </form>
            </div>
         </div>

      </div>
   );
};

export default LogoAndSocialMedia;