"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Switch, Menu } from "@headlessui/react"; // Using Headless UI for the toggle
import Image from "next/image";
import LogoShop from "@/Assets/Logo/LogoShop.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

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
            className="px-4 py-2 w-1/2 border rounded-xl text-gray-700 dark:text-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center md:flex space-x-6 font-semibold">
          <Link
            href="/"
            className={`hover:text-pink-600 ${
              pathname === "/"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            HOME
          </Link>
          {/* About Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button
              className={`hover:text-pink-600 ${
                pathname.startsWith("/about")
                  ? "text-pink-600"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              ABOUT
            </Menu.Button>
            <Menu.Items className="absolute mt-2 w-48 origin-top-right bg-white dark:bg-gray-900 rounded-md shadow-lg">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about/mission"
                      className={`block px-4 py-2 text-sm ${
                        active
                          ? "bg-pink-500 text-white"
                          : "text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      Mission
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about/team"
                      className={`block px-4 py-2 text-sm ${
                        active
                          ? "bg-pink-500 text-white"
                          : "text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      Our Team
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          {/* Services Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button
              className={`hover:text-pink-600 ${
                pathname.startsWith("/services")
                  ? "text-pink-600"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              SERVICES
            </Menu.Button>
            <Menu.Items className="absolute mt-2 w-48 origin-top-right bg-white dark:bg-gray-900 rounded-md shadow-lg">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/services/web"
                      className={`block px-4 py-2 text-sm ${
                        active
                          ? "bg-pink-500 text-white"
                          : "text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      Web Development
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/services/mobile"
                      className={`block px-4 py-2 text-sm ${
                        active
                          ? "bg-pink-500 text-white"
                          : "text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      Mobile Development
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          <Link
            href="/contact"
            className={`hover:text-pink-600 ${
              pathname === "/contact"
                ? "text-pink-600"
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
              theme === "dark" ? "bg-pink-600" : "bg-gray-300"
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
        <div className="md:hidden bg-white dark:bg-gray-900 font-extrabold">
          <div className="px-6 pt-6 pb-8 space-y-6 transition-all duration-300 ease-in-out transform">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-full border rounded-md text-gray-700 dark:text-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ul className="space-y-4">
              <Link href="/">
                <li
                  onClick={() => setIsOpen(false)}
                  className={`block text-center text-lg hover:text-pink-600 transition-colors duration-200 ${
                    pathname === "/"
                      ? "text-pink-600"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  HOME
                </li>
              </Link>
              <li
                className="block text-center text-lg cursor-pointer hover:text-pink-600 transition-colors duration-200"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                ABOUT
              </li>
              {isAboutOpen && (
                <ul className="space-y-2 pl-6 text-center">
                  <li>
                    <Link
                      href="/about/company"
                      className="hover:text-pink-600 text-gray-800 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/team"
                      className="hover:text-pink-600 text-gray-800 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              )}
              <li
                className="block text-center text-lg cursor-pointer hover:text-pink-600 transition-colors duration-200"
                onClick={() => setIsServiceOpen(!isServiceOpen)}
              >
                SERVICES
              </li>
              {isServiceOpen && (
                <ul className="space-y-2 pl-6 text-center">
                  <li>
                    <Link
                      href="/services/web"
                      className="hover:text-pink-600 text-gray-800 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/mobile"
                      className="hover:text-pink-600 text-gray-800 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Mobile Development
                    </Link>
                  </li>
                </ul>
              )}
              <Link href="/contact">
                <li
                  onClick={() => setIsOpen(false)}
                  className={`block text-center text-lg hover:text-pink-600 transition-colors duration-200 ${
                    pathname === "/contact"
                      ? "text-pink-600"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
