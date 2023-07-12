import React, { Fragment } from 'react'
import { Navbar } from '../common/Navbar'
import { Footer } from '../common/Footer'
import About from '../my-pages/About'

const LandingPage = () => {
   return (
      <Fragment>
         <Navbar />
         <About />
         <Footer />
      </Fragment>
   )
}

export default LandingPage