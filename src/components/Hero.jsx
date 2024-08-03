import React from 'react';
import ImageSection from './ImageSection';
import DetailsSection from './DetailsSection';

export default function Hero() {
  return (
    <div className='w-full min-h-[700px] py-8 bg-black' id="home">
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto h-full items-center px-4'>
        <ImageSection />
        <DetailsSection />
      </div>
    </div>
  );
}
