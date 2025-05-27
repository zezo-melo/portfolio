import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import * as Banners from '../Banners';

const Carousel = () => {
  // const bannerComponents = Object.values(Banners);
  const bannerComponents = [Banners.Banner1]

  return (
    <div className="w-full mx-auto relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {bannerComponents.map((BannerComponent, index) => (
          <SwiperSlide key={index}>
              <div className="w-full min-h-[100vh] pt-20 flex items-start md:items-center">

              <BannerComponent />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
