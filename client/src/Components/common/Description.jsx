/* eslint-disable react/prop-types */
import React from 'react';
import { ParallaxImg } from './ParallaxImg';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const Description = ({ id, bg, fg, text, series }) => {
  if (!fg) console.log('No fg');
  console.log('Rendering Description!' + fg);
  // observes wether or not the container is in view
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const isEven = id % 2 === 0;
  return (
    <div
      ref={ref}
      className={`flex flex-col sm:flex-row ${
        inView ? 'animate-fadeInBottom' : `opacity-0 `
      }
      `}
    >
      {isEven ? (
        <>
          <div className="w-full sm:w-3/4">
            <ParallaxImg
              bg={bg}
              fg={fg}
              height="300px"
              mt="0px"
              scale={-1}
              text={series}
            />
          </div>
          <div className="w-full sm:w-3/4">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-4 transition-all duration-500 ease-in-out">
              {text}
            </h1>
            <div className="text-center">
              <Link to="/models/all">
                <Button className="w-1/2 text-bmw-blue bg-bmw-dark-blue">
                  Check out the models!
                </Button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-semibold text-black mb-4 transition-all duration-500 ease-in-out">
            {text}
          </h1>
          <div className="w-full sm:w-3/4">
            <ParallaxImg
              bg={bg}
              fg={fg}
              height="300px"
              mt="0px"
              scale={1}
              text={series}
            />
          </div>
        </>
      )}
    </div>
  );
};
