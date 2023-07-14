import React from 'react'
import Nav from './common/Nav'
import { Link } from 'react-router-dom'
import PA1 from '../assets/PA2.jpg'
import Category from './common/Category'

const Home = () => {
  return (
    <div>
      <Nav />

      <section className='pl-[5rem] h-[100vh] w-full bg-primaryColor flex justify-center items-end'>
        {/* hero text */}

        <div className='flex flex-col gap-4 w-[80%] h-full items-start justify-center'>
          <div className='w-[]'>
            <h4 className='text-sm text-[tajawal] leading-7 text-italic text-left text-white'>Never get stranded again!</h4>
            <h2 className='text-[46px] text-[kanit] font-[700] leading-[54px] text-left text-white'>Access the quickest, most-efficient Assistant near you.</h2>
          </div>

          <div className='flex gap-4 mt-6'>
            <Link className='border border-solid rounded-[8px] px-4 py-2 text-[tajawal] bg-white shadow-secondaryColor shadow-xl font-[600] text-primaryColor text-[16px]'>Offer Assistant</Link>
            <Link className='border border-solid rounded-[8px] px-4 py-2 font-[600] text-white text-[16px] text-[tajawal]'>Get Assistant</Link>
          </div>

        </div>
        
        <div class="relative w-[100%] h-[90vh]">
          <div class="absolute inset-0 bg-gradient-to-l from-transparent to-[#6527BE] blend-mode-overlay"></div>
          <img src={PA1} alt="Your Image" class="w-full h-full object-cover"/>
        </div>
      </section>

      <Category/>
    </div>
  )
}

export default Home
