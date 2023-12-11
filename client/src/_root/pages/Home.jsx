import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Description } from '@/Components/common/Description';
import axios from 'axios';
import { Skeleton } from '@/Components/ui/skeleton';
import { Notifier } from '@/Components/common/Notifier';

const Home = () => {
  window.scrollTo(0, 0);
  console.log('Rendering home!');
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/description'
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log('Fetching data! :>> ');
  }, []);

  return (
    <ParallaxProvider>
      <main className="flex flex-col relative min-h-screen justify-center p-4 md:h-full md:px-8 lg:px-16 max-w-7xl m-auto overflow-hidden">
        <div className={`z-10 ${!loading ? 'animate-fadeIn' : ''}`}>
          <div className="mx-auto max-w-7xl mb-8 sm:mb-48">
            <h1 className="text-center text-8xl sm:text-9xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-bmw-blue via-bmw-dark-blue to-bmw-red animate-text block">
              BMW
            </h1>
            <h1 className="text-center text-7xl sm:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-bmw-blue via-bmw-dark-blue to-bmw-red animate-text block mb-4">
              FANPAGE
            </h1>
          </div>
        </div>
        <div className="absolute sm:bottom-32 bottom-28 right-1/2 translate-x-1/2">
          <Notifier />
        </div>
      </main>
      {loading ? (
        <Skeleton className="h-screen" />
      ) : (
        <div className="overflow-hidden flex flex-col relative min-h-screen sm:justify-center p-4 md:h-full md:px-8 lg:px-16 max-w-7xl m-auto gap-28">
          {data.map((desc, i) => (
            <Description key={i} {...desc} />
          ))}
        </div>
      )}
    </ParallaxProvider>
  );
};

export default Home;
