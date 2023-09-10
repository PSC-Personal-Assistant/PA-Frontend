import React from 'react'
import Map from '../../assets/map.png'

const Locate = () => {
  return (
    <div className='contain py-14 flex flex-col md:flex-row '>
      <div className='flex-1'>
        <img className='w-full' src={Map} alt="" />
      </div>
      <div className='space-y-5 lg:space-y-20 flex-1 px-6 flex flex-col justify-center md:block'>
        <div className='space-y-4 hidden md:block'>
            <h6 className='font-[500] text-[18px] lg:text-[24px] '>Help is Close</h6>
            <p className='text-[12px] lg:text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident optio, ad consequuntur necessitatibus explicabo vero aspernatur eveniet voluptatem incidunt neque.  </p>
        </div>
        <button className='pryBtn text-[14px] lg:text-[14px]'>LOCATE AN ASSISTANT NEAR YOU</button>
      </div>
    </div>
  )
}

export default Locate
