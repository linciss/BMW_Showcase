import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '#/assets/logo.png';

export const Navbar = () => {
  console.log('Rendering Navbar!');
  return (
    <header className="navbar  bg-zinc-700 flex justify-between items-center sm:px-16 px-4 max-w-7xl mx-auto top-0 bg-transparent z-20 right-0 left-0 sticky ">
      <NavLink to="/">
        <img src={logo} alt="logo" className="h-20 w-20 p-2" />
      </NavLink>
      <nav className="flex justify-end items-center text-lg gap-7">
        <NavLink to="/" className="text-2xl p-2 text-center text-bmw-blue">
          Home
        </NavLink>
        <NavLink
          to="/models"
          className="text-2xl p-2 text-center text-bmw-blue"
        >
          Models
        </NavLink>
        <NavLink to="/about" className="text-2xl p-2 text-center text-bmw-blue">
          About
        </NavLink>
      </nav>
    </header>
  );
};
