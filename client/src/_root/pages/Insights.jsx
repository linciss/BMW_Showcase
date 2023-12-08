import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Showcase from '../../Components/threeJS/Showcase';
import { Skeleton } from '@/components/ui/skeleton';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
export const Insights = () => {
  const { modelPath } = useParams();
  const [marginLeft, setMarginLeft] = useState(0);

  // Offsets the model name when scrolling so it looks better
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.navbar');

      if (window.scrollY > navBar.offsetHeight) {
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
      <div className={`model sticky top-0 ml-${marginLeft} p-4`}>
        <h1 className="text-7xl font-semibold text-black">BMW {modelPath}</h1>
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
