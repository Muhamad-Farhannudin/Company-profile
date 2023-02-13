import React from "react";
import img1 from "../assets/images/product1.png";
import img2 from "../assets/images/product2.png";
import img3 from "../assets/images/product3.png";
import img4 from "../assets/images/product4.png";

export default function Product() {
  return (
    <div className="max-w-full mx-[50px] bg-gray-200 shadow-lg rounded-lg ">
      <div className="text-center">
        <button className="bg-red text-center font-extrabold text-white px-5 py-2 rounded-2xl text-3xl mt-4">Product Price List</button>
      </div>
      <div className="flex pb-7">
        <div className="ml-4 pt-5">
          <div className="w-[260px] h-[290px] bg-white rounded-2xl shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-light text-black text-lg text-center line-through">$ 60,00</h1>
              <h1 className="font-bold text-black text-3xl text-center cursor-pointer animate-bounce">$ 29,00</h1>
              <img src={img1} alt="product1" className="w-[76px] h-[76px]" />
              <h3 className="font-bold text-black text-base">E-KYB</h3>
              <p className="font-normal text-sm mt-3">Company background checking accurately and efficiently prevents making risky decisions, ensuring your business's safety.</p>
            </div>
          </div>
        </div>
        <div className="ml-4 pt-5">
          <div className="w-[260px] h-[290px] bg-white rounded-xl shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-light text-black text-lg text-center line-through">$ 49,00</h1>
              <h1 className="font-bold text-black text-3xl text-center cursor-pointer animate-bounce">$ 27,00</h1>
              <img src={img1} alt="product2" className="w-[76px] h-[76px]" />
              <h3 className="font-bold text-black text-base">E-KYC</h3>
              <p className="font-normal text-sm mt-3">Seamless and accurate identity prooﬁng utilizing biometric part and government agencies database.</p>
            </div>
          </div>
        </div>
        <div className="ml-4 pt-5">
          <div className="w-[260px] h-[290px] bg-white rounded-xl shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-light text-black text-lg text-center line-through">$ 78,00</h1>
              <h1 className="font-bold text-black text-3xl text-center cursor-pointer animate-bounce">$ 43,00</h1>
              <img src={img2} alt="product1" className="w-[76px] h-[76px]" />
              <h3 className="font-bold text-black text-base">Digital Onboarding</h3>
              <p className="font-normal text-sm mt-3">Onboard clients digitally using an integrated white-label services application containing OCR, Liveness Detection and Biometric e-KYC Veriﬁcation solution.</p>
            </div>
          </div>
        </div>
        <div className="ml-4 pt-5">
          <div className="w-[260px] h-[290px] bg-white rounded-xl shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-light text-black text-lg text-center line-through">$ 34,00</h1>
              <h1 className="font-bold text-black text-3xl text-center cursor-pointer animate-bounce">$ 18,00</h1>
              <img src={img3} alt="product3" className="w-[76px] h-[76px]" />
              <h3 className="font-bold text-black text-base">Holiday</h3>
              <p className="font-normal text-sm mt-3">Accurately Analyze, Identify and Verify in seconds over billions of Biometric Data records; providing real-time active assistance in preventing fraud attempts.</p>
            </div>
          </div>
        </div>
        <div className="ml-4 pt-5">
          <div className="w-[260px] h-[290px] bg-white rounded-xl shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-light text-black text-lg text-center line-through">$ 55,00</h1>
              <h1 className="font-bold text-black text-3xl text-center cursor-pointer animate-bounce">$ 23,00</h1>
              <img src={img4} alt="product4" className="w-[76px] h-[76px]" />
              <h3 className="font-bold text-black text-base">CAAS</h3>
              <p className="font-normal text-sm mt-3">Automating the process of E-KYC verification, payment behavior, and profile grading in less than 7 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
