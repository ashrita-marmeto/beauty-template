import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import product1 from '../assets/images/slideshow/heroImage1.png';
import product2 from '../assets/images/slideshow/heroImage2.png';

const categories = [
  {
    id: 1,
    title: 'How to style our lipsticks',
    tips: [
      'Prep lips with gentle exfoliation and moisturize with lip balm.',
      'Outline lips with liner, apply lipstick, blot, and layer for intensity.',
      'Clean edges, set with powder, add gloss or highlight for finishing touches.'
    ],
    name: 'Tinted Butter Balm',
    image: product1,
  },
  {
    id: 2,
    title: 'Unlock your beauty potential',
    name: 'Some beauty product',
    image: product2,
  },
  {
    id: 3,
    title: 'Unlock your beauty potential',
    name: 'Some other beauty product',
    image: product1,
  }
];

const StyleGuide = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="">
        <Swiper modules={[Pagination]} pagination>
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="flex flex-col lg:flex-row">
                <img
                  src={category.image}
                  alt={category.name}
                  className="lg:w-1/2"
                />
                <div className="lg:w-1/2 flex flex-col bg-[#F9E7EF] justify-center items-start p-10">
                  <h2 className="font-tanker text-[30px] uppercase tracking-[0.02em] text-[#4A1A29] mb-6">
                    {category.title}
                  </h2>
                  
                  <div className="space-y-8 mb-6">
                    {category.tips && category.tips.map((tip, index) => (
                      <div key={index} className="flex items-start relative mb-9">
                        <div className="flex items-center justify-center bg-[#DC3C71] text-white font-bold w-[30px] h-[30px] rounded-lg px-3 mr-4">
                          {index + 1}
                        </div>
                        <p className="text-[#6F6B68]">{tip}</p>
                        {index < 2 && (
                          <div className="absolute top-8 left-3.5 h-[42px] border-l-[1.5px] border-[#DC3C71] border-dashed my-1"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-[120px] bg-[#DC3C71] rounded-xl p-3 font-tanker text-white tracking-wider text-base text-nowrap">
                    Shop Lipsticks
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StyleGuide;
