
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
   return (
      <main>
         <section>
            <div className={`w-full relative`}>
               <Image
                  src={"/images/hero.svg"}
                  alt="Hero-Image"
                  width={500}
                  height={500}
                  className={`w-full lg:block md:block hidden`}
               />
               <Image
                  src={"/images/hero-mobile.svg"}
                  alt="Hero-Image"
                  width={500}
                  height={500}
                  className={`w-full lg:hidden md:hidden block `}
               />
            </div>
            <div className="absolute xl:top-72 lg:top-64 md:top-44 top-32 xl:mx-28 md:mx-8 mx-6">
               <h1 className="xl:w-6/1 md:w-6/12 w-full text-white lg:text-4xl md:text-2xl sm:text-xl text-md font-bold ">
                  Empowering your vision with innovative technology solutions.
               </h1>
               <p className="text-[#BFBBBB] xl:my-8 md:my-5 my-3 md:w-6/12 w-4/6 lg:text-xl md:text-md text-xs">
                  {"We deliver high quality, scalable and user friendly software"}
               </p>
               <div className="flex items-center space-x-6">
                  <Link href={"/contact"}>
                     <button className="bg-[#E91313] text-white lg:px-7 lg:py-4 p-3 rounded-xl">
                        Get Started
                     </button>
                  </Link>
                  <Link href={"/contact"}>
                     <button className="flex items-center md:border-2 md:border-white p-3 rounded-xl  md:text-white text-[#BFBBBB]">
                        Learn more
                        <span className="ml-2 md:block hidden">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                           >
                              <path
                                 d="M14.93 18.82C14.74 18.82 14.55 18.75 14.4 18.6C14.11 18.31 14.11 17.83 14.4 17.54L19.94 12L14.4 6.46C14.11 6.17 14.11 5.69 14.4 5.4C14.69 5.11 15.17 5.11 15.46 5.4L21.53 11.47C21.82 11.76 21.82 12.24 21.53 12.53L15.46 18.6C15.31 18.75 15.12 18.82 14.93 18.82Z"
                                 fill="white"
                              />
                              <path
                                 d="M20.83 12.75H4C3.59 12.75 3.25 12.41 3.25 12C3.25 11.59 3.59 11.25 4 11.25H20.83C21.24 11.25 21.58 11.59 21.58 12C21.58 12.41 21.24 12.75 20.83 12.75Z"
                                 fill="white"
                              />
                           </svg>
                        </span>
                        <span className="ml-2 md:hidden block">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M9.62 12.5466C9.49333 12.5466 9.36667 12.5 9.26667 12.4C9.07333 12.2066 9.07333 11.8866 9.26667 11.6933L12.96 7.99996L9.26667 4.30662C9.07333 4.11329 9.07333 3.79329 9.26667 3.59996C9.46 3.40662 9.78 3.40662 9.97333 3.59996L14.02 7.64662C14.2133 7.83996 14.2133 8.15996 14.02 8.35329L9.97333 12.4C9.87333 12.5 9.74667 12.5466 9.62 12.5466Z" fill="#BFBBBB" />
                              <path d="M13.5533 8.5H2.33334C2.06 8.5 1.83334 8.27333 1.83334 8C1.83334 7.72667 2.06 7.5 2.33334 7.5H13.5533C13.8267 7.5 14.0533 7.72667 14.0533 8C14.0533 8.27333 13.8267 8.5 13.5533 8.5Z" fill="#BFBBBB" />
                           </svg>
                        </span>
                     </button>
                  </Link>
               </div>
            </div>
         </section>
      </main>
   );
};

export default Hero;
