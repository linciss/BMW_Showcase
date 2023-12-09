import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Showcase from '../../Components/threeJS/Showcase';
import { Skeleton } from '@/components/ui/skeleton';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const Insights = () => {
  const { modelPath } = useParams();
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMarginLeft(32);
      } else {
        setMarginLeft(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="max-w-7xl m-auto">
      {/* SHOWS THE MODEL FOR CONVENIENCE */}
      <div
        className={`model sticky top-0 ml-${marginLeft} p-4 hidden sm:block transition-all duration-300 w-1/2`}
      >
        <h1
          className="text-7xl font-semibold bg-gradient-to-r bg-clip-text text-transparent
         from-white  to-blue-300 animate-text"
        >
          BMW {modelPath}
        </h1>
      </div>
      <div className="flex flex-wrap sm:px-4 px-4 max-w-7xl m-auto flex-col">
        <Suspense
          fallback={<Skeleton className="w-full h-[75vh] bg-slate-600" />}
        >
          <div className="w-full h-[75vh]">
            <Canvas className="z-20">
              <Showcase path={modelPath} />
            </Canvas>
          </div>
        </Suspense>
      </div>
      <main className="pb-8">
        <div className={`p-4 block sm:hidden`}>
          <h1
            className="text-6xl font-semibold bg-gradient-to-r bg-clip-text
           text-transparent from-white via-black to-blue-300 animate-text"
          >
            BMW {modelPath}
          </h1>
        </div>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
        <h1 className="text-7xl font-semibold text-center text-black">
          Insights
        </h1>
      </main>
    </main>
  );
};

export default Insights;
