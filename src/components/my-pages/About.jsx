import React, { Fragment } from "react";

const About = () => {
   return (
      <Fragment>
         <main>
            <section>
               <h1 className="text-[#E91313] text-4xl text-center font-semibold">
                  What is ApiProd?
               </h1>
               <p className="mx-auto w-6/12 text-center text-[#866A6A] m-12">
                  {
                     "ApiProd helps you secure software solutions for your establishment. Enacting your ideas and guiding your breakthrough into the world of technology."
                  }
               </p>
            </section>
         </main>
      </Fragment>
   );
};

export default About;
