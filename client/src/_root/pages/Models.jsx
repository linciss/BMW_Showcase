import { Button } from '@/Components/ui/button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      <Link to="/models/e36">
        <Button>BMW e36</Button>
      </Link>
      <Link to="/models/e46">
        <Button>BMW e46</Button>
      </Link>
    </main>
  );
};
