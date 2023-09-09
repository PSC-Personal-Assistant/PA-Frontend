import React from 'react'
import Nav from './common/Nav'
import { Link } from 'react-router-dom'
import PA1 from '../assets/PA2.jpg'
import Category from './common/Category'
import Footer from './common/Footer'
import Vector from '../assets/hero-shape.png'

const Hero = () => {
  return (
    <div className='container  relative h-[90vh] lg:h-[100vh]'>
      <img className='z-[-1] absolute bottom-0 left-0 h-[60%]' src={Vector} alt="hero-shape" />         
      <section className='z-[999] h-full w-full  flex justify-center items-end '>
        {/* hero text */}



        <div className='flex flex-col gap-4 w-full md:w-[80%] h-full items-start justify-center'>
          <div className=''>
            <h4 className='text-sm text-[tajawal] leading-7 text-italic text-left text-[#D14F0D]'>Never get stranded again!</h4>
            <h2 className='text-[28px] md:text-[46px] text-[kanit] font-[700] leading-[54px] text-left text-[#D14F0D]'>Access the quickest, most-efficient Assistant near you.</h2>
          </div>

          <div className='flex bg-slate-100 gap-4 mt-6 shadow-md w-full h-[50px]' >
            <input className='bg-none w-[95%] h-full outline-none' type="text" />
            <button className='bg-[#D14F0D] color-white w-[5%] h-full'></button>
          </div>

        </div>
        
        <div class="hidden md:block relative w-[100%] h-[90vh]">

        </div>
      </section>

    </div>
  )
}

export default Hero
