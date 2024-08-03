import React from 'react';
import Image from '../assets/images.png';

export default function ImageSection() {
  return (
    <div className='flex justify-center items-center col-span-1 mx-auto w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-full'>
      <img src={Image} alt="My Image" className='w-full h-auto rounded-full' />
    </div>
  );
}
