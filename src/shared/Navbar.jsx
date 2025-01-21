"use client"
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import logo from '../assets/logo.png'
import Manu from "@/components/ui/manu/Manu";
import Button from "@/components/ui/Button";
import MobileManu from "@/components/ui/manu/MobileManu";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="#nav" className="h-[67px] w-full text-black md:py-16 flex items-center relative">
      <div className="md:w-[80%] w-full mx-auto px-4 md:px-0 lg:px-0">
        <div className="flex items-center justify-between h-[67px]">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold flex gap-3 items-center justify-center">
              <Image src={logo} alt="logo" width={45} height={45}></Image>
              <h1 className="md:text-[45px] text-[35px] md:block hidden"><span className="font-bold text-[#000000f0]">M</span><span className="font-normal text-[#8a8a8a]">umair</span></h1>
            </a>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-8 items-center">
            <Manu manuName={'Home'} address={'#nav'}/>
            <Manu manuName={'About Me'} address={'#about-me'}/>
            <Manu manuName={'Services'} address={'#service'}/>
            <Manu manuName={'Project'} address={'#project'}/>
            <Manu manuName={'Testimonials'} address={'#testimonials'}/>
            <Manu manuName={'Contact'} address={'#contact'}/>
          </div>

          {/* Right-side buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Button name={'Downlaod CV'} address={'#login'}/>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <GiHamburgerMenu className="text-black/90 text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ff9654] pb-5 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white/85 text-xl z-20">
        <MobileManu manuName={'Home'} address={'#'}/>
        <MobileManu manuName={'About Me'} address={'#about-me'}/>
        <MobileManu manuName={'Services'} address={'#service'}/>
        <MobileManu manuName={'Projects'} address={'#project'}/>
        <MobileManu manuName={'Testimonials'} address={'#testimonials'}/>
        <MobileManu manuName={'Contact'} address={'#contact'}/>
        
        <div className="mt-2 px-4">
          <Button address={'#'} name={'Downlaod CV'}/>
        </div>
      </div>
      
      )}
    </nav>
  );
};

export default Navbar;




{/* <nav className="bg-[#1B0C4D] h-[80px] w-full">

</nav> */}