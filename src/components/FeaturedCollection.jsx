import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import product1 from '../assets/images/collection/product1.png';
import product2 from '../assets/images/collection/product2.png';
import product3 from '../assets/images/collection/product3.png';
import product4 from '../assets/images/collection/product4.png';


const categories = [
    {
      id: 1,
      name: 'Soft Pinch Tinted Lip Oil',
      image: product1,
      link: '/shop/electronics',
      current_price: '₹2,000',
      compare_at_price: '₹2,400'
    },
    {
      id: 2,
      name: 'Positive Light Liquid Luminizer',
      image: product2,
      link: '/shop/fashion',
      current_price: '₹2,000',
    },
    {
      id: 3,
      name: 'Positive Light Liquid Luminizer',
      image: product3,
      link: '/shop/home-decor',
      current_price: '₹2,000',
    },
    {
      id: 4,
      name: 'Positive Light Liquid Luminizer',
      image: product4,
      link: '/shop/sports',
      current_price: '₹2,000',
    },
    {
        id: 5,
        name: 'Positive Light Liquid Luminizer',
        image: product4,
        link: '/shop/sports',
        current_price: '₹2,000',
      },
  ];

const FeaturedCollection = () => {
  const swiperRef = useRef(null)

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-[40px] uppercase font-tanker tracking-[0.02em] mb-8">New Hot Drop</h2>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-[315px] h-[362px] object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 w-full bg-[#F9E7EF] p-4 text-start">
                  <h3 className="text-2xl font-tanker">{category.name}</h3>
                  <p className="font-inter font-semibold">{category.current_price} <span className='font-regular line-through mx-4 text-[#808080]'>{category.compare_at_price}</span></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCollection;