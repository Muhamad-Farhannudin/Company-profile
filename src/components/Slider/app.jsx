import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imgHeader from '../../assets/images/Header.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="flex items-center">
        <div className="w-[460px] font-bold text-2xl text-red ml-[120px] py-[140px] z-20">
          <h3 className="text-2xl">WHY ASLI RI ?</h3>
          <h3 className="text-5xl">BIOMETRIC EKYC SIMPLIFIED!</h3>
          <p className="font-light text-black text-xl">We help companies manage and secure their digital transaction. </p>
          <button className="py-[9px] px-5 bg-red text-white font-medium text-2xl rounded-md mt-10">REQUEST A DEMO</button>
        </div>
        <div className="absolute w-[1360px]">
          <img src={imgHeader} alt="imgheader" />
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center">
        <div className="w-[460px] font-bold text-2xl text-blue-500 ml-[120px] py-[140px] z-20">
          <h3 className="text-2xl">WHY ASLI RI ?</h3>
          <h3 className="text-5xl">BIOMETRIC EKYC SIMPLIFIED!</h3>
          <p className="font-light text-black text-xl">We help companies manage and secure their digital transaction. </p>
          <button className="py-[9px] px-5 bg-blue-500 text-white font-medium text-2xl rounded-md mt-10">REQUEST A DEMO</button>
        </div>
        <div className="absolute w-[1360px]">
          <img src={imgHeader} alt="imgheader" />
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center">
        <div className="w-[460px] font-bold text-2xl text-green-500 ml-[120px] py-[140px] z-20">
          <h3 className="text-2xl">WHY ASLI RI ?</h3>
          <h3 className="text-5xl">BIOMETRIC EKYC SIMPLIFIED!</h3>
          <p className="font-light text-black text-xl">We help companies manage and secure their digital transaction. </p>
          <button className="py-[9px] px-5 bg-green-500 text-white font-medium text-2xl rounded-md mt-10">REQUEST A DEMO</button>
        </div>
        <div className="absolute w-[1360px]">
          <img src={imgHeader} alt="imgheader" />
        </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
