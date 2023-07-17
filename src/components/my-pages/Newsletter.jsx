import Image from 'next/image';
import React from 'react';

const Newsletter = () => {
   return (
      <main className='lg:p-12 relative pb-8' >
         <div className="absolute lg:top-4 md:bottom-24 lg:right-5 md:-right-12 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="224" height="206" viewBox="0 0 224 206" fill="none"
            className='lg:block md:block hidden'>
               <ellipse cx="112.092" cy="103" rx="111.78" ry="103" fill="url(#paint0_radial_1546_8588)" fill-opacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1546_8588" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.9148 11.1443) rotate(54.5783) scale(211.503 229.533)">
                     <stop stop-color="#E2D6D6" />
                     <stop offset="0.543219" stop-color="#FF0000" stop-opacity="0.95" />
                     <stop offset="1" stop-color="#F30808" stop-opacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="80" viewBox="0 0 65 80" fill="none"
            className='lg:hidden md:hidden block '>
               <ellipse cx="43.4098" cy="40" rx="43.4098" ry="40" fill="url(#paint0_radial_1784_7719)" fill-opacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1784_7719" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.0984 4.32787) rotate(54.5783) scale(82.1372 89.139)">
                     <stop stop-color="#E2D6D6" />
                     <stop offset="0.543219" stop-color="#FF0000" stop-opacity="0.95" />
                     <stop offset="1" stop-color="#F30808" stop-opacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>
         </div>
         <section className="bg-[#FD8484]/5 bg-opacity-5 md:w-10/12  md:mx-auto mx-8 rounded-md border border-[#FD8484]/30 mt-8 md:p-6 p-2 relative shadow-inner">
            
            <h1 className="text-center text-[#ED1B1B] lg:text-5xl md:text-2xl font-normal">{"Subscribe To Our Newsletter"}</h1>
            <p className="text-[#977C7C] text-center md:text-md text-sm m-2">{"Stay up to date with our news, ideas & updates."}</p>
            <form method="post" action="" className="relative">
               
               <div className="flex md:flex-row flex-col justify-between border broder-black/80 rounded-xl lg:w-3/6 md:w-3/5 w-4/5 mx-auto">
                  <input
                     type="email"
                     name="email"
                     placeholder="Enter your email"
                     className="w-full bg-transparent focus:outline-none p-3"
                  />
                  <button className="bg-[#1C1C1C] px-4 py-2 m-2 rounded-md text-white">
                     Subscribe
                  </button>
               </div>
            </form>

            <div className="absolute lg:top-1/2 md:-bottom-14 lg:left-24 md:left-0 transform -translate-y-1/2 ">
               <Image src={"/images/message.svg"} alt="message-image" width={150} height={400}
               className='lg:10/12 md:w-6/12' />
            </div>
         </section>

         <div className="lg:absolute lg:block hidden left-0 top-40 -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="206" viewBox="0 0 192 206" fill="none">
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
