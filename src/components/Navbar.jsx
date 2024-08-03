import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed  w-full z-50'>
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center px-4">
    <h1 className='text-3xl font-bold text-primary ml-4'>SAHAL VV</h1>
        <ul className='hidden md:flex'>
          <li className='p-5'><a href="#about">About</a></li>
          <li className='p-5'><a href="#skills">Skills</a></li>
          <li className='p-5'><a href="#project">Project</a></li>
          <li className='p-5'><a href="#contact">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden mr-6 cursor-pointer'>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={`fixed h-full top-0 left-0 w-[60%] bg-[#202121] p-4 transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}>
          <h1 className='text-2xl font-bold text-primary mb-8'>SAHAL VV</h1>
          <ul className='space-y-6'>
            <li onClick={handleNav} className='p-2 text-lg hover:text-white transition duration-300'><a href="#home">Home</a></li>
            <li onClick={handleNav} className='p-2 text-lg hover:text-white transition duration-300'><a href="#about">About</a></li>
            <li onClick={handleNav} className='p-2 text-lg hover:text-white transition duration-300'><a href="#skills">Skills</a></li>
            <li onClick={handleNav} className='p-2 text-lg hover:text-white transition duration-300'><a href="#project">Project</a></li>
            <li onClick={handleNav} className='p-2 text-lg hover:text-white transition duration-300'><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
