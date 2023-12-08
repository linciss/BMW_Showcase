import { Button } from '@/Components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

export const Models = () => {
  return (
    <main>
      <Link to="/models/e36">
        <Button>BMW e36</Button>
      </Link>
      <Link to="/models/e46">
        <Button>BMW e46</Button>
      </Link>
    </main>
  );
};
