import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import category1 from '../assets/images/category1.png';
import category2 from '../assets/images/category2.png';
import category3 from '../assets/images/category3.png';
import category4 from '../assets/images/category4.png';
import category5 from '../assets/images/category5.png';

const categories = [
  {
    id: 1,
    name: 'Lips',
    image: category1,
    link: '/shop/lips',
  },
  {
    id: 2,
    name: 'Eyes',
    image: category2,
    link: '/shop/eyes',
  },
  {
    id: 3,
    name: 'Face',
    image: category3,
    link: '/shop/face',
  },
  {
    id: 4,
    name: 'Nails',
    image: category4,
    link: '/shop/nails',
  },
  {
    id: 5,
    name: 'Skin',
    image: category5,
    link: '/shop/skin',
  },
];

const ShopByCategory = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="font-tanker text-[40px] tracking-[0.02em] uppercase mb-8">Shop by Category</h2>
        <Swiper
            slidesPerView={2.5}
            spaceBetween={12}
            breakpoints={{
                768: { slidesPerView: 4, spaceBetween: 30 },
                978: { slidesPerView: 5, spaceBetween: 20 },
            }}
                >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full lg:h-64 object-cover"
              />
              <div className="absolute bottom-3 left-4 w-fit bg-white p-4 rounded-lg px-8">
                <h3 className="font-tanker text-2xl tracking-[0.02em] uppercase">{category.name}</h3>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategory;
