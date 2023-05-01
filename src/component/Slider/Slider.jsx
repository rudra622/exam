import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'

function Slider() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="img/slider1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/slider2.jpg" alt="" />
        </SwiperSlide>
      <SwiperSlide>
      <img src="img/slider3.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default Slider