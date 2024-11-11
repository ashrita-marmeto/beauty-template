import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import { useSwiperContext } from '../context/SwiperContext';

const coupons = [
  {
    id: 1,
    heading: "25% off on FACE makeup",
    text: "25% off on a purchase of minimum Rs. 500. Use code DIWALI25",
    code: "DIWALI25"
  },
  {
    id: 2,
    heading: "15% off on Lip Products",
    text: "15% off on a purchase of minimum Rs. 300. Use code LIPS15",
    code: "LIPS15"
  },
  {
    id: 3,
    heading: "30% off on Eye Products",
    text: "30% off on a purchase of minimum Rs. 1000. Use code EYES30",
    code: "EYES30"
  }
];

const CouponCards = () => {
  // const swiperConfig = useSwiperContext();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 10 }, 
            1024: { slidesPerView: 3, spaceBetween: 10 } 
         
          }}
          // {...swiperConfig}
        >
          {coupons.map((coupon) => (
            <SwiperSlide key={coupon.id}>
              <div className="bg-[#F3CEDF] mx-3 p-4 rounded-xl text-left">
                <h3 className="font-tanker text-xl mb-2 text-[#2B0814]">{coupon.heading}</h3>
                <div className="flex gap-2.5 items-center">
                <p className="font-inter text-[#2B0814] mb-4 text-sm text-wrap">{coupon.text}</p>
                <button
                  onClick={() => copyCode(coupon.code)}
                  className="px-2 bg-[#FFFFFF99] text-[#00000099] text-sm rounded-lg w-fit h-8 text-nowrap
                  "
                >
                  Copy Code
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

export default CouponCards;
