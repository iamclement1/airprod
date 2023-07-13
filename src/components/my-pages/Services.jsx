import { servicesData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

// console.log(servicesData);

const Services = () => {
   return (
      <main className='bg-[#FFF5F5] lg:p-12 md:p-8 p-4 mt-12'>
         <section className="lg:flex justify-center lg:space-x-24">
            <div className=' lg:w-3/12 lg:mt-32 lg:p-8 lg:px-6'>
               <p className='text-[#D35D5D] text-md lg:text-start text-center mb-6'>Our Services</p>
               <h1 className='text-[#ED1B1B] font-bold text-2xl lg:text-start text-center '>{"Initiate Your Digital Transformation."}</h1>
               <p className='pt-8 text-[#7D5D5D] lg:text-start text-center '>{"Our team is poised and prepared to deliver an exceptional experience, catering to all your technology needs."}</p>
            </div>

            <div className='grid grid-cols-2 lg:gap-12 gap-4 lg:p-5 p-3'>
               {
                  servicesData.length > 0 && servicesData.map((service, index) => {
                     return (
                        <div key={service.id} className=' lg:w-10/12 flex flex-col justify-center lg:p-8 p-4 items-center bg-white rounded-2xl '>
                           <Image src={service.img} alt={service.desc} width={150} height={200} />
                           <p className=' text-center mt-5'>{service.desc}</p>
                        </div>
                     );
                  })
               }
            </div>
         </section>
      </main>
   );
};

export default Services;
