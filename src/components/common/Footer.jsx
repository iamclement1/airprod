import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
   const currentYear = new Date().getFullYear();
   return (
      <footer className="bg-[#180F12] p-6 lg:px-8">
         <main>
            <section className="lg:flex md:grid md:grid-cols-4 mx-auto justify-center lg:justify-between lg:px-20">
               <div className=" lg:w-1/5 ">
                  <Image src={"/images/logo.svg"} alt="brand-image"
                     width={100} height={300}
                     className="lg:w-3/5 lg:mx-0 mx-auto" />
               </div>

               {/* quick link */}
               <div className=" ">
                  <h1 className="md:text-white text-[#DFD9D9] md:text-2xl text-xs font-semibold sm:mt-0 md:mt-4 mt-8 md:text-start text-center ">Quick Links</h1>
                  <div className="flex lg:flex-row flex-col mt-4 lg:space-x-3 md:text-start text-center">
                     <Link href={"/"} className="md:text-[#FAD7D3] text-white cursor-pointer md:text-md text-xl md:my-0 my-1 ">
                        Solutions
                     </Link>
                     <Link href={"/"} className="md:text-[#FAD7D3] text-white cursor-pointer md:text-md text-xl md:my-0 my-1 ">
                        About Us
                     </Link>
                     <Link href={"/"} className="md:text-[#FAD7D3] text-white cursor-pointer md:text-md text-xl md:my-0 my-1 ">
                        Contact Us
                     </Link>
                     <Link href={"/"} className="md:text-[#FAD7D3] text-white cursor-pointer md:text-md text-xl md:my-0 my-1 ">
                        Become A Talent
                     </Link>
                  </div>
               </div>

               {/* follow us */}
               <div className=" ">
                  <h1 className="md:text-white text-[#DFD9D9] md:text-2xl text-xs font-semibold sm:mt-0 md:mt-4 mt-8 md:text-start text-center">Follow us</h1>
                  <div className="flex items-center space-x-3 mt-4 md:justify-start justify-center">
                     <Image src={"images/facebook.svg"} alt="facebook_icon" width={20} height={150} />
                     <Image src={"images/twitter.svg"} alt="facebook_icon" width={20} height={150} />
                     <Image src={"images/linkedin.svg"} alt="linkedin" width={20} height={150} />
                     <Image src={"images/instagram.svg"} alt="instagram idcon" width={20} height={150} />
                  </div>

               </div>

               {/* contact us */}
               <div className="">
                  <h1 className="md:text-white text-[#DFD9D9] md:text-2xl text-xs font-semibold sm:mt-0 md:mt-4 mt-8 md:text-start text-center">Contact Us</h1>
                  <div className="text-white flex space-x-1 mt-4 items-center md:justify-start justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill="white" />
                        <path d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z" fill="white" />
                     </svg>
                     <a href="mailto:mail.apiprod@gmail.com">
                        mail.apiprod@gmail.com
                     </a>
                  </div>
                  <div className="text-white flex space-x-1 mt-3 items-center md:justify-start justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10.554 6.24003L7.17099 2.33503C6.78099 1.88503 6.06599 1.88703 5.61299 2.34103L2.83099 5.12803C2.00299 5.95703 1.76599 7.18803 2.24499 8.17503C5.10661 14.1 9.88503 18.8851 15.806 21.755C16.792 22.234 18.022 21.997 18.85 21.168L21.658 18.355C22.113 17.9 22.114 17.181 21.66 16.791L17.74 13.426C17.33 13.074 16.693 13.12 16.282 13.532L14.918 14.898C14.8482 14.9712 14.7562 15.0195 14.6563 15.0354C14.5564 15.0513 14.4541 15.0339 14.365 14.986C12.1354 13.7021 10.286 11.8503 9.00499 9.61903C8.95702 9.52978 8.93964 9.42726 8.95554 9.32719C8.97144 9.22711 9.01972 9.13502 9.09299 9.06503L10.453 7.70403C10.865 7.29003 10.91 6.65003 10.554 6.23903V6.24003Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     <a href="tel:+234816388020">
                        +234816388020
                     </a>
                  </div>
               </div>
            </section>

            <section>
               <div className="mt-4 mb-4 lg:px-20">
                  <hr className="-top broder-white w-ful mb-4l " />
                  <div >
                     <p className="text-white flex items-center space-x-1 justify-center pb-4 pt-4 lg:text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                           <g clip-path="url(#clip0_1551_8470)">
                              <path d="M1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.146 4.992C6.934 4.992 6.219 5.912 6.219 7.494V8.554C6.219 10.125 6.922 11.016 8.146 11.016C9.125 11.016 9.787 10.43 9.875 9.598H11.17V9.691C11.07 11.139 9.816 12.158 8.14 12.158C6.049 12.158 4.871 10.822 4.871 8.555V7.482C4.871 5.221 6.072 3.844 8.141 3.844C9.822 3.844 11.076 4.898 11.17 6.416V6.504H9.875C9.787 5.625 9.107 4.992 8.146 4.992Z" fill="white" />
                           </g>
                           <defs>
                              <clipPath id="clip0_1551_8470">
                                 <rect width="16" height="16" fill="white" />
                              </clipPath>
                           </defs>
                        </svg>
                        <span>{currentYear} </span><span className="text-[#E91313] font-bold">ApiProd</span>. All rights reserved.
                     </p>
                  </div>
               </div>
            </section>
         </main>
      </footer>
   );
};
