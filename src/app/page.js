import React from 'react'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Cheats from '@/components/cheats'
// import Footer from '@/components/footer'

const page = props => {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Cheats />
        {/* <Footer /> */}
      </main>
    </>
  )
}

export default page