import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Footer />
    </Fragment>
  )
}
