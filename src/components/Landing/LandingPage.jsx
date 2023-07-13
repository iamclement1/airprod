import React, { Fragment } from 'react'
import { Navbar } from '../common/Navbar'
import { Footer } from '../common/Footer'
import { About, Newsletter, Services, Solutions } from '../my-pages'



const LandingPage = () => {
   return (
      <Fragment>
         <Navbar />
         <About />
         <Services/>
         <Solutions />
         {/* <Contact /> */}
         <Newsletter />
         <Footer />
      </Fragment> 
   )
}

export default LandingPage