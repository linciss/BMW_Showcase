/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader } from '../ui/card';
import logo from '#/assets/logo.png';
import React from 'react';

export const CarCard = ({ model, description, img }) => {
  return (
    <Card className="w-[350px] h-[500px] rounded-s-md overflow-hidden shadow-lg m-4 border-2 border-bmw-blue transition-all duration-500 ease-in-out bg-slate-200 group hover:brightness-90">
      <CardHeader
        className={`flex items-center overflow-hidden relative h-full justify-center`}
      >
        <img
          src={img || logo}
          className={`group-hover:scale-125 object-fill transition-all duration-700 ease-in-out`}
        />
      </CardHeader>

      <CardContent
        className={`-translate-y-1/3 flex flex-col pointer-events-none transition-all duration-500 ease-in-out group-hover:-translate-y-full `}
      >
        <div className="flex justify-between items-center p-4 w-full ">
          <div className={`text-3xl font-semibold text-bmw-blue`}>
            {/* Model here */}
            {model}
          </div>
        </div>
        {/* For description shit! */}
        <div className={`  text-black group-hover:brightness-100`}>
          <div className="px-4">{description}</div>
        </div>
      </CardContent>
    </Card>
  );
};
