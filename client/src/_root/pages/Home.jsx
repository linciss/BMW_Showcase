import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div>Hello world</div>
      <Link to="/model/e36">
        <button>BMW e36</button>
      </Link>
      <Link to="/model/e46">
        <button>BMW e46</button>
      </Link>
    </>
  );
};
