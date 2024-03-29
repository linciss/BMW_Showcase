/* eslint-disable react/prop-types */
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export const ParallaxImg = (props) => {
  // console.log('Rendering paralaxImg!');
  const background = {
    image: props.bg,
    speed: -20,
  };
  const foreground = {
    image: props.fg,
    speed: -10,
  };

  return (
    <ParallaxBanner
      layers={[background, foreground]}
      style={{
        height: props.height,
        marginTop: props.mt,
      }}
      className="aspect-[2/1] rounded-xl shadow-xl"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-bold">{props.text}</h1>
      </div>
    </ParallaxBanner>
  );
};
