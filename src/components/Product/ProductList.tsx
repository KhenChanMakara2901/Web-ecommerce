"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MenuItem } from "@/src/types/MenuItem";
import { TbShoppingCartFilled } from "react-icons/tb";
import Image from "next/image";
import { ProductListProps } from "@/src/types/ ProductListProps";

export const ProductList: React.FC<ProductListProps> = ({
  items,
  handleOrderNow,
}) => {
  const [visibleItemsCount, setVisibleItemsCount] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleToggleItems = () => {
    if (isExpanded) {
      setVisibleItemsCount(8);
    } else {
      setVisibleItemsCount(items.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-6 px-2 sm:px-4">
      {items.slice(0, visibleItemsCount).map((item: MenuItem, index) => (
        <div
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src={item.image}
            alt={`Product image of ${item.name}`}
            width={400}
            height={240}
            className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            quality={100}
          />
          <div className="p-4">
            <h2
              className="text-2xl text-gray-950 dark:text-white font-bold mb-2 truncate"
              title={item.name}
            >
              {item.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-100 text-xl font-extrabold mb-4">
              Price: {item.price}$
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-yellow-500 font-semibold">
                Rating: {item.rating}⭐
              </span>
              <button
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full md:w-auto"
                onClick={() => handleOrderNow(item)}
                aria-label={`Order ${item.name}`}
              >
                <TbShoppingCartFilled className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-sm md:text-base">Order Now</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      {items.length > 4 && (
        <div className="col-span-full text-center mt-4">
          <button
            className="text-blue-500 font-semibold"
            onClick={handleToggleItems}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
      {items.length === 0 && (
        <p className="text-center text-gray-500 col-span-full">
          No items available in this category
        </p>
      )}
    </div>
  );
};
