import React from "react";
import Logo from "../assets/images/logo.png";
import { MdOutlineEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <div className="max-w-full mx-[50px] bg-white rounded-lg shadow-lg">
      <div className="flex">
        <div className="pt-5 ml-5 w-[350px]">
          <div className="w-[170px]">
            <img src={Logo} alt="logo" />
            <p className="font-normal text-base text-gray mt-5">We empower government, law enforcement agencies, banks, retailers, and enterprises to solve identification and verification challenges through biometrics.</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-5">
            <h3 className="font-medium text-[#222833] text-xl">Contact Us</h3>
            
            <div className="flex items-center mt-4">
              <MdLocationPin className="text-gray w-9 h-9" />
              <p className="font-normal text-base text-gray ml-2">Bulungan Business Center Jalan Bulungan No. 15, Jakarta Selatan, DKI Jakarta Indonesia-12130</p>
            </div>
            <div className="flex items-center mt-4">
              <MdOutlineEmail className="text-gray w-5 h-5" />
              <p className="font-normal text-base text-gray ml-2">cs@asliri.id</p>
            </div>
            <div className="flex items-center mt-4">
              <MdLocalPhone className="text-gray w-5 h-5" />
              <p className="font-normal text-base text-gray ml-2">+62 21 22775752</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-medium text-[#222833] text-xl">Industries</h3>
            <div className="">
              <p className="font-normal text-base text-gray mt-2 w-[360px] hover:text-black cursor-pointer">Bank</p>
              <p className="font-normal text-base text-gray mt-2 w-[360px] hover:text-black cursor-pointer">Fintech</p>
              <p className="font-normal text-base text-gray mt-2 w-[360px] hover:text-black cursor-pointer">Multifinance</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-medium text-[#222833] text-xl">Resources</h3>
            <div className="">
              <p className="font-normal text-base text-gray mt-2 w-[360px] hover:text-black cursor-pointer">Development</p>
              <p className="font-normal text-base text-gray mt-2 w-[360px] hover:text-black cursor-pointer">How To</p>
              <p className="font-normal text-base text-gray mt-2 w-[360px] hover:text-black cursor-pointer">Blog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
