import React from 'react'

const Build = () => {
  return (
    <div className=' px-4 md:px-[2rem]' data-aos="fade-zoom-in" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div style={{backgroundImage:"url('/images/buildBG.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className='flex flex-col md:flex-row rounded-md py-10 px-5 md:p-10 items-center'>
            <div className='flex-1 space-y-4'>
                <p className='text-white font-[400] text-[18px] md:text-[28px] text-center md:text-left lg:w-[80%]'>
                    <span className='font-[100] italic'>Build</span> your <span className='font-[100] italic'>Profile</span> and get <span className='font-[100] italic'>Hired</span>
                </p>

                <div className='space-y-2'>
                    <div className='hidden md:flex item-center gap-1'>
                        <div className='flex items-center justify-center'>
                            <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                        </div>
                                
                        <div>
                            <p className='text-white text-[12px] lg:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at nulla numquam sapiente, totam dicta!</p> 
                        </div>
                                
                    </div>

                    <div className='hidden md:flex item-center gap-1'>
                        <div className='flex items-center justify-center'>
                            <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                        </div>
                                
                        <div>
                            <p className='text-white text-[12px] lg:text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde magnam hic, impedit blanditiis neque obcaecati!</p> 
                        </div>
                                
                    </div>                    
                </div>


            </div>
            <div className='flex-1 flex md:flex-col lg:flex-row mt-6 md:mt-0 md:px-3 md:pl-6 gap-3 md:gap-10 w-[80%] ' >
                <div className='w-[50%] md:w-[80%] lg:flex-1'>
                    <button className='bg-[#D14F0D] space-y-3  rounded-md p-2  md:text-left'>
                            <h6 className='text-[#fff]'>Build Profile</h6>

                            <p className='hidden md:block text-[12px] lg:text-[14px] text-white font-[100]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </button>                    
                </div>

                <div className='lg:flex-1 w-[50%] md:w-[80%]'>
                    <button className='  md:text-left border border-[#D14F0D] rounded-md p-2 space-y-3'>
                        <h6 className='text-[#fff]'>Post Project</h6>

                        <p className='hidden md:block font-[100] text-[#fff] text-[12px] lg:text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </button>                    
                </div>
 


            </div>
        </div>
      
    </div>
  )
}

export default Build
