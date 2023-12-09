import React, { useEffect, useState } from 'react';
import { Button } from '@/Components/ui/button';
import { Link } from 'react-router-dom';
import Car from '#/assets/car.gif';
import { ParallaxImg } from '@/Components/common/ParallaxImg';
import m3 from '#/assets/m3.png';
import logo from '#/assets/logo.png';
import bg1 from '#/assets/bg1.png';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxVisibility = scrollPosition > 1;

  return (
    <ParallaxProvider>
      <main
        className={`flex flex-col relative min-h-screen sm:justify-center p-4 md:h-full md:px-8 lg:px-16 max-w-7xl m-auto`}
      >
        <div className={`z-10 ${isLoaded ? 'animate-fadeIn' : ''} `}>
          <div className="mx-auto max-w-7xl mb-8 sm:mb-48">
            <h1 className="text-center text-8xl sm:text-9xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block">
              BMW
            </h1>
            <h1 className="text-center text-6xl sm:text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block mb-4">
              FANPAGE
            </h1>
          </div>
        </div>
        <div
          className={`flex ${
            parallaxVisibility
              ? 'animate-fadeInBottom'
              : 'opacity-0 animate-fadeOut '
          } `}
        >
          <div className={`w-3/4 `}>
            <ParallaxImg bg={bg1} fg={m3} height="300px" mt="0px" />
          </div>
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl font-semibold text-white mb-4 transition-all duration-500 ease-in-out">
            Are you interested to see what each of BMW models are capable of?
          </h1>
        </div>
      </main>
    </ParallaxProvider>
  );
};

export default Home;

/*  */
//           <div className="max-w-min mx-auto">
//           <Link to="/models">
//             <Button className="hover:animate-button px-6 py-3 text-lg sm:text-xl bg-red-800">
//               <p className="bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block">
//                 YES! Take me to the models!
//               </p>
//             </Button>
//           </Link>
//         </div>
// }
