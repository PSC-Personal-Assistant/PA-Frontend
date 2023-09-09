import React from 'react'
import Nav from './common/Nav'
import { Link } from 'react-router-dom'
import PA1 from '../assets/PA2.jpg'
import Category from './common/Category'
import Footer from './common/Footer'
import Hero from './Hero'
import Cat from './Cat'
import Assemble from './Assemble'
import Offer from './Offer'
import Build from './Build'
import Locate from './Locate'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero/>
      <Cat/>
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
