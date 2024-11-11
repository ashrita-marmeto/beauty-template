import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import collection1 from '../assets/images/most-wanted/collection1.png';
import collection2 from '../assets/images/most-wanted/collection2.png';
import collection3 from '../assets/images/most-wanted/collection3.png';


const categories = [
    {
      id: 1,
      title: 'Always an Optimist 4-In-1 Mist',
      image: collection1,
      description: 'An ultra-fine, all-in-one face mist packed with skin-loving ingredients to hydrate, prime, set, and refresh for an uplifting glow-boost that lasts.',
      current_price: '₹2,000',
      compare_at_price: '₹2,400'
    },
    {
        id: 2,
        title: 'Positive Light Silky Touch Highlighter',
        image: collection2,
        description: 'An innovative powder highlighter that gives skin an instant glass-like sheen for an easy, natural-looking glow that lasts.',
        current_price: '₹2,000',
        compare_at_price: '₹2,400'
    },
    {
        id: 3,
        title: 'Perfect Strokes Universal Volumizing Mascara',
        image: collection3,
        description: 'Created for every lash type, this all-in-one mascara pairs a weightless, easy-to-build formula with a universal eye-hugging brush to lift, lengthen, curl, and volumize every lash from every angle.',
        current_price: '₹2,000',
        compare_at_price: '₹2,400'
    },
    {
        id: 4,
        title: 'Always an Optimist 4-In-1 Mist',
        image: collection1,
        description: 'An ultra-fine, all-in-one face mist packed with skin-loving ingredients to hydrate, prime, set, and refresh for an uplifting glow-boost that lasts.',
        current_price: '₹2,000',
        compare_at_price: '₹2,400'
    },
    {
      id: 5,
      title: 'Perfect Strokes Universal Volumizing Mascara',
      image: collection1,
      description: 'An ultra-fine, all-in-one face mist packed with skin-loving ingredients to hydrate, prime, set, and refresh for an uplifting glow-boost that lasts.',
      current_price: '₹2,000',
      compare_at_price: '₹2,400'
      },
  ];

const MostWanted = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-[40px] uppercase font-tanker tracking-[0.02em] mb-8">Beauty's most wanted</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.2}
          spaceBetween={30}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="w-full h-[545px] lg:h-[557px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover"
                />
                <div className="h-full flex-col bg-[#F9E7EF] p-4 text-start">
                  <h3 className="text-2xl font-tanker">{category.title}</h3>
                  <div className='flex-col space-y-2'>
                  <p className='text-sm font-inter'>{category.description}</p>
                  <p className="font-inter font-semibold">{category.current_price} <span className='font-regular line-through mx-4 text-[#808080]'>{category.compare_at_price}</span></p>
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

export default MostWanted;