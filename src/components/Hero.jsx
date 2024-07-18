import React from 'react';
import Image from '../assets/images.png';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className='w-full min-h-screen py-8 bg-black'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto h-full items-center px-4'>
        <div className='col-span-1 mx-auto w-full sm:w-[300px] lg:w-[400px]'>
          <img src={Image} alt="My Image" className='w-full h-auto' />
        </div>
        <div className='col-span-2 px-5 flex flex-col justify-center'>
          <h1 className='text-white text-4xl sm:text-8xl font-extrabold'>
            <span className='text-primary block'>
              I am a
            </span>
            <span className='inline-block overflow-hidden max-w-full'>
              <TypeAnimation
                sequence={[
                  "Frontend Dev",
                  1000,
                  "Backend Dev ",
                  1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
                className='md:inline-block md:overflow-hidden'
              />
            </span>
          </h1>
          <p className='text-white text-lg sm:text-xl mt-6 sm:mt-10'>
            I am a passionate developer with experience in creating dynamic and responsive web applications.
            I specialize in both frontend and backend development, utilizing modern technologies to build
            seamless and efficient user experiences. With a strong background in JavaScript, React, and Node.js,
            I continuously strive to enhance my skills and stay updated with the latest industry trends.
          </p>
          <div className='mt-8 flex flex-col sm:flex-row gap-4'>
            <a href='/path/to/cv.pdf' download className='bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-300'>
              Download CV
            </a>
            <a href='#contact' className='bg-green-500 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition duration-300 mt-4 sm:mt-0'>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
