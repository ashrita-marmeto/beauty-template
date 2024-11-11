import './App.css';

// import { SwiperProvider } from './context/SwiperContext';

import AboutUs from './components/AboutUs';
import BrandList from './components/BrandList';
import CouponCards from './components/CouponCards';
import FeaturedCollection from './components/FeaturedCollection';
import FeaturedProducts from './components/FeaturedProducts';
import HeroBannerSlideshow from './components/HeroBannerSlideshow';
import LogoList from './components/LogoList';
import MostWanted from './components/MostWanted';
import ProductDescription from './components/ProductDescription';
import ShopByCategory from './components/ShopByCategory';
import StyleGuide from './components/StyleGuide';
import Testimonial from './components/Testimonial';
import VideoCards from './components/VideoTutorial';

function App() {

//   const swiperConfig = {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     pagination: { clickable: true },
//     navigation: true,
// };

  return (
    // <SwiperProvider config={swiperConfig}>
    <div>
    <ProductDescription />
    <HeroBannerSlideshow />
    <CouponCards />
    <FeaturedProducts />
    <ShopByCategory />
    <LogoList />
    <FeaturedCollection />
    <VideoCards />
    <AboutUs />
    <MostWanted />
    <StyleGuide />
    <BrandList />
    <Testimonial />
    </div>
    // </SwiperProvider>
  );
}

export default App;
