import React from 'react'
import { Link } from 'react-router-dom'
import Vector from '../../assets/hero-shape.png'
import HERO1 from '../../assets/heroImg.png'
import HERO2 from '../../assets/heroImg2.png'
import { Search2Icon } from '@chakra-ui/icons'

const Hero = () => {
  return (
    <div className='contain  relative h-[100vh]'>
      <img className='z-[-1] absolute bottom-0 left-0 h-[60%]' src={Vector} alt="hero-shape" />         
      <section className='z-[999] h-full w-full  flex justify-center items-end '>
        {/* hero text */}



        <div className='flex flex-col gap-4 w-full md:w-[80%] h-full items-start justify-center'>
          <div className=''>
            <h4 className='text-sm text-[tajawal] leading-7 text-italic text-left text-[#D14F0D]'>Never get stranded again!</h4>
            <h2 className='text-[28px]  md:text-[46px] text-[kanit] font-[700] leading-[54px] text-left text-[#D14F0D]'>Access the quickest, most-efficient Assistant near you.</h2>
          </div>

          <div className='flex bg-slate-100 mt-6 shadow-md w-full h-[50px] rounded-md' >
            <input className='bg-none w-[88%] h-full  outline-none p-4 rounded-l-md' type="text" />
            <button className='bg-[#D14F0D] text-[#fff] text-opacity-25 w-[12%] h-full rounded-r-md'><Search2Icon/></button>
          </div>

          <div className='flex space-x-3'>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <Link to='/' className='hidden md:block px-2 hover:text-[#D14F0D] text-[12px] font-[300] hover:font-[500]'>more</Link>
          </div>

        </div>
        
        <div className='z-1 absolute top-20 right-0 pl-20 opacity-20 lg:opacity-100 '><img src={HERO1} alt="" className='w-[90%]' /></div>        
        <div class="hidden lg:flex relative w-[100%] h-[90vh] items-center">

          <div className='z-10 p-10'><img src={HERO2} alt="" /></div>
        </div>
      </section>

    </div>
  )
}

export default Hero
