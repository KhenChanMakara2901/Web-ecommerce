"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Switch } from "@headlessui/react"; // Using Headless UI for the toggle
import Image from "next/image";
import LogoShop from "@/public/Logo/LogoShop.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link className="text-gray-900 dark:text-white" href="/">
            <Image
              src={LogoShop}
              width={75}
              height={75}
              quality={75}
              alt="Logo Shop"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-1/2 border rounded-xl text-gray-700 dark:text-gray-200 dark:bg-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center md:flex space-x-6">
          <Link
            href="/"
            className={`hover:text-blue-600 ${
              pathname === "/"
                ? "text-blue-600"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`hover:text-blue-600 ${
              pathname === "/about"
                ? "text-blue-600"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className={`hover:text-blue-600 ${
              pathname === "/services"
                ? "text-blue-600"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className={`hover:text-blue-600 ${
              pathname === "/contact"
                ? "text-blue-600"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            CONTACT
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            className={`${
              theme === "dark" ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 ml-10 items-center rounded-full`}
          >
            <span
              className={`${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-full border rounded-md text-gray-700 dark:text-gray-200 dark:bg-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link href="/">
              <li
                onClick={() => setIsOpen(false)}
                className={`block ${
                  pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                HOME
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setIsOpen(false)}
                className={`block ${
                  pathname === "/about"
                    ? "text-blue-600"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                ABOUT
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={() => setIsOpen(false)}
                className={`block ${
                  pathname === "/services"
                    ? "text-blue-600"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                SERVICE
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setIsOpen(false)}
                className={`block ${
                  pathname === "/contact"
                    ? "text-blue-600"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                CONTACT
              </li>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
