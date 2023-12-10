import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '#/assets/logo.png';

export const Navbar = () => {
  console.log(' Renderung nav bar :>> ');
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (isOpen && window.innerWidth > 850) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) setIsOpen(!isOpen);
  };

  return (
    <header
      className={`navbar bg-zinc-700 flex justify-between items-center 
    sm:px-16 px-14 max-w-7xl mx-auto top-0 bg-transparent  right-0 left-0 sticky ${
      isOpen ? 'z-50' : 'z-20'
    }`}
    >
      <NavLink to="/">
        <img src={logo} alt="logo" className="h-20 w-20 p-2" />
      </NavLink>
      {(windowWidth > 850 || isOpen) && (
        <nav
          className={`${
            isOpen
              ? 'visible flex fixed inset-0 bg-zinc-800 flex-col justify-center z-50'
              : 'hidden'
          } md:flex md:items-center md:text-lg md:gap-7 z-45 }}`}
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
      )}
      {windowWidth <= 850 && (
        <button
          className={`hamburger z-50 top-5 right-5`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
    </header>
  );
};
