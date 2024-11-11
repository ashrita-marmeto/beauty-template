import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        compare_at_price: '₹2,400',
        badgeColor: 'bg-[#DC3C71]' 
    },
    {
        id: 2,
        name: 'Positive Light Liquid Luminizer',
        image: product2,
        link: '/shop/fashion',
        current_price: '₹2,000',
        badge: 'Bestseller',
        badgeColor: 'bg-[#DC923C]' 
    },
    {
        id: 3,
        name: 'Positive Light Liquid Luminizer',
        image: product3,
        link: '/shop/home-decor',
        current_price: '₹2,000'
    },
    {
        id: 4,
        name: 'Positive Light Liquid Luminizer',
        image: product4,
        link: '/shop/sports',
        current_price: '₹2,000'
    },
    {
        id: 5,
        name: 'Positive Light Liquid Luminizer',
        image: product4,
        link: '/shop/sports',
        current_price: '₹2,000'
    },
];

const FeaturedProducts = () => {
    return (
        <section className="py-8 md:py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <div className="flex items-center justify-between">
                    <h2 className="font-tanker text-[40px] uppercase mb-8 mx-auto tracking-[0.02em]">Featured Products</h2>
                    <button className="font-tanker text-[#DC3C71] tracking-[0.05em] uppercase pr-4">View More</button>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={12}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 12 },
                        768: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                >
                    {categories.map((category) => {
                        const currentPrice = parseInt(category.current_price.replace('₹', '').replace(',', ''));
                        const compareAtPrice = category.compare_at_price
                            ? parseInt(category.compare_at_price.replace('₹', '').replace(',', ''))
                            : null;
                        const discount = compareAtPrice
                            ? Math.round(((compareAtPrice - currentPrice) / compareAtPrice) * 100)
                            : null;

                        return (
                            <SwiperSlide key={category.id}>
                                <div className="relative rounded-lg overflow-hidden group">
                                    {discount ? (
                                        <div
                                            className={`w-[101px] lg:w-[168px] absolute top-3 lg:top-7 left-6 lg:left-4 px-3 py-1 transform -rotate-45 -translate-x-12 lg:-translate-x-14 font-inter text-white text-sm tracking-[-0.02em] rounded ${category.badgeColor} z-10`}
                                        >
                                            {`${discount}% Off`}
                                        </div>
                                    ) : category.badge ? (
                                        <div
                                            className={`w-[101px] lg:w-[168px] absolute top-3 lg:top-7 left-6 lg:left-4 px-3 py-1 transform -rotate-45 -translate-x-12 lg:-translate-x-14 font-inter text-white text-sm tracking-[-0.02em] rounded ${category.badgeColor} z-10`}
                                        >
                                            {category.badge}
                                        </div>
                                    ) : null}
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                                    />
                                    <div className="bg-[#F9E7EF] p-4 text-start text-nowrap">
                                        <h3 className="text-lg font-tanker tracking-[0.02em] mb-4">{category.name}</h3>
                                        <p className="text-lg font-inter font-semibold">
                                            {category.current_price}
                                            {category.compare_at_price && (
                                                <span className="text-base font-normal text-[#808080] line-through mx-4">
                                                    {category.compare_at_price}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedProducts;
