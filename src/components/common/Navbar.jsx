import Link from 'next/link'
import React, { Fragment } from 'react'

export const Navbar = () => {
   return (
      <Fragment>
         <Link href="#home">Solutions</Link>
         <Link href="#about">About</Link>

      </Fragment>
   )
}
