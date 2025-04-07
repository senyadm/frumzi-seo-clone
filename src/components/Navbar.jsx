import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { FiChevronRight } from "react-icons/fi";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e1147] bg-opacity-90 backdrop-blur-md shadow-lg hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300">
      <nav className="conatiner mx-auto flex justify-between items-center py-2 px-4">
        <a href="/" className='flex items-center'>
          <img src={logo} alt="logo" className='w-[150px] h-[40px] cursor-pointer' />
        </a>
        <ul className='hidden lg:flex space-x-6 text-lg font-semibold text-white uppercase'>
          <li className='relative group cursor-pointer'>
            <a href="/" className='hover:text-[#2ac3ed] transition'>Frumzi Καζίνο</a>
            <span className='absolute w-0 h-1 bg-[#2ac3ed] left-0 bottom-0 transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative group cursor-pointer'>
            <a href="/app" className='hover:text-[#2ac3ed] transition'>App</a>
            <span className='absolute w-0 h-1 bg-[#2ac3ed] left-0 bottom-0 transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative group cursor-pointer'>
            <a href="/bonus" className='hover:text-[#2ac3ed] transition'>Bonus</a>
            <span className='absolute w-0 h-1 bg-[#2ac3ed] left-0 bottom-0 transition-all duration-300 group-hover:w-full'></span>
          </li>
        </ul>
        <button className='hidden lg:block bg-[#2ac3ed] text-white px-10 uppercase py-2 rounded-lg font-semibold hover:bg-[#1994c6] transition'><a href="https://frumzi11.com/gr/?mid=39601_730953&fluid=874c923c-8952-46f1-b5dd-e14c4a3ed5aa">Παίξτε τώρα</a></button>
        <button className='lg:hidden text-white z-[888]' onClick={toggleMenu}>
          {menu ? <RxCross1 size={35} /> : <HiMenu size={45} />}
        </button>
      </nav>
      <div className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-[#0e1147] z-40 transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"}`}>
      <div className='flex py-[10px] px-4 bg-[#0e1147] bg-opacity-90 backdrop-blur-md shadow-lg'>
        <a href="/" className='flex items-center gap-2 z-[888]'>
        <img src={logo} alt="logo" className='w-[150px] h-[40px] cursor-pointer' />
        </a>
      </div>
      
      <div className="flex flex-col justify-start items-center pt-[30px] h-full space-y-4 text-white">
      <ul className="text-lg font-semibold uppercase space-y-6 text-center w-full" onClick={toggleMenu}>
        <li className="hover:text-[#2ac3ed] cursor-pointer transition flex justify-between items-center px-4">
          <a href="/">Frumzi Καζίνο</a>
          <FiChevronRight className="w-5 h-5 text-[#2ac3ed]" />
        </li>
        <li className="hover:text-[#2ac3ed] cursor-pointer transition flex justify-between items-center px-4">
          <a href="/app">App</a>
          <FiChevronRight className="w-5 h-5 text-[#2ac3ed]" />
        </li>
        <li className="hover:text-[#2ac3ed] cursor-pointer transition flex justify-between items-center px-4">
          <a href="/bonus">Bonus</a>
          <FiChevronRight className="w-5 h-5 text-[#2ac3ed]" />
        </li>
      </ul>
      <div className='p-2 w-full'>
        <button onClick={toggleMenu} className=" text-white cursor-pointer uppercase transition flex justify-between items-center px-4 w-full font-bold bg-[#2ac3ed] py-3 rounded-lg">
          <a href="https://frumzi11.com/gr/?mid=39601_730953&fluid=874c923c-8952-46f1-b5dd-e14c4a3ed5aa">Συνδεθείτε</a>
          <FiChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      
    </div>
      </div>
    </header>
  );
}

export default Navbar;