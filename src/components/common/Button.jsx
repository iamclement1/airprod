import React from 'react'

const Button = ({ text,
   children,
   handleButton,
   ...props }) => {
   return (
      <button {...props} 
      onClick={handleButton}
         className='bg-[#E91313] text-white rounded-md p-4'>
            {text}
         </button>
   )
}

export default Button