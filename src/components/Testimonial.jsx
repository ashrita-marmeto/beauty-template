import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import product1 from '../assets/images/collection/product1.png';
import product2 from '../assets/images/collection/product2.png';

const slides = [
    {
      id: 1,
      quote: '“This LIP OIL Unleashes beauty and boosts confidence effortlessly.”',
      customer: 'Shraddha, Mumbai',
      product: 'Soft Pinch Tinted Lip Oil',
      image: product1,
      price: '₹3,500',
    },
    {
      id: 2,
      quote: '“Testimonial from client.”',
      customer: 'Client Name, City',
      product: 'Some beauty product',
      image: product2,
    },
    {
      id: 3,
      quote: '“Testimonial from client.”',
      customer: 'Client Name, City',
      product: 'Some other beauty product',
      image: product1,
    }
  ];

const Testimonial = () => {
  return (
    <section className="py-8 md:py-16 bg-[#F9E7EF]">
      <div className="container mx-auto text-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination
          breakpoints={{
           375: { spaceBetween: 40 }
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className='flex text-nowrap place-self-start ml-1 md:place-self-center lg:place-self-center items-center gap-3'>
                <div className='w-4 h-4 border-[#DC3C71] border-[1px] rotate-45 rounded'></div>
                <h2 className='font-tanker text-2xl font-outline-1 uppercase text-transparent'>Love from beauties</h2>
                <div className='w-4 h-4 bg-[#DC3C71] rotate-45 rounded'></div>
                <h2 className='font-tanker text-2xl uppercase text-[#DC3C71]'>Love from beauties</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className="w-[327px] lg:w-[426px] font-tanker text-[40px] uppercase tracking-[-0.02em]">{slide.quote}</h2>
                <p className='font-inter font-[500] text-[#6F6B68]'>{slide.customer}</p>
                </div>
                <div className='w-[283.77px] h-[104px] flex justify-center items-center rounded-xl p-2 bg-white gap-[14.62px]'>
                <img
                  src={slide.image}
                  alt={slide.product}
                  className="w-[88px] h-[88px] rounded-xl"
                />
                <div className='flex flex-col text-start'>
                <h3>{slide.product}</h3>
                <p className='text-xl font-bold'>{slide.price}</p>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;