import React from 'react';
import { ParallaxImg } from './ParallaxImg';
import bg1 from '#/assets/bg1.png';
import m3 from '#/assets/m3.png';

export const Description = ({ containerRef, inView }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row ${
        inView ? 'animate-fadeInBottom' : 'opacity-0'
      }`}
      ref={containerRef}
    >
      <div className="w-full sm:w-3/4">
        <ParallaxImg bg={bg1} fg={m3} height="300px" mt="0px" />
      </div>
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white mb-4 transition-all duration-500 ease-in-out">
        Are you interested to see what each of BMW models are capable of?
      </h1>
    </div>
  );
};
