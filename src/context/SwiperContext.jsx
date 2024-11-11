// import React, { createContext, useContext, useMemo } from 'react';
// import { Swiper } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// const SwiperContext = createContext(null);

// export const useSwiperContext = () => {
//     return useContext(SwiperContext);
// };

// export const SwiperProvider = ({ children, config }) => {
//     const swiperConfig = useMemo(() => config, [config]);

//     return (
//         <SwiperContext.Provider value={swiperConfig}>
//             {children}
//         </SwiperContext.Provider>
//     );
// };
