"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaBars } from "react-icons/fa";
import { IoSunny, IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import SearchButton from "./SearchButton";
const Index = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);
  const closeNavbar = () => setIsNavbarOpen(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };
  const toggleSearch = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        onClick={closeNavbar}
        aria-hidden="true"
        className={`fixed bg-gray-800/40 inset-0 z-30 transition-all duration-300 ${
          isNavbarOpen ? "block" : "hidden"
        }`}
      />
      <header className="w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-800 bg-white dark:bg-dark z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300"
            >
              <span className="relative text-blue-900 dark:text-white after:absolute after:inset-0 after:rotate-3 after:border after:border-blue-600 px-2 py-1 rounded-lg shadow-md hover:after:scale-105 transition-all duration-300">
                VARCCI
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium ml-1">
                shop
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            <ul className="flex gap-6 items-center text-gray-800 dark:text-gray-200">
              {[
                { text: "Home", href: "/" },
                { text: "Shop", href: "/ProductFilter" },
                { text: "Blog", href: "/blog" },
                { text: "Contact", href: "/contact" },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="relative py-2.5 duration-300 ease-linear hover:text-blue-900 dark:hover:text-blue-400"
                >
                  {link.text}
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-1 py-2.5 duration-300 ease-linear hover:text-blue-900 dark:hover:text-blue-400"
                >
                  Page
                </button>
                {isDropdownOpen && (
                  <ul
                    className="absolute -left-5 mt-4 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10"
                    data-aos="fade-down"
                  >
                    {["Services", "About Us", "Careers"].map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={`#${item.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ul>
            <SearchButton isOpen={isOpen} toggleSearch={toggleSearch} />
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {isDarkMode ? (
                <IoSunny size={20} className="text-blue-800" />
              ) : (
                <FaMoon
                  size={20}
                  className="text-gray-800 dark:text-gray-200"
                />
              )}
            </button>
            <Link
              href="/AuthForm"
              className="px-5 py-2.5 rounded-md bg-blue-800 text-white flex justify-center duration-300 ease-linear hover:bg-blue-900"
            >
              Signin
            </Link>
          </div>
          <button
            onClick={toggleNavbar}
            className="flex justify-between lg:hidden  text-gray-800 dark:text-gray-200"
            aria-label="Toggle Navbar"
          >
            {isNavbarOpen ? <IoClose size={24} /> : <FaBars size={24} />}
          </button>
        </nav>
      </header>
      {/* Sidebar for mobile */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-white dark:bg-dark h-full shadow-lg z-50 transform ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col h-full p-5">
          <button
            onClick={toggleNavbar}
            aria-label="Close Navbar"
            className="self-end mb-4"
          >
            <IoClose size={24} className="text-gray-800 dark:text-gray-200" />
          </button>
          <ul className="flex flex-col gap-4">
            {[
              { text: "Home", href: "/" },
              { text: "Shop", href: "/ProductFilter" },
              { text: "Blog", href: "/blog" },
              { text: "Contact", href: "/contact" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-lg py-3 px-4 rounded-md bg-transparent hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-900 dark:hover:text-blue-400 transition duration-300 ease-in-out text-gray-800 dark:text-gray-200"
              >
                {link.text}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 py-3 px-4 text-lg rounded-md bg-transparent hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-900 dark:hover:text-blue-400 transition duration-300 ease-in-out text-gray-800 dark:text-gray-200"
              >
                Page
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 rounded-md z-10" data-aos="fade-down">
                  {["Services", "About Us", "Careers"].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {isDarkMode ? (
                <IoSunny size={20} className="text-blue-800" />
              ) : (
                <FaMoon
                  size={20}
                  className="text-gray-800 dark:text-gray-200"
                />
              )}
            </button>
            <Link
              href="/AuthForm"
              className="px-5 py-2.5 rounded-md bg-blue-800 text-white flex justify-center duration-300 ease-linear hover:bg-blue-900"
            >
              Signin
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Index;
