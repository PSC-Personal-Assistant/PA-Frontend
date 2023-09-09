import React from 'react'
import Dual from '../assets/dual-img.png'

const Cat = () => {
  return (
    <div className='container py-[5rem]'>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
            <div className='flex-1'>
                <img src={Dual} alt="" />
            </div>
            <div className='flex-1 md:pl-12'>
                <div className='flex flex-col md:flex-row w-full gap-5'>
                    {/*  */}
                    <div className='rounded-md shadow-md p-3 w-full md:w-[40%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
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
                    <div className='rounded-md shadow-md p-3 w-full md:w-[60%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
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
                <div className='flex flex-col md:flex-row w-full gap-5 mt-5'>
                    {/*  */}
                    <div className='rounded-md shadow-md p-3 md:w-[60%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
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
                    <div className='rounded-md shadow-md p-3 md:w-[40%] bg-[#F9FDFF] hover:border hover:border-[#D14F0D]'>
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
