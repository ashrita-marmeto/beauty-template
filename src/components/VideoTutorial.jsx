import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaPlay, FaPause } from 'react-icons/fa'; 

import product1 from '../assets/images/collection/product1.png';
import product2 from '../assets/images/collection/product2.png';
import thumbnail1 from '../assets/images/video-thumbnail/thumbnail1.png'

const videos = [
  {
    id: 1,
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    product: "Some Product Name",
    image: product2,
    price: "₹3,000"
  },
  {
    id: 2,
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: thumbnail1,
    product: "Perfect Strokes Matte Liquid Liner",
    image: product1,
    price: "₹3,500"
  },
  {
    id: 3,
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    product: "Some Other Product Name",
    image: product1,
    price: "₹3,000"
  }
];

const VideoCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const handlePlayPause = (index) => {
    const videoElement = videoRefs.current[index];

    if (videoElement) {
      if (playingVideo === index) {
        videoElement.pause();
        setPlayingVideo(null); 
      } else {
       
        videoRefs.current.forEach((video, i) => {
          if (i !== index && video) {
            video.pause();
          }
        });

        videoElement.play();
        setPlayingVideo(index); 
      }
    }
  };

  if (!isMobile) return null; 

  return (
    <section className="py-8 bg-gray-100">
      <div className="container text-center">
        <h2 className="text-[40px] uppercase font-tanker tracking-[0.02em] mb-6 text-[#4A1A29]">Get Ready With Us</h2>
        <Swiper
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.2}
          initialSlide={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 }
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <div className="flex flex-col items-center">
                <div className="relative w-[322px] h-[624px] rounded-xl overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)} 
                    className="w-full h-full object-cover rounded-xl"
                    poster={video.thumbnail}
                    muted
                  >
                    <source src={video.url} type="video/mp4" />
                  </video>
                  
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
                    onClick={() => handlePlayPause(index)}
                  >
                    {playingVideo === index ? (
                      <FaPause className="text-white text-4xl" />
                    ) : (
                      <FaPlay className="text-white text-4xl" />
                    )}
                  </div>
                </div>
                <div className="relative -top-16 mt-4 w-[283.77px] h-[104px] flex items-center rounded-xl p-2 bg-white shadow-lg">
                  <img
                    src={video.image}
                    alt={video.product}
                    className="w-[88px] h-[88px] rounded-xl object-cover"
                  />
                  <div className="ml-4 text-left gap-4">
                    <h3 className="text-sm font-inter">{video.product}</h3>
                    <p className="text-lg font-inter font-semibold">{video.price}</p>
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

export default VideoCards;
