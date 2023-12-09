import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import Rating from "react-rating";
const CustomerReview = () => {
   let testimonials = [
      {
         id: 1,
         testimonial:
            "I completely love this site, found it on EBay at first now I just order directly through them...I am always complemented on my outfits I will be back for more...Thank you for having cute trendy clothes that fit and look good.",
         author: "John Doe",
         authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
         ratings: 5,
      },
      {
         id: 2,
         testimonial:
            "I love the clothes from this website!! I am so glad I found them.....everything has been spot on, fits wonderfully, styles are trendy and lots to choose from!! Thanks for being here for us!!!",
         author: "Emma Doe",
         authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
         ratings: 4.5,
      },
      {
         id: 3,
         testimonial:
            "I love these clothes!! I love the fit!!! I love the price!!! I am on my 3rd order from you!! I too was skeptical because you were international.. My order was here within a week and when I pulled out the clothes and tried them on.. I was skeptical no more. Keep those high low tops coming and thank you for making mje look great at work!!!",
         author: "John Doe",
         authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
         ratings: 5,
      },
      {
         id: 4,
         testimonial:
            "I can't even express how excited I was when your delivery arrived. Such well made, adorable clothing, the sizing is amazing, the pants fit so very well which is saying a lot when you are over a size US 24, even the undies fit so well!!! Amazing. I'm ordering again right now. Thank you! Please bring brick and mortar stores to the United States!!!!",
         author: "Emma Doe",
         authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
         ratings: 5,
      },
      {
         id: 5,
         testimonial:
            "OMG..great store !!! Found this store while visiting the UK.. what a find -nice clothing/well made/great prices. I never find anything I Iike in US plus size stores but I could have filled another suitcase in Yours* Will be shopping on this site from now on... please come to the US !!!",
         author: "James Doe",
         authorImg: "https://source.unsplash.com/pUhxoSapPFA/500x500",
         ratings: 4.5,
      },
      {
         id: 6,
         testimonial:
            "Was a little nervous to order because company out of USA. But boy am I glad I did!.The clothing is true to size, fabrics are great and styles up to date and GREAT prices. Glad I took the chance, now I'm a happy returning customer. Don't get me wrong, we do have stores that caterer to the Fuller FIgure ladies in USA, but after seeing model Tess Munster, I wanted to know where she got her clothes from. And it was YOURS.",
         author: "Donald Fen",
         authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
         ratings: 5,
      },
   ]

   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 24 })
   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
   }, [emblaApi])
   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
   }, [emblaApi])

   return (
      <div>
         <section className="lg:mt-12">
            <div className="py-24 w-4/5 mx-auto">
               <h1 className="pb-16 font-bold text-5xl dark:text-white text-center">
                  What Our Clients Say
               </h1>

               <div className="embla overflow-hidden flex" ref={emblaRef}>
                  <div className="embla__container flex flex-row ">
                     {
                        testimonials.map((testimonialMetadata, index) => (
                           <div key={index}
                              className="embla__slide flex-[0_0_33%] md:flex-[0_0_32%] mr-4 min-w-0 bg-white shadow-sm border-solid border-2 border-gray-200 rounded-lg">
                              <div
                                 className="w-full flex flex-col bg-white px-6 py-6 rounded-2xl "
                              >
                                 <p className="pt-2 text-slate-600 leading-relaxed ">
                                    {`${testimonialMetadata.testimonial.slice(0, 160)} ...`}
                                 </p>
                                 <div className="flex flex-row pt-4 mt-2 items-center ">
                                    <img
                                       className="rounded-full inline h-12 w-12 "
                                       src={testimonialMetadata.authorImg}
                                    />
                                    <div className="flex flex-col ml-4">
                                       <h2 className="font-semibold text-base">
                                          {testimonialMetadata.author}
                                       </h2>
                                       <p className="text-gray-600">
                                          <Rating className="text-2xl text-amber-400"
                                             emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                             fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                                             fractions={2}
                                             readonly={true}
                                             initialRating={testimonialMetadata.ratings}
                                          />
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  </div>
               </div>

               <div className="flex justify-center mt-8">
                  <div>
                     <button
                        type="button"
                        className="mr-4 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white  focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center 
             "
                        onClick={scrollPrev}
                     >
                        <BiSolidLeftArrow />
                        <span className="sr-only">Left arrow</span>
                     </button>

                     <button
                        type="button"
                        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white  focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center 
              inline-flex items-center"
                        onClick={scrollNext}
                     >
                        <BiSolidRightArrow />
                        <span className="sr-only">Right arrow</span>
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default CustomerReview;