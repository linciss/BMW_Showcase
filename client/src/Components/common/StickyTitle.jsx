/* eslint-disable react/prop-types */
import React from 'react';

export const StickyTitle = ({ title, marginLeft }) => {
  return (
    <div
      className={`sm:block py-2 lg:py-0 sticky top-0 h-full px-4 transition-all duration-300 w-2/4 sm:w-1/2 z-20 overflow-hidden`}
      style={{ marginLeft: `${marginLeft / 4}rem` }}
    >
      <h1
        className="text-3xl py-4 sm:py-1 sm:text-6xl lg:text-7xl font-semibold 
        text-bmw-blue"
      >
        {title}
      </h1>
    </div>
  );
};
