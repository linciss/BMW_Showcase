import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/Components/ui/button';
import { Link } from 'react-router-dom';
import Car from '#/assets/car.gif';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const carRef = useRef(null);
  const [display, setDisplay] = useState('hidden');

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const car = carRef.current;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;

      const translationFactor = (scrollPercentage / 100) * window.innerWidth;

      if (
        scrollPosition === 0 ||
        translationFactor > window.innerWidth - car.offsetWidth * 0.5
      ) {
        setDisplay('hidden');
        return;
      } else if (
        scrollPosition > 0 &&
        !(translationFactor > window.innerWidth - car.offsetWidth * 0.5)
      ) {
        setDisplay('visible');
      }

      car.style.transform = `translateY(${scrollPosition}px) translateX(${translationFactor}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main
      className={`flex flex-col relative overflow-x-hidden sm:justify-center min-h-screen p-4 md:h-full md:px-8 lg:px-16 ${
        isLoaded ? 'animate-fadeIn' : ''
      }`}
    >
      <div className="z-10">
        <div className="mx-auto max-w-7xl mb-8 sm:mb-48">
          <h1 className="text-center text-6xl sm:text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block mb-4">
            Are you a BMW fan?
          </h1>
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl font-semibold text-white mb-4 transition-all duration-500 ease-in-out">
            Are you interested to see what each of BMW models are capable of?
          </h1>

          <div className="max-w-min mx-auto">
            <Link to="/models">
              <Button className="hover:animate-button px-6 py-3 text-lg sm:text-xl bg-red-800">
                <p className="bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block">
                  YES! Take me to the models!
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-1/3 transform lg:-translate-x-80 -translate-x-36 ${display}`}
      >
        <img ref={carRef} src={Car} alt="car" className="car lg:w-1/4 w-1/2" />
      </div>
    </main>
  );
};

export default Home;
