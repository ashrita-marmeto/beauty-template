import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import brand1 from '../assets/images/brands/brand1.png';
import brand2 from '../assets/images/brands/brand2.png';
import brand3 from '../assets/images/brands/brand3.png';
import brand4 from '../assets/images/brands/brand4.png';

const BrandList = () => {
  const brandImages = [brand1, brand2, brand3, brand4];
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-[40px] uppercase font-tanker tracking-[0.02em] mb-6">As seen in</h2>
        
        <div className="hidden lg:block overflow-hidden">
          <div className="marquee flex">
            {brandImages.map((imageSrc, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageSrc}
                    alt={`Logo ${index + 1}`}
                    className="w-56 h-14 object-contain"
                  />
                </a>
              </div>
            ))}
            {brandImages.map((imageSrc, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageSrc}
                    alt={`Logo ${index + 1}`}
                    className="w-56 h-14 object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {isMobileOrTablet && (
          <Swiper
            spaceBetween={8}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
          >
            {brandImages.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageSrc}
                    alt={`Logo ${index + 1}`}
                    className="w-56 h-14 object-contain mx-8"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default BrandList;
