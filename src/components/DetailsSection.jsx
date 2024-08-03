import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function DetailsSection() {
  return (
    <div className='col-span-1 lg:col-span-2 px-5 flex flex-col justify-center'>
      <h2 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold'>
        <span className='text-primary block mb-2 sm:mb-4'>
          I'm Sahal V V
        </span>
        <span className='inline-block overflow-hidden max-w-full'>
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'
          />
        </span>
      </h2>
      <p className='text-white text-base sm:text-lg md:text-xl mt-4 sm:mt-6 lg:mt-10'>
        I am a passionate developer with experience in creating dynamic and responsive web applications.
        I specialize in both frontend and backend development, utilizing modern technologies to build
        seamless and efficient user experiences. With a strong background in JavaScript, React, and Node.js,
        I continuously strive to enhance my skills and stay updated with the latest industry trends.
      </p>
      <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4'>
        <a href='/path/to/cv.pdf' download className='bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-300'>
          Download CV
        </a>
        <a href='#contact' className='bg-green-500 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition duration-300 mt-4 sm:mt-0'>
          Contact Me
        </a>
      </div>
    </div>
  );
}
