import React, { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { ParallaxImg } from '@/Components/common/ParallaxImg';
import bg1 from '#/assets/bg1.png';
import m3 from '#/assets/m3.png';
import { useInView } from 'react-intersection-observer';

const Description = ({ refs, inView }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row ${
        inView ? 'animate-fadeInBottom' : 'opacity-0'
      }`}
      ref={refs}
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

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <ParallaxProvider>
      <main className="flex flex-col relative min-h-screen sm:justify-center p-4 md:h-full md:px-8 lg:px-16 max-w-7xl m-auto">
        <div className={`z-10 ${isLoaded ? 'animate-fadeIn' : ''}`} ref={ref}>
          <div className="mx-auto max-w-7xl mb-8 sm:mb-48">
            <h1 className="text-center text-8xl sm:text-9xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block">
              BMW
            </h1>
            <h1 className="text-center text-7xl sm::text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block mb-4">
              FANPAGE
            </h1>
          </div>
        </div>
      </main>
      <div className="flex flex-col relative min-h-1/2 sm:justify-center p-4 md:h-full md:px-8 lg:px-16 max-w-7xl m-auto">
        <Description refs={ref} inView={inView} />
      </div>
    </ParallaxProvider>
  );
};

export default Home;
