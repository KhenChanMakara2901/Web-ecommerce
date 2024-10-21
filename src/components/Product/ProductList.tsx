"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MenuItem } from "@/src/types/MenuItem";

interface ProductListProps {
  items: MenuItem[];
  handleOrderNow: (product: MenuItem) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  items,
  handleOrderNow,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-6 px-2 sm:px-4">
      {items.length > 0 ? (
        items.map((item: MenuItem, index) => (
          <div
            key={item.id}
            data-aos="fade-up" // AOS animation
            data-aos-delay={index * 100} // Stagger animation delay
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <picture>
              <img
                src={item.image || "/path/to/placeholder-image.png"}
                alt={`Product image of ${item.name}`}
                className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </picture>
            <div className="p-4">
              <h2
                className="text-2xl text-gray-950 dark:text-white font-bold mb-2 truncate"
                title={item.name}
              >
                {item.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-100 text-xl font-extrabold mb-4">
                Price: {item.price}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-yellow-500 font-semibold">
                  Rating: {item.rating}⭐
                </span>
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  onClick={() => handleOrderNow(item)}
                  aria-label={`Order ${item.name}`}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No items available in this category
        </p>
      )}
    </div>
  );
};
