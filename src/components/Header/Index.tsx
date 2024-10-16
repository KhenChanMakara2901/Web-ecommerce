"use client";
import Link from "next/link";
import { useState } from "react";
import { FaMoon, FaSearch } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
const Index = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={closeNavbar}
        aria-hidden="true"
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          openNavbar ? "flex lg:hidden" : "hidden"
        }`}
      />
      <header className="fixed left-0 bg-white dark:bg-dark top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-800 z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <a
              href="#"
              className="text-xl font-semibold text-gray-800 dark:text-gray-200"
            >
              <span className="relative after:absolute after:inset-0 after:rotate-3 after:border after:border-blue-600 text-blue-900 dark:text-white">
                VARCCI
              </span>
              shop
            </a>
          </div>
          <div
            className={`absolute top-full lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-dark lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 lg:transition-none ease-linear ${
              openNavbar
                ? "translate-y-0 rotate-0 opacity-100 visible"
                : "translate-y-10 -rotate-12 opacity-0 invisible lg:visible lg:-rotate-0"
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-800 dark:text-gray-200 lg:w-full lg:justify-center">
              <Link
                href="/"
                className="relative py-2.5 duration-300 ease-linear hover:text-blue-900"
              >
                Home
              </Link>

              <Link
                href="#Product"
                className="relative py-2.5 duration-300 ease-linear hover:text-blue-900"
              >
                Shop
              </Link>

              <Link
                href="#"
                className="relative py-2.5 duration-300 ease-linear hover:text-blue-900"
              >
                Page
              </Link>

              <Link
                href="#"
                className="relative py-2.5 duration-300 ease-linear hover:text-blue-900"
              >
                Blog
              </Link>

              <Link
                href="#"
                className="relative py-2.5 duration-300 ease-linear hover:text-blue-900"
              >
                Contact
              </Link>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              <div className="flex items-center">
                <button
                  onClick={toggleSearch}
                  aria-label="Toggle Search Bar"
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                >
                  <FaSearch
                    size={15}
                    className="text-gray-800 dark:text-gray-200"
                  />
                </button>
                {showSearch && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-600"
                  />
                )}
              </div>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                {darkMode ? (
                  <IoSunny size={20} className="text-blue-800" />
                ) : (
                  <FaMoon
                    size={20}
                    className="text-gray-800 dark:text-gray-200"
                  />
                )}
              </button>
              <a
                href="#"
                className="px-5 py-2.5 rounded-md text-blue-800 dark:text-gray-200 underline flex justify-center"
              >
                Signin
              </a>
              <a
                href="#"
                className="px-5 py-2.5 rounded-md bg-blue-800 text-white flex justify-center duration-300 ease-linear hover:bg-blue-900"
              >
                Signup
              </a>
            </div>
          </div>
          <button
            onClick={toggleNavbar}
            className="text-gray-800 dark:text-gray-200 lg:hidden"
            aria-label="Toggle Navbar"
          >
            {openNavbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Index;
