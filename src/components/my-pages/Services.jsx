import { servicesData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

const Services = () => {
   return (
      <main id='services' className='bg-[#FFF5F5] lg:p-12 md:p-8 p-4 mt-12 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('/images/service-bg.svg')" }}>
         <section className="lg:flex justify-center lg:space-x-24 items-center" >
            <div className='lg:w-3/12 lg:mt-32 md:mt-32 mt-28  lg:p-8 lg:px-6'>
               <p className='text-[#D35D5D] text-md text-start mb-6'>Our Services</p>
               <h1 className='text-[#ED1B1B] font-bold text-2xl text-start '>Initiate Your Digital Transformation.</h1>
               <p className='pt-8 text-[#7D5D5D] text-start md:p-0 p-2 my-3'>Our team is poised and prepared to deliver an exceptional experience, catering to all your technology needs.</p>
            </div>

      
            <div className='grid grid-cols-2 lg:gap-12 gap-4 lg:p-5 p-2'>
               {servicesData.length > 0 &&
                  servicesData.map((service, index) => {
                     return (
                        <div key={index.id} className='xl:w-10/12 flex flex-col justify-center xl:p-8 p-1 items-center bg-white rounded-2xl'>
                           <Image
                              src={service.img}
                              alt={service.desc}
                              width={150}
                              height={200}
                              className='w-5/6  sm:w-3/4 md:w-full lg:w-full md:mt-0 mt-4'
                           />
                           <p className='text-center mt-5 md:text-lg text-xs md:mb-0 mb-4'>{service.desc}</p>
                        </div>
                     );
                  })}
            </div>

         </section>
      </main>
   );
};

export default Services;



{/* <div className='grid grid-cols-2 lg:gap-12 gap-4 lg:p-5 p-2'>
               {servicesData.length > 0 &&
                  servicesData.map((service, index) => {
                     return (
                        <div key={index.id} className='xl:w-10/12 flex flex-col justify-center xl:p-8 p-1 items-center bg-white rounded-2xl'>
                           <Image src={service.img} alt={service.desc} width={150} height={200} className='' />
                           <p className='text-center mt-5 md:text-lg text-xs border border-black'>{service.desc}</p>
                        </div>
                     );
                  })}
            </div> */}