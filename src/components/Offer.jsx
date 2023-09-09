import React from 'react'
import OfferImg from '../assets/offerImg.png'
import MarkIcon from '../assets/GrMk.png'
import { Link } from 'react-router-dom'

const Offer = () => {

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
    <div className='container flex my-10'>
      <div className='w-[100%] lg:w-[55%] flex items-center'>
        <div className='bg-[#3082A9] p-5 md:p-10 h-[90%] w-full'>
            <p className='text-white italic font-[100] text-[20px] md:text-[28px] lg:w-[80%]'>
                Offer Assistance <span className=' font-[400]'>to who Need Your</span> Help
            </p>

            {
                data.map((item, index)=>
                    <div className='flex gap-2 my-5'>
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

            <Link to='/'>
                <button className='secBtn my-4'>Give Assistant Now</button>
            </Link>

        </div>
      </div>
      <div className='hidden lg:block w-[45%] shadow-left'>
        <img className='w-full h-full' src={OfferImg} alt="Offer picture" />
      </div>
    </div>
  )
}

export default Offer
