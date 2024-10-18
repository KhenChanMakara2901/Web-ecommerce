"use client";
import React, { useState } from "react";
import Flag from "react-world-flags";
import { FaShoppingCart } from "react-icons/fa";
import CartPopup from "./CartPopup";
import AccountPopup from "./AccountPopup";

const Index = () => {
  const [language, setLanguage] = useState("en");
  const [flagCode, setFlagCode] = useState("GB");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    if (selectedLang === "en") {
      setFlagCode("GB");
    } else if (selectedLang === "fr") {
      setFlagCode("FR");
    } else if (selectedLang === "km") {
      setFlagCode("KH");
    }
  };
  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleAccountPopup = () => {
    setIsAccountOpen(!isAccountOpen);
  };
  return (
    <>
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-xs sm:text-sm md:block">
            FREE SHIPPING ON ALL U.S ORDERS OVER $50
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-1 mr-14">
              <Flag code={flagCode} height="15" />
              <select
                value={language}
                onChange={handleLanguageChange}
                className="ml-1 bg-transparent text-white outline-none text-xs sm:text-sm cursor-pointer"
              >
                <option value="en">ENGLISH</option>
                <option value="fr">FRENCH</option>
                <option value="km">KHMER</option>
              </select>
            </div>
            <div
              className="hidden sm:block text-xs sm:text-sm cursor-pointer"
              onClick={toggleAccountPopup} // Handle account click
            >
              MY ACCOUNT
            </div>
            <div className="relative cursor-pointer" onClick={toggleCartPopup}>
              <FaShoppingCart className="text-lg sm:text-xl" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-xs rounded-full px-1.5">
                0
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