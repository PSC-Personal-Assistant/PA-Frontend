import React from 'react'


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
  return (
    <section className="py-12 bg-[#12444A] bg-opacity-10 mt-[3rem]">
        {/* header */}
        <div  className='container'>
        <h3 className='text-[#12444A] text-[28px] font-[700]'>Get Literally any form of Assistant</h3>
        <p className='text-[#12444A] text-[12px]'>Browse Category</p>
          <div className='flex flex-wrap justify-between md:grid grid-col-2 md:grid-cols-3 lg:grid-cols-3 w-full py-3'>

            {
              data.map((item, index)=>
                <div key={index} className="bg-white shadow-md h-[80px] w-[150px] md:w-[200px] rounded-md my-2 p-2 border border-solid ">
                <div className='flex item-center gap-1'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full bg-[#393939] w-[10px] h-[10px]'></div>
                            </div>
                            
                            <div>
                               <h4 className='font-[500] text-[14px]'>{item.title}</h4> 
                            </div>
                            
                        </div>
                        <p className='text-[12px] text-[#363836]'>{item.desc}</p>
                </div>              
              )
            }



          </div>

        <p className='text-[12px]'>View More</p>
        </div>

    </section>
  )
}

export default Category
