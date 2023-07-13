import Image from 'next/image';
import React from 'react';

const Newsletter = () => {
   return (
      <main>
         <section className="bg-[#FD8484]/5 bg-opacity-10 md:w-8/12 mx-auto rounded-md border border-[#FD8484]/30 mt-8 md:p-6 relative">
            <h1 className="text-center text-[#ED1B1B] md:text-3xl text-xl font-normal">{"Subscribe To Our Newsletter"}</h1>
            <p className="text-[#977C7C] text-center md:text-md text-sm m-2">{"Stay up to date with our news, ideas & updates."}</p>
            <form method="post" action="" className="relative">
               <div className="flex md:flex-row flex-col justify-between border broder-black/80 rounded-xl md:w-4/6 w-4/5 mx-auto">
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

            <div className="lg:block hidden absolute top-1/2 left-0 transform translate-y-[-50%]">
               <Image src={"/images/message.svg"} alt="message-image" width={150} height={400} />
            </div>
         </section>
      </main>
   );
};

export default Newsletter;
