import Image from "next/image";
import React, { Fragment } from "react";
import Button from "../common/Button";

const About = () => {
   return (
      <main id="about">
         <section>
            <h1 className="text-[#E91313] text-center text-4xl font-semibold mt-12">What is ApiProd?</h1>
            <p className="sm:w-6/12 mx-auto my-5 text-center text-[#866A6A]">
               {"ApiProd helps you secure software solutions for your establishment. Enacting your ideas and guiding your breakthrough into the world of technology."}
            </p>

            {/* cards */}
            <div className="sm:flex md:space-x-44 sm:w-[70rem] md:mx-auto">
               <div className="bg-[#F679794D]/10 border border-[#ED1B1B]/20 rounded-md p-6">
                  <Image src="/images/cloud.svg" alt="cloud-image" height={100} width={100}
                     className="mx-auto my-3" />
                  <p className="text-[#DA2525] text-sm text-center">
                     {"We handle all round software development from origin to deployment."}
                  </p>

               </div>

               <div className=" rounded-md p-4 bg-[#AEF0FE]/10 border border-[#AEF0FE]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="88" viewBox="0 0 120 88" fill="none"
                     className="mx-auto my-3">
                     <path d="M60 0L64.239 20.0604L80.5061 9.07969L70.2338 26.4687L89 31L70.2338 35.5313L80.5061 52.9203L64.239 41.9396L60 62L55.761 41.9396L39.4939 52.9203L49.7662 35.5313L31 31L49.7662 26.4687L39.4939 9.07969L55.761 20.0604L60 0Z" fill="#28D1DC" />
                     <path d="M120 67.0319C120 78.3538 93.1371 87.5319 60 87.5319C26.8629 87.5319 0 78.3538 0 67.0319C0 55.7101 26.8629 67.032 60 67.032C93.1371 67.032 120 55.7101 120 67.0319Z" fill="#A0CBDD" />
                  </svg>
                  <p className="text-[#137B82] text-sm text-center mt-4">
                     {"We handle all round software development from origin to deployment."}
                  </p>

               </div>

               <div className=" rounded-md p-4 bg-[#C3C3FD]/10 border border-[#C3C3FD]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="89" height="99" viewBox="0 0 89 99" fill="none"
                     className="mx-auto">
                     <circle cx="44" cy="28" r="28" fill="#5555FF" />
                     <path d="M-4.13537e-06 94.4865C-2.80275e-06 79.2431 29.0092 59 44.5 59C59.9908 59 89 79.2431 89 94.4865C89 109.73 59.9908 81.4748 44.5 81.4748C29.0092 81.4748 -5.46799e-06 109.73 -4.13537e-06 94.4865Z" fill="#B9B9F0" />
                  </svg>
                  <p className="text-[#3D3DEA] text-sm text-center mt-4">
                     {"We handle all round software development from origin to deployment."}
                  </p>

               </div>
            </div>
            <p className=" sm:w-2/5 mx-auto text-center p-6 text-[#866A6A]" >
               {"Sounds intriguing?... if you’re excited about exploring the services of ApiProd, hit the button below "}
            </p>
            <div className=" flex justify-center">
               <Button text="Get started" />
            </div>


         </section>
      </main>

   );
};

export default About;
