import React from 'react'
import MarkIcon from '../../assets/OrMk.png'

const Assemble = () => {

  const data = [
    {
      url:'',
      title: 'Lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      url:'',
      title: 'Lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      url:'',
      title: 'Lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ]

  return (
    <div className='px-[1rem] md:px-[2rem]'>
        <div className='bg-[#1E1A1A] flex rounded-md p-4 md:p-10'>
            <div className='hidden md:block flex-1'></div>
            <div className='flex-1 space-y-4'>
                <h3 className='text-[#FFF] font-[700] text-[20px] md:text-[28px] lg:w-[80%] '>
                    Assembly a <span className='text-[#D14F0D]'>Team</span> of <span className='text-[#D14F0D]'>Experts</span> to <span className='text-[#D14F0D]'></span>Work on <span className='text-[#D14F0D]'>Your Project</span>
                </h3>
                <p className='text-white text-[12px] md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae ratione nostrum quas maiores magni soluta iure recusandae modi quisquam.</p>

                {
                    data.map((item, index)=>
                        <div key={index} className='flex gap-2 my-5'>
                            <div>
                                <img src={MarkIcon} alt="icon" />                            
                            </div>

                            <div>
                                <h6 className='text-white text-[14px] font-[500]'>{item.title}</h6>
                                <p className='text-white text-[12px]'>{item.desc}</p>
                            </div>
                        </div>
                    )
                }

                <button className='pryBtn text-[16px] md:text-[16px]'>Assemble Team</button>
            </div>
        </div>
      
    </div>
  )
}

export default Assemble
