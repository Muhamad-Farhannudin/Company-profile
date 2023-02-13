import React from "react";
// import imgHeader from "../assets/images/Header.png";
import Slider from '../components/Slider/app'

export default function Header() {
  return (
    <div className="max-w-full h-full mx-[50px] my-5 bg-white shadow-lg relative rounded-lg">
      {/* <div className="flex items-center">
        <div className="w-[460px] font-bold text-2xl text-red ml-[120px] py-[140px] z-20">
          <h3 className="text-2xl">WHY ASLI RI ?</h3>
          <h3 className="text-5xl">BIOMETRIC EKYC SIMPLIFIED!</h3>
          <p className="font-light text-black text-xl">We help companies manage and secure their digital transaction. </p>
          <button className="py-[9px] px-5 bg-red text-white font-medium text-2xl rounded-md mt-10">REQUEST A DEMO</button>
        </div>
        <div className="absolute w-[1360px]">
          <img src={imgHeader} alt="imgheader" />
        </div>
      </div> */}
      <Slider />
    </div>
  );
}
