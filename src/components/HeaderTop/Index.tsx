"use client";
import React, { useState } from "react";
import Flag from "react-world-flags";
import {
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/src/lib/store";
import CartPopup from "./CartPopup";
import AccountPopup from "./AccountPopup";
import Link from "next/link";
const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => (
  <div className="relative flex items-center group">
    {children}
    <span className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform group-hover:translate-y-1">
      {text}
    </span>
  </div>
);

const Index = () => {
  const [language, setLanguage] = useState("en");
  const [flagCode, setFlagCode] = useState("GB");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const cartItemCount = useSelector((state: RootState) => state.cart.itemCount);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setFlagCode(selectedLang === "en" ? "GB" : "KH");
  };

  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleAccountPopup = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <Flag code={flagCode} height="10" className="sm:height-12" />
            <select
              value={language}
              onChange={handleLanguageChange}
              className="ml-1 bg-transparent text-white outline-none text-xs sm:text-sm cursor-pointer"
            >
              <option value="en">ENGLISH</option>
              <option value="km">KHMER</option>
            </select>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-end space-x-4 md:space-x-6">
            <Tooltip text="Facebook">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <FaFacebookF className="text-lg sm:text-xl" />
              </Link>
            </Tooltip>
            <Tooltip text="Twitter">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <FaTwitter className="text-lg sm:text-xl" />
              </Link>
            </Tooltip>
            <Tooltip text="Instagram">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <FaInstagram className="text-lg sm:text-xl" />
              </Link>
            </Tooltip>
            <Tooltip text="Telegram">
              <Link
                href="https://web.telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                <FaTelegram className="text-lg sm:text-xl" />
              </Link>
            </Tooltip>
          </div>

          <div className="flex items-center space-x-4">
            <div
              className="cursor-pointer hover:text-gray-300 transition-colors duration-200"
              onClick={toggleAccountPopup}
            >
              <FaUser className="text-lg sm:text-xl" />
            </div>
            <div className="relative cursor-pointer" onClick={toggleCartPopup}>
              <FaShoppingCart className="text-lg sm:text-xl" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-xs rounded-full px-1.5">
                {cartItemCount}
              </span>
            </div>
          </div>
        </div>
      </header>
      <CartPopup isOpen={isCartOpen} onClose={toggleCartPopup} />
      <AccountPopup isOpen={isAccountOpen} onClose={toggleAccountPopup} />
    </>
  );
};

export default Index;
