import { Search2Icon } from '@chakra-ui/icons'
import Aos from 'aos'
import React, { useEffect } from 'react'


const data = [
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    url:'',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  },
]



const Category = () => {

  useEffect(()=>{
    Aos.init({duration:1500})
})

  return (
    <section data-aos="fade-zoom-in" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="600" className="py-12 bg-[#12444A] bg-opacity-10 mt-[3rem]">
        {/* header */}
        <div  className='contain'>
        <h3 className='text-[#12444A] text-[28px] font-[700]'>Get Literally any form of Assistant</h3>
        <p className='text-[#12444A] text-[12px]'>Browse Category</p>
        <div className='flex bg-slate-100 mt-6 shadow-md md:w-[60%] lg:w-[40%] h-[50px] rounded-md' >
            <input className='bg-none w-[88%] h-full  outline-none p-4 rounded-l-md' placeholder='Search Category' type="text" />
            <button className='bg-[#D14F0D] text-[#fff] text-opacity-30 color-white w-[12%] h-full rounded-r-md'><Search2Icon/></button>
          </div>
          <div className='flex flex-wrap justify-between md:grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 w-full py-3'>

            {
              data.map((item, index)=>
                <button key={index} className="bg-white shadow-md text-left hover:bg-[#12444A] text-[12px] text-[#363836] hover:text-[#fff] h-[80px] w-[9rem] sm:w-[12rem] md:w-[200px] rounded-md my-2 p-2 border border-solid ">
                  <div className='flex item-center gap-1'>
                              <div className='flex items-center justify-center'>
                                  <div className='rounded-full bg-[#393939] w-[10px] h-[10px]'></div>
                              </div>
                              
                              <div>
                                <h4 className='font-[500] text-[14px]'>{item.title}</h4> 
                              </div>
                              
                  </div>
                  {item.desc}
                </button>              
              )
            }



          </div>

        <p className='text-[12px]'>View More</p>
        </div>

    </section>
  )
}

export default Category
