import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default function SliderApartments() {

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" style={{display:'block',width:'100%',height:'100%', objectFit:'cover'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt=""  style={{display:'block',width:'100%',height:'100%', objectFit:'cover'}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" style={{display:'block',width:'100%',height:'100%', objectFit:'cover'}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt=""  style={{display:'block',width:'100%',height:'100%', objectFit:'cover'}}/>
      </SwiperSlide>
    </Swiper>
  )
}
