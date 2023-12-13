import React from 'react';
import { NavLink } from 'react-router-dom';

export const Dropdown = () => {
  return (
    <div className="absolute z-20 hidden mt-2 bg-white border rounded-md shadow-lg group-hover:block w-96 right-0 translate-x-1/3">
      <div>
        <h2 className="text-gray-950">Model menu</h2>
      </div>
      <div>
        <NavLink
          to="/models/all"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          All series
        </NavLink>
        <NavLink
          to="/models/1"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 1 Series</h3>
        </NavLink>
        <NavLink
          to="/models/2"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 2 Series</h3>
        </NavLink>
        <NavLink
          to="/models/3"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 3 Series</h3>
        </NavLink>
        <NavLink
          to="/models/4"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 4 Series</h3>
        </NavLink>
        <NavLink
          to="/models/5"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 5 Series</h3>
        </NavLink>
        <NavLink
          to="/models/5"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 6 Series</h3>
        </NavLink>
        <NavLink
          to="/models/7"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 7 Series</h3>
        </NavLink>
        <NavLink
          to="/models/8"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW 8 Series</h3>
        </NavLink>
        <NavLink
          to="/models/X"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
        >
          <h3>BMW X Series</h3>
        </NavLink>
      </div>
    </div>
  );
};
