import { Button } from '@/Components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

export const Models = () => {
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
