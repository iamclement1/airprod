import React from "react";

const Contact = () => {
   return (
      <main>
         <section className="lg:flex lg:space-x-16 lg:px-32 md:px-6 px-6 lg:mt-12 md:mt-12 mt-8">
            <div className="lg:w-6/12 lg:mt-28">
               <h1 className="  text-3xl font-bold text-[#180F12] ">Need help with a project?</h1>
               <h1 className=" text-3xl my-4 font-bold text-[#E91313]">Let’s talk!</h1>
               <p className="lg:text-lg md:text-md text-sm">
                  ApiProd has you covered whether you need assistance with a large
                  platform, creating your first MVP, going from concept to finance, or
                  scaling your business. Our approach is customized to meet your
                  unique needs. Click the button below or contact our team by phone at {" "}
                  <a href="tel:234816388020" className="text-[#E91313]">234816388020</a>, email at{" "}
                  <a href="mailto:mail.apiprod@gmail.com" className="text-[#E91313]"> mail.apiprod@gmail.com</a>
               </p>
            </div>

            <div className="lg:w-4/12 lg:mt-0 md:mt-8 mt-6">
               <form action="" method="POST">
                  <div className="flex flex-col">
                     <label htmlFor="FullName" className="text-[#180F12] text-md">Full Name</label>
                     <input
                        type="text"
                        placeholder="Mike Dean"
                        className="border border-[#FD8484]/40 rounded-lg px-4 py-3 focus:outline-none placeholder:text-[#866A6A]/60 mt-2"
                     />
                  </div>

                  <div className="flex flex-col my-3">
                     <label htmlFor="Company Name" className="text-[#180F12] text-md">Company Name</label>
                     <input
                        type="text"
                        placeholder="Google"
                        className="border border-[#FD8484]/40 rounded-lg px-4 py-3 focus:outline-none placeholder:text-[#866A6A]/60 mt-2"
                     />
                  </div>

                  <div className="flex flex-col">
                     <label htmlFor="Email" className="text-[#180F12] text-md"> Email</label>
                     <input
                        type="email"
                        placeholder="mike@gmail.com"
                        className="border border-[#FD8484]/40 rounded-lg px-4 py-3 focus:outline-none placeholder:text-[#866A6A]/60 mt-2"
                     />
                  </div>

                  <div className="flex flex-col my-3">
                     <label htmlFor="ProjectDescription">Project Description</label>
                     <textarea
                        id="ProjectDescription"
                        rows="4"
                        cols="50"
                        placeholder="Message"
                        className="border border-[#FD8484]/40 rounded-lg px-4 py-3 focus:outline-none placeholder:text-[#866A6A]/60 mt-2"
                     ></textarea>
                  </div>

                  <button className="bg-[#E91313] text-white py-3 px-12 rounded-xl font-semibold mb-12  ">
                     Send
                  </button>
               </form>
            </div>

         </section>
      </main>
   );
};

export default Contact;
