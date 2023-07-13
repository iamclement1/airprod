import React from 'react'

const Button = ({ text,
   children,
   handleButton,
   ...props }) => {
   return (
      <button {...props} 
      onClick={handleButton}
         className='bg-[#E91313] text-white rounded-xl px-4 py-3'>
            {text}
         </button>
   )
}

export default Button