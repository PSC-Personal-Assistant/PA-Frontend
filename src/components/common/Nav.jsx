import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/PA-Logo.png'
import LogoIcon from '../../assets/PA-ICON.png'

// Refer to index.css for styling

const Nav = () => {
  return (
    <section className="px-[1rem] py-1 md:px-[3rem] w-full fixed flex justify-between items-center  z-[999] bg-[#FFF] shadow-sm">

      {/* LOGO */}
      <div className=" flex space-x-14 justify-between items-center">
        <img className='hidden md:block' src={Logo} alt="Personal Assistant Logo" />
        <img className='md:hidden h-[40px] w-[50px]' src={LogoIcon} alt="Personal Assistant Logo" />


        <div className="hidden lg:flex gap-8">
          <NavLink to='/' className='font-[500] text-[14px]'>Get Assistance</NavLink>
          <NavLink to='/' className='font-[500] text-[14px]'>Give Assistance</NavLink>
          <NavLink to='/' className='font-[500] text-[14px]'>Service</NavLink>
          <NavLink to='/' className='font-[500] text-[14px]'>Explore</NavLink>
        </div>
      </div>

      {/* NAV LINKS */}


      {/* NAV BUTTONS */}
      <div className='hidden lg:flex gap-4'>
        <Link to='login' className='border border-solid border-[#D14F0D] rounded-[8px] px-4 py-2'>Sign In</Link>
        <Link to='signup' className='border border-solid rounded-[8px] px-4 py-2 bg-[#D14F0D] text-white text-[600] text-[16px]'>Get Started</Link>
      </div>
    </section>
  )
}

export default Nav
