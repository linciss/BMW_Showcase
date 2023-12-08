import { Button } from '@/Components/ui/button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Skeleton } from '@/Components/ui/skeleton';

export const Models = () => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api');
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
    <main className="flex flex-wrap sm:px-4 px-4 max-w-7xl m-auto flex-col">
      {loading ? (
        <Skeleton className="h-screen" />
      ) : (
        <>
          <div className="max-w-min mx-auto">
            {data.map((model) => (
              <Link to={`/models/${model.model}`} key={model.id}>
                <Button className="hover:animate-button px-8 py-4 text-lg from-white via-black to-blue-300">
                  {model.model}
                </Button>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
};
