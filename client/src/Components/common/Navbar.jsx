import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '#/assets/logo.png';

export const Navbar = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];
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
    console.log('PRESSED!!! :>> ');
  };

  return (
    <div
      className={`bg-bmw-dark-blue top-0 right-0 left-0 sticky ${
        isOpen ? 'z-50' : 'z-20'
      }`}
    >
      <header
        className={`navbar  flex justify-between items-center sm:px-16 px-14 max-w-7xl mx-auto  `}
      >
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-20 w-20 p-2" />
        </NavLink>
        {(windowWidth > 850 || isOpen) && (
          <nav
            className={`${
              isOpen
                ? 'visible flex fixed inset-0 bg-bmw-dark-blue flex-col justify-center z-50'
                : 'hidden'
            } md:flex md:items-center md:text-lg md:gap-7 z-50 `}
          >
            <NavLink
              to="/"
              className={` rounded-xl  text-2xl p-2 text-center ${
                path === '' || path === undefined
                  ? 'text-white bg-bmw-blue rounded-xl'
                  : 'text-bmw-blue'
              } transition-all duration-300 ease-in-out`}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <div className="relative group">
              <Link
                to="/models"
                className={`models rounded-xl  text-2xl p-2 text-center relative cursor-default ${
                  path === 'models'
                    ? 'text-white bg-bmw-blue '
                    : 'text-bmw-blue'
                } transition-all duration-300 ease-in-out cursor-pointer`}
                onClick={toggleMenu}
              >
                Models
              </Link>
            </div>
            <NavLink
              to="/about"
              className={`rounded-xl text-2xl p-2 text-center ${
                path === 'about' ? 'text-white bg-bmw-blue ' : 'text-bmw-blue'
              } transition-all duration-300 ease-in-out`}
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
    </div>
  );
};
