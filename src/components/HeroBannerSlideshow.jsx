import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import product1 from '../assets/images/slideshow/heroImage1.png';
import product2 from '../assets/images/slideshow/heroImage2.png';

const categories = [
    {
      id: 1,
      title: 'Unlock your beauty potential',
      name: 'Tinted Butter Balm',
      image_1: product1,
      image_2: product2,
    },
    {
      id: 2,
      title: 'Unlock your beauty potential',
      name: 'Some beauty product',
      image_1: product2,
      image_2: product1,
    },
    {
      id: 3,
      title: 'Unlock your beauty potential',
      name: 'Some other beauty product',
      image_1: product1,
      image_2: product2,
    }
  ];

const HeroBannerSlideshow = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination
          breakpoints={{
           
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="flex flex-wrap">
                <img
                  src={category.image_1}
                  alt={category.name}
                  className="w-1/2 lg:w-1/3 order-1 lg:order-1"
                />
                <div className='w-1 flex flex-1 order-3 lg:order-2 flex-col justify-center items-center lg:w-1/3 bg-[#F9E7EF] gap-2'>
                <h2 className="w-[23rem] font-tanker text-[52px] uppercase tracking-[0.02em]">{category.title}</h2>
                <p className='font-inter text-[#6F6B68]'>{category.name}</p>
                <button className='bg-[#DC3C71] rounded-xl w-fit p-3 font-tanker text-white tracking-wider'>Shop Now</button>
                </div>
                <img 
                src={category.image_2}
                alt={category.name}
                className='w-1/2 lg:w-1/3 order-2 lg:order-3'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroBannerSlideshow;