import Image from 'next/image'
import React from 'react'

const Talent = () => {
   return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#101010]">
         <Image
            src="/AqCa.gif"
            alt="Coming Soon"
            width={400}
            height={200}
            // className="mb-8"
         />
         {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1> */}
         <p className="text-xl text-gray-500 text-center">
            Our website is currently undergoing an exciting transformation.
         </p>
         <p className='text-xl text-gray-500'>
            Stay tuned for updates!
         </p>
      </div>
   )
}

export default Talent