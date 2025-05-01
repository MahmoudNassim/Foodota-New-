import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import one from "../../assets/images/01.png";
import two from "../../assets/images/02.png";
import three from "../../assets/images/03.png";
import four from "../../assets/images/04.png";
import five from "../../assets/images/05.png";
import six from "../../assets/images/06.png";

export default function HomeSlides() {
  return (
    <div className="max-w-7xl mx-auto container w-full mt-20 mb-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
