// Import necessary libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeleton } from '@/Components/ui/skeleton';
import { CarCard } from '@/Components/common/CarCard';

const Models = () => {
  console.log('Rendering models!');
  window.scrollTo(0, 0);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/models?page=${page}`
      );
      setData((prevData) => [...prevData, ...response.data]);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-wrap sm:px-4 px-0 max-w-7xl m-auto z-10">
      {loading && page === 1 ? (
        <Skeleton className="h-screen" />
      ) : (
        <>
          <h1 className="text-7xl font-semibold text-center text-white w-full">
            BMW Models
          </h1>
          <InfiniteScroll
            dataLength={data.length}
            next={() => setPage(page + 1)}
            hasMore={hasMore}
            loader={<Skeleton className="h-screen" />}
          >
            <div className="flex flex-row flex-wrap m-auto gap-8 justify-center">
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
          </InfiniteScroll>
        </>
      )}
    </main>
  );
};

export default Models;
