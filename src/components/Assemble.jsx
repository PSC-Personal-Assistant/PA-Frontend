import React from 'react'

const Assemble = () => {
  return (
    <div className='px-[1rem] md:px-[2rem]'>
        <div className='bg-[#1E1A1A] flex rounded-md p-4 md:p-10'>
            <div className='hidden md:block flex-1'></div>
            <div className='flex-1'>
                <h3 className='text-[#FFF] font-[700] text-[20px] md:text-[28px]'>
                    Assembly a <span className='text-[#D14F0D]'>Team</span> of <span className='text-[#D14F0D]'>Experts</span> to <span className='text-[#D14F0D]'></span>Work on <span className='text-[#D14F0D]'>Your Project</span>
                </h3>
                <p className='text-white text-[12px] md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae ratione nostrum quas maiores magni soluta iure recusandae modi quisquam.</p>

                <button className='pryBtn text-[12px] md:text-[16px]'>Assemble Team</button>
            </div>
        </div>
      
    </div>
  )
}

export default Assemble
