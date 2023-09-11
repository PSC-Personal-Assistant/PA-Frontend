import React, { useEffect } from 'react'
import Dual from '../../assets/dual-img.png'
import Aos from 'aos'

const Cat = () => {

    useEffect(()=>{
        Aos.init({duration:1500})
    })

  return (
    <div className='contain py-[5rem]'>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-6'>
            <div className='flex-1' data-aos="flip-left" data-aos-offset="100" data-aos-easing="ease-in-sine">
                <img className='w-full' src={Dual} alt="" />
            </div>
            <div className='flex-1 lg:pl-12'>
                <div className='flex flex-col md:flex-row 2xl:flex-col  w-full gap-5'>
                    {/*  */}
                    <div data-aos="fade-zoom-in" data-aos-delay="200" data-aos-offset="100" data-aos-easing="ease-in" data-aos-duration='600' className='rounded-md shadow-md p-3 w-full md:w-[40%] 2xl:w-[60%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
                        <div className='flex item-center gap-1'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                            </div>
                            
                            <div>
                               <h4 className='font-[500]'>Hire An Assistant</h4> 
                            </div>
                            
                        </div>
                        <p className='text-[12px] text-[#393939]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, inventore!</p>
                    </div>
                    <div data-aos="fade-zoom-in" data-aos-delay="400" data-aos-offset="100" data-aos-easing="ease-in" data-aos-duration='600' className='rounded-md shadow-md p-3 w-full md:w-[60%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
                        <div className='flex item-center gap-1'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                            </div>
                            
                            <div>
                               <h4 className='font-[500]'>Hire An Assistant</h4> 
                            </div>
                            
                        </div>
                        <p className='text-[12px] text-[#393939]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, inventore!</p>
                    </div>

                </div>
                <div className='flex flex-col md:flex-row w-full 2xl:flex-col gap-5 mt-5'>
                    {/*  */}
                    <div data-aos="fade-zoom-in" data-aos-delay="500" data-aos-offset="100" data-aos-easing="ease-in" data-aos-duration='600' className='rounded-md shadow-md p-3 md:w-[60%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
                        <div className='flex item-center gap-1'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                            </div>
                            
                            <div>
                               <h4 className='font-[500]'>Hire An Assistant</h4> 
                            </div>
                            
                        </div>
                        <p className='text-[12px] text-[#393939]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, inventore!</p>
                    </div>
                    <div data-aos="fade-zoom-in" data-aos-delay="600" data-aos-offset="100" data-aos-easing="ease-in" data-aos-duration='600' className='rounded-md shadow-md p-3 md:w-[40%] 2xl:w-[60%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
                        <div className='flex item-center gap-1'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                            </div>
                            
                            <div>
                               <h4 className='font-[500]'>Hire An Assistant</h4> 
                            </div>
                            
                        </div>
                        <p className='text-[12px] text-[#393939]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, inventore!</p>
                    </div>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Cat
