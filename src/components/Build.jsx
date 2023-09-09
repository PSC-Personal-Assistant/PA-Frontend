import React from 'react'

const Build = () => {
  return (
    <div className=' px-4 md:px-[2rem]'>
        <div style={{backgroundImage:"url('/images/buildBG.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className='flex flex-col md:flex-row rounded-md py-10 px-5 md:p-10'>
            <div className='flex-1 '>
                <p className='text-white font-[400] text-[20px] md:text-[28px] text-center md:text-left md:w-[80%]'>
                    <span className='font-[100] italic'>Build</span> your <span className='font-[100] italic'>Profile</span> and get <span className='font-[100] italic'>Hired</span>
                </p>

                <div className='hidden md:flex item-center gap-1'>
                    <div className='flex items-center justify-center'>
                        <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                    </div>
                            
                    <div>
                        <h4 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at nulla numquam sapiente, totam dicta!</h4> 
                    </div>
                            
                </div>

                <div className='hidden md:flex item-center gap-1'>
                    <div className='flex items-center justify-center'>
                        <div className='rounded-full bg-[#D14F0D] w-[10px] h-[10px]'></div>
                    </div>
                            
                    <div>
                        <h4 className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde magnam hic, impedit blanditiis neque obcaecati!</h4> 
                    </div>
                            
                </div>
            </div>
            <div className='flex-1 flex gap-2 mt-6 md:mt-0' >
                <button className='bg-[#D14F0D] rounded-md p-2 flex-1 md:text-left'>
                    <h6 className='text-[#fff]'>Build Profile</h6>

                    <p className='hidden md:block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>
                <button className=' flex-1 md:text-left border rounded-md p-2'>
                    <h6>Post Project</h6>

                    <p className='hidden md:block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>

            </div>
        </div>
      
    </div>
  )
}

export default Build
