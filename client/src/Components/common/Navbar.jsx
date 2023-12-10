import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '#/assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header className="navbar bg-zinc-700 flex justify-between items-center sm:px-16 px-14 max-w-7xl mx-auto top-0 bg-transparent z-20 right-0 left-0 sticky">
      <NavLink to="/">
        <img src={logo} alt="logo" className="h-20 w-20 p-2" />
      </NavLink>
      <button
        className={`hamburger  ${
          window.innerWidth < 850 ? 'visible z-50' : 'hidden'
        } `}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <nav
        className={`${
          isOpen
            ? 'flex fixed inset-0 bg-zinc-700  flex-col justify-center'
            : 'hidden'
        }  md:flex md:items-center md:text-lg md:gap-7 z-40`}
      >
        <NavLink
          to="/"
          className="text-2xl p-2 text-center text-bmw-blue"
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/models"
          className="text-2xl p-2 text-center text-bmw-blue"
          onClick={toggleMenu}
        >
          Models
        </NavLink>
        <NavLink
          to="/about"
          className="text-2xl p-2 text-center text-bmw-blue"
          onClick={toggleMenu}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};
