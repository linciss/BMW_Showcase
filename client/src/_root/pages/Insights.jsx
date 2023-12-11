import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Showcase from '../../Components/threeJS/Showcase';
import { Skeleton } from '@/components/ui/skeleton';
import { Canvas } from '@react-three/fiber';
import { StickyTitle } from '@/Components/common/StickyTitle';

const Insights = () => {
  const { slug } = useParams();
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setMarginLeft(window.scrollY > 20 ? 32 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      <StickyTitle title={`BMW ${slug}`} marginLeft={marginLeft} />
      <div className="flex flex-wrap sm:px-4 px-4 max-w-7xl m-auto flex-col">
        <Suspense
          fallback={
            <Skeleton className="w-full h-[75vh] bg-slate-600 rounded-sm" />
          }
        >
          <div className="w-full h-[75vh] rounded-xl">
            <Canvas className="rounded-xl">
              <Showcase path={slug} />
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
            BMW {slug}
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
