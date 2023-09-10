import React from 'react'
import { Link } from 'react-router-dom'
import Vector from '../../assets/hero-shape.png'

const Hero = () => {
  return (
    <div className='contain  relative h-[100vh]'>
      <img className='z-[-1] absolute bottom-0 left-0 h-[60%]' src={Vector} alt="hero-shape" />         
      <section className='z-[999] h-full w-full  flex justify-center items-end '>
        {/* hero text */}



        <div className='flex flex-col gap-4 w-full md:w-[80%] h-full items-start justify-center'>
          <div className=''>
            <h4 className='text-sm text-[tajawal] leading-7 text-italic text-left text-[#D14F0D]'>Never get stranded again!</h4>
            <h2 className='text-[28px] md:text-[32px] lg:text-[46px] text-[kanit] font-[700] leading-[54px] text-left text-[#D14F0D]'>Access the quickest, most-efficient Assistant near you.</h2>
          </div>

          <div className='flex bg-slate-100 mt-6 shadow-md w-full h-[50px] rounded-md' >
            <input className='bg-none w-[88%] h-full  outline-none p-4 rounded-l-md' type="text" />
            <button className='bg-[#D14F0D] color-white w-[12%] h-full rounded-r-md'></button>
          </div>

          <div className='flex space-x-3'>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <button className='border rounded-lg px-2 hover:bg-[#D14F0D] shadow-md hover:text-white text-[12px] font-[300]'>Web Design</button>
            <Link to='/' className='hidden md:block px-2 hover:text-[#D14F0D] text-[12px] font-[300] hover:font-[500]'>more</Link>
          </div>

        </div>
        
        <div class="hidden md:block relative w-[100%] h-[90vh]">

        </div>
      </section>

    </div>
  )
}

export default Hero
