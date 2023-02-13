import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function Navigation() {
  const [mouse, setMouse] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <>
      <div className="max-w-full mx-[50px] shadow-lg bg-white rounded-lg">
        <div className="flex items-center justify-between px-4 py-8">
          <div className="w-[170px] h-full">
            <img src={Logo} alt="logo" />
          </div>

          <div className="flex justify-between w-[500px]">
            <p onMouseEnter={() => setMouse(!mouse)} onMouseLeave={() => setMouse(mouse)} className="font-normal text-base text-black cursor-pointer hover:opacity-70">
              Product & Solutions
            </p>
            <div onClick={() => setToggle(!toggle)} className=" flex font-normal text-base text-black cursor-pointer hover:opacity-70">
              <p>Industries</p>
              <div className={toggle ? "rotate-180" : ""} onClick={() => setToggle(!toggle)}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div onClick={() => setToggle2(!toggle2)} className=" flex font-normal text-base text-black cursor-pointer hover:opacity-70">
              <p>Resources</p>
              <div className={toggle2 ? "rotate-180" : ""} onClick={() => setToggle2(!toggle2)}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div onClick={() => setToggle3(!toggle3)} className=" flex font-normal text-base text-black cursor-pointer hover:opacity-70">
              <p>Company</p>
              <div className={toggle3 ? "rotate-180" : ""} onClick={() => setToggle3(!toggle3)}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {mouse && (
        <div className="w-[120px] rounded-lg bg-white shadow-lg absolute right-[420px] top-20 z-50">
          <ul className="ml-3 font-normal text-black text-base cursor-pointer">
            <li className="hover:opacity-70">E-KYB</li>
            <li className="hover:opacity-70">E-KYC</li>
            <li className="hover:opacity-70">Digital Onboarding</li>
            <li className="hover:opacity-70">Holiday</li>
            <li className="hover:opacity-70">CAAS</li>
          </ul>
        </div>
      )}
      {toggle && (
        <ul className="w-28 font-normal text-gray-600 text-base cursor-pointer rounded-md bg-white z-50 shadow-lg leading-8 py-2 absolute right-[280px] top-20">
          <li className=" hover:text-gray hover:font-semibold ml-3">Bank</li>
          <li className=" hover:text-gray hover:font-semibold ml-3">Fintech</li>
          <li className=" hover:text-gray hover:font-semibold ml-3">Insurance</li>
        </ul>
      )}
      {toggle2 && (
        <ul className="w-28 font-normal text-gray-600 text-base cursor-pointer rounded-md bg-white z-50 shadow-lg leading-8 py-2 absolute right-[180px] top-20">
          <li className=" hover:text-gray hover:font-semibold ml-3">Development</li>
          <li className=" hover:text-gray hover:font-semibold ml-3">How To</li>
          <li className=" hover:text-gray hover:font-semibold ml-3">Blog</li>
        </ul>
      )}
      {toggle3 && (
        <ul className="w-28 font-normal text-gray-600 text-base cursor-pointer rounded-md bg-white z-50 shadow-lg leading-8 py-2 absolute right-[60px] top-20">
          <li className=" hover:text-gray hover:font-semibold ml-3">About Us</li>
          <li className=" hover:text-gray hover:font-semibold ml-3">Contact</li>
          <li className=" hover:text-gray hover:font-semibold ml-3">Careers</li>
        </ul>
      )}
    </>
  );
}
