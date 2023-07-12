import React, { Fragment } from 'react'
import { Navbar } from '../common/Navbar'
import { Footer } from '../common/Footer'
import About from '../my-pages/About'
import { Contact } from '../my-pages/Contact'
import Solutions from '../my-pages/Solutions'


const LandingPage = () => {
   return (
      <Fragment>
         <Navbar />
         <Solutions />
         <Contact />
         <About />
         <Footer />
      </Fragment> 
   )
}

export default LandingPage