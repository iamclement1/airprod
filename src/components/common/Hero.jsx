import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
   return (
      <main>
         <section>
            <div className='w-full relative'>
               <Image src={"/images/hero.svg"} alt='Hero-Image' width={500} height={500}
               className='w-full' />
            </div>
            <div className='absolute lg:top-72 lg:mx-28'>
               <h1 className='lg:w-6/12 text-white lg:text-4xl font-bold '>
                  Empowering your vision with innovative technology solutions.
               </h1>
               <p className='text-[#BFBBBB] lg:my-8'>
                  {"We deliver high quality, scalable and user friendly software"}
               </p>
               <div className='flex items-center space-x-6'>
                  <button className='bg-[#E91313] text-white lg:px-7 lg:py-4 p-3 rounded-xl'>
                     Get Started
                  </button>
                  <button className="flex items-center border-2 border-white p-3 rounded-xl  text-white">
                     Learn more
                     <span className='ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                           <path d="M14.93 18.82C14.74 18.82 14.55 18.75 14.4 18.6C14.11 18.31 14.11 17.83 14.4 17.54L19.94 12L14.4 6.46C14.11 6.17 14.11 5.69 14.4 5.4C14.69 5.11 15.17 5.11 15.46 5.4L21.53 11.47C21.82 11.76 21.82 12.24 21.53 12.53L15.46 18.6C15.31 18.75 15.12 18.82 14.93 18.82Z" fill="white" />
                           <path d="M20.83 12.75H4C3.59 12.75 3.25 12.41 3.25 12C3.25 11.59 3.59 11.25 4 11.25H20.83C21.24 11.25 21.58 11.59 21.58 12C21.58 12.41 21.24 12.75 20.83 12.75Z" fill="white" />
                        </svg>
                     </span>
                  </button>
               </div>
            </div>
         </section>
      </main>
   )
}

export default Hero