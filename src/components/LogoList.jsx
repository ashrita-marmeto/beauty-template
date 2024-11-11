import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';

const LogoList = () => {
  const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6];
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
        <h2 className="text-[40px] uppercase font-tanker tracking-[0.02em] mb-4">We are certified</h2>
        
        <div className="hidden lg:grid grid-cols-4 md:grid-cols-6">
          {logoImages.map((imageSrc, index) => (
            <div key={index} className="flex flex-col items-center">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={imageSrc}
                  alt={`Logo ${index + 1}`}
                  className="w-16 h-16 md:w-32 md:h-32 object-cover"
                />
              </a>
            </div>
          ))}
        </div>

        {isMobileOrTablet && (
          <Swiper
            slidesPerView={4}
            breakpoints={{
                768: { slidesPerView: 5 },
            }}
          >
            {logoImages.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageSrc}
                    alt={`Logo ${index + 1}`}
                    className="w-16 h-16 object-cover mx-auto"
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

export default LogoList;
