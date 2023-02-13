import React from "react";
import Feature1 from '../assets/images/feature/feature1.png'
import Feature2 from '../assets/images/feature/feature2.png'
import Feature3 from '../assets/images/feature/feature3.png'
import Feature4 from '../assets/images/feature/feature4.png'
import Feature5 from '../assets/images/feature/feature5.png'
import Feature6 from '../assets/images/feature/feature6.png'
import Feature7 from '../assets/images/feature/feature7.png'

export default function Feature() {
  return (
    <div className="max-w-full h-[120px] mx-[50px] bg-white rounded-lg shadow-lg mt-5">
      <div className="flex items-center justify-between mx-5 py-5">
        <div>
          <h3 className="font-bold text-red text-2xl">Our Valuable Partners</h3>
          <p className="font-semibold text-gray text-lg">All successful growing business is <span className="block">built on partnership and friendship.</span></p>
        </div>
        <div className="flex">
            <img src={Feature1} alt="feature1" className="w-[80px] h-[50px]"/>
            <img src={Feature2} alt="feature2" className="w-[80px] h-[50px]"/>
            <img src={Feature3} alt="feature3" className="w-[80px] h-[50px]"/>
            <img src={Feature4} alt="feature4" className="w-[80px] h-[50px]"/>
            <img src={Feature5} alt="feature5" className="w-[80px] h-[50px]"/>
            <img src={Feature6} alt="feature6" className="w-[80px] h-[50px]"/>
            <img src={Feature7} alt="feature7" className="w-[80px] h-[50px]"/>
        </div>
      </div>
    </div>
  );
}
