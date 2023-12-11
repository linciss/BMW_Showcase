/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader } from '../ui/card';
import logo from '#/assets/logo.png';
import React, { useState } from 'react';

export const CarCard = ({ model, description, img }) => {
  const [isMouseOver, setMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <Card
      className="w-[350px] h-[500px] rounded-s-md overflow-hidden shadow-lg m-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader
        className={`flex items-center overflow-hidden relative h-full justify-center bg-zinc-900`}
      >
        <img
          src={img || logo}
          className={`${
            isMouseOver ? 'scale-125' : ''
          } object-fill transition-all duration-700 ease-in-out bg-zinc-900`}
        />
      </CardHeader>

      <CardContent
        className={`-translate-y-1/3 flex flex-col pointer-events-none transition-all duration-500 ease-in-out ${
          isMouseOver ? ' -translate-y-full ' : ''
        } `}
      >
        <div className="flex justify-between items-center p-4 w-full ">
          <div className={`text-3xl font-semibold text-bmw-blue`}>
            {/* Model here */}
            {model}
          </div>
        </div>
        {/* For description shit! */}
        <div className={`  text-white`}>
          <div className="px-4">{description}</div>
        </div>
      </CardContent>
    </Card>
  );
};
