import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="navbar flex justify-between items-center sm:px-16 px-8 py-4 max-w-7xl mx-auto top-0 bg-transparent z-10 right-0 left-0 sticky ">
      <NavLink to="/">
        <img
          src="./public/assets/logo.png"
          alt="logo"
          className="h-20 w-20 p-2"
        />
      </NavLink>
      <nav className="flex justify-end items-center text-lg gap-7">
        <NavLink to="/models" className="text-2xl p-2 text-center ">
          Models
        </NavLink>
        <NavLink to="/about" className="text-2xl p-2 text-center ">
          About
        </NavLink>
      </nav>
    </header>
  );
};
