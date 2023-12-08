import React from 'react';
import { Button } from '@/Components/ui/button';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="flex flex-col sm:justify-center min-h-screen p-4 md:h-full md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl mb-48">
        <h1 className="text-center text-7xl sm:text-9xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white via-black to-blue-300 animate-text block mb-4">
          Are you a BMW fan?
        </h1>
        <h1 className="text-center text-6xl md:text-7xl font-semibold text-white mb-4">
          Are you interested to see what each of BMW models are capable of?
        </h1>
        <div className="max-w-min mx-auto">
          <Link to="/models">
            <Button className="block mx-auto">See the models</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
