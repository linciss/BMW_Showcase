import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export const ParallaxImg = (props) => {
  return (
    <ParallaxBanner
      layers={[
        { image: props.bg, speed: -20 },

        { image: props.fg, speed: -10, width: '20%', height: '20%' },
      ]}
      style={{ height: props.height, marginTop: props.mt }}
      className="aspect-[2/1]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-bold">M3</h1>
      </div>
    </ParallaxBanner>
  );
};
