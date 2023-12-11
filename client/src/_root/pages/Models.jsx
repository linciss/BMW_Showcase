import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Skeleton } from '@/Components/ui/skeleton';
import { CarCard } from '@/Components/common/CarCard';

const Models = () => {
  window.scrollTo(0, 0);
  console.log('Rendering models!');
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/models');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-wrap sm:px-4 px-0 max-w-7xl m-auto z-10">
      {loading ? (
        <Skeleton className="h-screen" />
      ) : (
        <>
          <div className="flex flex-row flex-wrap m-auto gap-8  justify-center">
            {data.map((model) => (
              <Link key={model.slug} to={`/models/${model.slug}`}>
                <CarCard
                  model={model.slug}
                  description={model.description}
                  img={model.image}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Models;
