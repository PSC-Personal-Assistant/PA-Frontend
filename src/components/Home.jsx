import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <Link to='signUp'>Sign Up</Link>
      <Link to='login'>Log In</Link>
    </div>
  )
}

export default Home
