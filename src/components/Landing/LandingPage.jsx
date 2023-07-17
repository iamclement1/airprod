import React, { Fragment } from 'react'
import { Footer } from '../common/Footer'
import { About, Newsletter, Services, Solutions } from '../my-pages'
import Hero from '../common/Hero'



const LandingPage = () => {
   return (
      <Fragment>
         {/* <Navbar /> */}
         <Hero />
         <About />
         <Services />
         <Solutions />
         {/* <Contact /> */}
         <Newsletter />
      </Fragment>
   )
}

export default LandingPage