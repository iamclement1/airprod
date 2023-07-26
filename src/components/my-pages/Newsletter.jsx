"use client";
import { Field, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';

const Newsletter = () => {

   const subscribeHere = async (values) => {

   }

   return (
      <main className='lg:p-12 relative pb-8 overflow-hidden' >
         <div className="absolute lg:top-4 md:bottom-24 bottom-48 lg:right-5 md:-right-24 -right-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="224" height="206" viewBox="0 0 224 206" fill="none"
               className='lg:w-full md:w-8/12 w-4/12 md:flex hidden overflow-hidden'>
               <ellipse cx="112.092" cy="103" rx="111.78" ry="103" fill="url(#paint0_radial_1546_8588)" fillOpacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1546_8588" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.9148 11.1443) rotate(54.5783) scale(211.503 229.533)">
                     <stop stop-color="#E2D6D6" />
                     <stop offset="0.543219" stopColor="#FF0000" stopOpacity="0.95" />
                     <stop offset="1" stopColor="#F30808" stopOpacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="80" viewBox="0 0 65 80" fill="none"
               className='md:hidden block'>
               <ellipse cx="43.4098" cy="40" rx="43.4098" ry="40" fill="url(#paint0_radial_1784_7719)" fillOpacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1784_7719" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.0984 4.32787) rotate(54.5783) scale(82.1372 89.139)">
                     <stop stop-color="#E2D6D6" />
                     <stop offset="0.543219" stopColor="#FF0000" stopOpacity="0.95" />
                     <stop offset="1" stopColor="#F30808" stopOpacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>

         </div>
         <section className="bg-[#FD8484]/5 bg-opacity-5 md:w-10/12  md:mx-auto mx-3 rounded-3xl border-2 border-[#FD8484]/30 mt-8 md:p-8 p-8 relative shadow-inner">

            <h1 className="text-center text-[#ED1B1B] lg:text-5xl md:text-xl text-2xl font-normal">
               Subscribe To Our Newsletter
            </h1>
            {/* <div className="absolute xl:right-64 lg:right-64 md:right-24  bottom-22 pointer-events-none">
               <svg xmlns="http://www.w3.org/2000/svg" width="224" height="14" viewBox="0 0 224 14" fill="none">
                  <path d="M2 12.3701C77.8453 -1.58638 126.382 -1.32641 222.5 12.3701" stroke="#C88D8D" strokeOpacity="0.8" strokeWidth="2.5" strokeLinecap="round" />
               </svg>
            </div> */}
            <p className="text-[#977C7C] text-center lg:text-xl md:text-sm text-xs md:m-2 md:my-3 my-4">
               {"Stay up to date with our news, ideas & updates."}
            </p>
            <Formik initialValues={{ email: '' }}
               validate={values => {
                  const errors = {};
                  if (!values.email) {
                     errors.email = 'Required';
                  } else if (
                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                     errors.email = 'Invalid email address';
                  }
                  return errors;
               }}
               onSubmit={(values) => {
                  subscribeHere(values);
                  handleSubscribe
               }}>

               {({ handleSubscribe, errors, touched }) => (
                  <form method="post" action=""
                     onSubmit={handleSubscribe} className="relative lg:w-7/12 md:w-8/12 w-[80%] mx-auto">

                     <div className="flex flex-row justify-between border border-[#1C1C1C] rounded-xl mx-auto">
                        <Field
                           id="email"
                           name="email"
                           type="text"
                           placeholder="Enter your Email"
                           autocomplete="off"
                           validate={(value) => {
                              let error;
                              if (value.length < 1) {
                                 error = "email is Required";
                              }

                              return error;
                           }}
                           className="w-full bg-transparent focus:outline-none md:px-8 px-6 md:placeholder:text-md placeholder:text-sm"
                        />
                        <button className="bg-[#1C1C1C] lg:px-6 md:px-3 m-1 rounded-md lg:text-lg md:text-md text-xs text-white p-1">
                           Subscribe
                        </button>
                     </div>
                     <p className='text-red-600 text-center'> {errors.email} </p>
                  </form>

               )}
            </Formik>

            <div className="absolute lg:top-1/2 lg:-bottom-18 md:top-[5rem] top-[5rem] lg:left-[33px] md:left-0 left-1 transform -translate-y-1/2 md:block hidden ">
               <Image src={"/images/message.svg"} alt="message-image" width={150} height={400}
                  className=' xl:w-7/12 md:w-5/12 w-1/4 lg:mt-0 md:mt-4 ' />
            </div>
         </section>

         {/* lg:left-0 lg:top-44 md:top-20 top-1 */}

         <div className="absolute lg:left-0 lg:top-44 md:top-32 bottom-1  -z-10 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="206" viewBox="0 0 192 206" fill="none"
               className='lg:w-full md:w-8/12 w-4/12 md:block hidden'>
               <ellipse cx="80.0919" cy="103" rx="111.78" ry="103" fill="url(#paint0_radial_1609_7680)" fillOpacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1609_7680" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.9148 11.1443) rotate(54.5783) scale(211.503 229.533)">
                     <stop stopColor="#E2D6D6" />
                     <stop offset="0.543219" stopColor="#FF0000" stopOpacity="0.95" />
                     <stop offset="1" stopColor="#F30808" stopOpacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="62" viewBox="0 0 55 62" fill="none"
               className='md:hidden block'>
               <ellipse cx="20.6426" cy="31" rx="33.6426" ry="31" fill="url(#paint0_radial_1784_7721)" fillOpacity="0.8" />
               <defs>
                  <radialGradient id="paint0_radial_1784_7721" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.02623 3.3541) rotate(54.5783) scale(63.6563 69.0828)">
                     <stop stopColor="#E2D6D6" />
                     <stop offset="0.543219" stopColor="#FF0000" stopOpacity="0.95" />
                     <stop offset="1" stopColor="#F30808" stopOpacity="0.9" />
                  </radialGradient>
               </defs>
            </svg>
         </div>
      </main>
   );
};

export default Newsletter;
