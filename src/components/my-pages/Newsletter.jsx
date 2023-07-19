import Image from 'next/image';
import React from 'react';

const Newsletter = () => {
   return (
      <main className='lg:p-12 relative pb-8' >
         <div className="absolute lg:top-4 md:bottom-24 bottom-12 lg:right-5 md:-right-24 -right-44">
            <svg xmlns="http://www.w3.org/2000/svg" width="224" height="206" viewBox="0 0 224 206" fill="none"
               className='lg:w-full md:w-8/12 w-4/12 '>
               <ellipse cx="112.092" cy="103" rx="111.78" ry="103" fill="url(#paint0_radial_1546_8588)" fillOpacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1546_8588" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.9148 11.1443) rotate(54.5783) scale(211.503 229.533)">
                     <stop stop-color="#E2D6D6" />
                     <stop offset="0.543219" stop-color="#FF0000" stopOpacity="0.95" />
                     <stop offset="1" stop-color="#F30808" stopOpacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>

         </div>
         <section className="bg-[#FD8484]/5 bg-opacity-5 md:w-10/12  md:mx-auto mx-3 rounded-md border border-[#FD8484]/30 mt-8 md:p-6 p-2 relative shadow-inner">

            <h1 className="text-center text-[#ED1B1B] lg:text-5xl md:text-xl font-normal">
               Subscribe To Our Newsletter
            </h1>
            <p className="text-[#977C7C] text-center lg:text-xl md:text-sm text-xs md:m-2">{"Stay up to date with our news, ideas & updates."}</p>
            <form method="post" action="" className="relative">

               <div className="flex flex-row  justify-between border broder-black/80 rounded-xl lg:w-3/6 md:w-3/5 w-9/12 mx-auto">
                  <input
                     type="email"
                     name="email"
                     placeholder="Enter your email"
                     className="w-full bg-transparent focus:outline-none lg:p-3 md:px-2 p-2 md:placeholder:text-lg placeholder:text-sm"
                  />
                  <button className="bg-[#1C1C1C] lg:px-6 md:px-3 md:py-3 py-1 m-2 rounded-md lg:text-lg md:text-md text-xs text-white p-1">
                     Subscribe
                  </button>
               </div>
            </form>

            <div className="absolute lg:top-1/2 lg:-bottom-18 top-20 lg:left-24 md:left-0 left-0 transform -translate-y-1/2 ">
               <Image src={"/images/message.svg"} alt="message-image" width={150} height={400}
                  className='lg:10/12 md:w-5/12 w-3/12 lg:mt-0 md:mt-4 md:block hidden' />
            </div>
         </section>

         <div className="absolute lg:left-0 lg:top-44 md:top-20 top-1 -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="206" viewBox="0 0 192 206" fill="none"
            className='lg:w-full md:w-8/12 w-4/12'>
               <ellipse cx="80.0919" cy="103" rx="111.78" ry="103" fill="url(#paint0_radial_1609_7680)" fill-opacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1609_7680" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.9148 11.1443) rotate(54.5783) scale(211.503 229.533)">
                     <stop stop-color="#E2D6D6" />
                     <stop offset="0.543219" stop-color="#FF0000" stop-opacity="0.95" />
                     <stop offset="1" stop-color="#F30808" stop-opacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>
         </div>
      </main>
   );
};

export default Newsletter;
