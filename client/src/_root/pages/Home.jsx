import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxImg } from '@/Components/common/ParallaxImg';
import bg1 from '#/assets/bg1.png';
import m3 from '#/assets/m3.png';
import { useInView } from 'react-intersection-observer';
import { Description } from '@/Components/common/Description';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref1, inView1] = useInView({
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    threshold: 0,
  });

  return (
    <ParallaxProvider>
      <main className="flex flex-col relative min-h-screen justify-center p-4 md:h-full md:px-8 lg:px-16 max-w-7xl m-auto overflow-hidden">
        <div className={`z-10 ${isLoaded ? 'animate-fadeIn' : ''}`} ref={ref1}>
          <div className="mx-auto max-w-7xl mb-8 sm:mb-48">
            <h1 className="text-center text-8xl sm:text-9xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-bmw-blue via-bmw-dark-blue to-bmw-red animate-text block">
              BMW
            </h1>
            <h1 className="text-center text-7xl sm:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-bmw-blue via-bmw-dark-blue to-bmw-red animate-text block mb-4">
              FANPAGE
            </h1>
          </div>
        </div>
      </main>
      <div className="overflow-hidden flex flex-col relative min-h-screen sm:justify-center p-4 md:h-full md:px-8 lg:px-16 max-w-7xl m-auto">
        <div className="mx-auto max-w-7xl mb-8 sm:mb-48 ">
          <Description containerRef={ref1} inView={inView1} />
        </div>
        <div className="mx-auto max-w-7xl mb-8 sm:mb-48">
          <Description containerRef={ref2} inView={inView2} />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
