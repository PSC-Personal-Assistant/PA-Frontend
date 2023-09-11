import React from 'react'
import Nav from './common/Nav'
import Category from './common/Category'
import Footer from './common/Footer'
import Hero from './screens/Hero'
import Cat from './screens/Cat'
import Assemble from './screens/Assemble'
import Offer from './screens/Offer'
import Build from './screens/Build'
import Locate from './screens/Locate'
import PopularAssistant from './screens/PopularAssistant'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero/>
      <Cat/>
      <PopularAssistant/>
      <Assemble/>
      <Category/>
      <Offer/>
      <Build/>
      <Locate/>
      <Footer/>
    </div>
  )
}

export default Home
