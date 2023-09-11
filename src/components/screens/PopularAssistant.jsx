import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CR1 from '../../assets/carouselImg.png'
import { StarIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';

const PopularAssistant = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slider = useRef()

  return (
    <div className="contain mb-16">
      <div>
        <Slider ref={slider} {...settings} className="">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="px-2 relative">
              <div className="h-full w-full relative">
                {/* Image */}
                <img className="h-full w-full z-10" src={CR1} alt="" />
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-10"></div>
                <div className="absolute top-0 left-0 z-30 p-4 text-white flex flex-col h-full w-full justify-between ">
                  <div>
                    <p className="text-[#fff]">Michael</p>
                    <p className='font-[100] text-[12px]'>Writer</p>                    
                  </div>
                  <div>
                    <div className='flex justify-between items-center'>
                      <div className='flex space-x-2 items-center'>
                        <div>
                          <Icon as={StarIcon} w={8} h={8} color='red.500' />
                          <Icon as={StarIcon} w={8} h={8} color='red.500' />
                          <Icon as={StarIcon} w={8} h={8} color='red.500' />
                          <Icon as={StarIcon} w={8} h={8} color='red.500' />
                          <Icon as={StarIcon} w={8} h={8} color='red.500' />
                        </div>
                        <p className='text-[10px] font-[100]'>1120</p>

                      </div>
                      <p className='font-[100] text-[12px]'>Lagos</p>
                    </div>
            

                  </div>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularAssistant;
