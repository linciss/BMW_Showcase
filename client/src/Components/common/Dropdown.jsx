import React from 'react';
import { NavLink } from 'react-router-dom';

export const Dropdown = () => {
  return (
    <div className="absolute z-20 hidden mt-2 bg-white border rounded-md shadow-lg group-hover:block">
      <h2 className="text-center">Models menu</h2>
      <div>
        <NavLink
          to="/models/1"
          className="block px-4 py-2 text-sm text-gray-700"
        >
          <h3>BMW 1 Series</h3>
        </NavLink>
        <NavLink
          to="/models/2"
          className="block px-4 py-2 text-sm text-gray-700"
        >
          <h3>BMW 2 Series</h3>
        </NavLink>
        <NavLink
          to="/models/3"
          className="block px-4 py-2 text-sm text-gray-700"
        >
          <h3>BMW 3 Series</h3>
        </NavLink>
        <NavLink
          to="/models/5"
          className="block px-4 py-2 text-sm text-gray-700"
        >
          Model 2
        </NavLink>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};
