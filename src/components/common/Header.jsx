'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'

const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };
   const handleMobileMenuItemClick = () => {
      setIsMobileMenuOpen(false);
   };

   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <nav className='lg:bg-[#0A0B0B] md:bg-[#0A0B0B] bg-white/50 transition-all ease-in-out relative z-50' >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 lg:py-2">
            <div className="flex items-center justify-between h-16">
               <div className="flex items-center">
                  <div className="flex-shrink-0">
                     <Link href="/">
                        <Image src={"/images/logo.svg"} alt="brand-logo" width={100}
                           height={200} className='lg:block md:block hidden' />
                        <Image src={"/images/logo-mobile.svg"} alt="brand-logo" width={120}
                           height={200} className='lg:hidden md:hidden block' />
                     </Link>
                  </div>
               </div>

               <div className="hidden md:block transition-all ease-in-out">
                  <div className="ml-4 flex items-center space-x-4">
                     <button onClick={() => {
                        scrollToSection('solution')
                     }} className='text-gray-300 hover:border-white hover:border-b-2 px-3 py-2 text-sm font-medium'>
                        Solutions
                     </button>
                     <button onClick={() => scrollToSection('about')} className='text-gray-300 hover:border-white hover:border-b-2 px-3 py-2 text-sm font-medium'>
                        About
                     </button>
                     <Link href="/contact" className='text-gray-300 hover:border-white hover:border-b-2 px-3 py-2 text-sm font-medium'>
                        Contact Us
                     </Link>
                     <Link href="/talent" className='text-gray-300 hover:border-white hover:border-b-2 px-3 py-2 text-sm font-medium'>
                        Become A Talent
                     </Link>
                  </div>
               </div>
               <div className='md:block hidden'>
                  <Link href={'/contact'}>
                     <Button text="Get Started" />
                  </Link>
               </div>


               {/* Hamburger menu for mobile view */}
               <div className="flex md:hidden">
                  {
                     isMobileMenuOpen === false ? (
                        <button
                           onClick={toggleMobileMenu}
                        // className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M27.1249 14.364H4.87517C4.00264 14.364 3.23914 15.1276 3.23914 16C3.23914 16.8725 4.0027 17.6361 4.87517 17.6361H27.1249C27.9974 17.6361 28.7609 16.8725 28.7609 16C28.7609 15.1276 27.9973 14.364 27.1249 14.364Z" fill="#E91313" />
                              <path d="M27.1249 23.8528H4.87517C4.00264 23.8528 3.23914 24.6163 3.23914 25.4888C3.23914 26.3613 4.0027 27.1248 4.87517 27.1248H27.1249C27.9974 27.1248 28.7609 26.3613 28.7609 25.4888C28.7609 24.6163 27.9973 23.8528 27.1249 23.8528Z" fill="#E91313" />
                              <path d="M4.87517 8.14706H27.1249C27.9974 8.14706 28.7609 7.3835 28.7609 6.51103C28.7609 5.63856 27.9973 4.875 27.1249 4.875H4.87517C4.00264 4.875 3.23914 5.63856 3.23914 6.51103C3.23914 7.3835 4.0027 8.14706 4.87517 8.14706Z" fill="#E91313" />
                           </svg>
                        </button>
                     ) : (
                        <button onClick={toggleMobileMenu}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M2 22L12 12L22 22M22 2L11.9981 12L2 2" stroke="#E91313" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </button>
                     )
                  }
               </div>
            </div>
         </div>

         {/* Mobile menu */}
         <div className={` ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white transition-all ease-in-out`}>
            <div className="flex flex-col items-center justify-center px-6 pt-2 pb-3 space-y-1 sm:px-3">
               <button onClick={() => {
                  scrollToSection('about');
                  handleMobileMenuItemClick()
               }} className='block text-center text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'>
                  About
               </button>
               <button onClick={() => {
                  scrollToSection('services');
                  handleClientScriptLoad()
               }} className='block text-center text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'>
                  Services
               </button>
               <Link href="/contact"
                  onClick={handleMobileMenuItemClick}
                  className='block text-center text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'>
                  Contact Us
               </Link>
               <Link href="/talent"
                  onClick={handleMobileMenuItemClick}
                  className='block text-center text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'>
                  Become A Talent
               </Link>
               <div className='md:hidden block'
                  onDoubleClick={handleMobileMenuItemClick}>
                  <Button text="Get Started" />
               </div>
            </div>
         </div>

      </nav>
   )
}

export default Header