import Image from 'next/image'
import React, { Fragment } from 'react'
import Button from '../common/Button'

const Solutions = () => {
   return (
      <main className='bg-[#180F12] w-full p-5'>
         <section className='w-full'>
            <div className="lg:flex md:space-x-12 mx-auto md:w-5/6 md:p-8 p-3">
               <Image src={"/images/groups.svg"} alt='groups-image' width={450}
                  height={400}
                  className='mx-auto' />
               <div className='my-4'>
                  <h1 className='italic text-white font-semibold sm:text-4xl mt-4 lg:text-start text-center'>
                     {"Amazing companies are made by amazing people"}
                  </h1>
                  <p className='md:text-sm tracking-wide text-xs text-white md:text-start text-center mt-4 mb-6'>
                     {"With a focus on customer satisfaction and results, ApiProd is dedicated to empowering businesses to achieve their full potential through custom software solutions. If you're looking to unleash the limitless potential of your business, contact us today to learn more about what we can do for you."}
                  </p>
                  <div className="lg:block flex justify-center mx-auto w-6/12 items-center">
                     <Button text="Contact Us" />
                  </div>

               </div>
            </div>


            <div className="lg:flex md:space-x-12 mx-auto md:w-5/6 md:p-8 p-3">
               <div className='my-4'>
                  <h1 className='italic text-white font-semibold sm:text-4xl mt-4 lg:text-start text-center'>
                     A better way to grow your business
                  </h1>
                  <p className='md:text-sm tracking-wide text-xs text-white lg:text-start text-center mt-8 mb-8'>
                     ApiProd offers a wide spectrum of services with the sole purpose of improving the customer reach for their numerous clients. We are with you from the inception till the deployment stage and this is made possible by our insatiable passion for growth and technological development.
                  </p>

                  <div className="lg:block flex justify-center">
                     <Button text="Learn more" />
                  </div>
               </div>
               <Image src={"/images/flower.svg"} alt='groups-image' width={450}
                  height={400}
                  className='mx-auto' />
            </div>

            <div className="relative">
               <Image src="/images/circle.svg" alt="groups-image" width={900} height={800} className="sm:mx-auto h-[24rem] w-full" />
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="text-white text-center sm:text-xl text-xs font-semibold w-[280px] p-4 ">Synergy in Action: Our Team of Innovators</h1>
                  <p className='text-white text-center sm:w-[340px] w-[190px] md:text-[14px] text-[8px]'>
                     {"Meet our team of innovators who are dedicated to turning ideas into reality. With diverse expertise and a collaborative approach, we create cutting-edge software solutions to empower your success. Let's unleash the potential of your business together. Contact us today."}
                  </p>
               </div>
            </div>

         </section>
      </main>
   )
}

export default Solutions