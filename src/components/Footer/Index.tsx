import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
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
            <p className="mt-2 text-sm">Your go-to place for trendy fashion!</p>
          </div>
          {/* Links Section */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div>
              <h2 className="font-semibold text-lg">Follow Us</h2>
              <ul className="mt-2 flex space-x-4">
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-blue-600"
                  >
                    <FaFacebookF size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-pink-500"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-blue-400"
                  >
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Pinterest"
                    className="hover:text-red-600"
                  >
                    <FaPinterestP size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-lg">Subscribe to our newsletter</h2>
          <div className="flex flex-col md:flex-row items-center mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-1/3 p-2 rounded-l-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
            <button className="mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} FashionHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
