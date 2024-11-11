import React from 'react';

import slide1 from '../assets/images/slideshow/heroImage1.png'
const AboutUs = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="mx-auto">
              <div className="flex flex-col lg:flex-row">
                <div className='py-6 px-4 lg:w-1/2 lg:p-[118px] flex order-2 lg:order-1 flex-col justify-center place-items-start bg-[#F9E7EF] gap-2 text-left'>
                <h2 className="font-tanker text-[52px] uppercase tracking-[0.02em]">About Us</h2>
                <p className='font-inter text-[#6F6B68]'>Rare Beauty is breaking down unrealistic standards of perfection. ​This is makeup made to feel good in, without hiding what makes you unique—because Rare Beauty is not about being someone else, but being who you are.</p>
                </div>
                <img 
                src={slide1}
                alt=''
                className='lg:w-1/2 order-1 lg:order-2'
                />
              </div>
      </div>
    </section>
  );
};

export default AboutUs;