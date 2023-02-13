import React from "react";
import imgTesti from "../assets/images/testi.png";

export default function Testimonial() {
  return (
    <div className="max-w-full mx-[50px] bg-stone-200 rounded-lg shadow-lg mt-5">
      <div className="text-center">
        <button className="bg-red text-center font-extrabold text-white px-5 py-2 rounded-2xl text-3xl mt-4">Testimonials</button>
      </div>
      <div className="flex">
        <div className="ml-4 pt-5 pb-10">
          <div className="w-[440px] rounded-2xl bg-white shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-normal text-gray text-base text-center">
                Layanan E-KYC ASLI RI dapat diandalkan dan akurat ditambah tim support ASLI RI yang juga profesional. Kami berharap ASLI RI terus menginovasikan lebih banyak solusi yang mendukung keamanan pinjam-meminjam.
              </h1>
              <div className="flex items-center mt-4">
                <img src={imgTesti} alt="testi" className="w-[60px] h-[60px]" />
                <div className="flex flex-col ml-4">
                  <h1 className="font-bold text-xl text-black">Nicole Oesman</h1>
                  <p className="font-normal text-base text-gray">
                    VP Credit Risk at <span className="font-extrabold">Tokopedia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4 pt-5 pb-10">
          <div className="w-[440px] rounded-2xl bg-white shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-normal text-gray text-base text-center">
                Layanan E-KYC ASLI RI dapat diandalkan dan akurat ditambah tim support ASLI RI yang juga profesional. Kami berharap ASLI RI terus menginovasikan lebih banyak solusi yang mendukung keamanan pinjam-meminjam.
              </h1>
              <div className="flex items-center mt-4">
                <img src={imgTesti} alt="testi" className="w-[60px] h-[60px]" />
                <div className="flex flex-col ml-4">
                  <h1 className="font-bold text-xl text-black">Nicole Oesman</h1>
                  <p className="font-normal text-base text-gray">
                    VP Credit Risk at <span className="font-extrabold">Tokopedia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4 pt-5 pb-10">
          <div className="w-[440px] rounded-2xl bg-white shadow-lg">
            <div className="mx-3 py-2">
              <h1 className="font-normal text-gray text-base text-center">
                Layanan E-KYC ASLI RI dapat diandalkan dan akurat ditambah tim support ASLI RI yang juga profesional. Kami berharap ASLI RI terus menginovasikan lebih banyak solusi yang mendukung keamanan pinjam-meminjam.
              </h1>
              <div className="flex items-center mt-4">
                <img src={imgTesti} alt="testi" className="w-[60px] h-[60px]" />
                <div className="flex flex-col ml-4">
                  <h1 className="font-bold text-xl text-black">Nicole Oesman</h1>
                  <p className="font-normal text-base text-gray">
                    VP Credit Risk at <span className="font-extrabold">Tokopedia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
