import React from 'react'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Cheats from '@/components/cheats'

const page = props => {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Cheats />
      </main>
    </>
  )
}

export default page